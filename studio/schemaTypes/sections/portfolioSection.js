import { defineField, defineType } from "sanity";

export default defineType({
  name: "portfolioSection",
  title: "PortfolioSection",
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
    }),
  ],
});