export type CardProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  image: string;
};
