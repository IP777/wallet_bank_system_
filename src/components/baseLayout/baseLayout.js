import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';

export default function BaseLayout(props) {
  return (
    <>
      <CssBaseline />
      <React.Fragment>
        <div className={style.mainWrapper}>
          <div className={style.header}>Here heder component</div>
          <div className={style.wrapper}>
            <div className={style.wrapperSidebar}>
              <div className={style.wrapperNavigation}>
                diagramme Component here
              </div>
            </div>
            <div className={style.wrapperFS}>
              <div className={style.filterWrapper}>
                <MonthSelect />
                <YearSelect />
              </div>
              <div className={style.statistic}>statistics Component here</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
}
