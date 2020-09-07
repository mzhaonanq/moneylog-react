import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSelection = styled.section`
background: #fff;
padding: 12px 16px;
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

`
const CategorySelection=styled.section`

`
const NumberPadSelection =styled.section`

`

function Money() {
  return (
    <Layout>
      <TagsSelection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSelection>
      <NotesSelection>
        <span>备注</span>
        <input type="text"/>
      </NotesSelection>
      <CategorySelection>
        <ul>
          <li>收入</li>
          <li>支出</li>
        </ul>
      </CategorySelection>
      <NumberPadSelection>
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
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </NumberPadSelection>
    </Layout>
  )
}

export default Money