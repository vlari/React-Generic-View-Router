import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import AccessAlarmsRoundedIcon from '@material-ui/icons/AccessAlarmsRounded';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';

const ListIconFactory = ({ settingName }) => {
  let selectedIcon;
  const iconProps = { color: 'primary', fontSize: 'large' };

  switch (settingName) {
    case 'doctor':
      selectedIcon = <GroupRoundedIcon {...iconProps} />;
      break;
    case 'hospital':
      selectedIcon = <LocalHospitalRoundedIcon {...iconProps} />;
      break;
    case 'healthcare':
      selectedIcon = <FavoriteRoundedIcon {...iconProps} />;
      break;
    case 'drugstore':
      selectedIcon = <StoreRoundedIcon {...iconProps} />;
      break;
    case 'patient':
      selectedIcon = <AssignmentIndRoundedIcon {...iconProps} />;
      break;
    case 'appointment':
      selectedIcon = <AccessAlarmsRoundedIcon {...iconProps} />;
      break;

    default:
      selectedIcon = <Brightness1RoundedIcon {...iconProps} />;
      break;
  }

  return <>{selectedIcon}</>;
};

export default ListIconFactory;
