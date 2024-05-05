import PropTypes from 'prop-types';

// material-ui
import { Chip, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        {/* <Logo /> */}
        <Chip
          label={"GJDYC"}
          sx={{ height: 32, '& .MuiChip-label': { fontSize: 24, py: 0.25 } }}
          component="a"
          clickable
        />
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
