/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Screen } from './types';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import OrdersScreen from './components/OrdersScreen';
import InventoryScreen from './components/InventoryScreen';
import StatusScreen from './components/StatusScreen';
import CreateNoteScreen from './components/CreateNoteScreen';
import ReportsScreen from './components/ReportsScreen';
import Header from './components/Header';
import BottomNav from './components/Navigation';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  const handleNavigate = (newScreen: Screen) => {
    setScreen(newScreen);
  };

  const getVariants = () => {
    // Basic transitions
    return {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
    };
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <Header currentScreen={screen} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={getVariants()}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {screen === 'login' && <LoginScreen onLogin={() => handleNavigate('dashboard')} />}
          {screen === 'dashboard' && <DashboardScreen onNavigate={handleNavigate} />}
          {screen === 'orders' && <OrdersScreen onNavigate={handleNavigate} />}
          {screen === 'inventory' && <InventoryScreen onNavigate={handleNavigate} />}
          {screen === 'status' && <StatusScreen onNavigate={handleNavigate} />}
          {screen === 'create_note' && <CreateNoteScreen onNavigate={handleNavigate} />}
          {screen === 'reports' && <ReportsScreen onNavigate={handleNavigate} />}
        </motion.div>
      </AnimatePresence>

      {screen !== 'login' && (
        <BottomNav currentScreen={screen} onNavigate={handleNavigate} />
      )}
    </div>
  );
}
