import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>How may i help you</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, earum
        vero. Totam non temporibus praesentium deserunt adipisci! Unde, repellat
        provident. Fugiat, sapiente magni. Omnis dignissimos incidunt odio,
        reiciendis dolor dolore obcaecati. Animi ratione voluptatem, eius hic,
        ipsum nobis mollitia obcaecati est minus incidunt aliquid! Quos porro
        eos itaque? Id non ut fugiat ab minus quae ratione laborum. Beatae,
        quasi modi?
      </p>
      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
