
# VARIABLES #

# Define the version bump type:
NPM_VERSION ?=

# Define a commit message when incrementing the project version:
NPM_VERSION_MESSAGE ?=

# Define command-line options when incrementing the project version:
npm_version_flags ?=
ifdef NPM_VERSION_MESSAGE
	npm_version_flags += -m $(NPM_VERSION_MESSAGE)
endif

# Define the version upgrade prerequisite...
ifeq ($(NPM_VERSION), pre-patch)
	npm_version_prerequisite := npm-version-pre-patch
endif
ifeq ($(NPM_VERSION), patch)
	npm_version_prerequisite := npm-version-patch
endif
ifeq ($(NPM_VERSION), pre-minor)
	npm_version_prerequisite := npm-version-pre-minor
endif
ifeq ($(NPM_VERSION), minor)
	npm_version_prerequisite := npm-version-minor
endif
ifeq ($(NPM_VERSION), pre-major)
	npm_version_prerequisite := npm-version-pre-major
endif
ifeq ($(NPM_VERSION), major)
	npm_version_prerequisite := npm-version-major
endif
ifeq ($(NPM_VERSION), pre-release)
	npm_version_prerequisite := npm-version-pre-release
endif


# TARGETS #

# Run pre-version tasks.
#
# This target runs tasks which should be completed before incrementing the project version.

npm-pre-version: dedupe-node-modules

.PHONY: npm-pre-version


# Run pre-patch tasks.
#
# This target runs tasks which should be completed when publishing a "pre-patch" version.

npm-version-pre-patch: npm-pre-version
	$(QUIET) $(NPM) version pre-patch $(npm_version_flags)

.PHONY: npm-version-pre-patch


# Run patch tasks.
#
# This target runs tasks which should be completed when publishing a "patch" version.

npm-version-patch: npm-pre-version
	$(QUIET) $(NPM) version patch $(npm_version_flags)

.PHONY: npm-version-patch


# Run pre-minor tasks.
#
# This target runs tasks which should be completed when publishing a "pre-minor" version.

npm-version-pre-minor: npm-pre-version
	$(QUIET) $(NPM) version pre-minor $(npm_version_flags)

.PHONY: npm-version-pre-minor


# Run minor version tasks.
#
# This target runs tasks which should be completed when publishing a "minor" version.

npm-version-minor: npm-pre-version
	$(QUIET) $(NPM) version minor $(npm_version_flags)

.PHONY: npm-version-minor


# Run pre-major tasks.
#
# This target runs tasks which should be completed when publishing a "pre-major" version.

npm-version-pre-major: npm-pre-version
	$(QUIET) $(NPM) version pre-major $(npm_version_flags)

.PHONY: npm-version-pre-major


# Run major version tasks.
#
# This target runs tasks which should be completed when publishing a "major" version.

npm-version-major: npm-pre-version
	$(QUIET) $(NPM) version major $(npm_version_flags)

.PHONY: npm-version-major


# Run pre-release tasks.
#
# This target runs tasks which should be completed when publishing a "pre-release" version.

npm-version-pre-release: npm-pre-version
	$(QUIET) $(NPM) version pre-release $(npm_version_flags)

.PHONY: npm-version-pre-release


# Run version tasks.
#
# This target runs tasks which should be completed when incrementing the project version and committing version changes to the local repository.

npm-version: $(npm_version_prerequisite)
	$(QUIET) echo 'TODO: run build'
	$(QUIET) $(GIT_ADD) -A dist

.PHONY: npm-version


# Run post-version tasks.
#
# This target runs tasks which should be completed after incrementing the project version and committing version changes to the local repository.

npm-post-version:
	$(QUIET) echo ''
	$(QUIET) echo 'Incremented version and committed changes. If okay, run:'
	$(QUIET) echo ''
	$(QUIET) echo '  $$ make npm-publish'
	$(QUIET) echo "  $$ git push origin $(shell $(GIT_BRANCH)) && git push origin --tags"
	$(QUIET) echo ''

.PHONY: npm-post-version
