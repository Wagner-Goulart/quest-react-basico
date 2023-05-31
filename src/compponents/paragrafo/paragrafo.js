import './paragrafo.css'

const uppercase = (text) => {
    return (text.toUpperCase())
}

const Paragrafo = ({text, color}) => {
    return (
        <div className='paragrafo' style={{backgroundColor:color}} >
            <p>{uppercase(text)}</p>
        </div>
    ) 
}

Paragrafo.defaultProps = {
    color:'yellow'
}

export default Paragrafo