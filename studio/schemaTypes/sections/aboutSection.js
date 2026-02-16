import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "text",
      title: "Text",
      type: "text",
      description: "Use two new lines (press enter twice) for new paragraphs.",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/*",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for accessibility and SEO",
          options: {
            isHighlighted: true,
          },
        },
      ],
      validation: Rule => Rule.required(),
    }),
  ],
});