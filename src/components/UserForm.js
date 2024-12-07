import React, { useState } from 'react';
import { createUser } from '../services/userService';
import { 
    TextField, 
    Button, 
    Box, 
    Typography,
    Alert
} from '@mui/material';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(formData);
            setSuccess(true);
            setError(null);
            setFormData({ name: '', email: '' });
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            setError('Error creating user');
            setSuccess(false);
            console.error('Error:', err);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                Create New User
            </Typography>
            
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>User created successfully!</Alert>}
            
            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />
            
            <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
            />
            
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                sx={{ mt: 2 }}
                fullWidth
            >
                Create User
            </Button>
        </Box>
    );
};

export default UserForm;