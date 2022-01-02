import React from 'react';

import { Box, Typography } from '@mui/material';

const ChildrensBook = () => {

  const path = window.location.origin;

  return (
    <Box>
      <Box sx={{
      display:'flex',
      justifyContent: 'center',
      }}>
        <Typography>
          Currently under the works, Here is a quick sample of an image I drew while waiting...
        </Typography>
      </Box>
      <Box sx={{
        display:'flex',
        justifyContent: 'center',
        p:'20px'
      }}>
        <img src={path+'/assets/images/children_book/img1.JPG'} alt={'welp I guess not'} style={{width: '480px'}}/>
      </Box>
    </Box>
  )
}

export default ChildrensBook
