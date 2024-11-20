<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Napoleon's March

> Data for [Charles Joseph Minard][minard]'s famous cartographic depiction of Napoleon's Russian [campaign of 1812][campaign-of-1812].

<section class="intro">

<!-- <image class="image" align="center" alt="Napoleon's March"> -->

<div class="image" align="center">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aff3d7765cbe11f4df0c8fef93c02bc4d3ba8874/lib/node_modules/@stdlib/datasets/minard-napoleons-march/docs/img/minard.png" alt="Napoleon's March">
    <br>
</div>

<!-- </image> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var minard = require( '@stdlib/datasets/minard-napoleons-march' );
```

#### minard( \[options] )

Data for [Charles Joseph Minard][minard]'s famous cartographic depiction of Napoleon's Russian [campaign of 1812][campaign-of-1812].

```javascript
var data = minard();
/* returns
    {
      'army': [
        {'lon': 24,'lat': 54.9,'size': 340000,'direction': 'A','division': 1},
        {'lon': 24.5,'lat': 55,'size': 340000,'direction': 'A','division': 1},
        {'lon': 25.5,'lat': 54.5,'size': 340000,'direction': 'A','division': 1},
        {'lon': 26,'lat': 54.7,'size': 320000,'direction': 'A','division': 1},
        {'lon': 27,'lat': 54.8,'size': 300000,'direction': 'A','division': 1},
        {'lon': 28,'lat': 54.9,'size': 280000,'direction': 'A','division': 1},
        {'lon': 28.5,'lat': 55,'size': 240000,'direction': 'A','division': 1},
        {'lon': 29,'lat': 55.1,'size': 210000,'direction': 'A','division': 1},
        {'lon': 30,'lat': 55.2,'size': 180000,'direction': 'A','division': 1},
        {'lon': 30.3,'lat': 55.3,'size': 175000,'direction': 'A','division': 1},
        {'lon': 32,'lat': 54.8,'size': 145000,'direction': 'A','division': 1},
        {'lon': 33.2,'lat': 54.9,'size': 140000,'direction': 'A','division': 1},
        {'lon': 34.4,'lat': 55.5,'size': 127100,'direction': 'A','division': 1},
        {'lon': 35.5,'lat': 55.4,'size': 100000,'direction': 'A','division': 1},
        {'lon': 36,'lat': 55.5,'size': 100000,'direction': 'A','division': 1},
        {'lon': 37.6,'lat': 55.8,'size': 100000,'direction': 'R','division': 1},
        {'lon': 37.5,'lat': 55.7,'size': 98000,'direction': 'R','division': 1},
        {'lon': 37,'lat': 55,'size': 97000,'direction': 'R','division': 1},
        {'lon': 36.8,'lat': 55,'size': 96000,'direction': 'R','division': 1},
        {'lon': 35.4,'lat': 55.3,'size': 87000,'direction': 'R','division': 1},
        {'lon': 34.3,'lat': 55.2,'size': 55000,'direction': 'R','division': 1},
        {'lon': 33.3,'lat': 54.8,'size': 37000,'direction': 'R','division': 1},
        {'lon': 32,'lat': 54.6,'size': 24000,'direction': 'R','division': 1},
        {'lon': 30.4,'lat': 54.4,'size': 20000,'direction': 'R','division': 1},
        {'lon': 29.2,'lat': 54.4,'size': 20000,'direction': 'R','division': 1},
        {'lon': 28.5,'lat': 54.3,'size': 20000,'direction': 'R','division': 1},
        {'lon': 28.3,'lat': 54.4,'size': 20000,'direction': 'R','division': 1},
        {'lon': 24,'lat': 55.1,'size': 60000,'direction': 'A','division': 2},
        {'lon': 24.5,'lat': 55.2,'size': 60000,'direction': 'A','division': 2},
        {'lon': 25.5,'lat': 54.7,'size': 60000,'direction': 'A','division': 2},
        {'lon': 26.6,'lat': 55.7,'size': 40000,'direction': 'A','division': 2},
        {'lon': 27.4,'lat': 55.6,'size': 33000,'direction': 'A','division': 2},
        {'lon': 28.7,'lat': 55.5,'size': 33000,'direction': 'R','division': 2},
        {'lon': 29.2,'lat': 54.3,'size': 30000,'direction': 'R','division': 2},
        {'lon': 28.5,'lat': 54.2,'size': 30000,'direction': 'R','division': 2},
        {'lon': 28.3,'lat': 54.3,'size': 28000,'direction': 'R','division': 2},
        {'lon': 27.5,'lat': 54.5,'size': 20000,'direction': 'R','division': 2},
        {'lon': 26.8,'lat': 54.3,'size': 12000,'direction': 'R','division': 2},
        {'lon': 26.4,'lat': 54.4,'size': 14000,'direction': 'R','division': 2},
        {'lon': 24.6,'lat': 54.5,'size': 8000,'direction': 'R','division': 2},
        {'lon': 24.4,'lat': 54.4,'size': 4000,'direction': 'R','division': 2},
        {'lon': 24.2,'lat': 54.4,'size': 4000,'direction': 'R','division': 2},
        {'lon': 24.1,'lat': 54.3,'size': 4000,'direction': 'R','division': 2},
        {'lon': 24,'lat': 55.2,'size': 22000,'direction': 'A','division': 3},
        {'lon': 24.5,'lat': 55.3,'size': 22000,'direction': 'A','division': 3},
        {'lon': 24.6,'lat': 55.8,'size': 6000,'direction': 'R','division': 3},
        {'lon': 24.2,'lat': 54.4,'size': 6000,'direction': 'R','division': 3},
        {'lon': 24.1,'lat': 54.3,'size': 6000,'direction': 'R','division': 3}
      ],
      'cities': [
        {'lon': 24,'lat': 55,'city': 'Kowno',
        {'lon': 25.3,'lat': 54.7,'city': 'Wilna',
        {'lon': 26.4,'lat': 54.4,'city': 'Smorgoni',
        {'lon': 26.8,'lat': 54.3,'city': 'Molodexno',
        {'lon': 27.7,'lat': 55.2,'city': 'Gloubokoe',
        {'lon': 27.6,'lat': 53.9,'city': 'Minsk',
        {'lon': 28.5,'lat': 54.3,'city': 'Studienska',
        {'lon': 28.7,'lat': 55.5,'city': 'Polotzk',
        {'lon': 29.2,'lat': 54.4,'city': 'Bobr',
        {'lon': 30.2,'lat': 55.3,'city': 'Witebsk',
        {'lon': 30.4,'lat': 54.5,'city': 'Orscha',
        {'lon': 30.4,'lat': 53.9,'city': 'Mohilow',
        {'lon': 32,'lat': 54.8,'city': 'Smolensk',
        {'lon': 33.2,'lat': 54.9,'city': 'Dorogobouge',
        {'lon': 34.3,'lat': 55.2,'city': 'Wixma',
        {'lon': 34.4,'lat': 55.5,'city': 'Chjat',
        {'lon': 36,'lat': 55.5,'city': 'Mojaisk',
        {'lon': 37.6,'lat': 55.8,'city': 'Moscou',
        {'lon': 36.6,'lat': 55.3,'city': 'Tarantino',
        {'lon': 36.5,'lat': 55,'city': 'Malo-Jarosewli'
      ],
      'labels': [
        {'lon': 24,'lat': 54.9,'size': 422000,'division': 1},
        {'lon': 30.3,'lat': 55.3,'size': 175000,'division': 1},
        {'lon': 32,'lat': 54.8,'size': 145000,'division': 1},
        {'lon': 34.4,'lat': 55.5,'size': 127100,'division': 1},
        {'lon': 35.5,'lat': 55.4,'size': 100000,'division': 1},
        {'lon': 37.7,'lat': 55.7,'size': 100000,'division': 1},
        {'lon': 36.8,'lat': 55,'size': 96000,'division': 1},
        {'lon': 35.4,'lat': 55.3,'size': 87000,'division': 1},
        {'lon': 34.3,'lat': 55.2,'size': 55000,'division': 1},
        {'lon': 33.3,'lat': 54.8,'size': 37000,'division': 1},
        {'lon': 32,'lat': 54.6,'size': 24000,'division': 1},
        {'lon': 30.4,'lat': 54.4,'size': 20000,'division': 1},
        {'lon': 29.2,'lat': 54.3,'size': 50000,'division': 1},
        {'lon': 28.5,'lat': 54.2,'size': 28000,'division': 1},
        {'lon': 26.8,'lat': 54.3,'size': 12000,'division': 1},
        {'lon': 25,'lat': 54.4,'size': 8000,'division': 1},
        {'lon': 24.4,'lat': 54.4,'size': 4000,'division': 1},
        {'lon': 24.1,'lat': 54.4,'size': 10000,'division': 1},
        {'lon': 26.6,'lat': 55.7,'size': 60000,'division': 2},
        {'lon': 28.7,'lat': 55.5,'size': 33000,'division': 2},
        {'lon': 24.5,'lat': 55.3,'size': 22000,'division': 3},
        {'lon': 24.6,'lat': 55.8,'size': 6000,'division': 3}
      ],
      'rivers': {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {'id': 1684,'wso_id': 748037,'objectid': 2898,'featurecla': 'River','scalerank': 12,'rivernum': 403898,'dissolve': '403898River','name': 'Sozh'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 57,'wso_id': 1456942,'objectid': 1108,'featurecla': 'Lake Centerline','scalerank': 11,'rivernum': 402108,'dissolve': '402108Lake Centerline','name': 'Vazuza'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1509,'wso_id': 748037,'objectid': 6634,'featurecla': 'Lake Centerline','scalerank': 10,'rivernum': 407634,'dissolve': '407634Lake Centerline','name': 'Desna'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1871,'wso_id': 748037,'objectid': 3314,'featurecla': 'Lake Centerline','scalerank': 12,'rivernum': 404314,'dissolve': '404314Lake Centerline','name': 'Druts'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1684,'wso_id': 748037,'objectid': 2898,'featurecla': 'River','scalerank': 10,'rivernum': 403898,'dissolve': '403898River','name': 'Sozh'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1684,'wso_id': 748037,'objectid': 2898,'featurecla': 'River','scalerank': 10,'rivernum': 403898,'dissolve': '403898River','name': 'Sozh'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1924,'wso_id': 748037,'objectid': 3569,'featurecla': 'River','scalerank': 11,'rivernum': 404569,'dissolve': '404569River','name': 'Pronya'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1509,'wso_id': 748037,'objectid': 6634,'featurecla': 'River','scalerank': 10,'rivernum': 407634,'dissolve': '407634River','name': 'Desna'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 57,'wso_id': 1456942,'objectid': 1108,'featurecla': 'River','scalerank': 11,'rivernum': 402108,'dissolve': '402108River','name': 'Vazuza'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1871,'wso_id': 748037,'objectid': 3314,'featurecla': 'River','scalerank': 12,'rivernum': 404314,'dissolve': '404314River','name': 'Druts'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1201,'wso_id': 748037,'objectid': 8004,'featurecla': 'River','scalerank': 10,'rivernum': 409004,'dissolve': '409004River','name': 'Dnepr'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1,'wso_id': 1456942,'objectid': 1,'featurecla': 'River','scalerank': 10,'rivernum': 401001,'dissolve': '401001River','name': 'Oka, Volga'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1,'wso_id': 1456942,'objectid': 1,'featurecla': 'River','scalerank': 10,'rivernum': 401001,'dissolve': '401001River','name': 'Oka, Volga'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 76,'wso_id': 1456942,'objectid': 1526,'featurecla': 'River','scalerank': 12,'rivernum': 402526,'dissolve': '402526River','name': null},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 3020,'wso_id': 831224,'objectid': 2853,'featurecla': 'River','scalerank': 10,'rivernum': 403853,'dissolve': '403853River','name': 'Kasplya'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 3702,'wso_id': 831224,'objectid': 2291,'featurecla': 'River','scalerank': 10,'rivernum': 403291,'dissolve': '403291River','name': 'Ula'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 22,'wso_id': 1456942,'objectid': 528,'featurecla': 'River','scalerank': 11,'rivernum': 401528,'dissolve': '401528River','name': 'Volga'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 2888,'wso_id': 4,'objectid': 2383,'featurecla': 'River','scalerank': 11,'rivernum': 403383,'dissolve': '403383River','name': 'Usha, Nyoman'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 2888,'wso_id': 4,'objectid': 2383,'featurecla': 'River','scalerank': 10,'rivernum': 403383,'dissolve': '403383River','name': 'Usha, Nyoman'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 2888,'wso_id': 4,'objectid': 2383,'featurecla': 'River','scalerank': 10,'rivernum': 403383,'dissolve': '403383River','name': 'Usha, Nyoman'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 2888,'wso_id': 4,'objectid': 2383,'featurecla': 'Lake Centerline','scalerank': 10,'rivernum': 403383,'dissolve': '403383Lake Centerline','name': 'Usha, Nyoman'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1587,'wso_id': 748037,'objectid': 8334,'featurecla': 'River','scalerank': 10,'rivernum': 409334,'dissolve': '409334River','name': 'Byarezina'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          }
        ]
      },
      'temperature': [
        {'lon': 37.6,'temp': 0,'date': '18 Oct 1812'},
        {'lon': 36,'temp': 0,'date': '24 Oct 1812'},
        {'lon': 33.2,'temp': -9,'date': '09 Nov 1812'},
        {'lon': 32,'temp': -21,'date': '14 Nov 1812'},
        {'lon': 29.2,'temp': -11,'date': '24 Nov 1812'},
        {'lon': 28.5,'temp': -20,'date': '28 Nov 1812'},
        {'lon': 27.2,'temp': -24,'date': '01 Dec 1812'},
        {'lon': 26.7,'temp': -30,'date': '06 Dec 1812'},
        {'lon': 25.3,'temp': -26,'date': '07 Dec 1812'}
      ]
    }
*/
```

The function accepts the following `options`:

-   **data**: dataset name. The following names are recognized:

    -   **army**: army size.
    -   **cities**: cities.
    -   **labels**: map labels.
    -   **temperature**: temperature during the army's return from Russia.
    -   **rivers**: river data.

To return only army size data, set the `data` option to `army`.

```javascript
var opts = {
    'data': 'army'
};

var data = minard( opts );
/* returns
    [
        {'lon': 24,'lat': 54.9,'size': 340000,'direction': 'A','division': 1},
        {'lon': 24.5,'lat': 55,'size': 340000,'direction': 'A','division': 1},
        {'lon': 25.5,'lat': 54.5,'size': 340000,'direction': 'A','division': 1},
        {'lon': 26,'lat': 54.7,'size': 320000,'direction': 'A','division': 1},
        {'lon': 27,'lat': 54.8,'size': 300000,'direction': 'A','division': 1},
        {'lon': 28,'lat': 54.9,'size': 280000,'direction': 'A','division': 1},
        {'lon': 28.5,'lat': 55,'size': 240000,'direction': 'A','division': 1},
        {'lon': 29,'lat': 55.1,'size': 210000,'direction': 'A','division': 1},
        {'lon': 30,'lat': 55.2,'size': 180000,'direction': 'A','division': 1},
        {'lon': 30.3,'lat': 55.3,'size': 175000,'direction': 'A','division': 1},
        {'lon': 32,'lat': 54.8,'size': 145000,'direction': 'A','division': 1},
        {'lon': 33.2,'lat': 54.9,'size': 140000,'direction': 'A','division': 1},
        {'lon': 34.4,'lat': 55.5,'size': 127100,'direction': 'A','division': 1},
        {'lon': 35.5,'lat': 55.4,'size': 100000,'direction': 'A','division': 1},
        {'lon': 36,'lat': 55.5,'size': 100000,'direction': 'A','division': 1},
        {'lon': 37.6,'lat': 55.8,'size': 100000,'direction': 'R','division': 1},
        {'lon': 37.5,'lat': 55.7,'size': 98000,'direction': 'R','division': 1},
        {'lon': 37,'lat': 55,'size': 97000,'direction': 'R','division': 1},
        {'lon': 36.8,'lat': 55,'size': 96000,'direction': 'R','division': 1},
        {'lon': 35.4,'lat': 55.3,'size': 87000,'direction': 'R','division': 1},
        {'lon': 34.3,'lat': 55.2,'size': 55000,'direction': 'R','division': 1},
        {'lon': 33.3,'lat': 54.8,'size': 37000,'direction': 'R','division': 1},
        {'lon': 32,'lat': 54.6,'size': 24000,'direction': 'R','division': 1},
        {'lon': 30.4,'lat': 54.4,'size': 20000,'direction': 'R','division': 1},
        {'lon': 29.2,'lat': 54.4,'size': 20000,'direction': 'R','division': 1},
        {'lon': 28.5,'lat': 54.3,'size': 20000,'direction': 'R','division': 1},
        {'lon': 28.3,'lat': 54.4,'size': 20000,'direction': 'R','division': 1},
        {'lon': 24,'lat': 55.1,'size': 60000,'direction': 'A','division': 2},
        {'lon': 24.5,'lat': 55.2,'size': 60000,'direction': 'A','division': 2},
        {'lon': 25.5,'lat': 54.7,'size': 60000,'direction': 'A','division': 2},
        {'lon': 26.6,'lat': 55.7,'size': 40000,'direction': 'A','division': 2},
        {'lon': 27.4,'lat': 55.6,'size': 33000,'direction': 'A','division': 2},
        {'lon': 28.7,'lat': 55.5,'size': 33000,'direction': 'R','division': 2},
        {'lon': 29.2,'lat': 54.3,'size': 30000,'direction': 'R','division': 2},
        {'lon': 28.5,'lat': 54.2,'size': 30000,'direction': 'R','division': 2},
        {'lon': 28.3,'lat': 54.3,'size': 28000,'direction': 'R','division': 2},
        {'lon': 27.5,'lat': 54.5,'size': 20000,'direction': 'R','division': 2},
        {'lon': 26.8,'lat': 54.3,'size': 12000,'direction': 'R','division': 2},
        {'lon': 26.4,'lat': 54.4,'size': 14000,'direction': 'R','division': 2},
        {'lon': 24.6,'lat': 54.5,'size': 8000,'direction': 'R','division': 2},
        {'lon': 24.4,'lat': 54.4,'size': 4000,'direction': 'R','division': 2},
        {'lon': 24.2,'lat': 54.4,'size': 4000,'direction': 'R','division': 2},
        {'lon': 24.1,'lat': 54.3,'size': 4000,'direction': 'R','division': 2},
        {'lon': 24,'lat': 55.2,'size': 22000,'direction': 'A','division': 3},
        {'lon': 24.5,'lat': 55.3,'size': 22000,'direction': 'A','division': 3},
        {'lon': 24.6,'lat': 55.8,'size': 6000,'direction': 'R','division': 3},
        {'lon': 24.2,'lat': 54.4,'size': 6000,'direction': 'R','division': 3},
        {'lon': 24.1,'lat': 54.3,'size': 6000,'direction': 'R','division': 3}
    ]
*/
```

To return only city locations, set the `data` option to `cities`.

```javascript
var opts = {
    'data': 'cities'
};

var data = minard( opts );
/* returns
    [
        {'lon': 24,'lat': 55,'city': 'Kowno',
        {'lon': 25.3,'lat': 54.7,'city': 'Wilna',
        {'lon': 26.4,'lat': 54.4,'city': 'Smorgoni',
        {'lon': 26.8,'lat': 54.3,'city': 'Molodexno',
        {'lon': 27.7,'lat': 55.2,'city': 'Gloubokoe',
        {'lon': 27.6,'lat': 53.9,'city': 'Minsk',
        {'lon': 28.5,'lat': 54.3,'city': 'Studienska',
        {'lon': 28.7,'lat': 55.5,'city': 'Polotzk',
        {'lon': 29.2,'lat': 54.4,'city': 'Bobr',
        {'lon': 30.2,'lat': 55.3,'city': 'Witebsk',
        {'lon': 30.4,'lat': 54.5,'city': 'Orscha',
        {'lon': 30.4,'lat': 53.9,'city': 'Mohilow',
        {'lon': 32,'lat': 54.8,'city': 'Smolensk',
        {'lon': 33.2,'lat': 54.9,'city': 'Dorogobouge',
        {'lon': 34.3,'lat': 55.2,'city': 'Wixma',
        {'lon': 34.4,'lat': 55.5,'city': 'Chjat',
        {'lon': 36,'lat': 55.5,'city': 'Mojaisk',
        {'lon': 37.6,'lat': 55.8,'city': 'Moscou',
        {'lon': 36.6,'lat': 55.3,'city': 'Tarantino',
        {'lon': 36.5,'lat': 55,'city': 'Malo-Jarosewli'
    ]
*/
```

To return only temperature data, set the `data` option to `temperature`.

```javascript
var opts = {
    'data': 'temperature'
};

var data = minard( opts );
/* returns
    [
        {'lon': 37.6,'temp': 0,'date': '18 Oct 1812'},
        {'lon': 36,'temp': 0,'date': '24 Oct 1812'},
        {'lon': 33.2,'temp': -9,'date': '09 Nov 1812'},
        {'lon': 32,'temp': -21,'date': '14 Nov 1812'},
        {'lon': 29.2,'temp': -11,'date': '24 Nov 1812'},
        {'lon': 28.5,'temp': -20,'date': '28 Nov 1812'},
        {'lon': 27.2,'temp': -24,'date': '01 Dec 1812'},
        {'lon': 26.7,'temp': -30,'date': '06 Dec 1812'},
        {'lon': 25.3,'temp': -26,'date': '07 Dec 1812'}
    ]
*/
```

To return only the army size label locations, set the `data` option to `labels`.

```javascript
var opts = {
    'data': 'labels'
};

var data = minard( opts );
/* returns
    [
        {'lon': 24,'lat': 54.9,'size': 422000,'division': 1},
        {'lon': 30.3,'lat': 55.3,'size': 175000,'division': 1},
        {'lon': 32,'lat': 54.8,'size': 145000,'division': 1},
        {'lon': 34.4,'lat': 55.5,'size': 127100,'division': 1},
        {'lon': 35.5,'lat': 55.4,'size': 100000,'division': 1},
        {'lon': 37.7,'lat': 55.7,'size': 100000,'division': 1},
        {'lon': 36.8,'lat': 55,'size': 96000,'division': 1},
        {'lon': 35.4,'lat': 55.3,'size': 87000,'division': 1},
        {'lon': 34.3,'lat': 55.2,'size': 55000,'division': 1},
        {'lon': 33.3,'lat': 54.8,'size': 37000,'division': 1},
        {'lon': 32,'lat': 54.6,'size': 24000,'division': 1},
        {'lon': 30.4,'lat': 54.4,'size': 20000,'division': 1},
        {'lon': 29.2,'lat': 54.3,'size': 50000,'division': 1},
        {'lon': 28.5,'lat': 54.2,'size': 28000,'division': 1},
        {'lon': 26.8,'lat': 54.3,'size': 12000,'division': 1},
        {'lon': 25,'lat': 54.4,'size': 8000,'division': 1},
        {'lon': 24.4,'lat': 54.4,'size': 4000,'division': 1},
        {'lon': 24.1,'lat': 54.4,'size': 10000,'division': 1},
        {'lon': 26.6,'lat': 55.7,'size': 60000,'division': 2},
        {'lon': 28.7,'lat': 55.5,'size': 33000,'division': 2},
        {'lon': 24.5,'lat': 55.3,'size': 22000,'division': 3},
        {'lon': 24.6,'lat': 55.8,'size': 6000,'division': 3}
    ]
*/
```

To return only the river data, set the `data` option to `rivers`.

```javascript
var opts = {
    'data': 'rivers'
};

var data = minard( opts );
/* returns
    {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {'id': 1684,'wso_id': 748037,'objectid': 2898,'featurecla': 'River','scalerank': 12,'rivernum': 403898,'dissolve': '403898River','name': 'Sozh'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 57,'wso_id': 1456942,'objectid': 1108,'featurecla': 'Lake Centerline','scalerank': 11,'rivernum': 402108,'dissolve': '402108Lake Centerline','name': 'Vazuza'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1509,'wso_id': 748037,'objectid': 6634,'featurecla': 'Lake Centerline','scalerank': 10,'rivernum': 407634,'dissolve': '407634Lake Centerline','name': 'Desna'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1871,'wso_id': 748037,'objectid': 3314,'featurecla': 'Lake Centerline','scalerank': 12,'rivernum': 404314,'dissolve': '404314Lake Centerline','name': 'Druts'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1684,'wso_id': 748037,'objectid': 2898,'featurecla': 'River','scalerank': 10,'rivernum': 403898,'dissolve': '403898River','name': 'Sozh'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1684,'wso_id': 748037,'objectid': 2898,'featurecla': 'River','scalerank': 10,'rivernum': 403898,'dissolve': '403898River','name': 'Sozh'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1924,'wso_id': 748037,'objectid': 3569,'featurecla': 'River','scalerank': 11,'rivernum': 404569,'dissolve': '404569River','name': 'Pronya'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1509,'wso_id': 748037,'objectid': 6634,'featurecla': 'River','scalerank': 10,'rivernum': 407634,'dissolve': '407634River','name': 'Desna'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 57,'wso_id': 1456942,'objectid': 1108,'featurecla': 'River','scalerank': 11,'rivernum': 402108,'dissolve': '402108River','name': 'Vazuza'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1871,'wso_id': 748037,'objectid': 3314,'featurecla': 'River','scalerank': 12,'rivernum': 404314,'dissolve': '404314River','name': 'Druts'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1201,'wso_id': 748037,'objectid': 8004,'featurecla': 'River','scalerank': 10,'rivernum': 409004,'dissolve': '409004River','name': 'Dnepr'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1,'wso_id': 1456942,'objectid': 1,'featurecla': 'River','scalerank': 10,'rivernum': 401001,'dissolve': '401001River','name': 'Oka, Volga'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1,'wso_id': 1456942,'objectid': 1,'featurecla': 'River','scalerank': 10,'rivernum': 401001,'dissolve': '401001River','name': 'Oka, Volga'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 76,'wso_id': 1456942,'objectid': 1526,'featurecla': 'River','scalerank': 12,'rivernum': 402526,'dissolve': '402526River','name': null},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 3020,'wso_id': 831224,'objectid': 2853,'featurecla': 'River','scalerank': 10,'rivernum': 403853,'dissolve': '403853River','name': 'Kasplya'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 3702,'wso_id': 831224,'objectid': 2291,'featurecla': 'River','scalerank': 10,'rivernum': 403291,'dissolve': '403291River','name': 'Ula'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 22,'wso_id': 1456942,'objectid': 528,'featurecla': 'River','scalerank': 11,'rivernum': 401528,'dissolve': '401528River','name': 'Volga'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 2888,'wso_id': 4,'objectid': 2383,'featurecla': 'River','scalerank': 11,'rivernum': 403383,'dissolve': '403383River','name': 'Usha, Nyoman'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 2888,'wso_id': 4,'objectid': 2383,'featurecla': 'River','scalerank': 10,'rivernum': 403383,'dissolve': '403383River','name': 'Usha, Nyoman'},
            'geometry': {'type': 'MultiLineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 2888,'wso_id': 4,'objectid': 2383,'featurecla': 'River','scalerank': 10,'rivernum': 403383,'dissolve': '403383River','name': 'Usha, Nyoman'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 2888,'wso_id': 4,'objectid': 2383,'featurecla': 'Lake Centerline','scalerank': 10,'rivernum': 403383,'dissolve': '403383Lake Centerline','name': 'Usha, Nyoman'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          },
          {
            'type': 'Feature',
            'properties': {'id': 1587,'wso_id': 748037,'objectid': 8334,'featurecla': 'River','scalerank': 10,'rivernum': 409334,'dissolve': '409334River','name': 'Byarezina'},
            'geometry': {'type': 'LineString','coordinates': [...]}
          }
        ]
    }
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Temperatures are on the [Réaumur scale][reaumur-scale]. Multiply each temperature by `1.25` to convert to Celsius.
-   River data is formatted as [GeoJSON][geojson].
-   River data is incomplete, with portions of rivers missing.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var minard = require( '@stdlib/datasets/minard-napoleons-march' );

var opts = {};

opts.data = 'army';
console.dir( minard( opts ) );

opts.data = 'cities';
console.dir( minard( opts ) );

opts.data = 'labels';
console.dir( minard( opts ) );

opts.data = 'rivers';
console.dir( minard( opts ) );

opts.data = 'temperature';
console.dir( minard( opts ) );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: minard-napoleons-march [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --data name           Dataset name: army, cities, temperature.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   If the `--data` option is set to a supported dataset name, the output format is comma-separated values ([CSV][csv]). Otherwise, the output format is newline-delimited JSON ([NDJSON][ndjson]).

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ minard-napoleons-march --data army
lon,lat,size,direction,division
24.0,54.9,340000,A,1
24.5,55.0,340000,A,1
25.5,54.5,340000,A,1
...
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

* * *

<section class="references">

## References

-   Minard, Charles Joseph. 1869. [_Tableaux graphiques et cartes figuratives_][@minard:1869a]. Ecole nationale des ponts et chaussées.
-   Wilkinson, Leland. 2005. _The Grammar of Graphics_. Springer-Verlag New York. doi:[10.1007/0-387-28695-0][@wilkinson:2005a].

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under a [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[minard]: https://en.wikipedia.org/wiki/Charles_Joseph_Minard

[campaign-of-1812]: https://en.wikipedia.org/wiki/French_invasion_of_Russia_%281812%29

[@minard:1869a]: http://patrimoine.enpc.fr/document/ENPC01_Fol_10975?image=54#bibnum

[@wilkinson:2005a]: https://doi.org/10.1007/0-387-28695-0

[reaumur-scale]: https://en.wikipedia.org/wiki/R%C3%A9aumur_scale

[geojson]: http://geojson.org/

[csv]: https://tools.ietf.org/html/rfc4180

[ndjson]: http://specs.frictionlessdata.io/ndjson/

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

</section>

<!-- /.links -->
