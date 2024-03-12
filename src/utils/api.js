import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '48',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data;
  } catch (error) {
    if (error.response) {
      // 서버가 요청을 받았지만 오류 응답을 반환했습니다.
      console.error('서버 응답 오류:', error.response.data);
    } else if (error.request) {
      // 요청을 보냈지만 응답을 받지 못했습니다.
      console.error('서버에 응답이 없습니다.');
    } else {
      // 오류 요청을 설정하는 중에 문제가 발생했습니다.
      console.error('오류 요청 설정:', error.message);
    }
    throw error; // 상위 수준에서 오류 처리를 위해 오류를 다시 throw합니다.
  }
};
