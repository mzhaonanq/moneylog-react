import styled from 'styled-components';
import React from 'react';

const _NotesSection =styled.section`
  background: #f5f5f5;
  padding:10px 16px;
  font-size: 14px;
  > label{
  display: flex;
  align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display:block;
      width: 100%;
      height: 72px;
      background:none;
      border:none;
    }
  }
`

const NotesSection: React.FunctionComponent =()=>{
  return(
    <_NotesSection>
      <label>
        <span>备注</span>
        <input type="text" placeholder='写点啥吧' />
      </label>
    </_NotesSection>
  )
}

export {NotesSection}