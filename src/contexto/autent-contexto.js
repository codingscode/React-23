import React from 'react';

const autentContexto = React.createContext({autenticado: false, login: () => {}});

export default autentContexto;