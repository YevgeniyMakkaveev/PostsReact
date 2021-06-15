import React, { Component } from 'react'
import AppHeader from '../header'
import SearchPannel from '../search'
import PostStatusFilter from '../filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import './app.css'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state ={
     data: [
    {label: 'Learning React', important: true, id: 1},
    {label: 'Not learning React', important: false, id: 2},
    {label: 'Sleep', important: false, id: 3}
  ]

    }
    this.deleteItem=this.deleteItem.bind(this)
    this.addItem=this.addItem.bind(this)
    this.maxId= 4
  }

  deleteItem(id){
   this.setState(({data})=>{
     const index=data.findIndex(elem=>elem.id === id)
     const before = data.slice(0, index)
     const after = data.slice(index+1)

     const newArr =[...before,...after];
     return {data: newArr}
   })}

   addItem(post){
     const newItem ={
       label: post,
       important: false,
       id: this.maxId++
     }
     this.setState(({data})=>{
       const newArr =[...data, newItem];
       return{data: newArr}
     })
   }
  
  render(){
 

 return (
<div className='App'>
 <AppHeader/>
 <div className='search-pannel d-flex' >
<SearchPannel/>
<PostStatusFilter/>

  </div>
  <PostList posts={this.state.data}
  onDelete={this.deleteItem}/>
  <PostAddForm onAdd={this.addItem}/>
</div>
  )
}}

