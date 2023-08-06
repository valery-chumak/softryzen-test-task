import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import data from '../../data.json';
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
export default function EventDetails() {
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { eventId } = useParams();
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const result = await data.find(event => event.id === eventId);
        setState(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [eventId]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {state && (
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
              <Title>{state.name}</Title>
              <Item>
                <Image src={state.path} alt={state.name} />
                <Description id="description">{state.description}</Description>
                <ListInfo>
                  <Info>{state.category}</Info>
                  <Info style={{ color: priorityToColor[state.priority] }}>
                    {state.priority}
                  </Info>
                  <Info>{state.place}</Info>
                  <Info>
                    {state.date} at {state.time}
                  </Info>
                </ListInfo>
                <ButtonWrapper>
                  <ButtonEdit>Edit</ButtonEdit>
                  <ButtonDelete>Delete</ButtonDelete>
                </ButtonWrapper>
              </Item>
            </MainContainer>
          </Section>
        </>
      )}
    </>
  );
}
