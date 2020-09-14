import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper=styled.section`
  font-size: 24px;
  > ul{
  display:flex;
  
    > li{
    width: 50%;
    text-align:center;
    padding:16px 0;
    position: relative;
    @media(max-height: 570px){
    padding: 10px 0;
    }
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
type Props ={
  value: '-'|'+',
  onChange: (value: '-'|'+')=>void
}
export const categoryMap = {'-':'支出','+':'收入'}

const CategorySection: React.FunctionComponent<Props> =(props)=>{

  type Keys = keyof typeof categoryMap;
  const [categoryList]=useState<Keys[]>(['-','+'])
  const category = props.value
  return(
    <Wrapper>
      <ul>
        {categoryList.map(c=>
        <li key={c}
            className={category === c ? 'selected' : ''}
            onClick={() => {props.onChange(c);}}
        >{categoryMap[c]}
        </li>
        )}
      </ul>
    </Wrapper>
  )
}
export {CategorySection}