function showMe () {
    var yname = document.getElementById("val-nm").value;
    var yem = document.getElementById("val-email").value;
    var ypw = document.getElementById("val-pw").value;
    var ycpw = document.getElementById("val-cpw").value;

    document.getElementById("rnm").value = yname;
    document.getElementById("rem").value = yem;
    document.getElementById("rpw").value = ypw;
    document.getElementById("rcpw").value = ycpw;
    // if (yem == -1) {
    //     alert("Not a valid e-mail!");
    //     submitOK = "false";
    //   }
    }

    function hidD() {
        var x = document.getElementById("result");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }