const MenuSuperior = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">Controle de Ordem de Serviço</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inclusão</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Manutenção</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resumo</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default MenuSuperior;