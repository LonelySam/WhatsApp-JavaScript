export default {
  getCalls() {
    return Promise.resolve({
      Calls : [
        {
          Id: 1,
          User : 'Dad',
          Datetime : 'July 5, 4:30 AM',
        },
        {
          Id: 2,
          User : 'Mom',
          Datetime : 'July 5, 4:29 AM',
        },
        {
          Id: 3,
          User : 'Mom',
          Datetime : 'July 5, 4:27 AM',
        },
        {
          Id: 4,
          User : 'Mom',
          Datetime : 'July 5, 4:25 AM',
        },
        {
          Id: 5,
          User : 'Mom',
          Datetime : 'July 5, 4:23 AM',
        },
        {
          Id: 6,
          User : 'Mom',
          Datetime : 'July 5, 4:20 AM',
        },
        {
          Id: 7,
          User : 'Mom',
          Datetime : 'July 5, 4:15 AM',
        },
        {
          Id: 8,
          User : 'Dont Answer',
          Datetime : 'April 25, 12:30 AM',
        },
        {
          Id: 9,
          User : 'Josh',
          Datetime : 'May 25, 12:30 PM',
        },
        {
          Id: 10,
          User : 'May 25, 12:35 PM',
          Datetime : '07/28/2018',
        },
      ]
    })
  },
};
