import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdChevronRight, MdHome } from "react-icons/md";
import { ROUTES } from "../constants/routes";

const routeNames: Record<string, string> = {
  [ROUTES.HOME]: "Home",
  [ROUTES.ABOUT]: "About",
  [ROUTES.CONTACT]: "Contact",
  [ROUTES.TERMS]: "Terms & Conditions",
  [ROUTES.RETURNS]: "Returns & Refund",
  [ROUTES.SERVICES.WEB_DEVELOPMENT]: "Services / Web Development",
  [ROUTES.SERVICES.MOBILE_DEVELOPMENT]: "Services / Mobile Development",
  [ROUTES.SERVICES.UI_UX_DESIGN]: "Services / UI/UX Design ",
  [ROUTES.SERVICES.CLOUD_DEVOPS]: "Services / Cloud & DevOps",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") return null;

  return (
    <nav className="bg-white border-b" aria-label="Breadcrumb">
      <div className="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
        <ol className="flex h-8 text-sm items-center py-1 space-x-2">
          <li>
            <Link
              to={ROUTES.HOME}
              className="flex text-gray-500 hover:text-primary-600 items-center transition-colors"
            >
              <MdHome className="h-4 w-4" />
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routePath = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={routePath}>
                <li>
                  <MdChevronRight className="h-4 text-gray-400 w-4" />
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
