function MenuButton({ sidebarOpen, setSidebarOpen }) {
  return (
    <button
      className="hamburger"
      aria-controls="sidebar"
      aria-expanded={sidebarOpen}
      onClick={(e) => {
        e.stopPropagation();
        setSidebarOpen(!sidebarOpen);
      }}
    >
      <span className="sr-only">Menu</span>
      <svg className="w-6 h-6 fill-gray-100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="16" height="2" />
        <rect x="4" y="11" width="16" height="2" />
        <rect x="4" y="17" width="16" height="2" />
      </svg>
    </button>
  );
}

export default MenuButton;
