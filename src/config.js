const config = {
    STRIPE_KEY: "pk_test_51I9FPZC9iQZugSxxxOhlSV8algSPIJmioGuY8VhxRdGeKXc8djer3ZY7G4S7Um5cFs72Ub9kxD779RcxCGxDUXle003T7MsOl9",
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
    MAX_ATTACHMENT_SIZE: 5000000,
  };
  
export default config;