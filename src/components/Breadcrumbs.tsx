import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdChevronRight, MdHome } from 'react-icons/md';
import { ROUTES } from '../constants/routes';

const routeNames: Record<string, string> = {
  [ROUTES.HOME]: 'Home',
  [ROUTES.ABOUT]: 'About',
  [ROUTES.CONTACT]: 'Contact',
  [ROUTES.TERMS]: 'Terms & Conditions',
  [ROUTES.RETURNS]: 'Returns & Refund'
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null;

  return (
    <nav className="bg-white border-b" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center h-8 space-x-2 text-sm py-1">
          <li>
            <Link 
              to={ROUTES.HOME}
              className="text-gray-500 hover:text-primary-600 transition-colors flex items-center"
            >
              <MdHome className="w-4 h-4" />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routePath = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={routePath}>
                <li>
                  <MdChevronRight className="w-4 h-4 text-gray-400" />
                </li>
                <li>
                  {isLast ? (
                    <span className="text-primary-600 font-medium">
                      {routeNames[routePath] || name}
                    </span>
                  ) : (
                    <Link
                      to={routePath}
                      className="text-gray-500 hover:text-primary-600 transition-colors"
                    >
                      {routeNames[routePath] || name}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;