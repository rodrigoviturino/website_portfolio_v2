/* Section - Tab List */
function workTabList() {

    let tabList = document.querySelectorAll('.main__worked ul li');
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

export default workTabList;

/*** end Section - Tab List */