export async function getTopAnime(){
    try{
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        if(!response.ok){
            throw new Error("Error receiving animes");
        }
        const json= await response.json();

        return json.data;
        
    } catch(error){
        console.error(error);
    }
}

export async function searchAnime(query){
    const url= "https://api.jikan.moe/v4/anime?q=" + query;
    const response= await fetch(url);
    if(!response.ok){
        throw new Error("Error searching");
    }
    const json= await response.json();
    console.log(json);
    console.log(url);

    return json.data;
}

export async function getAnimeByID(id){
    try{
        const response= await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        if(!response.ok){
            throw new Error(`Error receiving anime ${id}`);
        }
        const json= await response.json();
        console.log(json.data)
        return json.data;

    } catch(error){
        console.error(error);
    }
}

export async function getTop100Anime(){
    try{
        let animes=[];
        for(let page=1; page<=4; page++){
            const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
            if (!response.ok){
                throw new Error('Error receiving top 100 animes')
            }
            const data = await response.json();
            animes.push(...data.data);
            await new Promise(
                resolve => setTimeout(resolve,1000)
            );
        }
        return animes;
    } catch(error){
        console.error(error);
    }
}