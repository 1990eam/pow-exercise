// const telegramBot = (message) => {

//   console.log(`${message}`) # no funciona
//   // data fetch
//   const baseUrl = "https://api.telegram.org/"
//   const authToken = "bot1709630821:AAFByNEw70yXpqXI32j8CZ5P9JJH9attDeI"
//   const botCommand = "sendMessage"
//   const chatId = "@apitestpow"
//   var textMessage = "message"

//   var requestOptions = {
//     method: 'POST',
//     redirect: 'follow'
//   };

//   fetch(`https://api.telegram.org/${authToken}/${botCommand}?chat_id=${chatId}&text=${textMessage}`, requestOptions)
//     .then(response => response.json())
//     .then((data) => { console.log(data);
//       });
// };

// export { telegramBot };
