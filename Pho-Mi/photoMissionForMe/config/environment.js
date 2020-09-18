var environments = {
    staging: {
      FIREBASE_API_KEY: "fill this",
      FIREBASE_AUTH_DOMAIN: "fill this",
      FIREBASE_DATABASE_URL: "fill this",
      FIREBASE_PROJECT_ID: "fill this",
      FIREBASE_STORAGE_BUCKET: "fill this",
      FIREBASE_MESSAGING_SENDER_ID: "fill this",
      GOOGLE_CLOUD_VISION_API_KEY: "fill this"
    },
    production: {
      // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
    }
  };
  function getReleaseChannel() {
    let releaseChannel = Expo.Constants.manifest.releaseChannel;
    if (releaseChannel === undefined) {
      return "staging";
    } else if (releaseChannel === "staging") {
      return "staging";
    } else {
      return "staging";
    }
  }
  function getEnvironment(env) {
    console.log("Release Channel: ", getReleaseChannel());
    return environments[env];
  }
  var Environment = getEnvironment(getReleaseChannel());
  export default Environment;