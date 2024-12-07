import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Button, Box } from '@mui/material';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">
                        User List
                    </Button>
                    <Button color="inherit" component={Link} to="/create">
                        Create User
                    </Button>
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 4 }}>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/create" element={<UserForm />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;