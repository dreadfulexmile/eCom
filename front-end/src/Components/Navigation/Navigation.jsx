function Navigation() {
    return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-16">
      <div>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="font-bold text-2xl">
            Mebius
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              {
                path: "/shop/shoes",
                label: "Shoes",
              },
              {
                path: "/shop/tshirts",
                label: "T-Shirt",
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
            ].map((item) => {
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className="font-medium hover:text-gray-600"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-1">
              <Search size={20} />
            </button>
            <a
              href="/shop/cart"
              aria-label="Shopping Bag"
              className="p-1 relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {0}
              </span>
            </a>
            {/* <SignedIn>
              <UserButton />
            </SignedIn> */}
            <div className="hidden md:block">
              {/* <SignedOut> */}
              <div className="flex items-center gap-4">
                <a href="/sign-in">Sign In</a>
                <a href="/sign-up">Sign Up</a>
              </div>
              {/* </SignedOut> */}
            </div>

            {/* Mobile menu button */}
            {/* <button
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button> */}
          </div>
        </div>
      </div>
    </header>
    )
}

export default Navigation;