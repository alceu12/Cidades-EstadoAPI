import React, { useState, useEffect } from 'react';

const SelectEstadoIBGE = ({ onEstadoSelect }) => {
    const [estados, setEstados] = useState([]);

    useEffect(() => {
        const loadEstados = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                if (!response.ok) {
                    throw new Error("Ops! Algo deu errado :(");
                }
                const data = await response.json();
                setEstados(data);
            } catch (error) {
                alert("Ops erro");
            }
        };
        loadEstados();
    }, []);

    return (
        <select onChange={(e) => onEstadoSelect(e.target.value)}>
            <option value="">Selecione um estado</option>
            {estados.map(estado => (
                <option key={estado.id} value={estado.sigla}>
                    {estado.nome}
                </option>
            ))}
        </select>
    );
};

export default SelectEstadoIBGE;
