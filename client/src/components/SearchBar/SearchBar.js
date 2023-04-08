import React, { Fragment } from 'react';
import './SearchBar.css';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = ({ value, inputHandler }) => {
  let navigate = useNavigate();
	// views
	const showNavigation = () => (
		<nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: 'transparent'}}>
			<Link to='/' className='navbar-brand'>
			</Link>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarTogglerDemo02'
				aria-controls='navbarTogglerDemo02'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
				<ul className='navbar-nav mt-2 mt-lg-0'>
						<Fragment>
							<li className='nav-item'>
								<Link to='/' className='nav-link'>
									<i className='fas fa-home'></i> Home
								</Link>
							</li>
						</Fragment>
				</ul>
    <div className="search">
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
      id="outlined-basic"
      onChange={inputHandler}
      fullWidth
      label="Search"
    />
  </div>
			</div>
		</nav>
	);

	// render
	return <header id='header'>{showNavigation()}</header>;
};

export default SearchBar;
