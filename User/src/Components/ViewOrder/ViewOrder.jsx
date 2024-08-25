import { useSelector } from "react-redux";

const ViewOrder = () => {

    const ViewData = useSelector(state => state.ViewOrder);
    console.log('VIEW DATA : ', ViewData);

    return(

        <>
            {
                ViewData.map((data) => (
                    <div key={data.id}>
                        <p>{data.name}</p>
                    </div>
                ))
            }
        </>

    )

}

export default ViewOrder;








