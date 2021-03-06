import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../hooks/useTags';
import {createId} from '../../lib/createId';


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
  value: number[];
  onChange: (value: number[])=>void

}
const TagsSection: React.FunctionComponent<Props> =(props)=>{
  const {tags,setTags} =   useTags()
  const selectedTagIds = props.value
  const onAddTag =()=>{
    const tagName = window.prompt('新的标签名为')
    if(tagName!==null){
      setTags(([...tags,{id:createId(),name:tagName}]))
    }
  }
  const onToggleTag=(tagId: number)=>{
    if(selectedTagIds.indexOf(tagId)>=0){
      props.onChange(selectedTagIds?.filter(t=>t!==tagId))
    }else{
      props.onChange([...selectedTagIds,tagId])
    }
  }
  const getClass=(tagId: number)=>selectedTagIds.indexOf(tagId) >=0? 'selected':''
  return(
  <Wrapper>
    <button onClick={onAddTag}>新增标签</button>
    <ol>
      {tags.map(tag=>
        <li key={tag.id} onClick={()=>{onToggleTag(tag.id)}}
        className={getClass(tag.id)}
        >{tag.name}</li>
      )}
    </ol>
  </Wrapper>
  )
}

export {TagsSection}