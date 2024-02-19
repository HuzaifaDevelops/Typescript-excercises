interface InterfaceAlbum {
  artist_name: string;
  album_title: string;
  tracks?: number;
}

const make_album = (
  artist_name: string,
  album_title: string,
  tracks?: number
): InterfaceAlbum => {
  const album: InterfaceAlbum = {
    artist_name: artist_name,
    album_title: album_title,
    tracks: tracks,
  };
  return album;
};

const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12);
const album3 = make_album("Artist3", "Album3");

console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);
