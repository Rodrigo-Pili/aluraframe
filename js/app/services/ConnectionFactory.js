var ConnectionFactory = (function (){

    const stores = ['negociacoes'];
    const version = 3;
    const dbName = 'aluraframe';
    var connection = null;
    var close = null;

    return class ConnectionFactory {

        constructor(){

            throw new Error('Essa classe não pode ser instaciada!');
        }

        static getConnection(){

            return new Promise((resolve, reject) => {

                let openResquest = window.indexedDB.open(dbName, version);

                openResquest.onupgradeneeded = e => {

                    ConnectionFactory._createStore(e.target.result);                
                };

                openResquest.onsuccess = e => {

                    if(!connection) {
                     
                        connection = e.target.result;
                        close = connection.close.bind(connection);

                        connection.close = function(){

                            throw new Error('Você não pode fechar a conexão!');
                        };
                    }

                    resolve(connection);
                };

                openResquest.onerror = e => {

                    console.log(e.target.error);
                    reject(e.target.error.name)
                }
            });
        }

        static _createStore(connection){

            if(connection.objectStoreNames.contains(store)) 
                connection.deleteObjectStore(store);

            connection.createObjectStore(store, {autoIncrement: true});
        }

        static closeConnection(){

            if(connection){

                close();
                connection = null;
            }
        }
    }
})();