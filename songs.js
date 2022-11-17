const songs = [
    [
        {
            songName: "Ain't No Mountain High Enough - Marvin Gaye, Tammi Terrell",
            songSrc: "assets/music/60/cut/Ain't No Mountain High Enough - Marvin Gaye, Tammi Terrell.mp3",
            songImg: "assets/img/60/Ain't No Mountain High Enough - Marvin Gaye, Tammi Terrell.jpg",
            en: `The song was written by Ashford and Simpson prior to joining Motown. British soul singer Dusty Springfield wanted to record the song but the duo declined, hoping it would give them access to the Detroit-based label. As Valerie Simpson later recalled, "We played that song for her (Springfield) but wouldn't give it to her, because we wanted to hold that back. We felt like that could be our entry to Motown. Nick called it the 'golden egg'.`,
            ru: `Песня была написана Эшфордом и Симпсоном до прихода в Motown. Британский соул-певец Дасти Спрингфилд хотел записать эту песню, но дуэт отказался, надеясь, что это даст им доступ к детройтскому лейблу. Как позже вспоминала Валери Симпсон: «Мы сыграли эту песню для нее (Спрингфилд), но не дали ее ей, потому что хотели сдержать это. Мы чувствовали, что это может стать нашим входом в Motown. Ник назвал ее «золотой». яйцо'.`,
        },
        {
            songName: "All I Have To Do Is Dream - The Everly Brothers",
            songSrc: "assets/music/60/cut/All I Have To Do Is Dream - The Everly Brothers.mp3",
            songImg: "assets/img/60/All I Have To Do Is Dream - The Everly Brothers.jpg",
            en: `"All I Have to Do Is Dream" is a song made famous by the Everly Brothers, written by Boudleaux Bryant of the husband-and-wife songwriting team Felice and Boudleaux Bryant, and published in 1958. The song is ranked No. 141 on the Rolling Stone magazine's list of The 500 Greatest Songs of All Time.`,
            ru: `«All I Have to Do Is Dream» (рус. Всё, что мне остаётся, это мечтать) — популярная песня американского дуэта The Everly Brothers, записанная в 1958 году. Под номером 142 входит в список 500 величайших песен всех времён по версии журнала Rolling Stone.`,
        }
        ,
        {
            songName: "California Dreamin - The Mamas, The Papas",
            songSrc: "assets/music/60/cut/California Dreamin - The Mamas, The Papas.mp3",
            songImg: "assets/img/60/California Dreamin - The Mamas, The Papas.jpg",
            en: `"California Dreamin'" is a song written by John Phillips and Michelle Phillips and first recorded by Barry McGuire. The best-known version is by the Mamas & the Papas, who sang backup on the original version and released it as a single in 1965. The lyrics express the narrator's longing for the warmth of Los Angeles during a cold winter in New York City.`,
            ru: `«California Dreamin’» (с англ. — «Мечтая о Калифорнии») — песня The Mamas & the Papas, выпущенная в 1965 году. Текст песни выражает тоску автора по теплу Лос-Анджелеса во время холодной зимы в Нью-Йорке.`,
        },
        {
            songName: "Can't Help Falling In Love - Elvis Presley",
            songSrc: "assets/music/60/cut/Can't Help Falling In Love - Elvis Presley.mp3",
            songImg: "assets/img/60/Can't Help Falling In Love - Elvis Presley.jpg",
            en: `"Can't Help Falling in Love" is a song recorded by American singer Elvis Presley for the album Blue Hawaii (1961). The melody is based on "Plaisir d'amour", a popular French love song composed in 1784 by Jean-Paul-Égide Martini. The song was initially written from the perspective of a woman as "Can't Help Falling in Love with Him", which explains the first and third line ending on "in" and "sin" rather than words rhyming with "you".`,
            ru: `«Can’t Help Falling in Love» — песня, записанная американским певцом Элвисом Пресли для альбома Blue Hawaii (1961). Мелодия основана на популярной французской любовной песне «Plaisir d'amour», сочиненной в 1784 году Жан-Полем-Эгидом Мартини. Изначально песня была написана с точки зрения женщины как «Не могу не влюбиться в него», что объясняет первую и третью строчки, оканчивающиеся на «в» и «грех», а не слова, рифмующиеся со словом «ты».`,
        }
        ,
        {
            songName: "Hit the Road Jack - Ray Charles",
            songSrc: "assets/music/60/cut/Hit the Road Jack - Ray Charles.mp3",
            songImg: "assets/img/60/Hit the Road Jack - Ray Charles.jpg",
            en: `"Hit the Road Jack" is a song written by the rhythm and blues singer Percy Mayfield and recorded by Ray Charles. The song was a US number 1 hit in 1961, and won a Grammy award for Best Rhythm and Blues Recording, becoming one of Charles' signature songs.`,
            ru: `Hit The Road Jack (с англ. — «Проваливай, Джек») — песня построена на диалоге женщины, которая упрекает своего мужчину в том, что у него за душой ни гроша, и требует, чтобы он собрал свои вещи и покинул её дом, и ответом мужчины, который обвиняет женщину в сварливости и обещает наверстать упущенное.`,
        }
        ,
        {
            songName: "I'm a Beliver - The Monkees",
            songSrc: "assets/music/60/cut/I'm a Beliver - The Monkees.mp3",
            songImg: "assets/img/60/I'm a Beliver - The Monkees.jpg",
            en: `"I'm a Believer" is a song written by Neil Diamond and recorded by the Monkees in 1966 with the lead vocals by Micky Dolenz. The single, produced by Jeff Barry, hit the number-one spot on the U.S. Billboard Hot 100 chart for the week ending December 31, 1966, and remained there for seven weeks, becoming the last No. 1 hit of 1966 and the biggest-selling single for all of 1967. Billboard ranked the record as the No. 5 song for 1967.`,
            ru: `«I'm a Believer» (с англ. — «Я верю») ― песня заняла 1-е место в американском чарте Billboard Hot 100 за неделю, и оставалась там в течение 7 недель, став последним хитом 1966 года и самым продаваемым синглом 1967 года. Журнал Billboard поместил песню на 5-е место в списке лучших песен за 1967 год. Благодаря 1 051 280 предварительных заказов она стала золотой в течение двух дней после выпуска. Это один из сорок`,
        }
        ,
        {
            songName: "It's My Party - Lesley Gore",
            songSrc: "assets/music/60/cut/It's My Party - Lesley Gore.mp3",
            songImg: "assets/img/60/It's My Party - Lesley Gore.jpg",
            en: `"It's My Party" is a song by American singer-songwriter Lesley Gore from her debut studio album I'll Cry If I Want To (1963). It was released as the lead single from the album on April 5, 1963, by Mercury Records. The song was collectively written by Herb Wiener, John Gluck Jr., and Wally Gold, whilst production was helmed by Quincy Jones.`,
            ru: `«It’s My Party» — песня американской певицы и автора песен Лесли Гор из её дебютного студийного альбома «I’ll Cry If I Want To» (1963). Он был выпущен как главный сингл с альбома 5 апреля 1963 года на лейбле Mercury Records. Песня была написана совместно Хербом Винером, Джоном Глаком-младшим и Уолли Голдом, а производством руководил Куинси Джонс.`,
        },
        {
            songName: "Jonny B. Goode - Chuck Berry",
            songSrc: "assets/music/60/cut/Jonny B. Goode - Chuck Berry.mp3",
            songImg: "assets/img/60/Jonny B. Goode - Chuck Berry.jpg",
            en: `"Johnny B. Goode" is considered one of the most recognizable songs in the history of popular music. Credited as "the first rock & roll hit about rock & roll stardom", it has been recorded by many other artists and has received several honors and accolades, including being ranked seventh on Rolling Stone's list of the "500 Greatest Songs of All Time" and included as one of the 27 songs on the Voyager Golden Record, a collection of music, images, and sounds designed to serve as a record of humanity.`,
            ru: `«Johnny B. Goode» («Джонни Би Гуд») — песня занимает 1 место в рейтинге 100 величайших гитарных песен всех времён по версии журнала Rolling Stone. В характерной для Берри манере песня представляет собой небольшой рассказ о неграмотном, но талантливом деревенском пареньке, который очаровал всех своей игрой на гитаре. Название песни — игра слов: «Johnny B. Goode» выглядит как обычное имя и фамилия, при этом звучит по-английски как Johnny be good («Джонни, будь добр» или «Джонни, будь умницей»), и кроме того, намекает на автобиографические моменты: Чак Берри родился на Гуд-авеню (Goode Avenue) в Сент-Луисе.`,
        },
        {
            songName: "Oh, Pretty Woman - Roy Orbison",
            songSrc: "assets/music/60/cut/Oh, Pretty Woman - Roy Orbison.mp3",
            songImg: "assets/img/60/Oh, Pretty Woman - Roy Orbison.jpg",
            en: `"Oh, Pretty Woman" or simply "Pretty Woman"  - was released as a single in August 1964 on Monument Records and spent three weeks at number one on the Billboard Hot 100 from September 26, 1964, the second and final single by Orbison to top the US charts.  The LP version with the intended lyric: "come with me baby" was changed for the single to "come to me baby" as the former was considered too risque. `,
            ru: `«Oh, Pretty Woman» или просто «Pretty Woman». Он был выпущен как сингл в августе 1964 года на лейбле Monument Records и три недели занимал первое место в Billboard Hot 100 с 26 сентября 1964 года. возглавить чарты США. Версия LP с предполагаемой лирикой: «Пойдем со мной, детка» была изменена на сингл на «Иди ко мне, детка», поскольку первое было сочтено слишком рискованным.`,
        },
        {
            songName: "The House of the Rising Sun - The Animals",
            songSrc: "assets/music/60/cut/The House of the Rising Sun - The Animals",
            songImg: "assets/img/60/The House of the Rising Sun - The Animals",
            en: `"The House of the Rising Sun" is a traditional folk song, sometimes called "Rising Sun Blues". It tells of a person's life gone wrong in the city of New Orleans. Many versions also urge a sibling or parents and children to avoid the same fate. The most successful commercial version, recorded in 1964 by the British rock band The Animals, was a number one hit on the UK Singles Chart and in the US and Canada. As a traditional folk song recorded by an electric rock band, it has been described as the "first folk rock hit".`,
            ru: `«The House of the Rising Sun» (с англ. — «Дом восходящего солнца») — песня занимала первые строчки хит-парадов как США, так и Великобритании в 1964 году. Версия The Animals вошла (под № 123) в Список 500 лучших песен всех времён журнала Rolling Stone (2004). Существует множество вариантов песни, в которых значительно варьируется сюжет. Во всех вариантах герой повествует о том, как погубил свою жизнь в доме «Восходящего Солнца», и предостерегает от такой судьбыю`,
        }
    ],
    [
        {
            songName: `D.I.S.C.O. - Ottawan`,
            songSrc: `assets/music/70/cut/D.I.S.C.O. - Ottawan.mp3`,
            songImg: `assets/img/70/D.I.S.C.O. - Ottawan.jpg`,
            en: `"D.I.S.C.O." is a song by the French band Ottawan, written by Daniel Vangarde and Jean Kluger and produced by Daniel Vangarde. Ottawan originally recorded it in French. It was first released in 1979 and reached number two in the UK Singles Chart the following year. The song's name is an acronym and comes from the lyrics in its chorus, in which a woman is described as "D.I.S.C.O.". In other words, each letter of the word standing for a certain quality, except "O", which simply leads to singing "oh-oh-oh" ("She is D, delirious / She is I, incredible / She is S, superficial / She is C, complicated / She is oh-oh-oh").`,
            ru: `«D.I.S.C.O.» — песня французской группы Ottawan в стиле диско, написанная Жаном Клюгером и Даниэлем Вангаром (отцом Т. Бангальтера из Daft Punk). Композиция, существующая в двух (англоязычной и франкоязычной) версиях, была записана в конце 1979 года и стала одним из наиболее успешных релизов группы. В тексте припева обыгрывается название песни: каждая буква названия соответствует какому-нибудь качеству («She is disco // She is D delirious // She is I incredible // She is S superficial // She is C complicated // She is O oh, oh, oh»).`,
        }, 
        {
            songName: `Daddy Cool - Boney M`,
            songSrc: `assets/music/70/cut/Daddy Cool - Boney M.mp3`,
            songImg: `assets/img/70/Daddy Cool - Boney M.jpg`,
            en: `"Daddy Cool" is a song recorded by Boney M. and included on their debut album Take the Heat off Me. It was a 1976 hit and a staple of disco music and became Boney M.'s first hit in the United Kingdom. The second Boney M. single, it was released in 1976 and made no major impact at first. After a spectacular performance on the Musikladen TV show in September that year, the single became a hit, topping most European charts. `,
            ru: `«Daddy Cool» — песня, записанная Boney M. и вошедшая в их дебютный альбом Take the Heat off Me. Это был хит 1976 года, основной элемент диско-музыки и первый хит Boney M. в Соединенном Королевстве. Второй сингл Boney M. был выпущен в 1976 году и поначалу не произвел большого впечатления. После эффектного выступления на телешоу Musikladen в сентябре того же года сингл стал хитом, возглавив большинство европейских чартов.`,
        }, 
        {
            songName: `Dancing Queen - ABBA`,
            songSrc: `assets/music/70/cut/Dancing Queen - ABBA.mp3`,
            songImg: `assets/img/70/Dancing Queen - ABBA.jpg`,
            en: `Dancing Queen" is a Europop and disco song by the Swedish group ABBA, released as the lead single from their fourth studio album, Arrival (1976). It was written by Benny Andersson, Björn Ulvaeus and Stig Anderson. Andersson and Ulvaeus also produced the song. "Dancing Queen" was released as a single in Sweden on 15 August 1976, followed by a UK release and the rest of Europe a few days later. It was a worldwide hit.`,
            ru: `«Dancing Queen» (с англ.   — «Королева танцев», «Танцующая королева») — песня шведской группы ABBA, релиз которой следует за выпуском наблюдаемого хита «Fernando». Ее обычно считают одной из лучших композиций 1970-х годов, а также визитной карточкой группы АВВА.`,
        }, 
        {
            songName: `Gimme! Gimme! Gimme! - ABBA`,
            songSrc: `assets/music/70/cut/Gimme! Gimme! Gimme! - ABBA.mp3`,
            songImg: `assets/img/70/Gimme! Gimme! Gimme! - ABBA.jpg`,
            en: `"Gimme! Gimme! Gimme! (A Man After Midnight)" is a song by Swedish band ABBA. It was recorded in August 1979 in order to help promote their North American and European tour of that year, and was released on ABBA's Greatest Hits Vol. 2 album as the brand new track. "Gimme! Gimme! Gimme! (A Man After Midnight)" was written and composed by Benny Andersson and Björn Ulvaeus, with the lead vocal sung by Agnetha Fältskog. Fältskog, as the narrator, weaves the image of a lonely woman who longs for a romantic relationship and views her loneliness as a forbidding darkness of night, even drawing parallels to how the happy endings of movie stars are so different from her own existence.`,
            ru: `«Gimme! Gimme! Gimme! (A Man After Midnight)» (первоначальное название: «Been and Gone and Done It») — один из наиболее значимых диско-хитов шведской группы ABBA. Первоначально ABBA записывала другую песню, «Rubber Ball Man», однако им показалось, что песня «Gimme! Gimme! Gimme!» с её диско-ритмами будет лучшим выбором, и поэтому «Rubber Ball Man» осталась лишь демоверсией.`,
        }, 
        {
            songName: `Got To Be Real - Cheryl Lynn`,
            songSrc: `assets/music/70/cut/Got To Be Real - Cheryl Lynn.mp3`,
            songImg: `assets/img/70/Got To Be Real - Cheryl Lynn.jpg`,
            en: `"Got to Be Real" is a song by American singer Cheryl Lynn from her 1978 self-titled debut studio album. In the United States, "Got to Be Real" hit number 12 on the Billboard Hot 100 and hit number one on the Hot Soul Singles chart in early 1979. Along with the album tracks "Star Love" and "You Saved My Day", "Got to Be Real" peaked at number eleven on the National Disco Action Top 40 chart.`,
            ru: `«Got to Be Real» — песня американской певицы Шерил Линн из её одноименного дебютного студийного альбома 1978 года. В Соединенных Штатах "Got to Be Real" занял 12-е место в Billboard Hot 100 и первое место в чарте Hot Soul Singles в начале 1979 года. Наряду с треками из альбома "Star Love" и "You Saved My Day", "Got to Be Real" занял одиннадцатую позицию в чарте National Disco Action Top 40.`,
        }, 
        {
            songName: `Hotel California - Eagles`,
            songSrc: `assets/music/70/cut/Hotel California - Eagles.mp3`,
            songImg: `assets/img/70/Hotel California - Eagles.jpg`,
            en: `"Hotel California" is the title track from the Eagles' album of the same name and was released as a single in February 1977. Since its release, "Hotel California" has been covered by many artists. Julia Phillips proposed adapting the song into a film, but the members of the Eagles disliked the idea and it never came to fruition. Commercially, "Hotel California" reached the number one position on the Billboard Hot 100 and reached the top ten of several international charts.
            "Hotel California" is the title track from the Eagles' album of the same name and was released as a single in February 1977. Since its release, "Hotel California" has been covered by many artists. Julia Phillips proposed adapting the song into a film, but the members of the Eagles disliked the idea and it never came to fruition. Commercially, "Hotel California" reached the number one position on the Billboard Hot 100 and reached the top ten of several international charts.`,
            ru: `«Hotel California» (Отель «Калифорния») — песня описывает «гостиницу, которую нельзя покинуть никогда». Песня напоминает рассказ утомлённого путешественника, пойманного в ловушку в кошмарной гостинице, которая сначала казалась весьма привлекательной.`,
        }, 
        {
            songName: `Love hurts Lyrics - Nazareth`,
            songSrc: `assets/music/70/cut/Love hurts Lyrics - Nazareth.mp3`,
            songImg: `assets/img/70/Love hurts Lyrics - Nazareth.jpg`,
            en: `The hard rock group Nazareth took in 1974 sweet melody and quite corny lyrics by the then (1960) very popular Everly Brothers (Their version) and converted it to a soulful, hard driving rock ballade.
            It reached the Top 10 in the US and gained a respectable place on rock stations playlists.`,
            ru: `Хард-рок-группа Nazareth взяла в 1974 году сладкую мелодию и довольно банальную лирику очень популярных тогда (1960) Everly Brothers (их версия) и превратила их в душевную, жесткую рок-балладу.
            Он вошел в десятку лучших в США и занял почетное место в плейлистах рок-станций.`,
        }, 
        {
            songName: `One way ticket - Eruption`,
            songSrc: `assets/music/70/cut/One way ticket - Eruption.mp3`,
            songImg: `assets/img/70/One way ticket - Eruption.jpg`,
            en: `The track was originally performed by Neil Sedaka and included as the B-side on Sedaka's 1959 single "Oh! Carol". In 1961, the song featured in the track listing of his third studio album, Neil Sedaka Sings Little Devil and His Other Hits, but was never released as a standalone single. Despite this, the song made it to number one on the Japanese pop charts, where it was affectionately called "The Choo-Choo Train Song".`,
            ru: `One Way Ticket (с англ. — «Билет в один конец») — песня группы «Eruption» из альбома Leave a Light (1978). В России и странах бывшего СССР известна также как «Синий иней» или «Синяя песня». В 1968 году поэт Альберт Азизов написал русский текст. Он не имел ничего общего с английским оригиналом и назывался «Синяя песня» (или, по первым словам «Синий, синий иней…»).`,
        }, 
        {
            songName: `Rasputin - Boney M.`,
            songSrc: `assets/music/70/cut/Rasputin - Boney M..mp3`,
            songImg: `assets/img/70/Rasputin - Boney M..jpg`,
            en: `"Rasputin" - written by the group's creator Frank Farian, along with George Reyam and Fred Jay, it is a song about Grigori Rasputin, a friend and advisor of Tsar Nicholas II of Russia and his family during the early 20th century. The song describes Rasputin as a playboy, mystical healer, and political manipulator.`,
            ru: `«Rasputin» — в песне идёт речь о Григории Распутине, неприязни некоторых людей высшего общества к нему, а также о его смерти. Песня описывает Распутина как плейбоя, мистического целителя и политического манипулятора.`,
        }, 
        {
            songName: `Stayin' Alive - Bee Gees`,
            songSrc: `assets/music/70/cut/Stayin' Alive - Bee Gees.mp3`,
            songImg: `assets/img/70/Stayin' Alive - Bee Gees.jpg`,
            en: `"Stayin' Alive" is a song written and performed by the Bee Gees from the Saturday Night Fever motion picture soundtrack. The song was released in 1977 as the second single from the Saturday Night Fever soundtrack. The band co-produced the song with Albhy Galuten and Karl Richardson. It is one of the Bee Gees' signature songs. In 2004, "Stayin' Alive" was placed at No. 189 on the list of Rolling Stone's 500 Greatest Songs of All Time. The 2021 updated Rolling Stone list of 500 Greatest Songs placed "Stayin' Alive" at No. 99.`,
            ru: `«Stayin’ Alive» (с англ. — «Оставаться в живых») — песня британской поп-группы Bee Gees, написанная для культового диско-фильма «Лихорадка субботнего вечера». После релиза сразу же попала в чарты и во многих заняла первое место. Например, в Billboard Hot 100, начиная с 4 февраля 1978 года, удерживала лидирующую позицию в течение четырёх недель. Композиция является самой узнаваемой по сравнению с другими песнями фильма и имеет в истории группы определяющую роль.`,
        }, 
    ],
    [
        {
            songName: `Brother Louie - Modern Talking`,
            songSrc: `assets/music/80/cut/Brother Louie - Modern Talking.mp3`,
            songImg: `assets/img/80/Brother Louie - Modern Talking.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Casino - Passengers`,
            songSrc: `assets/music/80/cut/Casino - Passengers.mp3`,
            songImg: `assets/img/80/Casino - Passengers.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Cause You Are Young - C.C. Catch`,
            songSrc: `assets/music/80/cut/Cause You Are Young - C.C. Catch.mp3`,
            songImg: `assets/img/80/Cause You Are Young - C.C. Catch.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Cheri Cheri Lady - Modern Talking`,
            songSrc: `assets/music/80/cut/Cheri Cheri Lady - Modern Talking.mp3`,
            songImg: `assets/img/80/Cheri Cheri Lady - Modern Talking.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Eye of the Tiger - Survivor`,
            songSrc: `assets/music/80/cut/Eye of the Tiger - Survivor.mp3`,
            songImg: `assets/img/80/Eye of the Tiger - Survivor.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Flash In The Night - Secret Service`,
            songSrc: `assets/music/80/cut/Flash In The Night - Secret Service.mp3`,
            songImg: `assets/img/80/Flash In The Night - Secret Service.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Gelato Al Cioccolato - Pupo`,
            songSrc: `assets/music/80/cut/Gelato Al Cioccolato - Pupo.mp3`,
            songImg: `assets/img/80/Gelato Al Cioccolato - Pupo.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Ghostbusters - Ray Parker Jr.`,
            songSrc: `assets/music/80/cut/Ghostbusters - Ray Parker Jr..mp3`,
            songImg: `assets/img/80/Ghostbusters - Ray Parker Jr..jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Heaven and Hell - C.C. Catch`,
            songSrc: `assets/music/80/cut/Heaven and Hell - C.C. Catch.mp3`,
            songImg: `assets/img/80/Heaven and Hell - C.C. Catch.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `I Can Lose My Heart Tonight - C.C. Catch`,
            songSrc: `assets/music/80/cut/I Can Lose My Heart Tonight - C.C. Catch.mp3`,
            songImg: `assets/img/80/I Can Lose My Heart Tonight - C.C. Catch.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Strangers by Night - C.C. Catch`,
            songSrc: `assets/music/80/cut/Strangers by Night - C.C. Catch.mp3`,
            songImg: `assets/img/80/Strangers by Night - C.C. Catch.jpg`,
            en: ``,
            ru: ``,
        },
        {
            songName: `Sunny - Boney M.`,
            songSrc: `assets/music/80/cut/Sunny - Boney M..mp3`,
            songImg: `assets/img/80/Sunny - Boney M..jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `The Lady In Red - Chris De Burgh`,
            songSrc: `assets/music/80/cut/The Lady In Red - Chris De Burgh.mp3`,
            songImg: `assets/img/80/The Lady In Red - Chris De Burgh.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Touch By Touch - Joy`,
            songSrc: `assets/music/80/cut/Touch By Touch - Joy.mp3`,
            songImg: `assets/img/80/Touch By Touch - Joy.jpg`,
            en: ``,
            ru: ``,
        },  
        {
            songName: `Words - F.R. David`,
            songSrc: `assets/music/80/cut/Words - F.R. David.mp3`,
            songImg: `assets/img/80/Words - F.R. David.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `You Can Win If You Want - Modern Talking`,
            songSrc: `assets/music/80/cut/You Can Win If You Want - Modern Talking.mp3`,
            songImg: `assets/img/80/You Can Win If You Want - Modern Talking.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `You Spin Me Round - Dead Or Alive`,
            songSrc: `assets/music/80/cut/You Spin Me Round - Dead Or Alive.mp3`,
            songImg: `assets/img/80/You Spin Me Round - Dead Or Alive.jpg`,
            en: ``,
            ru: ``,
        }, 
    ],
    [
        {
            songName: `All That She Wants - Ace of Base`,
            songSrc: `assets/music/90/cut/All That She Wants - Ace of Base.mp3`,
            songImg: `assets/img/90/All That She Wants - Ace of Base.jpg`,
            en: ``,
            ru: ``,
        }, 
        {
            songName: `Blue - Eiffel 65`,
            songSrc: `assets/music/90/cut/Blue - Eiffel 65.mp3`,
            songImg: `assets/img/90/Blue - Eiffel 65.jpg`,
            en: ``,
            ru: ``,
        },
        {
            songName: `Coco Jamboo - Mr.Presidenеt`,
            songSrc: `assets/music/90/cut/Coco Jamboo - Mr.Presidenеt.mp3`,
            songImg: `assets/img/90/Coco Jamboo - Mr.Presidenеt.jpg`,
            en: ``,
            ru: ``,
        },
        {
            songName: `Everybody - Backstreet Boys`,
            songSrc: `assets/music/90/cut/Everybody - Backstreet Boys.mp3`,
            songImg: `assets/img/90/Everybody - Backstreet Boys.jpg`,
            en: ``,
            ru: ``,
        },
        {
            songName: `Macarena - Los Del Rio`,
            songSrc: `assets/music/90/cut/Macarena - Los Del Rio.mp3`,
            songImg: `assets/img/90/Macarena - Los Del Rio.jpg`,
            en: ``,
            ru: ``,
        },
        {
            songName: `Pump Up The Jam - Technotronic`,
            songSrc: `assets/music/90/cut/Pump Up The Jam - Technotronic.mp3`,
            songImg: `assets/img/90/Pump Up The Jam - Technotronic.jpg`,
            en: ``,
            ru: ``,
        },
        {
            songName: `Rhythm Is a Dancer - Forfour Seasons`,
            songSrc: `assets/music/90/cut/Rhythm Is a Dancer - Forfour Seasons.mp3`,
            songImg: `assets/img/90/Rhythm Is a Dancer - Forfour Seasons.jpg`,
            en: ``,
            ru: ``,
        },
        {
            songName: `Scatman - George Price`,
            songSrc: `assets/music/90/cut/Scatman - George Price.mp3`,
            songImg: `assets/img/90/Scatman - George Price.jpg`,
            en: ``,
            ru: ``,
        },
    ]
]


const yearsArr = [`60`, `70`, `80`, `90`];