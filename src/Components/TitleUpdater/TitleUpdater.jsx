
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === '/') {
      document.title = 'Home - My Shop';
    } else if (path.startsWith('/category/')) {
      const category = path.split('/category/')[1];
      document.title = `${category.charAt(0).toUpperCase() + category.slice(1)} - My Shop`;
    } else if (path === '/cart') {
      document.title = 'Cart - My Shop';
    } else if (path.startsWith('/product/')) {
      document.title = 'Product Details - My Shop';
    } else if (path === '/login') {
      document.title = 'Login - My Shop';
    } else if (path === '/signup') {
      document.title = 'Signup - My Shop';
    } else {
      document.title = 'My Shop';
    }
  }, [location.pathname]);

  return null;
};

export default TitleUpdater;
