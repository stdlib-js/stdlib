
# TARGETS #

# Run browser tests.
#
# This target runs browser tests using a headless browser on Appveyor.

test-browsers-appveyor: node_modules
	make -f $(THIS_FILE) test-browsers


.PHONY: test-browsers-appveyor
