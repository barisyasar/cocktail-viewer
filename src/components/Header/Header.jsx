import NavbarBrand from "../NavbarBrand";

function Header() {
  return (
    <header className="border-b h-16 md:h-20 flex items-center">
      <div className="container">
        <NavbarBrand />
      </div>
    </header>
  );
}

export default Header;
