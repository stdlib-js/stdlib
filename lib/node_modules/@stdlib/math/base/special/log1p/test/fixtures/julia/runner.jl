# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

# Negative small values:
x = linspace( -2.0^-29, -2.0^-54, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./small_negative.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Positive small values:
x = linspace( 2.0^-54, 2.0^-29, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./small_positive.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Negative tiny values:
x = linspace( -2.0^-54, 0, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./tiny_negative.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Positive tiny values:
x = linspace( 0, 2.0^-54, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./tiny_positive.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Negative medium values:
x = linspace( -0.41422, -0.2929, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./medium_negative.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Positive medium values:
x = linspace( 0.2929, 0.41422, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./medium_positive.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Negative large values:
x = linspace( -0.9999, -0.41422, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./large_negative.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Positive large values:
x = linspace( 0.41422, 100, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./large_positive.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Positive big values:
x = linspace( 2.0^30, 2.0^52, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./big_positive.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Positive huge values:
x = linspace( 1e200, 1e300, 500 )

y = log1p( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./huge_positive.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )