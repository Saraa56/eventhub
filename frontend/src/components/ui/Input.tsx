    interface InputProps {
        label?:string; 
        placeholder?:string; 
        type:string; 
        required?:boolean;
        disabled?:boolean;
        error?:string;
        id:string;
        value?:string;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  // O también: onChange?: React.ChangeEventHandler<HTMLInputElement>;
    }

    export default function Input ({label, placeholder, type, id, value, error, onChange}: InputProps ){
    return(
        <>
        <div>
            <label htmlFor={id}>{label}</label>
            <br></br>
            <input 
            type={type} 
            id={id} 
            value={value} 
            onChange={onChange}
            placeholder={placeholder}
            />
             {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
        </div> 
        </>
        );
    }