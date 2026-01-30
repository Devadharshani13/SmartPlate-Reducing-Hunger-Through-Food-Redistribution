import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toaster } from './components/ui/sonner';

// Pages
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { AdminLogin } from './pages/AdminLogin';
import { VerifyPhone } from './pages/VerifyPhone';
import { SelectRole } from './pages/SelectRole';
import { NGODashboard } from './pages/NGODashboard';
import { DonorDashboard } from './pages/DonorDashboard';
import { VolunteerDashboard } from './pages/VolunteerDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { Analytics } from './pages/Analytics';
import { Profile } from './pages/Profile';

import '@/App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster richColors position="top-center" />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Onboarding Routes */}
          <Route
            path="/verify-phone"
            element={
              <ProtectedRoute>
                <VerifyPhone />
              </ProtectedRoute>
            }
          />

          <Route
            path="/select-role"
            element={
              <ProtectedRoute>
                <SelectRole />
              </ProtectedRoute>
            }
          />

          {/* Role-based Dashboards */}
          <Route
            path="/ngo-dashboard"
            element={
              <ProtectedRoute roles={['ngo']}>
                <NGODashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/donor-dashboard"
            element={
              <ProtectedRoute roles={['donor']}>
                <DonorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/volunteer-dashboard"
            element={
              <ProtectedRoute roles={['volunteer']}>
                <VolunteerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Common Protected Pages */}
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
