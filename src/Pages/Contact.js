import { Alert, Container } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import SnackBarMessage from '../Components/SnackBarMessage';
import Grid from '@mui/material/Grid';
import Image from '../Assets/illustrations/Contact.svg';


const Contact = () => {
  //=============== snackbar settings =================
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  
  //================= Submitting data from the form ============
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitData = async (data, e) => {
    try {
      const response = await axios.post('https://reqres.in/api/users', data);
      if (response) {
        handleOpen();
        e.target.reset();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const onSubmit = (data, e) => {
    submitData(data, e);
  }

  //============================================

  return (
    <>
      <Container>
        <h3 style={{ textAlign: 'center', margin: '1rem' }} >CONTACT</h3>
        <Grid container spacing={2} >
          <Grid item md={6} >
            <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
              {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
              <input type="text" className='inputContact' placeholder='Please enter your name' {...register('name', { required: 'Name must be filled' })} />
              {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
              <input type="email" className='inputContact' placeholder='Please enter your email' {...register("email", {
                required: "email must be filled", pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })} />
              {errors.query && <Alert severity="error">{errors.query.message}</Alert>}

              <input type="text" className='inputContact' placeholder='Please enter your Query' {...register('query', { required: 'Query must be filled' })} />
              <button type='submit' style={{ width: '57%', backgroundColor: 'green', border: 'none', color: 'white', height: '2rem', borderRadius: '4px', }} >Submit</button>
            </form>
          </Grid>
          <Grid item md={6} >
            <img src={Image} alt="Loading" />
          </Grid>
        </Grid>

        <SnackBarMessage open={open} setOpen={setOpen} />
      </Container>
    </>
  )
}

export default Contact;