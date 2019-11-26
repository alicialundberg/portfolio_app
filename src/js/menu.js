function openSlideMenu() {
  document.getElementById('menu').style.width = '250px';
  document.getElementById('wrapper').style.marginLeft = '250px';
  document.getElementById('hamburger').style.color = '#cfcfe1';
}

function closeSlideMenu() {
  document.getElementById('menu').style.width = '0';
  document.getElementById('wrapper').style.marginLeft = '0';
  document.getElementById('hamburger').style.color = '#fff';
}
