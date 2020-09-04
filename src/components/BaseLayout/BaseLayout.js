import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BaseLayoutDesktop from './BaseLayoutDesktop/BaseLayoutDesktop';
import BaseLayoutMobile from './BaseLoyautMobile/BaseLayoutMobile';

const BaseLayout = ({ children, isCurrency = true }) => {
  const isDesktop = useMediaQuery('(min-width:700px)');

  return (
    <>
      {isDesktop ? (
        <BaseLayoutDesktop children={children} isCurrency={isCurrency} />
      ) : (
        <BaseLayoutMobile children={children} isMobile={true} />
      )}
    </>
  );
};

export default BaseLayout;
