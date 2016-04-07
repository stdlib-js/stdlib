'use strict';

// TRANSFORMS //

var transforms = {};
transforms.namespace = require( './namespace' );
transforms.mixin = require( './mixin' );
transforms.function  = require( './function' );
transforms.member = require( './member' );
transforms.event = require( './event' );
transforms.class = require( './class' );


// EXPORTS //

module.exports = transforms;
