// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { DataFiree } from './firebase';

// const docRef = DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos');

//añadir Marca de tiempo del servidor//////////////////////////////
// Update the timestamp field with the value from the server
const updateTimestamp = (referencia) => {
  referencia.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};

const elementName = document.getElementById('elementName');

//escribir
const DatabaseNewFireElement = () => {
  DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
    .set({
      first: 'lan',
      middle: 'ison',
      last: 'Turing',
      born: 19,
    })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  updateTimestamp();
};

//leer documentos/////////////////////////////////////////////
const obtenerDocumento = () => {
  docRef.get().then((doc) => {
    if (doc.exists) {
      console.log('Document data:', doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }).catch((error) => {
    console.log('Error getting document:', error);
  });
};

const obtenerDocumentos = () => {
  DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
    .collection('elementos')
    .onSnapshot((querySnapshot) => {
      const docsElement = [];
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        docsElement.push({ ...doc.data(), id: doc.id });
      });
    });
};

// eslint-disable-next-line import/prefer-default-export
// export { DatabaseFireSet, obtenerDocumento };
// export { DatabaseFire };

// const [links, setLinks] = useState([]);
// const [currentId, setCurrentId] = useState('');

// const getLinks = async () => {
//   DataFiree.collection('links').onSnapshot((querySnapshot) => {
//     const docs = [];
//     querySnapshot.forEach((doc) => {
//       docs.push({ ...doc.data(), id: doc.id });
//     });
//     setLinks(docs);
//   });
// };

// const onDeleteLink = async (id) => {
//   if (window.confirm('are you sure you want to delete this link?')) {
//     await DataFiree.collection('links').doc(id).delete();
//     toast('Link Removed Successfully', {
//       type: 'error',
//       autoClose: 2000,
//     });
//   }
// };

// useEffect(() => {
//   getLinks();
// }, []);

const addOrEditElement = (objectx) => {
  const fireReferencia = DataFiree.collection('BracoIndex').doc('team').collection('slk').doc('elementos')
    .collection('elementos')
    .doc(objectx.NombreDelElemento);

  fireReferencia.set(objectx)
    .then(() => {
      console.log('Element added successfully');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });

  updateTimestamp(fireReferencia);

};
export { DatabaseNewFireElement, obtenerDocumento, addOrEditElement, obtenerDocumentos };
