import React from 'react'
import Button from '@material-ui/core/Button';

const ButtonMUI = () => {
    return(
        <Button data-testid='button-MUI' variant="contained" color="primary">
        Hello World
      </Button>
    )
}

export default ButtonMUI