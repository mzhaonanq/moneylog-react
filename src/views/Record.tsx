import React from 'react';
import {useParams} from 'react-router-dom';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
import {Button} from '../components/Button';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';


const Topbar = styled.header`
display:flex;
justify-content: space-between;
align-items: center;
line-height: 20px;
padding: 14px;
background: #ffffff;
`;
const Wrapper = styled.div`
background: #ffffff;
padding: 0 16px;
margin-top: 8px;
`;
type Params = {
  id: string
}

const Record: React.FunctionComponent = () => {
  const {deleteRecord, findRecord} = useRecords();
  let {id: idString} = useParams<Params>();
  const record = findRecord(parseInt(idString));

  const onClick = () => {
    window.history.back();
  };
  const recordContent = (record: {
                        tagIds: number[]
                        note: string
                        category: '+' | '-'
                        amount: number
                        createdAt: string
                        recordId: number
                      }
  ) => (<div>
    <Wrapper>
      <Input label='记录' type='text'
             defaultValue={record.amount}
        // onChange={(e) => {
        //   updateRecord(tag.id, {name: e.target.value});
        // }}
      />
    </Wrapper>
    <div>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => {deleteRecord(record.recordId);}}>删除记录</Button>
      </Center>
    </div>
  </div>);

  return (
    <Layout>
      <Topbar>
        <Icon name='left' onClick={onClick}/>
        <span>编辑记录</span>
        <Icon/>
      </Topbar>
      {record ? recordContent(record) : <Center>记录不存在</Center>}
    </Layout>
  );
};
export {Record};