import {
    FaHome,
    FaRegCalendarAlt,
    FaBook,
    FaGraduationCap,
  } from "react-icons/fa";
  import { IoAnalyticsSharp } from "react-icons/io5";
  import { IconType } from "react-icons";
  import { TfiAnnouncement } from "react-icons/tfi";

interface SidebarElem {
    icon: IconType;
    name: string;
    url: string;
  }

export const sidebarDeatilsArray: SidebarElem[] = [
    {
      icon: FaHome,
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: FaRegCalendarAlt,
      name: "Schedule",
      url: "/",
    },
    {
      icon: FaBook,
      name: "Courses",
      url: "/",
    },
    {
      icon: FaGraduationCap,
      name: "Gradebook",
      url: "/",
    },
    {
      icon: IoAnalyticsSharp,
      name: "Performance",
      url: "/",
    },
    {
      icon: TfiAnnouncement,
      name: "Announcement",
      url: "/",
    },
  ];
