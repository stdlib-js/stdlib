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

import Distributions: quantile, TDist
import JSON

"""
    gen( p, v, name )

Generate fixture data and write to file.

# Arguments

* `p`: input value
* `v`: degrees of freedom
* `name::AbstractString`: output filename

# Examples

``` julia
julia> p = range( 0, stop = 1, length = 1001 );
julia> v = range( 0, stop = 20, length = 1001 );
julia> gen( p, v, \"data.json\" );
```
"""
function gen( p, v, name )
	z = Array{Float64}( undef, length(p) );
	for i in eachindex(p)
		z[ i ] = quantile( TDist( v[i] ), p[i] );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("p", p),
		("v", v),
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

# Random (v small):
p = rand( 1001 );
v = rand( 1001 ) .* 5.0;
gen( p, v, "small.json" );

# Random (v large):
p = rand( 1001 );
v = rand( 1001 ) .* 20.0;
gen( p, v, "large.json" );
