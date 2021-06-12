import React from 'react'
import AppHeader from '../header'
import SearchPannel from '../search'
import PostStatusFilter from '../filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.css'

const App =()=>{

 return (
<div className='App'>
 <AppHeader/>
 <div className='search-pannel d-flex' >
<SearchPannel/>
<PostStatusFilter/>

  </div>
  <PostList/>
  <PostAddForm/>
</div>
  )
}

export default App