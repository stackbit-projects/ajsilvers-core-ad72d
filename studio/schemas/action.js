export default {
    "type": "object",
    "name": "action",
    "title": "Action",
    "fields": [
        {
            "type": "string",
            "name": "label",
            "title": "Label",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "url",
            "title": "URL",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "style",
            "title": "Style",
            "initialValue": "link",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "link",
                    "primary",
                    "secondary",
                    "icon"
                ]
            }
        },
        {
            "type": "string",
            "name": "icon_class",
            "title": "Icon",
            "description": "Font Awesome icon class name, used only when style is \"icon\".",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "new_window",
            "title": "Open in new tab/window",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "no_follow",
            "title": "No follow",
            "description": "Add rel=\"nofollow\" attribute to the link",
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
                    "action"
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
            "title": "label"
        }
    }
}