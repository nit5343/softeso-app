import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose } from 'react-icons/md';
import { ROUTES } from '../constants/routes';
import LogoImg from '../assets/logo.png';
import MotionWrapper from './ui/MotionWrapper';

const NAV_ITEMS = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'About' },
  { path: ROUTES.CONTACT, label: 'Contact' }
] as const;

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <MotionWrapper
      animation="fadeInUp"
      className="bg-white shadow-md w-full fixed z-50"
      delay={0.2}
    >
      <div className="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 justify-between">
          <MotionWrapper 
            className="flex items-center"
            animation="fadeIn"
            delay={0.4}
          >
            <Link to={ROUTES.HOME} className="flex h-full p-4 items-center">
              <img src={LogoImg} alt="Softeso" className="h-full" />
            </Link>
          </MotionWrapper>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex space-x-8">
            {NAV_ITEMS.map(({ path, label }, index) => (
              <Link
                key={path}
                to={path}
                className={`relative px-3 py-2 text-sm font-medium ${
                  isActive(path) ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-600'
                }`}
              >
                <MotionWrapper
                  animation="fadeInRight"
                  delay={0.2 * (index + 1)}
                >
                  {label}
                  {isActive(path) && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="bg-gradient h-0.5 absolute bottom-0 left-0 right-0"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </MotionWrapper>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <MotionWrapper 
            className="flex items-center md:hidden"
            animation="fadeIn"
            delay={0.4}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </MotionWrapper>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white border-neutral-100 border-t md:hidden overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {NAV_ITEMS.map(({ path, label }, index) => (
                <MotionWrapper
                  key={path}
                  animation="fadeInLeft"
                  delay={0.1 * (index + 1)}
                >
                  <Link
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                    }`}
                  >
                    {label}
                  </Link>
                </MotionWrapper>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionWrapper>
  );
};

export default Navbar;