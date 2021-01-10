export default {
    "type": "document",
    "name": "config",
    "title": "Site Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseURL",
            "title": "Base URL",
            "description": "Hostname (and path) to the root",
            "hidden": true,
            "validation": null
        },
        {
            "type": "object",
            "name": "params",
            "title": "Params",
            "description": "Site parameters",
            "validation": Rule => Rule.required(),
            "fields": [
                {
                    "type": "image",
                    "name": "favicon",
                    "title": "Favicon",
                    "description": "A square icon that represents your website",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "description",
                    "title": "Site Description",
                    "description": "The default site description used in meta data.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "layout_style",
                    "title": "Layout Style",
                    "description": "The style of the theme layout",
                    "initialValue": "grid",
                    "validation": null,
                    "options": {
                        "list": [
                            "grid",
                            "list"
                        ]
                    }
                },
                {
                    "type": "string",
                    "name": "palette",
                    "title": "Color Palette",
                    "description": "The color palette used for the site.",
                    "initialValue": "green",
                    "validation": null,
                    "options": {
                        "list": [
                            "black",
                            "blue",
                            "green",
                            "red"
                        ]
                    }
                },
                {
                    "type": "header",
                    "name": "header",
                    "title": "Header Configuration",
                    "validation": null
                },
                {
                    "type": "footer",
                    "name": "footer",
                    "title": "Footer Configuration",
                    "validation": null
                }
            ]
        },
        {
            "type": "object",
            "name": "taxonomies",
            "title": "Taxonomies",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "stub",
                    "title": "Stub",
                    "hidden": false,
                    "validation": Rule => Rule.required(),
                    "options": {
                        "list": [
                            "stub"
                        ]
                    }
                }
            ]
        },
        {
            "type": "array",
            "name": "disableKinds",
            "title": "Disable Kinds",
            "description": "Enable disabling of all pages of the specified Kinds.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ],
            "options": {
                "list": [
                    "page",
                    "home",
                    "section",
                    "taxonomy",
                    "taxonomyTerm",
                    "RSS",
                    "sitemap",
                    "robotsTXT",
                    "404"
                ]
            }
        },
        {
            "type": "boolean",
            "name": "uglyURLs",
            "title": "Ugly URLs",
            "description": "When enabled, creates URL of the form /filename.html instead of /filename/.",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config.yaml"
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
                    "config"
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