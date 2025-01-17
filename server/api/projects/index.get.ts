import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 9
    const category = query.category as string
    const skip = (page - 1) * limit

    const where = {
      ...(category && category !== 'all' ? { category } : {})
    }

    const [projects, total] = await Promise.all([
      prisma.project.findMany({
        where,
        select: {
          id: true,
          title: true,
          description: true,
          category: true,
          thumbnail: true,
          technologies: true,
          sourceUrl: true,
          demoUrl: true,
          slug: true,
          status: true,
          featured: true,
          startDate: true,
          endDate: true,
          views: true
        },
        orderBy: [
          { featured: 'desc' },
          { order: 'asc' },
          { createdAt: 'desc' }
        ],
        skip,
        take: limit
      }),
      prisma.project.count({ where })
    ])

    return {
      projects,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw createError({
      statusCode: 500,
      message: 'Internal Server Error'
    })
  }
})