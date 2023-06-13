import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import NavigationBar from './Components/NavigationBar';
import JobResultsPage from './Components/JobResultsPage/JobResultsPage';
import InNavigationBar from './Components/InNavigationBar';
import Logout from './Components/LogoutPage/Logout';

const AppRoutes = () => {
    const [jwtToken, setJwtToken] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('Token')) {
            setJwtToken(true)
        }
    }, [jwtToken])
    return (
        <Router>
            {jwtToken ? <InNavigationBar /> : <NavigationBar />}
            
            <Routes>
                <Route exact path="/" Component={() => <HomePage />} />
                <Route exact path="/login" Component={() => <LoginPage />} />
                <Route exact path="/signup" Component={() => <RegistrationPage />} />
                <Route exact path="/job-results" Component={() => <JobResultsPage />} />
                <Route exact path="/logout" Component={() => <Logout />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;