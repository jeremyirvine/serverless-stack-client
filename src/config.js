const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "jeremy-irvine-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://odi6k94bc4.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_kMawYPMoo",
      APP_CLIENT_ID: "7unvb43v7uth4k799ug1pdfnim",
      IDENTITY_POOL_ID: "us-east-1:571762ee-d6a5-46cb-afc3-23a72caa4dc7",
    },
  };
  
  export default config;