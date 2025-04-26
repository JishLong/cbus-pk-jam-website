<h1 align="center">Automated Version Cutting</h1>

There is a manual GitHub action to automate the devops process of cutting a new version. Care should be taken so that 
this action is only ever ran from `main`. No version should be cut from any other branch, including other 
[version branches](../management/version-semantics.md).

When run, this action will create a new version branch from `main` as well as a 
[corresponding build branch](automated-builds.md). The newly-created build branch will not be automatically used for 
[deployment](deployment.md), and should instead be manually set for deployment if desired.

Other activities associated with cutting a new version (such as incrementing the current version) are not automated,
and should instead be [done manually](../management/version-cutting.md).
