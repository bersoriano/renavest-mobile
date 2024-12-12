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
import { notificationsOutline } from 'ionicons/icons';
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
    
    const goToProfile = (itemId:any) => {
      router.push(`/profile/${itemId}`, 'forward', 'push');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Welcome to Renavest</IonTitle>
                    <IonButton slot="end" fill="clear">
                        <IonIcon icon={notificationsOutline} />
                        {/* <IonBadge color="danger">{notifications}</IonBadge> */}
                    </IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <PageTitle title='Meet Your Therapist'></PageTitle>
                {/* <div className='chip-container'>
                    <div className={styles.chipRow}>
                    <IonChip>Couples</IonChip>                           
                    <IonChip>ETFs</IonChip>                           
                    <IonChip>Crypto</IonChip>
                    <IonChip>401k</IonChip>                           
                    <IonChip>ETFs</IonChip>                           
                    <IonChip>Basics</IonChip>                           
                    </div>                    
                </div> */}

                {TherapistsList.map((therapist, index) => (
                    <IonCard onClick={()=> goToProfile(therapist.id)} key={index} className={styles.profileCard}>
                        <div className={styles.profileImgContainer}>
                            <IonImg
                                className={styles.profileUrl}
                                src={therapist.profileUrl || profilePhoto}
                                alt={therapist.name}
                            ></IonImg>
                            <IonLabel className={styles.profileImgLabel}>
                                <IonBadge color="primary" slot="end">Preferred</IonBadge>                            
                            </IonLabel>                          
                        </div>
                        <IonCardHeader>
                            <IonCardSubtitle className={styles.profileTitle}>{therapist.title}</IonCardSubtitle>
                            <IonCardSubtitle className={styles.profileSong}>🎵 {therapist.song}</IonCardSubtitle>
                            <IonCardTitle className={styles.profileName}>{therapist.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className={styles.profileIntroduction}>
                                "{therapist.introduction}"                                
                            </div>
                            </IonCardContent>
                    </IonCard>
                ))}

            </IonContent>
        </IonPage>
    );
};

export default Home;