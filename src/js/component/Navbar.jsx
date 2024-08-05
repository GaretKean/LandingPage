import React from 'react';

const Navbar = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Features</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Pricing</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>



        <nav className="navbar navbar-expand-lg navbar-light bg-dark px-5">
            {/* <div className="container-fluid"> */}
            <a className="navbar-brand text-white" href="#">Navbar</a>
            <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-white"></span>
            </button>
            <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Contact</a>
                    </li>


                </ul>

            </div>
            {/* </div> */}
        </nav>
    );
};

export default Navbar;