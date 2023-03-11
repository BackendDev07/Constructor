import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import HeaderMenu from '../HeaderMenu'

function Page({children}) {
  return (
    <div>
        <Header/>
            <Box>
              <HeaderMenu/>
        <main> {children} </main>
            </Box>
        <Footer/>
    </div>
  );
}

export default Page;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
