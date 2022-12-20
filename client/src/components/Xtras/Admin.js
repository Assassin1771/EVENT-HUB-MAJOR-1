import React,{useState} from 'react'

import Sidenav from './Sidenav'
import { Container } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Admin.css"
import data from "./data.json";
//components

import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
const Admin = () => {

  const [activeChild, setActiveChild] = useState(0);
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  return (
    <div class="new3">
    <Sidenav/>
    <Container style={{marginLeft:"5cm"}}  className="wrapper d-flex flex-column min-vh-100 ">
   
    <div className="container-fluid pt-4 px-4">
  <div className="row g-4">
    <div className="col-sm-12 col-md-6 col-xl-4">
      <div className="h-100 bg-secondary rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h6 className="mb-0">Messages</h6>
          
        </div>
        <div className="d-flex align-items-center border-bottom py-3">
          <img className="rounded-circle flex-shrink-0" src="https://southindianactress.in/wp-content/uploads/2021/10/ketika-sharma-Romantic-interview-20.jpg" alt style={{width: 40, height: 40}} />
          <div className="w-100 ms-3">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-0">Riya Saxena</h6>
              <small>15 minutes ago</small>
            </div>
            <span>Short message goes here...</span>
          </div>
        </div>
        <div className="d-flex align-items-center border-bottom py-3">
          <img className="rounded-circle flex-shrink-0" src="https://media-exp1.licdn.com/dms/image/C4D03AQEeH4c59gcIzg/profile-displayphoto-shrink_800_800/0/1657273214462?e=2147483647&v=beta&t=DlK7wvwu9FSip2KcNbL_8woICQVF7D36oB93ZBYghYY" alt style={{width: 40, height: 40}} />
          <div className="w-100 ms-3">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-0">Tushar Garg</h6>
              <small>45 minutes ago</small>
            </div>
            <span>Short message goes here...</span>
          </div>
        </div>
        <div className="d-flex align-items-center border-bottom py-3">
          <img className="rounded-circle flex-shrink-0" src="https://i.pinimg.com/736x/96/b4/73/96b473b0539a2861d47ad18d7e8b3f6a.jpg" alt style={{width: 40, height: 40}} />
          <div className="w-100 ms-3">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-0">Kartike Tiwari</h6>
              <small>1 hr ago</small>
            </div>
            <span>Short message goes here...</span>
          </div>
        </div>
      
      </div>
    </div>
    {/* <div className="col-sm-12 col-md-6 col-xl-4">
      <div className="h-100 bg-secondary rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6 className="mb-0">Calender</h6>
          
        </div>
        <div id="calender" />
      </div>
    </div> */}
    <div className="col-sm-12 col-md-6 col-xl-4">
      <div className="h-100 bg-secondary rounded p-4">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h6 className="mb-0">To Do List</h6>      
        </div>
        <div className="d-flex mb-2">
        <ToDoForm addTask={addTask}/>   
        </div>
        <div className="d-flex align-items-center border-bottom py-2">
          <div className="w-100 ms-3">
            <div className="d-flex w-200 ">
              <div><ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-12 col-md-6 col-xl-4">
      <div className="h-100 bg-secondary rounded p-4">
        <div className="d-flex  border-bottom py-2">
          <div className="col-sm-12 col-xl-6">
      <div className="bg-secondary rounded h-100 p-4">
        <h6 className="mb-4">Top Site Users</h6>
        {/* <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item text-center">
            <img className="img-fluid rounded-circle mx-auto mb-4" src="img/testimonial-1.jpg" style={{width: 100, height: 100}} />
            <h5 className="mb-1">Client Name</h5>
            <p>Profession</p>
            <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
          </div>
          <div className="testimonial-item text-center">
            <img className="img-fluid rounded-circle mx-auto mb-4" src="img/testimonial-2.jpg" style={{width: 100, height: 100}} />
            <h5 className="mb-1">Client Name</h5>
            <p>Profession</p>
            <p className="mb-0">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
          </div>
        </div> */}
        <Carousel index={activeChild} autoPlay={true} navButtonsAlwaysVisible>
<Carousel.Item>
      
      <div class="row">
        <div  class="column">
          <br/>
        <img
        className="img-fluid rounded-circle mx-auto mb-4"
        style={{width:"25cm", height: 150}}
        src="https://media-exp1.licdn.com/dms/image/C4E03AQFQbmhbAnXweQ/profile-displayphoto-shrink_800_800/0/1624476175361?e=2147483647&v=beta&t=Jk--jZB570Kp-_YF9EF1dQkX1WmUGalL1E8xiQD-cgQ"
        alt="First slide"
      
      />
        </div  >
        <span class="column">
          <br/>
          <p>Total Hours : 9 hr</p>
          <p>Total Likes Given : 12 </p>
         
          </span>
      
      </div>
      <h5 className="mb-1">Shreya Rajput</h5>

    </Carousel.Item>
    <Carousel.Item>
   
    <div class="row">
        <div  class="column">
        <br/>
        <img
        className="img-fluid rounded-circle mx-auto mb-4"
        style={{width: 150, height: 150}}
        src="https://img.freepik.com/premium-photo/indian-programmer-freelancer-using-laptop-working-from-home-student-studying-online-education_219285-751.jpg"
        alt="First slide"
      
      />
        </div  >
        <div class="column">
          <br/>
        <p>Total Hours : 8 hr</p>
          <p>Total Likes Given : 18 </p>
          
        </div>
      
      </div>
      <h5 className="mb-1">Abhishek Thakur</h5>


    </Carousel.Item>
    </Carousel>


      </div>
    </div>
        </div>
      </div>
    </div>
   
    {/* <div className="col-sm-12 col-xl-6">
      <div className="bg-secondary rounded h-100 p-4">
        <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} style={{filter: 'grayscale(100%) invert(92%) contrast(83%)', border: 0}} />
      </div>
    </div> */}
  </div>
</div>
</Container></div>
  )
}

export default Admin