import axios from 'axios';

export const create = ({ content, date }) => {
    return axios
    .post('http://localhost:3001/api/notes', { content, date  })
    .then((response) => {
      const { data } = response;
      return data;
      });
}


export const getAll = () => {
    return axios
     .get('http://localhost:3001/api/notes')
     .then((response) => {
      const { data } = response;
      return data
     });
}
