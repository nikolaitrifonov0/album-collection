export default async function request(url, method, headers, body) {
    let options = {
      method,
      headers
    };

    if (body) {
      Object.assign(options, {
          body: body
      });      
    }

    let response = await fetch(url, options);

    let data = await response.json();
    
    return data;
} 