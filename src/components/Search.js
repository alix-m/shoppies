export const submit = async query => {
    console.log('query ok: ', query)

    let search = '?t=Signs'
    let url = `http://www.omdbapi.com/?t=${ query }&apikey=c194e47e`
    let movies = {}

    try {
        const res = await fetch(url)
        movies = await res.json()
        return movies
    } catch (err) {
        console.log('error!\n', err)
    }
}

export default submit