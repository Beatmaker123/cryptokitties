import Layout from '../components/Layout'
import BrowseSearchBar from '../components/BrowseSearchBar'
import Filter from '../components/Filter'
import KittiesItem from '../components/KittiesItem'

const Marketplace = () => (
  <Layout>
    <div className='BrowsePage'>
      <div className='BrowseSearchBar'>
        <BrowseSearchBar />
      </div>
      <div className='BrowseFilterBar'>
        <Filter />
      </div>
      <div className='KittiesGallery'>
        <div className='Container Container--lg'>
          <div className='KittiesGrid'>
            <KittiesItem />
          </div>
        </div>
      </div>
      <div className='KittiesGalleryPagination'>
        <div className='Pagination'>
          <div className='Pagination-pages'>
            <button className='Pagination-page Pagination-page--active'>
              1
            </button>
            <button className='Pagination-page'>2</button>
            <button className='Pagination-page'>3</button>
            <button className='Pagination-page'>4</button>
            <button className='Pagination-page'>5</button>
            <button className='Pagination-page'>6</button>
            <button className='Pagination-page'>7</button>
            <button className='Pagination-page'>8</button>
            <button className='Pagination-page'>9</button>
            <button className='Pagination-page'>10</button>
          </div>
          <div>
            <button className='Pagination-button Pagination-button--disabled'>
              Previous
            </button>
            <button className='Pagination-button'>Next</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Marketplace
