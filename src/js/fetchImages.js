export const fetchImages = async (inputData, page) => {
    return await fetch(
      `https://pixabay.com/api/?key=32017695-e686be41b07e014b2e19f4e7c&q=${inputData}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${page}`
    )
      .then(async response => {
        if (!response.ok) {
          if (response.status === 404) {
            return [];
          }
          throw new Error(response.status);
        }
        return await response.json();
      })
      .catch(error => {
        console.error(error);
      });
  };

  
/* import axios from "axios";


export const fetchImages = async (inputData, page) => {
  try {
    const response = await axios.get(
    `https://pixabay.com/api/?key=32017695-e686be41b07e014b2e19f4e7c&q=${inputData}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${page}`
  );
  return response;
} catch (error) {
  console.error(error);
}}
 */
