/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var army = require( './../data/army.json' );
var cities = require( './../data/cities.json' );
var labels = require( './../data/labels.json' );
var rivers = require( './../data/rivers.geo.json' );
var temperature = require( './../data/temperature.json' );


// MAIN //

var data = {};
data.army = army;
data.cities = cities;
data.labels = labels;
data.rivers = rivers;
data.temperature = temperature;


// EXPORTS //

module.exports = data;
