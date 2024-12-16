import React from "react";

export const Jumbotron = () => {
    return (
        <div className="container py-5">
            <div className="p-5 mb-4 rounded-3 bg-secondary text-white">
                <div className="container-fluid py-5">
                    <h1 className="display-4 fw-bold">Bienvenidos a Dulce Tentación</h1>
                    <p className="col-md-8 mx-auto fs-4">El lugar donde el sabor se convierte en arte. Creamos pasteles y postres con los mejores ingredientes, cada uno de nuestros productos está hecho con amor y dedicación. Ven y disfruta de un pedazo de felicidad!</p>
                    <a className="btn btn-light btn-lg" href="#" role="button">Explorar delicias</a>
                </div>
            </div>
        </div>

    )
}