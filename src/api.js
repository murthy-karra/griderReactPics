import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID JpOQpbt4k3mfqp-NO765NHeJFbg1ZK7KijMrEYKPBFo",
    },
    params: {
      query: term,
    },
  });
  //console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
