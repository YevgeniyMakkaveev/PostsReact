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
    {label: 'Learning React', important: true, like: false, id: 1},
    {label: 'Not learning React', important: false, like: false, id: 2},
    {label: 'Sleep', important: false, like: false, id: 3}
  ],
  tearm: '',
  filter: 'all'

    }
    this.deleteItem=this.deleteItem.bind(this)
    this.addItem=this.addItem.bind(this)
    this.onToggleImportant=this.onToggleImportant.bind(this)
    this.onToggleLiked=this.onToggleLiked.bind(this)
    this.onUpdateSearch=this.onUpdateSearch.bind(this)
    this.onFilterSelect=this.onFilterSelect.bind(this)
    this.maxId= 4
  }

  deleteItem(id){
   this.setState(({data})=>{
     const index=data.findIndex(elem=>elem.id === id)
  

     const newArr =[...data.slice(0, index),...data.slice(index+1)];
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
  
   onToggleImportant(id){
          this.setState(({data})=>{
       const index = data.findIndex(elem=>elem.id=== id)
       const old = data[index]
       const newItem ={...old, important: !old.important}
       const newArr =[...data.slice(0, index),newItem ,...data.slice(index+1)]
       return{
         data: newArr
       }
     })
   }

   onToggleLiked(id){
     this.setState(({data})=>{
       const index = data.findIndex(elem=>elem.id=== id)
       const old = data[index]
       const newItem ={...old, like: !old.like}
       const newArr =[...data.slice(0, index),newItem ,...data.slice(index+1)]
       return{
         data: newArr
       }
     })
   }

   searchPost(items, tearm){
    if(tearm.length === 0){
      return items
    }
    return items.filter((items)=>{
      return items.label.indexOf(tearm) >-1
    })
   }
   onUpdateSearch(tearm){
     this.setState({tearm})
   }

   filterPost(items, filter){
     if(filter ==='like'){
       return items.filter(item=>item.like)
     } else if(filter ==='important'){
       return items.filter(item=>item.important)
     } else
      return items
   }
   onFilterSelect(filter){
     this.setState({filter})
   }

  render(){
    const {data, tearm, filter}=this.state
    const liked = data.filter(item =>item.like).length;
    const allPost=data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, tearm), filter)
 

 return (
<div className='App'>
 <AppHeader 
 liked={liked}
 allPost={allPost}/>
 <div className='search-pannel d-flex' >
<SearchPannel 
onUpdateSearch ={this.onUpdateSearch}/>
<PostStatusFilter 
filter={filter}
onFilterSelect={this.onFilterSelect}
/>

  </div>
  <PostList posts={visiblePosts}
  onDelete={this.deleteItem}
  onToggleImportant={this.onToggleImportant}
  onToggleLiked={this.onToggleLiked}/>
  <PostAddForm onAdd={this.addItem}/>
</div>
  )
}}

//32 10