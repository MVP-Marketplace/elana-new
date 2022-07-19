import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

const ScrollToTop = ({children}) => {

  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scroll({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
  }, [location.pathname]);

  return children
} 

export default ScrollToTop