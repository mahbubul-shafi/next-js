import React from 'react'
import not_found from '../../not-found';

const blogpage = ({params}) => {
    const {id} = params;
    if(id === '3')
        return not_found();
  return (
    <div>blog id is {id}</div>
  )
}

export default blogpage