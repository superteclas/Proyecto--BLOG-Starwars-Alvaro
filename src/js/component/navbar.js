export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    const handleRemoveFavorite = (favoriteName) => {
        actions.removeItem(favoriteName);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3" style={{ width: '100%' }}>
            {/* Enlace a la vista Home */}
            <Link to="/" className="navbar-brand ml-0 h1" style={{ width: '7%', marginLeft: '7em' }}>
                <img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="Logo" style={{ width: '100%', height: 'auto' }} />
            </Link>
            <div className="dropdown ml-auto">
                <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos ({favorites.length})
                </a>
                <ul className="dropdown-menu">
                    <li className="dropdown-header">Favoritos</li>
                    {favorites.map((favorite, index) => (
                        <li key={index}>
                            <span className="dropdown-item">{favorite}</span>
                            <i className="fa-solid fa-trash" onClick={() => handleRemoveFavorite(favorite)}></i>
                        </li>
                    ))}
                    {favorites.length === 0 && (
                        <li>
                            <span className="dropdown-item">No hay favoritos</span>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
