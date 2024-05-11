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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.uint32ToInt32',
	'path': '@stdlib/number/uint32/base/to-int32',
	'value': require( '@stdlib/number/uint32/base/to-int32' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.umul',
	'path': '@stdlib/math/base/ops/umul',
	'value': require( '@stdlib/math/base/ops/umul' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/imul'
	]
});

ns.push({
	'alias': 'base.umuldw',
	'path': '@stdlib/math/base/ops/umuldw',
	'value': require( '@stdlib/math/base/ops/umuldw' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/imuldw',
		'@stdlib/math/base/ops/umul'
	]
});


// EXPORTS //

module.exports = ns;
