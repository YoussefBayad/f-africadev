const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const dynamic = require('next/dynamic');
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
module.exports = withPlugins([optimizedImages], { target: 'serverless' });
