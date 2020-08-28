import React from 'react';
import style from './EmptyLayout.module.css';

// style={{
// 	backgroundImage: `url(${imageBackdropPath(backdrop_path)})`,
// }}

const EmptyLayout = ({ children }) => {
  //Проверяет содержет ли название children компонента login
  //В связи с этим меняет стили layout
  const checkParent = children.type.name.toLowerCase().includes('login');

  console.log('checkParent', checkParent);
  return (
    <div className={checkParent ? style.wrapper : style.wrapperReg}>
      <div className={checkParent ? style.sideBlock : style.sideBlockReg} />
      <div className={style.childrenWrapper}>{children}</div>
    </div>
  );
};

export default EmptyLayout;
