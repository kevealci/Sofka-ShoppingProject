import { GetFetch } from '../hooks/GetFetch'
import { useParams } from 'react-router'

export const Jennifer = () => {

    let params = useParams();

    const { data, error, loading } = GetFetch(`http://localhost:8080/api/product/${params.id}`);


    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }



    return (
        <div>
            <h1>Jennifer</h1>
            <h4>{data.name}</h4>
        </div>
    )
}

export default Jennifer
