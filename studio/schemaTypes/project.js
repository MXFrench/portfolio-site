import { ProjectsIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  icon: ProjectsIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required().max(30),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "summary",
      title: "Summary",
      type: "string",
      description: "Short, one-line description of project.",
      validation: Rule => Rule.required().max(100),
    }),

    defineField({
      name: "links",
      title: "Links",
      type: "object",
      fields: [
        {
          name: "liveSite",
          title: "Live Site",
          type: "url",
        },
        {
          name: "github",
          title: "GitHub Repo",
          type: "url",
        },
        {
          name: "figma",
          title: "Figma File",
          type: "url",
        },
      ],
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Use two new lines (hit enter twice) for new paragraphs.",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "projectImage",
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
                accept: "image/*",
              },
              validation: Rule => Rule.required(),
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: Rule => Rule.required().max(30),
            },
          ],
        },
      ],
      validation: Rule => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "summary",
    }
  }
});