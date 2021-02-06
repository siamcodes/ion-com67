import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonImg
} from '@ionic/react';
import React from 'react';
import { products } from '../data';

const Product: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Product</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {products.map((product, index) => (
                    <IonCard key={index}>
                        <IonImg src={product.image} />
                        <IonCardHeader>
                            <IonCardTitle>{product.title}</IonCardTitle>
                            <IonCardSubtitle>ราคา {product.price}</IonCardSubtitle>
                            <IonCardSubtitle>จำนวนในสต็อก {product.stock}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {product.description}
                        </IonCardContent>
                    </IonCard>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Product;
