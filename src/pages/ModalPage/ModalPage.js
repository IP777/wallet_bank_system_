import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './Modal.module.css';

const currenciesList = [
  {
    value: 'other',
    label: 'Разное',
  },
  {
    value: 'car',
    label: 'Машина',
  },
  {
    value: 'products',
    label: 'Продукти',
  },
  {
    value: 'regular incame',
    label: 'Регулярный доход',
  },
  {
    value: 'irregular incame',
    label: 'Нерегулярный дохід',
  },
];

export default class ModalPage extends Component {
  state = {
    open: false,
    isRenderCategory: true,
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClick = (e) => {
    const value = e.target.value;
    if (value === 'in') {
      this.setState({ isRenderCategory: true });
    } else {
      this.setState({ isRenderCategory: false });
    }

    console.log(this.state.isRenderCategory);
  };
  render() {
    const { open, isRenderCategory } = this.state;

    const body = (
      <div className={styles.container}>
        <h2 className={styles.title}>ДОБАВИТЬ ТРАНЗАКЦИЮ</h2>

        <form className={styles.form}>
          <RadioGroup
            row
            className={styles.radioGroup}
            onChange={this.handleClick}
          >
            <FormControlLabel
              value="in"
              control={<Radio color="primary" size="small" />}
              label="Доход"
              checked={isRenderCategory === true}
            />
            <FormControlLabel
              value="out"
              control={<Radio color="primary" size="small" />}
              label="Расход"
              checked={isRenderCategory === false}
            />
          </RadioGroup>
          <div className={styles.selectCategory}>
            <TextField
              id="outlined-select-category"
              select
              variant="outlined"
              label="Категория"
              className={styles.select}
              style={{
                display: isRenderCategory ? 'none' : 'inline-flex',
              }}
            >
              {currenciesList.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className={styles.wrapperInput}>
            <input type="text" className={styles.inputText} />
            <input type="date" className={styles.inputText} />
          </div>
          <h2 className={styles.titleComents}>Комментарий</h2>
          <textarea
            name=""
            id=""
            rows="4"
            className={styles.textArea}
          ></textarea>

          <Button variant="contained" color="primary" className={styles.btn}>
             ДОБАВИТЬ
          </Button>
        </form>
      </div>
    );
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
          {body}
        </Modal>
      </div>
    );
  }
}
