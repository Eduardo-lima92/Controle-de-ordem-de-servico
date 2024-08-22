import "./ItemLista.css"

const ItemLista = ( {id, modelo, serie, tipo, descricao, observacao, excluirClick} ) => {
    
    return (
        <tr>
            <td>{id}</td>
            <td>{modelo}</td>
            <td>{serie}</td>
            <td>{tipo}</td>
            <td>{descricao}</td>
            <td>{observacao}</td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-success fw-bold ms-2" title="Excluir">&#9998;</i>
            </td>
        </tr>
    );
};
export default ItemLista;