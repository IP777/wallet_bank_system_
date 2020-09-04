import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { spendingCategoryList } from '../../constants/index';
import styles from './CreateTransaction.module.css';

const CreateTransaction = ({ isRenderCategory, handleClick }) => {
  const [form, setForm] = useState({});
  const [radio, setRadio] = useState('');
  const [category, setCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputComents, setInputComents] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setForm({
      type: radio,
      category,
      amount: inputValue,
      date: inputDate,
      coments: inputComents,
    });
  };
  const onHandleRadioChange = (e) => {
    const value = e.target.value;
    setRadio(value);
  };
  const onHandleChangeCategory = (e) => {
    const value = e.target.value;
    setCategory(value);
  };
  const onHandleInputValue = (e) => {
    const value = e.target.value;
    setInputValue(Number(value));
  };

  const onHandleInputDate = (e) => {
    const value = e.target.value;
    setInputDate(value);
  };
  const onHandleInputComents = (e) => {
    const value = e.target.value;
    setInputComents(value);
  };

  console.log(form);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ДОБАВИТЬ ТРАНЗАКЦИЮ</h2>

      <form className={styles.form} onSubmit={onHandleSubmit}>
        <RadioGroup
          row
          className={styles.radioGroup}
          onClick={handleClick}
          onChange={onHandleRadioChange}
        >
          <FormControlLabel
            value="+"
            control={<Radio color="primary" size="small" />}
            label="Доход"
            checked={isRenderCategory === false}
          />
          <FormControlLabel
            value="-"
            control={<Radio color="primary" size="small" />}
            label="Расход"
            checked={isRenderCategory === true}
          />
        </RadioGroup>
        <div className={styles.selectCategory}>
          <TextField
            id="outlined-select-category"
            select
            variant="outlined"
            label="Категория"
            name="category"
            className={styles.select}
            style={{
              display: isRenderCategory ? 'inline-flex' : 'none',
            }}
            onChange={onHandleChangeCategory}
          >
            {spendingCategoryList.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={styles.wrapperInput}>
          <input
            type="number"
            name="amount"
            className={styles.inputText}
            onChange={onHandleInputValue}
          />
          <input
            type="date"
            name="date"
            className={styles.inputText}
            onChange={onHandleInputDate}
          />
        </div>
        <h2 className={styles.titleComents}>Комментарий</h2>
        <textarea
          rows="4"
          name="coments"
          className={styles.textArea}
          onChange={onHandleInputComents}
        ></textarea>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.btn}
        >
           ДОБАВИТЬ
        </Button>
      </form>
    </div>
  );
};

export default CreateTransaction;
