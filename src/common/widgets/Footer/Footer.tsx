"use client";
import React from "react";
import Brand from "@components/Brand";
import Navigation_sec from "./partials/Navigation_sec";
import { layout_data } from "@config/constants";
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import HelpNavigationSec from "./partials/Help_Navigation_sec";
import Newslettersec from "./partials/News_letter_sec";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand & Social Column */}
          <div className="lg:col-span-4 space-y-8">
            <Brand />
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Connecting you with certified arborists to ensure your landscape stays safe, vibrant, and beautiful.
            </p>
            <div className="flex gap-5">
              <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-green-600 hover:text-white transition-all"><FiFacebook size={20} /></a>
              <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-green-600 hover:text-white transition-all"><FiInstagram size={20} /></a>
              <a href="#" className="p-3 bg-slate-800 rounded-xl hover:bg-green-600 hover:text-white transition-all"><FiTwitter size={20} /></a>
            </div>
          </div>

          {/* Nav Links Columns */}
          <div className="lg:col-span-2">
            <Navigation_sec />
          </div>
          <div className="lg:col-span-2">
            <HelpNavigationSec />
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <Newslettersec />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 py-8 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
          <p>© {layout_data.footer.copyWrite} | All Rights Reserved.</p>
          <div className="flex gap-6 text-slate-500">
            <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;