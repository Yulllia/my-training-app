function Car(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={props.car.img}
                    alt={props.car.name} />
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price} $</p>
        </div>
    )
}
export default Car