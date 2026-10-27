import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Platform,
    Image,
    Modal,
    Pressable,
    TextInput,
    ScrollView,


} from 'react-native';




export default function App() {
    const [modalVisible, setModalVisible] = useState(false);


    const [listProducts, setListProducts] = useState([

        {
            Name: "Portatil Acer",
            Categoria: "Electronica",
            Descripcion: "Portatil Gamer marca acer con la mejor calidad en pantalla y procesador i7 de 13 generacion",
            Precio: "4.000.000COP",
            Stock: "10",
            Status: true,
        },
    ]);

    const handleAddClient = () => {
        setModalVisible(true);
    };


    const [Name, setName] = useState('');
    const [Categoria, setCategoria] = useState('');
    const [Descripcion, setDescripcion] = useState('');
    const [Precio, setPrecio] = useState('');
    const [Stock, setStock] = useState('');
    const [Status, setStatus] = useState(true);
    const [Imagen, setImagen] = useState('');
    const [Search, setSearch] = useState('');

    const saveProducts = () => {
        setListProducts([
            ...listProducts,
            {
                Name: Name,
                Categoria: Categoria,
                Descripcion: Descripcion,
                Precio: Precio,
                Stock: Stock,
                Status: true,
                Imagen: Imagen,
            }
        ]);
        console.log({ Name, Categoria, Descripcion, Precio, Stock, Imagen });
        console.log(listProducts);
        setModalVisible(false);
        setName('');
        setCategoria('');
        setDescripcion('');
        setPrecio('');
        setStock('');
        setImagen('');
    };

    flexDirection

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor="#0c0e0cff" barStyle="light-content" />
            <View style={styles.container}>
                {/* Cabecera verde */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Listado de Productos</Text>
                </View>

                <Text style={styles.searchText}>Busqueda:</Text>
                <TextInput
                    style={styles.searchTextInput}
                    placeholder="Busqueda de producto"
                    value={Search}
                    onChangeText={setSearch}
                />


                {/* Lista de Productos */}
                <View style={styles.bodyListProducts}>
                    <FlatList
                        data={listProducts}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.flatListContent}
                        ListEmptyComponent={() => (
                            <Text style={styles.emptyText}>No hay productos</Text>
                        )}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                {/* Imagen de usuario con URI */}
                                <View style={styles.avatarContainer}>
                                    <Image
                                        source={{
                                            uri: item.Imagen || 'https://www.professionalwireless.com.co/wp-content/uploads/2024/09/NITRO-5-AN515-58-75NM_64GB.png'
                                        }}
                                        style={styles.avatarImage}
                                        resizeMode="cover"
                                    />

                                </View>


                                {/* Información del Producto */}
                                <View style={styles.cardInfo}>
                                    {item.Name ? <Text style={styles.cardText}>Nombre: {item.Name}</Text> : null}
                                    {item.Categoria ? <Text style={styles.cardText}>Categoria: {item.Categoria}</Text> : null}
                                    {item.Descripcion ? <Text style={styles.cardText}>Descripcion: {item.Descripcion}</Text> : null}
                                    {item.Precio ? <Text style={styles.cardText}>Precio: {item.Precio}</Text> : null}
                                    {item.Stock ? <Text style={styles.cardText}>Stock: {item.Stock}</Text> : null}
                                </View>
                            </View>
                        )}
                    />
                </View>

                {/* Botón flotante de más (+) */}
                <TouchableOpacity
                    style={styles.fab}
                    onPress={handleAddClient}
                >
                    <Text style={styles.fabText}>Agregar Producto</Text>
                </TouchableOpacity>
            </View>

            {/* Modal de Registro */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={false}
                onRequestClose={() => setModalVisible(false)}
            >
                <SafeAreaView style={styles.bodyModal}>
                    {/* Cabecera del modal (Verde con título y la X para cerrar) */}
                    <View style={styles.headerModal}>
                        <Text style={styles.headerModalText}>
                            Formulario de Registro de Producto
                        </Text>
                        <Pressable
                            onPress={() => setModalVisible(false)}

                        >
                            <Text style={styles.closeButton}>X</Text>
                        </Pressable>
                    </View>

                    {/* Contenido / Formulario con ScrollView para poder desplazarse */}
                    <ScrollView contentContainerStyle={styles.contentModal}>
                        <Text style={styles.formTitle}>Formulario de Registro de Producto</Text>

                        {/* Contenedor de la Imagen Grande (La 'X' del boceto) */}
                        <View style={styles.imagePreviewContainer}>
                            <Image
                                source={{
                                    uri: Imagen || 'https://cdn-icons-png.flaticon.com/512/11065/11065775.png'
                                }}
                                style={styles.imagePreview}
                                resizeMode="cover"
                            />
                        </View>




                        <Text style={styles.inputText}>Nombre Producto</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ingresa el nombre del producto"
                            value={Name}
                            onChangeText={setName}
                        />


                        <Text style={styles.inputText}>Categoria</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ingresa la categoria del producto"
                            value={Categoria}
                            onChangeText={setCategoria}
                        />

                        <Text style={styles.inputText}>Descripcion</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ingresa la descripcion del producto"
                            value={Descripcion}
                            onChangeText={setDescripcion}
                        />

                        <Text style={styles.inputText}>Precio</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ingresa el precio del producto"
                            value={Precio}
                            onChangeText={setPrecio}
                        />

                        <Text style={styles.inputText}>Stock</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ingresa el stock del producto"
                            value={Stock}
                            onChangeText={setStock}
                        />

                        <Text style={styles.inputText}>Imagen</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ingresa la URL de la imagen"
                            value={Imagen}
                            onChangeText={setImagen}
                        />

                        {/* Botón para guardar */}
                        <Pressable
                            style={styles.saveButton}
                            onPress={saveProducts}
                        >
                            <Text style={styles.saveButtonText}>Guardar Producto</Text>
                        </Pressable>
                    </ScrollView>
                </SafeAreaView>
            </Modal>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000000ff',
    },
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#000000ff',
        paddingBottom: 16,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bodyListProducts: {
        flex: 1,
    },
    flatListContent: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 90,
    },
    card: {
        backgroundColor: '#ffffffff',
        borderColor: '#b0bec5',
        paddingVertical: 12,
        paddingHorizontal: 14,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1.5,
        borderColor: '#000000ff',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
        overflow: 'hidden',
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    cardInfo: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    cardText: {

        color: '#333333',
        fontSize: 14,
        lineHeight: 20,
        paddingVertical: 1,
    },
    cardLabel: {
        fontWeight: '500',
        color: '#222222',
    },
    emptyText: {
        textAlign: 'center',
        color: '#666',
        marginTop: 20,
        fontSize: 16,
    },
    fab: {
        position: 'absolute',
        right: 22,
        bottom: 30,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#000000ff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.28,
        shadowRadius: 4,
        elevation: 6,

    },
    fabText: {
        textAlign: 'center',
        color: '#ffffffff',
        fontSize: 10,
        fontWeight: 'bold',
        paddingHorizontal: 4,
    },
    bodyModal: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    headerModal: {
        backgroundColor: '#000000ff',
        paddingVertical: 18,
        paddingHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerModalText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
    },
    closeButton: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    contentModal: {
        padding: 20,
    },
    formTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 30,
        textAlign: 'center',


    },
    saveButton: {
        backgroundColor: '#000000ff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 6,
        alignSelf: 'flex-start',
    },
    saveButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },

    inputText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 4,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000000ff',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 12,
        backgroundColor: '#ffffff',
    },
    imagePreviewContainer: {

        width: 250,
        height: 250,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 12,
        backgroundColor: '#ffffff',

    },
    imagePreview: {
        width: '130%',
        height: '130%',
        borderRadius: 10,
        resizeMode: 'cover',

    },

    searchText: {

        paddingHorizontal: 16,
        paddingTop: 12,
        backgroundColor: '#f8f9fa',

    },
    searchTextInput: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ced4da',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        fontSize: 14,
    }
});
