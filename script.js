const quotes = [
  { q: "Najlepszy czas na działanie jest teraz.", a: "Anonim" },
  { q: "To, co robisz codziennie, ma większe znaczenie niż to, co robisz od czasu do czasu.", a: "Anonim" },
  { q: "Nie musisz być świetny, żeby zacząć. Musisz zacząć, żeby być świetny.", a: "Zig Ziglar" },
  { q: "Spokój zaczyna się tam, gdzie kończy się potrzeba kontroli.", a: "Anonim" },
  { q: "Małe kroki każdego dnia prowadzą do wielkich zmian.", a: "Anonim" },

  // 🔁 Wypełniam resztę automatycznie poniżej:
];

// automatyczne rozszerzenie do 365 dni (jeśli nie masz pełnej listy)
while (quotes.length < 365) {
  quotes.push({
    q: "Cisza też jest odpowiedzią.",
    a: "Anonim"
  });
}

const startDate = new Date("2026-01-01");
const today = new Date();

const oneDay = 1000 * 60 * 60 * 24;
const dayIndex = Math.floor((today - startDate) / oneDay);

const index = ((dayIndex % quotes.length) + quotes.length) % quotes.length;

document.getElementById("quote").textContent = quotes[index].q;
document.getElementById("author").textContent = "— " + quotes[index].a;