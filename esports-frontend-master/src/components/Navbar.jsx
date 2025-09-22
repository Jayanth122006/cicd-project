import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "../assets/esportlogo.png";

// --- Styled Components ---
const NavContainer = styled.nav`
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  display: flex; justify-content: center; align-items: center;
  padding: 15px 30px;
  z-index: 1000;
  background: rgba(10,10,10,0.25);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
`;

const NavContent = styled.div`
  width: 100%; 
  max-width: 1200px;
  display: flex; 
  justify-content: space-between; 
  align-items: center;
`;

const Logo = styled.img` height: 40px; border-radius: 14px; `;

const Links = styled.ul`
  display: flex; gap: 40px; 
  list-style: none;
  @media(max-width:768px){ display:none; }
`;

const LinkItem = styled(NavLink)`
  color: #e0e0e0; 
  font-weight: 500; 
  text-decoration: none;
  position: relative; 
  transition: 0.3s;
  &::after {
    content:""; position:absolute; bottom:0; left:50%;
    transform:translateX(-50%); width:0; height:2px;
    background:#fff; transition:width 0.3s;
  }
  &.active,&:hover { color:#fff; }
  &.active::after { width:100%; }
  ${({ $mobile })=> $mobile && css` // CHANGED: mobile to $mobile
    font-size:1.5rem; padding:15px 0; width:100%; text-align:center;
    &::after{ height:3px; }
  `}
`;

const Button = styled.button`
  background:${({ $primary })=> $primary ?"#fff":"transparent"}; // CHANGED: primary to $primary
  color:${({ $primary })=> $primary ?"#000":"#fff"}; // CHANGED: primary to $primary
  border:1px solid #fff; 
  border-radius:50px;
  padding:10px 25px; cursor:pointer; 
  font-weight:600;
  transition:0.3s;
  &:hover{ background:${({ $primary })=> $primary ?"#f0f0f0":"rgba(255,255,255,0.1)"}; } // CHANGED: primary to $primary
  ${({ $mobile })=> $mobile && css` width:80%; padding:15px 0; font-size:1.1rem; `} // CHANGED: mobile to $mobile
`;

const MenuIcon = styled.div`
  display:none; cursor:pointer; z-index:1001;
  @media(max-width:768px){ display:block; }
  div{ width:25px; height:3px; background:#fff; margin:5px 0; transition:0.4s; }
  ${({open})=> open && css`
    div:nth-child(1){ transform:rotate(-45deg) translate(-5px,6px); }
    div:nth-child(2){ opacity:0; }
    div:nth-child(3){ transform:rotate(45deg) translate(-5px,-6px); }
  `}
`;

const MobileMenu = styled.div`
  position:fixed; top:0; left:0;
  width:100%; height:100vh;
  background:rgba(10,10,10,0.95); 
  backdrop-filter:blur(20px);
  z-index:999; 
  display:flex; 
  flex-direction:column; 
  align-items:center;
  padding:80px 20px; 
  transform:translateX(${({open})=>open?"0":"100%"});
  transition:0.5s; 
  overflow-y:auto;
  ul{ list-style:none; display:flex; flex-direction:column; gap:25px; margin-bottom:40px; width:100%; max-width:400px; align-items:center; }
  div{ display:flex; flex-direction:column; gap:20px; width:100%; max-width:400px; align-items:center; }
`;

// --- Component ---
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = (path) => {
    setOpen(false);
    navigate(path);
  };

  const pages = [
    {name:"Home", path:"/"},
    {name:"Games", path:"/games"},
    {name:"News", path:"/news"},
    {name:"Contact", path:"/contact"},
  ];

  return (
    <NavContainer>
      <NavContent>
        <NavLink to="/"><Logo src={logo} alt="Esports Logo" /></NavLink>

        <Links>
          {pages.map(p=>(
            <li key={p.path}><LinkItem to={p.path}>{p.name}</LinkItem></li>
          ))}
        </Links>

        <div className="auth" style={{display:"flex",gap:"15px"}}>
          <Button onClick={()=>navigate("/auth/login")}>Login</Button>
          {/* CHANGED: primary prop to $primary */}
          <Button $primary onClick={()=>navigate("/auth/signup")}>Sign Up</Button>
        </div>

        <MenuIcon open={open} onClick={()=>setOpen(!open)}>
          <div/><div/><div/>
        </MenuIcon>
      </NavContent>

      <MobileMenu open={open}>
        <ul>
          {pages.map(p=>(
            <li key={p.path}>
              {/* CHANGED: mobile prop to $mobile */}
              <LinkItem $mobile to={p.path} onClick={()=>handleClick(p.path)}>{p.name}</LinkItem>
            </li>
          ))}
        </ul>
        <div>
          {/* CHANGED: mobile prop to $mobile */}
          <Button $mobile onClick={()=>handleClick("/auth/login")}>Login</Button>
          {/* CHANGED: mobile and primary props to $mobile and $primary */}
          <Button $mobile $primary onClick={()=>handleClick("/auth/signup")}>Sign Up</Button>
        </div>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar;