import Test from './test'
import {Button} from '@/Components/ui/button';
import Navigation from './Components/Navigation/Navigation';
import SampleButton from './SampleButton';
import { Switch } from '@/Components/ui/switch';


const App =()=>{
  return(
    <>
      {/* <h1>HelloWorld..p:</h1>
      <Button/>
      <Test name='SK' age={18} city='CMB'/> */}

      <Navigation/>
      <Button variant={"outline"}>Click Me </Button>
      <Switch></Switch>


      {/* <SampleButton>The Sample Button</SampleButton> */}

    </>
    
  )
}

export default App
