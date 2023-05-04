const corsOptions = {
  origin: ['http://mesto-pchu.nomoredomains.monster',
    'https://mesto-pchu.nomoredomains.monster',
    'http://www.mesto-pchu.nomoredomains.monster',
    'https://www.mesto-pchu.nomoredomains.monster',
    'http://api.mesto-pchu.nomoredomains.monster',
    'https://api.mesto-pchu.nomoredomains.monster',
    'http://www.api.mesto-pchu.nomoredomains.monster',
    'https://www.api.mesto-pchu.nomoredomains.monster'],
  methods: 'GET,PUT,POST,DELETE,PATCH',
  allowedHeaders: 'Content-Type,Authorization',
};

module.exports = corsOptions;
