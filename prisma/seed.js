const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.image.createMany({
    data: [
      { title: 'image-1.jpg', path: 'images/photos/image-1.jpg' },
      { title: 'image-2.jpg', path: 'images/photos/image-2.jpg' },
      { title: 'image-3.jpg', path: 'images/photos/image-3.jpg' },
      { title: 'image-4.jpg', path: 'images/photos/image-4.jpg' },
      { title: 'image-5.jpg', path: 'images/photos/image-5.jpg' },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
