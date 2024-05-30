import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './home.css';

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>动态</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">动态</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="这里是FunGameApp的首页：动态广场" />
            </IonContent>
        </IonPage>
    );
};

export default Home;
