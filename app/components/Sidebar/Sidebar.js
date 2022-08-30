import classes from "./Sidebar.module.css";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
    <div
    id="alert-additional-content-4"
      className="p-3 mb-4 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-yellow-200"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2 text-yellow-700 dark:text-yellow-800"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
            ></path>
            </svg>
            <span className="sr-only">Info</span>
            <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-800">
            Beta warning
            </h3>
            </div>
            <div className="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
        Ethlinked is still in beta, things may break. Please handle us with
        care.
      </div>
    </div>
    <div>
    <div className= {`${classes.socials}`} >
    <div className="grid grid-cols-4">
    <a href = "https://twitter.com/Vaibhavtwts" target = "_blank"><img src = "/twitter.svg" alt = "twitter image"/></a>
    <a href = "https://www.linkedin.com/in/vaibhav-arora-5234301a0" target = "_blank"><img src = "/linkedin.svg" alt = "linkedin image"/></a>
    <a href = "https://vaibhavcodes.me" target = "_blank"><img src="https://img.icons8.com/offices/36/000000/visit.png" alt = "website"/></a>
    <a href = "https://www.instagram.com/vaibhavarora.19/" target = "_blank"><img src ="/instagram.svg" alt = "instagram image"/></a>
    </div>
    <p className= {classes.copyright}>© 2022 - Designed and built by Vaibhav Arora</p>
    </div>
    </div>
    </div>
  );
};

export default Sidebar;
