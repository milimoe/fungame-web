import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MilimoeFooter from '../../components/footer';
import Refresher from '../../components/refresher';
import './me.css';
import { useState } from 'react';

const Me: React.FC = () => {
    const [cards, setCards] = useState<Array<any>>([]);

    const handleNewCards = (newCards: Array<any>) => {
        // 当Refresher组件刷新并获取新cards时，更新状态
        setCards(newCards);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">个人中心</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <p></p>
                <Refresher cards={cards} onNewCards={handleNewCards} />
                <MilimoeFooter name="未登录时，提示登录，登录后可查看FunGame账号信息和库存、历史战绩。" />
            </IonContent>
        </IonPage>
    );
};

export default Me;
