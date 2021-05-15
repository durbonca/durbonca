import { useState, useEffect } from 'react'
import { Body, Title, TitleText, Name, Space } from './styles/card'

export default function Card ({children, ...restProps}) {
    return(
        <div className="relative z-10" {...restProps}>{children}</div>
    )
}

Card.Body = function CardBody ({children, ...restProps}){
    return (
        <Body {...restProps}>{children}</Body>
    )
}

Card.Title = function CardTitle ({children, ...restProps}){
    return (
        <Title {...restProps}>{children}</Title>
    )
}

Card.TitleText = function CardTitleText ({children, ...restProps}){
    return (
        <TitleText {...restProps}>{children}</TitleText>
    )
}

Card.Name = function CardName ({children, ...restProps}){
    
    const arraysNames = restProps.name
    const [displayName, setDisplayName] = useState('')

    useEffect(()=> {
        setTimeout(()=> {    
            setDisplayName(arraysNames[0])
        }
        ,500)
    },[displayName])

    return (
        <Name {...restProps}>{displayName}{children}</Name>
    )
}

Card.Space = function CardSpace ({...restProps}){
    return (
        <Space {...restProps}/>
    )
}

