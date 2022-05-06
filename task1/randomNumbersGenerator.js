const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
};

const randomNumberGenerator = (num) => {
	const arrayOfShuffledNumbers = shuffleArray([...Array(num).keys()]);

	const getRandomNum = () => {
		if (arrayOfShuffledNumbers) {
			return arrayOfShuffledNumbers.pop();
		}
	};
	return getRandomNum;
};
