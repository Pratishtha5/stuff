function PokemonCard({name,image,onClick}){
    return(
        <div className="pokemon-card" onClick={onClick}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}
export default PokemonCard;