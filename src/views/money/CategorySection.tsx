import styled from 'styled-components';
import React from 'react';

const _CategorySection=styled.section`
  font-size: 24px;
  > ul{
  display:flex;
  background: #c4c4c4;
    > li{
    width: 50%;
    text-align:center;
    padding:16px 0;
    position: relative;
    &.selected::after{
      content:'';
      display: block;
      height:3px;
      background:#333;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      }
    }
  }
`
const CategorySection: React.FunctionComponent =()=>{
  return(
    <_CategorySection>
      <ul>
        <li className='selected'>收入</li>
        <li>支出</li>
      </ul>
    </_CategorySection>
  )
}
export {CategorySection}