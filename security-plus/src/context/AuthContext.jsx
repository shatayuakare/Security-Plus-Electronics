import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('jwt_token') || null);
    const [loading, setLoading] = useState(false);

    // Validate existing token on initial application mount
    useEffect(() => {
        const initializeAuth = async () => {
            const storedToken = localStorage.getItem('jwt_token');
            if (storedToken) {
                try {
                    // Fetch the current user profile using the stored token
                    const res = await fetch('https://woston.in/wp-json/wp/v2/users', {
                        headers: {
                            'Authorization': `Bearer ${storedToken}`,
                        },
                    });
                    if (res.ok) {
                        const userData = await res.json();
                        setUser(userData);
                        setToken(storedToken);
                    } else {
                        // Token expired or invalid
                        logout();
                    }
                } catch (error) {
                    console.error('Failed to authenticate token:', error);
                    logout();
                }
            }
            setLoading(false);
        };

        initializeAuth();
    }, []);

    // Login handler: Call JWT endpoint, store state & localStorage
    const login = async (username, password) => {
        // await axios.post('https://woston.in/wp-json/jwt-auth/v1/token', { username: "root", password: "root" }).then(res => console.log(res)).catch(e => console.error(e))
        const res = await axios.post(
            "https://woston.in/wp-json/jwt-auth/v1/token",
            {
                username: username,
                password: password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.warn(res)
        const data = await res.json();

        console.warn("token", data.token)
        if (res.ok && data.token) {
            localStorage.setItem('jwt_token', data.token);
            setToken(data.token);

            setUser({
                email: data.user_email,
                displayName: data.user_display_name,
                nicename: data.user_nicename,
            });

            return { success: true };
        } else {
            return { success: false, message: data.message || 'Login failed' };
        }
    };

    login("Developer", "Developer@Woston#2026")


    const logout = () => {
        localStorage.removeItem('jwt_token');
        setToken(null);
        setUser(null);
    };


    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout, isAuthenticated: !!token }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// Custom Hook to consume AuthContext cleanly
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};