import { CardProps } from "../../shared.types";

interface CardWithOnClickProps extends CardProps {
  onClick: () => void;
}

const Card: React.FC<CardWithOnClickProps> = ({
  name,
  status,
  species,
  location,
  image,
  onClick,
}) => {
  const statusColorMap: { [key: string]: string } = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  };

  const statusColor = statusColorMap[status];

  return (
    <div
      onClick={onClick}
      className="flex gap-4 flex-col lg:flex-row bg-yellow-400 hover:bg-yellow-600 duration-700 max-w-[400px] lg:max-w-[450px] lg:max-h-[220px] h-[500px] lg:h-[270px] p-2 rounded-xl cursor-pointer"
    >
      <div className="flex justify-center">
        <img
          className="rounded-md border-stone-950 drop-shadow-2xl shadow-stone-950 lg:w-[200px] lg:h-[200px]"
          src={image}
          alt={name}
          draggable="false"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="flex items-center gap-1 text-base font-semibold mb-6">
          <span className={`w-2 h-2 rounded-[50%] ${statusColor}`} />
          {status} - {species}
        </p>
        <p className=" font-semibold">Last known location:</p>
        <p className=" font-bold">{location.name}</p>
      </div>
    </div>
  );
};

export default Card;
