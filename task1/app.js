const app = () => {
	const blockNum = document.querySelector(".currentNumber");
	const btn = document.querySelector(".btn");
	const usedNum = document.querySelector(".usedNumbers");
	const maxNumberInput = document.getElementById("maxNumber");

	let maxNum = 0;
	let generator = randomNumberGenerator();

	const usedNumbers = [];
	let content = {
		message: "",
		buttonDisplay: "none",
	};

	const reducer = (action, text) => {
		switch (action) {
			case "startMessage":
				return {
					...content,
					buttonDisplay: "none",
					message: "Write max number please",
				};
			case "gotNumber":
				return {
					...content,
					buttonDisplay: "inline-block",
					message: 0,
				};
			case "setMessage":
				return {
					...content,
					message: text,
				};
			case "noMoreNumber":
				return {
					buttonDisplay: "none",
					message: "There aren't any random numbers anymore",
				};
		}
	};
	const setContent = (data) => {
		content = { ...data };
		console.log(content);
		displayContent();
	};

	const getMaxNumber = (event) => {
		maxNum = +event.target.value;

		generator = randomNumberGenerator(maxNum);
		setContent(reducer("gotNumber"));
		if (event.target.value === "") {
			setContent("startMessage");
		}
	};

	const displayContent = () => {
		blockNum.textContent = content.message;
		btn.style.display = content.buttonDisplay;
	};

	const displayRandomNumAndArrayOfUsedNumbers = () => {
		const randomNum = generator();

		if (randomNum === undefined) {
			setContent(reducer("noMoreNumber"));
			return;
		}
		setContent(reducer("setMessage", randomNum));
		usedNumbers.push(randomNum);
		usedNum.textContent = usedNumbers.join(", ");
	};

	const init = () => {
		setContent(reducer("startMessage"));
		maxNumberInput.addEventListener("change", getMaxNumber);
		btn.addEventListener("click", displayRandomNumAndArrayOfUsedNumbers);
	};
	return {
		init: init,
		destroy: () => {
			btn.removeEventListener(
				"click",
				displayRandomNumAndArrayOfUsedNumbers
			);
		},
	};
};
app().init();
