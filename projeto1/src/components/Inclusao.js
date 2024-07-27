const Inclusao = () => {
    return (
        <div className="container">
            <h4 className="fst-italic mt-3 text-center">Cadastro de Ordem de Serviço</h4>
            <form>
                <div className="from-group">
                    <label htmlFor="modelo">Modelo do Equipamento:</label>
                    <input type="text" className="form-control" id="modelo" required 
                    autoFocus />
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="number">Numero de serie:</label>
                            <input type="text" className="form-control" id="serie" required></input>
                        </div>                       
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="tipo">Tipo de Manutenção</label>
                            <select className="form-control" id="tipo" name="tipo">
                                <option value="corretiva">Corretiva</option>
                                <option value="preventiva">Preventiva</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea className="form-control" rows="4" cols="50" placeholder="Descrição..." id="descricao" required></textarea>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="observacao">Observações:</label>
                    <input type="textarea" className="form-control" id="observacao" required></input>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Salvar"></input>
                <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar"></input>
            </form>
        </div>
    )
}
export default Inclusao;