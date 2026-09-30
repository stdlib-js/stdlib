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
	gen( x, e, y, p, name )

Generate fixture data and write to file.

# Arguments

* `x`: input domain
* `e`: insensitivity parameter
* `y`: response domain
* `p`: prediction domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( 0.0, stop=50.0, length=503 );
julia> e = range( 0.0, stop=5.0, length=503 );
julia> y = range( 0.0, stop=10.0, length=503 );
julia> p = range( 10.0, stop=0.0, length=503 );
julia> gen( x, e, y, p, "data.json" );
```
"""
function gen( x, e, y, p, name )
	x = collect( Float64, x );
	e = collect( Float64, e );
	y = collect( Float64, y );
	p = collect( Float64, p );


	d = y .- p;
	v = ifelse.( d .> e, -2 .* ( d .- e ) .* x,
		ifelse.( d .< .-e, -2 .* ( d .+ e) .* x, 0.0 ) );

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("e", e),
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
x = range( 0.0, stop=20e-20, length=503 );
e = range( 0.0, stop=5e-20, length=503 );
y = range( 0.0, stop=10e-20, length=503 );
p = range( 10e-20, stop=0.0, length=503 );
gen( x, e, y, p, "tiny_positive.json" );

# Small positive values:
x = range( 0.0, stop=50.0, length=503 );
e = range( 0.0, stop=5.0, length=503 );
y = range( 0.0, stop=10.0, length=503 );
p = range( 10.0, stop=0.0, length=503 );
gen( x, e, y, p, "small_positive.json" );

# Negative tiny values:
x = range( 0.0, stop=-20e-20, length=503 );
e = range( 0.0, stop=5e-20, length=503 );
y = range( -10e-20, stop=0.0, length=503 );
p = range( 0.0, stop=-10e-20, length=503 );
gen( x, e, y, p, "tiny_negative.json" );

# Small negative values:
x = range( 0.0, stop=-50.0, length=503 );
e = range( 0.0, stop=5.0, length=503 );
y = range( -10.0, stop=0.0, length=503 );
p = range( 0.0, stop=-10.0, length=503 );
gen( x, e, y, p, "small_negative.json" );
