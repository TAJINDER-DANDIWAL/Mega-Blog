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

// This component is a custom select input field that uses React's forwardRef to pass refs to the select element.
// It accepts an array of options, a label, and additional props.
// It generates a unique id for the select element using the useId hook.
// It renders a label and a select element with the provided options.
