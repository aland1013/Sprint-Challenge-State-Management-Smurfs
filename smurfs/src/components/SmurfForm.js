import React, { useContext, useState, useEffect } from 'react';
import * as yup from 'yup';
import { SmurfsContext } from '../contexts/SmurfsContext';

const SmurfForm = () => {
  const { smurfToEdit, addSmurf } = useContext(SmurfsContext);

  const [formState, setFormState] = useState({
    name: '',
    age: '',
    height: '',
    id: null
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    height: ''
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const formSchema = yup.object().shape({
    name: yup.string().required('Smurf name is required'),
    age: yup.number().required('Smurf age is required'),
    height: yup.string().required('Smurf height is required')
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: '' });
      })
      .catch((err) => setErrors({ ...errors, [e.target.name]: err.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  useEffect(() => {
    if (smurfToEdit) {
      setFormState(smurfToEdit);
    }
  }, [smurfToEdit]);

  const formSubmit = (e) => {
    e.preventDefault();
    addSmurf(formState);
    setFormState({
      name: '',
      age: '',
      height: '',
      id: null
    });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
  };

  return (
    <>
      <h2>Smurf Form</h2>
      <form onSubmit={formSubmit}>
        <label htmlFor='name'>
          Name:
          <input
            type='text'
            name='name'
            onChange={inputChange}
            value={formState.name}
          />
        </label>
        <label htmlFor='age'>
          Age:
          <input
            type='number'
            name='age'
            onChange={inputChange}
            value={formState.age}
          />
        </label>
        <label htmlFor='height'>
          Height:
          <input
            type='text'
            name='height'
            onChange={inputChange}
            value={formState.height}
          />
        </label>
        <button disabled={isButtonDisabled} type='submit'>
          add smurf
        </button>
      </form>
    </>
  );
};

export default SmurfForm;
