import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER} from '../../utils/queries';
import '../styles/Home.css'
//import { css } from '@emotion/react';
//import { DropdownMenu } from '../utils/dropdown'

// const style = css`
//   color: grey;
// `


const Home = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache"
  });


  return (
    <div >
      
      <div className='text' >
        <h2>Would you like to submit a ticket?</h2>
        <h3>To get started, please Login or Signup!</h3>
       
      </div>
      
    </div>
  );
};

 export default Home;
