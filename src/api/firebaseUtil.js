import {initializeApp} from 'firebase/app';
// require('firebase/auth');
require('firebase/database');
import { firebaseConfig } from './config';

const appconfig = initializeApp(firebaseConfig);
const database = appconfig.database().ref().child('items');

export {database};