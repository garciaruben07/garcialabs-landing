// Archivo de inicio para Plesk
// Este archivo fuerza el modo producción y arranca Next.js correctamente

process.env.NODE_ENV = 'production';

const app = require('next/dist/cli/next-start');

app.nextStart({
  port: process.env.PORT || 3000,
});
