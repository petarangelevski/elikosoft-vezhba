import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import List from './List/List';
import EmptyView from './EmptyView/EmptyView';
import Filters from './Filters/Filters';
import './Home.css'
import Pagination from './Pagination/Pagination';

export const Home = ({ inputText }) => {

    const [list, setList] = useState([]);
    const [gender, setGender] = useState([]);
    const [seasons, setSeasons] = useState([]);
    let [filterTextvalue, updateFilterText] = useState('all1');
    let [filterSeasonText, updateSeasonText] = useState('all2');
    const [resultsFound, setResultsFound] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)
    

    useEffect(() => {
      async function getData(){
        const response = await Axios.get('http://localhost:3001/api/products');
        setList(response.data);
    
      }
      getData()
    }, [])


  useEffect(() => {
    async function getData(){
      const response = await Axios.get('http://localhost:3001/api/genders');
      setGender(response.data);
  
    }
    getData()
  }, [])

useEffect(() => {
  async function getData(){
    const response = await Axios.get('http://localhost:3001/api/seasons');
    setSeasons(response.data);

  }
  getData()
}, [])


    function onFilterValueSelected(filterValue){
      updateFilterText(filterValue);
      console.log(filterValue)

    }
    function onFilterSeasonValueSelected(filterValue){
      updateSeasonText(filterValue)
      console.log(filterValue)

    }

    let filteredProductList = list.filter((product) => {

      if (filterTextvalue === 'all1' && filterSeasonText === 'all2' ) {
        return product
      }
      else if(filterTextvalue && filterSeasonText === 'all2'){
        return product.gender === `${filterTextvalue}`;
      }   
      else if(filterTextvalue === `${product.gender}` && filterSeasonText === `${product.season}`){
        return product.gender === `${product.gender}` && product.season === `${product.season}`;
      }
      else if(filterTextvalue === `all1` && filterSeasonText){
        return product.season === `${filterSeasonText}`;
      }
    }) 
    
    let filteredTextProductList = filteredProductList.filter((el) => {
      if (inputText === '') {
        return el;
    }
    else {
        return el.product_name.toLowerCase().includes(inputText) || el.product_description.toLowerCase().includes(inputText)
    }
    })

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = filteredTextProductList.slice(firstPostIndex, lastPostIndex)

  return (
    <div>
      <h1 className='hero'>HAT SHOP</h1>
        <div className='home'>
          {/* Search Bar */}
          <Filters genders={gender} seasons={seasons} filterValueSelected={onFilterValueSelected} filterSeasonSelected={onFilterSeasonValueSelected} />
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <List list={currentPosts} /> : <EmptyView />}
          <Pagination
            totalPosts={filteredTextProductList.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>

  )
}
