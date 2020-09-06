import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  > ul{
  display:flex;
    > li{
    width: 33.33%;
    text-align: center;
    padding: 16px;
    }
  }
`

const Nav =()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/">记账</Link>
        </li>
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/statistics">数据</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav