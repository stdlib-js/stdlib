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
	'standalone': 'stdlib_datasets_img',
	'namespace': 'flat',
	'raw': false,
	'minified': true,
	'include': [
		// TODO: we should be able to programmatically generate this list based on naming conventions
		'@stdlib/datasets/img-acanthus-mollis',
		'@stdlib/datasets/img-airplane-from-above',
		'@stdlib/datasets/img-allium-oreophilum',
		'@stdlib/datasets/img-black-canyon',
		'@stdlib/datasets/img-dust-bowl-home',
		'@stdlib/datasets/img-french-alpine-landscape',
		'@stdlib/datasets/img-locomotion-house-cat',
		'@stdlib/datasets/img-locomotion-nude-male',
		'@stdlib/datasets/img-march-pastoral',
		'@stdlib/datasets/img-nagasaki-boats'
	]
};


// EXPORTS //

module.exports = BUNDLE;
