import React, { createContext, useContext, useState } from 'react';

// Create the context
export const UpdateApiContext = createContext();

// Create the provider component
export const UpdateApiProvider = ({ children }) => {
    // Define the state and update function
    const [apiData, setApiData] = useState(null);

    // Define the update function
    const updateApiData = (newData) => {
        setApiData(newData);
    };

    // Provide the state and update function to the children components
    return (
        <UpdateApiContext.Provider value={{ apiData, updateApiData }}>
            {children}
        </UpdateApiContext.Provider>
    );
};

export default GlobalUpdateApi = () => {
    const UpdateAPi = useContext(UpdateApiProvider);
};