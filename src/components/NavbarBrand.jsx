import Link from "next/link";

function NavbarBrand() {
  return (
    <Link href="/" className="text-xl md:text-3xl font-bold hover:underline">
      Cocktail Viewer
    </Link>
  );
}

export default NavbarBrand;
