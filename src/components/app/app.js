import React from 'react'
import AppHeader from '../header'
import SearchPannel from '../search'
import PostStatusFilter from '../filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.css'

const App =()=>{
  const data =[
    {label: 'Learning React', important: true, id:1},
    {label: 'Not learning React', important: false, id:2},
    {label: 'Sleep', important: false, id:3}
  ]

 return (
<div className='App'>
 <AppHeader/>
 <div className='search-pannel d-flex' >
<SearchPannel/>
<PostStatusFilter/>

  </div>
  <PostList posts={data}/>
  <PostAddForm/>
</div>
  )
}

export default App