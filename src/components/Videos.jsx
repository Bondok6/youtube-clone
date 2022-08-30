import { Stack, Box } from '@mui/material';

import { ChannelCard, VideoCard } from './';
import { Oval } from 'react-loader-spinner';

const Videos = ({ videos, direction }) => {
  if (videos.length === 0) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Oval width={50} height={50} />
      </Box>
    );
  }
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
