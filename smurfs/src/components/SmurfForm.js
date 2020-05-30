import React, { useContext, useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { SmurfsContext } from '../contexts/SmurfsContext';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 300px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
  font-size: 1.4rem;
`;

const Input = styled.input`
  width: 100%;
  margin: 5px 0 0;
  display: block;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  transition: all 0.3s;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  background-color: white;
`;

const Button = styled.button`
  margin: auto;
  height: 50px;
  width: 150px;
  border-radius: 5px;
  font-size: 18px;
  background-color: #88ccff;
`;

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
      <Form onSubmit={formSubmit}>
        <Label htmlFor='name'>
          Name:
          <Input
            type='text'
            name='name'
            onChange={inputChange}
            value={formState.name || ''}
          />
        </Label>
        <Label htmlFor='age'>
          Age:
          <Input
            type='number'
            name='age'
            onChange={inputChange}
            value={formState.age || ''}
          />
        </Label>
        <Label htmlFor='height'>
          Height:
          <Input
            type='text'
            name='height'
            onChange={inputChange}
            value={formState.height || ''}
          />
        </Label>
        <Button disabled={isButtonDisabled} type='submit'>
          add smurf
        </Button>
      </Form>
    </>
  );
};

export default SmurfForm;
