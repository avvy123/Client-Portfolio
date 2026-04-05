import {LinkedIn, InstagramIcon, YouTube} from "../common/Icon"
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center gap-6">
          <a href={socialLinks.linkedin} className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
           <LinkedIn />
          </a>
          <a href={socialLinks.instagram} className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href={socialLinks.youtube} className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors" aria-label="YouTube">
            <YouTube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;