import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className='cotainer-fluid bg-dark'>
        <nav className='container navbar navbar-expand navbar-dark text-light justify-content-between'>
            <div>
                <h2 className=''>WeSpeak</h2>
            </div>

            <div className="navbar-nav nav-underline">
                <a href="" className="nav-link">Home</a>
                <a href="" className="nav-link">Dashoard</a>
            </div>

            <div>
                <button className='btn btn-primary'>Connect To MetaMask</button>
            </div>
        </nav>

    </div>
</div>
  )
}

export default Navbar