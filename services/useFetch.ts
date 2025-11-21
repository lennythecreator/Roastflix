import { useEffect, useState } from "react";

const useFetch = <T>(fetchFuction: ()=> Promise<T>, autoFetch=true) => {
    const [data,setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        try{
            setLoading(true);
            setError(null);
            const data = await fetchFuction();
            setData(data);
        }catch(err){
            setError(err instanceof Error ? err : new Error('An error occurred'));
        } finally{
            setLoading(false);
        }
    }

    const reSet = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(() => {
        if(autoFetch){
            fetchData();
        }
    },[autoFetch])

    return {data, loading, error, reSet, refetch: fetchData};

}

export default useFetch;