import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "brand",
      title: "Brand",
    },
    {
      name: "footer",
      title: "Footer",
    },
  ],
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: Rule => Rule.required().max(30),
      group: "seo",
    }),

    defineField({
      name: "description",
      title: "Site Description",
      type: "string",
      validation: Rule => Rule.max(160),
      group: "seo",
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "brand",
      options: {
        hotspot: true,
        accept: "image/*",
        storeOriginalFilename: true,
      },
      validation: Rule => Rule.required(),
      group: "brand",
    }),

    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "string",
      description: "Use $YEAR for automatic year.",
      validation: Rule => Rule.required(),
      group: "footer",
    }),

    defineField({
      name: "footerLinks",
      title: "Footer Links",
      type: "array",
      of: [
        {
          name: "footerLink",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: Rule => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
      group: "footer",
    }),
  ],

  preview: {
    prepare: () => ({
      title: "Site Settings",
    })
  },
});