import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonButton
} from '@ionic/react';

import { toast } from '../toast'
import React, { useState } from 'react';
import { registerUser } from '../firebaseConfig';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    async function register() {
        //console.log(fullname, email, password, cpassword);
        //validation
        if (password !== cpassword) {
            console.log('Passwords do not match')
            return toast('Passwords do not match')
        }
        if (email.trim() === '' || password.trim() === '') {
            console.log('Email and Password are required')
            return toast('Email and Password are required')
        }

        const res = await registerUser(email, password);
        if (res) {
            console.log('You have registered successfully!');
            toast('You have registered successfully!');
            history.push('/home');
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput onIonChange={(e: any) => setEmail(e.target.value)} />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput onIonChange={(e: any) => setPassword(e.target.value)} type="password" />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Confirm Password</IonLabel>
                        <IonInput onIonChange={(e: any) => setCPassword(e.target.value)} type="password" />
                    </IonItem>
                </IonList>
                <IonButton expand="block" onClick={register} >ลงทะเบียนเข้าใช้งาน</IonButton>
                <IonButton fill="clear" routerLink="/login"> Already have an account?</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Register;