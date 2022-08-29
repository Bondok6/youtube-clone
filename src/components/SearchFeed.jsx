import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Videos } from './';
import { getDatabySearch } from '../redux/videos/videos-slice';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();

  useEffect(() => {
    dispatch(getDatabySearch(searchTerm));
  }, [dispatch, getDatabySearch, searchTerm]);

  const videos = useSelector((state) => state.videos.filteredVideos);

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
