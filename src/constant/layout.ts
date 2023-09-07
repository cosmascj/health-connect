import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  cards: {
    announcementCard: width - 16 * 13,
    cardRadius: 0,
    cardSize: 120,
    genreHeight: 90,
    trackHeight: 0,
    walletHeight: 120,
    walletRadius: 8,
    walletWidth: width - 16 * 4,
  },
  window: {
    height,
    width,
  },
};
