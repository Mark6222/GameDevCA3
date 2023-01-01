var storyContent = ﻿{"inkVersion":20,"root":[["^Poni's Tale","\n",{"->":"Poni"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Poni":[["^LEVEL 2: THE CITY","\n","^Poni and Lucas spot a group of survivors gathered around a fire on the footpath.","\n","^Lucas: \"Look, people! Let’s go ask them for help!\"","\n","ev","str","^\"You sure?\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"start"},"\n",{"#f":5}]}],{"#f":1}],"start":[["^\"I don’t know Lucas… they could be dangerous… we shouldn’t just trust everyone we meet y’know?\"","\n","^Lucas smiles at Poni.","\n","^Lucas: Don’t worry, I can read their minds like I read yours. They’re good people, I can tell.","\n","ev","str","^\"Ok, I trust you. Let's go.\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"approach"},"\n",{"#f":5}]}],{"#f":1}],"approach":[["^Poni apprehensively approaches the group. They look up at her and Lucas as they approach.","\n","^\"Hi, uhm, would any of you be able to help me and my brother please? We’re looking for somewhere safe, or maybe a way out of the city…\"","\n","^Scared man: I-I  heard of a safe zone with a campsite where people are gathering, but I’m too afraid to go find it…","\n",["ev",{"^->":"approach.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^\"Any other ideas?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"approach.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^\"Do you have more information on that camp?\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"approach.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"ideas"},{"#f":5}],"c-1":["ev",{"^->":"approach.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],{"->":"skyscraper"},"\n",{"#f":5}]}],{"#f":1}],"ideas":[["^Hardy woman: Yeah, I heard tales of a shortcut that may lead straight outta the city – if you’ve got the balls to go find it","\n","ev","str","^\"Where is it?\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"sewers"},"\n",{"#f":5}]}],{"#f":1}],"sewers":[["^The woman looks Poni up and down, judging her.","\n","^Hardy woman: You look like you got the guts for it kid, so I’ll tell ya where it is. It’s only a rumour, but I heard deep down the sewers there’s a passage that spits you out way outside of the city borders. If there’s any hope of a quick way outta here, that’s it – but anyone who’s tried so far has floated right back out. Dead as a dodo.","\n",["ev",{"^->":"sewers.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^\"Do you have more information on that camp?\" ",{"->":"$r","var":true},null]}],"ev","str","^Leave","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["ev",{"^->":"sewers.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],{"->":"skyscraper"},"\n",{"#f":5}],"c-1":[{"->":"leave"},"\n",{"#f":5}]}],{"#f":1}],"skyscraper":[["^Scared Man: I heard it’s somewhere on the outskirts of the city… I thought about climbing a skyscraper to see if I could see it from the top but I’m scared of heights…","\n","ev","str","^\"Do you have more information on the sewer?\"","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Leave","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":"sewers"},"\n",{"#f":5}],"c-1":[{"->":"leave"},"\n",{"#f":5}]}],{"#f":1}],"leave":[["^Poni and Lucas venture through the city, reaching the bottom of the skyscraper, and the entrance to the sewers.","\n","^Lucas: So… did you decide which way we will go yet?","\n","^Poni:…","\n","ev","str","^Climb the skyscraper","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Descend into the sewers","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"skyscraperlevel"},"\n",{"#f":5}],"c-1":[{"->":"sewerlevel"},"\n",{"#f":5}]}],{"#f":1}],"skyscraperlevel":[["^LEVEL THREE: SKYSCRAPER","\n","^Both Poni and Lucas enter the skyscraper toghether","\n","^\"Oh no, the building's a wreck\"","\n","ev","str","^How are we going to get through this?!\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"WallCLimb"},"\n",{"#f":5}]}],{"#f":1}],"WallCLimb":[["^[How are we going to get through this?!\"","\n","^Lucas: Poni... what if you use your hair to grab onto the wals and jump accross","\n","ev","str","^\"I can try\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"MutantPlant"},"\n",{"#f":5}]}],{"#f":1}],"MutantPlant":[["^\"I can try\"","\n","^After Poni figures out she can use her hair to traverse the wrecked inside of the skyscraper she carrys lucas on her back until they both come across a mutated plant which trys to attack them","\n","^Lucas: PONI, move quick!","\n","ev","str","^\"I'm trying!\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"closeCall"},"\n",{"#f":5}]}],{"#f":1}],"closeCall":[["^\"I'm trying!\"","\n","^Poni sucessfuly escapes mutated plant , But lucas starts coughing","\n","ev","str","^\"Whats wrong Lucas?\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"lucasCough"},"\n",{"#f":5}]}],{"#f":1}],"lucasCough":[["^\"Whats wrong Lucas?\"","\n","^Lucas: I feel sick, i know what your thinking poni, im fine we should keep moving","\n","^Poni says with a worried look on her face","\n","ev","str","^\"Ok\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"DeadMan"},"\n",{"#f":5}]}],{"#f":1}],"DeadMan":[["^\"Ok...\"","\n","^Both poni and lucas make it to the top of the tower where a man layed dead at the top","\n","^Lucas: i can read his mind","\n","ev","str","^\"Did he know where the camp was?\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"North"},"\n",{"#f":5}]}],{"#f":1}],"North":[["^\"Did he know where the camp was?\"","\n","^Lucas: Yes he does, he had seen it before he passed away, its north we can see it from here","\n","^\"i see it\"","\n","^lucas: what if you use your hair to glide down","\n","ev","str","^\"Ok Lucas, hold on!\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"->":"end1"},"\n",{"#f":5}]}],{"#f":1}],"sewerlevel":[["^Poni and Lucas approach the giant entrance to the sewer. A thick green sludge spews from the pipe, which is covered in mushrooms, vines and moss.","\n","^Lucas: Poni.. this looks disgusting, and smells even worse! I don't wanna go in here...","\n","ev","str","^\"We have to\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"enter"},"\n",{"#f":5}]}],{"#f":1}],"enter":[["^\"Sorry Lucas, but we have no choice. This is our best bet of getting out of this city as soon as possible. I need you to be brave, ok?\"","\n","^Lucas: OK... I'm ready Poni! Let's do this.","\n","ev","str","^Enter the sewer","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"stumpy"},"\n",{"#f":5}]}],{"#f":1}],"stumpy":[["^LEVEL THREE: SEWERS","\n","^As Lucas and Poni enter the sewers, they hear growling from within, and suddenly a small, chunky six-legged alligator pops out of the sewerage.","\n","^Lucas: It's cute!!","\n","ev","str","^\"Stay away!!\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"stayaway"},"\n",{"#f":5}]}],{"#f":1}],"stayaway":[["^\"Lucas, stay back!It could be dangerous!\"","\n","^Lucas: Look, it's tiny! I don't think it wants to hurt us.","\n","ev","str","^\"Hmmm...\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"hmmm"},"\n",{"#f":5}]}],{"#f":1}],"hmmm":[["^\"Oh... it's growth must have been stunted by it's mutation...\"","\n","^Lucas: Hey, I can communicate with it with my telepathy! This is awesome! Oh.. he called us \"Lil dudes...\"","\n","ev","str","^\"Lil\"?\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"lil"},"\n",{"#f":5}]}],{"#f":1}],"lil":[["^\"Lil? We're 5 times it's size.\"","\n","^Lucas:Yeah! I'll call him Stumpy. Oh... he didn't like that.","\n","^Stumpy begins to slide back into the sewerage, before turning back and looking at Lucas.","\n","^Lucas: He says to be careful... the sewerage is toxic, and could kill us if we fall in!!","\n","^Poni:Damn... thanks Stumpy. Ok, let's keep going Lucas.","\n","^Lucas: Right!","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"continue"},"\n",{"#f":5}]}],{"#f":1}],"continue":[["^As Poni and Lucas reach the depths of the sewers, Stumpy pops up once again.","\n","^Lucas: Look, it's Stumpy again!","\n","^Poni smiles weakly.","\n","ev","str","^\"Hey\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"hey"},"\n",{"#f":5}]}],{"#f":1}],"hey":[["^\"Hey lil guy\"","\n","^Stumpy looks up at Poni.","\n","^Lucas: He says you look sick... that the sewer is affected you badly...","\n","ev","str","^Play with Stumpy","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"play"},"\n",{"#f":5}]}],{"#f":1}],"play":[["^Lucas and Poni spend some time rubbing and playing with Stumpy.","\n","^Lucas:He says this is the last time we see him, that we have to turn some kinda wheel and then the way out will be clear.","\n","^Poni: I guess we won't see him again huh... can you thank him for me Lucas?","\n","^Lucas:Sure! Awwww, he looks sad. Bye Stumpy!! Thanks for all the help!","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"sewerend"},"\n",{"#f":5}]}],{"#f":1}],"sewerend":[["^As Poni and Lucas finally near the end of the sewer, Poni begins coughing violently. She braces herself for what lies beyond the sewer exit, and the two leave together.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"end2"},"\n",{"#f":5}]}],{"#f":1}],"end2":[["^Lucas and Poni successfully navigated the sewers, although Poni has fallen ill. Although they were attacked by sentient vines as they left, they escaped and jumped straight into a quarantine zone just outside of the city perimeter.","\n","ev","str","^Look around the quarantine zone","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"quarantine"},"\n",{"#f":5}]}],{"#f":1}],"quarantine":[["^Poni looks around the quarantine zone. There are families huddled in corners with sheets, children crying and soliders barking orders. Amidst the crowd, she spots a familiar face...","\n","ev","str","^\"Dad?!\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"Dad2"},"\n",{"#f":5}]}],{"#f":1}],"Dad2":[["^The weary looking man looks up at the siblings in shock. His eyes widen when he recognises Poni and Lucas. And to the siblings shock, a grin appears on his.","\n","^Man:It worked... it really worked...","\n","ev","str","^\"What?!\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"what"},"\n",{"#f":5}]}],{"#f":1}],"what":[["^\"What?! What worked?! You mean you had something to do twith this whole mess?! Are you crazy? Me and Lucas have been through  hell to get here! So many people have died... explain yourself!\"","\n","^Poni begins to cough as she gets angrier and angrier.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"next"},"\n",{"#f":5}]}],{"#f":1}],"next":["^The kid's father looks at them.","\n","^Father: You'll never understand... yes, it was I who arranged for those experiments,and yes I knew about the explosion before it happened... but I couldn't have stopped it... all I wanted to do was prepare you to survive it...","\n","^Lucas begins to cry as Poni collapses to the ground, coughing up blood.","\n","^[Continue] ",{"->":"Ponisick"},"\n",{"#f":1}],"Ponisick":[["^Dad: Poni... you're dying... I can heal you, but you have to trust me. It's your choice: leave me now, or stay with me and let me fix you. We can be like a family again...","\n","ev","str","^Leave him","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Trust him","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"ponidies"},"\n",{"#f":5}],"c-1":[{"->":"bothlive"},"\n","end",{"#f":5}]}],{"#f":1}],"end1":[["^Lucas and Poni successfully navigated made it to the campsite safezone, although Lucas has fallen ill.","\n","ev","str","^Look around the campsite","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"campsite"},"\n",{"#f":5}]}],{"#f":1}],"campsite":[["^Poni looks around the safe zone. There are families huddled in corners with sheets, children crying and soliders barking orders. Amidst the crowd, she spots a familiar face...","\n","ev","str","^\"Dad?!\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"Dad"},"\n",{"#f":5}]}],{"#f":1}],"Dad":[["^The weary looking man looks up at the siblings in shock. His eyes widen when he recognises Poni and Lucas. And to the siblings shock, a grin appears on his.","\n","^Man:It worked... it really worked...","\n","ev","str","^\"What?!\"","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"what2"},"\n",{"#f":5}]}],{"#f":1}],"what2":[["^\"What?! What worked?! You mean you had something to do twith this whole mess?! Are you crazy? Me and Lucas have been through  hell to get here! So many people have died... explain yourself- \"","\n","^Poni stops as she notices Lucas coughing as he begins to cry as he gets more and more worked up.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"next2"},"\n",{"#f":5}]}],{"#f":1}],"next2":[["^The kid's father looks at them.","\n","^Father: You'll never understand... yes, it was I who arranged for those experiments,and yes I knew about the explosion before it happened... but I couldn't have stopped it... all I wanted to do was prepare you to survive it...","\n","^Poni glares at her father as Lucas collapses to the ground, coughing up blood.","\n","ev","str","^Continue","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"Lucassick"},"\n",{"#f":5}]}],{"#f":1}],"Lucassick":["^Dad: Lucas... he's dying... I can heal him, but you have to trust me. It's your choice: leave me now, or stay with me and let me fix him. We can be like a family again...","\n","^Leave him ",{"->":"lucasdies"},"\n","^Trust him ",{"->":"bothlive"},"\n",{"#f":1}],"lucasdies":["^The siblings refuse their father's help, and he leaves them to fend for themselves. It was their choice after all. After a week, Lucas passes. Poni is left alone, forever wondering if she should have trusted her father that day.","\n","end",{"#f":1}],"ponidies":["^The siblings refuse their father's help, and he leaves them to fend for themselves. It was their choice after all. After a week, Poni passes. Lucas is taken ito care by the quarantine zone officials, forever wondering if they should have trusted her father that day.","\n","end",{"#f":1}],"bothlive":["^Poni sighs as she accepts her fathers offer.After a week, the illness was healed. While their father hadn't lied about that... there was still something off about him. But they had no choice but to stick with him now, they had nowehere else to go. But no matter where he took them or what he had planned, at least they would be together.","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};