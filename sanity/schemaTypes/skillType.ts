import {defineField, defineType} from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Skill',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Link',
      type: 'url',
    }),
  ],
})