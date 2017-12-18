import Layout from '../components/Layout'
import BrowseSearchBar from '../components/BrowseSearchBar'
import Filter from '../components/Filter'
import KittiesItem from '../components/KittiesItem'
import Pagination from '../components/Pagination'

const Marketplace = (props) => (
  <Layout>
    <div className='BrowsePage'>
      <div className='BrowseSearchBar'>
        <BrowseSearchBar />
      </div>
      <div className='BrowseFilterBar'>
        <Filter url={props.url} />
      </div>
      <div className='KittiesGallery'>
        <div className='Container Container--lg'>
          <div className='KittiesGrid'>
            <KittiesItem />
          </div>
        </div>
      </div>
      <div className='KittiesGalleryPagination'>
        <Pagination />
      </div>
    </div>
  </Layout>
)

export default Marketplace
