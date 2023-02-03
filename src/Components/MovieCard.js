import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function MovieCard({movie}) {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 600 }}
        image={movie.posterUrl}
      
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="read-only" value={movie.rating} readOnly />
      </CardActions>
    </Card>
  );
}