import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';



import'./sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            pwd: ''
        }
    }

    //here we use async for sign in 
    handleSubmit = async event => {
        event.preventDefault();

        const { email, pwd} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, pwd);
            this.setState({email: '', pwd:''});
        }catch(e){
            console.log(e);
        }

        this.setState({email: '', pwd: ''});
    }

    handleChange = event => {
        const {name , value} = event.target;

        this.setState({ [name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I alredy have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    labelExist='Email'
                    required/>

                    <FormInput 
                    name='pwd' 
                    type='password' 
                    value={this.state.pwd}
                    handleChange={this.handleChange} 
                    labelExist='Password'
                    required />
                    <div className='button'>
                        <CustomButton type='submit'> Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSign> Google</CustomButton>
                    </div>           
                </form>
            </div>
        )
    }
}

export default SignIn;