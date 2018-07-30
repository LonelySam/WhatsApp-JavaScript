const db = {
  '1' : [
    {
      From: 'Contact',
      Text: 'How are you doing?',
      Hour: '10:24 PM'
    },
    {
      From: 'You',
      Text: 'I\'m fine, what about you?',
      Hour: '10:24 PM'
    },
    {
      From: 'Contact',
      Text: 'Missing you xD There\'s no party without you',
      Hour: '10:24 PM'
    },
    {
      From: 'Contact',
      Text: 'Are you coming?',
      Hour: '10:24 PM'
    },
    {
      From: 'Contact',
      Text: 'Tell me you are',
      Hour: '10:24 PM'
    },
    {
      From: 'Please',
      Text: 'How are you doing?',
      Hour: '10:24 PM'
    },
    {
      From: 'You',
      Text: 'Geez, ok, I\'ll arrive asap',
      Hour: '10:24 PM'
    },
    {
      From: 'Contact',
      Text: 'I will wait for you. PD:...',
      Hour: '10:24 PM'
    },
    {
      From: 'Contact',
      Text: 'i\'m on fire ( ͡° ͜ʖ ͡°)',
      Hour: '10:24 PM'
    },
  ],
  '2' : [
    {
      From: 'Contact',
      Text: 'Are you going to the party?',
      Hour: '10:24 PM'
    },
    {
      From: 'Contact',
      Text: 'I\'m sick :C',
      Hour: '10:24 PM'
    },
    {
      From: 'Contact',
      Text: 'If you are going, tell me how it is',
      Hour: '10:24 PM'
    },
    {
      From: 'You',
      Text: 'Ok, ill tell you every detail',
      Hour: '10:24 PM'
    },
    {
      From: 'Contact',
      Text: 'Thanks',
      Hour: '10:24 PM'
    },
  ]
}

export default {
  getChat(id) {
    return Promise.resolve({
      Messages : db[id],
    })
  },
};
