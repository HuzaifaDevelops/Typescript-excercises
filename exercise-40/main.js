var make_album = function (artist_name, album_title, tracks) {
    var album = {
        artist_name: artist_name,
        album_title: album_title,
        tracks: tracks,
    };
    return album;
};
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12);
var album3 = make_album("Artist3", "Album3");
console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);
