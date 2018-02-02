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

/**
* Extract a nested property value from each element of an object array.
*
* @module @stdlib/utils/deep-pluck
*
* @example
* var pluck = require( '@stdlib/utils/deep-pluck' );
*
* var arr = [
*     {'a':{'b':{'c':1}}},
*     {'a':{'b':{'c':2}}}
* ];
*
* var out = deepPluck( arr, 'a.b.c' );
* // returns [ 1, 2 ]
*
* arr = [
*     {'a':[0,1,2]},
*     {'a':[3,4,5]}
* ];
*
* out = deepPluck( arr, ['a',1] );
* // returns [ 1, 4 ]
*/

// MODULES //

var deepPluck = require( './deep_pluck.js' );


// EXPORTS //

module.exports = deepPluck;
