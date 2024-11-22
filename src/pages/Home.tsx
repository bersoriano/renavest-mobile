import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,  
    IonItem,
    IonLabel,
    IonButton,
    IonIcon,
    IonList,
    IonBadge,
    IonRefresherContent,
    IonRefresher,
    IonAvatar,
    IonImg,
    useIonRouter
} from '@ionic/react';
import { homeOutline, notificationsOutline, personOutline } from 'ionicons/icons';
import profilePhoto from '../assets/blackgirl.png';
import styles from './Home.module.css';

const Home: React.FC = () => {
    const [notifications, setNotifications] = useState(3);

    const handleRefresh = (event: CustomEvent) => {
        setTimeout(() => {
            // Simulate data refresh
            setNotifications(notifications + 1);
            event.detail.complete();
        }, 1000);
    };
    const router = useIonRouter();
    const goToProfile = () => {
      router.push('/profile', 'forward', 'push');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Welcome to Renavest</IonTitle>
                    <IonButton slot="end" fill="clear">
                        <IonIcon icon={notificationsOutline} />
                        <IonBadge color="danger">{notifications}</IonBadge>
                    </IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <IonCard className={styles.profileCard}>
                    <IonImg
                        src={profilePhoto}
                        alt="Cool Girl"
                    ></IonImg>
                    <IonCardHeader>
                        <IonCardTitle>Fatima Lopez</IonCardTitle>
                        <IonCardSubtitle>Financial Therapist</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>"Money is more than numbers—it's a reflection of your journey, values, and dreams. Together, we’ll turn financial stress into strength and build a future that honors where you come from and where you’re going."</IonCardContent>
                    <IonButton expand="block" fill="clear" default-href="/profile" onClick={goToProfile}>View Profile</IonButton>
               </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Featured Therapists</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList >
                            <IonItem className={styles.therapistItem} button detail>
                                <IonAvatar className="profile-avatar">
                                    <img src={profilePhoto} alt="BlackGirl" />
                                </IonAvatar>
                                <IonLabel>Martita Perez</IonLabel>
                            </IonItem>
                            <IonItem button detail>
                                <IonIcon icon={personOutline} slot="start" />
                                <IonLabel>Fatima Lopez</IonLabel>
                            </IonItem>
                            <IonItem className={styles.therapistItem} button detail>
                                <IonAvatar className="profile-avatar">
                                    <img src={profilePhoto} alt="BlackGirl" />
                                </IonAvatar>
                                <IonLabel>Martita Perez</IonLabel>
                            </IonItem>              
                        </IonList>
                    </IonCardContent>          
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Recent Activity</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonLabel>
                                    <h2>New Feature Added</h2>
                                    <p>Check out our latest updates!</p>
                                </IonLabel>
                                <IonBadge color="success" slot="end">New</IonBadge>
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    <h2>Welcome Message</h2>
                                    <p>Getting started with Ionic React</p>
                                </IonLabel>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Home;