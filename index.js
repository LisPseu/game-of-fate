const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", meeting);
buttonTwo.addEventListener("click", walking)

function meeting() {
    image.setAttribute("src", "https://geniys.ru/wp-content/uploads/2023/02/vinni-puh-krolik.png");
    text.innerHTML = "Cъест Винни Пух все припасы Кролика?";
    buttonOne.innerHTML = "Да, все съест!";
    buttonTwo.innerHTML = "Нет, не съест";
    buttonOne.addEventListener("click", accident);
    buttonTwo.addEventListener("click", exit);
}

function accident() {
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJlTrUDt245jy7b87VCCZunL1AMkyLsQFAw&s");
    text.innerHTML = "Винни Пух застрянет на выходе";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function exit() {
    image.setAttribute("src", "https://image.mel.fm/i/C/CObmzsR8cW/590.jpg");
    text.innerHTML = "Распрощается с Кроликом и пойдет гулять с Пяточком";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function walking() {
    image.setAttribute("src", "https://avatars.dzeninfra.ru/get-zen_doc/10312763/pub_64cbb14cbbaf1f0133d8655f_64cbc4bb7c8a120830f255ee/scale_1200");
    text.innerHTML = "Будет ли Винни Пух доставать мед с вершины дуба?";
    buttonOne.innerHTML = "Да, будет целая операция!";
    buttonTwo.innerHTML = "Нет, он пойдет в гости к Сове";
    buttonOne.addEventListener("click", operation);
    buttonTwo.addEventListener("click", sova)
}

function operation() {
    image.setAttribute("src", "https://cdnstatic.rg.ru/uploads/images/gallery/0e132731/5_10921859.jpg");
    text.innerHTML = "Как Винни Пух уйдет от пчел?";
    buttonOne.innerHTML = "Позовет на помощь Пяточка";
    buttonTwo.innerHTML = "Пчелы его ужалят!";
    buttonOne.addEventListener("click", final)
    buttonTwo.addEventListener("click", fail)
}

function final() {
    image.setAttribute("src", "https://tochka.by/upload/resize_cache/iblock/4a2/768_512_1/xqh55u0heiyjyxy01qx67x5gr0vge5fm.jpg");
    text.innerHTML = "Пятачок принесет ружье и спасет Винни Пуха от пчел";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function sova() {
    image.setAttribute("src", "https://cdn.7days.ru/pic/200/980758/1437515/86.jpg");
    text.innerHTML = "Винни Пух увидит странну вереочку Совы";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function fail() {
    image.setAttribute("src", "https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/75f93f266cd/1bf35d00046b26b650e92/med_1409627201_1385556513_image.jpg");
    text.innerHTML = "Винни Пух потерпит провал и останется без меда!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}