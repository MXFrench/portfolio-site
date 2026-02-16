import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "heroSection",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "portfolioSection",
      title: "Portfolio Section",
      type: "portfolioSection",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "aboutSection",
      title: "About Section",
      type: "aboutSection",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "contactSection",
      title: "Contact Section",
      type: "contactSection",
      validation: Rule => Rule.required(),
    }),
  ],

  preview: {
    prepare: () => ({
      title: "Home Page",
    })
  },
});