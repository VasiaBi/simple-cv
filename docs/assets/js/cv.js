// If the navbar is fixed-top, we need to push the container down, etc.
if($(".fixed-top").length){
  $("#cvBody").css("margin-top",  $("#navbar").height() + $(".fixed-top").data("margin") + "px");
}
if($(".fixed-bottom").length){
  $("#cvBody").css("margin-bottom",  $("#navbar").height() + $(".fixed-bottom").data("margin") + "px");
}

// Build the dropdown.
$("#navList").html(() => {
  let list = "";
  $("h2").each(function(){ // can't use => because of setting this.
    list = list + "<li class='nav-item'>\n";
    list = list + "<a class='nav-link' href='#" + $( this ).attr("id") + "'>";
    list = list + $( this ).html() + "</a>\n</li>\n";
  });
  return list;
});

// always close responsive nav after click
$(".navbar-collapse ul li a").click(function() {
  $(".navbar-toggler:visible").click();
});

function fetchHeader(url, wch) {
  try {
    var req=new XMLHttpRequest();
    req.open("HEAD", url, false);
    req.send(null);
    if(req.status === 200){
      return req.getResponseHeader(wch);
    }
    else { return false; }
  } catch(er) {
    return er.message;
  }
}

let lastMod = fetchHeader(location.href, "Last-Modified");
$("#last-modified").html("Last Modified: " + lastMod.replace(/ \S+ \S+$/, ""));

