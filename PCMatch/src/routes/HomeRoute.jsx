import { Link } from 'react-router-dom';
import Button from "../components/Button"

export default function HomeRoute(){
    return (
    <main>
        <div className="info-card">
            <h1>Welcome to our HomePage</h1>
            <p>This is just an example Text!</p>
            <Button><Link to="/builder/">Start your Build</Link> </Button>
        </div>
        <div>
            <h1>Search through Products!</h1>
            <p>This is not the Final Text!</p>
            <Button><Link to="/products/">Show Products</Link> </Button>
        </div>
    </main> 
    )
}