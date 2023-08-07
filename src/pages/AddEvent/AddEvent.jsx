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

export default function AddEvent({ onSubmit }) {
  const initialState = {
    name: '',
    path: 'https://res.cloudinary.com/dorqebe0a/image/upload/v1691064111/scoqlhuccd1pc5sbhiul.jpg',
    date: '',
    time: '',
    place: '',
    category: '',
    priority: '',
    description: '',
  };

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setState(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleCategoryChange = event => {
    const { label, value } = event;
    setState(prev => {
      return {
        ...prev,
        [label]: value,
      };
    });
  };
  const resetForm = () => {
    setState(initialState);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const { name, path, date, time, place, category, priority, description } =
      state;
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
      {loading && <p>Loading...</p>}(
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
            <Wrapper>
              <Label>
                Title
                <Input
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                ></Input>
              </Label>
              <Label id="description">
                Description
                <Input
                  name="description"
                  value={state.description}
                  onChange={handleInputChange}
                ></Input>
              </Label>
              <Label>
                Select date
                <Input
                  name="date"
                  type="date"
                  value={state.date}
                  onChange={handleInputChange}
                ></Input>
              </Label>
              <Label id="time">
                Select time
                <Input
                  type="time"
                  name="time"
                  value={state.time}
                  onChange={handleInputChange}
                ></Input>
              </Label>
              <Label id="location">
                Location
                <Input
                  name="place"
                  value={state.place}
                  onChange={handleInputChange}
                ></Input>
              </Label>
              <Label id="category">
                Category
                <StyledSelect
                  name="category"
                  value={state.category}
                  onChange={handleCategoryChange}
                  options={CategoryOptions}
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
                  value={state.priority}
                  onChange={handleCategoryChange}
                  options={PriorityOptions}
                />
              </Label>
              <Button>Add event</Button>
            </Wrapper>
          </MainContainer>
        </Section>
      </>
      )
    </>
  );
}
