module.exports = {
  apps: [{
    name: 'sound-developer',
    script: 'dist/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    execmdode: "cluster",
    autorestart: true,
    watch: ["./dist/lib", "./dist/index.js"],
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};