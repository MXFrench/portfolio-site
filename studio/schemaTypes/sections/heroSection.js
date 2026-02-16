import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "portfolioLinkText",
      title: "Portfolio Link Text",
      type: "string",
      validation: Rule => Rule.required().max(20),
    }),

    defineField({
      name: "contactLinkText",
      title: "Contact Link Text",
      type: "string",
      validation: Rule => Rule.required().max(20),
    }),
  ],
});