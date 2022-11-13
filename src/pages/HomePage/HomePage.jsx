import { Container, HomeText, AnimatedGradientText} from './HomePage.styled';
import { Link } from './HomePage.styled';

export default function HomePage() {
  return (
    <>
      <Container>
        <AnimatedGradientText>Welcome to your PhoneBook</AnimatedGradientText>
        <HomeText>Before start, please

          <Link  to="/login" end>
              Log In
          </Link >
        </HomeText>
        <HomeText>If you are new User, please 
           <Link  to="/register" end>
             Register
          </Link >
        </HomeText>
      </Container>
    </>
  );
}
