import React from "react";
import NavBar from "./NavBar";

export default function MainLayout(props: any) {
  return (
    <main className="main-content  ">
      <NavBar />
      <div className="content-wrapper  js-content-wrapper">
        {props.children}
      </div>
    </main>
  );
}
