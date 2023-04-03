import React from 'react';
import styled from "styled-components";

function Nav() {
  return (
    <Header>
        <Heading>Logo</Heading>
        <NavBar>
            <ItemContainer>
                <ListContainer>Home</ListContainer>
                <ListContainer>About</ListContainer>
                <ListContainer>Contact</ListContainer>
            </ItemContainer>
        </NavBar>
    </Header>
  );
}

export default Nav;

const Header = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: #222;
    padding: 3% 2%;
`;
const Heading = styled.h1`
    color:#fff;
    font-size: 28px;
    cursor:pointer;
`;
const NavBar = styled.nav`
`;
const ItemContainer = styled.ul`
    display: flex;
`;
const ListContainer = styled.li`
    color: #fff;
    font-size: 20px;
    margin-right: 45px;
    cursor:pointer;
    &:last-child {
        margin-right: 0;
    }
`;