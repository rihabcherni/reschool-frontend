import React from 'react'
import styled from "styled-components";
import BadgeAvatars from "../../component/Avtar"
import SwipeableTemporaryDrawer from "../../component/RightSidebar"
const Head = styled.div`
background-color:#E8E8E8;
border-bottom:2px solid #C0C0C0;
width:100%;
position: fixed;
left: 10;
top: 0%;
height:43px;
margin-left:-10px;
cursor: pointer;
&:focus {
    outline: none;
}
transition: all .5s ease;
`;

export default function Header() {
  return (
    <Head>
      {/*<BadgeAvatars/>
  <SwipeableTemporaryDrawer/>*/}
    </Head>
  )
}
