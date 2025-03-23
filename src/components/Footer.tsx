import React from 'react';
import { Link } from 'react-router-dom';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { ROUTES } from '../constants/routes';
import { COMPANY } from '../config/company';
import LogoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img src={LogoImg} alt="Softeso" className='h-[32px]' />
            </div>
            <p className="mt-4 text-gray-400">
              Delivering innovative software solutions for web and mobile platforms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to={ROUTES.HOME} className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to={ROUTES.ABOUT} className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to={ROUTES.CONTACT} className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to={ROUTES.TERMS} className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to={ROUTES.RETURNS} className="text-gray-400 hover:text-white">Returns & Refund</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-4">
                <MdEmail className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>{COMPANY.contact.email}</span>
              </li>
              <li className="flex items-start space-x-4">
                <MdPhone className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>{COMPANY.contact.phone}</span>
              </li>
              <li className="flex items-start space-x-4">
                <MdLocationOn className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>{COMPANY.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer