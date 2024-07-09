import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'startDate',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      type: 'date',
    }),
    defineField({
      name: 'details',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      name: 'skills',
      type: 'tags',
      options: {
        includeFromReference: 'skill'
      }
    })
  ],
})