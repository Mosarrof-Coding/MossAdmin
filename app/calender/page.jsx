"use client";

import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  isSameDay,
  parse,
} from "date-fns";
import { ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [eventText, setEventText] = useState("");

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4 px-4">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        <MoveLeft className="active:opacity-40 hover:text-destructive cursor-pointer" />
      </button>
      <h2 className="font-semibold text-xl">
        {format(currentMonth, "MMMM yyyy")}
      </h2>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        <MoveRight className="active:opacity-40 hover:text-destructive cursor-pointer" />
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      days.push(
        <div className="font-medium text-muted-foreground text-center" key={i}>
          {format(day, dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    const dateFormat = "d";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const formattedDate = format(day, "yyyy-MM-dd");

        const dayEvents = events[formattedDate] || [];

        days.push(
          <div
            key={day}
            className={`p-2 border rounded-lg h-14 md:h-24 cursor-pointer relative overflow-hidden
              ${
                !isSameMonth(day, monthStart)
                  ? "bg-muted text-muted-foreground"
                  : "bg-card text-foreground"
              }
              ${isSameDay(day, new Date()) && "border-border border-2"}
            `}
            onClick={() => {
              setSelectedDate(cloneDay);
              setEventText("");
              setShowModal(true);
            }}
          >
            <div className="font-medium text-sm">{format(day, dateFormat)}</div>
            {dayEvents.map((event, index) => (
              <div
                key={index}
                className="bg-blue-200 mt-1 px-1 rounded text-blue-900 text-xs truncate"
              >
                {event}
              </div>
            ))}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="gap-1 grid grid-cols-7 mb-1" key={day}>
          {days}
        </div>
      );
      days = [];
    }

    return <div>{rows}</div>;
  };

  const handleAddEvent = () => {
    if (!eventText) return;
    const dateKey = format(selectedDate, "yyyy-MM-dd");
    setEvents((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), eventText],
    }));
    setShowModal(false);
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 mx-auto px-4 py-6 md:py-12 w-full">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h3 className="font-semibold text-primary text-2xl md:text-3xl">
            Calender
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/"} className="font-bold text-lg">
            Home
          </Link>
          <ChevronRight size={18} />
          <h3 className="text-primary text-lg">Calender</h3>
        </div>
      </div>

      <div className="bg-white dark:bg-background shadow p-4 rounded-xl">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40">
          <div className="space-y-4 bg-white dark:bg-background shadow-lg p-6 rounded-xl w-[90%] max-w-md">
            <h3 className="font-semibold text-lg">
              Add Event - {format(selectedDate, "do MMM yyyy")}
            </h3>
            <input
              type="text"
              placeholder="Event description"
              className="bg-muted p-2 border rounded-lg w-full"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-muted px-4 py-2 rounded-lg text-muted-foreground"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEvent}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
