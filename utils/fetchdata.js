export const Exerciseoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'baa4902a99mshef8961ac37b001ep173180jsn88f1733c223a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'baa4902a99mshef8961ac37b001ep173180jsn88f1733c223a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchdata = async (url,options) => {
    const response = await fetch (url,options);
    const data = await response.json();
    return data;
}