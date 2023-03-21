module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_HOOK,
      apiToken: process.env.VERCEL_API_TOKEN,
      appFilter: process.env.VERCEL_APP_FILTER,
      teamFilter: process.env.VERCEL_TEAM_FILTER,
    },
  },
});
