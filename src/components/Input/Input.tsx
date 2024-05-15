import "./Input.module.scss";
import React, { ChangeEvent, useState, useEffect } from "react";

interface InputInterface {
    type: string,
    autocompleteData?: string[],
    onChange: (value: any) => void;
    value: string,
    placeholder: string
}

const Input = ({type, autocompleteData, value, placeholder, onChange}: InputInterface) => {

    const [showAutocomplete, setShowAutocomplete] = useState(false);


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setShowAutocomplete(true)   
        onChange(event.target.value);
    };

    const handleAutoCompleteSelection = (selectedOption: string) => {
        onChange(selectedOption); // Aggiorna lo stato del valore con l'opzione selezionata
        setShowAutocomplete(false)
    }


    useEffect(() => {
        if(autocompleteData?.length != 0)
            setShowAutocomplete(true)   
    }, [])
    

  return (
    <>
        <input 
            type={type} 
            className="custom-input" 
            value={value}
            placeholder={placeholder}
            onChange={handleInputChange}
            />
            {
                showAutocomplete  && (
                    <div className="autocomplete-box">
                    {autocompleteData?.map((item: string, index: number) => (
                            <span key={index} onClick={() =>handleAutoCompleteSelection(item)}>{item}</span>
                        ))}
                    </div>
                )
            }
    </>

  );
}

export default Input;
