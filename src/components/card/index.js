import { CardBody } from './styles/card'

export default function Card ({children, ...restProps}) {
    return(
        <div {...restProps}>{children}</div>
    )
}

Card.Body = function CardBody ({children, ...restProps}){
    return (
        <CardBody {...restProps}>{children}</CardBody>
    )
}