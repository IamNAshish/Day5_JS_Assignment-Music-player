let musics = [

	{
		id: 1,
		name: "Aarti_Ki_Jai_Hanuman",
		artist: "from vedas",
		audioSrc: "audios/Aarti_Ki_Jai_Hanuman.mp3",
		imageSrc: "images/Hanumanji.jpg"
	},
	{
		id: 2,
		name: "Badri",
		artist: "pawan kalyan",
		audioSrc: "audios/Badri.mp3",
		imageSrc: "images/badhri.jpg"
	},
	
	{
		id: 3,
		name: "Deva Devam",
		artist: "MS subhalakshmi",
		audioSrc: "audios/Deva Devam.mp3",
		imageSrc: "images/add.jpg"
	},
	{
		id: 4,
		name: "Ela Ela",
		artist: "KK",
		audioSrc: "audios/Ela Ela.mp3",
		imageSrc: "images/panja.jpg"
	},
	{
		id: 5,
		name: "Kiraaku",
		artist: "DSP",
		audioSrc: "audios/Kiraaku.mp3",
		imageSrc: "images/add.jpg"
	},
	


]


for (let i = 0; i < musics.length; i++) {

	let tile = document.createElement("div");
	tile.classList.add("tile");

	let thumbnail = document.createElement("div");
	thumbnail.classList.add("thumbnail");

	let img = document.createElement("img");
	img.src = musics[i].imageSrc;

	thumbnail.append(img);
	tile.append(thumbnail);

	let description = document.createElement("div");
	description.classList.add("description");


	let h2 = document.createElement("h2");
	h2.append(musics[i].name);
	description.append(h2);

	let h3 = document.createElement("h3");
	h3.append(musics[i].artist);
	description.append(h3);

	tile.append(description);

	tile.addEventListener("click", function() {
		playMusic(musics[i]);
	});

	document.querySelector(".music-list").append(tile);

}




function playMusic(music) {

	document.querySelector(".player").style.marginLeft = "0";
	document.querySelector(".main-thumbnail-img").src = music.imageSrc;
	document.querySelector(".song-name").innerText = music.name;
	document.querySelector(".song-artist").innerText = music.artist;
	document.querySelector(".audio").src = music.audioSrc;
	document.querySelector(".audio").play();

}

function closePlayer() {
	document.querySelector(".player").style.marginLeft = "100%";
	// document.querySelector(".audio").pause();
}