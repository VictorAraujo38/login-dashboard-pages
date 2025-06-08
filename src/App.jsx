import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Dashboard /> : <LoginScreen />;
};

const App = () => {
  return (
    <AuthProvider>
      <div className="font-sans">
        <AppContent />
      </div>
    </AuthProvider>
  );
};

export default App;