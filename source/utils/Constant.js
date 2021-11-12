import {API_URL, API_KEY} from 'react-native-dotenv';

export const KEY = API_KEY;
export const URL = API_URL;
export function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}
