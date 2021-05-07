const config = {
  dev: {
    firebase: {
      apiKey: process.env.REACT_APP_DEV_FB_API_KEY,
      authDomain: process.env.REACT_APP_DEV_FB_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DEV_FB_DB_URL,
      projectId: process.env.REACT_APP_DEV_FB_PROJECT_ID,
      storageBucket: process.env.REACT_APP_DEV_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_DEV_FB_MSG_SENDER_ID,
      appId: process.env.REACT_APP_DEV_FB_APP_ID,
    },
    admin: {
      baseUrl: process.env.REACT_APP_DEV_BASE_URL,
      googleKey: process.env.REACT_APP_DEV_GOOGLE_KEY,
      envSetting: process.env.REACT_APP_DEV_ENVIRONMENT_SETTING,
      googleTrackingID: process.env.REACT_APP_DEV_GOOGLE_ANALYTICS_CODE,
    },
  },
  prod: {
    firebase: {
      apiKey: process.env.REACT_APP_FB_API_KEY,
      authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FB_DB_URL,
      projectId: process.env.REACT_APP_FB_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
      appId: process.env.REACT_APP_FB_APP_ID,
    },
    admin: {
      baseUrl: process.env.REACT_APP_BASE_URL,
      googleKey: process.env.REACT_APP_GOOGLE_KEY,
      envSetting: process.env.REACT_APP_ENVIRONMENT_SETTING,
      googleTrackingID: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
    },
  },
};

export default config;
