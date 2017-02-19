
# VARIABLES #

# Determine the OS:
#
# [1]: https://en.wikipedia.org/wiki/Uname#Examples
# [2]: http://stackoverflow.com/a/27776822/2225624
OS := $(shell uname)
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

# Define the path of the executable for [node-gyp][1].
#
# [1]: https://github.com/nodejs/node-gyp

NODE_GYP ?= $(BIN_DIR)/node-gyp

# Define command-line options when invoking node-gyp.
NODE_GYP_FLAGS ?=

# Define the Fortran compiler:
ifdef FORTRAN_COMPILER
	FC := $(FORTRAN_COMPILER)
else
	FC := gfortran
endif

# Determine whether to generate [position independent code][1]:
#
# [1]: https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html#Code-Gen-Options
# [2]: http://stackoverflow.com/questions/5311515/gcc-fpic-option
ifeq ($(OS), WINNT)
	fPIC ?=
else
	fPIC ?= -fPIC
endif

# Define the BLAS library to use:
BLAS ?=

# Define the path to the BLAS library (used for includes and linking):
ifeq ($(BLAS), openblas)
	# Use the `wildcard` function to check for the OpenBLAS vendor dependency:
	BLAS_DIR ?= $(wildcard $(DEPS_OPENBLAS_BUILD_OUT))
else
	BLAS_DIR ?=
endif


# TARGETS #

# Install add-ons.
#
# This target installs native add-ons.

install-addons: clean-addons
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Building add-on: $$pkg"; \
		cd $$pkg && \
			FC=$(FC) \
			fPIC=$(fPIC) \
			BLAS=$(BLAS) \
			BLAS_DIR=$(BLAS_DIR) \
			$(NODE_GYP) $(NODE_GYP_FLAGS) rebuild \
		|| exit 1; \
	done

.PHONY: install-addons


# Remove add-ons.
#
# This target removes all compiled and generated files for native add-ons.

clean-addons:
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Cleaning add-on: $$pkg"; \
		cd $$pkg/src && \
			$(MAKE) clean && \
		cd $$pkg && \
			$(NODE_GYP) $(NODE_GYP_FLAGS) clean \
		|| exit 1; \
	done

.PHONY: clean-addons
