import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER} from '../../utils/queries';
//import { css } from '@emotion/react';
//import { DropdownMenu } from '../utils/dropdown'

// const style = css`
//   color: grey;
// `

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    <div >
      <div >
        <h1>Welcome to Tech Tips!</h1>
      </div>
      <div >
        <h2>Would you like to submit a ticket?</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {matchupList.map((matchup) => {
              return (
                <li key={matchup._id}>
                  <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                    {matchup.tech1} vs. {matchup.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default Home;
