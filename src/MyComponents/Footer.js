import React from 'react'

export const Footer = () => {
   let footerStyle = {

        position: "absolute",
        width: "100%",  
        top: "100vh",
        border: "2px solid cyan"
    
    }
  return (
    <footer className='bg-dark text-light py-2 ' style ={footerStyle}>
        <p className='text-center'>
        Copyright &copy; MyTodosList.com
        </p>
        
    </footer>
  )
}
