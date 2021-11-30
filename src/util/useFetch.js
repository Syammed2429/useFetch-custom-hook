import { useState, useEffect } from 'react';


//Take the url through the props 
export const useFetch = (url) => {

    //React useState Hooks
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    //Fetch the data when app is rendered 
    useEffect(() => {

        const getData = async () => {
            try {

                const response = await fetch(url);
                const results = await response.json();
                setLoading(false)
                setData(results.data);
                setError(false)

            } catch (error) {
                setLoading(false)
                setError(false)
                setError(error)
            }
        }

        getData();

    }, [url]);

    return {
        loading,
        data,
        error
    }
}