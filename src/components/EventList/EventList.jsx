import React, { Component } from 'react';
import EventItem from 'components/EventItem/EventItem';
import { List } from './EventList.styled';
export class EventList extends Component {
  render() {
    const { items } = this.props;
    const elements = items.map(
      ({
        id,
        name,
        path,
        date,
        time,
        place,
        category,
        priority,
        description,
      }) => {
        return (
          <EventItem
            key={id}
            id={id}
            name={name}
            path={path}
            date={date}
            time={time}
            place={place}
            category={category}
            priority={priority}
            description={description}
          />
        );
      }
    );
    return <List>{elements}</List>;
  }
}

export default EventList;
