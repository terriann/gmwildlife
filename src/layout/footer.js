import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <p className="text-center">
          &copy; 2019-{year} Green Mountain Wildlife Services &middot; Hosted on{" "}
          <a
            href="https://github.com/terriann/gmwildlife"
            className="text-white"
          >
            github
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
