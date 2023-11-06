import styled from "styled-components";
import MapChart from "./MapChart";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    width: 80%;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
const Input = styled.input`
  border: none;
  border-radius: 5px;
  padding: 20px;
  background-color: #f8f3f3;
`;
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #f8f3f3;
`;
const Button = styled.button`
  background-color: #54b5f5;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function Contact() {
  const ref = useRef();
  const [sucess, setSucess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tvj6a8o",
        "template_yspb3ih",
        ref.current,
        "tEYYxv2UXbCc6gumd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSucess(true);
        },
        (error) => {
          console.log(error.text);
          setSucess(false);
        }
      );
  };

  return (
    <>
      <Section>
        <Container>
          <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Contact Me</Title>
              <Input placeholder="Name" name="from_name"></Input>
              <Input placeholder="Email" name="email"></Input>
              <TextArea
                placeholder="write your message"
                rows={10}
                name="message"
              ></TextArea>
              <Button type="submit">send</Button>
              {sucess &&
                "your message has been sent i will get back to you soon"}
            </Form>
          </Left>
          <Right>
            <MapChart></MapChart>
          </Right>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
