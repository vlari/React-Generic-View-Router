const getResourceSetting = (type) => {
  const settings = {
    doctor: {
      settingName: 'doctor',
      formName: 'doctorForm',
      searchCriteria: {
        field: '',
        label: 'Name',
      },
      detail: {
        name: 'name',
        description: 'specialty',
      },
      dataPath: '/doctors',
    },
    hospital: {
      settingName: 'hospital',
      formName: 'hospitalForm',
      searchCriteria: {
        field: '',
        label: 'Name',
      },
      detail: {
        name: 'name',
        description: '',
      },
      dataPath: '/hospitals',
    },
    healthCare: {
      settingName: 'healthcare',
      formName: 'healthCareForm',
      searchCriteria: {
        field: '',
        label: 'Name of service',
      },
      detail: {
        name: 'name',
        description: '',
      },
      dataPath: '/healthcares',
    },
    drugStore: {
      settingName: 'drugstore',
      formName: 'drugStoreForm',
      searchCriteria: {
        field: '',
        label: 'Name',
      },
      detail: {
        name: 'name',
        description: '',
      },
      dataPath: '/drugstores',
    },
    patient: {
      settingName: 'patient',
      formName: 'patientForm',
      searchCriteria: {
        field: '',
        label: 'Name',
      },
      detail: {
        name: 'name',
        description: '',
      },
      dataPath: '/patients',
    },
    appointment: {
      settingName: 'appointment',
      formName: 'appointmentForm',
      searchCriteria: {
        field: '',
        label: 'Date',
      },
      detail: {
        name: 'patient',
        description: 'date',
      },
      dataPath: '/appointments',
    },
  };
  let setting = '';

  switch (type) {
    case 'doctors':
      setting = settings.doctor;
      break;
    case 'hospitals':
      setting = settings.hospital;
      break;
    case 'healthcares':
      setting = settings.healthCare;
      break;
    case 'drugstores':
      setting = settings.drugStore;
      break;
    case 'patients':
      setting = settings.patient;
      break;
    case 'appointments':
      setting = settings.appointment;
      break;
    default:
      setting = settings.doctor;
      break;
  }

  return setting;
};

export default getResourceSetting;
