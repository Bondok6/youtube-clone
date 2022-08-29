import { getDataFromAPI } from '../../utils/getDataFromAPI';

const getVideos = async (category) => {
  const { items } = await getDataFromAPI(`search?part=snippet&q=${category}`);
  return items;
};

const getVideo = async (id) => {
  const { items } = await getDataFromAPI(
    `search?channelId=${id}&part=snippet&order=date`
  );
  return items;
};

const getChannel = async (id) => {
  const data = await getDataFromAPI(`channels?part=snippet&id=${id}`);
  return data?.items[0];
};

const getDatabySearch = async (search) => {
  console.log(search);
  const { items } = await getDataFromAPI(`search?part=snippet&q=${search}`);
  return items;
};

const videosService = {
  getVideos,
  getVideo,
  getChannel,
  getDatabySearch,
};

export default videosService;
