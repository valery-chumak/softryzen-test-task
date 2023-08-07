import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import data from './data.json';
import { nanoid } from 'nanoid';

const Home = lazy(() => import('pages/Home/Home'));
const EventDetails = lazy(() => import('pages/EventDetails/EventDetails'));
const AddEvent = lazy(() => import('pages/AddEvent/AddEvent'));

export default function UserRoute() {
  const [events, setEvents] = useState(data);
  const addEvent = event => {
    setEvents(prev => {
      const newEvent = {
        id: nanoid(),
        ...event,
      };
      return [...prev, newEvent];
    });
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/add" element={<AddEvent onSubmit={addEvent} />} />
        <Route path="/events/:eventId" element={<EventDetails />}></Route>
      </Routes>
    </Suspense>
  );
}
