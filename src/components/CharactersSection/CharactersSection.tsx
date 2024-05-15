import { CardProps } from "../../shared.types";
import Card from "../Card";

type CharactersSectionProps = {
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  sortedData: CardProps[];
  handleActiceCharacterSelect: (id: number) => void;
};
const CharactersSection = ({
  isPending,
  isError,
  error,
  sortedData,
  handleActiceCharacterSelect,
}: CharactersSectionProps) => {
  return (
    <div className="flex justify-center">
      {isPending && <p>Loading...</p>}
      {isError && (
        <p className="text-yellow-400 text-center p-28 w-full text-xl font-semibold">
          Sorry, nothing found, try changing your search parameters or try again
          later
        </p>
      )}
      {sortedData && !error && (
        <div className="justify-center gap-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:w-full px-8 lg:min-h-screen mb-4">
          {sortedData.map((character: CardProps) => (
            <Card
              key={character.id}
              onClick={() => handleActiceCharacterSelect(character.id)}
              {...character}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CharactersSection;
