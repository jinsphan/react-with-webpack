const nodeEnv = {
    "development": "develop",
    "production": "prod",
}

require("dotenv").config({
    path: `.env.${nodeEnv[process.env.NODE_ENV]}.decrypted`,
});
