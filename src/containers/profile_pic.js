import { ProfilePic, Card } from '../components/'

export function ProfilePicContainer (){
    return (
        <>
        <Card>
            <Card.Body>
                Hi! My Name Is
            </Card.Body>
        </Card>
        <ProfilePic>
            <ProfilePic.BoxFrame>
                <ProfilePic.Border>
                    <ProfilePic.Image/>
                </ProfilePic.Border>
            </ProfilePic.BoxFrame>    
        </ProfilePic>
        </>
    )
}