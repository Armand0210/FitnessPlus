import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="65px" bgcolor="light-blue">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '150px', p: '0px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '27px', xs: '21px' } }} mt="41px" textAlign="center" pb="40px">By Armand</Typography>
  </Box>
);

export default Footer;
