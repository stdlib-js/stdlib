
# VARIABLES #

# Define the browser test command:
TRAVIS_HEADLESS_BROWSER ?= xvfb-run


# TARGETS #

# Run browser tests.
#
# This target runs browser tests using a headless browser on Travis CI.

test-browsers-travis: $(NODE_MODULES)
	$(TRAVIS_HEADLESS_BROWSER) make -f $(this_file) test-browsers

.PHONY: test-browsers-travis
