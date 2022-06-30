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
        <h2  >Let's boost your career</h2>
        <h5>Showcase your skills and talents. Make a great first impression.</h5>
        <button className='createButton' onClick={handleOpen} style={{ marginTop:'1rem' }}>Create</button>
      </section>
      <CreateResumeModal open={open} setOpen={setOpen} />
      <section className='midSection' >
        <h3> Create Attractive and Beautiful Resumes </h3>
        <button className='confirmButton' onClick={handleOpen} style={{ marginTop:'1rem' }}>Create</button>
      </section>
      <section className='bottomSection'>
      <h3> Peoples who made resumes here getting placed for over 1lakh per month salary. Try it now.. </h3>
        <button className='confirmButton' onClick={handleOpen} style={{ marginTop:'1rem' }}>Create</button>
      </section>
    </>
  )
}

export default Home;