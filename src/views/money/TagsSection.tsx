import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';


const Wrapper = styled.section`
background: #fff;
flex-grow: 1;
padding: 12px 16px;
display:flex;
flex-direction: column-reverse;
align-items: flex-start;
  > ol{
    margin:0 -12px;
    > li{
    display:inline-block;
    background: #d9d9d9;
    padding: 3px 18px;
    border-radius: 18px;
    font-size: 14px;
    margin: 8px 12px;
    &.selected{
      background: red;
    }
    }
  }
  > button{
  background:none;
  border:none;
  padding: 2px 4px;
  border-bottom:1px solid #333;
  color: #666;
  margin-top: 8px;
  }
`
type Props ={
  value: string[];
  onChange: (value: string[])=>void

}
const TagsSection: React.FunctionComponent<Props>=(props)=>{
  const {tags,setTags} =   useTags()
  const selectedTags = props.value
  const onAddTag =()=>{
    const tagName = window.prompt('新的标签名为')
    if(tagName!==null){
      setTags(([...tags,tagName]))
    }
  }
  const onToggleTag=(tag: string)=>{
    if(selectedTags.indexOf(tag)>=0){
      props.onChange(selectedTags?.filter(t=>t!==tag))
    }else{
      props.onChange([...selectedTags,tag])
    }
  }
  const getClass=(tag: string)=>selectedTags.indexOf(tag) >=0? 'selected':''
  return(
  <Wrapper>
    <button onClick={onAddTag}>新增标签</button>
    <ol>
      {tags.map(tag=>
        <li key={tag} onClick={()=>{onToggleTag(tag)}}
        className={getClass(tag)}
        >{tag}</li>
      )}
    </ol>
  </Wrapper>
  )
}

export {TagsSection}