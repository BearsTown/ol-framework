import '../src/ugis/ugis.css';

import ugisTest from '../src/ugis/ugisTest.js';


import uGisConfig from '../src/ugis/test_static/uGisConfig';

import Worlds from '../src/ugis/aaa/Worlds';
import Asia from '../src/ugis/aaa/Asia.js';


import axios from 'axios';
import _$ from 'jquery';

import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';


window.ugisTest = ugisTest;

window.axios = axios;

window.imfrom = new Asia('SouthKorea');
imfrom.whereRUFrom();

window.Worlds = Worlds;
window.Asia = Asia;


window.uGisConfig = uGisConfig;


axios({
  method: 'get',
  url: '/data/WMTSCapabilities.xml'
});





const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};

