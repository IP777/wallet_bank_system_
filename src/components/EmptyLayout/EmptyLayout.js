import React from 'react';
import style from './EmptyLayout.module.css';

const EmptyLayout = ({ children }) => {
  //Проверяет содержет ли название children компонента login
  //В связи с этим меняет стили layout
  const checkParent = children._source.fileName.toLowerCase().includes('login');

  return (
    <div className={checkParent ? style.wrapper : style.wrapperReg}>
      <div className={checkParent ? style.sideBlock : style.sideBlockReg} />
      <div className={style.childrenWrapper}>{children}</div>
    </div>
  );
};

export default EmptyLayout;
