import sectionWorks from "./src/js/workTabList.js";
import {initScrollSuave, headerAlterBackground} from "./src/js/header.js";
import buttonLoadMore from "./src/js/Projects.js";
import listarGithub from "./src/js/sectionGithub.js";
import {github} from "./api.js";
import menuMobile from "./src/js/module/menuMobile.js";

sectionWorks();
initScrollSuave();
menuMobile();
headerAlterBackground();
buttonLoadMore();
listarGithub();
github();