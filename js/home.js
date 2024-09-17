document.addEventListener("DOMContentLoaded", function () {
    const visionSection = document.querySelector('.vision-section');

    function onScroll() {
        const sectionTopVision = visionSection.getBoundingClientRect().top;
        const sectionHeight = window.innerHeight;

        // VISIONセクションのアニメーション
        if (sectionTopVision < sectionHeight - 100) {
            visionSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // ページロード時にもチェック
});
