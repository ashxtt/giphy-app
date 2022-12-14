


const Button = ({getGiphy}) =>{
    const handleClick = () =>{
        getGiphy()
    }
    return(
    <div className="button">
        <h1>Press for a Giphy</h1>
        <button onClick={handleClick}>RANDOMIZE</button>
    </div>
    )



    
} 

export default Button