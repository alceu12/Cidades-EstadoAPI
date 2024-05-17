import React, { useState } from 'react';
import SelectCidadeIBGE from '../SelectCidadeIBGE/SelectCidadeIBGE';
import SelectEstadoIBGE from '../SelectEstadoIBGE/SelectEstadoIBGE';


const Home = () => {
    const [estadoSelecionado, setEstadoSelecionado] = useState('');

    return (
        <div>
            <h1>Exercício</h1>
            <div>
                <h2>Componentes Individuais</h2>
                <div>
                    <label>Selecione uma cidade:</label>
                    <SelectCidadeIBGE estado="SC" />
                </div>
                <div>
                    <label>Selecione um estado:</label>
                    <SelectEstadoIBGE onEstadoSelect={() => {}} />
                </div>
            </div>
            <div>
                <h2>Componente Automatizado</h2>
                <div>
                    <label>Selecione um estado:</label>
                    <SelectEstadoIBGE onEstadoSelect={setEstadoSelecionado} />
                </div>
                <div>
                    <label>Selecione uma cidade:</label>
                    <SelectCidadeIBGE estado={estadoSelecionado} />
                </div>
            </div>
        </div>
    );
};

export default Home;
