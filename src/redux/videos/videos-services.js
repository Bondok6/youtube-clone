import { getDataFromAPI } from '../../utils/getDataFromAPI';

const getVideos = async (category) => {
  const { items } = await getDataFromAPI(`search?part=snippet&q=${category}`);
  return items;
};

const videosService = {
  getVideos,
};

export default videosService;
