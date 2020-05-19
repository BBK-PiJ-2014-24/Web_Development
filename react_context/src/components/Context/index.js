import React from "react";

// Instantiate a CreateContext object
const ScoreboardContext = React.createContext();

// export the Proider and Consumer objects
export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;
