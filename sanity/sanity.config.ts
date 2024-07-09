import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

import {tags} from 'sanity-plugin-tags'

export default defineConfig({
  name: 'default',
  title: 'richcookson.info',

  projectId: 'p7wsicge',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), tags({})],

  schema: {
    types: schemaTypes,
  },
})
