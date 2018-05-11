const Lyricist = require('lyricist/node6');
const lyricist = new Lyricist('wj4t6ZnMsotFYe9tCuXQT2JIhAi9QeNmkKDFUplMNoZBJRyZfRAWAYer9TBP3XPR');
const fs = require('fs');


// search song
// check guy who made song ( artist ID)
// see if artistID matches the artist that you search
// (else check next)
// if the artists match (song is same) : return the lyrics 
// send the lyrics to app

//note: make this into 3 parts. 1 finds artist ID. 2 finds the artist ID on the song. 3 selects the lyric from the info
var selectLyric = (enterSong, tagArtist) => {
	lyricist.search(enterSong).then((song) => {

		var numVal = 0;
		var artboy = lyricist.artist(song[numVal].id);

		while (tagArtist != artboy.name){
			numVal += 1; 		
		}; 
		return song[numVal].id;

	}).then((songId) => {
  		lyricist.song(songId, {fetchLyrics: true}).then((song) => {
    		//fs.writeFileSync('lyric.json', JSON.stringify(song.lyrics));
  		});
	});
};

selectLyric('lift yourself', 'kanye west');


// this is app command 
// idea is that the webpage pulls this info from text on the page
// runs this command to check if the song/artist are matching
// then shoots the lyrics over to hbs file

/**

app.get('/', (request, response) => {
	todo.selectLyric(song, artist);
	response.render('lyric.hbs',{
		title:'Song Lyrics',
		lyrics: song.lyrics
	})
});

*/