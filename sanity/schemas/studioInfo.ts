// Sanity schema: Studio Info (singleton document)
// Use this when setting up Sanity Studio

export default {
  name: 'studioInfo',
  title: 'Studio Info',
  type: 'document',
  fields: [
    {
      name: 'shopName',
      title: 'Shop Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline shown below the shop name',
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
      rows: 4,
      description: 'Brief shop description (2-3 sentences)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day(s)', type: 'string' },
            { name: 'hours', title: 'Hours', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional background image for the hero section',
    },
  ],
  preview: {
    select: { title: 'shopName' },
  },
};
