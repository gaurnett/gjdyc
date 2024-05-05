import { useState } from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
// material-ui
import {
  Button,
  Grid,
  Stack,
  Typography
} from '@mui/material';

// material-ui
import { InputLabel, OutlinedInput } from '@mui/material';

// third party

// project import

// assets

// project import


// assets

import AnimateButton from 'components/@extended/AnimateButton';
import Cards from 'react-credit-cards-2';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    email: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Process Payment</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}></Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <div>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">Name*</InputLabel>
                  <OutlinedInput
                    id="firstname-login"
                    type="firstname"
                    value={state.name}
                    name="name"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    placeholder="John Doe"
                    fullWidth
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email Address</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="email-login"
                    type="email"
                    value={state.email}
                    name="email"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company-signup">Credit Card Number</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="company-signup"
                    value={state.number}
                    name="number"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    placeholder="4242 4242 4242 4242"
                    inputProps={{}}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company-signup">Expiry</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="company-signup"
                    value={state.expiry}
                    name="expiry"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    placeholder="03/29"
                    inputProps={{}}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company-signup">CVC</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="company-signup"
                    value={state.cvc}
                    name="cvc"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    placeholder="123"
                    inputProps={{}}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                    Submit Payment
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}></Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
    </Grid>
  );
};

export default DashboardDefault;
