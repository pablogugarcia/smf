module.exports = {
  ALL: [
    {
      'id': 'basic',
      category: '',
      name: 'Basic worker',
      selectClients: true,
    },
    {
      'id': 'back-end-express',
      category: '',
      name: 'Back-end (Express.js)',
      selectClients: true,
    },
    // {'id': 'back-end-sails',   category: '', name: 'Back-end (Sails.js)', selectClients: true},
    {
      'id': 'front-end-react',
      category: '',
      name: 'Front-end (React.js)',
      selectClients: false,
      beforeCreate: [
        {
          cmd: 'npx create-react-app app',
        },
        {
          cmd: 'npm install react-router-dom',
          dir: '/app',
        },
        {
          cmd: 'npm install axios',
          dir: '/app',
        },
      ],
    },
  ]
}