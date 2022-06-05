import Nav from'./Nav'
import Hero from'./Hero'
import Cards from './Cards'
import data from'./data.js'

function App() {
  const card = data.map(data => {
    return <Cards 
    key={data.id}
    image={data.coverImg}
    title={data.title}
    price={data.price}
    rate={data.stats.rating}
    location={data.location}
    review = {data.stats.reviewCount}
    spots = {data.openSpots}
  />
  })
  return (
    <div className="app">
      <Nav />
      <Hero />
      <section className='cards-list'>
        {card}
      </section>
    </div>
  );
}

export default App;
