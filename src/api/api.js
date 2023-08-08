import axios from 'axios';

const instanceEvents = axios.create({
  baseURL: 'https://64d24fdff8d60b174361da22.mockapi.io/events',
});

export const getEvents = async () => {
  const { data } = await instanceEvents.get('/');
  return data;
};

export const addEvent = async data => {
  const { data: result } = await instanceEvents.post('/', data);
  console.log(result);
  return result;
};

export const removeEvent = async id => {
  const { data } = await instanceEvents.delete(`/${id}`);
  return data;
};
