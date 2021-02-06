import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonImg,
    IonButton,
    IonAvatar,
    IonRadioGroup,
    IonRadio,
    IonLabel,
    IonThumbnail
} from '@ionic/react';
import React from 'react';
import { banks } from '../data'

const Payment: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>การชำระเงิน (Payment)</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    <IonRadioGroup>
                        {banks.map((item, index) => (
                            <IonItem key={index}>
                                <IonAvatar slot="start">
                                    <IonImg src={item.image} />
                                </IonAvatar>
                                <IonLabel>{item.name}</IonLabel>
                                <IonRadio value={item.name} slot="end" />
                            </IonItem>
                        ))}
                    </IonRadioGroup>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Payment;