import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactSection",
  title: "Contact Section",
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

    defineField({
      name: "formInput",
      title: "Form Input",
      type: "string",
      validation: Rule => Rule.required(),
    }),
  ],
});