import React, {ChangeEvent, useState} from 'react';
import './RegistrationForm.css'

const RegistrationForm = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordTouched, setPasswordTouched] = useState<boolean>(false)
    const [emailTouched, setEmailTouched] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [emailBorder, setEmailBorder] = useState<string>('')
    const [passwordBorder, setPasswordBorder] = useState<string>('')

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const blurHandlerEmail = () => {
        if (email === '') {
            setEmailTouched(true)
            setErrorText('Это поле обязательно')
            setEmailBorder('red')
        }
    }
    const blurHandlerPassword = () => {
        if (password === '') {
            setPasswordTouched(true)
            setErrorText('Это поле обязательно')
            setPasswordBorder('red')
        }
    }

    const onFocusHandlerEmail = () => {
        setEmailTouched(false)
        setEmailBorder('')
        setIsError(false)
    }
    const onFocusHandlerPassword = () => {
        setPasswordTouched(false)
        setPasswordBorder('')
        setIsError(false)
    }

    return (
        <div className={'w-[100vw] h-[100vh] flex justify-center items-center'}>
            <div className={'w-[400px] h-[300px] bg-white rounded-2xl registration-form p-8 pt-6'}>
                <div className={'font-bold text-2xl mb-2'}>Регистрация</div>
                <div className={'h-44 flex-col flex justify-around'}>
                    <div className={'flex flex-col'}>
                        {emailTouched && <div className={'error-message error-email'}>{errorText}</div>}
                        <input type="email"
                               value={email}
                               onChange={handleEmail}
                               onFocus={onFocusHandlerEmail}
                               onBlur={blurHandlerEmail}
                               style={{borderColor: emailBorder}}
                               className={'input-element'}/>
                    </div>
                    <div className={'flex flex-col'}>
                        {passwordTouched && <div className={'error-message error-password'}>{errorText}</div>}
                        <input type="password"
                               value={password}
                               onChange={handlePassword}
                               onFocus={onFocusHandlerPassword}
                               onBlur={blurHandlerPassword}
                               style={{borderColor: passwordBorder}}
                               className={'input-element'}/>
                    </div>
                </div>
                <div className={'h-1/6 flex justify-start items-center'}>
                    <button className={'submit-btn'}>Подтвердить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;