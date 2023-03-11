import React from "react";
import styled from "styled-components";
import Header, { Container } from "../Header";
import Page from "../page/Page";

function Home() {
  return (
    <Page>
        <Container>
        <HomeTop>
            DJSVSVBJ
        </HomeTop>
        </Container>
    </Page>
  );
}

export default Home;


const HomeTop = styled.div`
  width: 80%;
  height: 100%;
  background-color: #000;
`