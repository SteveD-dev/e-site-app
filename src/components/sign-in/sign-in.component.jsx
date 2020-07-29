import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';



import'./sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            pwd: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', pwd: ''});
    }

    handleChange = event => {
        const {name , value} = event.target;

        this.setState({ [name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I alredy have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type="email" 
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    labelExist='Email'
                    required/>

                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.pwd}  
                    handleChange={this.handleChange}
                    labelExist='Password' 
                    required/>
                    <div className='button'>
                        <CustomButton type='submit'> Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSign> Google</CustomButton>
                    </div>           
                </form>
            </div>
        )
    }
}

export default SignIn;