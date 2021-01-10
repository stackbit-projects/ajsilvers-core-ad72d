export default {
    "type": "document",
    "name": "home",
    "title": "Home",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page. If value is not set, the author name will be used.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Excerpt",
            "description": "The excerpt of the page displayed in meta data.",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "has_intro",
            "title": "Enable Intro Section",
            "description": "Display the intro section below the site header.",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "markdown",
            "name": "intro_content",
            "title": "Intro Section Content",
            "description": "The text content of the intro section.",
            "validation": null
        },
        {
            "type": "array",
            "name": "intro_actions",
            "title": "Intro Action Buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "has_more_link",
            "title": "Show read more link",
            "description": "Display the read more link in the post feed",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "more_link_text",
            "title": "Read more link label",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "home"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}