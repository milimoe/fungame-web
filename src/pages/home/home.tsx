import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MilimoeFooter from '../../components/footer';
import Refresher from '../../components/refresher';
import './home.css';
import { useState } from 'react';

const Home: React.FC = () => {
    const [cards, setCards] = useState<Array<any>>([]);

    const handleNewCards = (newCards: Array<any>) => {
        // 当Refresher组件刷新并获取新cards时，更新状态
        setCards(newCards);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">动态</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Refresher cards={cards} onNewCards={handleNewCards} />
                {cards.map((cardData, index) => (
                    <IonCard key={index}>
                        <IonCardHeader>
                            <IonCardTitle>{cardData.title}</IonCardTitle>
                            <IonCardSubtitle>{cardData.author}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>{cardData.date}</p>
                            {cardData.content}
                        </IonCardContent>
                        <p>Likes: {cardData.likes}</p>
                        <p>Forwards: {cardData.forwards}</p>
                        <p>Comments: {cardData.comments}</p>
                    </IonCard>
                ))}
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                </IonCard>
                <MilimoeFooter name="FunGame Web" />
            </IonContent>
        </IonPage>
    );
};

export default Home;
