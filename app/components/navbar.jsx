function Navbar(){
    return(
        <nav className="bg-red-900 w-full">
      <div class="nav-container flex">
    <div class="logo">
        <h1>Blog</h1>
    </div>
    <div class="link">
        <ul className="flex">
            <li className="visibility: hidden">Product</li>
            <li className="visibility: hidden">Resourse</li>
            <li className="visibility: hidden">Education</li>
            <li className="visibility: hidden">Pricing</li>
        </ul>
    </div>
    <button>Get a Demo</button>
    <button>Free Trial</button>
</div>      
        </nav>


    )
}
export default Navbar;