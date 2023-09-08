import styled from "styled-components"



const cardProps =() =>{
    return (
        <div>
        <Container>
        <Main>
        
        </Main>
        </Container>
        </div>
    )
}

export default cardProps

const Main = styled.div`
height: 100px;
width: 300px;
border: 1px solid silver;
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;
`;