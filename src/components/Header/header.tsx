import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

export interface IHeaderProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    padding: theme.spacing(2),
  },
}));

export const Header: React.FC<IHeaderProps> = (props) => {
  const styles = useStyles();

  return (
    <header className={styles.root}>
      <Typography variant="h1">Movie Lookup</Typography>
    </header>
  );
};

export default Header;
