import { useState } from "react";

export const AddCategory2 = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length < 1) return;
        setInputValue('');
        onNewCategory(value);
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
        
    )
}
