import Header from './components/Header'
import ContactCard from './components/ContactCard'

export default function App() {
  return (
    <div>
      <Header />
      <main style={{border: "3px solid white"}}>
        <ContactCard />
      </main>
    </div>
  )
}
