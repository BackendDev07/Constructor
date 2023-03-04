import { Drawer } from 'antd'
import React, {useState} from "react";
import styled from 'styled-components'
import MenuSvg from '../assets/icons/MenuSvg'
import SearchSvg from '../assets/icons/SearchSvg'
import RightSvg from '../assets/icons/RightSvg'
import UserSvg from '../assets/icons/UserSvg'
import Subscribe from '../assets/icons/Subscribe'
import Delete from '../assets/icons/Delete'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleDash = () => {
    navigate('/dashboard')
  }
  const handleAbout = () => {
    navigate('/about')
  }
  const handleNews = () => {
    navigate('/news')
  }
  const handleUser = () => {
    navigate('/user')
  }
  const handleCon = () => {
    navigate('/contact')
  }
  const handleHome = () => {
    navigate('/')
  }
  return (
    <HeaderTop>
      <Container>
          <HeaderBoxes>
            <HeaderBox>
              <HeaderBtn onClick={showDrawer}>
                <MenuSvg/>
              </HeaderBtn>
              <HeaderLogo onClick={handleHome}>
                <span>Constructor</span>
              </HeaderLogo>
            </HeaderBox>
            <HeaderBox>
              <HeaderInputBox>
                <HeadInputMinBox>
                  <SearchSvg/>
                  <HeaderInput placeholder='Search Products, Orders and Clients'/>
                </HeadInputMinBox>
              <RightSvg/>
              </HeaderInputBox>
            </HeaderBox>
            <HeaderBox>
              <UserBox>
              <UserSvg/>
              <UserSpan>Clayton Santos</UserSpan>
              </UserBox>

                  <HeaderSvgBox>
                    <Subscribe/>
                  </HeaderSvgBox>
                  <HeaderSvgBox>
                    <Delete/>
                  </HeaderSvgBox>
              
            </HeaderBox>
          </HeaderBoxes>
      </Container>
      <Drawer onClose={onClose} open={open}>
        <Container>
          <DrawerBox>
            <DrawerSpan onClick={handleDash}>Dashboard</DrawerSpan>
            <DrawerSpan onClick={handleAbout}>About Us</DrawerSpan>
            <DrawerSpan onClick={handleNews}>News</DrawerSpan>
            <DrawerSpan onClick={handleUser}>User Policy</DrawerSpan>
            <DrawerSpan onClick={handleCon}>Contacts</DrawerSpan>
          </DrawerBox>
        </Container>
      </Drawer>
    </HeaderTop>
  );
}

export default Header;

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

const HeaderTop = styled.div`
  padding: 20px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const HeaderBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
`

const HeaderBtn = styled.button`
  cursor: pointer;
  padding: 15px;
  border-radius: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: inherit;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const HeaderLogo = styled.div`
  font-weight: 700;
font-size: 18px;
line-height: 30px;
color: #4D5E80;
cursor: pointer;
`

const HeaderInput = styled.input`
border: none;
outline: none;
display: flex;
align-items: center;
width: 100%;
      &::placeholder{
        font-weight: 700;
font-size: 12px;
line-height: 20px;
color: #adb8cc6a;
      }
  
`

const HeaderInputBox = styled.div`
  display: flex;
  align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: space-between;
  padding: 10px 25px;
  border-radius: 30px;
  width: 450px;
`
const HeadInputMinBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const UserSpan = styled.div`
  font-weight: 700;
font-size: 13px;
line-height: 25px;
color: #6B7A99;
`

const HeaderSvgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
`

const DrawerSpan = styled.span`
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px;
  width: 100%;
  line-height: 25px;
  color: #7D8FB3;
  cursor: pointer;
  &:hover{
    transition: all 0.5s ease;
    background-color: #7D8FB3;
    color: black;
  }
`

const DrawerBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`