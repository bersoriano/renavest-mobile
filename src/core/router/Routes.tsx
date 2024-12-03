import { IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import TabsNavigation from '../../shared/TabsNavigation/TabsNavigation';

import { 
    Route, 
    Redirect, 
    withRouter,
  } from 'react-router-dom';
  
  const AppRouter: React.FC = () => {
    return (
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" component={TabsNavigation} />
        </IonRouterOutlet>
      </IonReactRouter>
    );
  };
  
  export default AppRouter;