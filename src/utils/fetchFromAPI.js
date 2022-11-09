import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// fdgfddfgffdf
const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'f34d477fabmsh085550ee3655931p15fd2ajsn83b8b133600a',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
};
