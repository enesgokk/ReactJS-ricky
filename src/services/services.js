const axios = require("axios");

export async function getAllEpisode() {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASEURL}/api/episode`
    );
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getEpisodeDetail(id) {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASEURL}/api/episode/${id}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  export async function getCharacterDetail(id) {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASEURL}/api/character/${id}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }

export default { getAllEpisode,getEpisodeDetail,getCharacterDetail };