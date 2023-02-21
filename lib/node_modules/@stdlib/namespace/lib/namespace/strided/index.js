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
	'alias': 'strided.abs',
	'path': '@stdlib/math/strided/special/abs',
	'value': require( '@stdlib/math/strided/special/abs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs2',
		'@stdlib/math/strided/special/dabs',
		'@stdlib/math/strided/special/sabs'
	]
});

ns.push({
	'alias': 'strided.abs2',
	'path': '@stdlib/math/strided/special/abs2',
	'value': require( '@stdlib/math/strided/special/abs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/dabs2',
		'@stdlib/math/strided/special/sabs2'
	]
});

ns.push({
	'alias': 'strided.abs2By',
	'path': '@stdlib/math/strided/special/abs2-by',
	'value': require( '@stdlib/math/strided/special/abs2-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs-by',
		'@stdlib/math/strided/special/abs2'
	]
});

ns.push({
	'alias': 'strided.absBy',
	'path': '@stdlib/math/strided/special/abs-by',
	'value': require( '@stdlib/math/strided/special/abs-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/abs',
		'@stdlib/math/strided/special/abs2-by'
	]
});

ns.push({
	'alias': 'strided.add',
	'path': '@stdlib/math/strided/ops/add',
	'value': require( '@stdlib/math/strided/ops/add' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/ops/div',
		'@stdlib/math/strided/ops/mul',
		'@stdlib/math/strided/ops/sub'
	]
});

ns.push({
	'alias': 'strided.cbrt',
	'path': '@stdlib/math/strided/special/cbrt',
	'value': require( '@stdlib/math/strided/special/cbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dcbrt',
		'@stdlib/math/strided/special/scbrt',
		'@stdlib/math/strided/special/sqrt'
	]
});

ns.push({
	'alias': 'strided.ceil',
	'path': '@stdlib/math/strided/special/ceil',
	'value': require( '@stdlib/math/strided/special/ceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil2',
		'@stdlib/math/strided/special/ceil10',
		'@stdlib/math/strided/special/ceilb',
		'@stdlib/math/strided/special/ceiln',
		'@stdlib/math/strided/special/dceil',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/round',
		'@stdlib/math/strided/special/trunc',
		'@stdlib/math/strided/special/sceil'
	]
});

ns.push({
	'alias': 'strided.deg2rad',
	'path': '@stdlib/math/strided/special/deg2rad',
	'value': require( '@stdlib/math/strided/special/deg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ddeg2rad',
		'@stdlib/math/strided/special/rad2deg',
		'@stdlib/math/strided/special/sdeg2rad'
	]
});

ns.push({
	'alias': 'strided.dataTypes',
	'path': '@stdlib/strided/dtypes',
	'value': require( '@stdlib/strided/dtypes' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'strided.dispatch',
	'path': '@stdlib/strided/dispatch',
	'value': require( '@stdlib/strided/dispatch' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'strided.dispatchBy',
	'path': '@stdlib/strided/dispatch-by',
	'value': require( '@stdlib/strided/dispatch-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/dispatch'
	]
});

ns.push({
	'alias': 'strided.floor',
	'path': '@stdlib/math/strided/special/floor',
	'value': require( '@stdlib/math/strided/special/floor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dfloor',
		'@stdlib/math/strided/special/floor2',
		'@stdlib/math/strided/special/floor10',
		'@stdlib/math/strided/special/floorb',
		'@stdlib/math/strided/special/floorn',
		'@stdlib/math/strided/special/round',
		'@stdlib/math/strided/special/trunc',
		'@stdlib/math/strided/special/sfloor'
	]
});

ns.push({
	'alias': 'strided.inv',
	'path': '@stdlib/math/strided/special/inv',
	'value': require( '@stdlib/math/strided/special/inv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dinv',
		'@stdlib/math/strided/special/sinv'
	]
});

ns.push({
	'alias': 'strided.mul',
	'path': '@stdlib/math/strided/ops/mul',
	'value': require( '@stdlib/math/strided/ops/mul' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/ops/add',
		'@stdlib/math/strided/ops/div',
		'@stdlib/math/strided/ops/sub'
	]
});

ns.push({
	'alias': 'strided.ramp',
	'path': '@stdlib/math/strided/special/ramp',
	'value': require( '@stdlib/math/strided/special/ramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/dramp',
		'@stdlib/math/strided/special/heaviside',
		'@stdlib/math/strided/special/sramp'
	]
});

ns.push({
	'alias': 'strided.rsqrt',
	'path': '@stdlib/math/strided/special/rsqrt',
	'value': require( '@stdlib/math/strided/special/rsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/drsqrt',
		'@stdlib/math/strided/special/sqrt',
		'@stdlib/math/strided/special/srsqrt'
	]
});

ns.push({
	'alias': 'strided.sqrt',
	'path': '@stdlib/math/strided/special/sqrt',
	'value': require( '@stdlib/math/strided/special/sqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/cbrt',
		'@stdlib/math/strided/special/dsqrt',
		'@stdlib/math/strided/special/rsqrt',
		'@stdlib/math/strided/special/ssqrt'
	]
});

ns.push({
	'alias': 'strided.sub',
	'path': '@stdlib/math/strided/ops/sub',
	'value': require( '@stdlib/math/strided/ops/sub' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/ops/add',
		'@stdlib/math/strided/ops/div',
		'@stdlib/math/strided/ops/mul'
	]
});

ns.push({
	'alias': 'strided.trunc',
	'path': '@stdlib/math/strided/special/trunc',
	'value': require( '@stdlib/math/strided/special/trunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/strided/special/ceil',
		'@stdlib/math/strided/special/dtrunc',
		'@stdlib/math/strided/special/floor',
		'@stdlib/math/strided/special/trunc2',
		'@stdlib/math/strided/special/trunc10',
		'@stdlib/math/strided/special/truncb',
		'@stdlib/math/strided/special/truncn',
		'@stdlib/math/strided/special/round',
		'@stdlib/math/strided/special/strunc'
	]
});


// EXPORTS //

module.exports = ns;
