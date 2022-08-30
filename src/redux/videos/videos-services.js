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
  const { items } = await getDataFromAPI(`search?part=snippet&q=${search}`);
  return items;
};

const getVideoDetails = async (id) => {
  const data = await getDataFromAPI(`videos?part=snippet,statistics&id=${id}`);
  return data.items[0];
};

const getRelatedVideos = async (id) => {
  const { items } = await getDataFromAPI(
    `search?part=snippet&relatedToVideoId=${id}&type=video`
  );
  return items;
};

const videosService = {
  getVideos,
  getVideo,
  getChannel,
  getDatabySearch,
  getVideoDetails,
  getRelatedVideos,
};

export default videosService;
