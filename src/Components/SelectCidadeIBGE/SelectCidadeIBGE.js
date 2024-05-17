import React, { useState, useEffect } from 'react';

const SelectCidadeIBGE = ({ estado }) => {
    const [cidades, setCidades] = useState([]);

    useEffect(() => {
        const loadCidades = async () => {
            try {
                let response;
                if (estado) {

                    response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
                } else {
                    response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome');
                }

                if (!response.ok) {
                    throw new Error("Ops! Algo deu errado :(");
                }

                const data = await response.json();
                setCidades(data);
            } catch (error) {
                alert("Ops erro");
            }
        };

        loadCidades();
    }, [estado]);

    return (
        <select>
            <option value="">Selecione uma cidade</option>
            {cidades.map(cidade => (
                <option key={cidade.id} value={cidade.nome}>
                    {cidade.nome}
                </option>
            ))}
        </select>
    );
};

export default SelectCidadeIBGE;
