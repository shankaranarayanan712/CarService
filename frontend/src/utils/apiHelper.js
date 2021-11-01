export const postApi = (endpoint, method, bodyParam) =>{
try {
    return fetch(endpoint, {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(bodyParam)
    });
  }catch(err){
    console.log(err);
  }
}

export const getApi = (endpoint, method, options) =>{
try {
    return fetch(endpoint, {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        params: options
    });
  }catch(err){
    console.log(err);
}
}