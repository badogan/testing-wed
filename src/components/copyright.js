import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Sample site from '}
        <Link color="inherit" href="https://basridogan.com" target="_blank">
         basridogan.com. Click here for more
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }