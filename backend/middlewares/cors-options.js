const corsOptions = {
  origin: ['http://mesto-pchu.nomoredomains.monster',
    'https://mesto-pchu.nomoredomains.monster',
    'http://api.mesto-pchu.nomoredomains.monster',
    'https://api.mesto-pchu.nomoredomains.monster',
    'http://localhost:3000', 'http://localhost:3001'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

module.exports = corsOptions;
