document.addEventListener("DOMContentLoaded", function () {
    const businessSection = document.querySelector('.business-section');
    const newsSection = document.querySelector('.news-section');

    function onScroll() {
        const sectionTopBusiness = businessSection.getBoundingClientRect().top;
        const sectionTopNews = newsSection.getBoundingClientRect().top;
        const sectionHeight = window.innerHeight;



        // BUSINESSセクションのアニメーション
        if (sectionTopBusiness < sectionHeight - 100) {
            businessSection.classList.add('visible');
        }

        // NEWSセクションのアニメーション
        if (sectionTopNews < sectionHeight - 100) {
            newsSection.classList.add('visible');
        }

    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // ページロード時にもチェック
});
