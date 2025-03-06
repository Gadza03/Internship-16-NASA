import { createContext } from "react";
import { ApodType } from "../../types/apodType";

export interface ApodContextType {
  apodData: ApodType[];
  loadMore: () => void;
}

export const ApodContext = createContext<ApodContextType | undefined>(
  undefined
);
