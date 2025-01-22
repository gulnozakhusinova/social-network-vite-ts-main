import { InputHTMLAttributes } from "react"



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined;
  isError: boolean;
}



export const Input = ({ type, placeholder, errorMessage, isError,...props }: InputProps) => {
  return (
    <div> <input type={type} placeholder={placeholder}  {...props}/>
       { isError && (<p style={{color:"red",padding:"8px"}} >{errorMessage}</p>)}
    </div>
  )
}
