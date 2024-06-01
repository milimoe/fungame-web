import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonButton } from '@ionic/react';
import { camera, trash, close, addCircleSharp } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../../hooks/use-photo-gallery';

const Rooms: React.FC = () => {
    const { deletePhoto, photos, takePhoto } = usePhotoGallery();
    const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">房间列表</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="warning">
                    <p style={{ color: "orange", backgroundColor: "gray" }}><strong>警告：此页面目前提供相机功能未做修改。</strong></p>
                    <p>此处将提供玩家的FunGame账号天梯积分、场次等简单数据的显示。</p>
                </div>
                <div className="button" style={{ textAlign: "right" }}>
                    这是一个匹配房间的按钮，可以选择匹配条件。
                    <IonButton><IonIcon icon={ addCircleSharp }></IonIcon></IonButton>
                </div>
                <IonGrid>
                    <IonRow>
                        {photos.map((photo, index) => (
                            <IonCol size="6" key={index}>
                                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>

                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton onClick={() => takePhoto()}>
                        <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                </IonFab>

                <IonActionSheet
                    isOpen={!!photoToDelete}
                    buttons={[{
                        text: 'Delete',
                        role: 'destructive',
                        icon: trash,
                        handler: () => {
                            if (photoToDelete) {
                                deletePhoto(photoToDelete);
                                setPhotoToDelete(undefined);
                            }
                        }
                    }, {
                        text: 'Cancel',
                        icon: close,
                        role: 'cancel'
                    }]}
                    onDidDismiss={() => setPhotoToDelete(undefined)}
                />


            </IonContent>
        </IonPage>
    );
};

export default Rooms;
