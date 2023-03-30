export function getTitleHeader(pathname: string): string {
  switch (pathname) {
    case '/':
      return 'Home';
    case '/about':
      return 'About';

    case '/form':
      return 'Form';

    default:
      return 'NotFoundPage';
  }
}
