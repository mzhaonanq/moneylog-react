import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
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
      > a{
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
        > .icon{
         width: 24px;
         height: 24px;
        }
      &.selected{
      color:red;
        > .icon{
        fill:red;
        }
      }
      }
    }
  }
`

const Nav =()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName='selected'>
            <Icon name='money'/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName='selected'>
            <Icon name='labels'/>
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName='selected'>
            <Icon name='statistics'/>
            数据
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav