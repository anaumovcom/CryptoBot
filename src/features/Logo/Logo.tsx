import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center w-[240px] justify-center">
        <img className="w-10 h-10" src="logo.png" alt="logo" />
        <p className="ml-4 text-2xl">CryptoBot</p>
      </div>
    </Link>
  );
};
