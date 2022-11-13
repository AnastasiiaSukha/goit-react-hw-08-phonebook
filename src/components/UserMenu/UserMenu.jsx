import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

import LogoutIcon from '@mui/icons-material/Logout';
import { Wrap, Container, Button} from './UserMenu.styled';
import { FaUserCircle } from 'react-icons/fa';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();
  return (
    <Container>
      <Wrap>
      <FaUserCircle size="2rem" color="#C0C9CC"/>
      <span> Welcome, {name} </span>
      </Wrap>
      <Button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        <LogoutIcon sx={{ color: 'white' }} />
      </Button>
    </Container>
  );
}
