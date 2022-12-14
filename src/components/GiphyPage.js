
const GiphyPage = ({giphy}) =>{

    return giphy.data ? (
        <div>
            <h1>IFFY GIPHY </h1>
            <img src={giphy.data.images.downsized.url} alt={giphy.data.title}/>
        </div>
    ) : (
        <h1>SEE YA</h1>
    )
}

export default GiphyPage