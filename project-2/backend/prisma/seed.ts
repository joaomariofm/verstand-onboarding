import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const theGodfather =	await prisma.movie.create({
		data: {
			title: "The Godfather",
			description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
			poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
		},
	});

	console.log({theGodfather});
}

main()
	.then(async () => {
		prisma.$disconnect();
		console.log("Seed complete")
	})
	.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

