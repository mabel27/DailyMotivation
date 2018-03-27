export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getQuote() {
  const quotes = [
    "Shoot for the moon Baby!",
    "Rise and Shine!",
    "People who love are Happy!",
    "Only I can change my life. No one can do it for me.",
    "Believe in yourself",
    "No esperes Mas",
    "LOVE never gives up",
    "Cree en ti", 
    "Life is Amazing",
    "I always follow my Heart's path",
    "Lo real es lo Presente",
    "How much you truly believe in something can be manifested only through what you are willing to risk for it.",
    "Don’t be afraid to give up the good and go for the great.",
    "El Exito alimenta tu pasion ",
    "Stay Close to people who feel like sunshine",
    "Cada persona es una puerta a un mundo distinto"
  ];


  return `${rando(quotes)}`;
}

 export function getDate (){

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = mm + '/' + dd + '/' + yyyy;

    return today;
 }

