import React, { useContext } from "react";
import { ContextData } from "../config/Context";

export default function Galary() {
  let { text } = useContext(ContextData);

  console.log(text);

  return <div>Galary</div>;
}
