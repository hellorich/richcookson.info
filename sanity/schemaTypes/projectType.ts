import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fieldsets: [
    {name: 'dates', title: 'Dates', options: { columns: 2 }}
  ],
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
      fieldset: 'dates'
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      fieldset: 'dates'
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