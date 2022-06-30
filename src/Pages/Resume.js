import { Container, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const Resume = () => {

    const profileData = useSelector((state) => state.profileReducer.profileData);
    const image = URL.createObjectURL(profileData.image[0])

    return (
        <>
            <Container>
                <div style={{ margin: '3rem' }} >
                    <Grid container style={{ backgroundColor: '#1e084a', padding: '10px', color: 'white' }} >
                        <Grid item md={6} sm={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h3> {profileData.name} </h3>
                        </Grid>
                        <Grid item md={6} sm={12} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }} >
                            <img src={image} alt="" style={{ width: '10rem', height: '10rem', borderRadius: '50%' }} srcset="" />
                        </Grid>
                    </Grid>
                    <Container>
                        <Grid container style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column' }} >
                            <h4 style={{ borderBottom: '2px solid #1e084a', marginLeft: '3rem' }} >Work Experience</h4>

                            <div >
                                <ul style={{ marginLeft: '1rem' }} >
                                    <li> {profileData.experience} </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column' }} >
                            <h4 style={{ borderBottom: '2px solid #1e084a', marginLeft: '3rem' }} > Skills </h4>

                            <div >
                                <ul style={{ marginLeft: '1rem' }} >
                                    <li> {profileData.skills} </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column' }} >
                            <h4 style={{ borderBottom: '2px solid #1e084a', marginLeft: '3rem' }} > Education Qualification </h4>

                            <div >
                                <ul style={{ marginLeft: '1rem' }} >
                                    <li> {profileData.education} </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column' }} >
                            <h4 style={{ borderBottom: '2px solid #1e084a', marginLeft: '3rem' }} > Hobbies </h4>

                            <div >
                                <ul style={{ marginLeft: '1rem' }} >
                                    <li> {profileData.hobbies} </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid container style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column' }} >
                            <h4 style={{ borderBottom: '2px solid #1e084a', marginLeft: '3rem' }} > Interests </h4>

                            <div >
                                <ul style={{ marginLeft: '1rem' }} >
                                    <li>{profileData.interests} </li>
                                </ul>
                            </div>
                        </Grid>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default Resume;