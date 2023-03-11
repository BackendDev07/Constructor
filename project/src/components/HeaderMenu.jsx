import React from "react";
import styled from "styled-components";
import Compos from '../assets/icons/Compos'
import Star from '../assets/icons/Star'
import Comment from '../assets/icons/Comment'
import Top from '../assets/icons/Top'
import World from '../assets/icons/World'
import Houses from '../assets/icons/Houses'

function Menu() {
  return (
    <div>
        <MenuTop>
          <MenuBoxes>
            <MenuBox>
              <MenuTopBtn>
                <Compos/>
              </MenuTopBtn>
              <MenuTopBtn>
                <Star/>
              </MenuTopBtn>
              <MenuTopBtn>
                <Comment/>
              </MenuTopBtn>
              <MenuTopBtn>
                <Top/>
              </MenuTopBtn>
              <MenuTopBtn>
                <World/>
              </MenuTopBtn>
              <MenuTopBtn>
                <Houses/>
              </MenuTopBtn>
            </MenuBox>
            <MenuBox></MenuBox>
          </MenuBoxes>
        </MenuTop>
    </div>
  );
}

export default Menu;

const MenuTop = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 20%;
    
    height: 100%;
    padding: 0 30px;
    background-color: #fff;
    border-right: 2px solid #85797935;
`

const MenuBoxes = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`
const MenuTopBtn = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;
`