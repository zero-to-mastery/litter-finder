let submissions = {count : 0};

window.onload = function() {
	anime({
		targets: submissions,
		count: 18493,
		round: 1,
		update: function() {
			const submissionsCount = document.querySelector('#submissions-counter');
			submissionsCount.innerHTML = submissions.count;
		}
	});
}