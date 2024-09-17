document.addEventListener("DOMContentLoaded", function () {
    const visionSection = document.querySelector('.vision-section');
    const businessSection = document.querySelector('.business-section');

    function onScroll() {
        const sectionTopVision = visionSection.getBoundingClientRect().top;
        const sectionTopBusiness = businessSection.getBoundingClientRect().top;
        const sectionHeight = window.innerHeight;

        // VISIONセクションのアニメーション
        if (sectionTopVision < sectionHeight - 100) {
            visionSection.classList.add('visible');
        }

        // BUSINESSセクションのアニメーション
        if (sectionTopBusiness < sectionHeight - 100) {
            businessSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // ページロード時にもチェック
});
