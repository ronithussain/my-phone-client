import { useLoaderData } from "react-router-dom";

const Phone = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h2>{data.name}</h2>
            <img 
            style={{width: "900px", height: "500px"}}
            src={data.image} alt="" />
        </div>
    );
};

export default Phone;