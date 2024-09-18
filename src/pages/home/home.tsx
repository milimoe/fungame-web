import {
    IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLoading, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';
import MilimoeFooter from '../../components/footer';
import Refresher from '../../components/refresher';
import './home.css';
import { useState, useRef } from 'react';
import { chatbubbleEllipsesSharp, chevronUpCircleSharp, rocketOutline, shareSocialSharp, thumbsUpSharp } from 'ionicons/icons';

const Home: React.FC = () => {
    const refresherRef = useRef<{ triggerFetchData: () => Promise<void> } | null>(null);
    const contentRef = useRef<HTMLIonContentElement | null>(null);
    const [cards, setCards] = useState<Array<any>>([]);
    const [loading, setLoading] = useState(false);

    const handleNewCards = (newCards: Array<any>) => {
        setCards(newCards);
    };
    
    const handleButtonClick = async () => {
        setLoading(true); // 显示加载动画
        if (refresherRef.current) {
            await refresherRef.current.triggerFetchData();
        }
        setLoading(false); // 关闭加载动画
    };
    
    const scrollToTop = () => {
        contentRef.current?.scrollToTop(500);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">动态</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen ref={contentRef}>
                <div className="button" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    立即开始一局 FunGame 模拟 &gt;&gt;&gt;
                    <IonButton onClick={handleButtonClick}>
                        <IonIcon icon={rocketOutline}></IonIcon>
                    </IonButton>
                </div>

                <Refresher ref={refresherRef} cards={cards} onNewCards={handleNewCards} />

                <IonLoading
                    isOpen={loading}
                    message={'加载中...'}
                    onDidDismiss={() => setLoading(false)}
                />

                {cards.map((cardData, index) => (
                    <IonCard key={index}>
                        <IonCardHeader>
                            <IonCardTitle>{cardData.title}</IonCardTitle>
                            <IonCardSubtitle>{cardData.author}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            发布于：{cardData.date}
                        </IonCardContent>
                        <IonCardContent>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{cardData.content}</p>
                        </IonCardContent>
                        <IonCardContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 10px", gap: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexGrow: 1, minWidth: "0" }}>
                                Likes: {cardData.likes}
                                <IonButton>
                                    <IonIcon icon={thumbsUpSharp}></IonIcon>
                                </IonButton>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, minWidth: "0" }}>
                                Forwards: {cardData.forwards}
                                <IonButton>
                                    <IonIcon icon={shareSocialSharp}></IonIcon>
                                </IonButton>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, minWidth: "0" }}>
                                Comments: {cardData.comments}
                                <IonButton>
                                    <IonIcon icon={chatbubbleEllipsesSharp}></IonIcon>
                                </IonButton>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", flexGrow: 1, minWidth: "0" }}>
                                <IonButton onClick={scrollToTop}>
                                    <IonIcon icon={chevronUpCircleSharp}></IonIcon>
                                </IonButton>
                            </div>
                        </IonCardContent>
                    </IonCard>
                ))}
                
                <MilimoeFooter name="FunGame Web" />
            </IonContent>
        </IonPage>
    );
};

export default Home;
