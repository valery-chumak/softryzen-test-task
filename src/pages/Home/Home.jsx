import React, { useState } from 'react';
import EventList from 'components/EventList/EventList';
import data from '../../data.json';
import { CiFilter } from 'react-icons/ci';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  Section,
  MainContainer,
  Title,
  FilterBlock,
  ButtonWrapper,
  CategoryButton,
  SortButton,
  AddButton,
  IconFilter,
  IconSlider,
  IconAdd,
  ButtonName,
} from './Home.styled';
export default function Home() {
  const [items, setItems] = useState(data);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchPopularMovie();
  // }, []);
  // const fetchPopularMovie = async () => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const data = await getPopularMovie();
  //     setItems(prev => [...prev, ...data.results]);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <Section>
      <MainContainer>
        {error && <h2>Sorry. Something get wrong. Try later.</h2>}
        <FilterBlock>
          <Title>My events</Title>
          <ButtonWrapper>
            <CategoryButton>
              <ButtonName>Category</ButtonName>
              <IconFilter>
                <CiFilter size={18} />
              </IconFilter>
            </CategoryButton>
            <SortButton>
              <ButtonName>Sort by</ButtonName>
              <IconSlider>
                <LiaSlidersHSolid size={18} />
              </IconSlider>
            </SortButton>
            <AddButton>
              <IconAdd>
                <AiOutlinePlus size={18} />
              </IconAdd>
              <ButtonName>Add new event</ButtonName>
            </AddButton>
          </ButtonWrapper>
        </FilterBlock>

        <EventList items={items} />
      </MainContainer>
    </Section>
  );
}