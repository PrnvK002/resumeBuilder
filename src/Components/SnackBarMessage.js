import { IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@material-ui/icons/Close';
import React from 'react'

const SnackBarMessage = ({ open , setOpen }) => {
    console.log(open);
    const handleClose = () => {
        setOpen(false);
    }

  return (
    <>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        
        message="Successfully Added your query"
        action={
          <>
            <IconButton
              aria-label="close"
              color="inherit"

              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </>
  )
}

export default SnackBarMessage;
