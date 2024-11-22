document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    let date = new Date();
    const timeString = date.toLocaleTimeString();
    document.querySelector('#showtime').innerHTML = timeString;
  }
});

// {
// const date=new Date()
// const timeString=date.toLocaleTimeString();
// document.getElementById("showtime")+timeString;
// }

// console.log(myFunction)
