import React from 'react';

import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import firebase from '../utils/firebase';

import Typography from '@material-ui/core/Typography';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Button from '@material-ui/core/Button';
import BaseTextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 50,
    backgroundImage: 'url("/static/Leafcut.svg")',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
  },
  leftContainer: {
    padding: 20
  },
  rightContainer: {
    padding: 20,
    marginTop: theme.spacing(8),
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  textField: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}));

const TextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(BaseTextField);

const Description = ({ update, value }) => {
  const style = useStyles();
  const theme = useTheme();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [openPrivacyPolicy, setOpenPrivacyPolicy] = React.useState(false);
  const [agreePolicy, setAgreePolicy] = React.useState(false);

  const [submitting, setSubmitting] = React.useState(false);

  const [openSuccess, setOpenSuccess] = React.useState(false);
  

  const handleClickSuccess = () => {
    setOpenSuccess(true);
  };

  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
  };

  const [openError, setOpenError] = React.useState(false);

  const handleClickError = () => {
    setOpenError(true);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const hash = (str) => {
    var hash = 0, char;
    if (str.length === 0) return hash;
    for (var i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  const submitForm = () => {
    setSubmitting(true);
    firebase.database().ref(`signatures/${hash(email)}`).update({
      firstName,
      lastName,
      email
    }).then(() => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setAgreePolicy(false);
      setSubmitting(false);
      handleClickSuccess();
      update(value.data().value + 1);
    }).catch(() => {
      handleClickError();
    });
  }

  const validateEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)
  }

  return (
    <div className={style.container}>
      <Grid container alignItems="center" justify="center" style={{ minHeight: '40vw' }}>
        <Grid item md={6} className={style.leftContainer}>
          <Typography variant="body1">Tampakan is part of each one of us. </Typography>
          <Typography variant="body1">Altogether, we stand up for Tampakan, for Mindanao, and our homeland.</Typography>
          <Typography variant="body1" style={{ marginBottom: theme.spacing(4) }}>We must take heed to be heard!</Typography>
          <Typography variant="h5"><b>Sign the petition!</b></Typography>
        </Grid>
        <Grid item md={6} className={style.rightContainer}>
          <Typography variant="h1" style={{ color: 'white', fontWeight: 700, fontSize: 40, marginBottom: 40 }}>Sign the Petition!</Typography>
          <form onSubmit={(e) => {
            e.preventDefault();
            submitForm();
          }}>
            <FormGroup>
              <TextField
                className={style.textField}
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                InputProps={{
                  style: {
                    color: 'white',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />
              <TextField
                className={style.textField}
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                InputProps={{
                  style: {
                    color: 'white',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />
              <TextField
                className={style.textField}
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  style: {
                    color: 'white',
                  },
                }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />
              <Button variant="contained" onClick={() => {
                setOpenPrivacyPolicy(true)
              }}>Privacy Policy</Button>
              <FormControlLabel
                className={style.textField}
                style={{ color: 'white' }}
                control={
                  <Checkbox color="default" checked={agreePolicy} onChange={(e) => { setAgreePolicy(e.target.checked) }} />
                }
                label="I have read and agree to the Privacy Policy."
              />
              <Button
                variant="contained"
                disabled={!agreePolicy || !firstName || !lastName || !validateEmail(email) || submitting}
                className={style.textField}
                type="submit"
              >
                Submit
              </Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
      <Dialog
        open={openPrivacyPolicy}
        onClose={() => setOpenPrivacyPolicy(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Privacy Policy"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>Under the protection of the Republic Act 10173, also known as the Data Privacy Act, the information that you will be submitting in this form will be used for the Signature Drive of Tayo Tayo para sa Tampakan. The following information will be asked from you: 1) Name, and  2) E-mail</p>
            <p>The information collected will only be used to quantify the number of people who are in support of this project. Moreover, only the number of respondents in this form will be used for the publicity materials of Tayo Tayo para sa Tampakan. The name and e-mail are collected for the purpose of reducing multiple submissions from the same respondent. </p>
            <p>Should you have any concern, you may send an email to samahan@addu.edu.ph with the subject, Tayo tayo para sa Tampakan | Signature Drive .</p>
            <p>By submitting this form, you have read, understood and agreed to the terms indicated above.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPrivacyPolicy(false)} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success">
          Your signature has been recorded! Thank you for supporting Ecological justice and integrity!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error">
          An error has occurred! We are grateful for trying to support the cause. The SAMAHAN SysDev will resolve this issue as soon as possible. Thank you for your patience!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Description;