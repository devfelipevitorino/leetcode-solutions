var twoSum = function(lista, alvo) {
    const map = new Map(); 

    for (let i = 0; i < lista.length; i++) {
        const complemento = alvo - lista[i];

        if (map.has(complemento)) {
            return [map.get(complemento), i];
        }

        map.set(lista[i], i);
    }

    return []; 
};