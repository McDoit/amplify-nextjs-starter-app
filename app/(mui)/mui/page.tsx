"use client";
import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
//import Demo from "./Demo";
import Hero from "./Boxes/Hero";
import EducationJourney from "./Boxes/EducationJourney";
import NewlyAddedPrograms from "./Boxes/NewlyAddedPrograms";
import NewsAndArticles from "./Boxes/NewsAndArticles";
import ProgramsByDiscipline from "./Boxes/ProgramsByDiscipline";
import WhereToStudy from "./Boxes/WhereToStudy";

export default function Home() {

  return (
    <StyledEngineProvider injectFirst>
      <Hero />
          <EducationJourney />
           <ProgramsByDiscipline />
           <WhereToStudy />
           <NewlyAddedPrograms />
           <NewsAndArticles />
    </StyledEngineProvider>
  );
}
