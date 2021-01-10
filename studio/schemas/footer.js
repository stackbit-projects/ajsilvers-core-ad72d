export default {
    "type": "object",
    "name": "footer",
    "title": "Footer Configuration",
    "fields": [
        {
            "type": "string",
            "name": "content",
            "title": "Footer Content",
            "description": "The copyright text displayed in the footer.",
            "validation": null
        },
        {
            "type": "array",
            "name": "links",
            "title": "Links",
            "description": "List of links in the footer.",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "has_social",
            "title": "Enable Social Links",
            "description": "Display social links in the footer.",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "array",
            "name": "social_links",
            "title": "Social Links",
            "description": "List of social links in the footer.",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "has_subscribe",
            "title": "Enable Subscribe Section",
            "description": "Display the newsletter subscription section in the footer.",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "subscribe_title",
            "title": "Title",
            "description": "The title of the subscribe section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "subscribe_content",
            "title": "Content",
            "description": "The text content of the subscribe section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "subscribe_action",
            "title": "Subscribe Form Action",
            "description": "The path of your custom \"success\" page, if you want to replace the default success message.",
            "validation": null
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "footer"
                ]
            }
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
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "content"
        }
    }
}