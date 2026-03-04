// Sanity schema: Artist
// Use this when setting up Sanity Studio

export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Artist headshot or avatar',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 2,
      description: 'Short bio (1-2 sentences)',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'bookingUrl',
      title: 'Booking URL',
      type: 'url',
      description: 'Link to booking page (e.g., linktree, IG, or booking platform)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isGuest',
      title: 'Guest Artist',
      type: 'boolean',
      initialValue: false,
      description: 'Check if this is a guest/visiting artist',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide from the website',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
    {
      name: 'portfolio',
      title: 'Portfolio',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      description: 'Curated portfolio images (6-12 recommended)',
      validation: (Rule: any) => Rule.max(12),
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'bio',
      media: 'photo',
    },
  },
};
