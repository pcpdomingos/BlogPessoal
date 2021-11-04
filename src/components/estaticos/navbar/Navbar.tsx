import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'

function Navbar() {
  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    history.push('/login')
  }
  return (
    <div>
      <AppBar className="colorAppBar" position="static">
        <Toolbar>
          <Box>
            <Typography variant="h6">
              BlogPessoal
            </Typography>
          </Box>

          <Box ml="auto" className="colorBottom">

            <Link to='/Home' className='text-decorator-none'>
              <Button className="colorText">Home</Button>
            </Link>

            <Button className="colorText">Postagens</Button>
            <Button className="colorText">Temas</Button>

            <Link to="/formularioTema" className='text-decorator-none'>
              <Button className="colorText">Logout</Button>
            </Link>


            <Link to='/Login' className='text-decorator-none'>
              <Button className="colorText">cadastrar tema</Button>
            </Link>

          </Box>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
