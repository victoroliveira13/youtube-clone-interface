import React from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Grid,
  Avatar,
} from '@material-ui/core/';
import { useTheme } from '@material-ui/core/styles';


export default function ContentVideos() {
  const theme = useTheme();

  return (
    <Box p={4} pt={2}>
      <Toolbar />
      <Typography
        variant='h5'
        color='textPrimary'
        style={{ fontWeight: 500, marginBottom: 20 }}
      >
        Recomendados
      </Typography>

      <Grid container spacing={2}>
        {
          videos.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
                <img
                  style={{ width: '100%' }}
                  alt={item.title}
                  src={item.thumb}
                />
                <Box>
                  <Grid container>
                    <Grid item xs={2}>
                      <Avatar alt="Remy Sharp" src="../../images/avatar.jpg" />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant='body2'
                        color='textPrimary'
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        display='block'
                        variant='body2'
                        color='textSecondary'
                      >
                        {item.channel}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        {`${item.views} •`}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        {`${item.date}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          ))
        }
      </Grid>

    </Box>
  )
}

const videos = [
  {
    id: 1,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT | Dicas e Truques',
    channel: 'Victor Hugo de Oliveira',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT | Dicas e Truques',
    channel: 'Victor Hugo de Oliveira',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb.png',
  },
  {
    id: 3,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT | Dicas e Truques',
    channel: 'Victor Hugo de Oliveira',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb.png',
  },
  {
    id: 4,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT | Dicas e Truques',
    channel: 'Victor Hugo de Oliveira',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb.png',
  },
  {
    id: 5,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT | Dicas e Truques',
    channel: 'Victor Hugo de Oliveira',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb.png',
  },
  {
    id: 6,
    title: 'COMO MELHORAR SEU CODIGO JAVASCRIPT | Dicas e Truques',
    channel: 'Victor Hugo de Oliveira',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb.png',
  },
  {
    id: 7,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT | Dicas e Truques',
    channel: 'Victor Hugo de Oliveira',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb.png',
  },
  {
    id: 8,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT | Dicas e Truques',
    channel: 'Victor Hugo de Oliveira',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: '/images/thumb.png',
  }
];