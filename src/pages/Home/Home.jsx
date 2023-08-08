import React, { useState } from 'react';
import EventList from 'components/EventList/EventList';
import { CiFilter } from 'react-icons/ci';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  Section as HeaderSection,
  Logo,
  SearchBar,
  Icon,
  Search,
  Language,
  IconDown,
  MainContainer,
  StyledLink,
} from '../../components/Header/Header.styled';
import { BsSearch, BsChevronDown } from 'react-icons/bs';
import {
  Section,
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
import { Link } from 'react-router-dom';
const CategoryOptions = [
  { value: 'Art', label: 'Art' },
  { value: 'Music', label: 'Music' },
  { value: 'Business', label: 'Business' },
  { value: 'Conference', label: 'Conference' },
  { value: 'Workshop', label: 'Workshop' },
  { value: 'Party', label: 'Party' },
  { value: 'Sport', label: 'Sport' },
];
export default function Home({ events }) {
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = event => {
    const category = event.target.value;
    setSelectedCategory(category);
    getCategoryFiltered(category);
  };
  function getCategoryFiltered() {}
  const handleInputChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  function getFilteredEvents() {
    try {
      if (!filter) {
        return events;
      }
      const normalizedFilter = filter.toLocaleLowerCase();
      const filteredEvents = events.filter(({ name }) => {
        const normalizedName = name.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter);
        return result;
      });
      return filteredEvents;
    } catch (e) {
      setError(e);
    }
  }

  const eventsFiltered = getFilteredEvents();
  return (
    <>
      <HeaderSection>
        <MainContainer>
          <Logo>
            <StyledLink to="/">Event Planner</StyledLink>
          </Logo>

          <Search>
            <Icon>
              <BsSearch size={18} />
            </Icon>
            <SearchBar
              placeholder="Search by keywords"
              name="filter"
              value={filter}
              onChange={handleInputChange}
            ></SearchBar>
          </Search>
          <Language>
            UK
            <IconDown>
              <BsChevronDown />
            </IconDown>
          </Language>
        </MainContainer>
      </HeaderSection>
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

              <Link to="/add">
                <AddButton>
                  <IconAdd>
                    <AiOutlinePlus size={18} />
                  </IconAdd>
                  <ButtonName>Add new event</ButtonName>
                </AddButton>
              </Link>
            </ButtonWrapper>
          </FilterBlock>

          <EventList items={eventsFiltered} />
        </MainContainer>
      </Section>
    </>
  );
}
