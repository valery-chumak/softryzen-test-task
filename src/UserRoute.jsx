import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const EventDetails = lazy(() => import('pages/EventDetails/EventDetails'));
const AddEvent = lazy(() => import('pages/AddEvent/AddEvent'));
export default function UserRoute() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/events/:eventId" element={<EventDetails />}></Route>
      </Routes>
    </Suspense>
  );
}
