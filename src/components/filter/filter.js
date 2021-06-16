import React, { Component } from 'react'

export default class PostStatusFilter extends Component {
 constructor(props){
  super(props);
  this.buttons=[
   {name: 'all', label: 'Все'},
   {name: 'like', label: 'Понравилось'},
   {name: 'important', label: 'Избранные'}
   
  ]
 }
 render(){
  const buttons = this.buttons.map(({name, label})=>{
   const active = this.props.filter === name;
   const classss= active? 'btn-info': 'btn-outline-secondary'
   return(
   <button type="button"
    key={name}
    className={`btn ${classss}`}
    onClick={()=>{this.props.onFilterSelect(name)}}>
    {label}
    </button>
  )} )
 {return(
 <div className ='btn-group'>
 {buttons}
 
 </div> )}
}}
