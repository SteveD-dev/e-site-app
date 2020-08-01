import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, createUserProfileDoc} from '../../firebase/firebase.utils';


import './sign-up.styles.scss';


class SignUP extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            pwd: '',
            confirmPwd: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, pwd, confirmPwd} = this.state;

        if(pwd !== confirmPwd){
            alert("passwords do not match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, pwd);

            await createUserProfileDoc(user, {displayName});

            //this will clear our form
            this.setState({
                displayName: '',
                email: '',
                pwd: '',
                confirmPwd: ''
            })
        }catch(e){
            console.log(e);
        }
    }


    handleChange = event => {
        const { name, value} = event.target;

        this.setState({[name]: value});
    }

    render(){

        const { displayName, email, pwd, confirmPwd} = this.state;


        return(
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>create a new account now</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={this.handleChange}
                    labelExist='Display name'
                    required
                    />

                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={this.handleChange}
                    labelExist='Email'
                    required
                    />

                    <FormInput
                    type='password'
                    name='pwd'
                    value={pwd}
                    handleChange={this.handleChange}
                    labelExist='Password'
                    required

                    />

                    <FormInput
                    type='password'
                    name='confirmPwd'
                    value={confirmPwd}
                    handleChange={this.handleChange}
                    labelExist='Confirm Password'
                    required
                    />

                    <CustomButton type='submit' >
                        Sign Up
                    </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUP;