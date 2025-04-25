import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const NavItem = styled.li`
  cursor: pointer;
  padding:20px;
  border-radius: 8px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;


function MainForm(){
   const navigate = useNavigate();

   return(
         <Nav>
            <NavList>
               <NavItem onClick={()=>{navigate('/mainForm/home')}}>Home</NavItem>
               <NavItem onClick={()=>{navigate('/mainForm/category')}}>Category</NavItem>
               <NavItem onClick={()=>{navigate('/mainForm/orders')}}>My Orders</NavItem>
               <NavItem onClick={()=>{navigate('/mainForm/cart')}}>Cart</NavItem>
            </NavList>
            <Outlet></Outlet>
         </Nav>
   )
}



export default MainForm;