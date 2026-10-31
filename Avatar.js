// components/Avatar.js
function Avatar(props) {
    return (
        <div className="avatar-container">
            <img
                src={props.image}
                alt="Profile"
                className="avatar-image"
            />

            <div className="avatar-border"></div>
        </div>
    );
}

export default Avatar;