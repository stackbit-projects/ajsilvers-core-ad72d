export default {
    "type": "document",
    "name": "contact",
    "title": "Contact",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The text shown just below the page title.",
            "validation": null
        },
        {
            "type": "string",
            "name": "excerpt",
            "title": "Excerpt",
            "description": "The excerpt of the page displayed in meta data.",
            "validation": null
        },
        {
            "type": "image",
            "name": "img_path",
            "title": "Image",
            "description": "The image shown below the page title and subtitle.",
            "validation": null
        },
        {
            "type": "string",
            "name": "img_alt",
            "title": "Image Alt Text",
            "description": "The alt text of the image.",
            "validation": null
        },
        {
            "type": "string",
            "name": "form_id",
            "title": "Form ID",
            "description": "A unique identifier of the form. Must not contain whitespace.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "form_action",
            "title": "Form Action",
            "description": "The path of your custom \"success\" page, if you want to replace the default success message.",
            "validation": null
        },
        {
            "type": "array",
            "name": "form_fields",
            "title": "Form Fields",
            "validation": null,
            "of": [
                {
                    "type": "form_field"
                }
            ]
        },
        {
            "type": "string",
            "name": "submit_label",
            "title": "Submit Button Label",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "contact"
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
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
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