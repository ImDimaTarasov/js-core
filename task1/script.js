const blockNum = document.querySelector(".currentNumber");
const btn = document.querySelector(".btn");
const usedNum = document.querySelector(".usedNumbers");

const arrayOfUsedNumbers = [];
const maxNum = 100;

function closure() {
	const content = {
		text: getRandomNum(),
		display: "",
	};
	function getRandomNum() {
		for (let i = 0; i <= maxNum; i++) {
			let randomNum = Math.floor(Math.random() * maxNum) + 0;
			if (arrayOfUsedNumbers.includes(randomNum)) {
				i--;
			} else {
				arrayOfUsedNumbers.push(randomNum);
				return randomNum;
			}
		}
	}
	if (arrayOfUsedNumbers.length === maxNum) {
		content.text = "There aren't any random numbers anymore";
		content.display = "none";
	}
	return content;
}

btn.addEventListener("click", () => {
	const { text, display } = closure();

	blockNum.innerHTML = text;
	btn.style.display = display;
	usedNum.textContent = arrayOfUsedNumbers.join(", ");
});
