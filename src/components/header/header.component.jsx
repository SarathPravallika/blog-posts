import React from 'react';
import { HeaderContainer, NavLink, NavOptionsContainer } from './header.styles';

const Header = () => (
    <HeaderContainer>
        <NavOptionsContainer>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </NavOptionsContainer>
    </HeaderContainer>
);

export default Header;