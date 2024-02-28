const copyright = document.querySelector('.currentyear');

const currentDate = new Date();
const getCurrentYear = currentDate.getFullYear();

copyright.innerHTML = getCurrentYear;