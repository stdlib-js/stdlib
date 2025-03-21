/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Define non-enumerable read-only properties which expose strided array function meta data.
*
* @module @stdlib/strided/base/meta-data-props
*
* @example
* var setProps = require( '@stdlib/strided/base/meta-data-props' );
*
* // Define strided array function meta data:
* var meta = {
*     'nargs': 7,
*     'nin': 1,
*     'nout': 1
* };
*
* // Define the list of strided array data types:
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32',
*     'generic', 'generic'
* ];
*
* // Define an object/function on which to set the properties:
* var obj = {};
*
* // Set the properties:
* setProps( meta, dtypes, obj, false );
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
