import React,{useState} from 'react';
import '../Assets/styles/Home.css';
import CreateResumeModal from '../Components/Modal';

const Home = () => {

  //=============== Modal Settings =============
  const [open,setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <>
      <section className='topSection'>
        <h2>Let's boost your career</h2>
        <h5>Showcase your skills and talents. Make a great first impression.</h5>
        <button className='createButton' onClick={handleOpen} >Create</button>
      </section>
      <CreateResumeModal open={open} setOpen={setOpen} />
      <section className='midSection' >

      </section>
      <section className='bottomSection'>

      </section>
    </>
  )
}

export default Home;