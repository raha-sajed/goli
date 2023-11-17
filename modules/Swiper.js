const Swiper = async () => {
    let data = await fetch("https://raha-sajed.github.io/json-golestan/db.json");
    let res = await data.json();
    let swiper = res.swiper.map((elem) => {
        return `<swiper-slide><img src="${elem.image}" alt="${elem.name}"></swiper-slide>`;
    });
    document.querySelector(".mySwiper").innerHTML = swiper.join("");
  };
  export default Swiper;