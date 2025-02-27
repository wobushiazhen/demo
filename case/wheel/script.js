$(document).ready(function() {
    let spinCount = 0;
    const maxSpins = 3;
    const prizes = ["奖品1", "奖品2", "奖品3", "奖品4", "奖品5", "奖品6"];
    const prizeProbabilities = [0.1, 0.2, 0.3, 0.1, 0.2, 0.1]; // 自定义中奖率

    function getRandomPrize() {
        const random = Math.random();
        let cumulativeProbability = 0;
        for (let i = 0; i < prizes.length; i++) {
            cumulativeProbability += prizeProbabilities[i];
            if (random < cumulativeProbability) {
                return i;
            }
        }
        return prizes.length - 1;
    }

    function spinWheel() {
        if (spinCount >= maxSpins) {
            alert("你已经没有抽奖机会了！");
            return;
        }

        spinCount++;
        const prizeIndex = getRandomPrize();
        const angle = 360 / prizes.length * prizeIndex + 360 * 5; // 转5圈后停在奖品位置

        $(".wheel").css({
            "transition": "transform 2s ease-out",
            "transform": `rotate(${angle}deg)`
        });

        setTimeout(() => {
            alert(`恭喜你，抽中了${prizes[prizeIndex]}！`);
        }, 2000);
    }

    $(".spin-button").click(spinWheel);
});
