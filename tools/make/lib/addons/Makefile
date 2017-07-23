
# VARIABLES #

# Define the path of the executable for [node-gyp][1].
#
# [1]: https://github.com/nodejs/node-gyp

NODE_GYP ?= $(BIN_DIR)/node-gyp

# Define command-line options when invoking node-gyp.
NODE_GYP_FLAGS ?=

# Define
ifndef NODE_GYP_DEFINES
	NODE_GYP_DEFINES := fortran_compiler=$(FC)
ifneq (, $(BLAS))
	NODE_GYP_DEFINES += blas=$(BLAS)
ifdef BLAS_DIR
	NODE_GYP_DEFINES += blas_dir=$(BLAS_DIR)
endif
endif
endif


# TARGETS #

# Install add-ons.
#
# This target installs native add-ons. If unable to install a native add-on, the target prints an error message and proceeds to try installing the next add-on.

install-addons: clean-addons
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Building add-on: $$pkg"; \
		cd $$pkg && \
			GYP_DEFINES="$(NODE_GYP_DEFINES)" \
			$(NODE_GYP) $(NODE_GYP_FLAGS) rebuild \
		|| echo "Error: failed to build add-on: $$pkg" && exit 0; \
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
		cd $$pkg/src && $(MAKE) clean && \
		cd $$pkg && $(NODE_GYP) clean || exit 1; \
	done

.PHONY: clean-addons
