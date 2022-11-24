import {Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, StyledHeader, StyledLink, Title } from './Header.styled';
import AuthNavigation from 'components/AuthNavigation';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import routesPath from 'routesPath';
import Spinner from 'components/Spinner';
import {RiContactsBook2Fill} from 'react-icons/ri'

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const location = useLocation();
  const isHomePath = location.pathname === '/';

  return (
    <>
      <StyledHeader as="header">
        <Container>
          <StyledLink to={routesPath.home}>
            <Title>
              <RiContactsBook2Fill size="25px" />PhoneBook
            </Title>
          </StyledLink>
          {isHomePath && isLoggedIn && (
            <StyledLink to={routesPath.contacts}>Back to ContactBook</StyledLink>
          )}
          {isFetchingCurrentUser ? (
            Spinner.threeDots
          ) : isLoggedIn ? (
            <UserMenu />
          ) : (
            <AuthNavigation />
          )}
        </Container>
      </StyledHeader>

      <Outlet />
    </>
  );
}
