/* Section - Tab List */
export default function workTabList() {

    let tabList = document.querySelectorAll('.main__worked .company li');
    let tabContent = document.querySelectorAll('.tabContent div');

    if (tabContent.length && tabList.length) {

        tabContent[0].classList.add('active');

        function ativaTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove('active');
            })
            tabContent[index].classList.add('active');
        }
    }

    tabList.forEach((tabItem, tabIndex) => {
        tabItem.addEventListener("click", () => {
            ativaTab(tabIndex);
        });
    });
}

/*** end Section - Tab List */