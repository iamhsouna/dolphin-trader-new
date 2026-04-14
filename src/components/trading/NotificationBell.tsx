"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationBellProps {
  hasNotifications?: boolean;
}

export default function NotificationBell({ hasNotifications = true }: NotificationBellProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="notification-btn"
      aria-label="Notifications"
    >
      <Bell className="w-5 h-5" />
      {hasNotifications && <span className="notification-badge" aria-hidden="true" />}
    </Button>
  );
}
