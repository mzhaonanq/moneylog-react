import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './useUpdate';

export type TagItem = { id: number; name: string }

export const useTags = () => {
 const [tags, setTags] = useState<TagItem[]>([]);
 useEffect(() => {
 const  initialTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
   ];
  let localTags = JSON.parse(window.localStorage.getItem('tags') || JSON.stringify(initialTags));
  setTags(localTags);
 },[])
 useUpdate(() => {
  window.localStorage.setItem('tags', JSON.stringify(tags));
 }, tags);
 const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

 const updateTag = (id: number, {name}: { name: string }) => {
  setTags(tags.map(tag => tag.id === id ? {id:id, name:name} : tag));
 };
 const deleteTag = (id: number) => {
  setTags(tags.filter(tag => tag.id !== id));
  window.history.back()
 };
 const addTag = () => {
  const tagName = window.prompt('新标签的名称为');
  if (tagName !== null && tagName !== '') {
   setTags([...tags, {id: createId(), name: tagName}]);
  }
 };
 const getName=(id: number)=>{
  const tag = tags.filter(t=>t.id===id)[0]
  return tag ? tag.name : '暂无标签'
 }
 return {
  tags, setTags, findTag, updateTag,  deleteTag, addTag,getName
 };
}
