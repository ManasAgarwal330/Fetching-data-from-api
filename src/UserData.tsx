import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FC, memo } from "react";
import UserDisplay from "./UserDisplay";
interface Props {
  page: number;
}
const UserData: FC<Props> = ({ page }) => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?inc=name,email,gender&results=10&page=" + { page }
      )
      .then(function (response) {
        setUsers(response.data.results);
      });
  }, [page]);
  return (
    <>
      <div>{users.map((u:any) => <UserDisplay email={u.email} gender = {u.gender}/>)}</div>
    </>
  );
};

UserData.defaultProps = {};
export default memo(UserData);
