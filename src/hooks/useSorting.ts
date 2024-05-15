import { useState } from "react";
import { CardProps } from "../shared.types.ts";

export const useSorting = (initialData: CardProps[]) => {
  const [sort, setSort] = useState("");
  const sortedData = [...initialData];

  if (sort === "a-z") {
    sortedData.sort((a: CardProps, b: CardProps) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  if (sort === "z-a") {
    sortedData.sort((a: CardProps, b: CardProps) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }

  return { sortedData, setSort };
};
