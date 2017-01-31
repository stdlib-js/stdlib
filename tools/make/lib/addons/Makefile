
# VARIABLES #

# Determine the OS:
OS := $(shell uname)
ifneq (, $(findstring MINGW,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring MSYS,$(OS)))
	OS := WINNT
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

# Define the C compiler:
ifdef C_COMPILER
	CC := $(C_COMPILER)
else
	CC := gcc
endif

# Define the C++ compiler:
ifdef CXX_COMPILER
	CXX := $(CXX_COMPILER)
else
	CXX := g++
endif

# Define the linker:
ifdef LINKER
	LD := $(LINKER)
else
	LD := g++
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
			CC=$(CC) \
			CXX=$(CXX) \
			LINK=$(LD) \
			fPIC=$(fPIC) \
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
