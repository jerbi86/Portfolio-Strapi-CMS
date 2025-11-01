module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        endpoint: env('S3_ENDPOINT'), // e.g. https://fra1.digitaloceanspaces.com
        s3Options: {
          accessKeyId: env('S3_ACCESS_KEY_ID'),
          secretAccessKey: env('S3_SECRET_ACCESS_KEY'),
          region: env('S3_REGION'), // e.g. fra1
          params: {
            Bucket: env('S3_BUCKET'),
          },
          forcePathStyle: false, // works with Spaces
        },
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
