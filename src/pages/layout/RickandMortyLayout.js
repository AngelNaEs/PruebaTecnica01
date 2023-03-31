import { TopBar } from "../../components";

export const RickandMortyLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};
