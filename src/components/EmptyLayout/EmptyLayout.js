import React from 'react';
import style from './EmptyLayout.module.css';

const EmptyLayout = ({ children, page }) => {
  const checkParent = page.toLowerCase().includes('login');
  console.log(checkParent);

  return (
    <div className={checkParent ? style.wrapper : style.wrapperReg}>
      <div className={checkParent ? style.sideBlock : style.sideBlockReg} />
      <div className={style.childrenWrapper}>{children}</div>
    </div>
  );
};

export default EmptyLayout;
