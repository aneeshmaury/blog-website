function Navbar(){
    return(
        <nav className="bg-slate-950 w-full">
      <div className="nav-container flex items-center justify-evenly py-2.5">
    <div className="logo">
        <h1 className="text-3xl text-white font-bold">Blog</h1>
    </div>
    <div className="link text-white ">
        <ul className="flex gap-9">
            <li className="hidden sm:block">Product</li>
            <li className="hidden sm:block">Resourse</li>
            <li className="hidden sm:block">Education</li>
            <li className="hidden sm:block">Pricing</li>
        </ul>
    </div>
    <div className="btn space-x-2">
         <button className="bg-black p-2.5 text-white hover:bg-blue-950 ">Get a Demo</button>
    <button className="bg-blue-900 p-2.5 text-white hover:bg-sky-700">Free Trial</button> 
    </div>
  
</div>      
        </nav>


    )
}
export default Navbar;