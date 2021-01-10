# ✨ ajsilvers-core ✨

<img src="https://themes.stackbit.com/images/ampersand-demo-1024x768.png" width="600">

This is a [Hugo](https://gohugo.io) site using [Sanity](https://www.sanity.io) as a [CMS](https://en.wikipedia.org/wiki/Content_management_system). It was created with [Stackbit](https://www.stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes) in under a minute.

You can [create a site](https://app.stackbit.com/create?theme=https://github.com/stackbithq/stackbit-theme-ampersand&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes) just like this one, or explore some variations. How about a different:

<details>
        <summary>🎨 &nbsp;<strong>Look</strong></summary>
        <ul>
                <li><a href="https://app.stackbit.com/create?theme=https://github.com/stackbithq/stackbit-theme-libris&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">A documentation theme</a></li>
                <li><a href="https://app.stackbit.com/create?theme=https://github.com/stackbithq/stackbit-theme-vanilla&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Stackbit Vanilla theme</a></li>
                <li><a href="https://app.stackbit.com/create?theme=https://github.com/stackbithq/stackbit-theme-azimuth&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">A sleek SaaS theme</a></li>
                </ul>
</details>

<details>
        <summary>✏️ &nbsp;<strong>CMS</strong></summary>
        <ul>
                <li><a href="https://app.stackbit.com/create?cms=forestry&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Forestry</a></li>
                <li><a href="https://app.stackbit.com/create?cms=nocms&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Git</a></li>
                <li><a href="https://app.stackbit.com/create?cms=datocms&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Dato CMS</a></li>
                </ul>
</details>

<details>
        <summary>⚙️ &nbsp;<strong>Static site generator</strong></summary>
        <ul>
                <li><a href="https://app.stackbit.com/create?ssg=gatsby&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Gatsby</a></li>
                <li><a href="https://app.stackbit.com/create?ssg=nextjs&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Next.js</a></li>
                <li><a href="https://app.stackbit.com/create?ssg=jekyll&utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes">Jekyll</a></li>
                </ul>
</details>

## Develop Locally

1. Follow the [installation guide](https://gohugo.io/getting-started/installing/) to install Hugo

1. This theme uses [Hugo Pipes](https://gohugo.io/hugo-pipes/) to handle SCSS – please ensure you have the Hugo extended version installed:

        hugo version

1. Get the project's `stackbit-api-key` from the [Stackbit dashboard](https://app.stackbit.com/dashboard)

1. Assign this key to the `STACKBIT_API_KEY` environment variable (replace `{stackbit_api_key}` with the actual key):

        export STACKBIT_API_KEY={stackbit_api_key}

1. Run the following command to fetch the content from Sanity:

        npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5ffad72dbfb7ba0017c38bd6

1. [Optional] Run Sanity Studio locally: install sanity-cli `npm install -g @sanity/cli`, navigate to the `/studio` directory, and run `sanity install` and `sanity start`.
You may be required to login with the Sanity CLI.

1. Start the Hugo development server:

        hugo server

1. Open [http://localhost:1313/](http://localhost:1313/) in the browser

1. 🎉

## Editing Content

To start editing your site, you can use the Sanity interface at https://ajsilvers-core-ad72d.sanity.studio/.

Alternatively, you can use the free on-page editing experience provided by the [Stackbit Studio](https://stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes).

[![](https://i3.ytimg.com/vi/zd9lGRLVDm4/hqdefault.jpg)](https://stackbit.link/project-readme-lead-video)

Here's a few resources to get you started:

- 📺 &nbsp; [Editing Content](https://stackbit.link/project-readme-editing-video)
- 📺 &nbsp; [Adding, Reordering and Deleting Items](https://stackbit.link/project-readme-adding-video)
- 📺 &nbsp; [Collaboration](https://stackbit.link/project-readme-collaboration-video)
- 📺 &nbsp; [Publishing](https://stackbit.link/project-readme-publishing-video)
- 📚 &nbsp; [Stackbit Documentation](https://stackbit.link/project-readme-documentation)

If you need a hand, make sure to check the [Stackbit support page](https://stackbit.link/project-readme-support).

## Colophon

Generated at `2021-01-10T10:54:32.868Z` by Stackbit version `0.3.42`.