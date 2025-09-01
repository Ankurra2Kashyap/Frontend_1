import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../Assests/bg-8.jpg';

function RoleSelectionPage() {
  const [adminHover, setAdminHover] = useState(false);
  const [userHover, setUserHover] = useState(false);

  const pageStyle = {
    minHeight: '100vh',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '40px 20px',
    gap: '50px',
    position: 'relative'
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    padding: '40px 60px',
    width: '350px',
    height: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '2px solid transparent',
    position: 'relative',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit'
  };

  const cardHoverStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    borderColor: 'rgba(102, 126, 234, 0.3)'
  };

  // Admin Icon Component (Person with Lock)
  const AdminIcon = () => (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '60px',
      margin: '0 auto'
    }}>
      {/* Person silhouette */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '15px',
        width: '30px',
        height: '30px',
        backgroundColor: '#2d5a5a',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '25px',
        left: '5px',
        width: '50px',
        height: '35px',
        backgroundColor: '#2d5a5a',
        borderRadius: '25px 25px 0 0'
      }}></div>
      {/* Lock icon */}
      <div style={{
        position: 'absolute',
        bottom: '-5px',
        left: '22px',
        width: '16px',
        height: '12px',
        backgroundColor: '#00bcd4',
        borderRadius: '2px',
        border: '2px solid #00bcd4'
      }}>
        <div style={{
          position: 'absolute',
          top: '-8px',
          left: '3px',
          width: '6px',
          height: '8px',
          border: '2px solid #00bcd4',
          borderBottom: 'none',
          borderRadius: '3px 3px 0 0',
          backgroundColor: 'transparent'
        }}></div>
      </div>
    </div>
  );

  // User Icon Component (Person with Checkmark)
  const UserIcon = () => (
    <div style={{
      position: 'relative',
      width: '60px',
      height: '60px',
      margin: '0 auto'
    }}>
      {/* Person silhouette */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '15px',
        width: '30px',
        height: '30px',
        backgroundColor: '#4a4a4a',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '25px',
        left: '5px',
        width: '50px',
        height: '35px',
        backgroundColor: '#4a4a4a',
        borderRadius: '25px 25px 0 0'
      }}></div>
      {/* Green checkmark circle */}
      <div style={{
        position: 'absolute',
        bottom: '-5px',
        right: '-5px',
        width: '20px',
        height: '20px',
        backgroundColor: '#4caf50',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Checkmark */}
        <div style={{
          width: '6px',
          height: '10px',
          border: '2px solid white',
          borderTop: 'none',
          borderLeft: 'none',
          transform: 'rotate(45deg)',
          marginTop: '-2px',
          marginLeft: '-1px'
        }}></div>
      </div>
    </div>
  );

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '10px',
    letterSpacing: '2px'
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: '#666',
    fontWeight: '400',
    letterSpacing: '1px'
  };

  // Ripple effect function
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement('div');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(102, 126, 234, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  // Add ripple animation to head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div style={pageStyle}>
      {/* Admin Card */}
      <Link
        to="/Adminlogin"
        style={{
          ...cardStyle,
          ...(adminHover ? cardHoverStyle : {})
        }}
        onMouseEnter={() => setAdminHover(true)}
        onMouseLeave={() => setAdminHover(false)}
        onClick={(e) => {
          createRipple(e);
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <AdminIcon />
        </div>
        <h2 style={titleStyle}>ADMIN</h2>
        <p style={subtitleStyle}>Manage & Control</p>
      </Link>

      {/* User Card */}
      <Link
        to="/Userlogin"
        style={{
          ...cardStyle,
          ...(userHover ? cardHoverStyle : {})
        }}
        onMouseEnter={() => setUserHover(true)}
        onMouseLeave={() => setUserHover(false)}
        onClick={(e) => {
          createRipple(e);
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <UserIcon />
        </div>
        <h2 style={titleStyle}>USER</h2>
        <p style={subtitleStyle}>Access & Explore</p>
      </Link>
    </div>
  );
}

export default RoleSelectionPage;