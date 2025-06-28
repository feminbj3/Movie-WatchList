// ✅ config.js - Reads values securely from window.ENV injected in index.html

const CONFIG = {
  firebase: {
    apiKey: window.ENV.FIREBASE_API_KEY,
    authDomain: window.ENV.FIREBASE_AUTH_DOMAIN,
    projectId: window.ENV.FIREBASE_PROJECT_ID,
    storageBucket: window.ENV.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: window.ENV.FIREBASE_MSG_SENDER_ID,
    appId: window.ENV.FIREBASE_APP_ID,
    measurementId: window.ENV.FIREBASE_MEASUREMENT_ID
  },
  omdb: {
    apiKey: window.ENV.OMDB_API_KEY
  }
};

window.APP_CONFIG = CONFIG;
