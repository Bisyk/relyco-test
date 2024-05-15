import Modal from "../ui/Modal";

import { CardProps } from "../../shared.types";

type CharacterDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  characterData: CardProps;
  isFetching: boolean;
  isError: boolean;
  error: Error | null;
};

const CharacterDetailsModal: React.FC<CharacterDetailsModalProps> = ({
  isOpen,
  onClose,
  characterData,
  isFetching,
  isError,
  error,
}) => {
  console.log(characterData);
  return (
    characterData && (
      <Modal isOpen={isOpen} onClose={onClose}>
        <>
          {isFetching && <div>Loading...</div>}
          {isError && <div>{error?.message || "Something went wrong"}</div>}
          <div className="flex flex-col lg:flex-row lg:min-w-[550px]">
            <div>
              <h1 className="text-2xl font-bold">{characterData.name}</h1>
              <img src={characterData.image} alt="" />
            </div>
            <div className="p-8">
              <p className="font-semibold">
                <span className="font-bold">Status:</span>{" "}
                {characterData.status}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Species:</span>{" "}
                {characterData.species}
              </p>
              <p className="font-semibold">
                <span className="font-bold">Gender:</span>{" "}
                {characterData.gender}
              </p>
              {characterData.origin.name && (
                <>
                  <p className=" font-semibold">Origin:</p>
                  <p className=" font-bold">{characterData.origin.name}</p>
                </>
              )}
              <p className=" font-semibold">Last known location:</p>
              <p className=" font-bold">{characterData.location.name}</p>
            </div>
          </div>
        </>
      </Modal>
    )
  );
};

export default CharacterDetailsModal;
