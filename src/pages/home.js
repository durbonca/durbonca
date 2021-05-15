import { CardContainer } from '../containers/card'
import { ProfilePicContainer } from '../containers/profile_pic'

export default function Home(){
   return (
      <>
         <div className="flex flex-col items-center justify-around md:flex-row">
            <CardContainer/>
            <ProfilePicContainer/>
         </div>
      </>
      )
}