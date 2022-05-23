// INTERFACES
import { ICity } from '../../interfaces';

// Data user to populate the dropdown button
export const cities: Array<ICity> = [{
  lisbon: {
    lat: 38.736946,
    lon: -9.142685
  },
  }, {
  madrid: {
    lat: 40.416775,
    lon: -3.703790
  },
  }, {
  paris: {
    lat: 48.864716,
    lon: 2.349014
  }
  }, {
  rome: {
    lat: 41.902782,
    lon: 12.496366
  }
  }, {
  amsterdam: {
    lat: 52.377956,
    lon: 4.897070
  }
  }, {
  berlin: {
    lat: 52.520008,
    lon: 13.404954
  }
  },
];

// Data used to choose witch icon to display
export const icon = {
  _01d: 'day',
  _01n: 'night',
  _02d: 'cloudy-day-1',
  _02n: 'cloudy-night-1',
  _03d: 'cloudy-day-3',
  _03n: 'cloudy-night-3',
  _04d: 'cloudy',
  _04n: 'cloudy',
  _09d: 'rainy-2',
  _09n: 'rainy-4',
  _010d: 'rainy-3',
  _010n: 'rainy-6',
  _011d: 'thunder',
  _011n: 'thunder',
  _013d: 'snowy-3',
  _013n: 'snowy-5',
}