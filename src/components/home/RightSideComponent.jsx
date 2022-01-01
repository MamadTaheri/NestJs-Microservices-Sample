import styled from "styled-components";

const RightSideComponent = (props) => {
    return (
        <Container>Right side</Container>
    );
}

const Container = styled.div`
    grid-area: Rightside;
`;

export default RightSideComponent;