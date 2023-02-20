import React, { createContext } from "react";

const UserContext = React.createContext();

const UserContextProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export default UserContext;

export {UserContextProvider,UserConsumer};

// Note : if i passed to value in createContext('Hardik Paatel') no need wrapper <UserContextProvider value='Hardik Patel'></UserContextProvider> to this components and direct run to  <ConTextC /> 