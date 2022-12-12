import React from "react";

export const applicationContext = React.createContext();
export const ApplicationProvider = applicationContext.Provider;

export const wizardContext = React.createContext();
export const WizardProvider = wizardContext.Provider;
