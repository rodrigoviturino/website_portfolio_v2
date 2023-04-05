/* Section - Tab List */
export default function sectionWorks() {

    let tabList = document.querySelectorAll('.main__worked .company li');
    let tabContent = document.querySelectorAll('.tabContent .mute');

    if (tabContent.length && tabList.length) {

        tabContent[0].classList.add('ativar');

        function ativaTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove('ativar');
            })
            tabContent[index].classList.add('ativar');
        }
    }

    tabList.forEach((tabItem, tabIndex) => {
        tabItem.addEventListener("click", () =>{
            ativaTab(tabIndex);
        });
    });
}

/*** end Section - Tab List */