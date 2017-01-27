
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

# Define the C compiler:
C_COMPILER ?= gcc

# Define the C++ compiler:
CXX_COMPILER ?= g++

# Define the Fortran compiler:
FORTRAN_COMPILER ?= gfortran

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

install-addons: $(NODE_GYP)
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Add-on: $$pkg"; \
		echo 'Compiling source...'; \
		cd $$pkg/src && \
			C_COMPILER=$(C_COMPILER) \
			FORTRAN_COMPILER=$(FORTRAN_COMPILER) \
			fPIC=$(fPIC) \
			$(MAKE); \
		echo 'Building add-on...'; \
		cd .. && $(NODE_GYP) rebuild || exit 1; \
	done

.PHONY: install-addons


# Remove add-ons.
#
# This target removes all compiled and generated files for native add-ons.

clean-addons:
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Add-on: $$pkg"; \
		echo 'Cleaning source...'; \
		cd $$pkg/src && $(MAKE) clean; \
		echo 'Cleaning add-on...'; \
		cd .. && $(NODE_GYP) clean || exit 1; \
	done

.PHONY: clean-addons
