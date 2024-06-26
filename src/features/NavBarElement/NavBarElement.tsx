import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

type NavBarElementProps = {
  title: string;
  icon?: string;
  url?: string;
  isEnabled?: boolean;
  isActivated?: boolean;
};

export const NavBarElement: FC<NavBarElementProps> = ({
  title,
  icon,
  url,
  isEnabled,
  isActivated,
}) => {
  return (
    <Link href={url || ""}>
      <div className="group h-8 px-8">
        <img src={icon || ""} alt="" />
        <p
          className={cn("text-lg group-hover:font-semibold", {
            "font-semibold text-black": isActivated,
          })}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};
