import { useQuery } from '@apollo/client';
import { GET_ALL_TAGS } from '../graphql/queries';
import { Link as RouterLink } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { useStateContext } from '../context/state';
import { getErrorMsg } from '../utils/helperFuncs';

import { Typography, Chip, useMediaQuery, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useRightSidePanelStyles } from '../styles/muiStyles';
import SofLogo from '../svg/jsl.png';

const RightSidePanel = () => {
  const classes = useRightSidePanelStyles();
  const { notify } = useStateContext();
  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down('sm'));
  const { data, loading } = useQuery(GET_ALL_TAGS, {
    onError: (err) => {
      notify(getErrorMsg(err), 'error');
    },
  });

  if (isNotDesktop) return null;

  return (
    <Grid item>
      <div className={classes.rootPanel}>
        <div>
          <div>
        
            <img src={SofLogo} width="200px" height="150px"/>
             
        
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default RightSidePanel;
