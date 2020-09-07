import React from 'react';
import EmptyLayout from '../../components/EmptyLayout/EmptyLayout';
import Registration from '../../containers/Registartion';

const RegistrationPage = () => {
  return (
    <EmptyLayout page={'registration'}>
      <Registration />
    </EmptyLayout>
  );
};

export default RegistrationPage;
