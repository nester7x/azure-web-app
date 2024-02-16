import React, { useEffect, useState } from 'react';

import { api } from 'src/utils/apiUtils';
import { validate } from 'src/utils/validation';

import * as S from './styles';

const Home = () => {
  const [formFile, setFormFile] = useState(null);
  const [fileError, setFileError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (
      selectedFile &&
      selectedFile.type !==
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      setFileError('Only .docx files are allowed');
    } else {
      setFormFile(selectedFile);
      setFileError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formFile) {
      setFileError('Please select a file');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('formFile', formFile);
      formData.append('email', email);

      await api.post('api/File/upload', formData);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const blurHandler = () => {
    setEmailDirty(!!emailError);
  };

  useEffect(() => {
    setEmailError(validate('email', email));
  }, [email]);

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>Upload Form</S.Title>
        <S.FormItem>
          <S.Label>File (only .docx)</S.Label>
          <S.FileInput type="file" name="file" onChange={handleFileChange} />
          {fileError && <p style={{ color: '#ff3523' }}>{fileError}</p>}
        </S.FormItem>
        <S.FormItem>
          <S.Label>Email</S.Label>
          <S.FormInput
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => blurHandler()}
            errorText={emailDirty && emailError}
          />
        </S.FormItem>
        <S.SubmitBtn type="submit" text="Upload" disabled={!email || emailError || !formFile} />
      </S.Form>
    </S.Wrapper>
  );
};

export default Home;
