import moment from 'moment';

export const parseDateAndTime = date => {
  return moment(date).format('dddd, MMMM DD, YYYY_h:mm_a').split('_');
};
