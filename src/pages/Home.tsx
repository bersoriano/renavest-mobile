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
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonList,
  IonBadge,
  IonRefresherContent,
  IonRefresher
} from '@ionic/react';
import { homeOutline, notificationsOutline, personOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const [notifications, setNotifications] = useState(3);

  const handleRefresh = (event: CustomEvent) => {
    setTimeout(() => {
      // Simulate data refresh
      setNotifications(notifications + 1);
      event.detail.complete();
    }, 1000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome Home</IonTitle>
          <IonButton slot="end" fill="clear">
            <IonIcon icon={notificationsOutline} />
            <IonBadge color="danger">{notifications}</IonBadge>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Quick Actions</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem button detail>
                <IonIcon icon={homeOutline} slot="start" />
                <IonLabel>Dashboard</IonLabel>
              </IonItem>
              <IonItem button detail>
                <IonIcon icon={personOutline} slot="start" />
                <IonLabel>Profile</IonLabel>
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

        <IonButton expand="block" className="ion-margin-top">
          Load More
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;