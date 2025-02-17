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
	'alias': 'base.max',
	'path': '@stdlib/math/base/special/max',
	'value': require( '@stdlib/math/base/special/max' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxabs',
		'@stdlib/math/base/special/maxn',
		'@stdlib/math/base/special/min'
	]
});

ns.push({
	'alias': 'base.maxabs',
	'path': '@stdlib/math/base/special/maxabs',
	'value': require( '@stdlib/math/base/special/maxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/max',
		'@stdlib/math/base/special/minabs'
	]
});

ns.push({
	'alias': 'base.maxabsn',
	'path': '@stdlib/math/base/special/maxabsn',
	'value': require( '@stdlib/math/base/special/maxabsn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxn',
		'@stdlib/math/base/special/maxabs',
		'@stdlib/math/base/special/minabsn'
	]
});

ns.push({
	'alias': 'base.maxn',
	'path': '@stdlib/math/base/special/maxn',
	'value': require( '@stdlib/math/base/special/maxn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/max',
		'@stdlib/math/base/special/maxabsn',
		'@stdlib/math/base/special/minn'
	]
});

ns.push({
	'alias': 'base.min',
	'path': '@stdlib/math/base/special/min',
	'value': require( '@stdlib/math/base/special/min' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/max',
		'@stdlib/math/base/special/minabs',
		'@stdlib/math/base/special/minn'
	]
});

ns.push({
	'alias': 'base.minabs',
	'path': '@stdlib/math/base/special/minabs',
	'value': require( '@stdlib/math/base/special/minabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxabs',
		'@stdlib/math/base/special/min'
	]
});

ns.push({
	'alias': 'base.minabsn',
	'path': '@stdlib/math/base/special/minabsn',
	'value': require( '@stdlib/math/base/special/minabsn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxabsn',
		'@stdlib/math/base/special/minn',
		'@stdlib/math/base/special/minabs'
	]
});

ns.push({
	'alias': 'base.minmax',
	'path': '@stdlib/math/base/special/minmax',
	'value': require( '@stdlib/math/base/special/minmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/max',
		'@stdlib/math/base/special/min',
		'@stdlib/math/base/special/minmaxabs'
	]
});

ns.push({
	'alias': 'base.minmaxabs',
	'path': '@stdlib/math/base/special/minmaxabs',
	'value': require( '@stdlib/math/base/special/minmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxabs',
		'@stdlib/math/base/special/minabs',
		'@stdlib/math/base/special/minmax'
	]
});

ns.push({
	'alias': 'base.minmaxabsn',
	'path': '@stdlib/math/base/special/minmaxabsn',
	'value': require( '@stdlib/math/base/special/minmaxabsn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxabsn',
		'@stdlib/math/base/special/minabsn',
		'@stdlib/math/base/special/minmaxn'
	]
});

ns.push({
	'alias': 'base.minmaxn',
	'path': '@stdlib/math/base/special/minmaxn',
	'value': require( '@stdlib/math/base/special/minmaxn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxn',
		'@stdlib/math/base/special/minn',
		'@stdlib/math/base/special/minmaxabsn'
	]
});

ns.push({
	'alias': 'base.minn',
	'path': '@stdlib/math/base/special/minn',
	'value': require( '@stdlib/math/base/special/minn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxn',
		'@stdlib/math/base/special/min',
		'@stdlib/math/base/special/minabsn'
	]
});

ns.push({
	'alias': 'base.modf',
	'path': '@stdlib/math/base/special/modf',
	'value': require( '@stdlib/math/base/special/modf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.mul',
	'path': '@stdlib/math/base/ops/mul',
	'value': require( '@stdlib/math/base/ops/mul' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/add',
		'@stdlib/math/base/ops/div',
		'@stdlib/math/base/ops/sub'
	]
});

ns.push({
	'alias': 'base.mulf',
	'path': '@stdlib/math/base/ops/mulf',
	'value': require( '@stdlib/math/base/ops/mulf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/addf',
		'@stdlib/math/base/ops/divf',
		'@stdlib/math/base/ops/mul',
		'@stdlib/math/base/ops/subf'
	]
});


// EXPORTS //

module.exports = ns;
