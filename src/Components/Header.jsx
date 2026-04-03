function Header({ currentPage, onNavigate }) {
    const links = ["Home", "About", "Donate", "Report", "Profile"];
  
    return (
      <header className="p-4 flex justify-between border-b">
        <h1 className="font-bold">Place Holder</h1>
        <nav className="flex gap-2">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => onNavigate(link)}
              className={currentPage === link ? "font-bold" : ""}
            >
              {link}
            </button>
          ))}
        </nav>
      </header>
    );
  }
  export default Header;