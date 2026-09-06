import './UserCard.css';

export default function UserCard ({user}) {

    return(
        <div className='users'>
            <h2>Name : {user.name} </h2>
            <h3>Phone: {user.phone}</h3>
            <h4>Email: {user.email}</h4>
        </div>
    )
}