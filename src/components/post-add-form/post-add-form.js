import React from 'react'
import './post-add-form.css'

const PostAddForm =({onAdd}) =>{
 return(
  
  <div className='bottom-pannel d-flex'>
   <input
   type='text'
   placeholder='Писать Сюда'
   className = 'form-control new-post-label' 
   />
   <button 
   type='submit'
   className='btn btn-outline-secondary'
   onClick={()=>onAdd('hi')}
   >Добавить</button>
  </div>
 )
}
export default PostAddForm