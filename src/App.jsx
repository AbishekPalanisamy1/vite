import React, { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/Feedbackform';
const App = () => {


  const [feedback,setfeedback]=useState([
    {
      id:1,
      text:"This is a sample one"
    },
    {
      id:2,
      text:"This is a sample two"
    },
    {
      id:3,
      text:"This is a sample three"
    },
    {
      id:4,
      text:"This is a sample four"
    },
    {
      id:5,
      text:"This is a sample five"
    },
    {
      id:6,
      text:"This is a sample six"
    },
  ]);


  const deletefeedback=(id)=>{


   
    setfeedback(feedback.filter((item)=>
    item.id!==id));


  }

  return (
    
    <div>
      <Header/>
     

      <div className="container">
      <FeedbackForm/>
      <FeedbackList feedback={feedback} handleDelete={deletefeedback}/>
      
      </div>

     
      
    
      </div>
      
  )
}

export default App