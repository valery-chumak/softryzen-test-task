import React from 'react';
import Header from 'components/Header/Header';
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  Section,
  MainContainer,
  StyledLink,
  Icon,
  Title,
  Wrapper,
  Label,
  Input,
  Button,
  StyledSelect,
} from './AddEvent.styled';

const CategoryOptions = [
  { value: 'Art', label: 'Art' },
  { value: 'Music', label: 'Music' },
  { value: 'Business', label: 'Business' },
  { value: 'Conference', label: 'Conference' },
  { value: 'Workshop', label: 'Workshop' },
  { value: 'Party', label: 'Party' },
  { value: 'Sport', label: 'Sport' },
];
const PriorityOptions = [
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' },
];
const initialState = {
  name: '',
  path: 'https://res.cloudinary.com/dorqebe0a/image/upload/v1691504034/ov4ivp3bfxcphn8vg3y8.png',
  date: '',
  time: '',
  place: '',
  category: '',
  priority: '',
  description: '',
};
export default function AddEvent({ onSubmit }) {
  const [event, setEvent] = useState(initialState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setEvent(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleCategoryChange = event => {
    const { value } = event;
    setEvent(prev => {
      return {
        ...prev,
        category: value,
      };
    });
  };
  const handlePriorityChange = event => {
    const { value } = event;
    setEvent(prev => {
      return {
        ...prev,
        priority: value,
      };
    });
  };
  const resetForm = () => {
    setEvent(initialState);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const { name, path, date, time, place, category, priority, description } =
      event;
    onSubmit({
      name,
      path,
      date,
      time,
      place,
      category,
      priority,
      description,
    });
    resetForm();
  };

  return (
    <>
      <Header />
      <Section>
        <MainContainer>
          <StyledLink to="/">
            <Icon>
              <AiOutlineArrowLeft />
            </Icon>
            Back
          </StyledLink>
          <Title>Create new event</Title>
          <Wrapper onSubmit={handleSubmit}>
            <Label>
              Title
              <Input
                name="name"
                value={event.name}
                onChange={handleInputChange}
                required
              ></Input>
            </Label>
            <Label id="description">
              Description
              <Input
                name="description"
                value={event.description}
                onChange={handleInputChange}
                required
              ></Input>
            </Label>
            <Label>
              Select date
              <Input
                name="date"
                type="date"
                value={event.date}
                onChange={handleInputChange}
                required
              ></Input>
            </Label>
            <Label id="time">
              Select time
              <Input
                type="time"
                name="time"
                value={event.time}
                onChange={handleInputChange}
                required
              ></Input>
            </Label>
            <Label id="location">
              Location
              <Input
                name="place"
                value={event.place}
                onChange={handleInputChange}
                required
              ></Input>
            </Label>
            <Label id="category">
              Category
              <StyledSelect
                name="category"
                onChange={handleCategoryChange}
                options={CategoryOptions}
                required
              />
            </Label>
            <Label id="picture">
              Add picture
              <Input disabled></Input>
            </Label>
            <Label id="priority">
              Priority
              <StyledSelect
                name="priority"
                onChange={handlePriorityChange}
                options={PriorityOptions}
                required
              />
            </Label>
            <Button type="submit">Add event</Button>
          </Wrapper>
        </MainContainer>
      </Section>
    </>
  );
}
