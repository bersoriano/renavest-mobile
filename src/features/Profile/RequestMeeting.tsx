import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInput,
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

  const [message, setMessage] = useState(
    'This modal RequestMeeting uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(userName.current?.value, 'confirm');
    //window.open(meetingURL, '_blank');
    window.location.href = meetingURL;
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
        <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
            <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
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