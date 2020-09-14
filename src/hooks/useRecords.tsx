import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {createId} from '../lib/createId';

export type RecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
  createdAt: string//ISO 8601
  recordId: number
}
type newRecordItem = Omit<RecordItem, 'createdAt'| 'recordId'>

export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records))
  },records)
  const findRecord = (id: number) => records.filter(record => record.recordId === id)[0];
  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {
      alert('请输入金额');
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert('请选择标签');
      return false;
    }
    const record = {...newRecord, createdAt: (new Date()).toISOString(),recordId: createId()};
    setRecords([...records, record]);
    return true
  };
  const deleteRecord =(id: number)=>{
    setRecords(records.filter(record =>record.recordId !==id ));
    window.history.back()
  }
  const updateRecordAmount=(id: number, amount: number)=>{
    setRecords(records.map(record=>record.recordId===id? {...record,amount: amount} : record))
  }
  const updateRecordNote=(id: number,note: string)=>{
    setRecords(records.map(record=>record.recordId===id? {...record,note: note} : record))
  }
  return {records, addRecord, deleteRecord,findRecord,updateRecordAmount,updateRecordNote};
};