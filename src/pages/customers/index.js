import { useState } from 'react';

// material-ui
import {
  Box,
  Button,
  Drawer,
  Grid,
  Stack,
  Typography
} from '@mui/material';

import { InputLabel, OutlinedInput } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import IncomeAreaChart from './IncomeAreaChart';

// assets
import AnimateButton from 'components/@extended/AnimateButton';
import { UserView } from 'components/pages/user/view/index';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [slot, setSlot] = useState('week');
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {/* row 1 */}
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">Customers</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <AnimateButton>
            <Button disableElevation onClick={() => setOpenDrawer(true)} fullWidth size="large" type="submit" variant="contained" color="primary">
              Add Customer
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <UserView />
        </Grid>

        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

        {/* row 2 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Unique Visitor</Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={0}>
                <Button
                  size="small"
                  onClick={() => setSlot('month')}
                  color={slot === 'month' ? 'primary' : 'secondary'}
                  variant={slot === 'month' ? 'outlined' : 'text'}
                >
                  Month
                </Button>
                <Button
                  size="small"
                  onClick={() => setSlot('week')}
                  color={slot === 'week' ? 'primary' : 'secondary'}
                  variant={slot === 'week' ? 'outlined' : 'text'}
                >
                  Week
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <IncomeAreaChart slot={slot} />
            </Box>
          </MainCard>
        </Grid>
      </Grid>
      <Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <form style={{
          margin: 18,
          marginTop: 72,
          width: 500
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="firstname-signup">Name*</InputLabel>
                <OutlinedInput
                  id="firstname-login"
                  type="firstname"
                  name="name"
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
                  name="email"
                  placeholder="demo@company.com"
                  inputProps={{}}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="company-signup">Address</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="company-signup"
                  name="number"
                  placeholder="105 Billborough Street"
                  inputProps={{}}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                  Add Customer
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      </Drawer>
    </div>
  );
};

export default DashboardDefault;
