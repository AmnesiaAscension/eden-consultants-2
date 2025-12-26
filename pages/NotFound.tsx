
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="py-32 px-4 text-center">
      <h1 className="text-6xl font-black text-slate-200 mb-6">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-slate-600 mb-12">We couldn't find the page you're looking for.</p>
      <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
