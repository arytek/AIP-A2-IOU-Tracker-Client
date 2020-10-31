/*
    Returns an array of localStorage items in key/value pairs based on a query parameter.
    Returns all localStorage items if query isn't specified.
    Query can be a string or a RegExp object.
    Credits: https://gist.github.com/n0m4dz/77f08d3de1b9115e905c
*/
function findLocalItems(query) {
  let results = [];
  for (let i in localStorage) {
    if (localStorage.hasOwnProperty(i)) {
      if (i.match(query) || (!query && typeof i === 'string')) {
        console.log(localStorage.getItem(i));
        let value = localStorage.getItem(i);
        results.push({ key: i, val: value });
      }
    }
  }
  return results;
}

export { findLocalItems };
