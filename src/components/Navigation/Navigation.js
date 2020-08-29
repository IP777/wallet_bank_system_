import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  width: '200px',
  padding: '20px',
  backgroundColor: '#284060',
  flexWrap: 'wrap',
};

const linkStyle = {
  display: 'block',
  padding: '5px',
  color: '#fff',
};

const Navigation = () => {
  return (
    <div style={navStyle}>
      <NavLink style={linkStyle} to="/">
        Главная
      </NavLink>
      <NavLink style={linkStyle} to="/statistics">
        Статистика
      </NavLink>
    </div>
  );
};

export default Navigation;
