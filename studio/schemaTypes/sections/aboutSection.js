import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({
      name: "Heading",
      title: "Heading",
      type: "string",
    }),

    defineField({
      name: "text",
      title: "Text",
      type: "text",
      description: "Use two new lines (press enter twice) for new paragraphs.",
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
    }),
  ],
});