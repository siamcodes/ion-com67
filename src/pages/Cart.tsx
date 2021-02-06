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
    IonLabel,
    IonButton,
    IonImg,
    IonThumbnail
} from '@ionic/react';
import React from 'react';
import { products } from '../data'

const unit=2;

const Cart: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>  ตะกร้าสินค้า (Cart) </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList>
                    {products.map((item, index) => (
                        <IonItem key={index}>
                            <IonThumbnail slot="start">
                                <IonImg src={item.image} />
                            </IonThumbnail>
                            <IonLabel>{item.title}</IonLabel>
                            <IonLabel>{unit}</IonLabel>
                            <IonLabel>{item.price}</IonLabel>
                            <IonLabel>{unit * item.price}</IonLabel>
                            <IonButton color="danger">Delete</IonButton>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Cart;