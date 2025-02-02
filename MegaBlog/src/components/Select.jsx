import {React, useId} from "react";

let Select = React.forwardRef(function Select({
    option = [],
    label,
    className = "",
    ...props
},ref){
    const id = useId();
    
    return(
        <div className="w-full">
            <label htmlFor="id"></label>
            <select name="" id="option">
                {option?.map((value) => (
                    <option value="value" key={value}>
                        {value}
                        </option>
                ))}
            </select>
        </div>
    )


}) 

export default Select;