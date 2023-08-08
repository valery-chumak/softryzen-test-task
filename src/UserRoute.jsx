import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import * as api from './api/api';
import { useNavigate } from 'react-router-dom';
const Home = lazy(() => import('pages/Home/Home'));
const EventDetails = lazy(() => import('pages/EventDetails/EventDetails'));
const AddEvent = lazy(() => import('pages/AddEvent/AddEvent'));

export default function UserRoute() {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);
  let navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await api.getEvents();
      setEvents(response);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    try {
      const fetchDataAndSetEvents = async () => {
        await fetchData();
      };

      fetchDataAndSetEvents();
    } catch (e) {
      setError(e);
    }
  }, []);

  const addEvent = async event => {
    try {
      let newEvent;
      setEvents(prev => {
        newEvent = {
          id: nanoid(),
          ...event,
        };
        return [...prev, newEvent];
      });
      const result = await api.addEvent(newEvent);
      console.log('state', events);
      return result;
    } catch (e) {
      setError(e);
      console.log(error);
    }
  };
  const handleDelete = async id => {
    try {
      setEvents(prev => {
        const newEvents = prev.filter(item => item.id !== id);

        return newEvents;
      });
      await api.removeEvent(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home events={events} />} />
        <Route path="*" element={<Home events={events} />} />
        <Route path="/add" element={<AddEvent onSubmit={addEvent} />} />
        <Route
          path="/events/:eventId"
          element={<EventDetails data={events} onDelete={handleDelete} />}
        ></Route>
      </Routes>
    </Suspense>
  );
}
