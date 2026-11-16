const THEME_POOLS={
soviet:['Vladimir Lenin','Joseph Stalin','Nikita Khrushchev','Leonid Brezhnev','Mikhail Gorbachev','Leon Trotsky','Nikolai Bukharin','Georgi Plekhanov','Alexandra Kollontai','Andrei Sakharov'],
fascists:['Benito Mussolini','Adolf Hitler','Giovanni Gentile','Ugo Spirito','Julius Evola','Carl Schmitt','Oswald Mosley','Ante Pavelić','Heinrich Himmler','Reinhard Heydrich','Michael Wittmann','Ion Antonescu'],
economics:['Adam Smith','Karl Marx','Friedrich Engels','John Stuart Mill','Friedrich Hayek','Ludwig von Mises','Milton Friedman','John Maynard Keynes','Joseph Schumpeter','Karl Polanyi','Henry George','Thorstein Veblen','Amartya Sen','Elinor Ostrom','Vilfredo Pareto','Beatrice Webb','Sidney Webb','R. H. Tawney','José Carlos Mariátegui','Nikolai Bukharin','Eduard Bernstein'],
communists:['Karl Marx','Friedrich Engels','Vladimir Lenin','Joseph Stalin','Nikita Khrushchev','Leonid Brezhnev','Mikhail Gorbachev','Mao Zedong','Deng Xiaoping','Zhou Enlai','Xi Jinping','Ho Chi Minh','Võ Nguyên Giáp','Fidel Castro','Raúl Castro','Josip Broz Tito','Kim Il-sung','Kim Jong-il','Pol Pot','Che Guevara','Rosa Luxemburg','Antonio Gramsci','Leon Trotsky','Karl Kautsky','Georgi Plekhanov','Nikolai Bukharin','Georg Lukács','Louis Althusser','Angela Davis','Alexandra Kollontai','Clara Zetkin','W. E. B. Du Bois','Claudia Jones','Dolores Ibárruri','José Carlos Mariátegui','Abimael Guzmán','Samora Machel','Agostinho Neto'],
art:['Hannah Arendt','Simone de Beauvoir','Simone Weil','Walter Benjamin','Albert Camus','Jean-Paul Sartre','Bertrand Russell','Guy Debord','José Martí','Aimé Césaire']
};
const FASCES_ICON='<svg viewBox="0 0 80 90" role="img" aria-label="Fasces" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M32 15V77M39 11V81M46 15V77M25 18V74M53 18V74" stroke-width="5"/><path d="M22 29H56M22 48H56M22 66H56" stroke-width="4"/><path d="M54 16c7 2 13 7 17 14-8 4-14 5-21 4" stroke-width="3" fill="currentColor"/><path d="M24 24l31 30M24 43l31 30" stroke-width="2"/></g></svg>';
const THEMED_PACKS=[
{id:'soviet',name:'Soviet Legends',title:'SOVIET<br>LEGENDS',symbol:'★',color:'#b66258',ink:'#301c19',desc:'Figures from Soviet leadership, thought, and dissent.'},
{id:'fascists',name:'The Fascists',title:'THE<br>FASCISTS',symbol:FASCES_ICON,color:'#aaa69a',ink:'#252923',desc:'Fascist leaders, collaborators, and affiliated theorists.'},
{id:'economics',name:'Economic Geniuses',title:'ECONOMIC<br>GENIUSES',symbol:'$',color:'#d4c484',ink:'#3d351b',desc:'Economists and thinkers across competing schools.'},
{id:'communists',name:'The Communists',title:'THE<br>COMMUNISTS',symbol:'☭',color:'#a66c76',ink:'#321c27',desc:'Communist theorists, organizers, and state leaders.'},
{id:'art',name:'The art, the mind and the soul',title:'THE ART,<br>THE MIND<br>& THE SOUL',symbol:'❧',color:'#b8b4d4',ink:'#302b48',desc:'Artists, composers, writers, and philosophical voices.'}
];
