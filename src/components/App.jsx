import items from '../data.json';
import EventList from './EventList/EventList';
import Header from './Header/Header';
export const App = () => {
  return (
    <>
      <Header />
      <EventList items={items} />
    </>
  );
};
