import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [showValidation, setValidate] = useState('');

    const changeHandler = (e) => {
        setValidate('')
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let errors = '';
       try {
         if (values.category === '') {
             values.category = 'Adventure Travel'
         }
 
         if (values.country === '') {
             values.country = 'Afghanistan';
         }
 
         for (let value in values) {
             try {
                 if (values[value].trim() === '') {
                     errors = 'All fields are required!';
                     break;
                 }
             } catch (error) {
             }
         }
 
         if (values.title.length < 3) {
             errors = 'Title must be at least 3 charecters long!';
         }
         if (isNaN(values.nights) || isNaN(values.maxPrice)) {
             errors = 'You must put a number!';
         }
         if (values.maxPrice < 0) {
             errors = 'Max price must be positive number!';
         }
         if (values.imageUrl.slice(0, 7) !== 'http://' && values.imageUrl.slice(0, 8) !== 'https://') {
             errors = 'Invalid image url!';
         }
         if (values.description.length < 20) {
             errors = 'Description must be at least 20 charecters long!';
         }
         if (values.conclusion.length < 10) {
             errors = 'Conclusion must be at least 10 charecters long!';
         }
         
       } catch (error) {
        
       }

       try {
        if (values.review.length < 5) {
            errors = 'Review must be at least 5 charecters long!';
        }
       } catch (error) {
       }

        setValidate(errors);

        if (!errors) {
            onSubmitHandler(values);

            setValues(initialValues);
        }
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        showValidation,
        onSubmit,
        changeValues,
        changeHandler,
    };
};