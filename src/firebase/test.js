import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firebase.collection('Users').doc('0bE7WnGMttmYtrmbaZix').collection('cartItems').doc('QjEXLiTherfCDWiABxr2')
firestore.doc('/Users/0bE7WnGMttmYtrmbaZix/cartItems/QjEXLiTherfCDWiABxr2') /** return the document of cartItems collection */
firestore.collection('/Users/0bE7WnGMttmYtrmbaZix/cartItems') /** return the collection */