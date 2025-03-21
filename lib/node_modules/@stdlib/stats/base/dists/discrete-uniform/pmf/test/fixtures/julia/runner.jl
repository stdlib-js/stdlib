#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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

import Distributions: pdf, DiscreteUniform
import JSON

"""
	gen( x, a, b, name )

Generate fixture data and write to file.

# Arguments

* `x`: input value
* `a`: minimum support
* `b`: maximum support
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = round.( Int64, rand( 1000 ) .* 5.0 );
julia> a = round.( Int64, rand( 1000 ) .* 10.0 );
julia> b = round.( Int64, a .+ ( rand( 1000 ) .* 10.0 ) );
julia> gen( x, a, b, "data.json" );
```
"""
function gen( x, a, b, name )
	z = Array{Float64}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = pdf( DiscreteUniform( a[i], b[i] ), x[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("a", a),
		("b", b),
		("expected", z)
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
dir = dirname( file );

# Small Range:
x = round.( Int64, rand( 1000 ) .* 50.0 );
a = round.( Int64, rand( 1000 ) .* 20.0 );
b = round.( Int64, ( rand( 1000 ) .* 20.0 ) .+ a );
gen( x, a, b, "small_range.json" );

# Medium Range:
x = round.( Int64, rand( 1000 ) .* 60.0 );
a = round.( Int64, rand( 1000 ) .* 20.0 );
b = round.( Int64, ( rand( 1000 ) .* 40.0 ) .+ a );
gen( x, a, b, "medium_range.json" );

# Large Range:
x = round.( Int64, rand( 1000 ) .* 100.0 );
a = round.( Int64, rand( 1000 ) .* 20.0 );
b = round.( Int64, ( rand( 1000 ) .* 80.0 ) .+ a );
gen( x, a, b, "large_range.json" );
