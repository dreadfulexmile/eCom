function Button() {
        
    const handleClick = ()=>{
        alert('Button Clicked!');
    };

    return <Button onClick={handleClick}> Click Me </Button>
}

export default Button;