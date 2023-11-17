import "flowbite";
import { Card, DarkThemeToggle, Flowbite } from "flowbite-react";
import { Fragment, useState } from "react";
import "./App.css";
import { jams } from "./gamejams";
import { Author, Game, Jam } from "./types";

const authors = findAuthors();
const platforms = ["web", "windows", "mac", "linux", "love2d"];

const transparent =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

function App() {
  const [selectedJam, setSelectedJam] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

  function bySelectedPlatform() {
    return selectedPlatform
      ? (game: Game) => Object.keys(game.platforms).includes(selectedPlatform)
      : () => true;
  }
  function bySelectedJam() {
    return selectedJam ? (jam: Jam) => jam.id === selectedJam : () => true;
  }
  function bySelectedAuthor() {
    return selectedAuthor
      ? (game: Game) => game.author === selectedAuthor
      : () => true;
  }

  const filteredGames = Object.values(jams)
    .filter(bySelectedJam())
    .flatMap((jam) => {
      return jam.games.map((game) => ({ ...game, jam_title: jam.title }));
    })
    .filter(bySelectedPlatform())
    .filter(bySelectedAuthor())
    .sort(sortBy((g) => g.rank));

  return (
    <Flowbite theme={{ mode: "dark" }}>
      <nav className="bg-white dark:bg-gray-900 md:fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-1">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>
          <div
            className="items-center w-full md:flex flex-1 md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <a
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse ml-auto"
            >
              <h1 className="self-center text-4xl font-semibold dark:text-white">
                <span className="whitespace-nowrap">🎮 Spelsyltkatalog!</span>
              </h1>
            </a>
            <div className="flex flex-wrap justify-end ml-auto">
              <div className="flex place-items-center">
                {filteredGames.length} spel!
              </div>
              <select
                id="select_platforms"
                className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 fill-available"
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
              >
                <option value={""}>Alla plattformar</option>
                {platforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
              <select
                id="select_jams"
                className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 fill-available"
                value={selectedJam}
                onChange={(e) => setSelectedJam(e.target.value)}
              >
                <option value={""}>Alla spelsyltar</option>
                {Object.values(jams).map((jam) => (
                  <option key={jam.id} value={jam.id}>
                    {jam.title}
                  </option>
                ))}
              </select>
              <select
                id="select_authors"
                className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
              >
                <option value={""}>Alla syltare</option>
                {[...authors.values()]
                  .sort(sortBy((author) => -author.submissionsCount))
                  .map((author) => (
                    <option key={author.name} value={author.name}>
                      {author.name}
                    </option>
                  ))}
              </select>
              <div className="flex justify-end items-center">
                <DarkThemeToggle />
                <a
                  href="https://github.com/scmx/kodsnack-spelsylt-all-games-catalog"
                  className="ml-3"
                >
                  <svg
                    version="1.1"
                    viewBox="0 0 16 16"
                    height="32"
                    width="32"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[2400px] gap-3 mx-auto p-3 md:mt-[73px] dark:bg-black">
        {filteredGames.map((game) => (
          <Card
            key={game.link}
            href={game.link}
            imgAlt={game.title}
            imgSrc={game.thumb ?? transparent}
          >
            <div>
              <h2 className="text-2xl dark:text-white">{game.title}</h2>{" "}
              <div className="dark:text-white">
                av <strong className="dark:text-white">{game.author}</strong>
              </div>
              <div className="dark:text-white">
                för{" "}
                <strong className="dark:text-white">{game.jam_title}</strong>
              </div>
            </div>
            <div className="flex">
              {Object.entries(game.platforms)
                .filter(([, ok]) => ok)
                .map(([name], index) => (
                  <Fragment key={name}>
                    {index > 0 ? <>,&nbsp;</> : null}
                    <span>{name}</span>
                  </Fragment>
                ))}
            </div>
          </Card>
        ))}
      </main>
    </Flowbite>
  );
}

function sortBy<T>(mapper: (item: T) => number) {
  return function sort(a: T, b: T) {
    const va = mapper(a);
    const vb = mapper(b);
    if (va < vb) return -1;
    if (va > vb) return 1;
    return 0;
  };
}

function findAuthors() {
  const authors = new Map<string, Author>();
  const games = Object.values(jams).flatMap((jam) => jam.games);
  games.forEach((game) => {
    const author = authors.get(game.author);
    if (author) {
      author.submissionsCount++;
    } else authors.set(game.author, { name: game.author, submissionsCount: 1 });
  });
  return authors;
}

export default App;
