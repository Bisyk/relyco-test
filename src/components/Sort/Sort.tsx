type SortProps = {
  setSort: (sort: string) => void;
};

const Sort = ({ setSort }: SortProps) => {
  return (
    <div className="flex">
      <p className="text-white">Sort:</p>
      <button
        onClick={() => setSort("a-z")}
        className="mr-4 ml-4 text-yellow-400"
      >
        A-Z
      </button>
      <button onClick={() => setSort("z-a")} className="mr-4 text-yellow-400">
        Z-A
      </button>
    </div>
  );
};

export default Sort;
