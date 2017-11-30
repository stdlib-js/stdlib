
# VARIABLES #

ifndef VERBOSE
	QUIET := @
endif

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

# Define the program used for compiling Fortran source files:
ifdef FORTRAN_COMPILER
	FC := $(FORTRAN_COMPILER)
else
	FC := gfortran
endif

# Define the command-line options when compiling Fortran files:
FFLAGS ?= \
	-std=f95 \
	-ffree-form \
	-O3 \
	-Wall \
	-Wextra \
	-Wno-compare-reals \
	-Wimplicit-interface \
	-fno-underscoring \
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

# List of includes:
INCLUDE ?=

# List of Fortran source files:
SOURCE_FILES ?=

# List of Fortran targets:
f_targets := TODO.out


# TARGETS #

# Default target.
#
# This target is the default target.

all: $(f_targets)

.PHONY: all


# Compile Fortran source.
#
# This target compiles Fortran source files.

$(f_targets): %.out: %.f
	$(QUIET) $(FC) $(FFLAGS) $(fPIC) $(INCLUDE) -o $@ $(SOURCE_FILES) $<


# Run a benchmark.
#
# This target runs a benchmark.

run: $(f_targets)
	$(QUIET) ./$<

.PHONY: run


# Perform clean-up.
#
# This target removes generated files.

clean:
	$(QUIET) -rm -f *.o *.out

.PHONY: clean
