// Approachable history, politics, and packet questions. The first option is correct.
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
    "Which political movement was associated with Benito Mussolini?",
    "Fascism",
    "Fabian socialism",
    "Mutualism",
    "Classical liberalism",
    "Mussolini led the Italian Fascist movement and a dictatorship."
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
    "Which Soviet leader is associated with de-Stalinization?",
    "Nikita Khrushchev",
    "Joseph Stalin",
    "Vladimir Lenin",
    "Mikhail Kalinin",
    "Khrushchev’s leadership is associated with de-Stalinization."
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
    "The Communists",
    "Who co-wrote The Communist Manifesto with Karl Marx?",
    "Friedrich Engels",
    "Vladimir Lenin",
    "Rosa Luxemburg",
    "Leon Trotsky",
    "Marx and Engels wrote The Communist Manifesto."
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
    "Which thinker wrote The Prince?",
    "Niccolò Machiavelli",
    "John Rawls",
    "Montesquieu",
    "Jean Bodin",
    "The Prince is Machiavelli’s work on political power and statecraft."
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
    "History",
    "In which year did World War I begin?",
    "1914",
    "1814",
    "1939",
    "1945",
    "World War I began in 1914."
  ],
  [
    "History",
    "In which year did World War II begin in Europe?",
    "1939",
    "1914",
    "1945",
    "1961",
    "World War II began in Europe in 1939."
  ],
  [
    "History",
    "In which year was the U.S. Declaration of Independence adopted?",
    "1776",
    "1492",
    "1917",
    "1945",
    "The Declaration of Independence was adopted in 1776."
  ],
  [
    "History",
    "Which two superpowers were the main rivals in the Cold War?",
    "United States and Soviet Union",
    "France and Spain",
    "Italy and Greece",
    "Canada and Australia",
    "The United States and Soviet Union were the Cold War’s main superpowers."
  ],
  [
    "History",
    "In which year did the Soviet Union dissolve?",
    "1991",
    "1917",
    "1945",
    "1968",
    "The Soviet Union dissolved in 1991."
  ],
  [
    "History",
    "Which leader is associated with the Bolshevik Revolution of 1917?",
    "Vladimir Lenin",
    "Winston Churchill",
    "Napoleon Bonaparte",
    "Ronald Reagan",
    "Lenin led the Bolsheviks during the 1917 revolution."
  ],
  [
    "History",
    "Which leader proclaimed the People’s Republic of China in 1949?",
    "Mao Zedong",
    "Mahatma Gandhi",
    "Joseph Stalin",
    "Charles de Gaulle",
    "Mao proclaimed the People’s Republic of China in 1949."
  ],
  [
    "History",
    "Which party did Adolf Hitler lead?",
    "Nazi Party",
    "British Labour Party",
    "Indian National Congress",
    "African National Congress",
    "Hitler led the Nazi Party and established a dictatorship."
  ],
  [
    "History",
    "Which leader was a French emperor?",
    "Napoleon Bonaparte",
    "Abraham Lincoln",
    "John Locke",
    "Nelson Mandela",
    "Napoleon became Emperor of the French."
  ],
  [
    "History",
    "Which conflict took place between the Union and Confederacy?",
    "American Civil War",
    "Cold War",
    "Crimean War",
    "Spanish Civil War",
    "The Union and Confederacy fought the American Civil War."
  ],
  [
    "History",
    "What was apartheid?",
    "A system of racial segregation",
    "A form of music",
    "A scientific theory",
    "A trade currency",
    "Apartheid was a system of institutionalized racial segregation."
  ],
  [
    "History",
    "Which leader is closely associated with nonviolent resistance?",
    "Mahatma Gandhi",
    "Benito Mussolini",
    "Joseph Stalin",
    "Adolf Hitler",
    "Gandhi made nonviolent civil resistance central to his political campaigns."
  ],
  [
    "Politics",
    "What does the right to vote allow a person to do?",
    "Take part in elections",
    "Appoint every public official directly",
    "Automatically become head of state",
    "Ignore all laws",
    "Voting allows eligible people to take part in elections."
  ],
  [
    "Politics",
    "What does a constitution set out?",
    "The basic rules of government",
    "A political party’s election manifesto",
    "A government’s daily appointments",
    "A company’s business plan",
    "A constitution establishes fundamental rules and institutions of government."
  ],
  [
    "Politics",
    "What is a parliament primarily responsible for?",
    "Making laws",
    "Judging criminal trials",
    "Privately owning all newspapers",
    "Running every local election campaign",
    "Parliaments debate and pass laws."
  ],
  [
    "Politics",
    "Which form of government usually has a king or queen?",
    "Monarchy",
    "Republic",
    "Direct democracy",
    "Military junta",
    "A monarchy has a monarch, such as a king or queen, as head of state."
  ],
  [
    "Politics",
    "What is censorship?",
    "Restricting expression or access to information",
    "Counting election votes",
    "Publishing government budgets",
    "Holding an open public debate",
    "Censorship restricts expression or access to information."
  ],
  [
    "Politics",
    "What is a political opposition’s role?",
    "Challenge and scrutinize the government",
    "Automatically support every policy",
    "Replace all courts",
    "Ban all rival parties",
    "Political opposition scrutinizes the government and offers alternatives."
  ],
  [
    "Politics",
    "What is the purpose of an election?",
    "Choose representatives or decide public questions",
    "Pass power down through a royal family",
    "Appoint a monarch for life",
    "Give every decision to the military",
    "Elections allow eligible voters to make political choices."
  ],
  [
    "Politics",
    "What does separation of powers divide?",
    "Government authority among different branches",
    "Voters into political parties",
    "A country into time zones",
    "Government workers by age",
    "Separation of powers divides authority among branches of government."
  ],
  [
    "Politics",
    "What does a civil rights movement seek?",
    "Equal rights and protection under the law",
    "Different legal rights for each race",
    "Permanent rule by one family",
    "An end to all elections",
    "Civil rights movements seek equal rights and legal protection."
  ],
  [
    "Politics",
    "What is a dictatorship usually characterized by?",
    "Concentrated power with limited political opposition",
    "Regular open competition for power",
    "An independent opposition controlling government",
    "Power always changing hands by inheritance",
    "Dictatorships concentrate power and restrict political opposition."
  ],
  [
    "The Thinker",
    "Which figure was a philosopher rather than a head of government?",
    "Socrates",
    "Winston Churchill",
    "Franklin D. Roosevelt",
    "Otto von Bismarck",
    "Socrates is known for philosophical questioning about knowledge and ethics."
  ],
  [
    "The Thinker",
    "Which Roman emperor also wrote the Meditations?",
    "Marcus Aurelius",
    "Napoleon Bonaparte",
    "Vladimir Lenin",
    "George Washington",
    "Marcus Aurelius was a Roman emperor and Stoic philosopher."
  ],
  [
    "The Thinker",
    "Which thinker is associated with “I think, therefore I am”?",
    "René Descartes",
    "Karl Marx",
    "Adam Smith",
    "Georges Sorel",
    "Descartes is associated with this statement about thought and existence."
  ],
  [
    "The Thinker",
    "Which thinker is famous for criticizing capitalism?",
    "Karl Marx",
    "John Locke",
    "Thomas Hobbes",
    "Niccolò Machiavelli",
    "Marx’s writings include an influential critique of capitalism."
  ],
  [
    "Economic Geniuses",
    "What is inflation?",
    "A general rise in prices",
    "A rise in the voting age",
    "A government changing its constitution",
    "A reduction in the number of elections",
    "Inflation means a sustained rise in the general price level."
  ],
  [
    "Economic Geniuses",
    "What do governments commonly use taxes to help fund?",
    "Public services",
    "Political beliefs themselves",
    "Historical events that already happened",
    "The personal votes of each citizen",
    "Taxes help fund public services and government activity."
  ],
  [
    "Economic Geniuses",
    "Which figure was an economist?",
    "John Maynard Keynes",
    "Pablo Picasso",
    "Michelangelo",
    "Frida Kahlo",
    "Keynes was an economist whose ideas influenced public economic policy."
  ],
  [
    "History",
    "Who was a British prime minister during most of World War II?",
    "Winston Churchill",
    "George Washington",
    "Mao Zedong",
    "Simón Bolívar",
    "Churchill led Britain’s government during most of World War II."
  ]
];
const QUESTIONS=QUESTION_ROWS.map((r,i)=>({id:'easy-history-v3-'+(i+1),category:r[0],text:r[1],answer:r[2],options:r.slice(2,6),explanation:r[6]}));
const PACK_COST=100,QUIZ_LENGTH=5,POINTS_PER_CORRECT=25;

function validateQuiz(q){return !!q&&Array.isArray(q.ids)&&q.ids.length===QUIZ_LENGTH&&new Set(q.ids).size===QUIZ_LENGTH&&q.ids.every(id=>QUESTIONS.some(x=>x.id===id))&&Array.isArray(q.answers)&&q.answers.length<=QUIZ_LENGTH&&q.answers.every((a,i)=>QUESTIONS.find(x=>x.id===q.ids[i]).options.includes(a))&&typeof q.token==='string'&&q.token.length<80&&typeof q.review==='boolean'&&typeof q.awarded==='boolean'&&(!q.review||q.answers.length>0)&&(q.answers.length<QUIZ_LENGTH||q.review||q.awarded)&&(!q.awarded||q.answers.length===QUIZ_LENGTH);}
