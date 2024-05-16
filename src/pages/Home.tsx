import Pagintaion from "../components/ui/Pagination";
import CharacterDetailsModal from "../components/CharacterDetailsModal";
import CharactersSection from "../components/CharactersSection";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

import { useQuery } from "@tanstack/react-query";
import { getCharacter, getCharacters, queryClient } from "../utils/http.ts";
import { useEffect, useState } from "react";
import { useSorting } from "../hooks/useSorting.ts";
import { useModal } from "../hooks/useModal.ts";

const HomePage = () => {
  const [activeCharacterDetailsID, setActiveCharacterDetailsID] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const filters =
    "&name=" + searchTerm + "&status=" + status + "&gender=" + gender;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["characters"],
    queryFn: ({ signal }) => getCharacters(signal, currentPage, filters),
    staleTime: 0,
  });

  const {
    data: characterData,
    isFetching: characterisFetching,
    isError: characterIsError,
    error: characterError,
  } = useQuery({
    queryKey: ["character", { id: activeCharacterDetailsID }],
    queryFn: ({ signal }) => getCharacter({ signal, activeCharacterDetailsID }),
  });

  const { isOpen, onClose, onOpen } = useModal();

  const handleActiceCharacterSelect = (id: number) => {
    setActiveCharacterDetailsID(id);
    onOpen();
  };

  const info = data?.info || {};
  const initialData = data?.results || [];
  const { sortedData, setSort } = useSorting(initialData);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["characters"], exact: true });
  }, [currentPage, filters]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue);
      queryClient.invalidateQueries({ queryKey: ["characters"], exact: true });
    }, 100);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleNextPage = () => {
    if (info.next !== null) {
      setCurrentPage((prev) => prev + 1);
    } else {
      return null;
    }
  };

  const handlePrevPage = () => {
    if (info.prev !== null) {
      setCurrentPage((prev) => prev - 1);
    } else {
      return null;
    }
  };

  console.log(data);
  console.log(info);

  return (
    <>
      <div className="px-8 mb-4 flex mr-2 flex-col lg:flex-row gap-4">
        <Sort setSort={setSort} />
        <Filter
          inputValue={inputValue}
          setInputValue={setInputValue}
          setGender={setGender}
          setStatus={setStatus}
        />
      </div>
      <CharacterDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        characterData={characterData}
        isFetching={characterisFetching}
        isError={characterIsError}
        error={characterError}
      />
      <CharactersSection
        isPending={isPending}
        isError={isError}
        error={error}
        sortedData={sortedData}
        handleActiceCharacterSelect={handleActiceCharacterSelect}
      />
      {!error && (
        <Pagintaion
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          infoPrev={info.prev}
          infoNext={info.next}
          totalPages={info.pages}
        />
      )}
    </>
  );
};

export default HomePage;
