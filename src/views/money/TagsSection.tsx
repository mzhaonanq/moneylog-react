import styled from 'styled-components';

const TagsSection = styled.section`
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
export {TagsSection}