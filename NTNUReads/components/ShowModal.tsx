import * as React from 'react';
import { Image } from 'react-native';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import Sorting from "./Sorting";

const ShowModal = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'black', padding: 20, height: 100};

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Sorting />
                </Modal>
            </Portal>
            <Button style={{marginTop: 30}} onPress={showModal}>
                Show
            </Button>
        </Provider>
    );
};

export default ShowModal;