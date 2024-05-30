import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './me.css';

const Me: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>个人中心</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">个人中心</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="未登录时，提示登录，登录后可查看FunGame账号信息和库存、历史战绩。" />
            </IonContent>
        </IonPage>
    );
};

export default Me;
