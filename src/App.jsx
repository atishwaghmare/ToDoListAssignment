// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
import './App.css'
// // //import Navbar from './component/Navbar.jsx'

// // //import Home from './component/Home.jsx'
// // //import Footer from './component/Footer..jsx'
// // import MainLanding from "./Landing Page/MainLanding";
// // import Table from './Landing Page/Table';
// // import Main_Page from './Assignment03-dec/Main_Page';
// // import JsxExpression from './component/jsxRules/JsxExpression';
// // import TopBar from './component/jsxRules/TopBar';
// // import RightSideBar from './component/jsxRules/RightSideBar';
// // import ClassbasedCompIntro from './component/typesOfComponent/classbasedComp/ClassbasedCompIntro';
// // import UseStateHookIntro from './component/hooked/usestateHooked/UseStateHookIntro';
// // import PropsIntro from './component/props/PropsIntro';
// // import ModuleCssIntro from './component/moduleCss/ModuleCssIntro';
// // import HomeAss from './Assignment/HomeAss';
// // import EventsIntro from './events/EventsIntro';
// // import UseEffectIntro from './UseEffect/UseEffectIntro';
// // import Index from './PortFolio/Index';
// // import ContextIntro from './contextApi/context/ContextIntro';
// // import AppContext from './contextApi/AppContext';
// // import Ex1 from './Bidirection Flow/Ex1';
// // import UseRefIntro from './useRefHook/UseRefIntro';
// // import AssignmentIntro from './Assignment2/AssignmentIntro';
// // import UseMemoIntro from './UseMemo/UseMemoIntro';
// // import HocIntro from './HOC/HocIntro';
// // import Example1gsap from './gsap/Example1gsap';
// // import ExGsap2 from './gsap/ExGsap2';
// // // import Index from './todoList/Index';
// // import { RouterProvider } from 'react-router-dom';
// // import { router } from './Routing/AppRoutes.jsx';
// // // import Login from './Routing/Login.jsx';
// // import Example3 from './gsap/Example3.jsx';
// // import GetData from './fetchData/GetData.jsx';
// // import Login from './Routing/Login.jsx';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { store } from './toolkit/store.js';
// // import InsertData from './CRUD/InsertData.jsx';
// // import Home from './Routing/Home.jsx';
// // // import { useSelector } from "@reduxjs/toolkit";

// // function App() {

// // //  console.log(store);
 
 
// //   // let todoList=useSelector((store)=>store.todoReducer.addTodo)

// //   // console.log(todoList);
  
// // //   let maTransaction=useDispatch()
// // //   let handle=()=>{
// // //     maTransaction(todoList(100))
// // //   }

  


// //   return (
    
// //     <div>
// //       <Home/>
// //       {/* <h1>{todoList}</h1> */}
// //       {/* <button >Click</button> */}
// //       {/* <InsertData/> */}
// //       {/* <Provider store={store}></Provider> */}
// //       {/* <GetData/> */}
// //       {/* app */}
// //       {/* <Example3/> */}
// //       {/* <Login/>
// // <RouterProvider router={router}></RouterProvider> */}
// //       {/* <ExGsap2/> */}
// //       {/* <Example1gsap/> */}
// //       {/* <HocIntro/> */}
// //       {/* <UseMemoIntro/> */}
// //       {/* <AssignmentIntro/> */}
// //       {/* <UseRefIntro/> */}
// //       {/* <Ex1/> */}
// //       {/* <AppContext><ContextIntro/></AppContext> */}
      
// //       {/* <Index/> */}
// //       {/* <Index/> */}
// //       {/* <UseEffectIntro/> */}
// //       {/* <EventsIntro/> */}
// //       {/* <HomeAss/> */}
// //       {/* <ModuleCssIntro/> */}
// //       {/* <PropsIntro/> */}
// //       {/* <UseStateHookIntro/> */}
// //       {/* types of component */}
// //       {/* <ClassbasedCompIntro/> */}
// //       {/* <TopBar/>
// //       <RightSideBar/> */}
// //       {/* <JsxExpression/> */}
// //       {/* <JsExpressionRule1/> */}
// //     </div>
// //   )
// // }

// // export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Home from './Routing/Home'
// import { RouterProvider } from 'react-router-dom'
// // import { router } from './Routing/AppRoutes'
// import InsertData from './CRUD/InsertData'
// import Ex1 from './Bidirection Flow/Ex1'
// import ContextIntro from './contextApi/context/ContextIntro'
// import AppContext from './contextApi/AppContext'
// import Task1 from './Task/Task1'
// import Task2 from './Task/Task2'
// import Task3 from './Task/Task3'
// import Task4 from './Task/Task4'
// import Login from './The green corner/Login'
// import Registration from './The green corner/Registration'
// import LoginPage from './The green corner/LoginPage'
// import { router } from './The green corner/GreenAppRouter'

// let App=()=>{
//   return(
//       <div>
//         {/* <LoginPage/> */}
//         {/* <Registration/> */}
//         <RouterProvider router={router}> <Login/></RouterProvider>
       
//         {/* <Task3/> */}
//         {/* <Task2/> */}
//         {/* <Task4/> */}
//         {/* <AppContext><ContextIntro/></AppContext> */}
        
//         {/* <Ex1/> */}
//        {/* <InsertData/>  */}
//         {/* <RouterProvider router={router}><Home/></RouterProvider>  */}
        
//       </div>
//   )
// }
// export default App

//ToDo List
// import React from 'react';
// import { useSelector } from 'react-redux';
// import TaskInput from './To_Do/components/TaskInput';
// import TaskList from './To_Do/components/TaskList';
// import Auth from './To_Do/components/Auth';
// import HomeToDo from './To_Do/HomeToDo';


// const App = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <div className="">
//       <Auth />
//       {isAuthenticated && (
//         <div className='flex  h-[100vh] '>
//           <div className=''>
//             <HomeToDo/>
//           </div>
//           {/* <div className='flex flex-col'>
//           <TaskInput />
//           <TaskList/>
//           </div> */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useRef, useState } from "react";
import { useSelector } from 'react-redux';
import Auth from './To_Do/components/Auth';
// import { images} from "/assets";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false, important: false },
    { id: 2, text: "Finish project report", completed: false, important: true },
    { id: 3, text: "Call the bank", completed: false, important: false },
    { id: 4, text: "Schedule dentist appointment", completed: false, important: false },
    { id: 5, text: "Plan weekend trip", completed: false, important: false },
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    { id: 6, text: "Read a book", completed: true, important: false },
    { id: 7, text: "Clean the house", completed: true, important: false },
    { id: 8, text: "Prepare presentation", completed: true, important: false },
    { id: 9, text: "Update blog", completed: true, important: false },
  ]);

  const [activeTab, setActiveTab] = useState("All Tasks");

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false, important: false }]);
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };
  
  const [isDark, setIsDark] = useState(true);
  const toggle=()=>{
    setIsDark(!isDark)
  }
  
  

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    const completedTask = tasks.find((task) => task.id === id);
    if (completedTask) {
      completedTask.completed = true;
      setCompletedTasks([...completedTasks, completedTask]);
    }
    setTasks(updatedTasks);
  };

  const filteredTasks = () => {
    switch (activeTab) {
      case "Important":
        return tasks.filter((task) => task.important);
      case "Today":
        return tasks; // Logic for "Today" can be added based on due dates if applicable
      case "Completed":
        return completedTasks;
      default:
        return tasks;
    }
  };

  const totalTasks = tasks.length + completedTasks.length;
  const completedPercentage = (completedTasks.length / totalTasks) * 100;

  const styles = {
    app: {
      display: "flex",
      height: "100vh",
      backgroundColor: isDark? '#e6ffe6':'#000000'
    },
    sidebar: {
      width: "25%",
      backgroundColor: isDark? '#e6ffe6':'#000000',
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    profile: {
      textAlign: "center",
    },
    profilePic: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
    },
    menu: {
      listStyle: "none",
      padding: "0",
      margin: "20px 0",
      width: "100%",
    },
    menuItem: {
      padding: "10px 20px",
      margin: "5px 0",
      cursor: "pointer",
      borderRadius: "5px",
      textAlign: "center",
    },
    activeMenuItem: {
      backgroundColor: "#36a2eb",
      color: "white",
    },
    chartContainer: {
      marginTop: "20px",
      width: "100%",
      textAlign: "center",
    },
    chart: {
      position: "relative",
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      background: `conic-gradient(#009900 ${completedPercentage}%, #e0e0e0 ${completedPercentage}%)`,
    },
    chartText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "bold",
    },
    taskList: {
      flex: "1",
      padding: "20px",
    },
    addTask: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    input: {
      flex: "1",
      padding: "10px",
      marginRight: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#36a2eb",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    task: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
    },
    completedTask: {
      textDecoration: "line-through",
      color: "gray",
    },
    important: {
      marginLeft: "auto",
      color: "gold",
      cursor: "pointer",
    },
  };


  return (
    <div>
      <Auth/> 
      {isAuthenticated && (
    <div style={styles.app}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.profile}>
          <img
            src="https://via.placeholder.com/150"
            // src="assets/images"
            alt="Profile"
            style={styles.profilePic}
          />
          <h3>Hey, ABCD</h3>
        </div>
        <ul style={styles.menu}>
          {["All Tasks", "Today", "Important", "Completed"].map((tab) => (
            <li
              key={tab}
              style={{
                ...styles.menuItem,
                ...(activeTab === tab ? styles.activeMenuItem : {}),
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div style={styles.chartContainer}>
          <h4>Today Tasks</h4>
          <div style={styles.chart}>
            <div style={styles.chartText}>{Math.round(completedPercentage)}%</div>
          </div>
        </div>
      </div>

      {/* Task List */}
      <div style={styles.taskList}>
      <button style={{backgroundColor:'#ffffff',border:'none', position:'fixed', right:'50px', top:'40px'}}onClick={toggle} >🌙</button>
        <h2>{activeTab}</h2>
        {activeTab !== "Completed" && (
          <div style={styles.addTask}>
            <input
              type="text"
              placeholder="Add A Task"
              style={styles.input}
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value) {
                  addTask(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button
              style={styles.button}
              onClick={(e) => {
                const input = e.target.previousSibling;
                if (input.value) {
                  addTask(input.value);
                  input.value = "";
                }
              }}
            >
              Add Task
            </button>
          </div>
        )}
        <ul>
          {filteredTasks().map((task) => (
            <li key={task.id} style={styles.task}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)}
              />
              <span style={task.completed ? styles.completedTask : {}}>
                {task.text}
              </span>
              {!task.completed && (
                <span
                  style={styles.important}
                  onClick={() => toggleImportant(task.id)}
                >
                  {task.important ? "⭐" : "☆"}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
      )}
    </div>        
  );
}

export default App;
