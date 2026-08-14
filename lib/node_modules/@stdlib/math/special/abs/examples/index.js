/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var uniform = require( '@stdlib/random/uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var abs = require( './../lib' );

var x = uniform( [ 5, 5 ], -10.0, 10.0 );
console.log( ndarray2array( x ) );

var y = abs( x );
console.log( ndarray2array( y ) );
