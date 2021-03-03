import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from '../components/common/Toast';
import DashboardLayout from './DashboardLayout';
import ErrorLayout from './ErrorLayout';
import loadable from '@loadable/component';
const AuthBasicLayout = loadable(() => import('./AuthBasicLayout'));
const Landing = loadable(() => import('../components/landing/Landing'));
const WizardLayout = loadable(() => import('../components/auth/wizard/WizardLayout'));
const AuthCardRoutes = loadable(() => import('../components/auth/card/AuthCardRoutes'));
const AuthSplitRoutes = loadable(() => import('../components/auth/split/AuthSplitRoutes'));
const UserProfileLayout = loadable(() => import('./UserProfileLayout'));
const Profile = loadable(() => import('../components/profile/Profile'));
const SettingsProfile = loadable(() => import('../components/Settings/SettingsProfile'));

const Layout = () => {
  useEffect(() => {
    AuthBasicLayout.preload();
  }, []);

  return (
    <Router fallback={<span />}>
      <Switch>
        <Route path="/authentication/basic" component={AuthBasicLayout} />
        <Route component={DashboardLayout} />
        <Route path="/errors" component={ErrorLayout} />
      </Switch>
      <ToastContainer transition={Fade} closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
    </Router>
  );
};

export default Layout;
