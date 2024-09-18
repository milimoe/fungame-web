import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { IonRefresher, IonRefresherContent } from '@ionic/react';
import moment from 'moment';

interface RefresherProps {
    cards: Array<any>;
    onNewCards?: (newCards: Array<any>) => void;
}

const Refresher = forwardRef(({ cards, onNewCards }: RefresherProps, ref) => {
    const refresherRef = useRef<HTMLIonRefresherElement | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.milimoe.com/fungame/test');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result: string[] = await response.json();

            let newCard = [];
            let rank = 0;
            for (let i = 0; i < result.length; i++) {
                let strs = result[i].split('===');
                let title = '';
                if (strs.length > 1) {
                    if (strs[1].trim().startsWith('Round')) {
                        title = '第 ' + strs[1].replace('Round', '').trim() + ' 回合';
                    }
                    else if (strs[1].trim().startsWith('终局审判')) {
                        title = '终局审判';
                    }
                    else if (strs[1].trim().startsWith('排名')) {
                        title = '排名';
                    }
                    else if (strs[1].trim().startsWith('伤害排行榜')) {
                        title = '伤害排行榜';
                    }
                    else if (strs[1].trim().startsWith('空投')) {
                        title = '空投';
                    }
                    else if (strs[1].trim().startsWith('角色')) {
                        rank++;
                        title = '第 ' + rank + ' 名：' + strs[1].replace('角色', '').trim();
                    }
                }

                newCard.push({
                    author: 'FunGame 模拟',
                    title: title,
                    date: moment().format('yyyy-MM-DD HH:mm:ss'),
                    content: result[i],
                    likes: 999,
                    forwards: 999,
                    comments: 233
                });
            }

            onNewCards?.(newCard);

        } catch (error: any) {
            console.error('Fetch error:', error); // 输出错误详情
        } finally {
            refresherRef.current?.complete(); // 结束刷新动画
        }
    };

    // 使用 useImperativeHandle 公开 fetchData 方法
    useImperativeHandle(ref, () => ({
        triggerFetchData: fetchData // 暴露一个函数供外部调用
    }));

    const doRefresh = (event: CustomEvent) => {
        fetchData().then(() => refresherRef.current?.complete());
    };

    return (
        <IonRefresher ref={refresherRef} slot='fixed' onIonRefresh={doRefresh}>
            <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
    );
});

export default Refresher;
