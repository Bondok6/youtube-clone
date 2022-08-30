import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Videos } from './';
import { getDatabySearch } from '../redux/videos/videos-slice';
import { useParams } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const SearchFeed = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();

  useEffect(() => {
    dispatch(getDatabySearch(searchTerm));
  }, [dispatch, getDatabySearch, searchTerm]);

  const videos = useSelector((state) => state.videos.filteredVideos);

  const { isLoading } = useSelector((state) => state.videos);

  if (isLoading) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: '0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}
      >
        <Oval width={50} height={50} />
      </Box>
    );
  }

  return (
    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: '#fff',
        }}
      >
        Search Results for:{' '}
        <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
      </Typography>

      {videos.length > 0 && <Videos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
