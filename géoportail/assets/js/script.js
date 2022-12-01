mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsYWhlbGZhcmlzc2kiLCJhIjoiY2ttb3p1Yzk3Mjl2bzJ2bno3OGlqcjJ2bCJ9.pErPZNgS_t5jzHlsp_XyRQ';
// Change a map's style
let S = "mapbox://styles/drissdrdoxi/cl8owuj4b001q14ph74dfszi9"
let T = ['Savana','polynésie','Asie','Antilles','Congo','Mexique',
         'Pérou','Brésil','Labyrinthe','ravine','Chine','Japon','Andalous',
         'volière','vivarium','pépinière','musée','mosquée','WC1','WC2',
         'Café','Entrée']
let C = [-6.7665798,34.0953559,-6.7686174,34.0967758,-6.7679920,34.0963104,-6.7676282,34.0960667,-6.7650915,34.0939415,
         -6.7678545,34.0956305,-6.7674213,34.0953564,-6.7674662,34.0957287,-6.7659743,34.0946760,-6.7688764,34.0960333,
         -6.7683925,34.0964594, -6.7692427,34.0962986,-6.7685494,34.0959792,-6.76528842,34.09421557,-6.76781571,34.09600804,
         -6.7670779,34.0949942,-6.76889836,34.09634525,-6.76807271,34.09603533,-6.76902813,34.09624836, -6.76506489,34.09378073,
         -6.76499209,34.09372678,-6.76472871,34.09417972
        ]
let D = ['Savana','La Polynésie','Asie Méridionale','Antilles','Congo','Mexique',
         'Pérou','Brésil','Le Labyrinthe','La ravine verte','China','Japan','Andalous',
         'La volière','Le vivarium','La pépinière','le musée','La mosquée','WC','WC',
         'Café','Entrance']
function len(r) {
          if (r == 1){
            return 10;}
          if (r == 2) {
            return 13;}
          if (r == 3) {
            return 16;} 
          else {
            return 22}
        }
function dep(p) {
          if (p == 1){
            return 0;}
          if (p == 2) {
            return 10;}
          if (p == 3) {
            return 13;} 
          else {
            return 16;}
        }
let r = 0
let p = 0
let t = 0
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: S, // style URL
  zoom: 17.3, // starting zoom
  center: [-6.766853837666819,34.095226310589915],
  projection: "globe", // display map as a 3D globe
  minZoom: 10
});
// :

// 
const layerList = document.getElementById('menu2');
const inputs = layerList.getElementsByTagName('input');
   
for (const input of inputs) {
input.onclick = (layer) => {
const layerId = layer.target.id;
r = parseFloat(layerId);
p = parseFloat(layerId);

const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');
 
for (const input of inputs) {
input.onclick = (layer) => {
const layerId = layer.target.id;
S = 'mapbox://styles/mapbox/' + layerId;
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: S, // style URL
  zoom: 17.3, // starting zoom
  center: [-6.766853837666819,34.095226310589915],
  projection: "globe", // display map as a 3D globe
  minZoom: 10
});


// tag
map.addControl(
  new mapboxgl.AttributionControl({
    customAttribution:"By Ennatiqi And Bougair"
  })
);
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
// pixels the map pans when the up or down arrow is clicked
const deltaDistance = 100;

// degrees the map rotates when the left or right arrow is clicked
const deltaDegrees = 25;
function easing(t) {
return t * (2 - t);
} 
// 
map.on('load', () => {
map.getCanvas().focus();
map.getCanvas().addEventListener(
'keydown',
(e) => {
e.preventDefault();
if (e.which === 38) {
// up
map.panBy([0, -deltaDistance], {
easing: easing
});
} else if (e.which === 40) {
// down
map.panBy([0, deltaDistance], {
easing: easing
});
} else if (e.which === 37) {
// left
map.easeTo({
bearing: map.getBearing() - deltaDegrees,
easing: easing
});
} else if (e.which === 39) {
// right
map.easeTo({
bearing: map.getBearing() + deltaDegrees,
easing: easing
});
}
},
true
);
});
// 
// Add geolocate control to the map.
map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  // When active the map will receive updates to the device's location as it changes.
  trackUserLocation: true,
  // Draw an arrow next to the location dot to indicate which direction the device is heading.
  showUserHeading: true
  })
  );

// style...
map.on("style.load", () => {
  map.setFog({}); // enable atmosphere and stars
});
 
map.on("load", () => {
//  sol
  map.addSource("sol", {
    type: "geojson",
    // Use a URL for the value for the `data` property.
    data: "data/sol.geojson",
  });
  map.addLayer({
        id: "sol",
        type: "fill",
        source: "sol",
        paint: {
          "fill-color": "#ECF87F",
        },
  });
//  sol
  map.addSource("passage", {
    type: "geojson",
    // Use a URL for the value for the `data` property.
    data: "data/pass.geojson",
  });
  map.addLayer({
        id: "passage",
        type: "fill",
        source: "passage",
        paint: {
          "fill-color": "#E97451",
        },
  });
//  eau
  map.addSource("eau", {
    type: "geojson",
    // Use a URL for the value for the `data` property.
    data: "data/eau.geojson",
  });
  map.addLayer({
        id: "eau",
        type: "fill",
        source: "eau",
        paint: {
          "fill-color": "#0E86D4",
        },
  });  
//  vegetation
  map.addSource("Vegetation", {
    type: "geojson",
    // Use a URL for the value for the `data` property.
    data: "data/veg.geojson",
  });
  map.addLayer({
    id: "Vegetation",
    type: "fill-extrusion",
    source: "Vegetation",
    paint: {
      // Get the `fill-extrusion-color` from the source `color` property.
      "fill-extrusion-color": '#228b22',

      // Get `fill-extrusion-height` from the source `height` property.
      "fill-extrusion-height": 2,

      // Make extrusions slightly opaque to see through indoor walls.
      "fill-extrusion-opacity": 0.7
    },
  });
//  construction 3D
  map.addSource("Construction", {
    type: "geojson",
    // Use a URL for the value for the `data` property.
    data: "data/cst.geojson",
  });
  map.addLayer({
    id: "Construction",
    type: "fill-extrusion",
    source: "Construction",
    paint: {
      // Get the `fill-extrusion-color` from the source `color` property.
      "fill-extrusion-color": '#964B00',

      // Get `fill-extrusion-height` from the source `height` property.
      "fill-extrusion-height": 10,

      // Make extrusions slightly opaque to see through indoor walls.
      "fill-extrusion-opacity": 0.8
    },
  });
});
// markers  
for (let i = dep(p); i < len(r) ; i++) {
const geojson = {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'geometry': {
  'type': 'Point',
  'coordinates': [C[2*i],C[2*i+1]]
  },
  'properties': {
  'title': T[i],
  'description': D[i]
  }
  },
  ]
  };

map.on('load', function() {
  map.loadImage('assets/img/'+T[i]+'.png', function(error, image) { //this is where we load the image file 
      if (error) throw error;
      map.addImage('custom-marker'+T[i], image); //this is where we name the image file we are loading 
      map.addLayer({
          'id': 'markers'+T[i], //this is the name of the layer, it is what we will reference below 
          'type': "symbol",
          'source': { //now we are adding the source to the layer more directly and cleanly 
              type: "geojson",
              data: geojson // CHANGE THIS TO REFLECT WHERE YOUR DATA IS COMING FROM
          },
          'layout': {
              "icon-image": 'custom-marker'+T[i], // the name of image file we used above
              "icon-allow-overlap": false,
              "icon-size": 0.08 //this is a multiplier applied to the standard size. So if you want it half the size put ".5"
          }
      })
  })

})
// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
// Create a popup, but don't add it to the map yet.
const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
  });
map.on('mouseenter', 'markers'+T[i], (e) => {
  map.getCanvas().style.cursor = 'pointer';
  // Copy coordinates array.
  const coordinates = [C[2*i],C[2*i+1]];
  const description = '<img src="assets/img/'+T[i]+'.jpg" width=200px height=200px>'+'<h1>'+D[i]+'</h1>';
  
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
  new mapboxgl.Popup()
  .setLngLat(coordinates)
  .setHTML(description)
  .addTo(map);
  });
  map.on('mouseleave', 'markers', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
    });
  
// Direction!! 
// only the end or destination will change
const start = [-6.76472871,34.09417972];
// this is where the code for the next step will go
// create a function to make a directions request
async function getRoute(end) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource('route')) {
    map.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }
}

map.on('load', () => {
  // make an initial directions request that
  // starts and ends at the same location
  getRoute(start);

  // Add starting point to the map
  map.addLayer({
    id: 'point',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        ]
      }
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#3887be'
    }
  });
  // this is where the code from the next step will go
  map.on('click', (event) => {
  const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
  const end = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      }
    ]
  };
  if (map.getLayer('end')) {
    map.getSource('end').setData(end);
  } else {
    map.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }
          ]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#f30'
      }
    });
  }
  getRoute(coords);
});

}); 
}
};
}
};
}

// only the end or destination will change
const start = [-6.76472871,34.09417972];

// this is where the code for the next step will go
// create a function to make a directions request
async function getRoute(end) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource('route')) {
    map.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3887be',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }
  // add turn instructions here at the end
  // get the sidebar and add the instructions
const instructions = document.getElementById('instructions');
const steps = data.legs[0].steps;

let tripInstructions = '';
for (const step of steps) {
  tripInstructions += `<li>${step.maneuver.instruction}</li>`;
}
instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
  data.duration / 60
)} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
}

map.on('load', () => {
  // make an initial directions request that
  // starts and ends at the same location
  getRoute(start);

  // Add starting point to the map
  map.addLayer({
    id: 'point',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        ]
      }
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#3887be'
    }
  });
  // this is where the code from the next step will go
  map.on('click', (event) => {
  const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
  const end = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: coords
        }
      }
    ]
  };
  if (map.getLayer('end')) {
    map.getSource('end').setData(end);
  } else {
    map.addLayer({
      id: 'end',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: coords
              }
            }
          ]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#f30'
      }
    });
  }
  getRoute(coords);
});
});