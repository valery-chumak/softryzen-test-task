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
} from './EventItem.styled';
const priorityToColor = {
  Low: '#6BD475',
  Medium: '#E2A300',
  High: 'rgba(255, 43, 119, 1)',
};
export class EventItem extends Component {
  render() {
    const { name, path, date, time, place, category, priority, description } =
      this.props;
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
          <TimeInfo>
            <Time>
              {date} at {time}
            </Time>
            <Place>{place}</Place>
          </TimeInfo>
        </Wrapper>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <ButtonWrapper id="button-container">
          <Button>More info</Button>
        </ButtonWrapper>
      </Item>
    );
  }
}

export default EventItem;
