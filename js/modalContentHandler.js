
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

var projectName = document.getElementById("project-name");
var projectGenre = document.getElementById("project-genre");
var projectDescr = document.getElementById("project-descr");
var projCopy = document.getElementById("proj-copyright");

document.getElementById("barus").onclick = function(){
	modalImg.src = this.src;
	projCopy.innerHTML = "&copy;photo: Yog-Sothoth Photography";


	projectName.textContent = "Barús";
	projectGenre.textContent = "Death Metal";

	projectDescr.innerHTML = 
"The term βαρύς evokes a weight, an overbearing burden. <br/> \
This takes musical form through a complex and utterly atmospherical, yet visceral, approach to Death Metal. A monolithic, churning sound merged with progressive structures, frequently delving into Black or Doom territories, drawing on the crystalline coldness of ambient and electroacoustic soundscapes. <br/> \
The band, described by reviewers as <i>\"Autopsy reinterpreted by Meshuggah\"</i> or <i>\"Gojira and Gorguts jamming out to an old Demilich tune with Ulcerate's instruments\"</i> released a first EP through Emanations (a division of Les Acteurs de l’Ombre Productions) in 2015, following in 2018 with their first album, Drowned (through Memento Mori Productions). "

	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com/barusband/";
	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "https://barus.bandcamp.com/";
	document.getElementById("mod-sp-li").style.display = "inline";
	document.getElementById("mod-sp-link").href = "https://open.spotify.com/artist/6xwSb06WvA9gQxVUarw3wR";
	document.getElementById("mod-yt-li").style.display = "inline";
	document.getElementById("mod-yt-link").href = "https://www.youtube.com/channel/UCMM_1N812Kf92cyP2exQCGQ";
	

}

document.getElementById("maieutiste").onclick = function(){
	modalImg.src = this.src;

	projectName.textContent = "Maïeutiste";
	projectGenre.textContent = "Progressive Black Metal";
	projectDescr.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit at libero ultrices tempus. Nam sit amet malesuada augue, vel interdum risus. Fusce volutpat ex diam, vitae bibendum ante placerat eu. Aenean tempor, turpis a sodales tristique, urna orci tincidunt velit, vel porttitor purus ipsum faucibus dolor. Vestibulum sollicitudin ultrices laoreet. Praesent quis viverra mauris. Curabitur nisi est, posuere vel tristique id, scelerisque sit amet elit.";

	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com";

	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "rerere";

	document.getElementById("mod-sc-li").style.display = "inline";
	document.getElementById("mod-sc-link").href = "https://www.facebook.com";

	document.getElementById("mod-yt-li").style.display = "inline";
	document.getElementById("mod-yt-link").href = "rerere";

	document.getElementById("mod-ins-li").style.display = "none";
	document.getElementById("mod-ins-link").href = "https://www.facebook.com";

	document.getElementById("mod-web-li").style.display = "none";
	document.getElementById("mod-web-link").href = "rerere";
}

document.getElementById("orcae").onclick = function(){
	modalImg.src = this.src;
	projCopy.innerHTML = "&copy;photo: Niflheim";


	projectName.textContent = "Orcæ";
	projectGenre.textContent = "Experimental Electroacoustic";
	projectDescr.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id elit at libero ultrices tempus. Nam sit amet malesuada augue, vel interdum risus. Fusce volutpat ex diam, vitae bibendum ante placerat eu. Aenean tempor, turpis a sodales tristique, urna orci tincidunt velit, vel porttitor purus ipsum faucibus dolor. Vestibulum sollicitudin ultrices laoreet. Praesent quis viverra mauris. Curabitur nisi est, posuere vel tristique id, scelerisque sit amet elit.";

	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com";

	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "rerere";

	document.getElementById("mod-sc-li").style.display = "inline";
	document.getElementById("mod-sc-link").href = "https://www.facebook.com";

	document.getElementById("mod-yt-li").style.display = "inline";
	document.getElementById("mod-yt-link").href = "rerere";

	document.getElementById("mod-ins-li").style.display = "none";
	document.getElementById("mod-ins-link").href = "https://www.facebook.com";

	document.getElementById("mod-web-li").style.display = "none";
	document.getElementById("mod-web-link").href = "rerere";
}

document.getElementById("epitaphe").onclick = function(){
	modalImg.src = this.src;
	projCopy.innerHTML = "&copy;artwork: Petri Ala-Maunus";


	projectName.textContent = "Epitaphe";
	projectGenre.textContent = "Death / Doom Metal";
	projectDescr.innerHTML = "<b>Epitaphe</b> is a cavernous and psychedelic death metal band from the French Alps. <br/> \
Influenced by bands such as Dead Congregation, Portal and Esoteric, Epitaphe create music that engulfs, with a powerful focus on overwhelming and opaque atmospheres. <br/> \
Following the first demo, which received wide acclaim and was subsequently released on cd via Chaos Records), Epitaphe made a deal with Aesthetic Death to release their debut album - <b>I</b>. <br/> \
I, in its doomed torment, is a distraught journey through blackness, fury and melancholia - using illustrations by the Finnish painter Petri Ala-Maunus. It was mixed, recorded and mastered by James Leonard of Plastic Lobster Studios, and released at the end of summer 2019. ";

	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com/epitaphemetal/";
	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "https://epitaphe.bandcamp.com/";
	document.getElementById("mod-sp-li").style.display = "inline";
	document.getElementById("mod-sp-link").href = "https://open.spotify.com/artist/7Gy7eYT4baOOw66qWC7bc7";
	document.getElementById("mod-tw-li").style.display = "inline";
	document.getElementById("mod-tw-link").href = "https://twitter.com/EpitapheBand";

}

document.getElementById("gaillardon").onclick = function(){
	modalImg.src = this.src;
	projCopy.innerHTML = "&copy;photo: Jules Bocquet";


	projectName.textContent = "Nico Gaillardon";
	projectGenre.textContent = "Multimedia & Noise Artist";

	projectDescr.innerHTML = 
"Nico Gaillardon is a pluridisciplinary artist at the head of several musical projects (Paranoid Summer, Low Reality, Noise for Souls). Also expressing his work  through drawings, installations and animation films, he creates a world of melancholic and sometimes violent poetry, creating atmospheres reminescent of an elusive road movie.<br/>\
With <b>Paranoid Summer</b>, he invites the listener into a universe of noise energy, inside which words and chants emerge from dense layers of sound and chaotic melodies, accompanied by roughly edited video footage.<br/>\
With <b>Low Reality</b>,  he creates a visual and sonic universe with drummer Morgan Cornebert, in which sheets of noise slide progressively towards hypnotising rythms, samples, and glitches to yield a state of electric transe.<br/>\
The <b>Noise for Souls</b> project, with Jules Bocquet and Pauline Auby, offers intimate live musical and audio-visual performances: a space where ephemeral collaborations may take place between musicians and videographers, during the time of a session."


	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com/LowReality/";

	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "https://paranoidsummer.bandcamp.com/album/paranoid-summer";

	document.getElementById("mod-yt-li").style.display = "inline";
	document.getElementById("mod-yt-link").href = "https://www.youtube.com/channel/UCOrWsTf0Sk-Q4tKMggs86tA";

	document.getElementById("mod-ins-li").style.display = "inline";
	document.getElementById("mod-ins-link").href = "https://www.instagram.com/lowrealityexperience/";

	document.getElementById("mod-web-li").style.display = "inline";
	document.getElementById("mod-web-link").href = "http://www.nicolasgaillardon.com/";
}


document.getElementById("iranon").onclick = function(){
	modalImg.src = this.src;

	projectName.textContent = "Iranon";
	projectGenre.textContent = "Progressive Electro";
	projectDescr.innerHTML = 
"<b>Iranon</b> is the musical solo project of Luc Messina, guitar player and composer of the bands Demenseed and Liquid Flesh.<br/>\
The music of Iranon is mainly electronic but embraces a wide range of influences, whether it be ambient, IDM, classical music, progressive rock or nu jazz.<br/>\
His debut album “Painting the Sound” was released in 2011. This ambient record was composed and produced in three weeks for the netlabel Sirona Records. Since then, the artist produced and released a few songs for compilations or short film soundtracks, including the Sirona Records compilation “Sincerity is the Key” and the Eptagon 2019 Sampler."

	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com/Iranonsound";
	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "https://iranon.bandcamp.com/";
	document.getElementById("mod-sc-li").style.display = "inline";
	document.getElementById("mod-sc-link").href = "https://soundcloud.com/iranon";

}


document.getElementById("liquidflesh").onclick = function(){
	modalImg.src = this.src;

	projectName.textContent = "Liquid Flesh";
	projectGenre.textContent = "Purulent Death Metal";
	projectDescr.innerHTML = 
"<b>Liquid Flesh</b> is an old school death metal trio from the french Alps.<br/>\
Influenced by bands like Entombed, Celtic Frost, Undergang or Autopsy, the band plays catchy songs with purulent atmospheres, drawing inspiration from sci-fi and horror movies.<br/>\
The band was founded in 2014 by active members of the Grenoble metal scene, Gastric Luke on guitar and Glaviar on drums (both from the band Demenseed), Gerbator on vocals (from Nocturnal Depression) and David Ordure on bass, quickly recording its debut album Spontaneous Liquefaction, with Gastric Luke in charge of production, mastering and artwork.<br/>\
In 2018, Putrid Bruce, also vocalist of Epitaphe and Influence Néfaste, joins the band as vocalist and bass player: the band then becomes a power trio. The music of Liquid Flesh is now more sophisticated but more radical, characterized by a relentless punk energy but still driven by an old school horror/sci-fi vibe.<br/>\
The trio joins the artist collective Eptagon in 2019, and starts recording a second album in summer 2019, named <b>Chair Liquide</b>. The album will be released in Autumn 2020 via Metal Is The Law Records."


	projCopy.innerHTML = "&copy;photo: Oofzos.fr";

	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com";

	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "rerere";

	document.getElementById("mod-sc-li").style.display = "inline";
	document.getElementById("mod-sc-link").href = "https://www.facebook.com";

	document.getElementById("mod-yt-li").style.display = "inline";
	document.getElementById("mod-yt-link").href = "rerere";

	document.getElementById("mod-ins-li").style.display = "none";
	document.getElementById("mod-ins-link").href = "https://www.facebook.com";

	document.getElementById("mod-web-li").style.display = "none";
	document.getElementById("mod-web-link").href = "rerere";
}

document.getElementById("james").onclick = function(){
	modalImg.src = this.src;

	projectName.textContent = "Plastic Lobster";
	projectGenre.textContent = "Sound Engineer, Digital Artist";

	projectDescr.innerHTML = 
	"Plastic Lobster is one of the many aliases for James Leonard, a musician, sound artist and producer.<br/>\
His musical drive ranges from dense and unrelenting forms of extreme metal as developed in <b>Barús</b>, to experimental avant-garde noise with the improvisation collective <b>Orcæ</b>, making frequent stops somewhere between post-rock, electronica.<br/>\
Other current and past musical projects include Azimut, Maïeutiste, Jambalaya Window, Altered Beats, Wolflust and Foutrang.<br/>\
With <b>Plastic Lobster Studios</b>, he has recorded, mixed and/or mastered over twenty records, several of which have been released by renowned labels (Les Acteurs de l’Ombre, Memento Mori, Aesthetic Death, Metal On Metal…).<br/>\
He strives to capture the raw power and dynamics of each band and the singularities of each musician within them, firmly believing that an organic and personal sound are what bring out a band’s identity."


	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com/plasticlobsterstudios/";
	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "rerehttps://jambalayawindow.bandcamp.com/album/the-sounding-leadre";
	document.getElementById("mod-yt-li").style.display = "inline";
	document.getElementById("mod-yt-link").href = "https://www.youtube.com/channel/UCAoMCrpTKqETGjlum1RxC3g";
	document.getElementById("mod-web-li").style.display = "inline";
	document.getElementById("mod-web-link").href = "https://plasticlobsterstudios.com/";
}

document.getElementById("demenseed").onclick = function(){
	modalImg.src = this.src;

	projectName.textContent = "Demenseed";
	projectGenre.textContent = "Progressive Death Metal";
	projectDescr.innerHTML = 
"Founded in 2010, <b>Demenseed</b> is a death metal band from the french Alps, drawing on a wide range of influences, from extreme metal to progressive rock, jazz and classical music. <br/>\
In 2010, the band records a first demo entitled “Light Window” and performs many local shows in the following years. \
In 2015, the band records a second opus, much more accomplished: the EP “Granite Forest”.\
The album lasts about 48 minutes and the music is now clearly death metal oriented, including some progressive rock elements, especially on the last 17-minutes track. <br/>\
In 2018, after some member replacements, the band releases 3 different EPs: “Blood Stained Lamb”, a new version of “Granite Forest” with new drum tracks and artwork, and finally the 3-tracks EP “Growing Darkness”, performed by the current line-up.";

	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com/Demenseed";
	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "https://demenseed.bandcamp.com/";
	document.getElementById("mod-sc-li").style.display = "inline";
	document.getElementById("mod-sc-link").href = "https://soundcloud.com/demenseed";
	document.getElementById("mod-yt-li").style.display = "inline";
	document.getElementById("mod-yt-link").href = "https://www.youtube.com/channel/UCsJ2ISw4NpFe43GMQZZFaHg";
	document.getElementById("mod-tw-li").style.display = "inline";
	document.getElementById("mod-tw-link").href = "https://twitter.com/Demenseed_DM";
	document.getElementById("mod-ins-li").style.display = "inline";
	document.getElementById("mod-ins-link").href = "https://www.instagram.com/demenseed_dm/";

}

document.getElementById("fia").onclick = function(){
	modalImg.src = this.src;

	projectName.textContent = "Faith In Agony";
	projectGenre.textContent = "Grunge / Alternative Metal";
	projectDescr.innerHTML = "Straight out of a 90s garage, the emerging alternative metal band <b>Faith in Agony</b> distinguishes itself through vivid melodies, efficient riffs and persistent vocal harmonies. <br/>\
	The quartet proceeds frantically while mixing heavy dynamics with deep nuances, which reflects an electric energy created on stage. Riffing from grunge to blues, the musical ensemble has positioned itself within a dynamic and accessible musical style with a strong wish for proximity with its listeners. <br/>\
	Faith in Agony released their first eponymous EP in October 2016 and are presently defending their most recent opus <b>Do Not Repeat</b>. After standing out as the opening act for Ultra Vomit and during several festivals (Rock O'marais, Festirock), the band is actively working on the release of their first album.";

	document.getElementById("mod-fb-li").style.display = "inline";
	document.getElementById("mod-fb-link").href = "https://www.facebook.com/faithinagony/";
	document.getElementById("mod-bc-li").style.display = "inline";
	document.getElementById("mod-bc-link").href = "https://faithinagony.bandcamp.com/";
	document.getElementById("mod-ins-li").style.display = "inline";
	document.getElementById("mod-ins-link").href = "https://www.instagram.com/faith_in_agony/?hl=fr";

}

modalImg.onclick = function() {
	modalfadeOut();
}
document.getElementById("project-descr").onclick = function() {
	modalfadeOut();
}

function modalfadeOut(){

	$('#myModal').animate(
		{ scrollTop: 0 }, 
		400).fadeOut(400).dequeue();
	$("#myModal").promise().done(function(){
		for (let element of document.getElementsByClassName("mod-link")){
			element.style.display="none";
		 }
		projCopy.innerHTML='';	
		var $body = $(document.body);
		$body.css("overflow", "auto");
		$body.width("auto");
	});

}

function modalfadeIn(){
	$("#myModal").fadeIn();

	var $body = $(document.body);
	var oldWidth = $body.innerWidth();
	$body.css("overflow", "hidden");
	$body.width(oldWidth);

}

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$(document).click(function(event) {
	$target = $(event.target);
	if(!hasClass($(event.target)[0], 'artist-image')){
		if(!$target.closest('#proj-info').length)
			if($("#myModal").is(":visible") === true)
				if($('#proj-content').is(":visible"))
					modalfadeOut();
	}
	else
		modalfadeIn();
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modalfadeOut();
}