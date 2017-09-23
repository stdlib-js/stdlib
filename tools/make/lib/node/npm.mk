
# TARGETS #

# Run pre-version tasks.
#
# This target runs tasks which should be completed before incrementing the project version.

pre-version: dedupe-node-modules

.PHONY: pre-version


# Run post-version tasks.
#
# This target runs tasks which should be completed after incrementing the project version and committing version changes to the local repository.

post-version:
	$(QUIET) echo ''
	$(QUIET) echo 'Incremented version and committed changes. If okay, run:'
	$(QUIET) echo ''
	$(QUIET) echo "  $$ git push origin $(shell $(GIT_BRANCH)) && git push origin --tags"
	$(QUIET) echo ''

.PHONY: post-version
