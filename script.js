const selectElement = (s) => document.querySelector(s);
//menu open
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});

//menu close
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});
