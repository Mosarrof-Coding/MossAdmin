"use client";

import React, { useContext, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Bell, Sun, Moon, X, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, HelpCircle, Pencil } from "lucide-react";
import { Context } from "@/context/Context";

const initialNotifications = [
  {
    id: 1,
    user: "Terry Franci",
    message: "requests permission to change Project - Nganter App",
    time: "5 min ago",
    thumb: "https://i.pravatar.cc/40?u=1",
  },
  {
    id: 2,
    user: "Alena Franci",
    message: "requests permission to change Project - Nganter App",
    time: "8 min ago",
    thumb: "https://i.pravatar.cc/40?u=2",
  },
  {
    id: 3,
    user: "Jocelyn Kenter",
    message: "requests permission to change Project - Nganter App",
    time: "15 min ago",
    thumb: "https://i.pravatar.cc/40?u=3",
  },
  {
    id: 4,
    user: "Brandon Philips",
    message: "requests permission to change Project - Nganter App",
    time: "1 hr ago",
    thumb: "https://i.pravatar.cc/40?u=4",
  },
  // repeat if needed
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDismiss = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const { sidehandler } = useContext(Context);
  const [abs, setAbs] = useState(null);

  return (
    <header className="relative flex justify-between items-center gap-4 bg-sidebar/50 px-4 lg:px-6 border-b border-border text-foreground transition-colors">
      {/* Left: Menu + Search */}
      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle menu"
          className="bg-muted hover:bg-muted/80 my-2 p-2 rounded transition-colors cursor-pointer"
          onClick={sidehandler}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center py-2">
          <span className="md:hidden" onClick={() => setAbs(!abs)}>
            <Search className="opacity-80 w-6 md:w-6 cursor-pointer" />
          </span>

          <div
            className={`px-4 py-4 md:py-0 absolute md:static z-[5] ${
              abs
                ? "left-0 top-full w-full bg-white dark:bg-gray-800 shadow-lg grid place-items-center "
                : "md:block hidden w-full md:w-sm"
            }`}
          >
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary w-full placeholder:text-muted-foreground text-sm transition-all"
            />
          </div>
        </div>
      </div>

      {/* Right: Theme Toggle, Notification, Profile */}
      <div className="flex items-center gap-4 my-2 min-w-fit">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
          className="bg-muted hover:bg-muted/80 p-1 md:p-2 rounded transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="w-4 sm:w-5 h-fit" />
          ) : (
            <Moon className="w-4 sm:w-5 h-fit" />
          )}
        </button>
        {/* notification */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Notifications"
              className="relative bg-muted hover:bg-muted/80 p-1 md:p-2 rounded transition-colors"
            >
              <Bell className="w-4 sm:w-5 h-fit" />
              {notifications.length > 0 && (
                <span className="top-[5%] right-0.5 absolute bg-red-500 rounded-full w-[6px] sm:w-2 h-[6px] md:h-2" />
              )}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="p-0 w-fit max-h-[400px] overflow-y-auto">
            <div className="p-3 border-b">
              <h4 className="font-semibold text-sm">Notifications</h4>
            </div>

            {notifications.length === 0 && (
              <div className="p-4 text-muted-foreground text-sm text-center">
                No new notifications
              </div>
            )}

            {notifications.map((n) => (
              <div
                key={n.id}
                className="relative flex items-start gap-3 hover:bg-muted/50 p-3"
              >
                <img
                  src={n.thumb}
                  alt={n.user}
                  className="border rounded-full w-10 h-10"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">{n.user}</p>
                  <p className="text-muted-foreground text-xs">{n.message}</p>
                  <p className="mt-1 text-xs">{n.time}</p>
                </div>
                <button
                  onClick={() => handleDismiss(n.id)}
                  className="top-2 right-2 absolute text-gray-400 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}

            {notifications.length > 0 && (
              <>
                <DropdownMenuSeparator />
                <div className="py-2 text-center">
                  <button className="text-blue-600 text-sm hover:underline">
                    View All Notifications
                  </button>
                </div>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* dropdown sjhadcn */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer select-none">
              <img
                src="https://i.pravatar.cc/40?u=user"
                alt="User profile"
                className="ring-border rounded-full ring-2 w-7 md:w-8 h-7 sm:h-8"
              />
              <h4 className="hidden lg:block font-medium text-sm">Mosharof</h4>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mt-2 w-64">
            <div className="px-3 py-2">
              <p className="font-semibold text-sm">Musharof Chowdhury</p>
              <p className="text-muted-foreground text-xs">
                randomuser@pimjo.com
              </p>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-2">
              <Pencil className="w-4 h-4" />
              Edit Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Settings className="w-4 h-4" />
              Account Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <HelpCircle className="w-4 h-4" />
              Support
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-2 text-red-500">
              <LogOut className="w-4 h-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
