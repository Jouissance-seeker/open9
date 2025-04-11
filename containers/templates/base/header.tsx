import { EmptyWallet } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const nav = [
    { name: "Featured", href: "#featured" },
    { name: "Top Seller", href: "#top-seller" },
    { name: "Discover", href: "#discover" },
    { name: "Top collections", href: "#top-collections" },
  ];
  return (
    <header className="container">
      <div className="py-5 flex justify-between items-center">
        <Image src={"/images/logo.png"} width={140} height={140} alt="logo" />
        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {nav.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="font-medium transition-all hover:text-citron"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-citron text-black py-2.5 px-3.5 items-center flex gap-2 rounded-xl font-bold">
          <p className="text-sm">Wallet connect</p>
          <EmptyWallet size="24" color="#000" variant="Bold" />
        </button>
      </div>
    </header>
  );
};
