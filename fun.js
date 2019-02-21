function showMe () {
  var yname = document.getElementById('val-nm').value
  var yem = document.getElementById('val-email').value
  var ypw = document.getElementById('val-pw').value
  var ycpw = document.getElementById('val-cpw').value

  document.getElementById('rnm').value = yname
  document.getElementById('rem').value = yem
  document.getElementById('rpw').value = ypw
  document.getElementById('rcpw').value = ycpw
}
function hidD () {
  var x = document.getElementById('result')
  if (x.style.display === 'none') {
    x.style.display = 'block'
  }
  else {
    x.style.display = 'none'
  }
}
function validme(){
  var nm = document.forms["vfrm"]["username"].value;
  if (nm == "") {
    alert("Name must be filled out");
    return false;
  }
  var nm = document.forms["vfrm"]["val-email"].value;
  if (nm == "") {
    alert("Email must be filled out");
    return false;
  }
  var pw = document.forms["vfrm"]["userpw"].value;
  var ypw = document.getElementById('val-pw').value;
  if (pw == ""|| ypw.length < 6) {
    alert("Password must be filled out");
    return false;
  }

  var password = document.getElementById("val-pw")
  , confirm_password = document.getElementById("val-cpw");

  if(password.value != confirm_password.value) {
    alert("Passwords Don't Match");
    return false;
  }
}