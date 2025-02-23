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

/* eslint-disable stdlib/require-order */

'use strict';

// MODULES //

var append = require( './../append.js' );


// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.deg2rad',
	'path': '@stdlib/math/base/special/deg2rad',
	'value': require( '@stdlib/math/base/special/deg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rad2deg'
	]
});

ns.push({
	'alias': 'base.deg2radf',
	'path': '@stdlib/math/base/special/deg2radf',
	'value': require( '@stdlib/math/base/special/deg2radf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/deg2rad',
		'@stdlib/math/base/special/rad2degf'
	]
});

ns.push({
	'alias': 'base.digamma',
	'path': '@stdlib/math/base/special/digamma',
	'value': require( '@stdlib/math/base/special/digamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/base/special/trigamma'
	]
});

ns.push({
	'alias': 'base.diracDelta',
	'path': '@stdlib/math/base/special/dirac-delta',
	'value': require( '@stdlib/math/base/special/dirac-delta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/kronecker-delta'
	]
});

ns.push({
	'alias': 'base.div',
	'path': '@stdlib/number/float64/base/div',
	'value': require( '@stdlib/number/float64/base/div' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/add',
		'@stdlib/number/float64/base/mul',
		'@stdlib/number/float64/base/sub'
	]
});

ns.push({
	'alias': 'base.divf',
	'path': '@stdlib/number/float32/base/div',
	'value': require( '@stdlib/number/float32/base/div' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/add',
		'@stdlib/number/float64/base/div',
		'@stdlib/math/base/ops/mulf',
		'@stdlib/math/base/ops/subf'
	]
});

ns.push({
	'alias': 'base.dotcase',
	'path': '@stdlib/string/base/dotcase',
	'value': require( '@stdlib/string/base/dotcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/camelcase',
		'@stdlib/string/base/lowercase',
		'@stdlib/string/base/snakecase',
		'@stdlib/string/base/uppercase'
	]
});

append( ns, require( './dists' ) );


// EXPORTS //

module.exports = ns;
