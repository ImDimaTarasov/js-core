const app = () => {
	const blockNum = document.querySelector(".currentNumber");
	const btn = document.querySelector(".btn");
	const usedNum = document.querySelector(".usedNumbers");
	const maxNumberInput = document.getElementById("maxNumber");

	let maxNum = 0;
    const generator = randomNumberGenerator();
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
					...content,
					buttonDisplay: "none",
					message: "There aren't any random numbers anymore",
				};
		}
	};
	const setContent = (data) => {
		content = { ...data };
		displayContent();
	};

	// const setGenerator = (num) => {
	// 	return randomNumberGenerator(num);
	// };

	const getMaxNumber = (event) => {
		maxNum = +event.target.value;

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
		const randomNum = generator(maxNum);

		if (randomNum === undefined) {
			setContent(reducer("noMoreNumber"));
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
