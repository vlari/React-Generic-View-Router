import { useContext } from 'react';
import HealthContext from '../../context/healthContext';
import DatePicker from '../SearchControls/DatePicker';
import SearchBar from '../SearchControls/SearchBar';

const SearchControlFactory = () => {
  const healthContext = useContext(HealthContext);
  let selectedControl;

  switch (healthContext.settings.settingName) {
    case 'healthcare':
    case 'doctor':
      selectedControl = (
        <SearchBar searchOptions={healthContext.settings.searchCriteria} />
      );
      break;
    case 'appointment':
      selectedControl = (
        <DatePicker searchOptions={healthContext.settings.searchCriteria} />
      );
      break;
    default:
      selectedControl = (
        <SearchBar searchOptions={healthContext.settings.searchCriteria} />
      );
      break;
  }

  return <>{selectedControl}</>;
};

export default SearchControlFactory;
