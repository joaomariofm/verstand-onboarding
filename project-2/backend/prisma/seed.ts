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

	const theDarkKnight = await prisma.movie.create({
		data: {
			title: "The Dark Knight",
			description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
			poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
		},
	});

	console.log({
		theGodfather,
		theDarkKnight
	});
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

