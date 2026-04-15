import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase/Firebase.config';
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div className="h-screen flex items-center justify-center text-2xl">Loading...</div>;
    }

    if (user) {
        return children;
    }

    // If not logged in, send them to login page
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;