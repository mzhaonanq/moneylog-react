import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';

const Wrapper =styled.section`
  background: #f5f5f5;
  padding:14px 16px;
  font-size: 14px;
    @media(max-height: 570px){
    padding: 8px 16px;
    }
`
const NoteInput =  styled(Input)`
border: none;
background: #f5f5f5;
`

type Props ={
  value: string;
  onChange: (value: string)=>void
}
const NoteSection: React.FunctionComponent<Props> =(props)=>{
  const note = props.value
  const onChange: ChangeEventHandler<HTMLInputElement> =(e)=>{
      props.onChange(e.target.value)
    }
  return(
    <Wrapper>
      <NoteInput label='备注' type='text' placeholder='写点啥吧' defaultValue={note} onChange={onChange} />
    </Wrapper>
  )
}
export {NoteSection}