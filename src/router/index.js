import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from '../components';

//Pages
import AuthLogin from'../pages/auths/AuthLogin';
import Blank from '../pages/Blank';
import Companies from '../pages/companies/Companies';
import Dashboard from '../pages/Dashboard';
import Enquiry from '../pages/enquries/Enquiry';

import NotFound from '../pages/error/NotFound';
import Packages from '../pages/packages/Packages';
import Venues from '../pages/venues/Venues';

function Router() {
  return (
    <ScrollToTop>
      <Routes>
          <Route path="blank" element={<Blank />} />
          <Route path="/" element={<AuthLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/enquiries" element={<Enquiry />} />
          <Route path="*" element={<NotFound />} />

          <Route path="auths">
            <Route path="auth-login" element={<AuthLogin />} />
          </Route>
      </Routes>
    </ScrollToTop>
    
  )
}

export default Router;
