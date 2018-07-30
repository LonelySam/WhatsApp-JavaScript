export default {
  getStatusContacts() {
    return Promise.resolve({
      Stories : [
        {
          Id: 1,
          User : 'Laura',
          Datetime : '20 minutes ago',
        },
        {
          Id: 2,
          User : 'Dayana Perez',
          Datetime : '40 minutes ago',
        },
        {
          Id: 3,
          User : 'Josh',
          Datetime : 'Today 20:30',
        },
        {
          Id: 4,
          User : 'Halsey',
          Datetime : '06/28/2018',
        },
        {
          Id: 5,
          User : 'Yang Xiao Long',
          Datetime : '06/28/2018',
        },
        {
          Id: 6,
          User : 'Shaun',
          Datetime : '06/28/2018',
        },
        {
          Id: 7,
          User : 'Ruby',
          Datetime : '06/28/2018',
        },
      ]
    })
  },
};
