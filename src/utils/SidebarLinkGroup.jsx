import React, { useState } from 'react';

function SidebarLinkGroup({
  children,
  activecondition,
}) {

  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <li className="mb-1">
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;