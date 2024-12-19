import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonAlert
} from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';

interface RequestMeetingProps {
  meetingURL: string;
}

function RequestMeeting({ meetingURL }: RequestMeetingProps) {
  const modal = useRef<HTMLIonModalElement>(null);
  const userName = useRef<HTMLIonInputElement>(null);
  const userEmail = useRef<HTMLIonInputElement>(null);
  const helpTopic = useRef<HTMLIonInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [canDismiss, setCanDismiss] = useState(false);

  function confirm() {
    modal.current?.dismiss(userName.current?.value, 'confirm');
    //window.open(meetingURL, '_blank');
    //window.location.href = meetingURL;
    setIsOpen(true);
    setCanDismiss(false)
  }

  function cancel() {
    setCanDismiss(true)
    modal.current?.dismiss()
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
    }
  }

  return (
    <IonModal 
      ref={modal} 
      trigger="open-modal" 
      canDismiss={canDismiss} 
      onWillDismiss={(ev) => onWillDismiss(ev)}>
        <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonButton onClick={() => cancel()}>Cancel</IonButton>
            </IonButtons>
            <IonTitle>Welcome</IonTitle>
            <IonButtons slot="end">
            <IonButton strong={true} onClick={() => confirm()}>
                Confirm
            </IonButton>
            </IonButtons>
        </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonAlert
            isOpen={isOpen}
            header="Don't forget to Come Back!"
            message="You are about to book an appointment through an external site to Renavest. Come back to Renavest by taping the back buttton."
            buttons={[{
              text: 'Continue',
              handler: () => {
                window.location.href = meetingURL;
                console.log('Continue button clicked - redirecting to external booking site');
              }
            }]}
            onDidDismiss={() => setIsOpen(false)}>
          </IonAlert>          
          <IonItem style={{ margin: '2rem 0' }}>
              <IonInput
              label="Enter your name"
              labelPlacement="stacked"
              ref={userName}
              type="text"
              placeholder="Your name"
              />         
          </IonItem>
          <IonItem style={{ margin: '2rem 0' }}>
              <IonInput
              label="Enter your email"
              labelPlacement="stacked"
              ref={userEmail}
              type="email"
              placeholder="Your Email"
              />         
          </IonItem>
          <IonItem style={{ margin: '2rem 0' }}>
              <IonInput
              label="What kind of help are you looking for?"
              labelPlacement="stacked"
              ref={helpTopic}
              type="text"
              placeholder="Write in a few words."
              />         
          </IonItem>        
        </IonContent>
    </IonModal>
  );
}

export default RequestMeeting;