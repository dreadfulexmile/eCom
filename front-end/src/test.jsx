function Test(props) {
    console.log(props);
    // const Name='Sakeema';
    // const Age=18;
    // const City='Colombo'

    const Add=(a,b)=>{
        return a+b;
    }
    return(
        <>
        <h1>Hi, This is a test page!</h1>
        {/* <p>Btw, this is {Name}. I`m` {Age} years old and from {City}.</p>
        <p>I`m tryna show you a simple calculation in JS. I have declared a arrow function to add 2 numbers and get the result. Now if I gave the 10 and 25 the total/result will be {Add(10,25)}.</p> */}

        <h2>My name is {props.name}</h2>
        <h2>My name is {props.age}</h2>
        <h2>My name is {props.city}</h2>

        </>
    )
}
export default Test;