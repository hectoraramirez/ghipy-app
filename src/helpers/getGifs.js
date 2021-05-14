export const getGrifs = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=DVBiQhzdj5p8GHLd31BTwo61gWHT4Toj`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
       return {
           id: img.id,
           title: img.title,
           img: img.images?.downsized.url,
       } 
    });
    
    return gifs;
};