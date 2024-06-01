import React from 'react';
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonHeader, IonRefresher, IonRefresherContent } from '@ionic/react';
import moment from 'moment';

interface RefresherProps {
    cards: Array<any>; // 假设cards是一个对象数组，每个对象代表一个card的数据  
    onNewCards?: (newCards: Array<any>) => void; // 可选的回调函数，当刷新时通知父组件新的cards  
}  

const Refresher: React.FC<RefresherProps> = ({ cards, onNewCards }) => {
    const [isRefreshing, setIsRefreshing] = React.useState(false);

    const doRefresh = async (event: CustomEvent) => {
        setIsRefreshing(true); // 设置刷新状态为true，可选地用于UI反馈

        setTimeout(() => {
            // 假设你从某个地方获取了新的card数据  
            const newCardData = [
                {
                    author: "milimoe",
                    title: "fku",
                    date: moment().format("yyyy-MM-DD HH:mm:ss"),
                    content: "rainbow",
                    likes: 999,
                    forwards: 999,
                    comments: 233
                },
                {
                    author: "milimoe2",
                    title: "shitbro",
                    date: moment().format("yyyy-MM-DD HH:mm:ss"),
                    content: "ffffffff",
                    likes: 123,
                    forwards: 456,
                    comments: 789
                }
            ];
            const newCards = cards.concat(newCardData); // 将新数据添加到当前cards数组中

            // 通知父组件新的cards（如果有提供回调函数）
            onNewCards?.(newCards);

            // 更新UI表示刷新已完成
            setIsRefreshing(false);

            event.detail.complete();
        }, 1000);
    };

    return (
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={120} onIonRefresh={doRefresh}>
            <IonRefresherContent pullingIcon="arrow-dropdown" refreshingSpinner="circular"></IonRefresherContent>
        </IonRefresher>
    );
};

export default Refresher;
