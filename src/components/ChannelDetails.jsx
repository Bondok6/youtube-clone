import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getChannelFromAPI,
  getVideoFromAPI,
} from '../redux/videos/videos-slice';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';

const ChannelDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelFromAPI(id));
    dispatch(getVideoFromAPI(id));
  }, [dispatch, id, getChannelFromAPI, getVideoFromAPI]);

  const channel = useSelector((state) => state.videos.channel);

  const video = useSelector((state) => state.videos.video);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channel={channel} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={video} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
