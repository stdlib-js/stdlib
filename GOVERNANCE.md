<!--

@license CC-BY-SA-4.0

-->

# Governance

> Governance model describing project roles and responsibilities and the decision making process.

The purpose of this document is to formalize the governance process used by the stdlib project to clarify how decisions are made and how the various elements of our community interact, including the relationship between open source collaborative development and work that may be funded by for-profit or non-profit entities. This document establishes a decision-making process that takes into account feedback from all members of the community and strives to achieve consensus while avoiding any deadlocks.

This is a meritocratic, consensus-seeking community project. Anyone with an interest in the project can join the community, contribute to the project design, and participate in the decision making process. This document describes how that participation occurs and how to earn merit within the project community.

## The Project

The stdlib Project (The Project) is an open source software project. Public Software developed by The Project is released under the Apache-2.0 (or similar) open source license, developed openly, and hosted on public GitHub repositories under the `stdlib-js` GitHub organization.

The Project is developed by a team of distributed developers called Contributors. Contributors are individuals who have contributed code, documentation, designs, or other work to The Project.

The Project Community consists of all Contributors and Users of The Project. Contributors work on behalf of and are responsible to the larger Project Community, and The Project strives to keep the barrier between Contributors and Users as low as possible.

## Governance

This section describes the governance and leadership model of The Project. The core values of The Project's governance model are:

-   Openness and Transparency
-   Active Contribution
-   Institutional Neutrality

### Roles and Responsibilities

#### Contributors

Contributors are Community members who have contributed code, documentation, designs, or other work to The Project. Anyone can be a Contributor. Contributors can be affiliated with any legal entity or none. Contributors participate in The Project by submitting, reviewing, and discussing GitHub Pull Requests and Issues and participating in open and public Project discussions on GitHub, mailing lists, and other channels.

#### Core Contributors

Core Contributors are Community members who have demonstrated their dedication to the continued development of The Project through ongoing engagement with the Community.

Both Core and non-Core Contributors may propose changes to The Project. The mechanism to propose such a change is a GitHub Issue. The mechanism to implement such a change is a GitHub Pull Request. Core Contributors may review and merge (land) Pull Requests.

At least one Core Contributor must approve a Pull Request before a Pull Request can land. Approving a Pull Request indicates that the Core Contributor accepts responsibility for the change. Approval must be from Core Contributors who are not authors of the change.

If a Core Contributor opposes a proposed change (lazy consensus), then the change cannot land. The exception is if the Technical Steering Committee (TSC) votes to approve the change despite the opposition. Usually, involving the TSC is unnecessary, and discussions or further changes result in Core Contributors removing their opposition.

New Core Contributors can be nominated by any existing Core Contributors. Once they have been nominated, current Core Contributors will hold a private vote. While the expectation is that most votes will be unanimous, a two-thirds majority of the cast votes is sufficient for a nomination to pass. Voting on Core Contributor nominations must be open for at least 1 week.

The TSC can remove inactive Core Contributors or provide them with _emeritus_ status. Emeriti may request that the TSC restore them to active status.

A Core Contributor is automatically made emeritus (and removed from active Core Contributor status) if more than 18 months has passed since the Core Contributor authored or approved a Pull Request that has landed.

##### Core Contributor Activities

-   Helping users and novice Contributors
-   Contributing code and documentation changes that improve The Project
-   Reviewing and commenting on Issues and Pull Requests
-   Participation in working groups
-   Casting votes for and against merging a Pull Request
-   Merging approved Pull Requests

#### Technical Steering Committee

A subset of the Core Contributors who have produced contributions that are substantial in quality and quantity, and sustained for over at least one year, forms the Technical Steering Committee (TSC). The overall role of the TSC is to ensure, with input from the Community, the long-term well-being of The Project, both technically and as a community.

The TSC has final authority over The Project, including:

-   Technical direction
-   Project governance and process (including this policy)
-   Contribution policy
-   Conduct guidelines
-   GitHub repository hosting
-   Development process and any coding standards
-   Setting release dates
-   Release quality standards
-   Making decisions when Core Contributors are unable to reach consensus on an issue within a reasonable time frame
-   Maintaining the list of Core Contributors

TSC Members participate in all discussions, code review, and other everyday Project activities as peers with all other Contributors and the Community. In these activities, TSC Members do not have any special power or privilege through their membership on the TSC. However, because of the quality and quantity of their contributions and their expert knowledge of The Project Software and Services, TSC Members are expected to provide useful guidance, both technically and concerning Project direction, to potentially less experienced Contributors.

The TSC shall meet regularly using tools and enable participation by the community (e.g., weekly on a Google Hangout or through any other appropriate means selected by the TSC). The meeting shall be directed by the TSC Chairperson. Responsibility for directing individual meetings may be delegated by the TSC Chairperson to any other TSC Member. Minutes or an appropriate recording shall be taken and made available to the community through accessible public postings.

The TSC may, at its discretion, invite any number of non-voting observers to participate in the public portion of TSC discussions and meetings.

TSC Members are expected to regularly participate in TSC activities.

##### Membership

The TSC has no maximum size, and TSC membership is not time-limited. The size of the TSC is expected to vary in order to ensure adequate coverage of important areas of expertise, balanced with the ability to make decisions efficiently. The TSC must have at least two members.

To become eligible to join the TSC, an individual must be a Project Core Contributor who has produced contributions that are substantial in quality and quantity and sustained over at least one year. Potential TSC Members are nominated by existing TSC Members and become Members following a formal vote among existing TSC Members and confirmation that the potential TSC member is interested and willing to serve in that capacity.

The initial TSC is the set of existing Core Contributors who, as of late 2022, have been significantly active over the prior year.

When considering potential TSC Members, the TSC will evaluate candidates based on a comprehensive review of their contributions. This will include, but is not limited to, code, code review, infrastructure, tooling, mailing list and chat participation, community help and building, education and outreach, and design. In general, the TSC should reflect a diverse array of backgrounds, viewpoints, and talents.

The TSC may add additional Members to the TSC by a standard TSC motion and vote. A TSC member may be removed from the TSC by voluntary resignation, by a standard TSC motion, or in accordance with the participation rules described below.

The TSC reserves the right to remove current TSC Members if they are deemed to be actively harmful to The Project's well-being and attempts at communication and conflict resolution have failed. Removal requires a standard TSC motion and a two-thirds majority of the cast votes by the TSC's remaining Members.

Changes to TSC membership should be posted in the agenda and may be suggested as any other agenda item.

A TSC Member is eligible for automatic removal from the TSC if, during a 6-month period, all of the following are true:

-   They attend fewer than 25% of the regularly scheduled meetings.
-   They do not participate in any TSC votes.

Before removal, an inactive TSC Member must be approached to confirm that they no longer wish to participate in the TSC. If they no longer wish to participate, they will be immediately removed from the TSC. If they plan to resume active participation in the TSC, they will be given a grace period of one year. If they don't return to active participation within that time period, they will be immediately removed from the TSC.

All former TSC Members can be considered for membership again at any time in the future, like any other Project Contributor.

The TSC Chairperson must be a TSC Member and is elected on an annual basis. The Chairperson shall be selected by TSC Members according to a simple majority vote. In the event of a tie, among the tied candidates, whoever has the most seniority as determined by earliest commit date shall be the Chairperson. A TSC Chairperson is not limited to a maximum number of terms as Chairperson.

##### Decision Making Process

Decision making should follow the [Apache Foundation voting process][apache-foundation-voting-process]. This is a formalized version of consensus in which `+1` votes indicate agreement, `-1` votes (lazy consensus) are vetoes (and must be accompanied with a rationale), `0` votes indicate ambivalence (i.e., do not agree but will not stand in the way), positive fractional votes indicate varying levels of support with possible reservations, and negative fractional votes indicate varying levels of disapproval without standing in the way in the event of consensus among other voting participants.

These numeric votes may be used informally as a way of getting a general sense of people's feeling on an issue, but should not normally be taken as formal votes. A formal vote only occurs if explicitly declared. When a formal vote is held, voting must be open for at least one week in order to give all interested TSC Members a chance to vote, regardless of their geographic location.

##### Conflict of Interest

TSC Members are expected to be employed at a wide range of companies, universities, and non-profit organizations. Because of this, TSC Members may have possible conflicts of interest. Such conflicts of interest include, but are not limited to:

-   Financial interests, such as investments, employment, or contracting work outside of The Project that may influence their work on The Project.
-   Access to proprietary information of their employer that could potentially leak into their work with The Project.

All TSC Members shall disclose to the rest of the TSC any conflict of interest they may have. Members with a conflict of interest in a particular issue may participate in TSC discussions on that issue but must recuse themselves from voting on the issue.

#### Institutional Partners and Funding

The Technical Steering Committee (TSC) is the primary leadership for The Project. No outside institution, individual, or legal entity has the ability to own, control, usurp, or influence The Project other than by participating in The Project as Contributors and TSC Members. However, because institutions can be an important funding mechanism for The Project, formally acknowledging institutional participation in The Project is important. These are Institutional Partners.

An Institutional Contributor is any individual Project Contributor who contributes to The Project as part of their official duties at an Institutional Partner. Likewise, an Institutional TSC Member is any Project TSC Member who contributes to The Project as part of their official duties at an Institutional Partner.

With these definitions, an Institutional Partner is any recognized legal entity in the United States or elsewhere that employs at least one Institutional Contributor or Institutional TSC Member. Institutional Partners can be for-profit or non-profit entities.

Institutions become eligible to become an Institutional Partner by employing individuals who actively contribute to The Project as part of their official duties. Stated another way, the only way for an Institutional Partner to influence The Project is by actively contributing to the open development of The Project on equal terms with any other member of the community of Contributors and TSC Members. Merely using Project Software in institutional contexts does not allow an entity to become an Institutional Partner. Financial gifts do not enable an entity to become an Institutional Partner. Once an institution becomes eligible for Institutional Partnership, the TSC must nominate and approve the Partnership.

If an existing Institutional Partner stops having any contributing employees, then a one year grace period commences. At the end of this one year period, if an existing Institutional Partner continues not to have any contributing employees, then their Institutional Partnership will lapse and resuming the Partnership will require going through the normal process for new Partnerships.

An Institutional Partner is free to pursue funding for their work on The Project through any legal means. This could involve a non-profit organization raising money from private foundations and donors or a for-profit company building proprietary products and services that leverage Project Software and Services. Funding acquired by Institutional Partners to work on The Project is called Institutional Funding. However, no funding obtained by an Institutional Partner can override the TSC. If a Partner has funding to do Project work and the TSC decides to not pursue that work as a project, the Partner is free to pursue it on their own. However, in this situation, that part of the Partner’s work will not be under the umbrella of The Project and cannot use the Project trademarks in a way that suggests a formal relationship.

## Changes

This is a living document and may be updated over time. Refer to the [git history for this document][stdlib-git-commit-log-governance] to view changes.

## Attribution

Substantial portions of this document were adapted from the following governance models:

-   [NumPy][numpy-governance]
-   [Node.js][nodejs-governance]
-   [Sckit-learn][scikit-learn-governance]

## License

This document may be reused under a [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license][cc-by-sa-4.0].

<section class="links">

[apache-foundation-voting-process]: https://www.apache.org/foundation/voting.html

[numpy-governance]: https://github.com/numpy/numpy/blob/6db3236cd81c107d752d8ef5fb411f26bf8b7255/doc/source/dev/governance/governance.rst

[nodejs-governance]: https://github.com/nodejs/node/blob/0be1c5728173ea9ac42843058e26b6268568acf0/GOVERNANCE.md

[scikit-learn-governance]: https://github.com/scikit-learn/scikit-learn/blob/0c8820b6e4f9c49f55e96fcbb297073a887eb37b/doc/governance.rst

[cc-by-sa-4.0]: https://creativecommons.org/licenses/by-sa/4.0/

[stdlib-git-commit-log-governance]: https://github.com/stdlib-js/stdlib/commits/develop/GOVERNANCE.md

</section>

<!-- /.links -->
