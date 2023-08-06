import React, { Component } from 'react';
import {
  Item,
  Image,
  Title,
  Description,
  TimeInfo,
  Time,
  Place,
  Category,
  Wrapper,
  Priority,
  CategoryWrapper,
  Button,
  ButtonWrapper,
  StyledLink,
} from './EventItem.styled';

const priorityToColor = {
  Low: '#6BD475',
  Medium: '#E2A300',
  High: 'rgba(255, 43, 119, 1)',
};
export class EventItem extends Component {
  render() {
    const {
      id,
      name,
      path,
      date,
      time,
      place,
      category,
      priority,
      description,
    } = this.props;
    return (
      <Item>
        <CategoryWrapper>
          <Category>{category}</Category>
          <Priority style={{ color: priorityToColor[priority] }}>
            {priority}
          </Priority>
        </CategoryWrapper>

        <Wrapper>
          <Image src={path} alt={name} />
          <TimeInfo id="time-info">
            <Time>
              {date} at {time}
            </Time>
            <Place>{place}</Place>
          </TimeInfo>
        </Wrapper>
        <Title id="title">{name}</Title>
        <Description id="description">{description}</Description>
        <ButtonWrapper id="button-container">
          <Button>
            <StyledLink to={`/events/${id}`}>More info</StyledLink>
          </Button>
        </ButtonWrapper>
      </Item>
    );
  }
}

export default EventItem;
