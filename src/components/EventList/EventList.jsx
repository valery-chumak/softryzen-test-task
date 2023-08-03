import React, { Component } from 'react';
import EventItem from 'components/EventItem/EventItem';
import { List, Section } from './EventList.styled';
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
    return (
      <Section>
        <List>{elements}</List>
      </Section>
    );
  }
}

export default EventList;
