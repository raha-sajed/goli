import About from "./modules/About.js";
import Footer from "./modules/Footer.js";
import Logo from "./modules/Logo.js";
import Logos from "./modules/Logos.js";
import Menu from "./modules/Menu.js";
import Pastel from "./modules/Pastel.js";
import Recipe1 from "./modules/Recipe1.js";
import Recipe2 from "./modules/Recipe2.js";
import Respons from "./modules/Respons.js";
import Rice from "./modules/Rice.js";
import Side from "./modules/Side.js";
import Swiper from "./modules/Swiper.js";
Menu()
Logo()
Side()
About()
Pastel()
Swiper()
Rice()
Recipe1()
Recipe2()
Respons()
Logos()
Footer()
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
  const [swiper, time, progress] = e.detail;
  progressCircle.style.setProperty("--progress", 1 - progress);
  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});
