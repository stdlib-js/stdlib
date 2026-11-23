#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import JSON

"""
	modifiedHuberGradient( x, y, p )

Compute the modified Huber loss gradient with respect to a model parameter.
"""
function modifiedHuberGradient( x, y, p )
	z = y * p;
	if z >= 1.0
		return 0.0;
	end
	if z >= -1.0
		return -2.0 * ( 1.0 - z ) * y * x;
	end
	return -4.0 * y * x;
end

"""
	gen( x, y, p, name )

Generate fixture data and write to file.

# Arguments

* `x`: input domain
* `y`: response domain
* `p`: prediction domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000.0, 1000.0, 2001 );
julia> y = rand( [-1.0, 1.0], 2001 )
julia> p = range( -1000.0, 1000.0, 2001 );
julia> gen( x, y, p, "data.json" );
```
"""
function gen( x, y, p, name )
	# Compute expected gradient values element-wise:
	v = modifiedHuberGradient.( x, y, p );

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("y", y),
		("p", p),
		("expected", v)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname(file);

# Positive tiny values:
x = range( 0.0, stop=1e-20, length=503 );
y = rand( [ -1.0, 1.0 ], 503 )
p = range( 0.0, stop=1e-20, length=503 );
gen( x, y, p, "tiny_positive.json" );

# Small positive values:
x = range( 0.0, stop=2.0, length=503 );
y = rand( [ -1.0, 1.0 ], 503 )
p = range( 0.0, stop=2.0, length=503 );
gen( x, y, p, "small_positive.json" );

# Negative tiny values:
x = range( -1e-20, stop=0.0, length=503 );
y = rand( [ -1.0, 1.0 ], 503 )
p = range( -1e-20, stop=0.0, length=503 );
gen( x, y, p, "tiny_negative.json" );

# Small negative values:
x = range( -2.0, stop=0.0, length=503 );
y = rand( [ -1.0, 1.0 ], 503 )
p = range( -2.0, stop=0.0, length=503 );
gen( x, y, p, "small_negative.json" );
