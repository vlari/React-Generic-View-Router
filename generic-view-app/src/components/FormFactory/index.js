import { useContext } from 'react';
import HealthContext from '../../context/healthContext';
import AppointmentForm from '../Forms/AppointmentForm';
import DoctorForm from '../Forms/DoctorForm';
import DrugStoreForm from '../Forms/DrugStoreForm';
import HealthCareForm from '../Forms/HealthCareForm';
import HospitalForm from '../Forms/HospitalForm';
import PatientForm from '../Forms/PatientsForm';
import ProgressBar from '../ProgressBar';

const FormFactory = () => {
  const healthContext = useContext(HealthContext);
  let selectedForm;

  switch (healthContext.settings.formName) {
    case 'doctorForm':
      selectedForm = <DoctorForm />;
      break;
    case 'hospitalForm':
      selectedForm = <HospitalForm />;
      break;
    case 'healthCareForm':
      selectedForm = <HealthCareForm />;
      break;
    case 'drugStoreForm':
      selectedForm = <DrugStoreForm />;
      break;
    case 'patientForm':
      selectedForm = <PatientForm />;
      break;
    case 'appointmentForm':
      selectedForm = <AppointmentForm />;
      break;
    default:
      selectedForm = <ProgressBar />;
      break;
  }

  return <>{selectedForm}</>;
};

export default FormFactory;
