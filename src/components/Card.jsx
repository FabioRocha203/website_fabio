import './Card.css'
import Button from './Button'

export default function Card({ 
    title, 
    description, 
    color = 'blue', 
    children, 
    buttonText = 'Ok'
}) {
    return (
        <>
            {children}
            <div className='card' style={{
                backgroundColor: color,
            }}>
                <p className='title'>{title}</p>
                <p className='description'>{description}</p>
               
            </div>
        </>
    )
}
