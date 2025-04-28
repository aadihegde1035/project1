import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import DataEntry from './pages/services/DataEntry';
import DataProcessing from './pages/services/DataProcessing';
import DataAnalysis from './pages/services/DataAnalysis';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import ScrollToTop from './components/shared/ScrollToTop';
import ProtectedSignup from './pages/ProtectedSignup';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services/data-entry" element={<DataEntry />} />
          <Route path="/services/data-processing" element={<DataProcessing />} />
          <Route path="/services/data-analysis" element={<DataAnalysis />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/sign-up1" element={<ProtectedSignup />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;