import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

type Params = {
  id: string
}

const Topbar = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
line-height: 20px;
padding: 14px;
background: #ffffff;
`
const Wrapper = styled.div`
background: #ffffff;
padding: 0 16px;
margin-top: 8px;
`

const Tag: React.FunctionComponent = (props) => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (<div>
    <Wrapper>
      <Input label='标签名' type='text'
             placeholder="修改标签名"
             value={tag.name}
             onChange={(e) => {
               updateTag(tag.id, {name: e.target.value});
             }}
      />
    </Wrapper>
    <div>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => {deleteTag(tag.id);}}>删除标签</Button>
      </Center>
    </div>
  </div>);

  return (
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {tag ? tagContent(tag) : <Center>tag不存在</Center>}
    </Layout>
  );

  return (
    <div>
      tag 不存在
    </div>
  );

}
export {Tag}