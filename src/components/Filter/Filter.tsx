type FilterProps = {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

const Filter = ({
  setStatus,
  setGender,
  inputValue,
  setInputValue,
}: FilterProps) => {
  return (
    <>
      <div className="flex">
        <p className="text-white">Filter: </p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="ml-4 bg-transparent text-white border-yellow-400 border-2"
        />
      </div>
      <div className="flex">
        <p className="text-white mr-2">By status: </p>
        <select onChange={(e) => setStatus(e.target.value)} name="status">
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="flex">
        <p className="text-white mr-2">By gender: </p>
        <select onChange={(e) => setGender(e.target.value)} name="gender">
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
