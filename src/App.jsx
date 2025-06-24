import { RouterProvider } from "react-router-dom";
import router from "./router";

import { useSelector } from "react-redux";

import { Buffer } from "buffer";
import { useEffect } from "react";
window.Buffer = Buffer;

export default function App() {
  const lan = useSelector((state) => state.lan.ver);
  const fontClass = lan === "ENG" ? "font-english" : "font-korea";

  useEffect(() => {
    document.documentElement.lang = lan === "KOR" ? "ko" : "en";
  }, [lan]);

  return (
    <>
      <div className={fontClass}>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}