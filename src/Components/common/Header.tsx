import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <Container>
      <Main>
      <Logo>Task</Logo>
    <Link to="/home">
    <Nav >Home</Nav>
    </Link>
    <Link to="/input">
    <Nav >Input</Nav>
    </Link>
      <Link to="input">
      <Button>Add TAsk</Button>
      </Link>
      </Main>
      </Container>
      
    </div>
  )
}

export default Header


const Button = styled.button`
padding: 10px 18px;
background-color: white;
color: black;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-top: 15px;
text-decoration: none;
cursor: pointer;
`;

const Nav = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
text-decoration: none;
cursor: pointer;
color: white;
`;

const Logo = styled.div`
align-items: center;
display: flex;
justify-content: center;
margin-top: 15px;
`;

const Main = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
text-transform: uppercase;
margin: 0 40px;

`;

const Container = styled.div`
width: 100%;
height: 70px;
background-color: black;
`;