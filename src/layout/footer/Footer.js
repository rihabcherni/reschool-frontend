import React from 'react'
import styled from "styled-components";

const Foot = styled.div`
    background-color:#E8E8E8;
    border-top:2px solid #C0C0C0;
    width:100%;
    position: fixed;
    top: 95%;
    height:35px;
    margin-left:-10px;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

export default function Footer() {
  return (
    <Foot>
        Re school ecology © 2022    
        <a href='https://www.facebook.com/RESCHOOL.EDUCATION/'> facebook</a>
        <a href='https://www.facebook.com/RESCHOOL.EDUCATION/'> website</a>
    </Foot>
  )
}
