import React from "react";
const CategoryContext = React.createContext();

export const CategoryProvider = CategoryContext.Provider;
export const CategoryConsumer = CategoryContext.Consumer;

export default CategoryContext;
