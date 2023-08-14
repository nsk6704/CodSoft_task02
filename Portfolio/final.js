window.onscroll = function() {
    const scrollValue = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    document.getElementById("navlist").style.padding = scrollValue > 90 ? "10px 10px" : "50px 10px";
    document.getElementById("navlist").style.height = scrollValue > 90 ? "100px" : "290px";
    document.getElementById("logo").style.fontSize = scrollValue > 90 ? "25px" : "3px";
    document.getElementById("foot").style.padding = scrollValue > 90 ? "15px 10px" : "10px";
    document.getElementById("pic").style.height = scrollValue > 90 ? "50px": "150px";
    document.getElementById("name").style.fontSize = scrollValue > 90 ? "10px": "18px";
    document.getElementById("name").style.marginTop = scrollValue > 90 ? "19px": "50px";
    document.getElementById("name").style.paddingLeft = scrollValue > 90 ? "10px": "300px";
    document.getElementById("des").style.marginTop = scrollValue > 90 ? "-10px": "50px";
};

