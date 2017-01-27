
# VARIABLES #

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


# TARGETS #

# Install add-ons.
#
# This target installs native add-ons.

install-addons: $(NODE_GYP)
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if [[ "$$pkg" != /* ]]; then \
			continue; \
		fi; \
		echo ''; \
		echo "Add-on: $$pkg"; \
		echo 'Compiling source...'; \
		cd $$pkg/src && \
			C_COMPILER=$(C_COMPILER) \
			FORTRAN_COMPILER=$(FORTRAN_COMPILER) \
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
		if [[ "$$pkg" != /* ]]; then \
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
