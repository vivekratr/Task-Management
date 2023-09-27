import React, { useEffect, useState } from "react";

export const Context = React.createContext();




return (

    <Context.Provider
      value={{
        
      }}
    >
      {children}
    </Context.Provider>
  );