import styled from "styled-components";

const LeftSideComponent = (props) => {
    return (
        <Container>Left side</Container>
    );
}

const Container = styled.div`
    grid-area: leftside;
`;

export default LeftSideComponent;