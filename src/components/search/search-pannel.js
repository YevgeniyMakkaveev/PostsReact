import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPannel extends Component {
 constructor(props){
  super(props)
  this.state={
   tearm: ''
   
  }
  this.onUpdateSearch=this.onUpdateSearch.bind(this)
 }
 onUpdateSearch(e){
  const tearm=e.target.value;
  this.setState({tearm});
 this.props.onUpdateSearch(tearm)
 }

 render(){
 return (
  <input 
  className='form-control search-input'
  type ='text'
  placeholder = 'Поиск'
  onChange={this.onUpdateSearch}
  />
 )}
}
