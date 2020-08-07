import axios from 'axios';

const url = 'https://data.cityofnewyork.us/resource/xywu-7bv9.json';

export const fetchBoroughs = async () => {
    try {
        const boroughs = await axios.get(url);
        return boroughs.data
    } catch (error) {
        console.log(error)
    }
}