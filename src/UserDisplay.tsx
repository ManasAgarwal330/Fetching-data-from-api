import {FC,memo} from 'react';
interface Props
{
    email:string;
    gender:string;
}
const fileName:FC<Props> = (props) =>{
    return(<>
        <div className="border-b-2 border-black shadow-md text-center">
            <div><span className="pr-4">Email:</span><span className="text-blue-600">{props.email}</span></div>
            <div><span className="pr-4">Gender:</span><span className="text-blue-600">{props.gender}</span></div>
        </div>
    </>
    );
}

fileName.defaultProps = {

}
export default memo(fileName)