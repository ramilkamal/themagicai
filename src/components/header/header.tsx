import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@mui/material';
import { Twirl as Hamburger } from 'hamburger-react';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement> | any) =>
    setAnchorEl(event.currentTarget);

  const handleClose: React.MouseEventHandler = () => setAnchorEl(null);

  const toRegister: React.MouseEventHandler<HTMLElement> = () => {
    const target: any = document.getElementById('#register');
    target.scrollIntoView({ behavior: 'smooth' });
    navigate('#register');
  };

  return (
    <header className={styles.header}>
      <h1>THE MAGIC AI</h1>
      <div className={styles.navRight}>
        <Button
          aria-controls={open ? 'basic-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className={styles.MenuButtonIcon}
        >
          <Hamburger toggled={open} toggle={handleClick} />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Login</MenuItem>
          <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        </Menu>

        <Button className={styles.Button1} onClick={toRegister}>
          Log In
        </Button>

        <Button
          variant="contained"
          className={styles.Button2}
          onClick={toRegister}
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
};
