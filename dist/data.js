const rawCards = {
Leaders: `Franklin D. Roosevelt|United States|New Deal; U.S. president during the Great Depression and most of World War II.
Mustafa Kemal Atatürk|Türkiye|Founder and first president of the Republic of Türkiye.
Abraham Lincoln|United States|U.S. president during the Civil War; issued the Emancipation Proclamation.
Nelson Mandela|South Africa|Anti-apartheid leader and South Africa’s first Black president.
Winston Churchill|United Kingdom|British prime minister during most of World War II.
George Washington|United States|First U.S. president and commander in the American Revolution.
Thomas Jefferson|United States|U.S. president and principal author of the Declaration of Independence; enslaved people.
Theodore Roosevelt|United States|U.S. president associated with Progressive Era reforms.
Harry S. Truman|United States|U.S. president at the end of World War II and in the early Cold War.
Dwight D. Eisenhower|United States|Allied commander in World War II and later U.S. president.
John F. Kennedy|United States|U.S. president during the Cuban Missile Crisis.
Lyndon B. Johnson|United States|U.S. president associated with the Great Society and escalation in Vietnam.
Richard Nixon|United States|U.S. president who resigned during the Watergate scandal.
Jimmy Carter|United States|U.S. president and mediator of the Camp David Accords.
Ronald Reagan|United States|U.S. president associated with conservative economic reforms.
Bill Clinton|United States|U.S. president during the 1990s.
Barack Obama|United States|First African American U.S. president.
Donald Trump|United States|U.S. political figure and president elected in 2016 and 2024.
Joe Biden|United States|U.S. president from 2021 to 2025.
Angela Merkel|Germany|German chancellor from 2005 to 2021.
Otto von Bismarck|Germany|Prussian statesman central to German unification.
Konrad Adenauer|Germany|First chancellor of West Germany.
Willy Brandt|Germany|West German chancellor associated with Ostpolitik.
Charles de Gaulle|France|Free French leader and founding president of the Fifth Republic.
François Mitterrand|France|French president from 1981 to 1995.
Napoleon Bonaparte|France|French emperor associated with continental conquest and legal reforms.
Maximilien Robespierre|France|French revolutionary leader associated with the Reign of Terror.
Georges Danton|France|Prominent leader in the French Revolution.
Margaret Thatcher|United Kingdom|British prime minister associated with privatization and market reforms.
Clement Attlee|United Kingdom|British prime minister whose government established the NHS.
Tony Blair|United Kingdom|British prime minister associated with New Labour.
Elizabeth I|England|Tudor monarch during England’s late sixteenth century.
Oliver Cromwell|England|Parliamentary military leader and Lord Protector.
Vladimir Lenin|Russia|Bolshevik leader and founder of the Soviet state.
Joseph Stalin|Soviet Union|Soviet dictator responsible for mass repression, purges, and forced deportations.
Nikita Khrushchev|Soviet Union|Soviet leader associated with de-Stalinization.
Leonid Brezhnev|Soviet Union|Soviet leader from 1964 to 1982.
Mikhail Gorbachev|Soviet Union|Soviet leader associated with glasnost and perestroika.
Boris Yeltsin|Russia|First president of the Russian Federation.
Vladimir Putin|Russia|Russian political leader whose rule has involved repression and wars abroad.
Peter the Great|Russia|Tsar and emperor who expanded and reformed the Russian state.
Catherine the Great|Russia|Russian empress associated with imperial expansion.
Mao Zedong|China|Founding leader of the People’s Republic; his campaigns caused mass death and persecution.
Deng Xiaoping|China|Chinese leader associated with market-oriented economic reforms.
Sun Yat-sen|China|Republican revolutionary and theorist of the Three Principles of the People.
Chiang Kai-shek|China / Taiwan|Nationalist leader of the Republic of China.
Zhou Enlai|China|First premier of the People’s Republic of China.
Xi Jinping|China|Chinese Communist Party leader who rose to the top party post in 2012.
Jawaharlal Nehru|India|First prime minister of independent India.
Indira Gandhi|India|Indian prime minister associated with centralization and the Emergency.
B. R. Ambedkar|India|Anti-caste thinker and chair of India’s constitutional drafting committee.
Muhammad Ali Jinnah|Pakistan|Founding leader of Pakistan.
Benazir Bhutto|Pakistan|First woman to lead a democratic government in a Muslim-majority country.
Sheikh Mujibur Rahman|Bangladesh|Central leader in Bangladesh’s independence.
Lee Kuan Yew|Singapore|Singapore’s first prime minister.
Sukarno|Indonesia|Indonesia’s first president and an independence leader.
Suharto|Indonesia|Indonesian authoritarian ruler whose rise involved mass killings.
Ho Chi Minh|Vietnam|Vietnamese communist and independence leader.
Võ Nguyên Giáp|Vietnam|Vietnamese military and political leader.
Fidel Castro|Cuba|Cuban revolutionary and long-serving authoritarian leader.
Raúl Castro|Cuba|Cuban revolutionary and successor to Fidel Castro.
Salvador Allende|Chile|Socialist president of Chile overthrown in the 1973 coup.
Augusto Pinochet|Chile|Military dictator responsible for widespread torture and political killings.
Juan Perón|Argentina|Argentine president associated with Peronism.
Eva Perón|Argentina|Political figure associated with labor and women’s suffrage.
Simón Bolívar|South America|Leader in several South American independence movements.
José de San Martín|South America|Military leader in South American independence struggles.
Getúlio Vargas|Brazil|Brazilian leader associated with labor reforms and authoritarian rule.
Luiz Inácio Lula da Silva|Brazil|Brazilian labor leader and president.
Hugo Chávez|Venezuela|Venezuelan president associated with the Bolivarian movement.
Lázaro Cárdenas|Mexico|Mexican president associated with land reform and oil nationalization.
Benito Juárez|Mexico|Mexican president and Liberal reform leader.
Emiliano Zapata|Mexico|Agrarian revolutionary in the Mexican Revolution.
Gamal Abdel Nasser|Egypt|Egyptian president associated with Arab nationalism.
Anwar Sadat|Egypt|Egyptian president who signed a peace treaty with Israel.
David Ben-Gurion|Israel|Israel’s first prime minister.
Golda Meir|Israel|Israeli prime minister during the 1973 war.
Yitzhak Rabin|Israel|Israeli prime minister and participant in the Oslo peace process.
Yasser Arafat|Palestine|Palestinian nationalist leader and chairman of the PLO.
Ruhollah Khomeini|Iran|Leader of the 1979 Iranian Revolution and first supreme leader.
Mohammad Mosaddegh|Iran|Iranian prime minister associated with oil nationalization.
Saddam Hussein|Iraq|Iraqi dictator responsible for mass atrocities including the Anfal campaign.
Hafez al-Assad|Syria|Syrian authoritarian ruler whose government carried out the Hama massacre.
Muammar Gaddafi|Libya|Libyan authoritarian ruler from 1969 to 2011.
Habib Bourguiba|Tunisia|Tunisia’s first president following independence.
Ahmed Ben Bella|Algeria|Algerian independence leader and first president.
Kwame Nkrumah|Ghana|Ghana’s first prime minister and president; advocate of Pan-Africanism.
Julius Nyerere|Tanzania|Tanzanian president and advocate of ujamaa socialism.
Thomas Sankara|Burkina Faso|Revolutionary president associated with anti-imperialism and social reforms.
Patrice Lumumba|DR Congo|First prime minister of independent Congo.
Jomo Kenyatta|Kenya|Kenya’s first prime minister and president.
Haile Selassie|Ethiopia|Ethiopian emperor deposed in 1974.
Ellen Johnson Sirleaf|Liberia|First woman elected head of state in Africa.
Josip Broz Tito|Yugoslavia|Yugoslav communist leader and Non-Aligned Movement co-founder.
Václav Havel|Czechoslovakia / Czechia|Dissident playwright who became president.
Lech Wałęsa|Poland|Solidarity trade union leader and later Polish president.
Francisco Franco|Spain|Spanish dictator following the Civil War.
Benito Mussolini|Italy|Fascist dictator responsible for repression, imperial aggression, and racial persecution.
Adolf Hitler|Germany|Nazi dictator responsible for the Holocaust and aggressive war in Europe.
António de Oliveira Salazar|Portugal|Authoritarian leader of Portugal’s Estado Novo.
Olof Palme|Sweden|Swedish social democratic prime minister.
Urho Kekkonen|Finland|Finnish president during much of the Cold War.
Sanna Marin|Finland|Finnish prime minister from 2019 to 2023.
Jacinda Ardern|New Zealand|New Zealand prime minister from 2017 to 2023.
Gough Whitlam|Australia|Australian prime minister associated with social and institutional reforms.
Pierre Trudeau|Canada|Canadian prime minister associated with constitutional patriation.
Lester B. Pearson|Canada|Canadian prime minister and diplomat.
Kim Il-sung|North Korea|Founding ruler of North Korea’s authoritarian state.
Kim Jong-il|North Korea|North Korean ruler from 1994 to 2011.
Park Chung-hee|South Korea|Authoritarian South Korean president during rapid industrialization.
Kim Dae-jung|South Korea|Democracy activist, South Korean president, and peace advocate.
Shinzo Abe|Japan|Japan’s longest-serving prime minister.
Yoshida Shigeru|Japan|Postwar Japanese prime minister.
Pol Pot|Cambodia|Khmer Rouge leader whose regime committed genocide and mass atrocities.`,
Thinkers: `Georges Sorel|France|Political theorist associated with revolutionary syndicalism and political myth.
Ugo Spirito|Italy|Idealist philosopher and theorist of corporatism.
Karl Marx|Germany|Critic of capitalism and co-author of The Communist Manifesto.
Friedrich Engels|Germany|Socialist theorist and collaborator of Karl Marx.
Adam Smith|Scotland|Moral philosopher and author of The Wealth of Nations.
John Locke|England|Political philosopher associated with natural rights and government by consent.
Thomas Hobbes|England|Author of Leviathan and theorist of sovereignty.
Jean-Jacques Rousseau|Geneva / France|Political philosopher and author of The Social Contract.
Niccolò Machiavelli|Italy|Florentine political thinker and author of The Prince.
Plato|Ancient Greece|Philosopher and author of the Republic.
Aristotle|Ancient Greece|Philosopher whose Politics examines constitutions and civic life.
Confucius|China|Thinker whose teachings shaped ethics and political order in East Asia.
Mencius|China|Confucian philosopher associated with benevolent government.
Han Fei|China|Political philosopher associated with Legalism.
Kautilya|India|Traditionally credited with the Arthashastra, a treatise on statecraft.
Ibn Khaldun|North Africa|Historian and theorist of social cohesion and political dynasties.
Al-Farabi|Central Asia|Philosopher who wrote about the virtuous city.
Thomas Aquinas|Italy|Scholastic philosopher whose work includes natural law and political authority.
Marsilius of Padua|Italy|Medieval thinker and author of Defender of the Peace.
Jean Bodin|France|Political theorist associated with the concept of sovereignty.
Montesquieu|France|Enlightenment thinker associated with separation of powers.
Voltaire|France|Enlightenment writer associated with religious toleration.
Immanuel Kant|Prussia|Philosopher whose political writings include Perpetual Peace.
G. W. F. Hegel|Germany|Idealist philosopher and author of Philosophy of Right.
Edmund Burke|Ireland / Britain|Statesman and critic of the French Revolution.
Thomas Paine|Britain / United States|Radical writer and author of Common Sense and Rights of Man.
Mary Wollstonecraft|England|Political writer and author of A Vindication of the Rights of Woman.
John Stuart Mill|United Kingdom|Liberal philosopher and author of On Liberty.
Harriet Taylor Mill|United Kingdom|Philosopher and advocate of women’s equality.
Alexis de Tocqueville|France|Political thinker and author of Democracy in America.
Pierre-Joseph Proudhon|France|Socialist thinker associated with mutualism.
Mikhail Bakunin|Russia|Anarchist theorist and revolutionary.
Peter Kropotkin|Russia|Anarchist thinker and author of Mutual Aid.
Emma Goldman|Lithuania / United States|Anarchist writer and political activist.
Max Stirner|Germany|Philosopher associated with egoist anarchism.
Errico Malatesta|Italy|Anarchist thinker and organizer.
Rosa Luxemburg|Poland / Germany|Marxist theorist and revolutionary socialist.
Antonio Gramsci|Italy|Marxist thinker associated with cultural hegemony.
Leon Trotsky|Russia / Soviet Union|Revolutionary and Marxist theorist of permanent revolution.
Eduard Bernstein|Germany|Social democratic theorist associated with revisionism.
Karl Kautsky|Austria / Germany|Marxist theorist of the Second International.
Georgi Plekhanov|Russia|Early Russian Marxist philosopher.
Nikolai Bukharin|Soviet Union|Bolshevik political figure and Marxist theorist.
Georg Lukács|Hungary|Marxist philosopher associated with reification and class consciousness.
Louis Althusser|France|Marxist philosopher associated with structural Marxism.
Herbert Marcuse|Germany / United States|Frankfurt School thinker and author of One-Dimensional Man.
Theodor W. Adorno|Germany|Critical theorist associated with the Frankfurt School.
Max Horkheimer|Germany|Philosopher associated with critical theory.
Walter Benjamin|Germany|Cultural critic and philosopher of history.
Jürgen Habermas|Germany|Philosopher associated with the public sphere and deliberative democracy.
Hannah Arendt|Germany / United States|Political theorist and author of The Origins of Totalitarianism.
Simone de Beauvoir|France|Existentialist philosopher and feminist author of The Second Sex.
Simone Weil|France|Philosopher whose work addressed labor, oppression, and obligation.
Michel Foucault|France|Philosopher who studied power, discipline, and institutions.
Frantz Fanon|Martinique / Algeria|Anti-colonial thinker and author of The Wretched of the Earth.
Aimé Césaire|Martinique|Writer and political figure associated with Négritude and anti-colonialism.
Edward Said|Palestine / United States|Literary critic and author of Orientalism.
Noam Chomsky|United States|Linguist and political writer associated with libertarian socialism.
Murray Bookchin|United States|Social ecologist and theorist of libertarian municipalism.
John Rawls|United States|Political philosopher and author of A Theory of Justice.
Robert Nozick|United States|Libertarian philosopher and author of Anarchy, State, and Utopia.
Isaiah Berlin|Latvia / United Kingdom|Political philosopher associated with value pluralism and concepts of liberty.
Karl Popper|Austria / United Kingdom|Philosopher and author of The Open Society and Its Enemies.
Friedrich Hayek|Austria / United Kingdom|Economist associated with classical liberalism and dispersed knowledge.
Ludwig von Mises|Austria / United States|Austrian School economist and theorist of economic calculation.
Milton Friedman|United States|Economist associated with monetarism and market liberalism.
John Maynard Keynes|United Kingdom|Economist whose work shaped demand-management policy.
Joseph Schumpeter|Austria / United States|Economist associated with creative destruction.
Karl Polanyi|Austria / Hungary|Economic historian and author of The Great Transformation.
Henry George|United States|Political economist associated with land value taxation.
Thorstein Veblen|United States|Economist associated with conspicuous consumption.
Amartya Sen|India|Economist and philosopher associated with the capability approach.
Elinor Ostrom|United States|Political economist who studied governance of common resources.
W. E. B. Du Bois|United States|Sociologist and political thinker associated with civil rights and Pan-Africanism.
bell hooks|United States|Feminist theorist who examined race, gender, and class.
Angela Davis|United States|Political theorist and activist associated with prison abolition.
Judith Butler|United States|Philosopher associated with gender performativity and political ethics.
Nancy Fraser|United States|Critical theorist of justice, recognition, and redistribution.
Chantal Mouffe|Belgium|Political theorist associated with agonistic democracy.
Ernesto Laclau|Argentina|Political theorist associated with discourse theory and populism.
Cornelius Castoriadis|Greece / France|Philosopher associated with autonomy and the social imaginary.
Guy Debord|France|Situationist theorist and author of The Society of the Spectacle.
Jacques Rancière|France|Philosopher whose work explores equality and political disagreement.
Carl Schmitt|Germany|Jurist and theorist of sovereignty who supported the Nazi regime.
Giovanni Gentile|Italy|Idealist philosopher closely associated with Italian fascism.
Julius Evola|Italy|Far-right traditionalist writer associated with anti-egalitarian thought.
Giovanni Papini|Italy|Writer whose political and religious views changed across his career.
Vilfredo Pareto|Italy|Sociologist and economist associated with elite theory.
Gaetano Mosca|Italy|Political theorist associated with ruling elites.
Robert Michels|Germany / Italy|Sociologist associated with the iron law of oligarchy.
Max Weber|Germany|Sociologist who analyzed authority, bureaucracy, and the state.
Émile Durkheim|France|Sociologist whose work examined solidarity and social institutions.
Ferdinand Tönnies|Germany|Sociologist associated with community and society.
Oswald Spengler|Germany|Writer and historical theorist, author of The Decline of the West.
José Ortega y Gasset|Spain|Philosopher and author of The Revolt of the Masses.
Friedrich Nietzsche|Germany|Philosopher whose work critiqued morality, culture, and modernity.
Hannah More|United Kingdom|Writer and social reformer associated with abolitionism.
Mary Astell|England|Early feminist writer and political thinker.
Olympe de Gouges|France|Revolutionary writer and author of the Declaration of the Rights of Woman.
Alexandra Kollontai|Russia / Soviet Union|Socialist feminist, revolutionary, and diplomat.
Clara Zetkin|Germany|Socialist organizer and advocate for women’s rights.
R. H. Tawney|United Kingdom|Economic historian associated with ethical socialism.
Sidney Webb|United Kingdom|Fabian socialist and institutional reformer.
Beatrice Webb|United Kingdom|Social researcher and Fabian socialist.
Bertrand Russell|United Kingdom|Philosopher and campaigner for peace and nuclear disarmament.
Albert Camus|France / Algeria|Writer whose political thought addressed rebellion and limits on violence.
Jean-Paul Sartre|France|Existentialist philosopher and politically engaged writer.
Ali Shariati|Iran|Sociologist and thinker associated with revolutionary interpretations of Islam.
Sayyid Qutb|Egypt|Islamist writer whose work influenced radical Islamist movements.
Abul A'la Maududi|British India / Pakistan|Islamist thinker and founder of Jamaat-e-Islami.
Hassan al-Banna|Egypt|Founder of the Muslim Brotherhood.
Ziya Gökalp|Ottoman Empire / Türkiye|Sociologist and theorist of Turkish nationalism.
Yusuf Akçura|Russia / Türkiye|Political thinker associated with Turkish nationalism.
Nurettin Topçu|Türkiye|Philosopher associated with ethics, religion, and Anatolian thought.
İsmail Gaspıralı|Crimea|Reformer associated with Jadidism and Turkic cultural renewal.
José Carlos Mariátegui|Peru|Marxist thinker whose work examined Peruvian society.
José Martí|Cuba|Writer, political thinker, and Cuban independence organizer.
Julián Marías|Spain|Philosopher associated with the thought of Ortega y Gasset.`,
Movements: `Mahatma Gandhi|India|Anti-colonial leader associated with nonviolent civil resistance.
Martin Luther King Jr.|United States|Civil rights leader associated with nonviolent protest.
Malcolm X|United States|Black political activist whose thought evolved toward international human rights.
Rosa Parks|United States|Civil rights activist central to the Montgomery bus boycott.
Frederick Douglass|United States|Abolitionist writer, orator, and political campaigner.
Harriet Tubman|United States|Abolitionist who helped enslaved people escape through the Underground Railroad.
Sojourner Truth|United States|Abolitionist and women’s rights advocate.
Susan B. Anthony|United States|Campaigner for women’s suffrage.
Emmeline Pankhurst|United Kingdom|Leader of the British suffragette movement.
Ida B. Wells|United States|Journalist and campaigner against lynching.
César Chávez|United States|Labor organizer and farm workers’ rights campaigner.
Dolores Huerta|United States|Labor organizer and co-founder of the United Farm Workers.
Eugene V. Debs|United States|Labor organizer and socialist presidential candidate.
Mother Jones|Ireland / United States|Labor organizer and advocate for workers.
James Connolly|Ireland|Socialist organizer and participant in the Easter Rising.
Michael Collins|Ireland|Irish revolutionary and political leader.
Éamon de Valera|Ireland|Irish independence leader and later head of government and president.
Subhas Chandra Bose|India|Indian independence leader who sought Axis support during World War II.
Bhagat Singh|India|Anti-colonial revolutionary and socialist.
Toussaint Louverture|Haiti|Leader in the Haitian Revolution against slavery.
Jean-Jacques Dessalines|Haiti|Haitian independence leader and first ruler of independent Haiti.
Amílcar Cabral|Guinea-Bissau / Cape Verde|Anti-colonial organizer and political theorist.
Samora Machel|Mozambique|Independence leader and Mozambique’s first president.
Agostinho Neto|Angola|Independence leader and Angola’s first president.
Steve Biko|South Africa|Anti-apartheid activist and Black Consciousness thinker.
Desmond Tutu|South Africa|Anti-apartheid campaigner and Anglican archbishop.
Wangari Maathai|Kenya|Environmental and political activist who founded the Green Belt Movement.
Albert Luthuli|South Africa|Anti-apartheid leader and president of the African National Congress.
Marcus Garvey|Jamaica|Black nationalist organizer and advocate of Pan-Africanism.
Sylvia Pankhurst|United Kingdom|Suffragist, socialist, and anti-fascist campaigner.
Claudia Jones|Trinidad / United Kingdom|Communist organizer and anti-racist activist.
Louise Michel|France|Paris Commune participant and anarchist activist.
Nestor Makhno|Ukraine|Anarchist revolutionary and military organizer.
Buenaventura Durruti|Spain|Anarchist organizer and militia leader in the Spanish Civil War.
Dolores Ibárruri|Spain|Communist leader associated with opposition to Franco.
Andrei Sakharov|Soviet Union|Physicist, dissident, and human rights campaigner.
Liu Xiaobo|China|Writer, dissident, and advocate of democratic reform.
Malala Yousafzai|Pakistan|Education activist and advocate for girls’ rights.
Greta Thunberg|Sweden|Climate activist associated with school strikes.
Emmeline Pethick-Lawrence|United Kingdom|Women’s suffrage campaigner and organizer.`,
Conflict: `Abdullah Öcalan|Türkiye / Kurdish politics|Also known as Apo; a founder of the PKK, associated with armed insurgency and political violence.
Osama bin Laden|Saudi Arabia / Afghanistan|Founder of al-Qaeda, the terrorist organization responsible for the September 11 attacks.
Ayman al-Zawahiri|Egypt|Al-Qaeda leader associated with terrorist attacks against civilians.
Abu Bakr al-Baghdadi|Iraq|Leader of ISIS, responsible for mass atrocities, enslavement, and terrorism.
Abu Musab al-Zarqawi|Jordan / Iraq|Militant leader associated with al-Qaeda in Iraq and sectarian terrorist attacks.
Shoko Asahara|Japan|Aum Shinrikyo cult leader responsible for the 1995 Tokyo subway sarin attack.
Ulrike Meinhof|Germany|Co-founder of the Red Army Faction, involved in political terrorism.
Andreas Baader|Germany|Co-founder of the Red Army Faction, involved in political terrorism.
Gudrun Ensslin|Germany|Red Army Faction co-founder involved in political terrorism.
Abimael Guzmán|Peru|Shining Path leader whose insurgency involved mass violence against civilians.
Carlos the Jackal|Venezuela / international|Ilich Ramírez Sánchez; militant convicted for terrorist murders.
Timothy McVeigh|United States|Domestic terrorist responsible for the 1995 Oklahoma City bombing.
Anders Behring Breivik|Norway|Far-right terrorist responsible for the 2011 attacks in Norway.
Gavrilo Princip|Bosnia|Bosnian Serb nationalist who assassinated Archduke Franz Ferdinand.
Che Guevara|Argentina / Cuba|Marxist revolutionary involved in guerrilla warfare and revolutionary executions.
George Habash|Palestine|Founder of the PFLP, associated with militant attacks and aircraft hijackings.
Leila Khaled|Palestine|PFLP member involved in aircraft hijackings.
Menachem Begin|Poland / Israel|Irgun leader before becoming Israeli prime minister.
Michael Wittmann|Germany|Waffen-SS tank commander serving Nazi Germany.
Heinrich Himmler|Germany|SS leader and key organizer of the Holocaust.
Reinhard Heydrich|Germany|Senior Nazi official and key organizer of the Holocaust.
Oswald Mosley|United Kingdom|Founder of the British Union of Fascists.
Ante Pavelić|Croatia|Ustaše leader whose regime committed genocide and mass atrocities.
Ion Antonescu|Romania|Wartime dictator whose regime participated in the Holocaust.
Slobodan Milošević|Serbia / Yugoslavia|Authoritarian leader tried for war crimes; died before a verdict.
Radovan Karadžić|Bosnia|Bosnian Serb leader convicted of genocide and war crimes.
Ratko Mladić|Bosnia|Bosnian Serb military commander convicted of genocide and war crimes.
Charles Taylor|Liberia|Former Liberian president convicted of aiding war crimes in Sierra Leone.
Joseph Kony|Uganda|Lord’s Resistance Army leader associated with child abduction and mass atrocities.
Idi Amin|Uganda|Ugandan dictator whose rule involved mass killings and persecution.`
};
rawCards.Artists = `Leonardo da Vinci|Italy|Renaissance painter and polymath; creator of the Mona Lisa and The Last Supper.
Michelangelo|Italy|Renaissance sculptor, painter, and architect; creator of David and the Sistine Chapel ceiling.
Raphael|Italy|Renaissance painter known for The School of Athens.
Sandro Botticelli|Italy|Florentine painter known for The Birth of Venus.
Caravaggio|Italy|Baroque painter known for dramatic light and naturalistic figures.
Rembrandt|Netherlands|Painter and printmaker known for portraits and The Night Watch.
Johannes Vermeer|Netherlands|Painter known for intimate domestic scenes and Girl with a Pearl Earring.
Francisco Goya|Spain|Painter and printmaker whose work examined war, power, and human cruelty.
Eugène Delacroix|France|Romantic painter known for Liberty Leading the People.
Gustave Courbet|France|Realist painter who participated in the Paris Commune.
Édouard Manet|France|Painter whose work helped bridge Realism and modern art.
Claude Monet|France|Painter central to the Impressionist movement.
Edgar Degas|France|Painter and sculptor known for studies of movement and dancers.
Pierre-Auguste Renoir|France|Impressionist painter known for scenes of everyday life.
Paul Cézanne|France|Post-Impressionist painter whose work influenced modern art.
Vincent van Gogh|Netherlands|Post-Impressionist painter known for expressive color and brushwork.
Paul Gauguin|France|Post-Impressionist painter whose work and colonial relationships remain debated.
Henri de Toulouse-Lautrec|France|Painter and printmaker known for depictions of Parisian nightlife.
Gustav Klimt|Austria|Symbolist painter associated with the Vienna Secession.
Egon Schiele|Austria|Expressionist painter known for portraits and figure studies.
Edvard Munch|Norway|Painter and printmaker known for The Scream.
Wassily Kandinsky|Russia / Germany|Painter and art theorist associated with abstraction.
Pablo Picasso|Spain / France|Painter and sculptor, co-founder of Cubism and creator of Guernica.
Georges Braque|France|Painter and sculptor who co-developed Cubism.
Marcel Duchamp|France / United States|Artist whose readymades challenged conventional definitions of art.
Salvador Dalí|Spain|Surrealist painter known for dreamlike imagery.
René Magritte|Belgium|Surrealist painter who explored images, objects, and perception.
Joan Miró|Spain|Painter, sculptor, and ceramicist known for abstract and surrealist forms.
Henri Matisse|France|Painter associated with Fauvism, expressive color, and paper cut-outs.
Käthe Kollwitz|Germany|Printmaker and sculptor whose art addressed poverty, grief, and war.
Frida Kahlo|Mexico|Painter known for self-portraits exploring identity, pain, and Mexican culture.
Diego Rivera|Mexico|Muralist whose public art addressed labor, revolution, and Mexican history.
David Alfaro Siqueiros|Mexico|Muralist and communist political activist.
José Clemente Orozco|Mexico|Muralist whose work explored revolution and human suffering.
Andy Warhol|United States|Pop artist who explored celebrity, consumer culture, and mass reproduction.
Jean-Michel Basquiat|United States|Artist whose work addressed race, power, and cultural identity.
Ai Weiwei|China|Contemporary artist and activist whose work addresses rights and state power.
Georgia O'Keeffe|United States|Painter known for large-scale flowers, landscapes, and modernist forms.
Albrecht Dürer|Germany|Renaissance painter, engraver, and printmaker.
Auguste Rodin|France|Sculptor known for The Thinker and The Gates of Hell.
Ludwig van Beethoven|Germany / Austria|Composer whose work shaped the transition from Classical to Romantic music.
Wolfgang Amadeus Mozart|Austria|Classical composer of operas, symphonies, and chamber music.
Frédéric Chopin|Poland / France|Romantic composer and pianist known for solo piano works.
Dmitri Shostakovich|Soviet Union|Composer whose career unfolded under Soviet cultural policy and censorship.
Bertolt Brecht|Germany|Playwright and poet associated with epic theatre and Marxist thought.
George Orwell|United Kingdom|Writer and democratic socialist; author of Nineteen Eighty-Four and Animal Farm.
Virginia Woolf|United Kingdom|Modernist novelist and essayist who wrote about art, gender, and society.
Franz Kafka|Austria-Hungary|Writer whose fiction explored authority, alienation, and bureaucracy.
Leo Tolstoy|Russia|Novelist and religious thinker associated with nonviolence and Christian anarchism.
Fyodor Dostoevsky|Russia|Novelist whose work explored morality, faith, and political radicalism.`;
const rarities = ['Common','Uncommon','Rare','Epic','Legendary','Archive Foil'];
const CARDS = Object.entries(rawCards).flatMap(([category, rows]) => rows.split('\n').map((line, i) => {const [name,region,bio]=line.split('|');return {name,region,bio,category,rarity:['Common','Uncommon','Rare','Archive foil'][i%10===0?3:i%5===0?2:i%3===0?1:0]};})).map((c,i)=>({...c,id:'pa-'+String(i+1).padStart(3,'0'),number:i+1}));
const CATEGORY_LABELS = {Leaders:'Political leader',Thinkers:'Political thinker',Movements:'Activist / organizer',Conflict:'Conflict figure',Artists:'Artist / writer'};
const ROLE_OVERRIDES = {'Adolf Hitler':'Nazi dictator','Pol Pot':'Khmer Rouge leader','Joseph Stalin':'Soviet dictator','Mao Zedong':'Communist leader','Benito Mussolini':'Fascist dictator','Osama bin Laden':'Al-Qaeda founder','Abu Bakr al-Baghdadi':'ISIS leader','Abdullah Öcalan':'PKK founder / theorist','B. R. Ambedkar':'Jurist / social reformer','Eva Perón':'Political activist','Võ Nguyên Giáp':'Military / political leader','Michael Wittmann':'Waffen-SS commander','Heinrich Himmler':'SS leader','Reinhard Heydrich':'Nazi official','Ratko Mladić':'Military commander','Gavrilo Princip':'Nationalist militant','George Orwell':'Writer / essayist','Bertolt Brecht':'Playwright / poet','Dmitri Shostakovich':'Composer','Frédéric Chopin':'Composer / pianist','Ludwig van Beethoven':'Composer','Wolfgang Amadeus Mozart':'Composer','Leo Tolstoy':'Writer / thinker','Fyodor Dostoevsky':'Novelist','Virginia Woolf':'Writer / essayist','Franz Kafka':'Writer','Auguste Rodin':'Sculptor'};
for(const card of CARDS) card.role=ROLE_OVERRIDES[card.name]||CATEGORY_LABELS[card.category];
