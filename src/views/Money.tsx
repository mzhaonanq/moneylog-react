import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSelection = styled.section`
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
const NotesSelection =styled.section`
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
const CategorySelection=styled.section`
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
const NumberPadSelection =styled.section`
display:flex;
flex-direction: column;
  > .output{
  background:#fff;
  font-size: 36px;
  line-height: 72px;
  text-align: right;
  padding: 0 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
              inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
    float:left;
    width: 25%;
    height: 64px;
    font-size: 18px;
    border:none;
    &.ok{
    height: 128px;
    float:right;
    }
    &.zero{
    width: 50%;
    }
    &:nth-child(1){
    background: #f2f2f2;
    }
    &:nth-child(2),
    &:nth-child(5){
    background: #e0e0e0;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9){
    background: #d3d3d3;
    }
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10){
    background: #c1c1c1;
    }
    &:nth-child(8),
    &:nth-child(11),
    &:nth-child(13){
    background: #b8b8b8;
    }
    &:nth-child(12){
    background: #9a9a9a;
    }
    &:nth-child(14){
    background: #a9a9a9;
    }
    }
  }
`
const MyLayout = styled(Layout)`
display:flex;
flex-direction: column;
`

function Money() {
  return (
    <MyLayout >
      <TagsSelection>
        <button>新增标签</button>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
      </TagsSelection>
      <NotesSelection>
        <label>
        <span>备注</span>
        <input type="text" placeholder='写点啥吧' />
        </label>
      </NotesSelection>
      <CategorySelection>
        <ul>
          <li className='selected'>收入</li>
          <li>支出</li>
        </ul>
      </CategorySelection>
      <NumberPadSelection>
        <div className='output'>
          100
        </div>
        <div className='pad clearfix' >
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button >.</button>
        </div>
      </NumberPadSelection>
    </MyLayout>
  )
}

export default Money