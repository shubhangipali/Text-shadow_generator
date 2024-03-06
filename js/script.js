let colorInput = document.querySelector('#bcolor');
let scolor = document.querySelector("#scolor");
let shadowinput = document.querySelector("#shadowcolor");
let shadowbox = document.getElementById("box-css-generator-demo");
let getVvalue = document.getElementById("vlength").value;
let getHvalue = document.getElementById("hlength").value;
let blurRadius = document.getElementById("bradius").value;
let opacityb3 = document.getElementById("opacity").value;
let resultv = document.getElementById("myInput");

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getColor(hex) {
  var rgb = hexToRgb(hex);
  let opacityb2 = document.getElementById("opacity").value;
  //   alert(opacityb3);
  var rgbString = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + opacityb2 + ")";
  return rgbString;
}

scolor.addEventListener('input', () => {
  let color = scolor.value;
  let boxshadowcolor = color;
  shadowinput.value = color;
  let bxscolor = document.getElementById("scolor").value;
  let getVvalue = document.getElementById("vlength").value;
  let getHvalue = document.getElementById("hlength").value;
  let blurRadius = document.getElementById("bradius").value;
  let shadowbox = document.getElementById("box-css-generator-demo");
  shadowbox.style.textShadow = "" + getColor(color) + " " + getHvalue + "px " + getVvalue + "px " + blurRadius + "px ";
  let myboxshadow = shadowbox.style.textShadow;
  document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow ;
});


$(function () {
  $("#hlength-slider").slider({
    range: "min",
    value: 4,
    min: -200,
    max: 200,
    step: 1,
    slide: function (event, ui) {
      $("#hlength").val("" + ui.value);
      $("#hlength").val("" + $("#hlength-slider").slider("value"));
      let bxscolor = document.getElementById("scolor").value;
      let opacityb = document.getElementById("opacity").value;
      let getVvalue = document.getElementById("vlength").value;
      let getHvalue = document.getElementById("hlength").value;
      let blurRadius = document.getElementById("bradius").value;
      let shadowbox = document.getElementById("box-css-generator-demo");
      shadowbox.style.textShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + opacityb + ") " + getHvalue + "px " + getVvalue + "px " + blurRadius + "px ";
      let myboxshadow = shadowbox.style.textShadow;
      document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow ;
    }
  });
});

$(function () {
  $("#vlength-slider").slider({
    range: "min",
    value: 4,
    min: -200,
    max: 200,
    step: 1,
    slide: function (event, ui) {
      $("#vlength").val("" + ui.value);
      $("#vlength").val("" + $("#vlength-slider").slider("value"));
      let bxscolor = document.getElementById("scolor").value;
      let opacityb = document.getElementById("opacity").value;
      let getVvalue = document.getElementById("vlength").value;
      let getHvalue = document.getElementById("hlength").value;
      let blurRadius = document.getElementById("bradius").value;
      let shadowbox = document.getElementById("box-css-generator-demo");
      shadowbox.style.textShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + opacityb + ") " + getHvalue + "px " + getVvalue + "px " + blurRadius + "px ";
      let myboxshadow = shadowbox.style.textShadow;
      document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow ;
    }
  });
});

$(function () {
  $("#bradius-slider").slider({
    range: "min",
    value: 2,
    min: 1,
    max: 50,
    step: 1,
    slide: function (event, ui) {
      $("#bradius").val("" + ui.value);
      $("#bradius").val("" + $("#bradius-slider").slider("value"));
      let bxscolor = document.getElementById("scolor").value;
      let opacityb = document.getElementById("opacity").value;
      let getVvalue = document.getElementById("vlength").value;
      let getHvalue = document.getElementById("hlength").value;
      let blurRadius = document.getElementById("bradius").value;
      let shadowbox = document.getElementById("box-css-generator-demo");
      shadowbox.style.textShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + opacityb + ") " + getHvalue + "px " + getVvalue + "px " + blurRadius + "px ";
      let myboxshadow = shadowbox.style.textShadow;
      document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow ;
    }
  });
});


$(function () {
  $("#opacity-slider").slider({
    range: "min",
    value: .5,
    min: 0,
    max: 1,
    step: .01,
    slide: function (event, ui) {
      $("#opacity").val(ui.value);
      $("#opacity").val($("#opacity-slider").slider("value"));
      let bxscolor = document.getElementById("scolor").value;
      let opacityb = document.getElementById("opacity").value;
      let getVvalue = document.getElementById("vlength").value;
      let getHvalue = document.getElementById("hlength").value;
      let blurRadius = document.getElementById("bradius").value;
      let shadowbox = document.getElementById("box-css-generator-demo");
      shadowbox.style.textShadow = "rgba(" + hexToRgb(bxscolor).r + ", " + hexToRgb(bxscolor).g + ", " + hexToRgb(bxscolor).b + ", " + opacityb + ") " + getHvalue + "px " + getVvalue + "px " + blurRadius + "px ";
      let myboxshadow = shadowbox.style.textShadow;
      document.getElementById("boxs_code").innerText = " box-shadow: " + myboxshadow ;
      let resultx = document.getElementById("myInput");
    }
  });
});

function copyStyle() {
  var copyText = document.getElementById("boxs_code");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  msg = "code copied";
  document.getElementById("code_copied").innerHTML = msg;
  setTimeout(function () {
    document.getElementById("code_copied").innerHTML = '';
  }, 1000).fadeOut();
}