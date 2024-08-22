import { useState, useEffect } from "react";
import { inAxios } from "../config_axios";
import ItemLista from "./ItemLista";


const Edicao = () => {
    const [ordens, setOrdens] = useState([]);

    const obterOrdem = async () => {
        try {
            const lista = await inAxios.get("ordens");
            setOrdens(lista.data);            
        } catch (error) {
            alert(`Erro... Não foi possivel obter os dados: ${error}`)
        }
    };
    useEffect(() => {
        obterOrdem();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3">Edição de Ordem de serviço</h4>
                </div>
                <div className="col.sm.5">
                    <form>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control"
                                placeholder="N° ordem de serviço" required />
                            <input type="submit" className="btn btn-primary" value="Pesquisar"/>
                            <input type="Todos" className="btn btn-danger" value="Todos"/>
                        </div>
                    </form>
                </div>
            </div>

            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>OS</th>
                        <th>Modelo</th>
                        <th>serie</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    {ordens.map((ordem) => (
                        <ItemLista key={ordem.id} id={ordem.id} modelo={ordem.modelo}
                        serie={ordem.serie} tipo={ordem.tipo} descricao={ordem.descricao}
                        observacao={ordem.observacao} />
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Edicao;