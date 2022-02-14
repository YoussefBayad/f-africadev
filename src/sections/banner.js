/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.jpg';

export default function Banner() {
  return (
    <section sx={styles.banner} id='home'>
      <Button variant='primary'>Covid 19 Products</Button>
    </section>
  );
}

const styles = {
  banner: {
    pt: ' 85px',
    height: '500px',
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerImg})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundFill: 'cover',
    pb: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',

    button: {
      background:
        'linear-gradient(rgb(255, 149, 0) 0%, rgb(255, 94, 58) 100%) rgb(0, 122, 255)',
      '&:hover': {
        boxShadow: 'rgb(255, 149, 0) 0px 12px 24px -10px',
      },
    },
  },
};
