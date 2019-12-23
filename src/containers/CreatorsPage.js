import React from 'react';
// import Loader from 'react-loader';

import Creator from '../components/Creator';
import Spinner from '../components/Spinner';

class CreatorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creatorsData: [],
      loaded: false
    }
  }

  componentDidMount(){
    const url = 'https://api.foriio.com/api/v1/promoted/users';
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error(`Call to ${url} failed.`);
          throw Error(response.statusText);
        }
        response.json().then((data) => {
          this.setState({ creatorsData: data.users });
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() =>{
        this.setState({ loaded: true });
      });
  }

  render(){
    const {
      creatorsData,
      loaded
    } = this.state;

    return (
      <section className="creators-page">
        { loaded &&
          creatorsData.length > 0 && creatorsData.map((creatorData) => {
            return (
              <Creator key={ creatorData.id } creator={ creatorData } />
            )
          })
        }
        {!loaded &&
          <Spinner />
        }
        
      </section>
    )
  }
}

export default CreatorsPage;