import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType(); // key fix

  useEffect(() => {
    // ONLY force top on PUSH navigation (new page clicks)
    // NOT on BACK/FORWARD navigation
    if (navType !== "PUSH") return;

    if (pathname === "/") return;

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname, navType]);

  return null;
}

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   // useEffect(() => {
//   //   window.scrollTo({
//   //     top: 0,
//   //     behavior: 'instant' // or 'smooth' if you want animation
//   //   });
//   // }, [pathname]);
//   useEffect(() => {
//     if (pathname === "/") return; // do NOT override FamilyHome scroll

//     window.scrollTo({
//       top: 0,
//       behavior: "instant"
//     });
//   }, [pathname]);

//   return null;
// }