function openSidebar() {
  document.getElementById('sidebar').style.width = '250px';
  document.getElementById('main-content').style.marginLeft = '250px';
}

function closeSidebar() {
  document.getElementById('sidebar').style.width = '0';
  document.getElementById('main-content').style.marginLeft = '0';
}