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
