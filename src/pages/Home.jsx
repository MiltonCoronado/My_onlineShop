import { MyContext } from '../components/Context.jsx';
import Card from '../components/Card.jsx';
import ProductDetail from '../components/ProductDetail.jsx';

const Home = () => {
  const context = MyContext();

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredProducts?.length > 0) {
        return (
          context.filteredProducts?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything</div>
        )
      }
    } else {
      return (
        context.products?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

  return (
    <div>
      <div>
        <h1 className='flex justify-center mb-4'>Home</h1>
      </div>
      <div className='flex justify-center'>
        <input
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none' 
          type='text' 
          placeholder='search a product'
          onChange={(event) => {
            context.setSearchByTitle(event.target.value);
          }}  
        />
      </div>
      <div className='grid gap-x-4 gap-y-6 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </div>
  )
};

export default Home;