import {FC , memo } from "react";
interface Props
{
    name:String;
}

const UserData:FC<Props> = (props) => {
    return(
        <>
            <div className="bg-red-400"><h1>My name is Manas Agarwal</h1></div>
        </>
    );

}

UserData.defaultProps = {
    name:"manas"
};

export default memo(UserData);