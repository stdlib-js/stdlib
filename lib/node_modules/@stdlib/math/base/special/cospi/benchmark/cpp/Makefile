
# VARIABLES #

ifndef VERBOSE
	QUIET := @
endif

# Specify the path to Boost:
BOOST ?=

# Determine the OS:
#
# [1]: https://en.wikipedia.org/wiki/Uname#Examples
# [2]: http://stackoverflow.com/a/27776822/2225624
OS ?= $(shell uname)
ifneq (, $(findstring MINGW,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring MSYS,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring CYGWIN,$(OS)))
	OS := WINNT
endif
endif
endif

# Define the program used for compiling C++ source files:
ifdef CXX_COMPILER
	CXX := $(CXX_COMPILER)
else
	CXX := g++
endif

# Define the command-line options when compiling C++ files:
CXXFLAGS ?= \
	-std=c++11 \
	-O3 \
	-Wall \
	-pedantic

# Determine whether to generate [position independent code][1]:
#
# [1]: https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html#Code-Gen-Options
# [2]: http://stackoverflow.com/questions/5311515/gcc-fpic-option
ifeq ($(OS), WINNT)
	fPIC ?=
else
	fPIC ?= -fPIC
endif

# List of C++ targets:
cxx_targets := benchmark.boost.out


# TARGETS #

# Default target.
#
# This target is the default target.

all: $(cxx_targets)

.PHONY: all


# Compile C++ source.
#
# This target compiles C++ source files.

$(cxx_targets): %.out: %.cpp $(BOOST)
	$(QUIET) $(CXX) $(CXXFLAGS) $(fPIC) -I $(BOOST) -o $@ $< -lm


# Run a benchmark.
#
# This target runs a benchmark.

run: $(cxx_targets)
	$(QUIET) ./$<

.PHONY: run


# Perform clean-up.
#
# This target removes generated files.

clean:
	$(QUIET) -rm -f *.o *.out

.PHONY: clean
