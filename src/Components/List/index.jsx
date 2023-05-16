import { Pagination } from '@mantine/core';
import React, { useState, useEffect  } from 'react';
function List ({list, toggleComplete, showItem}){
  const [currentPage, setPage] = useState(1);
  const [pageResult, setResult]= useState(null);
  let totalPage = Math.ceil(list.length / showItem);

  let totalResult= list.map(item => (
    <div key={item.id}>
      <p>{item.text}</p>
      <p><small>Assigned to: {item.assignee}</small></p>
      <p><small>Difficulty: {item.difficulty}</small></p>
      <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
      <hr />

    </div>
  ));



  useEffect(() => {    
    let lastIdx = currentPage * showItem;
    let firstIdx = lastIdx - showItem;
    setResult(totalResult.slice(firstIdx, lastIdx));

  }, [currentPage,list]);

console.log(pageResult);
  return (
    <>
      {pageResult}
    <Pagination value={currentPage} onChange={setPage} total={totalPage} color="orange" size="lg" radius="xl" withEdges />


    </>
  );
}

export default List;