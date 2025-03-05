export const getImageUrl = (path) => {
  return `/assets/${path}`;
    //return new URL(`assets/${path}`, import.meta.url).href;
  };
  
