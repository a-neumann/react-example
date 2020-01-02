import * as React from "react";
import { Details } from "../details/Details";
import "./Application.scss";
import InjectTest from "../InjectTest";

export function Application() {
  return (
    <div className="Application">
      <div className="top">
        <div className="logo" />
      </div>
      <div className="welcome">FuseBox ❤️ JSX/TSX </div>

      <Details />

      <h1>Test mobx inject</h1>
      <InjectTest />
    </div>
  );
}
