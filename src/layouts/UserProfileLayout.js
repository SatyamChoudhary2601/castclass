import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
//import Dashboard from '../components/dashboard/Dashboard';
import DashboardAlt from '../components/dashboard-alt/DashboardAlt';
import NavbarTop from '../components/navbar/NavbarTop';
import NavbarVertical from '../components/navbar/NavbarVertical';
import Footer from '../components/footer/Footer';
import loadable from '@loadable/component';
import UserProfile from '../components/userprofile/UserProfile'
import AppContext from '../context/Context';
import ProductProvider from '../components/e-commerce/ProductProvider';

const DashboardRoutes = loadable(() => import('./DashboardRoutes'));

const UserProfileLayout = ({ location }) => {
  const { isFluid } = useContext(AppContext);
    
  useEffect(() => {
    DashboardRoutes.preload();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      <NavbarVertical />
      <ProductProvider>
        <div className="content">
          <NavbarTop />
          <Switch>
            <Route path="/pages/userprofile" exact component={UserProfile} />
            <DashboardRoutes />
          </Switch>
          <Footer />
        </div>
      </ProductProvider>
    </div>
  );
};

UserProfileLayout.propTypes = { location: PropTypes.object.isRequired };

export default UserProfileLayout;
