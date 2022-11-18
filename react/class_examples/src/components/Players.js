import PropTypes from "prop-types";

function Players({ name, id, game, coins,isLoggeddIn }) {
    if(!isLoggeddIn)
        return <div>Giriş yapmadınız</div>
    return (
        <>
        <h1>
            {
             isLoggeddIn ? `${name} adlı ${id} numaralı ${game} kullanıcının puanı ${coins} dır. `:"giriş yapmadınız"
            }
        </h1>
            
        </>
    )
}
Players.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    game: PropTypes.string.isRequired,
    coins: PropTypes.number.isRequired,
}
export default Players;