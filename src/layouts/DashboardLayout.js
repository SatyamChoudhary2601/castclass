import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
//import Dashboard from '../components/dashboard/Dashboard';
import DashboardAlt from '../components/dashboard-alt/DashboardAlt';
import NavbarTop from '../components/navbar/NavbarTop';
import NavbarVertical from '../components/navbar/NavbarVertical';
import Footer from '../components/footer/Footer';
import loadable from '@loadable/component';
import Home from '../components/feed/Feed'
import AppContext from '../context/Context';
import ProductProvider from '../components/e-commerce/ProductProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {UserDetailProvider} from '../components/AllDetailsContext/AllDetailsContext'

const DashboardRoutes = loadable(() => import('./DashboardRoutes'));

const DashboardLayout = ({ location }) => {
  let history = useHistory();
  const { isFluid } = useContext(AppContext);

  useEffect(() => {
    DashboardRoutes.preload();
    if (localStorage.getItem("default_user") == null) {
      // debugger
      history.push("/authentication/basic/login");
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={isFluid ? 'container-fluid' : 'container'}>
      {/* <NavbarVertical /> */}
      <UserDetailProvider>
     <ProductProvider>
        <div className="content">
        <NavbarTop />
         <Switch>
            <Route path="/" exact component={Home} />
            <DashboardRoutes />
          </Switch>
          <Footer />
        </div>
      </ProductProvider>
      </UserDetailProvider>
    </div>
  );
};

DashboardLayout.propTypes = { location: PropTypes.object.isRequired };

export default DashboardLayout;
