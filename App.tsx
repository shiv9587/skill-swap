import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProfileSetup } from './components/ProfileSetup';
import { BrowseUsers } from './components/BrowseUsers';
import { SwapRequests } from './components/SwapRequests';
import { AdminPanel } from './components/AdminPanel';
import { useAppStore } from './store/useAppStore';

function App() {
  const { currentUser, currentView } = useAppStore();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'profile':
        return <ProfileSetup />;
      case 'browse':
        return <BrowseUsers />;
      case 'swaps':
        return <SwapRequests />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <BrowseUsers />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;