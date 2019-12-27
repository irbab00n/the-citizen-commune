// Allows me to import this one function everywhere rather than
// create a one-off in every component that would otherwise do the same thing.
// After all, that is the purpose of a utility file, right?
export const sliceFirstEndpointFromWindowLocation = (format: string) => {
  let { pathname } = window.location;

  if (pathname === '/') {
    return '/';
  } else {
    let [_, name] = pathname.split('/');
    // Disregard the first element in the array, as splitting by '/'
    // will leave an empty string as the first element in the array
    return determineReturnEndpointFormat(format, name); // The second element in the array should be the name of the first endpoint... should be...
    // Returns in '/pathname' format
  }
};

// A small helper function to abstract the decision making logic for what format to return
const determineReturnEndpointFormat = (
  format: string,
  name: string
): string => {
  switch (format) {
    case 'pathname':
      return `/${name}`;
    default:
      return name;
  }
};
