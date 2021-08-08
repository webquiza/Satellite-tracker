export class Satellite {
  static getSatellite() {
    return fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
      .then(function(response) {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}