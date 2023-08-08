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
  DropDown,
  Content,
  Option,
} from './Home.styled';
import { Link } from 'react-router-dom';

export default function Home({ events }) {
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const onOptionClick = e => {
    const { value } = e.target;
    setSelectedCategory(value);
  };
  const handleInputChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  function getFilteredEvents() {
    try {
      if (filter) {
        const normalizedFilter = filter.toLocaleLowerCase();
        const filteredEvents = events.filter(({ name }) => {
          const normalizedName = name.toLocaleLowerCase();
          const result = normalizedName.includes(normalizedFilter);
          return result;
        });
        return filteredEvents;
      } else if (selectedCategory) {
        const filteredEvents = events.filter(
          item => item.category === selectedCategory
        );
        return filteredEvents;
      }
    } catch (e) {
      setError(e);
    }
    try {
      let filteredEvents;
      if (
        (!filter && selectedCategory === '') ||
        (!filter && selectedCategory === 'All')
      ) {
        return events;
      } else {
        if ((selectedCategory === 'All' && filter) || filter) {
          const normalizedFilter = filter.toLocaleLowerCase();
          filteredEvents = events.filter(({ name }) => {
            const normalizedName = name.toLocaleLowerCase();
            const result = normalizedName.includes(normalizedFilter);
            return result;
          });
        } else if (selectedCategory) {
          filteredEvents = events.filter(
            item => item.category === selectedCategory
          );
        }
        if (filter && selectedCategory) {
          const normalizedFilter = filter.toLocaleLowerCase();
          filteredEvents = events.filter(({ name }) => {
            const normalizedName = name.toLocaleLowerCase();
            const result = normalizedName.includes(normalizedFilter);
            return result;
          });
          filteredEvents = filteredEvents.filter(
            item => item.category === selectedCategory
          );
        }
      }
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
              <DropDown>
                <CategoryButton>
                  <ButtonName>Category</ButtonName>
                  <IconFilter>
                    <CiFilter size={18} />
                  </IconFilter>
                </CategoryButton>
                <Content id="content">
                  <Option
                    id="option"
                    name="All"
                    value="All"
                    onClick={onOptionClick}
                  >
                    All
                  </Option>
                  <Option
                    id="option"
                    name="Art"
                    value="Art"
                    onClick={onOptionClick}
                  >
                    Art
                  </Option>
                  <Option
                    id="option"
                    name="Music"
                    value="Music"
                    onClick={onOptionClick}
                  >
                    Music
                  </Option>
                  <Option
                    id="option"
                    name="Business"
                    value="Business"
                    onClick={onOptionClick}
                  >
                    Business
                  </Option>
                  <Option
                    id="option"
                    name="Conference"
                    value="Conference"
                    onClick={onOptionClick}
                  >
                    Conference
                  </Option>
                  <Option
                    id="option"
                    name="Workshop"
                    value="Workshop"
                    onClick={onOptionClick}
                  >
                    Workshop
                  </Option>
                  <Option
                    id="option"
                    name="Party"
                    value="Party"
                    onClick={onOptionClick}
                  >
                    Party
                  </Option>
                  <Option
                    id="option"
                    name="Sport"
                    value="Sport"
                    onClick={onOptionClick}
                  >
                    Sport
                  </Option>
                </Content>
              </DropDown>

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
