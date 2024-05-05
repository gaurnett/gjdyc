import { useState } from 'react';

// material-ui
import {
  Button,
  Drawer,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

// project import

// assets
import AnimateButton from 'components/@extended/AnimateButton';
import { ProductView } from 'components/pages/products/view/index';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Products</Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <AnimateButton>
          <Button disableElevation onClick={() => setOpenDrawer(true)} fullWidth size="large" type="submit" variant="contained" color="primary">
            Add Product
          </Button>
        </AnimateButton>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ProductView />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      <Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <form style={{
          margin: 18,
          marginTop: 72,
          width: 500
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="firstname-signup">Product Name*</InputLabel>
                <OutlinedInput
                  id="firstname-login"
                  type="firstname"
                  name="name"
                  placeholder="Nike Kicks 201"
                  fullWidth
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="firstname-signup">Description*</InputLabel>
                <OutlinedInput
                  id="firstname-login"
                  type="firstname"
                  name="name"
                  placeholder="White dress shows with Nike tick"
                  fullWidth
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-signup">Price</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="email-login"
                  type="email"
                  name="email"
                  placeholder="$600"
                  inputProps={{}}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="company-signup">Quantity</InputLabel>
                <OutlinedInput
                  fullWidth
                  id="company-signup"
                  name="number"
                  placeholder="10"
                  inputProps={{}}
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                  Add Product
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      </Drawer>
    </Grid>
  );
};

export default DashboardDefault;
