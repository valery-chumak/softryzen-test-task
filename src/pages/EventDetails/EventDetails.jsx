import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import Header from 'components/Header/Header';
import {
  MainContainer,
  Section,
  StyledLink,
  Title,
  Icon,
  Item,
  Image,
  Description,
  ListInfo,
  Info,
  ButtonWrapper,
  ButtonEdit,
  ButtonDelete,
} from './EventDetails.styled';
const priorityToColor = {
  Low: '#6BD475',
  Medium: '#E2A300',
  High: 'rgba(255, 43, 119, 1)',
};

export default function EventDetails({ onDelete, data }) {
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { eventId } = useParams();
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const result = await data.find(event => event.id === eventId);
        setEvent(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId, data]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {event && (
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
              <Title>{event.name}</Title>
              <Item>
                <Image src={event.path} alt={event.name} />
                <Description id="description">{event.description}</Description>
                <ListInfo>
                  <Info>{event.category}</Info>
                  <Info style={{ color: priorityToColor[event.priority] }}>
                    {event.priority}
                  </Info>
                  <Info>{event.place}</Info>
                  <Info>
                    {event.date} at {event.time}
                  </Info>
                </ListInfo>
                <ButtonWrapper>
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete onClick={() => onDelete(eventId)}>
                    Delete
                  </ButtonDelete>
                </ButtonWrapper>
              </Item>
            </MainContainer>
          </Section>
        </>
      )}
    </>
  );
}
