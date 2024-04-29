import PropTypes from 'prop-types';

const Cook = ({ cart }) => {

    return (
            <div className="flex justify-between my-2 bg-slate-100">
                <h2>{cart.recipe_name.slice(0, 12)}</h2>
                <h2>{cart.preparing_time}</h2>
                <h2>{cart.calories}</h2>
                <div>
                    <button className='btn btn-info'>preaparing</button>
                </div>
            </div>
    );
};

Cook.propTypes = {
    cart: PropTypes.object.isRequired,
};

export default Cook;