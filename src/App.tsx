import { useState } from "react";
import { FC, memo } from "react";
import UserData from "./UserData";

interface Props {}

const App: FC<Props> = (props) => {
  const [page, setPage] = useState(1);
  return (
    <>
      <h1 className="font-medium text-xl mb-4 text-center">You are viewing page: {page}</h1>
      <UserData page ={page} />
      <button
        className="bg-black border text-white p-2 pl-4 pr-4 rounded-lg font-sans mx-auto block mt-4"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

App.defaultProps = {};
export default memo(App);
