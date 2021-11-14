const ClientId = 'd69ed0a205f94854a85acf36964a2d4f';
const ClientSecret = '65efd01b4807420281d1807aa8e874ca';

  const urls = {
    token : 'https://accounts.spotify.com/api/token',
    search: (keyword) => `https://api.spotify.com/v1/search?q=${keyword}&type=album`
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

    console.log(response);

    return response.access_token;
  })();

  export async function albumSearch(keyword) {
    let response = await request(
      urls.search(keyword),
      'GET',
      {
        'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + await token   
      }
    );

    // let response = await fetch(urls.search(keyword), {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type' : 'application/json',
    //         'Authorization' : 'Bearer ' + await token   
    //   }
    // });

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
    
  }

  async function request(url, method, headers, body) {
    let options = {
      method,
      headers
    };

    if (body) {
      Object.assign(options, {
          body
      });      
    }

    let response = await fetch(url, options);

    let data = await response.json();

    return data;
} 

