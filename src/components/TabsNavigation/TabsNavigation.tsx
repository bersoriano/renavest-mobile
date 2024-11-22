import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonBadge,
    IonRouterOutlet,
  } from '@ionic/react';
  import './TabsNavigation.css'
  import { home, person } from 'ionicons/icons';
  import { Redirect, Route } from 'react-router-dom';
  import HomePage from '../../../src/pages/Home';
  import ProfilePage from '../../../src/pages/Profile/ProfilePage';
  
  const TabsNavigation: React.FC = () => {
    return (
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
  
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>

          <IonTabButton tab="home" href="/home">
            <IonIcon icon={"book-outline"} />
            <IonLabel>Learn</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );
  };
  
  export default TabsNavigation;
  