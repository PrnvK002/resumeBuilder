import React, { useEffect, useState } from 'react';
import { Alert, Container, Grid, TextareaAutosize } from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { object, mixed } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from '../Assets/illustrations/createResume.svg';
import { resetSuccess, submitProfileData } from '../state/reducers/profileReducer';
import { useNavigate } from 'react-router-dom';

const CreateResume = () => {

  const schema = object().shape({
    image: mixed()
      .test('required', "You need to provide a file", (value) => {
        return value && value.length
      })
      .test("fileSize", "The file is too large", (value, context) => {
        return value && value[0] && value[0].size <= 500000;
      })

  });

  const success = useSelector((state)=>state.profileReducer.success);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(submitProfileData(data));
  }

  useEffect(() => {
    if(success === true){
      navigate('/resume')
    }
    return ()=>{
      dispatch(resetSuccess());
    }
  },[success])

  return (
    <>
      <Container>
        <h3 style={{ textAlign: 'center', margin: '1rem' }} >Create Resume</h3>
        <Grid container spacing={2} >
          <Grid item md={6} >
            <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
              {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
              <input type="text" className='inputContact' placeholder='Please enter your name' {...register('name', { required: 'Name must be filled' })} />
              {errors.education && <Alert severity="error">{errors.education.message}</Alert>}
              <input type="text" className='inputContact' placeholder='Please enter educational Qualifications' {...register("education", {
                required: "Education must be filled"
              })} />
              {errors.skills && <Alert severity="error">{errors.skills.message}</Alert>}
              <input type="text" className='inputContact' placeholder='Please enter your skills' {...register('skills', { required: 'Skills must be filled' })} />
              {errors.experience && <Alert severity="error">{errors.experience.message}</Alert>}
              <input type="text" className='inputContact' placeholder='Please enter your Work Experience' {...register('experience')} />
              {errors.hobbies && <Alert severity="error">{errors.hobbies.message}</Alert>}
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter your hobbies"
                {...register('hobbies', { required: 'Please enter your hobbies' })}
                style={{ width: '20rem', padding: '5px' }}
              />
              {errors.interests && <Alert severity="error">{errors.interests.message}</Alert>}
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter your interests"
                {...register('interests', { required: 'Please enter your interests' })}
                style={{ width: '20rem', margin: '1rem', padding: '5px' }}
              />

              {errors.image && <Alert severity="error">{errors.image.message}</Alert>}
              <input type="file" className='inputContact' placeholder='Please select your image' {...register('image', { required: 'image must be filled' })} />
              <button type='submit' style={{ width: '57%', backgroundColor: 'green', border: 'none', color: 'white', height: '2rem', borderRadius: '4px', }} >Submit</button>
            </form>
          </Grid>
          <Grid item md={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <img src={Image} alt="Loading" style={{width:'70%'}} />
          </Grid>
        </Grid>

      </Container>
    </>
  )

}

export default CreateResume;
