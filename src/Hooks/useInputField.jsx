import { useState } from "react"

const useInputField = () => {
    const [fieldValue, setFieldValue]= useState();

    const handleFieldOnChange= e => {
        setFieldValue(e.target.value)
    }

    return [fieldValue, handleFieldOnChange]
}

export default useInputField;