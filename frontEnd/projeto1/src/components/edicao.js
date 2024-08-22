import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { inAxios } from "../config_axios";
import ItemLista from "./ItemLista";


const Edicao = () => {
    const [ordens, setOrdens] = useState([]);
    const { register, handleSubmit, reset } = useForm();

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

    const filtrarLista = async (campos) => {
        try {
            const lista = await inAxios.get(`ordens/filtro/${campos.palavra}`);
            lista.data.length
            ? setOrdens(lista.data)
            : alert("Não há Ordem de serviço com esse numero...")
        } catch (error) {
            alert(`Erro... Não foi possivel obter os dados: ${error}`)
        }
    };

    const excluir = async ( id ) => {
        if (!window.confirm(`Confirma a exclusão da OS "${id}"?`)) {
            return;
        }
        try {
            await inAxios.delete(`ordens/${id}`);
            setOrdens(ordens.filter((ordem) => ordem.id !== id));
        } catch (error) {
            alert(`Erro... Não foi possivel excluir esta OS: ${error}`);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <h4 className="fst-italic mt-3">Edição de Ordem de serviço</h4>
                </div>
                <div className="col-sm-5">
                    <form onSubmit={handleSubmit(filtrarLista)}>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control"
                                placeholder="N° Ordem de Serviço" required {...register("palavra")} />
                            <input type="submit" className="btn btn-primary" value="Pesquisar"/>
                            <input type="button" className="btn btn-danger" value="Todos"
                            onClick={() => { reset({palavra: ""}); obterOrdem(); } } />
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
                        observacao={ordem.observacao} excluirClick={() => excluir(ordem.id)}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Edicao;