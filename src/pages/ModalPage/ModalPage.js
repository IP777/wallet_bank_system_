import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './Modal.module.css';
import CreateTransaction from '../../components/CreateTransaction/CreateTransaction';

export default class ModalPage extends Component {
  state = {
    open: false,
    isRenderCategory: false,
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClick = (e) => {
    const value = e.target.value;
    if (value === '+') {
      this.setState({ isRenderCategory: false });
    } else {
      this.setState({ isRenderCategory: true });
    }
  };
  handelSubmit = () => {
    //getTransactions() redux пропса на передачу транзакции на сервер
    //В нутри заглушка в место нее нужно собрать все данные полей и передать сюда
    //Заглушка-пример какие нужно передать поля
    this.props.postTransaction({
      date: 1553699509960,
      type: '+ or -',
      category: 'Job',
      amount: 2000,
      balanceAfter: 3000,
      comments: 'get money by my Job',
      typeBalanceAfter: '-',
    });

    this.setState({ open: false });
  };
  render() {
    const { open, isRenderCategory } = this.state;
    return (
      <div>
        <div className={styles.btnCircle}>
          <Fab
            style={{ color: 'white', backgroundColor: '#e56100' }}
            onClick={this.handleOpen}
          >
            <AddIcon />
          </Fab>
        </div>
        <Modal open={open} onClose={this.handleClose}>
          <CreateTransaction
            isRenderCategory={isRenderCategory}
            handleClick={this.handleClick}
          />
        </Modal>
      </div>
    );
  }
}
