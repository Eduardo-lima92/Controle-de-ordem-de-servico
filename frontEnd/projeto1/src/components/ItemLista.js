import "./ItemLista.css"

const ItemLista = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.modelo}</td>
            <td>{props.serie}</td>
            <td>{props.tipo}</td>
            <td>{props.descricao}</td>
            <td>{props.observacao}</td>
            <td className="text-center">
                <i className="exclui text-danger fw-bold" title="Excluir">$#10008</i>
                <i className="altera text-success fw-bold ms-2" title="Excluir">$#10008</i>
            </td>
        </tr>
    );
};
export default ItemLista;