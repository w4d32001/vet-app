import { BellDot, Building2, Calendar, PanelsTopLeft, Settings } from "lucide-react";

export const dataGeneralSidebar = [
  {
      icon: PanelsTopLeft,
      name: "Dashboard",
      href: "/"
  },
  {
      icon: Building2,
      name: "Companies",
      href: "/companies"
  },
  {
      icon: Calendar,
      name: "Calendar",
      href: "/calendar"
  }
]
export const dataSettignsSidebar = [
    {
        icon: BellDot,
        name: "Notifications",
        href: "/notifications"
    },
    {
        icon: Settings,
        name: "Settings",
        href: "/settings"
    }
  ]