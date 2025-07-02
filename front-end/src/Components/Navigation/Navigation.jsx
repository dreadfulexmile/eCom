function Navigation() {
    return(
        <header className="navbar">
            <div className="logo">Mebius</div>
            <nav className='hidden md:flex space-x-8'>
                {/* <a href="">Shoes</a>
                <a href="">T-Shirts</a>
                <a href="">Shorts</a>
                <a href="">Pants</a>
                <a href="">Socks</a> */}

                {[
                    {
                        path: "/shop/shoes",
                        label: "Shoes",
                    },
                    {
                        path: "/shop/tshirts",
                        label: "T-Shirts",
                    },
                    {
                        path: "/shop/shorts",
                        label: "Shorts",
                    },
                    {
                        path: "/shop/pants",
                        label: "Pants",
                    },
                    {
                        path: "/shop/socks",
                        label: "Socks",
                    },
                ].map((item)=>{
                    return(
                        <a
                        href={item.path}
                        className='font-medium hover:text-gray-600'>
                            {item.label}
                        </a>
                    );
                })}
            </nav>

            <div className="controls">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg></div>
                <a href="">Sign in</a>
                <a href="">Sign Up</a>
            </div>
        </header>
    )
}

export default Navigation;