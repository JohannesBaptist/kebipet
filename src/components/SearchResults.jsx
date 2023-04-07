
import ResultCard from '@components/ResultCard'



const item = [
  {
    image: "/sample.jpg",
    price: "9,9",
    manufactor: "Lapi Toys",
    product:
      "Lapi Toys - Dungeons and dragons essential kit - D&D polydice tray - Dnd dice tray - Dobbelsteenbak met deksel - Dobbelpiste - Rolling tray - Pitjesbak - Inclusief 5 sets dobbelstenen",
    type: "Type RPG spel: Dungeons & Dragons Materiaal: Plastic, Imitatieleer, Imitatiesuède, Acryl",
    stars: 5,
    reviews: "11",
    description:
      "Ben je nieuw in de wereld van Dungeons and Dragons? Of een ervaren Dungeon Master op zoek naar uitbreiding…",
  },
  {
    image: "/sample.jpg",
    price: "98888,99",
    manufactor: "Lapi Toys",
    product:
      "Lapi Toys - Dungeons and dragons essential kit - D&D polydice tray - Dnd dice tray - Dobbelsteenbak met deksel - Dobbelpiste - Rolling tray - Pitjesbak - Inclusief 5 sets dobbelstenen",
    type: "Type RPG spel: Dungeons & Dragons Materiaal: Plastic, Imitatieleer, Imitatiesuède, Acryl",
    stars: 5,
    reviews: "11",
    description:
      "Ben je nieuw in de wereld van Dungeons and Dragons? Of een ervaren Dungeon Master op zoek naar uitbreiding…",
  },
  {
    image: "/sample.jpg",
    price: "9,99",
    manufactor: "Lapi Toys",
    product:
      "Lapi Toys - Dungeons and dragons essential kit - D&D polydice tray - Dnd dice tray - Dobbelsteenbak met deksel - Dobbelpiste - Rolling tray - Pitjesbak - Inclusief 5 sets dobbelstenen",
    type: "Type RPG spel: Dungeons & Dragons Materiaal: Plastic, Imitatieleer, Imitatiesuède, Acryl",
    stars: 5,
    reviews: "11",
    description:
      "Ben je nieuw in de wereld van Dungeons and Dragons? Of een ervaren Dungeon Master op zoek naar uitbreiding…",
  },
  {
    image: "/sample.jpg",
    price: "9,99",
    manufactor: "Lapi Toys",
    product:
      "Lapi Toys - Dungeons and dragons essential kit - D&D polydice tray - Dnd dice tray - Dobbelsteenbak met deksel - Dobbelpiste - Rolling tray - Pitjesbak - Inclusief 5 sets dobbelstenen",
    type: "Type RPG spel: Dungeons & Dragons Materiaal: Plastic, Imitatieleer, Imitatiesuède, Acryl",
    stars: 5,
    reviews: "11",
    description:
      "Ben je nieuw in de wereld van Dungeons and Dragons? Of een ervaren Dungeon Master op zoek naar uitbreiding…",
  },
  {
    image: "/sample.jpg",
    price: "9,99",
    manufactor: "Lapi Toys",
    product:
      "Lapi Toys - Dungeons and dragons essential kit - D&D polydice tray - Dnd dice tray - Dobbelsteenbak met deksel - Dobbelpiste - Rolling tray - Pitjesbak - Inclusief 5 sets dobbelstenen",
    type: "Type RPG spel: Dungeons & Dragons Materiaal: Plastic, Imitatieleer, Imitatiesuède, Acryl",
    stars: 5,
    reviews: "11",
    description:
      "Ben je nieuw in de wereld van Dungeons and Dragons? Of een ervaren Dungeon Master op zoek naar uitbreiding…",
  },
  {
    image: "/sample.jpg",
    price: "9,99",
    manufactor: "Lapi Toys",
    product:
      "Lapi Toys - Dungeons and dragons essential kit - D&D polydice tray - Dnd dice tray - Dobbelsteenbak met deksel - Dobbelpiste - Rolling tray - Pitjesbak - Inclusief 5 sets dobbelstenen",
    type: "Type RPG spel: Dungeons & Dragons Materiaal: Plastic, Imitatieleer, Imitatiesuède, Acryl",
    stars: 5,
    reviews: "11",
    description:
      "Ben je nieuw in de wereld van Dungeons and Dragons? Of een ervaren Dungeon Master op zoek naar uitbreiding…",
  },
];

export default function SearchResults({data, search}) {
  return (
    <div className="flex-grow">
      <div className="h-[150px] flex flex-col px-5 py-5  justify-between">
        <p className="font-black text-[30px] mt-[25px]">
        {`${search ? search : "" } in All Categories`}
        </p>
        <p className="font-black text-2xl font-[delicious]">
          {" "}
          5000 SearchResults
        </p>
      </div>
      <div>
        {item.map((i, index) => {
          return <ResultCard key={index} item={i} />;
        })}
      </div>
    </div>
  );
}
