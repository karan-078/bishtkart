import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { STATUS } from '../utils/Status';
import Loader from '../components/Loader';
import ProductList from '../components/ProductList';
import { fetchAsyncSearchProduct, getSearchProducts, setSearchTerm, getSearchProductsStatus, clearSearch } from '../store/SearchSlice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const {searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);

  if(searchProducts?.length === 0){
    return (
      <div className='h-70vh'>
        <div className='fw-5 text-danger py-5'>
          <h3>No Products found.</h3>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className=' bg-[#fff] grid place-items-center mb-9'>
        <div className=' w-[90vw] h-full m-auto'>
          <div className=''>
            <div className='mt-6 mb-6  text-xl text-[#adc8d4]' >
                <h6 >your search item</h6>
            </div>
            <br />
            {
              searchProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {searchProducts} />
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPage;