
import './App.css'
import style from './style.module.css'
import Sample from './Sample'

function App() {
const username="Pranav Pradeep"
  return (
    <>
    <h1 style={{color:'red',fontSize:'60px',textAlign:'center'}} id='' className='head'>My first react project</h1>
    <label htmlFor="">Username : {username}</label>
    <label htmlFor="fname">Username<input id='fname' type="text" /></label>

    <h5 className={style.group1}>hello</h5>
    <p style={{color:'yellowgreen',fontSize:'20px',textAlign:'justify',margin:'50px',}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque doloremque possimus, quam, libero cum temporibus nemo, doloribus ratione consequuntur debitis optio! Praesentium tempora error unde, iusto sunt minus quae nisi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi laudantium modi repellat ullam debitis ab explicabo voluptate, ducimus accusantium natus nemo. Voluptatem possimus deserunt excepturi quas assumenda exercitationem error soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit accusantium ducimus vero. Delectus est minima deleniti eveniet ratione excepturi, officia non, aliquam laboriosam voluptatem harum sapiente corporis, ullam ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis modi nemo dicta dolorum exercitationem harum. Distinctio, error obcaecati, provident optio minus exercitationem, sequi doloremque ab fugiat laudantium cupiditate aspernatur explicabo!</p>
    <Sample/>
    </>
  )
}

export default App
