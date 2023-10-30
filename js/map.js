var map = L.map('map').setView([49.0139, 31.2858], 7);
map.locate({setView: true, maxZoom: 10});
L.control.scale().addTo(map);
L.control.mapCenterCoord({
    position: 'bottomright'
}).addTo(map);
var geocoder = L.Control.geocoder({
  defaultMarkGeocode: false,
  position: 'bottomleft'
})
  .on('markgeocode', function(e) {
    var bbox = e.geocode.bbox;
    var poly = L.polygon([
      bbox.getSouthEast(),
      bbox.getNorthEast(),
      bbox.getNorthWest(),
      bbox.getSouthWest()
    ]).addTo(map);
    map.fitBounds(poly.getBounds());
  })
  .addTo(map);

    new L.basemapsSwitcher([
  {
     layer: L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
       attribution: '&copy; Google',
       subdomains:['mt0','mt1','mt2','mt3'],
       minZoom: 6,
       maxZoom: 16,
    }),
    icon: 'img/google.png',
    name: 'Google Maps'
  },
  {
     layer: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
       attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
       minZoom: 6,
       maxZoom: 16,
    }),
    icon: 'img/ESRI.png',
    name: 'Esri TopoMap'    
  },
  {
    layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	  maxZoom: 16,
      minZoom: 6,
	  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    icon: 'img/OSM.png',
    name: 'OSM'
  },
  {
     layer: L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
       attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
       minZoom: 6,
       maxZoom: 16,
    }).addTo(map),
    icon: 'img/CyclOSM.png',
    name: 'CyclOSM'
  },
], { position: 'bottomright' }).addTo(map);
L.geoJSON(occupation2, {
    style: {
        fillColor: '#aa1111',
        fillOpacity: 0.1,
        weight: 2,
        opacity: 0.8,
        color: '#aa0000'
    }
}).addTo(map);
L.geoJSON(line, {
    style: {
    color: '#ff0000',
    weight: 2,
    dashArray: '6, 6',
    dashOffset: '0' 
    }
}).addTo(map);
L.geoJSON(line78, {
    style: {
    color: '#ff0000',
    weight: 1,
    }
}).addTo(map);
L.control.polylineMeasure({
    position: 'bottomleft'
}).addTo(map);
map.addControl( new L.Control.Compass({
    position: 'bottomleft'
}) );

map.zoomControl.setPosition('bottomleft');
L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

var osm = new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {minZoom: 1, maxZoom: 16, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});
var miniMap = new L.Control.MiniMap(osm, {position: 'topright'}).addTo(map);

var kmz = L.kmzLayer().addTo(map);

kmz.on('load', function(e) {
  control.addOverlay(e.layer, e.name);
});

// Додати видалені файли KMZ як шари (якщо це сторонні сервери, на них ПОВИНЕН бути включений CORS)
kmz.load('data/territory.kmz')

// Russian Army Corps (NATO - Images)
var enemy = L.icon({
    iconUrl: 'img/rus/NEW/43.png',
    iconSize: [32, 32],
});
var enemy = L.marker([51.24773, 37.86026], { icon:enemy });
var popup = enemy.bindPopup('Угруповання військ "Захід"').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/15.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.45704, 38.80131], { icon:enemy });
var popup = enemy.bindPopup('3-й армійський корпус').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/43.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.26141, 39.64176], { icon:enemy });
var popup = enemy.bindPopup('Угруповання військ "Південь"').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/15.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.16006, 37.48600], { icon:enemy });
var popup = enemy.bindPopup('22-й армійський корпус').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/15.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.94981, 37.94094], { icon:enemy });
var popup = enemy.bindPopup('1-й армійський корпус').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/15.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.56383, 39.30067], { icon:enemy });
var popup = enemy.bindPopup('2-й армійський корпус').openPopup()
popup.addTo(map);







// Armies of the Russian (NATO - Images)
var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.20487, 39.58563], { icon:enemy });
var popup = enemy.bindPopup('2-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.95954, 38.99254], { icon:enemy });
var popup = enemy.bindPopup('20-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.78421, 38.47069], { icon:enemy });
var popup = enemy.bindPopup('8-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.10267, 37.53051], { icon:enemy });
var popup = enemy.bindPopup('29-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.19670, 37.32674], { icon:enemy });
var popup = enemy.bindPopup('5-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.35854, 36.65228], { icon:enemy });
var popup = enemy.bindPopup('35-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.96844, 34.10294], { icon:enemy });
var popup = enemy.bindPopup('18-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.67005, 33.52787], { icon:enemy });
var popup = enemy.bindPopup('49-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([50.03884, 38.02917], { icon:enemy });
var popup = enemy.bindPopup('6-а загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.84951, 35.33821], { icon:enemy });
var popup = enemy.bindPopup('58-ма загальновійськова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/23.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.49601, 38.70621], { icon:enemy });
var popup = enemy.bindPopup('1-ша танкова армія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/13.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.28324, 38.92267], { icon:enemy });
var popup = enemy.bindPopup('41-ша загальновійськова армія').openPopup()
popup.addTo(map);







// Russian army divisions (NATO - Images)
var enemy = L.icon({
    iconUrl: 'img/rus/NEW/36.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.24958, 39.73343], { icon:enemy });
var popup = enemy.bindPopup('51-а дивізія протиповітряної оборони').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.22427, 38.30229], { icon:enemy });
var popup = enemy.bindPopup('3-я мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/20.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.63285, 38.35945], { icon:enemy });
var popup = enemy.bindPopup('106-а гвардійська повітряно-десантна дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.00537, 37.76894], { icon:enemy });
var popup = enemy.bindPopup('20-та гвардійська мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/36.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.56687, 33.54401], { icon:enemy });
var popup = enemy.bindPopup('31-а дивізія протиповітряної оборони').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/34.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.68705, 33.57327], { icon:enemy });
var popup = enemy.bindPopup('27-а змішана авіаційна дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.48589, 34.27597], { icon:enemy });
var popup = enemy.bindPopup('70-а мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/20.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.64845, 38.18985], { icon:enemy });
var popup = enemy.bindPopup('98-а гвардійська повітряно-десантна дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.47417, 36.82720], { icon:enemy });
var popup = enemy.bindPopup('127-а мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/22.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.76829, 38.16032], { icon:enemy });
var popup = enemy.bindPopup('47-ма танкова дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.71083, 38.17268], { icon:enemy });
var popup = enemy.bindPopup('2-га мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.90647, 38.28770], { icon:enemy });
var popup = enemy.bindPopup('18-та гвардійська мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/22.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.13191, 38.27328], { icon:enemy });
var popup = enemy.bindPopup('90-та танкова дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/20.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.35238, 33.56529], { icon:enemy });
var popup = enemy.bindPopup('7-ма десантно-штурмова дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.93992, 37.72739], { icon:enemy });
var popup = enemy.bindPopup('150-та мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.18645, 36.17249], { icon:enemy });
var popup = enemy.bindPopup('42-мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.26065, 35.74471], { icon:enemy });
var popup = enemy.bindPopup('19-а мотострілецька дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/22.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.42033, 38.14041], { icon:enemy });
var popup = enemy.bindPopup('4-та танкова дивізія').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/10.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.02459, 38.17886], { icon:enemy });
var popup = enemy.bindPopup('144-та мотострілецька дивізія').openPopup()
popup.addTo(map);

// Russian Army Regiments (NATO - Images)
var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([50.39112, 36.86840], { icon:enemy });
var popup = enemy.bindPopup('1009-й мотострілецький полк<br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/48.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.23996, 38.09200], { icon:enemy });
var popup = enemy.bindPopup('10-й окремий ремонтно-відновлювальний полк <br><b>в/ч 25356</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.74954, 37.68963], { icon:enemy });
var popup = enemy.bindPopup('1537-й зенітний ракетний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/24.png',
    iconSize: [32, 32],
});
var enemy = L.marker([52.70369, 41.37022], { icon:enemy });
var popup = enemy.bindPopup('27-й змішаний авіаційний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/24.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.30792, 41.78530], { icon:enemy });
var popup = enemy.bindPopup('559-й гвардійський бомбардувальний авіаційний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/31.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.44697, 39.42435], { icon:enemy });
var popup = enemy.bindPopup('55-й окремий гвардійський гелікоптерний полк <br><b>в/ч 35666</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/24.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.96041, 38.00523], { icon:enemy });
var popup = enemy.bindPopup('3-й змішаний авіаційний полк <br><b>в/ч 75386</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/24.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.05740, 38.23997], { icon:enemy });
var popup = enemy.bindPopup('960-й гвардійський штурмовий авіаційний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/4.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.04842, 38.15200], { icon:enemy });
var popup = enemy.bindPopup('856-й гвардійський самохідний артилерійський полк <br><b>в/ч 23857</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.09573, 38.19277], { icon:enemy });
var popup = enemy.bindPopup('488-й гвардійський мотострілковий полк <br><b>в/ч 12721</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.05548, 38.10196], { icon:enemy });
var popup = enemy.bindPopup('254-й гвардійський мотострілковий полк <br><b>в/ч 91704</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/7.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.01127, 38.19998], { icon:enemy });
var popup = enemy.bindPopup('1140-й гвардійський артилерійський полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.03759, 38.28444], { icon:enemy });
var popup = enemy.bindPopup('4-й гвардійський зенітний ракетний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/4.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.11857, 38.17483], { icon:enemy });
var popup = enemy.bindPopup('400-й гвардійський самохідний артилерійський полк <br><b>в/ч 15871</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.16493, 38.16135], { icon:enemy });
var popup = enemy.bindPopup('1438-й мотострілецький полк<br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/4.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.33891, 38.05621], { icon:enemy });
var popup = enemy.bindPopup('99-й гвардійський самохідний артилерійський полк <br><b>в/ч 91727</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.37936, 38.05160], { icon:enemy });
var popup = enemy.bindPopup('1232-й гвардійський мотострілецький полк <br><b>в/ч 29656</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.41974, 38.15689], { icon:enemy });
var popup = enemy.bindPopup('538-й гвардійський зенітний ракетний полк <br><b>в/ч 51383</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.52691, 37.98077], { icon:enemy });
var popup = enemy.bindPopup('1431-й гвардійський мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.58861, 37.97836], { icon:enemy });
var popup = enemy.bindPopup('7-й окремий гвардійський мотострілецький полк <br><b>в/ч 06414</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.65502, 37.93648], { icon:enemy });
var popup = enemy.bindPopup('245-й гвардійський мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.71638, 38.06900], { icon:enemy });
var popup = enemy.bindPopup('1117-й зенітний ракетний полк <br><b>в/ч 51382</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.66260, 37.97725], { icon:enemy });
var popup = enemy.bindPopup('1-й гвардійський танковий полк <br><b>в/ч 58198</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/4.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.68704, 38.05733], { icon:enemy });
var popup = enemy.bindPopup('147-й гвардійський самохідний артилерійський полк <br><b>в/ч 73966</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.69756, 37.95965], { icon:enemy });
var popup = enemy.bindPopup('467-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.73685, 37.90644], { icon:enemy });
var popup = enemy.bindPopup('272-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.78542, 37.90884], { icon:enemy });
var popup = enemy.bindPopup('347-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.83906, 38.16015], { icon:enemy });
var popup = enemy.bindPopup('1432-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.80736, 38.15638], { icon:enemy });
var popup = enemy.bindPopup('1427-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.91290, 38.31396], { icon:enemy });
var popup = enemy.bindPopup('22-й гвардійський зенітний ракетний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.90931, 38.27362], { icon:enemy });
var popup = enemy.bindPopup('79-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.91968, 38.29216], { icon:enemy });
var popup = enemy.bindPopup('275-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.93868, 38.24564], { icon:enemy });
var popup = enemy.bindPopup('280-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.07437, 38.41146], { icon:enemy });
var popup = enemy.bindPopup('1005-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.90817, 38.41816], { icon:enemy });
var popup = enemy.bindPopup('1443-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.82512, 38.37456], { icon:enemy });
var popup = enemy.bindPopup('204-й мотострілецький полк (ЛНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.66053, 38.09904], { icon:enemy });
var popup = enemy.bindPopup('5-й гвардійський зенітний ракетний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.70199, 38.01294], { icon:enemy });
var popup = enemy.bindPopup('6-й мотострілецький полк (ЛНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.65536, 37.99240], { icon:enemy });
var popup = enemy.bindPopup('1102-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/7.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.66010, 38.01373], { icon:enemy });
var popup = enemy.bindPopup('1065-й гвардійський артилерійський полк <br><b>в/ч 62297</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.33577, 37.98746], { icon:enemy });
var popup = enemy.bindPopup('1168-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.25004, 37.79258], { icon:enemy });
var popup = enemy.bindPopup('1454-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.48709, 38.83066], { icon:enemy });
var popup = enemy.bindPopup('1015-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.01576, 38.24100], { icon:enemy });
var popup = enemy.bindPopup('107-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.19934, 37.96600], { icon:enemy });
var popup = enemy.bindPopup('358-й гвардійський зенітний ракетний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.05244, 37.80789], { icon:enemy });
var popup = enemy.bindPopup('87-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.06054, 37.67190], { icon:enemy });
var popup = enemy.bindPopup('117-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.06986, 37.66714], { icon:enemy });
var popup = enemy.bindPopup('1453-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.00526, 37.73684], { icon:enemy });
var popup = enemy.bindPopup('504-й танковий полк <br><b>в/ч 84839</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.96315, 37.78507], { icon:enemy });
var popup = enemy.bindPopup('933-й зенітний ракетний полк <br><b>в/ч 15269</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.95872, 37.59796], { icon:enemy });
var popup = enemy.bindPopup('163-й гвардійський танковий полк <br><b>в/ч 84839</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.91674, 37.56311], { icon:enemy });
var popup = enemy.bindPopup('381-й гвардійський артилерійський полк <br><b>в/ч 24390</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.59152, 37.47213], { icon:enemy });
var popup = enemy.bindPopup('89-й танковий полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.71259, 37.39145], { icon:enemy });
var popup = enemy.bindPopup('123-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.70321, 37.22305], { icon:enemy });
var popup = enemy.bindPopup('116-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.72771, 37.03852], { icon:enemy });
var popup = enemy.bindPopup('131-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.71591, 36.81029], { icon:enemy });
var popup = enemy.bindPopup('218-й танковий полк <br><b>в/ч 82588</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.69448, 36.74772], { icon:enemy });
var popup = enemy.bindPopup('247-й гвардійський десантно-штурмовий полк <br><b>в/ч 54801</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.72837, 36.66558], { icon:enemy });
var popup = enemy.bindPopup('394-й гвардійський мотострілковий полк <br><b>в/ч 25573</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.63521, 36.69399], { icon:enemy });
var popup = enemy.bindPopup('143-й гвардійський мотострілковий полк <br><b>в/ч 21634</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.65446, 36.57280], { icon:enemy });
var popup = enemy.bindPopup('114-й гвардійський мотострілковий полк <br><b>в/ч 24776</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/17.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.75298, 33.18094], { icon:enemy });
var popup = enemy.bindPopup('177-й окремий полк морської піхоти <br><b>в/ч 87852</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.46715, 36.23600], { icon:enemy });
var popup = enemy.bindPopup('1472-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/4.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.37955, 36.03189], { icon:enemy });
var popup = enemy.bindPopup('50-й гвардійський самохідний артилерійський полк <br><b>в/ч 53185</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/19.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.42481, 36.00366], { icon:enemy });
var popup = enemy.bindPopup('104-й гвардійський десантно-штурмовий полк <br><b>в/ч 32515</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/19.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.33485, 35.94130], { icon:enemy });
var popup = enemy.bindPopup('237-й гвардійський десантно-штурмовий полк <br><b>в/ч 12865</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.31328, 35.71346], { icon:enemy });
var popup = enemy.bindPopup('1152-й мотострілецький полк <br><b>в/ч 65384</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.40651, 35.85345], { icon:enemy });
var popup = enemy.bindPopup('291-й мотострілецький полк <br><b>в/ч 65384</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.38600, 35.79131], { icon:enemy });
var popup = enemy.bindPopup('1430-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/27.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.25168, 35.69475], { icon:enemy });
var popup = enemy.bindPopup('40-й полк радіаційного, хімічного та біологічного захисту <br><b>в/ч 16383</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.47365, 35.46867], { icon:enemy });
var popup = enemy.bindPopup('125-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.41984, 35.26646], { icon:enemy });
var popup = enemy.bindPopup('481-й зенінтний ракетний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.37476, 35.02922], { icon:enemy });
var popup = enemy.bindPopup('387-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.47092, 34.51286], { icon:enemy });
var popup = enemy.bindPopup('1153-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.22569, 33.99771], { icon:enemy });
var popup = enemy.bindPopup('1199-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.98482, 33.87634], { icon:enemy });
var popup = enemy.bindPopup('1233-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.79289, 33.49045], { icon:enemy });
var popup = enemy.bindPopup('359-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.60006, 33.49560], { icon:enemy });
var popup = enemy.bindPopup('12-й зенітний ракетний полк <br><b>в/ч 85702</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/35.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.63134, 33.55310], { icon:enemy });
var popup = enemy.bindPopup('3-й радіотехнічний полк <br><b>в/ч 85683</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/24.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.77912, 33.56280], { icon:enemy });
var popup = enemy.bindPopup('917-й змішаний авіаційний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/32.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.21769, 33.38359], { icon:enemy });
var popup = enemy.bindPopup('68-й окремий морський інженерний полк Чорноморського флоту <br><b>в/ч 86863</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/24.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.11454, 33.97591], { icon:enemy });
var popup = enemy.bindPopup('37-й змішаний авіаційний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.02028, 35.35091], { icon:enemy });
var popup = enemy.bindPopup('18-й гвардійський зенітний ракетний полк <br><b>в/ч 85388</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.44520, 34.21829], { icon:enemy });
var popup = enemy.bindPopup('24-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/31.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.69284, 34.41982], { icon:enemy });
var popup = enemy.bindPopup('39-й окремий вертолітний полк <br><b>в/ч 46453</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.16051, 33.61645], { icon:enemy });
var popup = enemy.bindPopup('111-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.25644, 33.86055], { icon:enemy });
var popup = enemy.bindPopup('3-й гвардійський зенітний ракетний полк <br><b>в/ч 94021</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.34989, 33.21922], { icon:enemy });
var popup = enemy.bindPopup('214-й танковий полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.61820, 33.25150], { icon:enemy });
var popup = enemy.bindPopup('26-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/27.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.39229, 33.17493], { icon:enemy });
var popup = enemy.bindPopup('7-й полк радіаційного, хімічного та біологічного захисту <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.49520, 32.98405], { icon:enemy });
var popup = enemy.bindPopup('1253-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.50371, 32.83848], { icon:enemy });
var popup = enemy.bindPopup('28-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/7.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.59013, 32.79728], { icon:enemy });
var popup = enemy.bindPopup('1141-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.27946, 32.64896], { icon:enemy });
var popup = enemy.bindPopup('1044-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.23982, 32.27749], { icon:enemy });
var popup = enemy.bindPopup('404-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/19.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.63875, 37.97819], { icon:enemy });
var popup = enemy.bindPopup('331-й парашутно-десантний полк <br><b>в/ч 71211</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.21953, 38.30624], { icon:enemy });
var popup = enemy.bindPopup('55-й мотострілковий полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.68396, 37.96326], { icon:enemy });
var popup = enemy.bindPopup('1-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.64813, 37.94781], { icon:enemy });
var popup = enemy.bindPopup('26-й гвардійський танковий полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.37114, 37.96875], { icon:enemy });
var popup = enemy.bindPopup('12-й гвардійський танковий полк <br><b>в/ч 31985</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.91089, 38.25474], { icon:enemy });
var popup = enemy.bindPopup('11-й танковий полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/2.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.25727, 38.88130], { icon:enemy });
var popup = enemy.bindPopup('1007-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/24.png',
    iconSize: [32, 32],
});
var enemy = L.marker([51.65115, 36.19411], { icon:enemy });
var popup = enemy.bindPopup('14-й гвардійський винищувальний авіаційний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/2.png',
    iconSize: [32, 32],
});
var enemy = L.marker([51.31495, 34.66393], { icon:enemy });
var popup = enemy.bindPopup('380-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/2.png',
    iconSize: [32, 32],
});
var enemy = L.marker([52.37219, 33.48871], { icon:enemy });
var popup = enemy.bindPopup('352-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.85677, 37.57427], { icon:enemy });
var popup = enemy.bindPopup('102-й мотострілецький полк <br><b>в/ч 91706</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.89314, 38.29611], { icon:enemy });
var popup = enemy.bindPopup('78-й моторизований полк спеціального призначення "Північ-Ахмат" <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.71663, 36.72626], { icon:enemy });
var popup = enemy.bindPopup('71-й гвардійський мотострілковий полк <br><b>в/ч 16544</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/4.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.40544, 35.57510], { icon:enemy });
var popup = enemy.bindPopup('292-й самохідний артилерійський полк <br><b>в/ч 37271</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.58246, 36.25591], { icon:enemy });
var popup = enemy.bindPopup('64-а окрема гвардійська мотострілецька бригада <br><b>в/ч 51460</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.36801, 35.64205], { icon:enemy });
var popup = enemy.bindPopup('95-й мотострілецький полк (ДНР) <br><b>в/ч 08818</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.99567, 38.13354], { icon:enemy });
var popup = enemy.bindPopup('127-й окремий мотострілецький полк (ДНР) <br><b>в/ч 08818</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.09838, 38.01613], { icon:enemy });
var popup = enemy.bindPopup('358 гвардійський ракетний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/2.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.05129, 38.42966], { icon:enemy });
var popup = enemy.bindPopup('103-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/2.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.17348, 37.78550], { icon:enemy });
var popup = enemy.bindPopup('109-й мотострілецький полк (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/4.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.08728, 37.83485], { icon:enemy });
var popup = enemy.bindPopup('944-й гвардійський самохідний артилерійський полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.08212, 37.75520], { icon:enemy });
var popup = enemy.bindPopup('255-й гвардійський мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.20024, 38.08702], { icon:enemy });
var popup = enemy.bindPopup('237-й танковий полк <br><b>в/ч 34670</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.25879, 38.03038], { icon:enemy });
var popup = enemy.bindPopup('752-й мотострілецький полк <br><b>в/ч 34670</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/19.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.62641, 37.97287], { icon:enemy });
var popup = enemy.bindPopup('217-й парашутно-десантний полк <br><b>в/ч 62295</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/17.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.08969, 37.67323], { icon:enemy });
var popup = enemy.bindPopup('9-й окремий полк морської піхоти  <br><b>в/ч 08819</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.68841, 37.94214], { icon:enemy });
var popup = enemy.bindPopup('6-й окремий мотострілецький полк (ЛНР) <br><b>в/ч 69647</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/19.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.38051, 35.77543], { icon:enemy });
var popup = enemy.bindPopup('56-й парашутно-десантний полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.45496, 35.56000], { icon:enemy });
var popup = enemy.bindPopup('503-й мотострілецький полк <br><b>в/ч 75394</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.40741, 35.71655], { icon:enemy });
var popup = enemy.bindPopup('129-й мотострілецький полк').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.45021, 36.00460], { icon:enemy });
var popup = enemy.bindPopup('70-й мотострілецький полк <br><b>в/ч 71718</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/19.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.81439, 35.43159], { icon:enemy });
var popup = enemy.bindPopup('108-й десантно-штурмовий полк <br><b>в/ч 42091</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.49717, 35.43065], { icon:enemy });
var popup = enemy.bindPopup('429-й мотострілецький полк <br><b>в/ч 01860</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.11498, 32.91298], { icon:enemy });
var popup = enemy.bindPopup('1096-й окремий зенітний ракетний полк <br><b>в/ч 83576</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/7.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.80761, 33.56821], { icon:enemy });
var popup = enemy.bindPopup('8-й окремий артилерійський полк берегової оборони <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/19.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.69238, 38.06574], { icon:enemy });
var popup = enemy.bindPopup('137-й парашутно-десантний полк <br><b>в/ч 41450</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.41237, 37.97802], { icon:enemy });
var popup = enemy.bindPopup('423-й мотострілецький полк <br><b>в/ч 91701</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/2.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.70347, 32.98688], { icon:enemy });
var popup = enemy.bindPopup('385-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/2.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.66112, 37.99235], { icon:enemy });
var popup = enemy.bindPopup('9-й мотострілецький полк <br><b>в/ч 08819</b></br>').openPopup()
popup.addTo(map);







// Russian Army Brigades/Battalions/Combat Teams (NATO - Images)
var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([50.61233, 36.52542], { icon:enemy });
var popup = enemy.bindPopup('24-а мобільна зенітна ракетна бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/25.png',
    iconSize: [32, 32],
});
var enemy = L.marker([50.80946, 37.17379], { icon:enemy });
var popup = enemy.bindPopup('26-а ракетна бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/33.png',
    iconSize: [32, 32],
});
var enemy = L.marker([50.97929, 39.51405], { icon:enemy });
var popup = enemy.bindPopup('152-а окрема бригада матеріально-технічного забезпечення <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/25.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.71877, 39.87282], { icon:enemy });
var popup = enemy.bindPopup('40-а ракетна бригада <br><b>в/ч 33166</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/50.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.35825, 40.03727], { icon:enemy });
var popup = enemy.bindPopup('19-а окрема бригада радіоелектронної боротьби <br><b>в/ч 62829</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/49.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.25768, 39.84604], { icon:enemy });
var popup = enemy.bindPopup('175-а бригада управління <br><b>в/ч 01957</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/25.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.23064, 38.84972], { icon:enemy });
var popup = enemy.bindPopup('47-а ракетна бригада <br><b>в/ч 33166</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/33.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.62145, 40.06611], { icon:enemy });
var popup = enemy.bindPopup('99-а окрема бригада матеріально-технічного забезпечення <br><b>в/ч 72153</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/47.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.73597, 37.74010], { icon:enemy });
var popup = enemy.bindPopup('743-й окремий гвардійський батальйон зв;зку <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/46.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.77270, 37.71915], { icon:enemy });
var popup = enemy.bindPopup('Окрема рота БПЛА <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/25.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.14100, 36.75270], { icon:enemy });
var popup = enemy.bindPopup('11-а окрема берегова ракетно-артилерійська бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/45.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.21198, 37.14117], { icon:enemy });
var popup = enemy.bindPopup('629-й окремий інженерно-саперний батальйон <br><b>в/ч 96404</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/42.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.06005, 38.22126], { icon:enemy });
var popup = enemy.bindPopup('1259-й окремий протитанковий артилерійський дивізіон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/28.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.06358, 38.17886], { icon:enemy });
var popup = enemy.bindPopup('59-й окремий танковий батальйон <br><b>в/ч 94018</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/28.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.99469, 38.14934], { icon:enemy });
var popup = enemy.bindPopup('124-й окремий танковий батальйон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/29.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.05112, 38.20478], { icon:enemy });
var popup = enemy.bindPopup('30-й окремий розвідувальний батальйон <br><b>в/ч 17654</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.15493, 38.11621], { icon:enemy });
var popup = enemy.bindPopup('35-а окрема гвардійська мотострілецька бригада <br><b>в/ч 41659</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.21507, 38.20684], { icon:enemy });
var popup = enemy.bindPopup('3-я окрема гвардійська бригада спеціального призначення <br><b>в/ч 21208</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.29686, 38.16114], { icon:enemy });
var popup = enemy.bindPopup('297 зенітна ракетна бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/42.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.32305, 38.04291], { icon:enemy });
var popup = enemy.bindPopup('159-й окремий протитанковий артилерійський дивізіон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/29.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.33357, 38.00497], { icon:enemy });
var popup = enemy.bindPopup('137-й окремий розвідувальний батальйон <br><b>в/ч 21555</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.57917, 38.16599], { icon:enemy });
var popup = enemy.bindPopup('49-а зенітна ракетна бригада <br><b>в/ч 21555</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.55892, 38.07029], { icon:enemy });
var popup = enemy.bindPopup('288-а артилерійська бригада <br><b>в/ч 30683</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/11.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.83398, 37.88352], { icon:enemy });
var popup = enemy.bindPopup('96-а окрема розвідувальна бригада <br><b>в/ч 52634</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.79234, 37.70826], { icon:enemy });
var popup = enemy.bindPopup('30-а окрема мотострілецька бригада <br><b>в/ч 45863</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.81445, 37.97098], { icon:enemy });
var popup = enemy.bindPopup('45-а артилерійська бригада великої потужності <br><b>в/ч 31969</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.82685, 38.38537], { icon:enemy });
var popup = enemy.bindPopup('2-а окрема гвардійська бригада спеціального призначення <br><b>в/ч 64044</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.84410, 38.52133], { icon:enemy });
var popup = enemy.bindPopup('16-а окрема гвардійська бригада спеціального призначення <br><b>в/ч 54607</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/3.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.52081, 38.73333], { icon:enemy });
var popup = enemy.bindPopup('79-а гвардійська реактивна артилерійська бригада <br><b>в/ч 53956</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.14741, 38.91478], { icon:enemy });
var popup = enemy.bindPopup('28-а зенітна ракетна бригада <br><b>в/ч 71316</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.01327, 38.37233], { icon:enemy });
var popup = enemy.bindPopup('385-а гвардійська артилерійська бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/28.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.77302, 38.33405], { icon:enemy });
var popup = enemy.bindPopup('4-й окремий танковий батальйон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.72919, 38.22950], { icon:enemy });
var popup = enemy.bindPopup('123-а окрема гвардійська мотострілецька бригада <br><b>в/ч 73438</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.62579, 38.00025], { icon:enemy });
var popup = enemy.bindPopup('60-й окремий мотострілковий батальйон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.51169, 37.99124], { icon:enemy });
var popup = enemy.bindPopup('85-а окрема мотострілецька бригада (ЛНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/2.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.55159, 38.01175], { icon:enemy });
var popup = enemy.bindPopup('374-й окремий стрілецький батальйон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.46439, 38.15071], { icon:enemy });
var popup = enemy.bindPopup('1442-й мотострілецький полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.52166, 38.06969], { icon:enemy });
var popup = enemy.bindPopup('68-й гвардійський танковий полк <br><b>в/ч 91714</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/21.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.43222, 37.99604], { icon:enemy });
var popup = enemy.bindPopup('21-й гвардійський танковий полк <br><b>в/ч 87441</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/7.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.48239, 38.08205], { icon:enemy });
var popup = enemy.bindPopup('27-й артилерійський полк <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/39.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.50156, 38.02377], { icon:enemy });
var popup = enemy.bindPopup('141-й спеціальний моторизований полк імені Ахмата Кадирова "Північ" Росгвардії <br><b>в/ч 4156</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/29.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.47389, 38.07793], { icon:enemy });
var popup = enemy.bindPopup('173-й окремий гвардійський розвідувальний батальйон <br><b>в/ч 54392</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.31374, 38.01630], { icon:enemy });
var popup = enemy.bindPopup('132-а окрема гвардійська мотострілецька бригада <br><b>в/ч 08803</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.25854, 37.85846], { icon:enemy });
var popup = enemy.bindPopup('114-а гвардійська мотострілецька бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.20606, 37.79254], { icon:enemy });
var popup = enemy.bindPopup('207-й окремий стрілецький батальйон (ДНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.20411, 37.72448], { icon:enemy });
var popup = enemy.bindPopup('277-й окремий стрілецький батальйон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/44.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.33782, 38.40666], { icon:enemy });
var popup = enemy.bindPopup('52-й окремий зенітний ракетний дивізіон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.10371, 38.74037], { icon:enemy });
var popup = enemy.bindPopup('50-а окрема бригада оперативного призначення <br><b>в/ч 3660</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/3.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.05726, 37.98145], { icon:enemy });
var popup = enemy.bindPopup('110-а окрема гвардійська мотострілецька бригада <br><b>в/ч 08826</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.15264, 37.83966], { icon:enemy });
var popup = enemy.bindPopup('110-а окрема гвардійська мотострілецька бригада <br><b>в/ч 08826</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/42.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.07677, 37.77855], { icon:enemy });
var popup = enemy.bindPopup('487-й окремий противотанковий дивізіон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/29.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.06094, 37.72563], { icon:enemy });
var popup = enemy.bindPopup('80-й окремий гвардійський розвідувальний батальйон <br><b>в/ч 08806</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/28.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.02903, 37.71709], { icon:enemy });
var popup = enemy.bindPopup('10-й танковий батальйон <br><b>в/ч 08810</b></br>').openPopup()
popup.addTo(map)

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.06504, 37.68578], { icon:enemy });
var popup = enemy.bindPopup('14-а гвардійська окрема артилерійська бригада <br><b>в/ч 08802</b></br>').openPopup()
popup.addTo(map)

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/41.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.84807, 37.99278], { icon:enemy });
var popup = enemy.bindPopup('Окрема рота РЕБ <br><b>в/ч 08817</b></br>').openPopup()
popup.addTo(map)

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/40.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.97941, 37.77288], { icon:enemy });
var popup = enemy.bindPopup('Окремий ремонтно-відновлювальний батальйон "Конго" <br><b>в/ч 08813</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/5.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.00445, 37.83297], { icon:enemy });
var popup = enemy.bindPopup('23-й окремий зенітний ракетний дивізіон <br><b>в/ч 08817</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/38.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.58504, 37.99991], { icon:enemy });
var popup = enemy.bindPopup('58-й окремий батальйон спеціального призначення <br><b>в/ч 08827</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.97044, 37.71658], { icon:enemy });
var popup = enemy.bindPopup('5-а окрема мотострілецька бригада <br><b>в/ч 08805</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.55592, 37.97280], { icon:enemy });
var popup = enemy.bindPopup('140-а зенітна ракетна бригада <br><b>в/ч 32390</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.78971, 37.49398], { icon:enemy });
var popup = enemy.bindPopup('39-а окрема мотострілецька бригада <br><b>в/ч 35390</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.66799, 37.40416], { icon:enemy });
var popup = enemy.bindPopup('200-а артилерійська бригада <br><b>в/ч 48271</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.68593, 37.34520], { icon:enemy });
var popup = enemy.bindPopup('23-й загін БАРС <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.56825, 37.31609], { icon:enemy });
var popup = enemy.bindPopup('35-та гвардійська зенітна ракетна бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.72222, 37.13877], { icon:enemy });
var popup = enemy.bindPopup('36-а окрема гвардійська мотострілецька бригада <br><b>в/ч 06705</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.65134, 37.13207], { icon:enemy });
var popup = enemy.bindPopup('22-й загін БАРС <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.66105, 37.07251], { icon:enemy });
var popup = enemy.bindPopup('34-а окрема мотострілецька бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.69708, 36.67228], { icon:enemy });
var popup = enemy.bindPopup('34-а окрема мотострілецька бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/29.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.50891, 36.82051], { icon:enemy });
var popup = enemy.bindPopup('77-й окремий розвідувальний батальйон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/3.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.53569, 36.91011], { icon:enemy });
var popup = enemy.bindPopup('338-а гвардійська реактивна артилерійська бригада <br><b>в/ч 57367</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.39063, 37.04841], { icon:enemy });
var popup = enemy.bindPopup('8-а зенітна ракетна бригада <br><b>в/ч 36411</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.76803, 36.76884], { icon:enemy });
var popup = enemy.bindPopup('102-а окрема бригада оперативного призначення <br><b>в/ч 6752</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.40735, 36.41607], { icon:enemy });
var popup = enemy.bindPopup('71-а гвардійська зенітна ракетна бригада <br><b>в/ч 01879</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.54397, 36.28235], { icon:enemy });
var popup = enemy.bindPopup('165-а гвардійська артилерійська бригада <br><b>в/ч 02901</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.40610, 36.11807], { icon:enemy });
var popup = enemy.bindPopup('45-а окрема гвардійська бригада спеціального призначення повітрянодесантних військ <br><b>в/ч 28337</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/29.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.40433, 35.94830], { icon:enemy });
var popup = enemy.bindPopup('417-й окремий розвідувальний батальйон <br><b>в/ч 13242</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.33504, 35.94830], { icon:enemy });
var popup = enemy.bindPopup('291-а гвардійська артилерійська бригада <br><b>в/ч 64670</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/39.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.34042, 35.79706], { icon:enemy });
var popup = enemy.bindPopup('249-й окремий спеціальний моторизований батальйон "Південь-Ахмат" Росгвардії <br><b>в/ч 4157</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.36223, 35.84676], { icon:enemy });
var popup = enemy.bindPopup('1-й загін БАРС <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.39690, 35.78487], { icon:enemy });
var popup = enemy.bindPopup('3-й загін БАРС <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.41142, 35.83122], { icon:enemy });
var popup = enemy.bindPopup('11-й загін БАРС <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/38.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.29731, 35.63004], { icon:enemy });
var popup = enemy.bindPopup('358-й окремий батальйон оперативного призначення <br><b>в/ч 6776</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/11.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.73951, 35.35160], { icon:enemy });
var popup = enemy.bindPopup('100-а окрема розвідувальна бригада <br><b>в/ч 23511</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.18808, 35.56686], { icon:enemy });
var popup = enemy.bindPopup('67 зенітна ракетна бригада <br><b>в/ч 32383</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.82931, 34.35459], { icon:enemy });
var popup = enemy.bindPopup('90-а зенітна ракетна бригада <br><b>в/ч 54821</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/33.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.75082, 33.84768], { icon:enemy });
var popup = enemy.bindPopup('133-та окрема бригада матеріально-технічного забезпечення Чорноморського флоту <br><b>в/ч 73998</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([44.88227, 34.07272], { icon:enemy });
var popup = enemy.bindPopup('112-а окрема бригада оперативного призначення <br><b>в/ч 6914</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.35009, 36.42517], { icon:enemy });
var popup = enemy.bindPopup('115-а окрема бригада особливого призначення <br><b>в/ч 6942</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/25.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.48577, 32.73170], { icon:enemy });
var popup = enemy.bindPopup('15-а окрема берегова ракетна бригада <br><b>в/ч 80365</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/25.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.71037, 33.33252], { icon:enemy });
var popup = enemy.bindPopup('1-а гвардійська ракетна бригада <br><b>в/ч 31853</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([45.64597, 33.97110], { icon:enemy });
var popup = enemy.bindPopup('Загін БАРС-30 <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/37.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.33543, 34.02294], { icon:enemy });
var popup = enemy.bindPopup('77-а гвардійська зенітна ракетна бригада <br><b>в/ч 33742</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/29.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.52793, 33.49731], { icon:enemy });
var popup = enemy.bindPopup('162-й окремий розвідувальний батальйон <br><b>в/ч 54377</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/28.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.47842, 33.43964], { icon:enemy });
var popup = enemy.bindPopup('104-й окремий танковий батальйон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.58553, 33.21510], { icon:enemy });
var popup = enemy.bindPopup('227-ма артилерійська бригада <br><b>в/ч 13714</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/26.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.54198, 32.91092], { icon:enemy });
var popup = enemy.bindPopup('171-й окремий десантно-штурмовий батальйон <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.49898, 32.66373], { icon:enemy });
var popup = enemy.bindPopup('Бригадна тактична група зі складу 7-ї російської військової бази </b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.69838, 36.69828], { icon:enemy });
var popup = enemy.bindPopup('ПВК "Шторм Z" </b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.59100, 36.80248], { icon:enemy });
var popup = enemy.bindPopup('305-та артилерійська бригада <br><b>в/ч 39255</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.46686, 37.96051], { icon:enemy });
var popup = enemy.bindPopup('72-га окрема мотострілецька бригада <br><b>в/ч ?').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/8.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.49875, 38.00137], { icon:enemy });
var popup = enemy.bindPopup('ПВК "Шторм Z"').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/9.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.58711, 37.98042], { icon:enemy });
var popup = enemy.bindPopup('31-ша окрема десантно-штурмова бригада <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.78023, 38.29096], { icon:enemy });
var popup = enemy.bindPopup('88-а окрема мотострілецька бригада (ЛНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.92986, 38.30812], { icon:enemy });
var popup = enemy.bindPopup('12-й загін БАРС <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.93914, 38.34173], { icon:enemy });
var popup = enemy.bindPopup('14-й загін БАРС <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.99565, 38.28323], { icon:enemy });
var popup = enemy.bindPopup('16-й загін БАРС <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.08477, 38.13423], { icon:enemy });
var popup = enemy.bindPopup('120-та артилерійська бригада <br><b>в/ч 59361</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.31164, 37.98883], { icon:enemy });
var popup = enemy.bindPopup('15-а окрема гвардійська мотострілецька бригада <br><b>в/ч 90600</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.54916, 38.10711], { icon:enemy });
var popup = enemy.bindPopup('244-та артилерійська бригада <br><b>в/ч 41603</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.69443, 36.80446], { icon:enemy });
var popup = enemy.bindPopup('60-а окрема мотострілецька бригада <br><b>в/ч 16871</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.14230, 38.15277], { icon:enemy });
var popup = enemy.bindPopup('236-я гвардійська артилерійська бригада <br><b>в/ч 53195</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.51774, 37.97562], { icon:enemy });
var popup = enemy.bindPopup('27-а окрема гвардійська мотострілецька бригада <br><b>в/ч 61899</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.49209, 35.99928], { icon:enemy });
var popup = enemy.bindPopup('38-ма окрема мотострілецька бригада <br><b>в/ч 21720</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/1.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.49284, 32.56245], { icon:enemy });
var popup = enemy.bindPopup('61-а окрема бригада морської піхоти <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.88109, 37.77460], { icon:enemy });
var popup = enemy.bindPopup('138-а окрема гвардійська мотострілецька бригада <br><b>в/ч 02511</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.64785, 37.93073], { icon:enemy });
var popup = enemy.bindPopup('200-а окрема мотострілецька бригада <br><b>в/ч 08275</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.90072, 37.86095], { icon:enemy });
var popup = enemy.bindPopup('9-а гвардійська артилерійська бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.78492, 37.79846], { icon:enemy });
var popup = enemy.bindPopup('25-а окрема гвардійська мотострілецька бригада <br><b>в/ч 297604</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.71089, 36.79338], { icon:enemy });
var popup = enemy.bindPopup('136-та окрема мотострілецька бригад <br><b>в/ч 63354</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/11.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.78606, 37.53445], { icon:enemy });
var popup = enemy.bindPopup('14-а окрема гвардійська бригада спеціального призначення <br><b>в/ч 74854</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.72772, 36.97792], { icon:enemy });
var popup = enemy.bindPopup('37-ма окрема мотострілецька бригада <br><b>в/ч 69647</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/1.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.72567, 36.67502], { icon:enemy });
var popup = enemy.bindPopup('336-та окрема бригада морської піхоти <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.40799, 35.96340], { icon:enemy });
var popup = enemy.bindPopup('22-а окрема гвардійська бригада спеціального призначення <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/11.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.51097, 36.08082], { icon:enemy });
var popup = enemy.bindPopup('69-а окрема бригада прикриття <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/9.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.54897, 37.98643], { icon:enemy });
var popup = enemy.bindPopup('83-я окрема гвардійська десантно-штурмова бригада <br><b>в/ч 71289</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/12.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.41769, 36.00237], { icon:enemy });
var popup = enemy.bindPopup('45-а окрема гвардійська бригада спеціального призначення').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.51502, 32.51275], { icon:enemy });
var popup = enemy.bindPopup('80-та окрема мотострілецька бригада <br><b>в/ч 34667</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/1.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.45761, 35.72780], { icon:enemy });
var popup = enemy.bindPopup('810-та окрема бригада морської піхоти <br><b>в/ч 13140</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.90757, 38.31563], { icon:enemy });
var popup = enemy.bindPopup('127-ма окрема мотострілецька бригада (ЛНР) <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.69164, 38.08016], { icon:enemy });
var popup = enemy.bindPopup('10-та артилерійська бригада (ЛНР) <br><b>в/ч 08802</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/1.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.75273, 36.95565], { icon:enemy });
var popup = enemy.bindPopup('40-ва окрема бригада морської піхоти <br><b>в/ч 10103</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/16.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.02937, 37.64174], { icon:enemy });
var popup = enemy.bindPopup('2-й батальйон територіальної оборони <br><b>в/ч -</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.09587, 37.81456], { icon:enemy });
var popup = enemy.bindPopup('1-ша окрема мотострілецька бригада <br><b>в/ч 08801</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/18.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.04050, 37.73804], { icon:enemy });
var popup = enemy.bindPopup('238-ма артилерійська бригада <br><b>в/ч ?</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/1.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.52881, 32.54545], { icon:enemy });
var popup = enemy.bindPopup('126-та окрема бригада берегової оборони <br><b>в/ч 12676</b>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/1.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.76192, 37.29953], { icon:enemy });
var popup = enemy.bindPopup('155-та окрема бригада морської піхоти <br><b>в/ч 30926</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/11.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.71697, 33.28926], { icon:enemy });
var popup = enemy.bindPopup('127-ма окрема розвідувальна бригада <br><b>в/ч 67606</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([46.72824, 33.07340], { icon:enemy });
var popup = enemy.bindPopup('205-та окрема мотострілецька бригада <br><b>в/ч 74814</b>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.40050, 35.90040], { icon:enemy });
var popup = enemy.bindPopup('74-та окрема мотострілецька бригада <br><b>в/ч 21005</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/25.png',
    iconSize: [32, 32],
});
var enemy = L.marker([49.05722, 39.20609], { icon:enemy });
var popup = enemy.bindPopup('448-ма ракетна бригада <br><b>в/ч 35535</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/3.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.15698, 37.01637], { icon:enemy });
var popup = enemy.bindPopup('439-а гвардійська ракетно-артилерійська бригада <br><b>в/ч ?</b>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.46257, 35.99464], { icon:enemy });
var popup = enemy.bindPopup('55-та окрема мотострілецька бригада <br><b>в/ч 55115</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/6.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.44497, 37.94695], { icon:enemy });
var popup = enemy.bindPopup('57-ма окрема мотострілецька бригада <br><b>в/ч </b>46102</br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/9.png',
    iconSize: [32, 32],
});
var enemy = L.marker([48.59549, 37.99356], { icon:enemy });
var popup = enemy.bindPopup('11-а окрема десантно-штурмова бригада" <br><b>в/ч 32364</b></br>').openPopup()
popup.addTo(map);

var enemy = L.icon({
    iconUrl: 'img/rus/NEW/14.png',
    iconSize: [32, 32],
});
var enemy = L.marker([47.70693, 36.94101], { icon:enemy });
var popup = enemy.bindPopup('5-та окрема танкова бригада <br><b>в/ч 46108</b></br>').openPopup()
popup.addTo(map);







// Military airfields of the Russian army (Images)
// --------------------------------------------------------------------------------------------------------------------------------- \\







// forces of the Ukrainian army

//  Operational Command
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/20.png',
    iconSize: [32, 32],
});
var friendly = L.marker([50.59261, 26.22231], { icon:friendly });
var popup = friendly.bindPopup('Оперативне командування «Захід» <br><i>').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/20.png',
    iconSize: [32, 32],
});
var friendly = L.marker([51.49197, 31.30074], { icon:friendly });
var popup = friendly.bindPopup('Оперативне командування «Північ» <br><i>').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/20.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.47901, 30.57770], { icon:friendly });
var popup = friendly.bindPopup('Оперативне командування «Південь» <br><i>').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/20.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.46040, 35.00931], { icon:friendly });
var popup = friendly.bindPopup('Оперативне командування «Схід» <br><i>').openPopup()
popup.addTo(map);



// Army aviation
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/26.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.05365, 31.91648], { icon:friendly });
var popup = friendly.bindPopup('10-та морська авіаційна бригада <br>').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/21.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.93629, 32.09948], { icon:friendly });
var popup = friendly.bindPopup('11-та окрема бригада армійської авіації «Херсон» <br>').openPopup()
popup.addTo(map);



// Anti-aircraft groups // Rocket groups
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/13.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.58390, 37.63813], { icon:friendly });
var popup = friendly.bindPopup('27-а реактивна артилерійська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/22.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.58637, 37.55264], { icon:friendly });
var popup = friendly.bindPopup('301-й зенітний ракетний полк <br>').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/22.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.57809, 35.77354], { icon:friendly });
var popup = friendly.bindPopup('39-й зенітний ракетний полк <br>').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/7.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.02737, 31.99871], { icon:friendly });
var popup = friendly.bindPopup('208-ма зенітна ракетна бригада <br>').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/7.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.70550, 32.60399], { icon:friendly });
var popup = friendly.bindPopup('208-ма зенітна ракетна бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/13.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.71805, 37.77808], { icon:friendly });
var popup = friendly.bindPopup('107-ма реактивна артилерійська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/30.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.87422, 35.54970], { icon:friendly });
var popup = friendly.bindPopup('19-та ракетна бригада').openPopup()
popup.addTo(map);



// Grouping of special operations forces
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/5.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.56436, 37.90953], { icon:friendly });
var popup = friendly.bindPopup('3-й окремий батальйон спеціального призначення Міжнародного Легіону').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/33.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.93434, 37.95467], { icon:friendly });
var popup = friendly.bindPopup('12-а бригада оперативного призначення Національної гвардії України').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/33.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.94471, 38.12565], { icon:friendly });
var popup = friendly.bindPopup('5-а окрема Слобожанська бригада Національної Гвардії України').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/5.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.85280, 38.09200], { icon:friendly });
var popup = friendly.bindPopup('3-й батальйон оперативного призначення').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/4.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.57110, 37.81958], { icon:friendly });
var popup = friendly.bindPopup('Підрозділ Центру Спеціальних Операцій "Альфа"').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/5.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.57692, 37.94360], { icon:friendly });
var popup = friendly.bindPopup('210-й окремий батальйон спеціального призначення').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/11.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.54690, 37.91056], { icon:friendly });
var popup = friendly.bindPopup('120-й окремий розвідувальний батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/32.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.12110, 37.76765], { icon:friendly });
var popup = friendly.bindPopup('Загін спеціального призначення Національної Гвардії України "Омега-5"').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/11.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.74172, 36.59932], { icon:friendly });
var popup = friendly.bindPopup('74-й окремий розвідувальний батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/11.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.52204, 35.44344], { icon:friendly });
var popup = friendly.bindPopup('130-й окремий розвідувальний батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/34.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.46398, 35.82230], { icon:friendly });
var popup = friendly.bindPopup('78-й окремий полк спеціального призначення').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/33.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.52433, 36.00546], { icon:friendly });
var popup = friendly.bindPopup('27-а окрема Печерська бригада Національної Гвардії України').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/32.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.60165, 36.04717], { icon:friendly });
var popup = friendly.bindPopup('12-те головне управління департаменту військової контррозвідки Служби Безпеки України').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/6.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.65986, 32.48280], { icon:friendly });
var popup = friendly.bindPopup('73-й морський центр спеціальних операцій').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/5.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.64745, 32.62240], { icon:friendly });
var popup = friendly.bindPopup('16-й окремий батальйон НГУ').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/4.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.70582, 32.71162], { icon:friendly });
var popup = friendly.bindPopup('Центр спеціальних операцій «А» СБУ').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/1.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.57993, 34.31996], { icon:friendly });
var popup = friendly.bindPopup('21-ша окрема бригада охорони громадського порядку').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/11.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.77755, 38.07424], { icon:friendly });
var popup = friendly.bindPopup('132-й окремий розвідувальний батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/11.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.99700, 37.83451], { icon:friendly });
var popup = friendly.bindPopup('140-й окремий розвідувальний батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/5.png',
    iconSize: [32, 32],
});
var friendly = L.marker([50.57762, 30.48088], { icon:friendly });
var popup = friendly.bindPopup('Батальйон оперативного призначення НГУ ім. Сергія Кульчицького').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/1.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.51945, 37.79245], { icon:friendly });
var popup = friendly.bindPopup('4-та бригада оперативного призначення НГУ').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/11.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.84676, 33.41269], { icon:friendly });
var popup = friendly.bindPopup('131-й окремий розвідувальний батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/19.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.51000, 37.90455], { icon:friendly });
var popup = friendly.bindPopup('Спецпідрозділ «Kraken»').openPopup()
popup.addTo(map);



// Grouping of tank forces
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/38.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.96504, 37.44707], { icon:friendly });
var popup = friendly.bindPopup('12-й окремий танковий батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/12.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.23914, 37.70903], { icon:friendly });
var popup = friendly.bindPopup('1-ша окрема танкова бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/12.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.74207, 36.84909], { icon:friendly });
var popup = friendly.bindPopup('4-та окрема танкова бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/12.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.70933, 37.59882], { icon:friendly });
var popup = friendly.bindPopup('3-тя окрема танкова бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/12.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.59563, 37.84893], { icon:friendly });
var popup = friendly.bindPopup('17-та окрема танкова бригада').openPopup()
popup.addTo(map);



// Group of artillery forces
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.53013, 37.69478], { icon:friendly });
var popup = friendly.bindPopup('26-а окрема артилерійська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/35.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.32167, 37.84069], { icon:friendly });
var popup = friendly.bindPopup('64-й окремий артилерійський дивізіон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.85228, 37.20795], { icon:friendly });
var popup = friendly.bindPopup('15-та окрема бригада артилерійської розвідки').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/35.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.79350, 36.82034], { icon:friendly });
var popup = friendly.bindPopup('66-й окремий артилерійський дивізіон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.66571, 36.24553], { icon:friendly });
var popup = friendly.bindPopup('47-а окрема артилерійська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.99161, 33.29990], { icon:friendly });
var popup = friendly.bindPopup('406-та окрема артилерійська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.45203, 35.88281], { icon:friendly });
var popup = friendly.bindPopup('44-та окрема артилерійська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.98107, 37.40124], { icon:friendly });
var popup = friendly.bindPopup('55-та окрема артилерійська бригадa').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.71149, 37.74250], { icon:friendly });
var popup = friendly.bindPopup('43-тя окрема артилерійська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.48090, 37.59882], { icon:friendly });
var popup = friendly.bindPopup('40-ва окрема артилерійська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/3.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.37583, 37.84189], { icon:friendly });
var popup = friendly.bindPopup('45-та окрема артилерійська бригада').openPopup()
popup.addTo(map);



// Group of assault forces
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.46764, 35.88675], { icon:friendly });
var popup = friendly.bindPopup('14-а штурмова бригада НГУ').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/18.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.48209, 35.76299], { icon:friendly });
var popup = friendly.bindPopup('2-й гірничо-штурмовий батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.43984, 35.86126], { icon:friendly });
var popup = friendly.bindPopup('71-ша окрема єгерська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/36.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.52709, 37.94961], { icon:friendly });
var popup = friendly.bindPopup('24-й окремий штурмовий батальйон "Айдар"').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/18.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.51193, 35.60909], { icon:friendly });
var popup = friendly.bindPopup('15-й окремий гірничо-штурмовий батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.54556, 37.93940], { icon:friendly });
var popup = friendly.bindPopup('5-та окрема штурмова бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/18.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.81808, 38.24444], { icon:friendly });
var popup = friendly.bindPopup('108-й окремий гірсько-штурмовий батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/18.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.77030, 38.13930], { icon:friendly });
var popup = friendly.bindPopup('109-й окремий гірсько-штурмовий батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/10.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.53864, 35.69561], { icon:friendly });
var popup = friendly.bindPopup('128-ма окрема гірсько-штурмова бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.85757, 38.18504], { icon:friendly });
var popup = friendly.bindPopup('46-й окремий штурмовий батальйон «Донбас»').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/10.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.74399, 38.15741], { icon:friendly });
var popup = friendly.bindPopup('10-та окрема гірсько-штурмова бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.33021, 37.93030], { icon:friendly });
var popup = friendly.bindPopup('68-ма окрема єгерська бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.49485, 37.95294], { icon:friendly });
var popup = friendly.bindPopup('3-тя окрема штурмова бригада').openPopup()
popup.addTo(map);



// Groups of mechanized and motorized infantry forces
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.87473, 36.25763], { icon:friendly });
var popup = friendly.bindPopup('416-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.65302, 37.86472], { icon:friendly });
var popup = friendly.bindPopup('88-а окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.62016, 37.87983], { icon:friendly });
var popup = friendly.bindPopup('41-а окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.38271, 37.88670], { icon:friendly });
var popup = friendly.bindPopup('44-а окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.35409, 37.91588], { icon:friendly });
var popup = friendly.bindPopup('66-а окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.33105, 37.83829], { icon:friendly });
var popup = friendly.bindPopup('43-тя окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.21928, 37.94849], { icon:friendly });
var popup = friendly.bindPopup('19-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.15353, 37.97390], { icon:friendly });
var popup = friendly.bindPopup('49-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.08972, 38.02643], { icon:friendly });
var popup = friendly.bindPopup('42-а окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.09450, 37.96944], { icon:friendly });
var popup = friendly.bindPopup('21-ша окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.06071, 37.95399], { icon:friendly });
var popup = friendly.bindPopup('23-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/37.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.75066, 37.07199], { icon:friendly });
var popup = friendly.bindPopup('58-а окрема мотопіхотна бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.73621, 37.99278], { icon:friendly });
var popup = friendly.bindPopup('35-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.70280, 37.91948], { icon:friendly });
var popup = friendly.bindPopup('41-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/37.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.69153, 37.87468], { icon:friendly });
var popup = friendly.bindPopup('56-а окрема мотопіхотна бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/39.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.67217, 37.88120], { icon:friendly });
var popup = friendly.bindPopup('21-й окремий мотопіхотний батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.63467, 37.86043], { icon:friendly });
var popup = friendly.bindPopup('14-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/37.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.62037, 37.89614], { icon:friendly });
var popup = friendly.bindPopup('57-а окрема мотопіхотна бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.59077, 37.82996], { icon:friendly });
var popup = friendly.bindPopup('420-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.57155, 37.91519], { icon:friendly });
var popup = friendly.bindPopup('22-а окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.41223, 37.91451], { icon:friendly });
var popup = friendly.bindPopup('46-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.15171, 37.73134], { icon:friendly });
var popup = friendly.bindPopup('42-й окремий стрілецька бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.09774, 37.59453], { icon:friendly });
var popup = friendly.bindPopup('142-й окремий стрілецька бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/37.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.05623, 37.55573], { icon:friendly });
var popup = friendly.bindPopup('59-а окрема мотопіхотна бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/37.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.81206, 37.40519], { icon:friendly });
var popup = friendly.bindPopup('12-й окремий мотопіхотний батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.75557, 37.02667], { icon:friendly });
var popup = friendly.bindPopup('52-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.79371, 36.99007], { icon:friendly });
var popup = friendly.bindPopup('69-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.76386, 36.93732], { icon:friendly });
var popup = friendly.bindPopup('26-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/36.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.77807, 36.86274], { icon:friendly });
var popup = friendly.bindPopup('3-й механізований батальйон окремої президентської бригади').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.73121, 36.53641], { icon:friendly });
var popup = friendly.bindPopup('23-я окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.55333, 35.81200], { icon:friendly });
var popup = friendly.bindPopup('117-я окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.53082, 35.90075], { icon:friendly });
var popup = friendly.bindPopup('33-я окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.50782, 35.46181], { icon:friendly });
var popup = friendly.bindPopup('2-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.54295, 35.37241], { icon:friendly });
var popup = friendly.bindPopup('11-й окремий стрілецький батальйон').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.38737, 37.90751], { icon:friendly });
var popup = friendly.bindPopup('24-та окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.76982, 36.70927], { icon:friendly });
var popup = friendly.bindPopup('31-ша окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.42379, 37.89794], { icon:friendly });
var popup = friendly.bindPopup('32-га окрема механізована бригадa').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.44101, 35.84109], { icon:friendly });
var popup = friendly.bindPopup('47-ма окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.28539, 37.96257], { icon:friendly });
var popup = friendly.bindPopup('66-та окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.79765, 38.18092], { icon:friendly });
var popup = friendly.bindPopup('54-та окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.97126, 38.00377], { icon:friendly });
var popup = friendly.bindPopup('63-тя окрема механізована бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([50.29367, 37.04212], { icon:friendly });
var popup = friendly.bindPopup('60-та окрема механізована бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.12820, 37.66036], { icon:friendly });
var popup = friendly.bindPopup('53-тя окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.01710, 37.94918], { icon:friendly });
var popup = friendly.bindPopup('67-ма окрема механізована бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.72776, 37.93995], { icon:friendly });
var popup = friendly.bindPopup('30-та окрема механізована бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.51105, 35.67570], { icon:friendly });
var popup = friendly.bindPopup('116-та окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.76084, 37.72242], { icon:friendly });
var popup = friendly.bindPopup('14-та окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.53117, 37.90798], { icon:friendly });
var popup = friendly.bindPopup('92-га окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.46743, 37.92360], { icon:friendly });
var popup = friendly.bindPopup('28-ма окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.14209, 37.75280], { icon:friendly });
var popup = friendly.bindPopup('110-та окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.76533, 37.69366], { icon:friendly });
var popup = friendly.bindPopup('115-та окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.51237, 37.95339], { icon:friendly });
var popup = friendly.bindPopup('93-тя окрема механізована бригада «Холодний Яр»').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.77935, 37.25189], { icon:friendly });
var popup = friendly.bindPopup('72-га окрема механізована бригада').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/9.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.51100, 35.81474], { icon:friendly });
var popup = friendly.bindPopup('65-та окрема механізована бригада').openPopup()
popup.addTo(map);



// TRO Group
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([50.00035, 37.66422], { icon:friendly });
var popup = friendly.bindPopup('107-а окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/29.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.97988, 38.02162], { icon:friendly });
var popup = friendly.bindPopup('54-й окремий батальйон ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.59854, 37.94210], { icon:friendly });
var popup = friendly.bindPopup('181-а окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.46962, 37.77237], { icon:friendly });
var popup = friendly.bindPopup('117-а окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.39308, 37.85511], { icon:friendly });
var popup = friendly.bindPopup('228-а окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.20323, 37.63727], { icon:friendly });
var popup = friendly.bindPopup('129-а окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.99164, 37.49256], { icon:friendly });
var popup = friendly.bindPopup('116-а окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.75915, 36.65314], { icon:friendly });
var popup = friendly.bindPopup('110-а окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.22172, 33.76167], { icon:friendly });
var popup = friendly.bindPopup('121-ша окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([51.72958, 26.27792], { icon:friendly });
var popup = friendly.bindPopup('104-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.96337, 38.06540], { icon:friendly });
var popup = friendly.bindPopup('100-та окрема бригада ТРO').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([50.96837, 29.86633], { icon:friendly });
var popup = friendly.bindPopup('120-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.20826, 38.03681], { icon:friendly });
var popup = friendly.bindPopup('111-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([51.38614, 29.05472], { icon:friendly });
var popup = friendly.bindPopup('115-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([51.66941, 33.91308], { icon:friendly });
var popup = friendly.bindPopup('101-ша окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.63364, 36.27359], { icon:friendly });
var popup = friendly.bindPopup('102-га окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.54256, 35.78161], { icon:friendly });
var popup = friendly.bindPopup('106-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.75789, 33.03082], { icon:friendly });
var popup = friendly.bindPopup('126-та окрема бригадa ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.63606, 32.05244], { icon:friendly });
var popup = friendly.bindPopup('124-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.51387, 35.92435], { icon:friendly });
var popup = friendly.bindPopup('108-ма окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.34883, 37.88395], { icon:friendly });
var popup = friendly.bindPopup('109-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.59379, 37.91107], { icon:friendly });
var popup = friendly.bindPopup('127-ма окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([50.26630, 35.94521], { icon:friendly });
var popup = friendly.bindPopup('113-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.32951, 37.89691], { icon:friendly });
var popup = friendly.bindPopup('105-та окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.43774, 37.90721], { icon:friendly });
var popup = friendly.bindPopup('103-тя окрема бригада ТРО').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/2.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.98393, 38.05630], { icon:friendly });
var popup = friendly.bindPopup('112-та окрема бригада ТРО').openPopup()
popup.addTo(map);


var friendly = L.icon({
    iconUrl: 'img/ua/NEW/14.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.68201, 32.78286], { icon:friendly });
var popup = friendly.bindPopup('38-а окрема бригада морської піхоти').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/14.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.79454, 33.14335], { icon:friendly });
var popup = friendly.bindPopup('37-а окрема бригада морської піхоти').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/8.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.90064, 33.37904], { icon:friendly });
var popup = friendly.bindPopup('Рота поліції «Кривбас»').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/14.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.74886, 32.97289], { icon:friendly });
var popup = friendly.bindPopup('36-та окрема бригада морської піхоти').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/23.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.94373, 32.03948], { icon:friendly });
var popup = friendly.bindPopup('19-й полк охорони громадського порядку Національної Гвардії України').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/24.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.98816, 32.10823], { icon:friendly });
var popup = friendly.bindPopup('145-й окремий ремонтно-відновлювальний полк').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/25.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.96145, 32.01004], { icon:friendly });
var popup = friendly.bindPopup('19-й окремий полк радіо та радіотехнічної розвідки спеціального призначення').openPopup()
popup.addTo(map);
var friendly = L.icon({
    iconUrl: 'img/ua/NEW/28.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.97590, 33.44307], { icon:friendly });
var popup = friendly.bindPopup('78-й окремий батальйон матеріального забезпечення').openPopup()
popup.addTo(map);




var friendly = L.icon({
    iconUrl: 'img/ua/NEW/17.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.60369, 37.93510], { icon:friendly });
var popup = friendly.bindPopup('77-а окрема аеромобільна бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/15.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.44861, 35.94237], { icon:friendly });
var popup = friendly.bindPopup('82-а окрема десантно-штурмова бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEUTRAL/KALINOUSKI.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.62368, 37.92131], { icon:friendly });
var popup = friendly.bindPopup('Полк імені Кастуся Калиновського').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/14.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.74865, 32.94250], { icon:friendly });
var popup = friendly.bindPopup('35-та окрема бригада морської піхоти').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/15.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.85536, 37.45926], { icon:friendly });
var popup = friendly.bindPopup('79-та окрема десантно-штурмова бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEUTRAL/RUS.png',
    iconSize: [32, 32],
});
var friendly = L.marker([50.28320, 36.94410], { icon:friendly });
var popup = friendly.bindPopup('Російський добровольчий корпус').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEUTRAL/RUS.png',
    iconSize: [32, 32],
});
var friendly = L.marker([46.87621, 33.45663], { icon:friendly });
var popup = friendly.bindPopup('Російський добровольчий корпус').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/15.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.52283, 37.93631], { icon:friendly });
var popup = friendly.bindPopup('80-та окрема десантно-штурмова бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/17.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.13764, 38.03209], { icon:friendly });
var popup = friendly.bindPopup('25-та окрема повітрянодесантна бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/15.png',
    iconSize: [32, 32],
});
var friendly = L.marker([49.00632, 37.97776], { icon:friendly });
var popup = friendly.bindPopup('95-та окрема десантно-штурмова бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/17.png',
    iconSize: [32, 32],
});
var friendly = L.marker([48.92213, 38.23663], { icon:friendly });
var popup = friendly.bindPopup('81-ша окрема аеромобільна бригада').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/16.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.94479, 37.49149], { icon:friendly });
var popup = friendly.bindPopup('503-й окремий батальйон морської піхоти').openPopup()
popup.addTo(map);

var friendly = L.icon({
    iconUrl: 'img/ua/NEW/17.png',
    iconSize: [32, 32],
});
var friendly = L.marker([47.52233, 35.82736], { icon:friendly });
var popup = friendly.bindPopup('46-та окрема аеромобільна бригада').openPopup()
popup.addTo(map);
