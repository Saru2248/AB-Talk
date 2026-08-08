import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import ProfileModal from './components/ProfileModal';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ChallengeDayPage from './pages/ChallengeDayPage';
import NotFoundPage from './pages/NotFoundPage';
import { useProgress } from './hooks/useProgress';

export default function App() {
  const {
    student,
    proofs,
    activeMode,
    updateProof,
    completeDay,
    setMode,
    updateStudentProfile
  } = useProgress();

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#090d14] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] relative selection:bg-orange-500/30 selection:text-orange-200">
        {/* Top Navbar */}
        <Navbar
          activeMode={activeMode}
          setActiveMode={setMode}
          onOpenProfile={() => setIsProfileOpen(true)}
        />

        {/* Main Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/dashboard"
              element={
                <DashboardPage
                  student={student}
                  proofs={proofs}
                  activeMode={activeMode}
                />
              }
            />
            <Route
              path="/day/:dayId"
              element={
                <ChallengeDayPage
                  student={student}
                  proofs={proofs}
                  updateProof={updateProof}
                  completeDay={completeDay}
                />
              }
            />
            {/* Unknown Route Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Fixed Mobile Bottom Navigation Bar */}
        <BottomNav onOpenProfile={() => setIsProfileOpen(true)} />

        {/* Interactive Profile Modal */}
        <ProfileModal
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          student={student}
          onUpdateProfile={updateStudentProfile}
        />
      </div>
    </Router>
  );
}
