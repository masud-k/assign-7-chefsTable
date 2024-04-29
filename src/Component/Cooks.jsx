import PropTypes from 'prop-types';
import Cook from './Cook';

const Cooks = ({ carts }) => {
    return (<>
        <div className="bg-white m-2 p-2 rounded-xl">
            <div>
                <h3 className="text-2xl text-center">Want to cook: {carts.length} </h3>
                <div className="divider"></div>
                <div className="flex justify-around">
                    <h2>Name</h2>
                    <h2>Time</h2>
                    <h2>Calorie</h2>
                    <h2></h2>
                </div>
                {carts.map((cart) => (
                    <Cook key={cart.id} cart={cart} />
                ))}

            </div>

            <div>
                Currently cooking: 02
            </div>
        </div>
    </>
    );

};

Cooks.propTypes = {
    carts: PropTypes.array.isRequired,
};

export default Cooks;