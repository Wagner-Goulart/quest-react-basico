import './button.css'

const alertButtonLabel = (label)=> {
   return alert(`A label deste botão é ${label}`)
}

const Button = ({label}) => {
    return <button className='btn' onClick={()=>{alertButtonLabel(label)}}>{label}</button>
}

Button.defaultProps = {
    label:'clique aqui'
}

export default Button

