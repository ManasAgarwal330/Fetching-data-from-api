import { useState } from "react";
import { FC, memo } from "react";
import UserData from "./UserData";

interface Props {}

const App: FC<Props> = (props) => {
  const [page, setPage] = useState(1);
  const prev = function()
  {
    if(page > 1) setPage(page-1);
    else setPage(page);
  }
  return (
    <>
      <h1 className="font-medium text-xl mb-4 text-center">You are viewing page: {page}</h1>
      <UserData page ={page} />
      <div className = "flex justify-center mt-4">
      <button
        className="bg-black border text-white p-2 pl-4 pr-4 rounded-lg font-sans"
        onClick={prev}
      >
        Previous
      </button>
        <button
        className="bg-black border text-white p-2 pl-4 pr-4 rounded-lg font-sans"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
      </div>
    </>
  );
};

App.defaultProps = {};
export default memo(App);
