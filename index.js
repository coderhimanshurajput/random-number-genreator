function couponGenerator() {
  var coupon = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10; i++) {
    coupon += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return coupon;
}

function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

function getUniqueNumber() {
  function shuffle(str) {
    var a = str.split("");
    var n = a.length;
    for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  }
  var str = new Date().getTime() + (Math.random()*999 +1000).toFixed() //string
  return Number.parseInt(shuffle(str));
}
//  output (  D[nmBOF8fZdg62$yJSi|m6L.xwt"m-\0v-M9[q,&9y,Ek]TZ/. )
function randStr(len) {
  let s = '';
  while (len--) s += String.fromCodePoint(Math.floor(Math.random() * (126 - 33) + 33));
  return s;
}
// Case Insensitive Alphanumeric Chars (ajgf9qshp88cj7eauqz1e8q5456r751pj5p58f3gs0aupw33hf)
 function randStrAplha(len) {
  let s = '';
  while (s.length < len) s += Math.random().toString(36).substr(2, len - s.length);
  return s;
}

/* Random  function create*/
function randomValueHex(len) {
  return crypto
      .randomBytes(Math.ceil(len / 2))
      .toString('hex') // convert to hexadecimal format
      .slice(0, len) // return required number of characters
}
