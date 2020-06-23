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

// MAIN //

// Define the bundle:
var BUNDLE = {
	'name': 'bundle',
	'standalone': 'stdlib_iter_flat',
	'namespace': 'flat',
	'raw': true,
	'minified': true,
	'include': [
		// WARNING: this list is fragile, as we must manually update the list of what to include as packages across namespaces change, are added, and/or are removed.
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-circular-iterator',
		'@stdlib/array/to-iterator',
		'@stdlib/array/to-iterator-right',
		'@stdlib/array/to-sparse-iterator',
		'@stdlib/array/to-sparse-iterator-right',
		'@stdlib/array/to-strided-iterator',
		'@stdlib/array/to-view-iterator',
		'@stdlib/array/to-view-iterator-right',
		'@stdlib/iter',
		'@stdlib/math/iter',
		'@stdlib/random/iter',
		'@stdlib/simulate/iter',
		'@stdlib/stats/iter'
	]
};


// EXPORTS //

module.exports = BUNDLE;
