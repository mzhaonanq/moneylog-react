import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';

const Wrapper = styled.div`
background: #ffffff;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords()
  const {getName} = useTags()
  return (
    <Layout>
      <Wrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </Wrapper>
      <div>
        {records.map(r=>{
          return <div>{r.tagIds.map(tagId =><span key={tagId}>{getName(tagId)}</span>)}
          <hr/>
            {r.amount}
            <hr/>
            {dayjs(r.createdAt).format('YYYY年MM月DD日')}
          </div>
        })}
      </div>
    </Layout>
  )
}
export default Statistics