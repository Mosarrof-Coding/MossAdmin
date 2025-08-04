"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
  Bell,
  Settings,
} from "lucide-react";
import Link from "next/link";

const notifStyles = {
  base: "flex items-center justify-between p-4 rounded-md shadow-md max-w-xl mx-auto",
  variants: {
    success: "bg-green-50 border border-green-300 text-green-800",
    error: "bg-red-50 border border-red-300 text-red-800",
    warning: "bg-yellow-50 border border-yellow-300 text-yellow-800",
    info: "bg-blue-50 border border-blue-300 text-blue-800",
    announcement:
      "bg-indigo-50 border border-indigo-300 text-indigo-900 flex-col md:flex-row",
  },
  icon: "w-6 h-6 mr-3 flex-shrink-0",
  closeBtn: "cursor-pointer p-1 rounded hover:bg-gray-200 transition",
  btnPrimary:
    "bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded ml-3 text-sm",
  btnSecondary:
    "bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded ml-2 text-sm",
  btnText:
    "underline cursor-pointer text-indigo-700 hover:text-indigo-900 text-sm",
};

const icons = {
  success: <CheckCircle className={notifStyles.icon} />,
  error: <XCircle className={notifStyles.icon} />,
  warning: <AlertTriangle className={notifStyles.icon} />,
  info: <Info className={notifStyles.icon} />,
  announcement: <Bell className={notifStyles.icon} />,
};

function Notification({ type, message, onClose }) {
  return (
    <div
      className={`${notifStyles.base} ${notifStyles.variants[type]} animate-fade-in`}
      role="alert"
    >
      <div className="flex items-center">
        {icons[type]}
        <p className="text-sm">{message}</p>
      </div>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className={notifStyles.closeBtn}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

function AnnouncementBar({ onClose }) {
  return (
    <div
      className={`${notifStyles.base} ${notifStyles.variants.announcement} animate-fade-in`}
      role="region"
      aria-label="Announcement"
    >
      <div className="flex-1 mb-3 md:mb-0">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <Bell className="w-6 h-6" />
          New update! Available
        </div>
        <p className="max-w-xl text-indigo-900 text-sm">
          Enjoy improved functionality and enhancements.
        </p>
      </div>
      <div className="flex justify-end items-center">
        <button className={notifStyles.btnSecondary} onClick={onClose}>
          Later
        </button>
        <button className={notifStyles.btnPrimary}>Update Now</button>
      </div>
    </div>
  );
}

function ToastNotification({ onClose }) {
  return (
    <div
      className={`${notifStyles.base} ${notifStyles.variants.info} animate-fade-in max-w-md`}
      role="alert"
    >
      <div className="flex md:flex-row flex-col flex-1 items-start md:items-center">
        <Info className={notifStyles.icon} />
        <div className="flex-1 text-sm">
          By clicking on <strong>'Accept'</strong>, you agree to the storing of
          cookies on your device to enhance site navigation, analyze site usage,
          and assist in our marketing efforts.
        </div>
      </div>
      <div className="flex items-center gap-2 mt-3 md:mt-0 ml-4">
        <button className={notifStyles.btnText}>Cookie Settings</button>
        <button className={notifStyles.btnSecondary}>Deny All</button>
        <button className={notifStyles.btnPrimary} onClick={onClose}>
          Accept All
        </button>
      </div>
    </div>
  );
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "success", message: "Success! Action Completed!" },
    { id: 2, type: "info", message: "Heads Up! New Information" },
    { id: 3, type: "warning", message: "Alert: Double Check Required" },
    { id: 4, type: "error", message: "Something Went Wrong" },
  ]);

  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showToast, setShowToast] = useState(true);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <main className="space-y-10 mx-auto p-6 max-w-3xl">
      <div className="space-y-2">
        <h1 className="font-bold text-3xl tracking-tight">Notifications</h1>
        <nav className="space-x-2 text-indigo-600 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          /<span className="font-semibold">Notifications</span>
        </nav>
      </div>

      {/* Announcement Bar */}
      {showAnnouncement && (
        <AnnouncementBar onClose={() => setShowAnnouncement(false)} />
      )}

      {/* Toast Notification */}
      {showToast && <ToastNotification onClose={() => setShowToast(false)} />}

      {/* Other Notifications */}
      <div className="space-y-4">
        {notifications.length === 0 && (
          <p className="text-gray-500 text-center">No notifications to show.</p>
        )}
        {notifications.map(({ id, type, message }) => (
          <Notification
            key={id}
            type={type}
            message={message}
            onClose={() => removeNotification(id)}
          />
        ))}
      </div>
    </main>
  );
}
