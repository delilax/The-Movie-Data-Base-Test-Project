//function for extract data from API response
const getDataMoviesShows = (response, type) => {
  // extract results from object - get list of shows
  let getResultData = [];
  let res = response.data.results;

  for (let key in res) {
    getResultData.push({
      ...res[key],
      id: key
    });
  }

  //defining empty array to push data from response object
  //mappig array of data
  // using switch with type because response from API doeas not contain same data structure

  let getEndData = [];
  getResultData.map(res => {
    switch (type) {
      case "type1":
        getEndData.push({
          id: res.id,
          path: res.poster_path,
          title: res.title,
          description: res.overview,
          original_title: res.original_title,
          genre_ids: res.genre_ids,
          release_date: res.release_date,
          original_language: res.original_language,
          popularity: res.popularity,
          vote_average: res.vote_average,
          vote_count: res.vote_count
        });
        break;

      case "type2":
        getEndData.push({
          id: res.id,
          path: res.poster_path,
          title: res.name,
          description: res.overview,
          original_title: res.original_name,
          genre_ids: res.genre_ids,
          release_date: res.first_air_date,
          original_language: res.original_language,
          popularity: res.popularity,
          vote_average: res.vote_average,
          vote_count: res.vote_count
        });
        break;

      default:
        return null;
    }
    return null;
  });

  return getEndData;
};

export default getDataMoviesShows;
