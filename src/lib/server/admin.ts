import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private';
import pkg from 'firebase-admin';


try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY,
    }),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error('Firebase Admin initialization error: ', err.stack);
  }
}

export const adminDb = getFirestore();
export const adminAuth = getAuth();

