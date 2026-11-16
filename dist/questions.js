// History and packet-related questions only. Versioned IDs invalidate older off-topic tests.
const QUESTION_ROWS = [
  [
    "History",
    "In which year did World War II end?",
    "1945",
    "1939",
    "1918",
    "1955",
    "World War II ended in 1945."
  ],
  [
    "History",
    "Who was the first president of the United States?",
    "George Washington",
    "Thomas Jefferson",
    "Abraham Lincoln",
    "John Adams",
    "Washington served as the first U.S. president."
  ],
  [
    "History",
    "Which ancient civilization built the pyramids at Giza?",
    "Ancient Egyptians",
    "Ancient Romans",
    "Incas",
    "Vikings",
    "The Giza pyramids were built during ancient Egypt’s Old Kingdom."
  ],
  [
    "History",
    "In which year did the Berlin Wall fall?",
    "1989",
    "1979",
    "1991",
    "1961",
    "The Berlin Wall opened in November 1989."
  ],
  [
    "History",
    "Which document was sealed by King John in 1215?",
    "Magna Carta",
    "Bill of Rights",
    "Treaty of Versailles",
    "Declaration of Independence",
    "Magna Carta was sealed in 1215."
  ],
  [
    "History",
    "Who led the Salt March in 1930?",
    "Mahatma Gandhi",
    "Jawaharlal Nehru",
    "Nelson Mandela",
    "Sun Yat-sen",
    "Gandhi led the Salt March as an act of civil resistance."
  ],
  [
    "History",
    "Which revolution began in 1789?",
    "French Revolution",
    "Russian Revolution",
    "Glorious Revolution",
    "Haitian Revolution",
    "The French Revolution began in 1789."
  ],
  [
    "History",
    "Who became South Africa’s first Black president in 1994?",
    "Nelson Mandela",
    "Desmond Tutu",
    "Steve Biko",
    "Kwame Nkrumah",
    "Mandela became president after the 1994 election."
  ],
  [
    "History",
    "Who founded the Republic of Türkiye in 1923?",
    "Mustafa Kemal Atatürk",
    "Suleiman the Magnificent",
    "Mehmed II",
    "İsmet İnönü",
    "Atatürk was the republic’s founder and first president."
  ],
  [
    "History",
    "Which U.S. president issued the Emancipation Proclamation?",
    "Abraham Lincoln",
    "George Washington",
    "Theodore Roosevelt",
    "Franklin D. Roosevelt",
    "Lincoln issued the Emancipation Proclamation during the Civil War."
  ],
  [
    "Seats of power",
    "Which president is associated with the New Deal?",
    "Franklin D. Roosevelt",
    "Harry S. Truman",
    "Richard Nixon",
    "Ronald Reagan",
    "The New Deal was Roosevelt’s response to the Great Depression."
  ],
  [
    "Seats of power",
    "Which statesman was central to German unification in 1871?",
    "Otto von Bismarck",
    "Konrad Adenauer",
    "Willy Brandt",
    "Mikhail Gorbachev",
    "Bismarck played a central role in German unification."
  ],
  [
    "Seats of power",
    "Which leader was associated with Free France during World War II?",
    "Charles de Gaulle",
    "François Mitterrand",
    "Georges Danton",
    "Maximilien Robespierre",
    "De Gaulle led the Free French movement."
  ],
  [
    "Seats of power",
    "Which leader became the first prime minister of independent India?",
    "Jawaharlal Nehru",
    "B. R. Ambedkar",
    "Indira Gandhi",
    "Subhas Chandra Bose",
    "Nehru became independent India’s first prime minister."
  ],
  [
    "Movements",
    "Which campaign was central to Nelson Mandela’s political life?",
    "Opposition to apartheid",
    "The British suffrage campaign",
    "The Paris Commune",
    "The Salt March",
    "Mandela was a leading figure in the struggle against apartheid."
  ],
  [
    "Movements",
    "Which civil rights leader delivered the “I Have a Dream” speech?",
    "Martin Luther King Jr.",
    "Malcolm X",
    "Frederick Douglass",
    "César Chávez",
    "King delivered the speech at the 1963 March on Washington."
  ],
  [
    "The Fascists",
    "Who founded Falange Española?",
    "José Antonio Primo de Rivera",
    "Galeazzo Ciano",
    "Dino Grandi",
    "Italo Balbo",
    "José Antonio Primo de Rivera founded the Spanish fascist party."
  ],
  [
    "The Fascists",
    "Who founded the Iron Guard movement?",
    "Corneliu Zelea Codreanu",
    "Oswald Mosley",
    "Ante Pavelić",
    "Ion Antonescu",
    "Codreanu founded the fascist and antisemitic Iron Guard movement."
  ],
  [
    "The Fascists",
    "Which political movement was associated with Benito Mussolini?",
    "Fascism",
    "Fabian socialism",
    "Mutualism",
    "Classical liberalism",
    "Mussolini led the Italian Fascist movement and a dictatorship."
  ],
  [
    "The Fascists",
    "Which philosopher was closely associated with Italian fascism?",
    "Giovanni Gentile",
    "John Rawls",
    "Peter Kropotkin",
    "Mary Wollstonecraft",
    "Gentile was an idealist philosopher closely associated with Italian fascism."
  ],
  [
    "Soviet history",
    "Which organization did Yuri Andropov lead before becoming Soviet leader?",
    "KGB",
    "League of Nations",
    "NATO",
    "European Commission",
    "Andropov served as chairman of the KGB."
  ],
  [
    "Soviet history",
    "Which Soviet leader is associated with glasnost and perestroika?",
    "Mikhail Gorbachev",
    "Joseph Stalin",
    "Leonid Brezhnev",
    "Konstantin Chernenko",
    "Gorbachev introduced policies of openness and restructuring."
  ],
  [
    "Soviet history",
    "Nadezhda Krupskaya is particularly associated with which field?",
    "Education and literacy",
    "Spaceflight engineering",
    "Cubist painting",
    "Monetarist economics",
    "Krupskaya advocated education and literacy."
  ],
  [
    "Soviet history",
    "Which Soviet official served as education commissar?",
    "Anatoly Lunacharsky",
    "Maxim Litvinov",
    "Georgy Zhukov",
    "Vyacheslav Molotov",
    "Lunacharsky served as education commissar and wrote on culture."
  ],
  [
    "Soviet history",
    "Which Soviet leader is associated with de-Stalinization?",
    "Nikita Khrushchev",
    "Joseph Stalin",
    "Vladimir Lenin",
    "Mikhail Kalinin",
    "Khrushchev’s leadership is associated with de-Stalinization."
  ],
  [
    "Soviet history",
    "Who founded the Cheka?",
    "Felix Dzerzhinsky",
    "Yakov Sverdlov",
    "Mikhail Frunze",
    "Inessa Armand",
    "Dzerzhinsky founded the Cheka, an organization associated with political repression."
  ],
  [
    "Soviet history",
    "Which figure was a prominent Soviet military commander in World War II?",
    "Georgy Zhukov",
    "Mikhail Suslov",
    "Alexandra Artyukhina",
    "Grigory Zinoviev",
    "Zhukov was a prominent Soviet marshal in World War II."
  ],
  [
    "Soviet history",
    "Which Soviet premier is associated with economic reform proposals?",
    "Alexei Kosygin",
    "Sergei Kirov",
    "Lev Kamenev",
    "Yakov Sverdlov",
    "Kosygin is associated with Soviet economic reform proposals."
  ],
  [
    "The Communists",
    "Who co-wrote The Communist Manifesto with Karl Marx?",
    "Friedrich Engels",
    "Vladimir Lenin",
    "Rosa Luxemburg",
    "Leon Trotsky",
    "Marx and Engels wrote The Communist Manifesto."
  ],
  [
    "The Communists",
    "Which thinker developed the concept of cultural hegemony?",
    "Antonio Gramsci",
    "Milton Friedman",
    "Thomas Hobbes",
    "Vilfredo Pareto",
    "Cultural hegemony is a central concept associated with Gramsci."
  ],
  [
    "The Communists",
    "Which theorist is associated with permanent revolution?",
    "Leon Trotsky",
    "Eduard Bernstein",
    "Adam Smith",
    "Carl Schmitt",
    "Trotsky developed a theory of permanent revolution."
  ],
  [
    "The Communists",
    "Which figure was a long-serving leader of the Italian Communist Party?",
    "Palmiro Togliatti",
    "Giovanni Gentile",
    "Roberto Farinacci",
    "Ugo Spirito",
    "Togliatti led the Italian Communist Party for many years."
  ],
  [
    "The idea makers",
    "Who wrote The Republic?",
    "Plato",
    "John Locke",
    "Immanuel Kant",
    "Thomas Hobbes",
    "The Republic is a philosophical dialogue by Plato."
  ],
  [
    "The idea makers",
    "Who wrote The Social Contract?",
    "Jean-Jacques Rousseau",
    "Niccolò Machiavelli",
    "Aristotle",
    "Adam Smith",
    "Rousseau published The Social Contract in 1762."
  ],
  [
    "The idea makers",
    "Who wrote Leviathan?",
    "Thomas Hobbes",
    "John Stuart Mill",
    "Karl Popper",
    "Hannah Arendt",
    "Hobbes wrote Leviathan, a work on sovereignty and political order."
  ],
  [
    "The idea makers",
    "Which thinker wrote The Prince?",
    "Niccolò Machiavelli",
    "John Rawls",
    "Montesquieu",
    "Jean Bodin",
    "The Prince is Machiavelli’s work on political power and statecraft."
  ],
  [
    "The idea makers",
    "Which thinker is associated with revolutionary syndicalism and political myth?",
    "Georges Sorel",
    "John Locke",
    "Robert Nozick",
    "Thomas Paine",
    "Sorel wrote about revolutionary syndicalism and political myth."
  ],
  [
    "The idea makers",
    "Which philosopher in the archive theorized corporatism?",
    "Ugo Spirito",
    "Mary Astell",
    "Peter Kropotkin",
    "Isaiah Berlin",
    "Spirito was an idealist philosopher and theorist of corporatism."
  ],
  [
    "The idea makers",
    "Who wrote A Theory of Justice?",
    "John Rawls",
    "Friedrich Nietzsche",
    "Mikhail Bakunin",
    "Georg Lukács",
    "Rawls wrote A Theory of Justice."
  ],
  [
    "The idea makers",
    "Who wrote The Origins of Totalitarianism?",
    "Hannah Arendt",
    "Simone Weil",
    "Nancy Fraser",
    "Judith Butler",
    "Arendt examined totalitarianism in this book."
  ],
  [
    "Economic Geniuses",
    "Who wrote The Wealth of Nations?",
    "Adam Smith",
    "Karl Marx",
    "John Maynard Keynes",
    "Milton Friedman",
    "Smith published The Wealth of Nations in 1776."
  ],
  [
    "Economic Geniuses",
    "Which economist is associated with comparative advantage?",
    "David Ricardo",
    "Thorstein Veblen",
    "John Kenneth Galbraith",
    "Irving Fisher",
    "Ricardo is associated with the theory of comparative advantage."
  ],
  [
    "Economic Geniuses",
    "Which economist is associated with monetarism?",
    "Milton Friedman",
    "Karl Polanyi",
    "Joan Robinson",
    "Henry George",
    "Friedman is a major figure associated with monetarism."
  ],
  [
    "Economic Geniuses",
    "Which economist’s work shaped demand-management policy?",
    "John Maynard Keynes",
    "Ludwig von Mises",
    "Thomas Robert Malthus",
    "Vilfredo Pareto",
    "Keynes’s work strongly influenced demand-management policy."
  ],
  [
    "Economic Geniuses",
    "Which economist is associated with creative destruction?",
    "Joseph Schumpeter",
    "Elinor Ostrom",
    "Paul Samuelson",
    "Alfred Marshall",
    "Creative destruction is associated with Schumpeter’s analysis of capitalism."
  ],
  [
    "Economic Geniuses",
    "Who studied governance of common resources?",
    "Elinor Ostrom",
    "Irving Fisher",
    "Thomas Robert Malthus",
    "David Ricardo",
    "Ostrom studied how communities govern common resources."
  ],
  [
    "Economic Geniuses",
    "Which thinker is associated with land value taxation?",
    "Henry George",
    "Karl Kautsky",
    "Friedrich Engels",
    "Max Weber",
    "Henry George argued for land value taxation."
  ],
  [
    "Economic Geniuses",
    "Which economist is known for work on information asymmetry?",
    "Joseph Stiglitz",
    "Alfred Marshall",
    "Adam Smith",
    "David Ricardo",
    "Stiglitz contributed to the economics of information asymmetry."
  ],
  [
    "Art, mind & soul",
    "Who painted the Mona Lisa?",
    "Leonardo da Vinci",
    "Michelangelo",
    "Raphael",
    "Rembrandt",
    "Leonardo da Vinci painted the Mona Lisa."
  ],
  [
    "Art, mind & soul",
    "Who painted The Starry Night?",
    "Vincent van Gogh",
    "Claude Monet",
    "Pablo Picasso",
    "Salvador Dalí",
    "Van Gogh painted The Starry Night in 1889."
  ],
  [
    "Art, mind & soul",
    "Which artist painted Guernica?",
    "Pablo Picasso",
    "Henri Matisse",
    "Diego Rivera",
    "Gustav Klimt",
    "Picasso painted Guernica in response to the bombing of the town."
  ],
  [
    "Art, mind & soul",
    "Which sculptor created The Thinker?",
    "Auguste Rodin",
    "Michelangelo",
    "Marcel Duchamp",
    "Georges Braque",
    "The Thinker is a sculpture by Rodin."
  ],
  [
    "Art, mind & soul",
    "Which artist painted The Two Fridas?",
    "Frida Kahlo",
    "Käthe Kollwitz",
    "Georgia O’Keeffe",
    "Egon Schiele",
    "Kahlo painted The Two Fridas in 1939."
  ],
  [
    "Art, mind & soul",
    "Who wrote Nineteen Eighty-Four?",
    "George Orwell",
    "Franz Kafka",
    "Virginia Woolf",
    "Leo Tolstoy",
    "Orwell’s novel was published in 1949."
  ],
  [
    "Art, mind & soul",
    "Who wrote The Metamorphosis?",
    "Franz Kafka",
    "Albert Camus",
    "Jean-Paul Sartre",
    "Fyodor Dostoevsky",
    "Kafka’s novella begins with Gregor Samsa’s transformation."
  ],
  [
    "Art, mind & soul",
    "Which filmmaker directed Battleship Potemkin?",
    "Sergei Eisenstein",
    "Dziga Vertov",
    "Bertolt Brecht",
    "Alexander Rodchenko",
    "Eisenstein directed Battleship Potemkin and theorized montage."
  ],
  [
    "Art, mind & soul",
    "Which artist is associated with Suprematism and Black Square?",
    "Kazimir Malevich",
    "Claude Monet",
    "Caravaggio",
    "Johannes Vermeer",
    "Malevich developed Suprematism and painted Black Square."
  ],
  [
    "Art, mind & soul",
    "Who composed Peter and the Wolf?",
    "Sergei Prokofiev",
    "Dmitri Shostakovich",
    "Ludwig van Beethoven",
    "Frédéric Chopin",
    "Prokofiev composed Peter and the Wolf."
  ],
  [
    "Art, mind & soul",
    "Which filmmaker made Man with a Movie Camera?",
    "Dziga Vertov",
    "Sergei Eisenstein",
    "Vladimir Mayakovsky",
    "Kazimir Malevich",
    "Man with a Movie Camera is a documentary film by Vertov."
  ],
  [
    "Art, mind & soul",
    "Which artist is associated with Constructivist photography and design?",
    "Alexander Rodchenko",
    "Sandro Botticelli",
    "Pierre-Auguste Renoir",
    "Albrecht Dürer",
    "Rodchenko worked across Constructivist art, design, and photography."
  ]
];
const QUESTIONS=QUESTION_ROWS.map((r,i)=>({id:'history-v2-'+(i+1),category:r[0],text:r[1],answer:r[2],options:r.slice(2,6),explanation:r[6]}));
const PACK_COST=100,QUIZ_LENGTH=5,POINTS_PER_CORRECT=25;

function validateQuiz(q){return !!q&&Array.isArray(q.ids)&&q.ids.length===QUIZ_LENGTH&&new Set(q.ids).size===QUIZ_LENGTH&&q.ids.every(id=>QUESTIONS.some(x=>x.id===id))&&Array.isArray(q.answers)&&q.answers.length<=QUIZ_LENGTH&&q.answers.every((a,i)=>QUESTIONS.find(x=>x.id===q.ids[i]).options.includes(a))&&typeof q.token==='string'&&q.token.length<80&&typeof q.review==='boolean'&&typeof q.awarded==='boolean'&&(!q.review||q.answers.length>0)&&(q.answers.length<QUIZ_LENGTH||q.review||q.awarded)&&(!q.awarded||q.answers.length===QUIZ_LENGTH);}
