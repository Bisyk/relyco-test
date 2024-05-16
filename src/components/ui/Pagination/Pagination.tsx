type PaginationProps = {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  infoPrev: string | null;
  infoNext: string | null;
  totalPages: number;
};

const Pagintaion = ({
  handlePrevPage,
  handleNextPage,
  currentPage,
  infoPrev,
  infoNext,
  totalPages,
}: PaginationProps) => {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrevPage}
          className="text-white bg-yellow-400 rounded-md w-20 p-2"
          disabled={infoPrev === null}
        >
          Previous
        </button>
        <span className="text-white flex items-center">
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className=" text-white bg-yellow-400 rounded-md w-20 p-2"
          disabled={infoNext === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagintaion;
