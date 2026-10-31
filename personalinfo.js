//components/personalinfo.js
function PersonalInfo(props) {
    return (
        <div className="personal-info">
            <h2 className="name">{props.name}</h2>
            <p className="role">{props.role}</p>
            <p className="location">{props.location}</p>
            <p className="email">{props.email}</p>
        </div>
    );
}

export default PersonalInfo;