import request from './request.js';

const ClientId = 'd69ed0a205f94854a85acf36964a2d4f';
const ClientSecret = '65efd01b4807420281d1807aa8e874ca';

  const urls = {
    token : 'https://accounts.spotify.com/api/token',
    search: (keyword) => `https://api.spotify.com/v1/search?q=${keyword}&type=album`,
    getAlbum: (id) => `https://api.spotify.com/v1/albums/${id}`,
  }

  let token =  (async () => {
    let response = await request(
      urls.token, 
      'POST',
      {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(ClientId + ':' + ClientSecret)    
      },
      'grant_type=client_credentials' 
      );

    return response.access_token;
  })();

  const headers = async () => {
      return {
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + await token
    }
  };

  export async function albumSearch(keyword) {
    let response = await request(
      urls.search(keyword),
      'GET',
     await headers()
    );

    let albums = await response.albums.items.map(album => {
      return {
        id: album.id,
        artists: album.artists.map(artist => artist.name).join(', '),
        name: album.name,
        image: album.images.filter(image => image.height == 64)[0].url
      }
    }).slice(0, 5);

    return albums;
  }

  export async function getAlbum(id) {
    let response = await request(
      urls.getAlbum(id),
      'GET',
      await headers()
    );

    let album = {
      id: response.id,
      artists: response.artists.map(artist => artist.name).join(', '),
      name: response.name,
      releaseDate: response.release_date,
      image: response.images.filter(image => image.height == 300)[0].url,
      tracks: response.tracks.items.map(track => (        
          { name: track.name, 
            id: track.id,
            duration: track.duration_ms,
            url: track.external_urls.spotify
          }
        )
      ),
    };
    
    return album;
  }

  export async function getImage(id) {
    let response = await request(
      urls.getAlbum(id),
      'GET',
      await headers()
    );

    let image = response.images.filter(image => image.height == 300)[0].url;
    
    return image;
  }

  

