"use client";

import { NavBarElement } from "@/features/NavBarElement/NavBarElement";
import { Logo } from "../../features/Logo/Logo";
import { ROUTES } from "./const";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.replace("/collectors");
  }, []);

  return (
    <div className="flex flex-col py-4 border-r-[1px]">
      <Logo />
      <div className="mt-4 flex flex-col border-t-[1px] pt-4">
        {ROUTES?.filter((route) => route.enabled).map(
          ({ name, icon, path, enabled }) => (
            <NavBarElement
              key={name}
              title={name}
              icon={icon}
              url={path}
              isEnabled={enabled}
              isActivated={path === pathname}
            />
          ),
        )}
      </div>
    </div>
  );
};
