const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs
} = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyBtKuqVovbagaHPPmeQowFQl05OmfmlDY4",
    authDomain: "primeiro-projeto-ctw.firebaseapp.com",
    projectId: "primeiro-projeto-ctw",
    storageBucket: "primeiro-projeto-ctw.appspot.com",
    messagingSenderId: "942411532723",
    appId: "1:942411532723:web:c6a0352035f1298c5e63c6",
    measurementId: "G-YTTFB33P5Q"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function save(nomeTabela, id, dado) {

    if (id) {
        const referencesEntity = await setDoc(doc(db, nomeTabela, id), dado);;
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referencesEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referencesEntity.id
        }
        return savedData;
    }
}

async function get(nomeTabela) {
    const tableRef = collection(db, nomeTabela);

    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
        console.log(doc.id, " => ", doc.data());
    });
    return lista;
}

module.exports = {
    save
}