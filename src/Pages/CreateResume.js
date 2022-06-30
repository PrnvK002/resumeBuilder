import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';


const CreateResume = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit=(data)=>{

  }

  const [preview , setPreview] = useState(null);
  const handleChnage = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setPreview(url);
  }

  return (
    <>
       <Container>
        <h3 style={{ textAlign:'center' , margin:'1rem' }} >CONTACT</h3>
        <Grid container spacing={2} >
          <Grid item md={6} >
            <form onSubmit={handleSubmit(onSubmit)} style={{ height : '100%' , display : 'flex' , flexDirection : 'column' , justifyContent : 'center' , alignItems : 'center' }} >
              { errors.name && <Alert severity="error">{errors.name.message}</Alert> }
              <input type="text" className='inputContact' placeholder='Please enter your name' { ...register('name',{required:'Name must be filled'}) } />
              { errors.education && <Alert severity="error">{errors.education.message}</Alert> }
              <input type="text" className='inputContact' placeholder='Please enter educational Qualifications' {...register("education", {
                required: "Education must be filled"
              })} />
              { errors.skills && <Alert severity="error">{errors.skills.message}</Alert> }
              <input type="text" className='inputContact' placeholder='Please enter your skills' { ...register('skills',{ required:'Skills must be filled' }) } />
              { errors.experience && <Alert severity="error">{errors.experience.message}</Alert> }
              <input type="text" className='inputContact' placeholder='Please enter your Work Experience' { ...register('experience') } />
              { errors.hobbies && <Alert severity="error">{errors.hobbies.message}</Alert> }
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter your hobbies"
                { ...register('hobbies',{ required : 'Please enter your hobbies' }) }
              style={{ width: '20rem' }}
                />
                { errors.interests && <Alert severity="error">{errors.interests.message}</Alert> }
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter your hobbies"
                { ...register('interests',{ required : 'Please enter your interests' }) }
              style={{ width: '20rem' }}
                />

                { preview && <img src={preview} alt="Image Preview" style={{ width : '5rem' }} /> }
                { errors.image && <Alert severity="error">{errors.image.message}</Alert> }
              <input type="file" className='inputContact' onChange={ handleChange } placeholder='Please select your image' { ...register('image',{ required:'image must be filled' }) } />
              <button type='submit' style={{ width:'57%' , backgroundColor : 'green' , border : 'none' , color : 'white' , height : '2rem' , borderRadius : '4px' ,  }} >Submit</button>
            </form>
          </Grid>
          <Grid item md={6} >
              {/* <img src= alt="Loading" /> */}
          </Grid>
          </Grid>

      </Container>
    </>
  )

}

export default CreateResume;
