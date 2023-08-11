let villains = {
    'Bane': 
        {'name': 'Bane', 
        'first_appearance': 'Batman: Vengeance of Bane #(January )', 
        'bio': "The international masked criminal known as Bane has immense strength derived from a super-steroid called Venom. Bane's raw power, coupled with his genius level intellect, makes him a considerable threat to Batman, having once succeeded in breaking Batman's back."}, 
    'Black Mask': 
        {'name': 'Black Mask', 
        'first_appearance': 'Batman #(August )', 
        'bio': 'Roman Sionis is a corrupt businessman and crime lord who has a fixation with masks. He wears a black skull-like mask that gives him limited mind control abilities.'}, 
    'Catwoman': 
    {'name': 'Catwoman', 
    'first_appearance': 'Batman #(Spring )', 
    'bio': 'Selina Kyle is an accomplished jewel thief. Although traditionally considered a villain, she is often portrayed as an antihero and is occasionally romantically involved with Batman.'}, 
'Clayface': 
    {'name': 'Clayface', 
    'first_appearance': 'Detective Comics #(June )', 
    'bio': 'Actor Basil Karlo went mad when he learned that there would be a remake of one of his films with another actor in the lead role. Adopting the alias of the film\'s villain, "Clayface", he attacked several of the remake\'s cast and crew at the points in filming when they were supposed to die before being stopped by Batman and Robin. Later, he gained shapeshifting powers and became the Ultimate Clayface.'}, 
'Deadshot': 
    {'name': 'Deadshot', 
    'first_appearance': 'Batman #(June )', 
    'bio': 'Floyd Lawton is an excellent sniper assassin who, when wielding a gun or projectile, never misses a shot.'}, 
'Firefly': 
    {'name': 'Firefly', 
    'first_appearance': 'Detective Comics #(June )', 
    'bio': 'Garfield Lynns is an orphan who became a pyromaniac, having developed a fireproof suit with a flamethrower to further pursue his "hobby". He invents numerous weapons that involve light to commit crimes with.'}, 
'Harley Quinn': 
    {'name': 'Harley Quinn', 
    'first_appearance': 'Batman: The Animated Series episode "Joker\'s Favor"(September )', 
    'bio': "Dr. Harleen Quinzel was the Joker's psychiatrist at Arkham Asylum until she fell in love with him and subsequently reinvented herself as his madcap sidekick, Harley Quinn. She is often mistreated by the Joker, but that rarely changes how she feels about him."}, 
'Hugo Strange': 
    {'name': 'Hugo Strange', 
    'first_appearance': 'Detective Comics #(February )', 
    'bio': 'Hugo Strange is an insane psychologist who uses his mastery of chemistry to create a serum that turns his victims into mindless monsters who obey his every command. He has succeeded in deducing that Batman is Bruce Wayne.'}, 
'Hush': 
    {'name': 'Hush', 
    'first_appearance': 'Batman #(January )', 
    'bio': 'Dr. Thomas Elliot is a brilliant surgeon who targets both Bruce Wayne, his childhood friend, and Batman.'}, 
'JokerNote ': 
    {'name': 'JokerNote ', 
    'first_appearance': 'Batman #(spring )', 
    'bio': "The Joker (real name unknown) is a homicidal maniac with a clown-like appearance, bent on creating havoc in Gotham City and fighting a never-ending battle against Batman. His arsenal of weapons includes razor-sharp edged playing cards, acid-squirting trick flowers, joy buzzers with a lethal electrical charge and a fatal toxin called Joker venom. He is Batman's archenemy, as well as the most famous and recurring Batman villain."}, 
'Killer Croc': 
    {'name': 'Killer Croc', 
    'first_appearance': 'Batman #(March )', 
    'bio': 'Waylon Jones has a medical condition that warped his body into a massive crocodile-like form. As Killer Croc descended into madness, he sharpened his teeth to razor points and began murdering innocent victims. He possesses super-strength and is immune to toxins.'}, 
'Killer Moth': 
    {'name': 'Killer Moth', 
    'first_appearance': 'Batman #(February )', 
    'bio': 'Drury Walker, a.k.a. Cameron Van Cleer, is a moth-themed criminal, known for being the first villain to have been defeated by Batgirl.'}, 
'Mad Hatter': 
    {'name': 'Mad Hatter', 
    'first_appearance': 'Batman #(October )', 
    'bio': "Jervis Tetch is inspired by Alice's Adventures in Wonderland to commit crimes. He uses his mind control technology to bend people to his will."}, 
'Man-Bat': 
    {'name': 'Man-Bat', 
    'first_appearance': 'Detective Comics #(June )', 
    'bio': 'Dr. Kirk Langstrom invented a serum to give him echolocation in an attempt to cure his deafness. The serum had an unforeseen side effect, transforming him into the monstrous human-bat hybrid creature known as the Man-Bat.'}, 
'Mr. Freeze(originally known as Mr. Zero)': 
    {'name': 'Mr. Freeze(originally known as Mr. Zero)', 
    'first_appearance': 'Batman #(February )', 
    'bio': 'Dr. Victor Fries is a scientist who accidentally spilled cryogenic chemicals on himself while inventing a freeze-gun. Now requiring subzero temperatures to survive, he uses freeze-inducing weaponry and must wear a fully contained, refrigerated ice-suit. Fries was later reinvented as a tragic figure and occasional antihero, specifically a brilliant cryogenicist whose beloved wife Nora fell terminally ill. He obsessively searched for a way to cure her, until an industrial accident caused by a greedy business executive turned him into a mutant.'}, 
'Penguin': 
    {'name': 'Penguin', 
    'first_appearance': 'Detective Comics #(December )', 
    'bio': "Oswald Chesterfield Cobblepot is a devious, short-statured, penguin-themed crime boss who is seldom seen without at least one of his trick umbrellas. The Penguin uses his nightclub, the Iceberg Lounge, as a front for his criminal activities. He is one of Batman's few adversaries who is sane and in full control of his actions. Riddler is one of his partnerships."}, 
'Poison Ivy': 
    {'name': 'Poison Ivy', 
    'first_appearance': 'Batman #(June )', 
    'bio': 'Pamela Lillian Isley, a former student of advanced botanical biochemistry, employs plants of all varieties and their derivatives in her crimes. She has the ability to control all plant life and can create new henchmen with her mutated seeds. She is immune to all plant-based poisons.'}, 
"Ra's al Ghul": 
    {'name': "Ra's al Ghul", 
    'first_appearance': 'Batman #(June )', 
    'bio': 'Ra\'s al Ghul ("the Demon\'s Head" in Arabic) is a centuries-old international radical environmentalist who believes that his actions help "bring balance" to the world. Ra\'s al Ghul is the founder of the League of Assassins and is fully aware of Batman\'s secret identity. Impressed by Batman\'s skills and intellect, he wants the Dark Knight to take his place as his heir.'}, 
'Riddler': 
    {'name': 'Riddler', 
    'first_appearance': 'Detective Comics #(October )', 
    'bio': 'Edward Nashton, a.k.a. Edward Nygma (or "E. Nygma"), is a criminal mastermind who has a compulsion to challenge Batman by leaving clues to his crimes in the form of riddles, puzzles, and word games. Nygma\'s intelligence rivals that of Batman. Nygma often carries a question mark-tipped cane around with him, as well as many other trick puzzle gimmicks. Penguin is one of his partnerships.'}, 
'Scarecrow': 
    {'name': 'Scarecrow', 
    'first_appearance': "World's Finest Comics #(September )", 
    'bio': 'Professor Jonathan Crane was an outcast in childhood due to constant bullying, until he grew up to face his fears as a psychologist and biochemist specializing in fear. Kicked out of a university for his unorthodox teaching methods, he now dresses symbolically as a scarecrow and employs a toxin that causes its victims to hallucinate into seeing what they fear the most.'}, 
'Solomon Grundy': 
    {'name': 'Solomon Grundy', 
    'first_appearance': 'All-American Comics #(October )', 
    'bio': 'Cyrus Gold was a Gotham City merchant who was murdered and thrown into Slaughter Swamp, where he was transformed into an undead, incredibly strong, zombie-like creature. He was initially an enemy of Green Lantern, but has also had numerous encounters with Batman.'}, 
'Two-Face': 
    {'name': 'Two-Face', 
    'first_appearance': 'Detective Comics #(August )', 
    'bio': 'Harvey Dent was a Gotham City district attorney until half of his face was disfigured by acid after being assaulted by mob boss Sal Maroni. Having developed dissociative identity disorder, Dent is obsessed with the number two and the concept of duality and must make most of his decisions with the flip of his signature two-headed coin. As Two-Face, Dent commits crimes that are themed around the number two and the concept of duality.'}, 
'Ventriloquist /Scarface': 
    {'name': 'Ventriloquist /Scarface', 
    'first_appearance': 'Detective Comics #(February )', 
    'bio': 'Arnold Wesker is a small, mild-mannered ventriloquist with dissociative identity disorder. He projects a criminal personality through his gangster-themed dummy, Scarface.'},
'Victor Zsasz': 
    {'name': 'Victor Zsasz', 
    'first_appearance': 'Batman: Shadow of the Bat #(June )', 
    'bio': 'Victor Zsasz, a.k.a. Mister Zsasz, is a serial killer whose modus operandi involves slitting the throats of his victims, then arranging the bodies in lifelike poses. He cuts a tally mark onto his own body for each of his victims.'}}
