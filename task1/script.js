const blockNum = document.querySelector(".currentNumber");
const btn = document.querySelector(".btn");
const usedNum = document.querySelector(".usedNumbers");

const maxNum = 100;

function closure() {
	const arrayOfUsedNumbers = [];

	function getRandomNum() {
		for (let i = 0; i <= maxNum; i++) {
			let randomNum = Math.floor(Math.random() * maxNum) + 0;
			if (arrayOfUsedNumbers.length === maxNum) {
				return "There aren't any random numbers anymore";
			}
			if (arrayOfUsedNumbers.includes(randomNum)) {
				i--;
			} else {
				arrayOfUsedNumbers.push(randomNum);
				return randomNum;
			}
		}
	}
	return {
		getRandomNum,
		arrayOfUsedNumbers,
	};
}
const randomNum = closure();

btn.addEventListener("click", () => {
	if (randomNum.arrayOfUsedNumbers.length === maxNum) {
		btn.style.display = "none";
	}
	blockNum.innerHTML = randomNum.getRandomNum();
	usedNum.textContent = randomNum.arrayOfUsedNumbers.join(", ");
});
