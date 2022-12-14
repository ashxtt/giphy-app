
const Giphy = ({giphy}) =>{

    return giphy.data ? (
        <div>
            
            <p>{giphy.data.title}</p>
            <img src={giphy.data.images.downsized.url} alt="GIphy"/>
        </div>
    ) : (
        <div></div>
    )
}

export default Giphy