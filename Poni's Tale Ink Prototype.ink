Poni's Tale
-> Poni
=== Poni ===
LEVEL 2: THE CITY
Poni and Lucas spot a group of survivors gathered around a fire on the footpath.
 Lucas: "Look, people! Let’s go ask them for help!"
+ ["You sure?"]->start

===start===
    "I don’t know Lucas… they could be dangerous… we shouldn’t just trust everyone we meet y’know?"
    Lucas smiles at Poni.
  Lucas: Don’t worry, I can read their minds like I read yours. They’re good people, I can tell.

+ ["Ok, I trust you. Let's go."] -> approach
    
    ===approach===

    Poni apprehensively approaches the group. They look up at her and Lucas as they approach.
    
"Hi, uhm, would any of you be able to help me and my brother please? We’re looking for somewhere safe, or maybe a way out of the city…"

Scared man: I-I  heard of a safe zone with a campsite where people are gathering, but I’m too afraid to go find it…
+"Any other ideas?"
->ideas
+"Do you have more information on that camp?"->skyscraper
===ideas===

Hardy woman: Yeah, I heard tales of a shortcut that may lead straight outta the city – if you’ve got the balls to go find it
+ ["Where is it?"]->sewers
===sewers===
The woman looks Poni up and down, judging her.

	Hardy woman: You look like you got the guts for it kid, so I’ll tell ya where it is. It’s only a rumour, but I heard deep down the sewers there’s a passage that spits you out way outside of the city borders. If there’s any hope of a quick way outta here, that’s it – but anyone who’s tried so far has floated right back out. Dead as a dodo.
	+"Do you have more information on that camp?" ->skyscraper
	+[Leave]->leave

===skyscraper===
    Scared Man: I heard it’s somewhere on the outskirts of the city… I thought about climbing a skyscraper to see if I could see it from the top but I’m scared of heights…
    +["Do you have more information on the sewer?"] -> sewers
+ [Leave]->leave

===leave===
Poni and Lucas venture through the city, reaching the bottom of the skyscraper, and the entrance to the sewers.
Lucas: So… did you decide which way we will go yet?
Poni:…

+[Climb the skyscraper]->skyscraperlevel
+[Descend into the sewers]->sewerlevel

===skyscraperlevel===
LEVEL THREE: SKYSCRAPER 
Both Poni and Lucas enter the skyscraper toghether
"Oh no, the building's a wreck"
+ [How are we going to get through this?!"] -> WallCLimb


===WallCLimb===
[How are we going to get through this?!"
Lucas: Poni... what if you use your hair to grab onto the wals and jump accross
+ ["I can try"] -> MutantPlant

===MutantPlant===
"I can try"
After Poni figures out she can use her hair to traverse the wrecked inside of the skyscraper she carrys lucas on her back until they both come across a mutated plant which trys to attack them
Lucas: PONI, move quick!
+ ["I'm trying!"] -> closeCall

===closeCall===
"I'm trying!"
Poni sucessfuly escapes mutated plant , But lucas starts coughing
+["Whats wrong Lucas?"] -> lucasCough

===lucasCough===
"Whats wrong Lucas?"
Lucas: I feel sick, i know what your thinking poni, im fine we should keep moving
Poni says with a worried look on her face
+ ["Ok"] -> DeadMan

===DeadMan===
"Ok..."
Both poni and lucas make it to the top of the tower where a man layed dead at the top
Lucas: i can read his mind
+ ["Did he know where the camp was?"] -> North

===North===
"Did he know where the camp was?"
Lucas: Yes he does, he had seen it before he passed away, its north we can see it from here
"i see it"

lucas: what if you use your hair to glide down
+ ["Ok Lucas, hold on!"] -> end1

===sewerlevel===
Poni and Lucas approach the giant entrance to the sewer. A thick green sludge spews from the pipe, which is covered in mushrooms, vines and moss.
Lucas: Poni.. this looks disgusting, and smells even worse! I don't wanna go in here...
+["We have to"]->enter
===enter===
"Sorry Lucas, but we have no choice. This is our best bet of getting out of this city as soon as possible. I need you to be brave, ok?"
Lucas: OK... I'm ready Poni! Let's do this.
+[Enter the sewer]->stumpy
===stumpy===
LEVEL THREE: SEWERS
As Lucas and Poni enter the sewers, they hear growling from within, and suddenly a small, chunky six-legged alligator pops out of the sewerage.
Lucas: It's cute!!
+["Stay away!!"]->stayaway
===stayaway===
"Lucas, stay back!It could be dangerous!"
Lucas: Look, it's tiny! I don't think it wants to hurt us.
+["Hmmm..."]->hmmm
===hmmm===
"Oh... it's growth must have been stunted by it's mutation..."
Lucas: Hey, I can communicate with it with my telepathy! This is awesome! Oh.. he called us "Lil dudes..."
+["Lil"?"]->lil 

===lil===
"Lil? We're 5 times it's size."
Lucas:Yeah! I'll call him Stumpy. Oh... he didn't like that.
        Stumpy begins to slide back into the sewerage, before turning back and looking at Lucas.
        Lucas: He says to be careful... the sewerage is toxic, and could kill us if we fall in!!
        Poni:Damn... thanks Stumpy. Ok, let's keep going Lucas.
        Lucas: Right!
        +[continue]->continue
        ===continue===
        As Poni and Lucas reach the depths of the sewers, Stumpy pops up once again.
        Lucas: Look, it's Stumpy again!
        Poni smiles weakly.
        +["Hey"]->hey
        ===hey===
        "Hey lil guy"
        Stumpy looks up at Poni.
        Lucas: He says you look sick... that the sewer is affected you badly...
    +[Play with Stumpy]->play
    ===play===
    Lucas and Poni spend some time rubbing and playing with Stumpy.
    Lucas:He says this is the last time we see him, that we have to turn some kinda wheel and then the way out will be clear.
    Poni: I guess we won't see him again huh... can you thank him for me Lucas?
    Lucas:Sure! Awwww, he looks sad. Bye Stumpy!! Thanks for all the help!
    +[Continue]->sewerend
    ===sewerend===
    As Poni and Lucas finally near the end of the sewer, Poni begins coughing violently. She braces herself for what lies beyond the sewer exit, and the two leave together.
    +[Continue]->end2
    
    ===end2===
    Lucas and Poni successfully navigated the sewers, although Poni has fallen ill. Although they were attacked by sentient vines as they left, they escaped and jumped straight into a quarantine zone just outside of the city perimeter.
    
    +[Look around the quarantine zone]->quarantine
    ===quarantine===
    Poni looks around the quarantine zone. There are families huddled in corners with sheets, children crying and soliders barking orders. Amidst the crowd, she spots a familiar face...
    +["Dad?!"]->Dad2
    ===Dad2===
    The weary looking man looks up at the siblings in shock. His eyes widen when he recognises Poni and Lucas. And to the siblings shock, a grin appears on his.
    Man:It worked... it really worked...
    +["What?!"]->what
    ===what===
    "What?! What worked?! You mean you had something to do twith this whole mess?! Are you crazy? Me and Lucas have been through  hell to get here! So many people have died... explain yourself!"
    Poni begins to cough as she gets angrier and angrier. 
   + [Continue]->next
    ===next==
    The kid's father looks at them. 
    Father: You'll never understand... yes, it was I who arranged for those experiments,and yes I knew about the explosion before it happened... but I couldn't have stopped it... all I wanted to do was prepare you to survive it...
    Lucas begins to cry as Poni collapses to the ground, coughing up blood.
    [Continue]->Ponisick
    ===Ponisick===
    Dad: Poni... you're dying... I can heal you, but you have to trust me. It's your choice: leave me now, or stay with me and let me fix you. We can be like a family again...
    
    +[Leave him]->ponidies
    +[Trust him]->bothlive
    
    -> END
    

 ===end1===
    Lucas and Poni successfully navigated made it to the campsite safezone, although Lucas has fallen ill.
    
    +[Look around the campsite]->campsite
    ===campsite===
    Poni looks around the safe zone. There are families huddled in corners with sheets, children crying and soliders barking orders. Amidst the crowd, she spots a familiar face...
    +["Dad?!"]->Dad
    ===Dad===
    The weary looking man looks up at the siblings in shock. His eyes widen when he recognises Poni and Lucas. And to the siblings shock, a grin appears on his.
    Man:It worked... it really worked...
    +["What?!"]->what2
    ===what2===
    "What?! What worked?! You mean you had something to do twith this whole mess?! Are you crazy? Me and Lucas have been through  hell to get here! So many people have died... explain yourself- "
         Poni stops as she notices Lucas coughing as he begins to cry as he gets more and more worked up. 
    +[Continue]->next2
    ===next2==
    The kid's father looks at them. 
    Father: You'll never understand... yes, it was I who arranged for those experiments,and yes I knew about the explosion before it happened... but I couldn't have stopped it... all I wanted to do was prepare you to survive it...
    Poni glares at her father as Lucas collapses to the ground, coughing up blood.
    +[Continue]->Lucassick
    ===Lucassick===
    Dad: Lucas... he's dying... I can heal him, but you have to trust me. It's your choice: leave me now, or stay with me and let me fix him. We can be like a family again...
    
    Leave him->lucasdies
    Trust him->bothlive
    
    ===lucasdies===
    The siblings refuse their father's help, and he leaves them to fend for themselves. It was their choice after all. After a week, Lucas passes. Poni is left alone, forever wondering if she should have trusted her father that day.
    ->END
    ===ponidies===
        The siblings refuse their father's help, and he leaves them to fend for themselves. It was their choice after all. After a week, Poni passes. Lucas is taken ito care by the quarantine zone officials, forever wondering if they should have trusted her father that day.
        ->END
    ===bothlive===
    Poni sighs as she accepts her fathers offer.After a week, the illness was healed. While their father hadn't lied about that... there was still something off about him. But they had no choice but to stick with him now, they had nowehere else to go. But no matter where he took them or what he had planned, at least they would be together.
    ->END
