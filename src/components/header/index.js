import { Link } from 'react-router-dom'


export default function Header() {
   return(
       <div className="max-w-7xl mx-auto p-10 sm:px-6 lg:px-8">
           <Link to="/"> test </Link>
           <Link to="projects"> projects </Link>
       </div>
   )
}