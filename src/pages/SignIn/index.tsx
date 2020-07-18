import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import * as S from './styles';

import getValidationErros from '../../utils/getValidationErros';

import logoImg from '../../assets/logo-pm.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail valido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErros(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="Project Manager" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </S.Content>
      <S.Background />
    </S.Container>
  );
};

export default SignIn;
