import A from './components/A'
import B from './components/B'
import C from './components/C'

function App() {
  return (
    <div className='flex justify-around mt-15'>
      <A /> {/* selector of component A, by using components we can create an element */}
      <B />
      <C />
    </div>
  )
}

export default App