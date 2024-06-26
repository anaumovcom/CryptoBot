// 'use client'

import { Route } from "./types";

export const ROUTES: Route[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: "dashboard.png",
  },
  {
    name: "Collectors",
    path: "/collectors",
    icon: "collectors.png",
    enabled: true,
  },
  {
    name: "Generators",
    path: "/generators",
    icon: "generators.png",
  },
  {
    name: "Settings",
    path: "/settings",
    icon: "settings.png",
    enabled: true,
  },
];
