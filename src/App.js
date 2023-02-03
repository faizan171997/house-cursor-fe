import logo from './logo.svg';
import './App.css';

import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
import React from 'react';

import services from './services';
import endpoints from './services/endpoints';
import utilities from './utilities';

var charts = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = { chartIdsArr: [] };
  }

  async componentDidMount() {
    let { chartIdsArr } = this.state

    chartIdsArr = await Promise.all(endpoints.communities.map(async (community, i) => {
      const communityRes = await services.getApartment(community.endpoint)

      if (i < charts.length && charts[i]) charts[i].destroy();

      charts[i] = new Chart(
        document.getElementById(community.id),
        {
          type: 'line',
          data: {
            labels: communityRes.map(dayRecord => utilities.prettifyDate(dayRecord.fetchDate)),
            datasets: communityRes[communityRes.length - 1].communityInfos[0].apartmentInfos.map(apartmentInfo => {
              return {
                label: apartmentInfo.name,
                data: communityRes.map(dayRecord => dayRecord.communityInfos[0].apartmentInfos.filter(mApartmentInfo => mApartmentInfo.name == apartmentInfo.name)[0]?.cost)
              }
            }),
          }
        }
      );

      console.log('community.id', community.id);

      return community.id;
    }));

    this.setState({ chartIdsArr });

    console.log("API response: ", chartIdsArr);
  }

  render() {
    return (
      <div className="App">
        <div class="w-800 centered">
          <h1>House Cursor</h1>
          {endpoints.communities.map(community =>
            <div class="p-1">
              <h2>{community.label}</h2>
              <canvas id={community.id}></canvas>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;