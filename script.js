const justFood = (pocetLidi) => {
    return `catering od Just Food pro ${pocetLidi} lidí za ${Math.round(
      pocetLidi * 150
    )} Kč`;
  };
  const yourMama = (pocetLidi) => {
    return `catering od Your Mama pro ${pocetLidi} lidí za ${Math.round(
      pocetLidi * 300
    )} Kč`;
  };
  const flavourHaven = (pocetLidi) => {
    return `catering od Flavour Haven pro ${pocetLidi} lidí za ${Math.round(
      pocetLidi * 500
    )} Kč`;
  };
  
  const createEvent = (nazevUdalosti, pocetLidi, catering) => {
    return `Událost ${nazevUdalosti} s ${catering(pocetLidi)}`;
  };
  
  document.body.innerHTML += createEvent(
    'Zahradní slavnost',
    500,
    yourMama
  );