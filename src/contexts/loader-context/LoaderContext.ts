import { createContext } from "react";

type LoaderContextType = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
};

export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined
);
