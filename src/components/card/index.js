
export default function Card ({children, ...restProps}) {
    return(
        <div {...restProps}>{children}</div>
    )
}

Card.Picture = function CardPicture ({ ...restProps}){
    return (
        <img {...restProps} alt="CardPicture"/>
    )
}