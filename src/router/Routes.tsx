import { IonPage, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import TabsNavigation from '../components/TabsNavigation/TabsNavigation';

import { 
    Route, 
    Redirect, 
    withRouter,
  } from 'react-router-dom';
// import Profile from '../pages/Profile/ProfilePage';
// import Home from '../pages/Home';

// interface AppRoute extends RouteProps {
//     component: React.ComponentType<any>;
//     path: string;
//     exact?: boolean;
//   }
  
  // Define routes
//   const routes: AppRoute[] = [
//     {
//       path: '/home',
//       component: Home,
//       exact: true
//     },
//     {
//       path: '/profile',
//       component: Profile,
//       exact: true
//     }
//   ];
  
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