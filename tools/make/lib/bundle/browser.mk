
# VARIABLES #

# Define the command for generating distributable browser bundles:
DIST_BROWSER_BUNDLES ?= $(NODE) \
	--max_old_space_size=4096 \
	--expose_gc \
	$(TOOLS_PKGS_DIR)/bundle/scripts/dist_browser_bundles

# Define the command-line options to be used when executing the command:
DIST_BROWSER_BUNDLES_FLAGS ?=

# Define the command for updating distributable browser bundle stats in the dist README:
UPDATE_DIST_README_BROWSER_BUNDLE_STATS ?= $(NODE) $(TOOLS_PKGS_DIR)/bundle/scripts/update_dist_readme_browser_bundle_stats

# Define the command-line options to be used when executing the command:
UPDATE_DIST_README_BROWSER_BUNDLE_STATS_FLAGS ?=


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


# Update browser bundle stats.
#
# This target updates a README file documenting distributable browser bundles to include the most recent bundle statistics.

update-dist-readme-browser-bundle-stats: $(NODE_MODULES)
	$(QUIET) $(UPDATE_DIST_README_BROWSER_BUNDLE_STATS) $(UPDATE_DIST_README_BROWSER_BUNDLE_STATS_FLAGS)

.PHONY: update-dist-readme-browser-bundle-stats
