
export const submit = async query => {

    const getUrl = query => {
        return `http://www.omdbapi.com/${query}&apikey=c194e47e`
    }

    const fetchData = async query => {

        const url = getUrl(query)
        const res = await fetch(url)
    
        return await res.json()
    }

    try {
        const res = await fetchData(`?s=${ query }`)
        const data = []
    
        /** The search results returned using the s parameter only return title, IMDB id, and year.  
        To get the complete data for each movie, they must be searched for again individually. */
        for(let i = 0; i < res.Search.length; i++){
            const d = await fetchData(`?i=${ res.Search[i].imdbID }`)
            data.push(d)
        }
        return data

    } catch (err) {
        console.log('error!\n', err)
    }
}


export const validate = input => {
    return((/\S/.test(input)))
}