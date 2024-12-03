import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonImg,
  IonAvatar
} from '@ionic/react';
import { useTheme } from '../../theme/ThemeProvider';
import styles from './ProfilePage.module.css';
import profilePhoto from '../../assets/blackgirl.png';

const Profile: React.FC = () => {
  const { colors } = useTheme();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={styles.pageContent}>
        <div className="profile-container">
          {/* Local image from assets folder */}
          <IonImg
            src={profilePhoto}
            alt="Cool Girl"
          ></IonImg>          
          <div className={styles.container}>
            <div className={styles.buttonContainer}>
              <IonButton fill="outline">Request Meeting</IonButton>
            </div>              
            <h1>Fatima Lopez</h1>
            <p>Fatima Lopez is a compassionate financial therapist dedicated to empowering first-generation immigrants and minorities to achieve financial stability and confidence.</p>
            <p>With a deep understanding of the unique challenges faced by these communities, Fatima Lopez blends emotional support with practical financial strategies to help clients navigate money-related stress, build wealth, and align their finances with their personal values.</p>
          </div>            
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;