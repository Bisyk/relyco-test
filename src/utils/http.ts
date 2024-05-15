import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

export async function getCharacters(
  signal: AbortSignal,
  page: number,
  filters: string
) {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}${filters}`,
    { signal: signal }
  );

  if (!response.data) {
    throw new Error("An error occurred while fetching the characters.");
  }

  const characters = response.data;
  return characters;
}

export async function getCharacter(params: {
  activeCharacterDetailsID: number;
  signal: AbortSignal;
}) {
  const { activeCharacterDetailsID, signal } = params;

  const url = `https://rickandmortyapi.com/api/character/${activeCharacterDetailsID}`;

  const response = await axios.get(url, { signal: signal });

  if (!response.data) {
    throw new Error("An error occurred while fetching the characters.");
  }

  const character = response.data;

  return character;
}
