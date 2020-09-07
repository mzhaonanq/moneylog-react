import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  > ul{
  display:flex;
    > li{
    width: 33.33%;
    text-align: center;
    padding: 4px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
      > .icon{
         width: 24px;
         height: 24px;
      }
    }
  }
`

const Nav =()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name='money'/>
          <Link to="/">记账</Link>
        </li>
        <li>
          <Icon name='labels'/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name='statistics'/>
          <Link to="/statistics">数据</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav