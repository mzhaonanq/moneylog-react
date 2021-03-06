import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './money/CategorySection';
import {NoteSection} from './money/NoteSection';
import {NumberPadSection} from './money/NumberPadSection';
import {TagsSection} from './money/TagsSection';
import {useRecords} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
display:flex;
flex-direction: column;
`;



const Wrapper = styled.div`
background: #c4c4c4;
`
type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);

  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const {addRecord} = useRecords();
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };

  return (
    <MyLayout scrollTop={9999}>

      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
                   <Wrapper>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
                   </Wrapper>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={() => {submit();}}
      />
    </MyLayout>
  );
}

export default Money;