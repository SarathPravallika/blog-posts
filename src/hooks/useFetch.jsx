import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (inputUrl) => {
    const [url, setUrl] = useState(inputUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            setErrorMessage('');

            try {
                const response = await axios.get(url);
                setData(response.data); 
            } catch(err) {
                setErrorMessage(err)
            }
            setIsLoading(false);
        })();
    }, [url]);

    return [{ isLoading, errorMessage, data }, setUrl];
}

export default useFetch;