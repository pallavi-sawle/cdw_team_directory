import React, { useState } from 'react';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for: ${searchQuery}`);
    }

    return (
        <div className='container background'>

            <nav className="navbar">
                <h1 className="navbar-brand text-white font-weight-bold" href="#"> Team </h1>

                        <div id='navbarpill'>
                            <form onSubmit={handleSearchSubmit}>
                                <button type="submit" id="searchradius1"><i className='fa fa-search'></i></button>
                                <input
                                    type="text"
                                    placeholder="Search here.."
                                    id="Searchherecolor"
                                    value={searchQuery}
                                    onChange={handleSearchInputChange} />
                            </form>
                        </div>
            </nav>

        </div>
    )
}

export default Navbar;