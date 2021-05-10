import axios from 'axios'



const quizApiService = (apiUrl) => {
  return axios
    .get(apiUrl)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export default quizApiService;
