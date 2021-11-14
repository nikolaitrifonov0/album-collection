const ClientId = 'd69ed0a205f94854a85acf36964a2d4f';
const ClientSecret = '65efd01b4807420281d1807aa8e874ca';

  const urls = {
    token : 'https://accounts.spotify.com/api/token',
    search: (keyword) => `https://api.spotify.com/v1/search?q=${keyword}&type=album`
  }

  let token =  (async () => {
    let response = await fetch(urls.token, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(ClientId + ':' + ClientSecret)    
        },
        body: 'grant_type=client_credentials'
    });

    let data = await response.json();

    return data.access_token;
  })();

  export async function albumSearch(keyword) {
    let response = await fetch(urls.search(keyword), {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + await token   
      }
    });

    let data = await response.json();

    let albums = await data.albums.items.map(album => {
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
    
  }

