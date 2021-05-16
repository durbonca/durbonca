import { Card } from '../components/'


export function CardContainer (){
    return (
        <Card>
            <Card.Body>
                <Card.Title>HI</Card.Title>
                <Card.TitleText>MY NAME IS
                    <Card.Name name={['Manuel Durán', 'Slim Shady']}></Card.Name>
                </Card.TitleText>
                <Card.Space/>
            </Card.Body>

            <Card.Carreer>Web Developer</Card.Carreer>
        </Card>
    )
}