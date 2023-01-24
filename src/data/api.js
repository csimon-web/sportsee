import { useState, useEffect } from 'react';

const userId = 12;

export const useFetchData = (url, dataToReturn = 'data') => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data[dataToReturn]);
            } catch (error) {
                console.error(`Error fetching data from ${url}: `, error);
            }
        };
        fetchData();
    }, []);

    return data;
}

export const useFetchUser = () => {
    return useFetchData(`http://localhost:3000/user/${userId}`);
}

export const useFetchDailyActivity = () => {
    return useFetchData(`http://localhost:3000/user/${userId}/activity`);
}

export const useFetchSessionDuration = () => {
    return useFetchData(`http://localhost:3000/user/${userId}/average-sessions`);
}

export const useFetchPerformance = () => {
    return useFetchData(`http://localhost:3000/user/${userId}/performance`);
}