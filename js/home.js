document.addEventListener("DOMContentLoaded", function () {
    const visionSection = document.querySelector('.vision-section');
    const missionSection = document.querySelector('.mission-section');
    const valueSection = document.querySelector('.value-section'); // VALUEセクションを追加

    function onScroll() {
        const sectionTopVision = visionSection.getBoundingClientRect().top;
        const sectionTopMission = missionSection.getBoundingClientRect().top;
        const sectionTopValue = valueSection.getBoundingClientRect().top; // VALUEセクションの位置を取得
        const sectionHeight = window.innerHeight;

        // VISIONセクションのアニメーション
        if (sectionTopVision < sectionHeight - 100) {
            visionSection.classList.add('visible');
        }

        // MISSIONセクションのアニメーション
        if (sectionTopMission < sectionHeight - 100) {
            missionSection.classList.add('visible');
        }

        // VALUEセクションのアニメーション
        if (sectionTopValue < sectionHeight - 100) {
            valueSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // ページロード時にもチェック
});
