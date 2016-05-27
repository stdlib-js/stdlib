
# TARGETS #

# Run browser tests.
#
# This target runs browser tests using a headless browser on [Appveyor][1].
#
# [1]: https://www.appveyor.com/

test-browsers-appveyor: $(NODE_MODULES)
	@$(MAKE) -f $(this_file) test-browsers

.PHONY: test-browsers-appveyor
