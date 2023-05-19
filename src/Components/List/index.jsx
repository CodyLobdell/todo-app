import { Pagination } from '@mantine/core';
import React, { useState, useEffect, useContext } from 'react';
import { SettingsContext } from '../../Context/settings';
function List({ list, toggleComplete, showItem }) {
  const { state } = useContext(SettingsContext);
  const [currentPage, setPage] = useState(1);
  const [pageResult, setResult] = useState(null);
  let totalPage = Math.ceil(list.length / state.display);


  useEffect(() => {
    let lastIdx = currentPage * state.display;
    let firstIdx = lastIdx - state.display;
    let totalResult = list.map(item => (
      <div key={item.id}>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        <hr />
      </div>
    ));
    setResult(totalResult.slice(firstIdx, lastIdx));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, list]);

  useEffect(() => {

    let ans = null;
    let ans2 = null;
    if (state.hideComplete === 'true') {
      ans = list.filter(item =>
        item.complete === true
      )
    } else {
      ans = list;
    }
    if (state.sort !== 'noSort') {
      ans2 = ans.filter(item => item.difficulty.toString() === state.sort);
    } else {
      ans2 = ans;
    }
    console.log('43setting result', ans2);
    let lastIdx = currentPage * state.display;
    let firstIdx = lastIdx - state.display;
    let totalResult = ans2.map(item => (
      <div key={item.id}>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        <hr />
      </div>
    ));
    setResult(totalResult.slice(firstIdx, lastIdx));
    console.log(pageResult);
  }, [currentPage, state]);


  return (
    <>
      {pageResult}
      <Pagination value={currentPage} onChange={setPage} total={totalPage} color="orange" size="lg" radius="xl" withEdges />
    </>
  );
}

export default List;