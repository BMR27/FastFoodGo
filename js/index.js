function scroll(clase, config = {}) {
  const _clase = "." + clase;
  ScrollReveal().reveal(_clase, config);
}
function getClas(clase) {
  return document.querySelectorAll("." + clase);
}
window.addEventListener("load", () => {
  const objt = ["n500", "n600", "n700"];
  const config = {
    delay: 500,
    distance: "50px",
    origin: "bottom",
  };
  async function border(obj){
      await setTimeout(()=>{
          obj.style.border = "none"
        }, 1000)
        obj.style.border = "3px solid #e2525c"
  }
  const input = document.querySelector(".envio")
  const formButton = document.querySelector(".submitBtn")
  const cont = document.querySelector(".container__input")
  formButton.addEventListener("click" , function(){
      const v = input.value
      console.log(v)
      if(v.length === 0){
         border(cont)
      }
  })

  let time = config.delay;
  objt.forEach((element) => {
    let ob = {
      ...config,
      delay: time,
    };
    scroll(element, ob);
    time += 100;
    window.scrollTop = 0;
  });
  const call = (title = "", url = "") => {
    const uri = "/img/food/";
    const webp = ".webp";
    const urlF = uri + url + webp;
    console.log(urlF);
    $(".imgModalFood").attr("src", urlF);
    $(".nameModalFood").html(title);
    $(".modal-food").css("visibility", "visible");
    $(".modal-food").css("opacity", "1");
    $(".food-inner").css("bottom", "0");
    $(".food-inner").css("right", "0");
    $(".food-inner").css("transform", "rotate(0)");
    $("html").css("overflow-y", "hidden");
  };
  $(".popup__close").on("click" , function(){
      $("html").css("overflow-y", "scroll");
      $(".food-inner").css("transform","rotate(32deg)")
      $(".food-inner").css("bottom","-100vw")
      $(".food-inner").css("right","-100vh")
      $(".modal-food").css("visibility", "hidden");
      $(".modal-food").css("opacity", "0");
  })
  const foodButtons = document.querySelectorAll(".btnFood");
  foodButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      switch (this) {
        case foodButtons[0]:
          call("Cangre Hamburgesa", "hamburger");
          break;
        case foodButtons[1]:
          call("Jocho Perro", "hotdog");
          break;
        case foodButtons[2]:
          call("Pizza Peperonni", "pizza");
          break;
      }
    });
  });
});
