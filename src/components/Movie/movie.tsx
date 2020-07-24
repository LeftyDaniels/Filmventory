import * as React from 'react';
import {
  makeStyles,
  Paper,
  Grid,
  Typography,
  PaperProps,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from '@material-ui/core';
import { MoviePoster } from '../';
import { IAPIMovie, IAPIMovieCredits } from '../../hooks';

export interface IMovieProps extends PaperProps {
  movie: IAPIMovie;
  credits: IAPIMovieCredits;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    height: '99%',
    overflow: 'hidden',
  },
  container: {
    height: '100%',
  },
  imageContainer: {
    height: '100%',
  },
  button: {
    transition: theme.transitions.create(['background-color', 'opacity'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      backgroundColor: `${theme.palette.grey[300]}`,
      opacity: '85%',
    },
  },
  poster: {
    margin: 0,
  },
  peopleAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(10),
  },
  details: {
    height: '100%',
    overflow: 'auto',
  },
}));

export const Movie: React.FC<IMovieProps> = ({ movie, credits, ...props }) => {
  const styles = useStyles();

  let director = credits.crew.find(
    (crewMember) => crewMember.job === 'Director',
  );

  let processedCrew = credits.crew.filter(
    (crewMember) => crewMember.job !== 'Director',
  );

  return (
    <Paper className={styles.root} {...props}>
      <Grid container spacing={2} className={styles.container}>
        <Grid item container xs={4} className={styles.imageContainer}>
          <MoviePoster poster={movie.poster_path} />
        </Grid>

        <Grid item container xs={8} className={styles.details}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h3">
              {movie.title}
            </Typography>

            <Typography variant="subtitle1">
              {director?.name && `Directed By ${director.name}`}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">{movie.overview}</Typography>
          </Grid>

          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Typography variant="h3">Cast</Typography>

              <List>
                {credits.cast.map((castMember) => (
                  <React.Fragment key={castMember.id}>
                    <ListItem key={castMember.id}>
                      <ListItemAvatar>
                        <Avatar
                          className={styles.peopleAvatar}
                          alt={castMember.name}
                          src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                          variant="rounded"
                        />
                      </ListItemAvatar>

                      <ListItemText
                        primary={castMember.name}
                        secondary={castMember.character}
                      />
                    </ListItem>

                    <Divider variant="middle" component="li" />
                  </React.Fragment>
                ))}
              </List>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h3">Crew</Typography>

              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      className={styles.peopleAvatar}
                      alt={director?.name}
                      src={`https://image.tmdb.org/t/p/w500${director?.profile_path}`}
                      variant="rounded"
                    />
                  </ListItemAvatar>

                  <ListItemText
                    primary={director?.name}
                    secondary={director?.job}
                  />
                </ListItem>

                <Divider variant="middle" component="li" />

                {processedCrew.map((crewMember, i) => (
                  <React.Fragment key={crewMember.id}>
                    <ListItem key={crewMember.id}>
                      <ListItemAvatar>
                        <Avatar
                          className={styles.peopleAvatar}
                          alt={crewMember.name}
                          src={`https://image.tmdb.org/t/p/w500${crewMember.profile_path}`}
                          variant="rounded"
                        />
                      </ListItemAvatar>

                      <ListItemText
                        primary={crewMember.name}
                        secondary={crewMember.job}
                      />
                    </ListItem>

                    <Divider variant="middle" component="li" />
                  </React.Fragment>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Movie;
