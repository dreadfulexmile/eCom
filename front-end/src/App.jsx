import {Button} from '@/Components/ui/button';
import Navigation from './Components/Navigation';
import { Switch } from '@/Components/ui/switch';
import HeroGrid from './Components/HeroGrid';
import CasualInspiration from './Components/CasualInspiration'
import TrendingSection from './Components/TrendingSection';


const App =()=>{
  return(
    <>
    <Navigation/>
    <main className='flex flex-col gap-8 md:gap-12 pb-8'>
      <HeroGrid/>
      <CasualInspiration/>
      <TrendingSection></TrendingSection>
    </main>
    
    </>
  )
}

export default App
