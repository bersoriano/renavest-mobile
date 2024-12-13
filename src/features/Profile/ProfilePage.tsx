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
  IonChip
} from '@ionic/react';
import { useTheme } from '../../theme/ThemeProvider';
import styles from './ProfilePage.module.css';
import profilePhoto from '../../assets/blackgirl.png';
import { useParams } from 'react-router-dom';
import TherapistsList from '../../shared/config/therapistList';

interface FinancialTherapist {
  id: number;
  name: string;
  title: string;
  clients: string[];
  certifications: string;
  yoe: string;
  song: string;
  profileUrl: string;
  introduction: string;
  expertise: string[];
  bookingURL: string;
  longBio: string;
  previewBlurb: string;
}

const Profile: React.FC = () => {
  const { colors } = useTheme();
  const { id } = useParams<{ id: string }>();
  const financialTherapist = TherapistsList.find(therapist => therapist.id === Number(id));

  if (!financialTherapist) {
    return (
      <IonPage>
        <IonContent>
          <div>Therapist not found</div>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Your Therapist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={styles.pageContent}>
        <div className="profile-container">
          {/* Local image from assets folder */}
          <IonImg
            src={financialTherapist.profileUrl}
            alt="Cool Girl"
          ></IonImg>          
          <div className={styles.container}>
            <div className={styles.buttonContainer}>
              <IonButton fill="outline">Request Meeting</IonButton>
            </div>
            <h1>{financialTherapist.name}</h1>
            <p><strong>🎵 Song:</strong> {financialTherapist.song}.</p>
              <p>Expertise:</p>
              <div className={styles.chipContainer}>
                  { financialTherapist.expertise.map((expertise, index) =>   
                    <IonChip key={index}>{expertise}</IonChip>
                  )}
              </div>
              <p>Certifications: {financialTherapist.certifications}</p>
              <p>{financialTherapist.yoe} years of experience.</p>              
            <p className={styles.intro}> "{financialTherapist.longBio}"</p>
            <p>Typically works with: {financialTherapist.clients.join(", ")}</p>
          </div>            
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;