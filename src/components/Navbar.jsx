import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  align-items: center;
  display: flex;
`;

const Logo = styled.img`
  height: 50px;
  display: none;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  height: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" alt="Logo" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Garage</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" alt="Search Icon" />
          <Button>hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
