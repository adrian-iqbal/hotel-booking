import Image from "next/image";
import Link from "next/link";
import Navlink from "./navlink";

const navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={128}
            height={49}
            priority
          />
        </Link>
        <Navlink />
      </div>
    </div>
  );
};

export default navbar;
