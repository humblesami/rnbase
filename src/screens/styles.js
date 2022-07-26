import { StyleSheet } from 'react-native';

const EditStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWithText: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        flexWrap: "wrap",
        flexDirection: "row",
    },
    messageOnly:{
        padding: 10
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    },
    page:{
        flex: 1,
        padding: 20
    }
});

export default EditStyles;