import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink as RouterLink } from 'react-router-dom';

import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import AccessAlarmsRoundedIcon from '@material-ui/icons/AccessAlarmsRounded';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  navList: {
    listStyleType: 'none',
    paddingLeft: '10px',
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
    border: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  activeLink: {
    background: theme.palette.primary.main,
    color: '#FFFFFF',
  },
  navbarItem: {
    margin: '5px 0px 5px 0px',
  },
}));

const NavBar = (props) => {
  const { window } = props;
  const styles = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const listIcon = [
    {
      icon: HomeRoundedIcon,
      text: 'Home',
      path: '/home',
    },
    {
      icon: GroupRoundedIcon,
      text: 'Doctors',
      path: '/manager/doctors',
    },
    {
      icon: LocalHospitalRoundedIcon,
      text: 'Hospitals',
      path: '/manager/hospitals',
    },
    {
      icon: FavoriteRoundedIcon,
      text: 'HealthCare',
      path: '/manager/healthcares',
    },
    {
      icon: StoreRoundedIcon,
      text: 'Drug Store',
      path: '/manager/drugstores',
    },
    {
      icon: AssignmentIndRoundedIcon,
      text: 'Patients',
      path: '/manager/patients',
    },
    {
      icon: AccessAlarmsRoundedIcon,
      text: 'Appointments',
      path: '/manager/appointments',
    },
  ];

  const drawer = (
    <div>
      <div className={styles.toolbar} />
      {/* <Divider /> */}
      <ul className={styles.navList}>
        {listIcon.map((iconItem, index) => (
          <li key={index} className={styles.navbarItem}>
            <Tooltip title={iconItem.text} placement='right'>
              <IconButton
                component={RouterLink}
                to={iconItem.path}
                activeStyle={{
                  background: theme.palette.primary.main,
                  color: '#FFFFFF',
                }}
                size='medium'
              >
                <iconItem.icon fontSize='large' />
              </IconButton>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar position='absolute' className={styles.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant='h5' noWrap>
            Health
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={styles.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: styles.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default NavBar;
