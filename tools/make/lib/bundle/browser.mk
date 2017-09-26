
# VARIABLES #

# Define the command for generating distributable browser bundles:
DIST_BROWSER_BUNDLES ?= $(NODE) \
	--max_old_space_size=4096 \
	--expose_gc \
	$(TOOLS_PKGS_DIR)/bundle/scripts/dist_browser_bundles

# Define the command-line options to be used when executing the command:
DIST_BROWSER_BUNDLES_FLAGS ?=


# TARGETS #

# Generate browser bundles.
#
# This target generates distributable browser bundles.

dist-browser-bundles: $(NODE_MODULES)
	$(QUIET) echo 'Generating distributable browser bundles...'
	$(QUIET) $(DIST_BROWSER_BUNDLES) $(DIST_BROWSER_BUNDLES_FLAGS)
	$(QUIET) for file in $(DIST_DIR)/*.min.js; do \
		echo "Compressing file: $$file"; \
		$(GZIP) "$$file" -9 -c > "$$file".gz; \
	done

.PHONY: dist-browser-bundles
