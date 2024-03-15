// "use client";
// import { Paper } from "@mui/material";
// import Hero from "./Boxes/Hero";
// import Header from "./Boxes/Header";
// import NewsAndArticles from "./Boxes/NewsAndArticles";
// import NewlyAddedPrograms from "./Boxes/NewlyAddedPrograms";
// import ProgramsByDiscipline from "./Boxes/ProgramsByDiscipline";
// import EducationJourney from "./Boxes/EducationJourney";
// import Footer from "./Boxes/Footer";
// import WhereToStudy from "./Boxes/WhereToStudy";
// import EduPage from "./edupage/page";
// import Examples from "./examples/page";

// import { ISelectedFilter } from "./Filters/utils/FilterStructure";

// import { atom, useAtom } from "jotai";
// import { atomWithLocalStorage } from "./atomWithLocalStorage";
// import FnSearchPage from "./Boxes/FnSearchPage";
// import React from "react";

// // const atomWithLocalStorage = (key, initialValue) => {
// //   const getInitialValue = () => {
// //     const item = localStorage.getItem(key);
// //     if (item !== null) {
// //       return JSON.parse(item);
// //     }
// //     return initialValue;
// //   };
// //   const baseAtom = atom(getInitialValue());
// //   const derivedAtom = atom(
// //     (get) => get(baseAtom),
// //     (get, set, update) => {
// //       const nextValue =
// //         typeof update === "function" ? update(get(baseAtom)) : update;
// //       set(baseAtom, nextValue);
// //       localStorage.setItem(key, JSON.stringify(nextValue));
// //     }
// //   );
// //   return derivedAtom;
// // };

// const savedEducations: string[] = [];
// const comparedEducations: string[] = [];

// const savedEducationsAtom = atomWithLocalStorage(
//   "SavedEducations",
//   savedEducations
// );

// const comparedEducationsAtom = atomWithLocalStorage(
//   "CompareEducations",
//   comparedEducations
// );

// export default function Site({ openThemeDialog } : { openThemeDialog: any; }) {
//   var eduPage: boolean = window.location.pathname === "/edupage";
//   var examples: boolean = window.location.pathname === "/examples";
//   var fnSearchPage: boolean = window.location.pathname === "/fn/search";

//   var defaultView = !(eduPage || examples || fnSearchPage);

//   return (
//     <Paper square elevation={0}>
//       <Header
//         savedEducations={savedEducationsAtom}
//         comparedEducations={comparedEducationsAtom}
//         openThemeDialog={openThemeDialog}
//       />
//       {fnSearchPage && <FnSearchPage />}
//       {examples && <Examples />}
//       {eduPage && (
//         <>
//           <EduPage
//             savedEducationsAtom={savedEducationsAtom}
//             comparedEducations={comparedEducationsAtom}
//           />
//         </>
//       )}

//       {defaultView && (
//         <>
//           <Hero />
//           <EducationJourney />
//           <ProgramsByDiscipline />
//           <WhereToStudy />
//           <NewlyAddedPrograms />
//           <NewsAndArticles />
//         </>
//       )}
//       <Footer openThemeDialog={openThemeDialog} />
//     </Paper>
//   );
// }
