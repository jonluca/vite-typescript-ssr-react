import { nanoid } from "@reduxjs/toolkit";

export default function ncNanoId(prefix = "ncmaz_") {
  return prefix + nanoid() + "_";
}
