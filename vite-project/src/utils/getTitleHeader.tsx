export const getTitleHeader = (pathname: string): string => {
  switch (pathname) {
    case '/':
      return 'Home';
    case '/about':
      return 'About';
    case '/form':
      return 'Form Page';
    default:
      return 'Not Found Page';
  }
};
