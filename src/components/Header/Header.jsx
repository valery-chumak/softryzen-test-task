import React, { Component } from 'react';

import {
  Section,
  Logo,
  SearchBar,
  Icon,
  Search,
  Language,
  IconDown,
  MainContainer,
  StyledLink,
} from './Header.styled';

import { BsSearch, BsChevronDown } from 'react-icons/bs';

export class Header extends Component {
  render() {
    return (
      <Section>
        <MainContainer>
          <Logo>
            <StyledLink to="/">Event Planner</StyledLink>
          </Logo>

          <Search>
            <Icon>
              <BsSearch size={18} />
            </Icon>
            <SearchBar placeholder="Search by keywords"></SearchBar>
          </Search>
          <Language>
            UK
            <IconDown>
              <BsChevronDown />
            </IconDown>
          </Language>
        </MainContainer>
      </Section>
    );
  }
}

export default Header;
