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
	gen( x, t, y, p, name )

Generate fixture data and write to file.

# Arguments

* `x`: input domain
* `t`: margin threshold
* `y`: response domain
* `p`: prediction domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000.0, 1000.0, 2001 );
julia> t = range( 0.0, stop=5.0, length=2001 );
julia> y = rand( [-1.0, 1.0], 2001 )
julia> p = range( -1000.0, 1000.0, 2001 );
julia> gen( x, t, y, p, "data.json" );
```
"""
function gen( x, t, y, p, name )
	x = collect( Float64, x );
	t = collect( Float64, t );
	p = collect( Float64, p );

	z = t .- p .* y;
	v = ifelse.( z .> 0, -2 .* x .* y .* z, 0.0 );

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("t", t),
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

t = range( 0.0, stop=5.0, length=503 );

# Positive tiny values:
y = rand( [ -1.0, 1.0 ], 503 )
x = range( 0.0, stop=20e-20, length=503 );
p = range( 0.0, stop=1e-20, length=503 );
gen( x, t, y, p, "tiny_positive.json" );

# Small positive values:
y = rand( [ -1.0, 1.0 ], 503 )
x = range( 0.0, stop=50, length=503 );
p = range( 0.0, stop=2.0, length=503 );
gen( x, t, y, p, "small_positive.json" );

# Negative tiny values:
y = rand( [ -1.0, 1.0 ], 503 )
x = range( 0.0, stop=-20e-20, length=503 );
p = range( -1e-20, stop=0.0, length=503 );
gen( x, t, y, p, "tiny_negative.json" );

# Small negative values:
y = rand( [ -1.0, 1.0 ], 503 )
x = range( 0.0, stop=-50, length=503 );
p = range( -2.0, stop=0.0, length=503 );
gen( x, t, y, p, "small_negative.json" );
