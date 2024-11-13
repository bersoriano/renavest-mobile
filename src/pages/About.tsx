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
  IonIcon,
  IonList,
  IonListHeader,
  IonAvatar,
  IonChip,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButtons
} from '@ionic/react';
import {
  peopleOutline,
  businessOutline,
  mailOutline,
  logoGithub,
  logoTwitter,
  logoLinkedin,
  chevronForward
} from 'ionicons/icons';

const About: React.FC = () => {
  const [teamMembers] = useState([
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Emily Brown',
      role: 'Product Designer',
      image: '/api/placeholder/150/150'
    }
  ]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {/* Company Overview */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Our Mission</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              We are dedicated to creating innovative solutions that help businesses 
              and individuals achieve their goals through cutting-edge technology.
            </p>
            
            <div className="ion-padding-top">
              <IonChip color="primary">Innovation</IonChip>
              <IonChip color="secondary">Technology</IonChip>
              <IonChip color="tertiary">Excellence</IonChip>
            </div>
          </IonCardContent>
        </IonCard>

        {/* Team Section */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={peopleOutline} className="ion-margin-end" />
              Our Team
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {teamMembers.map((member, index) => (
                <IonItem key={index}>
                  <IonAvatar slot="start">
                    <img src={member.image} alt={member.name} />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                  </IonLabel>
                  <IonIcon icon={chevronForward} slot="end" />
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

        {/* FAQ Section */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Frequently Asked Questions</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonAccordionGroup>
              <IonAccordion value="first">
                <IonItem slot="header">
                  <IonLabel>What services do you offer?</IonLabel>
                </IonItem>
                <IonList slot="content">
                  <IonItem>
                    <IonLabel className="ion-text-wrap">
                      We provide comprehensive web and mobile development solutions,
                      cloud infrastructure setup, and digital transformation consulting.
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonAccordion>

              <IonAccordion value="second">
                <IonItem slot="header">
                  <IonLabel>How can we contact you?</IonLabel>
                </IonItem>
                <IonList slot="content">
                  <IonItem>
                    <IonLabel className="ion-text-wrap">
                      You can reach us through email, phone, or by filling out our
                      contact form. We typically respond within 24 hours.
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonAccordion>
            </IonAccordionGroup>
          </IonCardContent>
        </IonCard>

        {/* Contact Section */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonIcon icon={businessOutline} className="ion-margin-end" />
              Contact Us
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonIcon icon={mailOutline} slot="start" />
                <IonLabel>
                  <h2>Email</h2>
                  <p>contact@company.com</p>
                </IonLabel>
              </IonItem>
            </IonList>

            <div className="ion-text-center ion-padding-top">
              <IonButton fill="clear">
                <IonIcon slot="icon-only" icon={logoGithub} />
              </IonButton>
              <IonButton fill="clear">
                <IonIcon slot="icon-only" icon={logoTwitter} />
              </IonButton>
              <IonButton fill="clear">
                <IonIcon slot="icon-only" icon={logoLinkedin} />
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        <div className="ion-text-center ion-padding">
          <p className="ion-padding-top">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;