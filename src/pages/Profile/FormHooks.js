import React, { useState, useEffect } from 'react';

export const useFormInput = (initialValue, name, onClick) => {
    const [value, setValue] = useState(initialValue);
    useEffect(
        () => {
            setValue(initialValue);
        },
        [initialValue]
    );
    const handleChange = ({ target }) => {
        setValue(target.value)
    };
    return {
        value,
        onChange: handleChange,
        name,
        onClick
    };
};

export const getValues = (...obj) => {
    const values = obj.map(value => {
        return {[value.name] : value.value}
    });
    return Object.assign({}, ...values)
};



