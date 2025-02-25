import React from 'react';
import { UserNavbar } from './UserNavbar';
import { Outlet } from 'react-router-dom';

export const UserSidebar = () => {
  return (
    <>
      <UserNavbar />
      <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
        <div className="sidebar-brand">
          <a href="/" className="brand-link">
            <img src="/assets/img/credit/logo-dark.png" alt="ChillSpace Logo" className="brand-image opacity-75 shadow" />
            <span className="brand-text fw-light">ChillSpace</span>
          </a>
        </div>

        <div className="sidebar-menu-container">
          <nav className="mt-2">
            <ul className="nav sidebar-menu flex-column" role="menu">
              <li className="nav-item">
                <a href="/home" className="nav-link">
                  <i className="nav-icon bi bi-house-door" />
                  <p>Home</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/explore" className="nav-link">
                  <i className="nav-icon bi bi-search" />
                  <p>Explore Listings</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/bookings" className="nav-link">
                  <i className="nav-icon bi bi-calendar-check" />
                  <p>My Bookings</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/wishlist" className="nav-link">
                  <i className="nav-icon bi bi-heart" />
                  <p>Wishlist</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/host" className="nav-link">
                  <i className="nav-icon bi bi-plus-square" />
                  <p>Host a Stay</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/messages" className="nav-link">
                  <i className="nav-icon bi bi-chat-dots" />
                  <p>Messages</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/notifications" className="nav-link">
                  <i className="nav-icon bi bi-bell" />
                  <p>Notifications</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/profile" className="nav-link">
                  <i className="nav-icon bi bi-person-circle" />
                  <p>Profile Settings</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link text-danger">
                  <i className="nav-icon bi bi-box-arrow-right" />
                  <p>Logout</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
};