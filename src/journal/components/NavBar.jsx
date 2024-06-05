import { LoginOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../store/auth';

export const NavBar = ({ drawerWitdth = 240 }) => {

    const dispath = useDispatch();

    const onLogout = () => {
        dispath( startLogout() );
    }


  return (
    <AppBar 
        position='fixed'
        sx={{
            width: { sm: `calc(100% - ${drawerWitdth}px)` },
            ml: { sm: `${drawerWitdth}px` }
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: "none" } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h6' noWrap component="div" >JournalApp</Typography>

                <IconButton 
                    onClick={onLogout}
                    color='error'>
                    <LoginOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
