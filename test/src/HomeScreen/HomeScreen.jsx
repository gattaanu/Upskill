import React from 'react'
import CreditCardValidator from '../CreditCardValidator/CreditCardValidator'
import '../HomeScreen/HomeScreen.scss';
import ToDoList from '../ToDo/ToDoList';
import TaskManager from '../TaskManager/TaskManager';
import QuizApp from '../QuizApp/QuizApp';
const HomeScreen = () => {
  return (
    <div >
      
        <div class="cards">
        <CreditCardValidator></CreditCardValidator>
        <ToDoList></ToDoList>
        </div>
        <TaskManager></TaskManager>
        <QuizApp></QuizApp>
    </div>
  )
}

export default HomeScreen