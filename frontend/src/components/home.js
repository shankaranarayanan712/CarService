import React from 'react';
import { LandingPage } from "./landingPage";

export const Home = () => {
  // This is designed in this way so that we can extend it to have multiple root level components
  return (
    <>
      <LandingPage />
    </>
  )
}
