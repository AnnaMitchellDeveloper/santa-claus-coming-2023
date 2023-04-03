function christmasCountdown() {
	const christmasDay = new Date('December 25, 2023 00:00');
	const currentDay = new Date();
	const difference = christmasDay - currentDay;

	const msInSecond = 1000;
	const msInMinute = 60 * 1000;
	const msInHour = 60 * 60 *1000;
	const msInDay = 24 * 60 * 60 * 1000;

	const displayDay = Math.floor(difference/msInDay);
	document.querySelector('.days').textContent = displayDay;
	const displayHour = Math.floor((difference%msInDay) / msInHour);
	document.querySelector('.hours').textContent = displayHour;
	const displayMinute = Math.floor((difference%msInHour) / msInMinute);
   document.querySelector('.minutes').textContent = displayMinute;
	const displaySecond = Math.floor((difference%msInMinute)/msInSecond);
	document.querySelector('.seconds').textContent = displaySecond;

	if(difference <= 0){
		document.querySelector(".days").textContent = 0;
		document.querySelector(".hours").textContent = 0;
		document.querySelector(".minutes").textContent = 0;
		document.querySelector(".seconds").textContent = 0;
		clearInterval(timerID);
		merryChristmas();
	}
}
let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
	const heading = document.querySelector('h1');
	heading.textContent = "Merry Christmas!! HO-HO-HO! 🎅";
	heading.classList.add('red');

}
let playButtonIcon = document.querySelector('#play-button');
playButtonIcon.addEventListener('click', function(){
	document.querySelector("#chrismasSong").play();
})