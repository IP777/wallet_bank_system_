import React from 'react';
//import style from "./LoginPage.module.css";
import EmptyLayout from '../../components/EmptyLayout/EmptyLayout';
import Loginization from '../../containers/Loginization';

const LoginPage = () => {
  return (
    <EmptyLayout page={'login'}>
      <Loginization />
    </EmptyLayout>
  );
};

export default LoginPage;
