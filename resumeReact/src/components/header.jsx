import { useState } from "react";

function TopHeader({ toggle }) {
  function changeButtons() {
    if (
      document.getElementById("headerButtons").innerHTML === "Show Edit Buttons"
    ) {
      document.getElementById("headerButtons").innerHTML = "Hide Edit Buttons";
    } else {
      document.getElementById("headerButtons").innerHTML = "Show Edit Buttons";
    }
  }
  function onclick() {
    changeButtons();
    toggle();
  }
  function print() {
    document.body.classList.add("print-element");
    window.print();
  }
  return (
    <>
      <header>
        <button id="headerButtons" onClick={onclick}>
          Hide Edit Buttons
        </button>
        <button className="headerButtons" onClick={print}>
          Print
        </button>
      </header>
    </>
  );
}

export { TopHeader };
