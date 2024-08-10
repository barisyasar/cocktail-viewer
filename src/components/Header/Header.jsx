// Header
import Link from "next/link";
import Basket from "../Basket";
import NavbarBrand from "../NavbarBrand";

function Header() {
  return (
    <header className="border-b h-20 flex items-center">
      <nav className="container flex flex-col lg:flex-row lg:justify-between">
        <NavbarBrand />

        <div className="flex items-center gap-5 justify-between">
          <Link
            href="/saved-cocktails"
            className="active:underline hover:underline"
          >
            Saved Cocktails
          </Link>
          <Basket />
        </div>
      </nav>
    </header>
  );
}

export default Header;
