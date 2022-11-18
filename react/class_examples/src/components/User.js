import PropTypes from 'prop-types'
function User({ name, lastname, isLoggedIn, age, friends, address }) { //(props) yazıp  ${props.name} yazmak yerine (name)yazıp ${name} yazdım.
    //böylece app.js e yazdığım name="senay" verilerini alabiliyorum.componentimde ekranda görüyorum.
    if (!isLoggedIn)
        return <div>Giriş yapmadınız</div>
    return (
        <>
            <h1>

                {
                    isLoggedIn ? `${name} ${lastname} ${age} ${address.title} ${address.zip}` : "Giriş yapmadınız"
                }

            </h1>
            {
                friends.map((friend) => (<div key={friend.id}>{friend.name}</div>))

            }
           
        </>

    )
};
User.propTypes = {
    name: PropTypes.string.isRequired,//user komponentine yazılacak name alanı string olmalı
    lastname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,//oneOfTypes: türü yazdıklarımdan birisi olabilir demek
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
};
User.defaultProps = {
    name: "isimsiz",
    isLoggedIn: false,
};
export default User;