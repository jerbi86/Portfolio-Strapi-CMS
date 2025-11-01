
export default ({ env }) => ({
        proxy: { koa: true },
        url: env('APP_URL'), // Sets the public URL of the application.
        app: { 
          keys: env.array('APP_KEYS')
        },
    });