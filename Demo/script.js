function login(){
    document.getElementById("loginform").style.display = "none";
    document.getElementById("tabs").style.display = "block";

}
function changePage(origin){
    let tabs = ["homeTab","rutineTab","newTab","profileTab","settingTab"];
    var navItems = document.querySelectorAll(".bottom-nav-item");
    navItems.forEach(function(e, i) {
      e.addEventListener("click", function(e) {
        navItems.forEach(function(e2, i2) {
          e2.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
    tabs.forEach(tab =>{
        document.getElementById(tab).style.display = (tab==origin)? "block":"none";
    })
}
