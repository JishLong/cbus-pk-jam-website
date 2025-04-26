<h1 align="center">Deployment</h1>

Deployment is done via GitHub Pages with a custom domain (www.columbuspkjam.com) and HTTPS enforced.

The `github-pages` environment is configured to only allow deployment from 
[build branches](../management/branch-semantics.md). Any build branch may be used for deployment, depending on the
specific version that is desired at any given time.

Oftentimes, a new build branch will be desired when a [version is cut](../management/version-cutting.md). This branch
is [created automatically](automated-version-cutting.md), but the deployment branch will not automatically point to the
newly-created build branch. Instead, the deployment branch can be changed manually whenever desired.
