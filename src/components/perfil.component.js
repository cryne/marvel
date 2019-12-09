import React, {Component} from 'react';
import uno from "./comics/uno.jpg";
import dos from "./comics/dos.jpg";
import tres from "./comics/tres.jpg";
import cuatro from "./comics/cuatro.jpg";
import cinco from "./comics/cinco.jpg";
import seis from "./comics/seis.jpg";
import siete from "./comics/siete.jpg";
import ocho from "./comics/ocho.jpg";
import nueve from "./comics/nueve.jpg";
import diez from "./comics/diez.png";
import once from "./comics/once.jpg";
import doce from "./comics/doce.jpg";
import Perfil from "./comics/perfil.jpg";
export default class perfil extends Component {
    render(){
        return (
            <div>
                <section className="element">
                    <header className="container-fluid bg-secondary element-header user">
                        <div className="element-shadow"></div>
                        <section className="element-header-content">
                            <div className="container h-100">
                                <div className="col-12 col-md-3 text-center">
                                    <div className="group-type bg-user mt-4">Usuario</div>
                                    <div className="element-image my-2">
                                        <img src={Perfil} height="300" width="200"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-9 element-header-content-text">
                                    <h1 className="element-title my-2">
                                        <a className="text-light">EL_Bromas</a>
                                    </h1>
                                    
                                </div>
                            </div>
                        </section>
                    </header>
                </section>
            </div>
        )
    }
}