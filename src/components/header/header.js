import React from 'react'
import './header.css'

const AppHeader = ({liked,allPost})=>{
return(
 <div className ='app-header d-flex'>
<h1>Evgeny Makkaveev</h1>
<h2> {allPost} записи и {liked} норм</h2>

 </div>
)
}

export default AppHeader