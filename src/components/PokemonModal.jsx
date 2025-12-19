function PokemonModal({pokemon,onClose}){
    if(!pokemon) return null;
    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e)=>e.stopPropagation()}>
                <img src={pokemon.image} alt={pokemon.name} />
                <h2>{pokemon.name}</h2>
                <p>ID: #{pokemon.id}</p>
                <button onClick={onClose}>Close</button>
                </div>
                </div>
    );
}
export default PokemonModal;