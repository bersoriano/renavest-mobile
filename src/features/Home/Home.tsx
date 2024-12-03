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
    useIonRouter,
    IonChip
} from '@ionic/react';
import { homeOutline, notificationsOutline, personOutline } from 'ionicons/icons';
import profilePhoto from '../../assets/blackgirl.png';
import styles from './Home.module.css';
import PageTitle from '../../shared/PageTitle/PageTitle';
import TherapistsList from '../../shared/config/therapistList';

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
                <PageTitle title='Financial Therapists'></PageTitle>
                <div className='chip-container'>
                    <div className={styles.chipRow}>
                    <IonChip>Stocks</IonChip>                           
                    <IonChip>ETFs</IonChip>                           
                    <IonChip>Crypto</IonChip>
                    <IonChip>401k</IonChip>                           
                    <IonChip>ETFs</IonChip>                           
                    <IonChip>Basics</IonChip>                           
                    </div>                    
                </div>

                {TherapistsList.map((therapist, index) => (
                    <IonCard key={index} className={styles.profileCard}>
                        <IonImg
                            className={styles.profileUrl}
                            src={therapist.profileUrl || profilePhoto}
                            alt={therapist.name}
                        ></IonImg>
                        <IonCardHeader>
                            <IonCardTitle className={styles.profileName}>{therapist.name}</IonCardTitle>
                            <IonCardSubtitle className={styles.profileTitle}>{therapist.title}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent className={styles.profileIntroduction}>"{therapist.introduction}"</IonCardContent>
                        <IonButton expand="block" fill="clear" default-href="/profile" onClick={goToProfile}>View Profile</IonButton>
                    </IonCard>
                ))}

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