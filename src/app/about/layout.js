import React from 'react';
import Link from 'next/link'; // Importing Link component

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', gap: 100 }}>
          <li>
            <Link href="/about/mission">mission</Link>
          </li>
          <li>
            <Link href="/about/vision">vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
