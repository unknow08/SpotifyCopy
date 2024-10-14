const Server = require('./db.js');

const server = new Server();

server.listen();

/*
const canciones = [
    { titulo: "Lost in Time", artista: "The Wanderers", descripcion: "A journey through time and space.", duracion: "3:45", url: "https://example.com/lost-in-time" },
    { titulo: "Endless Road", artista: "Silent Echoes", descripcion: "An instrumental track of infinite roads.", duracion: "4:02", url: "https://example.com/endless-road" },
    { titulo: "Fire in the Sky", artista: "Blazing Stars", descripcion: "An energetic rock anthem.", duracion: "3:55", url: "https://example.com/fire-in-the-sky" },
    { titulo: "Golden Dreams", artista: "Crystal Waves", descripcion: "A soft ballad about hope.", duracion: "4:12", url: "https://example.com/golden-dreams" },
    { titulo: "Whispering Winds", artista: "Nature's Voice", descripcion: "A calm acoustic piece.", duracion: "3:20", url: "https://example.com/whispering-winds" },
    { titulo: "Underwater Love", artista: "Ocean Breeze", descripcion: "A love story beneath the waves.", duracion: "4:45", url: "https://example.com/underwater-love" },
    { titulo: "Highway Sunset", artista: "Roadtrippers", descripcion: "A song about endless travels.", duracion: "3:34", url: "https://example.com/highway-sunset" },
    { titulo: "City Lights", artista: "Neon Dreams", descripcion: "The sounds of a bustling city at night.", duracion: "4:10", url: "https://example.com/city-lights" },
    { titulo: "Midnight Serenade", artista: "Night Owls", descripcion: "A soulful melody for the night.", duracion: "4:55", url: "https://example.com/midnight-serenade" },
    { titulo: "Summer Breeze", artista: "Tropical Vibes", descripcion: "A chill summer track with tropical beats.", duracion: "3:40", url: "https://example.com/summer-breeze" },
    { titulo: "Echoes of the Past", artista: "Forgotten Legends", descripcion: "A nostalgic song about memories.", duracion: "3:50", url: "https://example.com/echoes-of-the-past" },
    { titulo: "Moonlight Sonata", artista: "Lunar Phases", descripcion: "A relaxing instrumental.", duracion: "4:22", url: "https://example.com/moonlight-sonata" },
    { titulo: "Rainy Day Blues", artista: "Stormy Skies", descripcion: "A blues track perfect for rainy days.", duracion: "4:05", url: "https://example.com/rainy-day-blues" },
    { titulo: "Electric Heartbeat", artista: "Pulse", descripcion: "An electronic dance hit.", duracion: "3:58", url: "https://example.com/electric-heartbeat" },
    { titulo: "Wildfire", artista: "Flame", descripcion: "An intense rock track.", duracion: "4:30", url: "https://example.com/wildfire" },
    { titulo: "Chasing the Sun", artista: "Bright Horizons", descripcion: "A song about reaching for the stars.", duracion: "3:47", url: "https://example.com/chasing-the-sun" },
    { titulo: "Frozen in Time", artista: "Winter Chill", descripcion: "A soft and slow ballad.", duracion: "4:15", url: "https://example.com/frozen-in-time" },
    { titulo: "Broken Wings", artista: "Soaring Dreams", descripcion: "A song about recovery and growth.", duracion: "4:35", url: "https://example.com/broken-wings" },
    { titulo: "Bohemian Rhapsody", artista: "Queen", descripcion: "El clásico épico de rock de Queen.", duracion: "5:55", url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
    { titulo: "Hotel California", artista: "Eagles", descripcion: "Una de las canciones más icónicas de Eagles.", duracion: "6:31", url: "https://www.youtube.com/watch?v=EqPtz5qN7HM" },
    { titulo: "Stairway to Heaven", artista: "Led Zeppelin", descripcion: "Una de las mejores baladas de rock de todos los tiempos.", duracion: "8:02", url: "https://www.youtube.com/watch?v=QkF3oxziUI4" },
    { titulo: "Smells Like Teen Spirit", artista: "Nirvana", descripcion: "Himno del grunge de los 90.", duracion: "4:38", url: "https://www.youtube.com/watch?v=hTWKbfoikeg" },
    { titulo: "Imagine", artista: "John Lennon", descripcion: "Una de las canciones más emblemáticas por la paz.", duracion: "3:32", url: "https://www.youtube.com/watch?v=YkgkThdzX-8" },
    { titulo: "Sweet Child O' Mine", artista: "Guns N' Roses", descripcion: "Clásico de los 80 de Guns N' Roses.", duracion: "5:03", url: "https://www.youtube.com/watch?v=1w7OgIMMRc4" },
    { titulo: "Billie Jean", artista: "Michael Jackson", descripcion: "Uno de los mayores éxitos de Michael Jackson.", duracion: "4:56", url: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y" },
    { titulo: "Shape of You", artista: "Ed Sheeran", descripcion: "Un éxito mundial de Ed Sheeran.", duracion: "4:24", url: "https://www.youtube.com/watch?v=JGwWNGJdvx8" },
    { titulo: "Rolling in the Deep", artista: "Adele", descripcion: "Una de las canciones más potentes de Adele.", duracion: "3:49", url: "https://www.youtube.com/watch?v=rYEDA3JcQqw" },
    { titulo: "Hallelujah", artista: "Leonard Cohen", descripcion: "Una de las canciones más hermosas y emotivas.", duracion: "6:54", url: "https://www.youtube.com/watch?v=ttEMYvpoR-k" },
    { titulo: "Someone Like You", artista: "Adele", descripcion: "La balada desgarradora de Adele.", duracion: "4:45", url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { titulo: "Thriller", artista: "Michael Jackson", descripcion: "El icónico video musical de Michael Jackson.", duracion: "13:42", url: "https://www.youtube.com/watch?v=sOnqjkJTMaA" },
    { titulo: "Wonderwall", artista: "Oasis", descripcion: "Uno de los mayores éxitos de los 90.", duracion: "4:39", url: "https://www.youtube.com/watch?v=bx1Bh8ZvH84" },
    { titulo: "Take On Me", artista: "A-ha", descripcion: "Famoso por su animado video musical.", duracion: "4:04", url: "https://www.youtube.com/watch?v=djV11Xbc914" },
    { titulo: "Let It Be", artista: "The Beatles", descripcion: "Una de las baladas más famosas de The Beatles.", duracion: "3:54", url: "https://www.youtube.com/watch?v=QDYfEBY9NM4" },
    { titulo: "Hey Jude", artista: "The Beatles", descripcion: "Un clásico inolvidable de The Beatles.", duracion: "7:08", url: "https://www.youtube.com/watch?v=A_MjCqQoLLA" },
    { titulo: "Blinding Lights", artista: "The Weeknd", descripcion: "Uno de los mayores éxitos de The Weeknd.", duracion: "3:22", url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
    { titulo: "Uptown Funk", artista: "Mark Ronson ft. Bruno Mars", descripcion: "Uno de los mayores éxitos de los últimos tiempos.", duracion: "4:31", url: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
    { titulo: "Despacito", artista: "Luis Fonsi ft. Daddy Yankee", descripcion: "El fenómeno mundial de la música latina.", duracion: "4:42", url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk" },
    { titulo: "Bad Guy", artista: "Billie Eilish", descripcion: "Un gran éxito de Billie Eilish.", duracion: "3:14", url: "https://www.youtube.com/watch?v=DyDfgMOUjCI" },
    { titulo: "Old Town Road", artista: "Lil Nas X ft. Billy Ray Cyrus", descripcion: "Una mezcla de géneros que conquistó al mundo.", duracion: "2:37", url: "https://www.youtube.com/watch?v=r7qovpFAGrQ" },
    { titulo: "Believer", artista: "Imagine Dragons", descripcion: "Un poderoso éxito de Imagine Dragons.", duracion: "3:37", url: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
    { titulo: "Radioactive", artista: "Imagine Dragons", descripcion: "Otro gran éxito de la banda Imagine Dragons.", duracion: "3:06", url: "https://www.youtube.com/watch?v=ktvTqknDobU" },
    { titulo: "Senorita", artista: "Shawn Mendes, Camila Cabello", descripcion: "Una sensual colaboración entre Shawn y Camila.", duracion: "3:25", url: "https://www.youtube.com/watch?v=Pkh8UtuejGw" },
    { titulo: "Perfect", artista: "Ed Sheeran", descripcion: "Una de las baladas más románticas de Ed Sheeran.", duracion: "4:40", url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" },
    { titulo: "Sorry", artista: "Justin Bieber", descripcion: "Un éxito bailable de Justin Bieber.", duracion: "3:26", url: "https://www.youtube.com/watch?v=fRh_vgS2dFE" },
    { titulo: "Toxic", artista: "Britney Spears", descripcion: "Uno de los mayores éxitos pop de Britney Spears.", duracion: "3:32", url: "https://www.youtube.com/watch?v=LOZuxwVk7TU" },
    { titulo: "Don't Stop Believin'", artista: "Journey", descripcion: "Una de las canciones más icónicas del rock.", duracion: "4:11", url: "https://www.youtube.com/watch?v=1k8craCGpgs" },
    { titulo: "Livin' on a Prayer", artista: "Bon Jovi", descripcion: "El himno rock de los 80.", duracion: "4:09", url: "https://www.youtube.com/watch?v=lDK9QqIzhwk" },
    { titulo: "Seven Nation Army", artista: "The White Stripes", descripcion: "Una de las canciones más reconocidas del rock moderno.", duracion: "3:51", url: "https://www.youtube.com/watch?v=0J2QdDbelmY" },
    { titulo: "Roxanne", artista: "The Police", descripcion: "Un clásico del rock de The Police.", duracion: "3:11", url: "https://www.youtube.com/watch?v=3T1c7GkzRQQ" },
    { titulo: "Africa", artista: "Toto", descripcion: "Un himno retro que ha vuelto a popularidad.", duracion: "4:56", url: "https://www.youtube.com/watch?v=FTQbiNvZqaY" },
    { titulo: "I Will Always Love You", artista: "Whitney Houston", descripcion: "Una de las baladas más poderosas de todos los tiempos.", duracion: "4:35", url: "https://www.youtube.com/watch?v=3JWTaaS7LdU" },
    { titulo: "Shallow", artista: "Lady Gaga, Bradley Cooper", descripcion: "El éxito de la película A Star is Born.", duracion: "3:37", url: "https://www.youtube.com/watch?v=bo_efYhYU2A" },
    { titulo: "Lose Yourself", artista: "Eminem", descripcion: "Uno de los mayores éxitos del rap.", duracion: "5:26", url: "https://www.youtube.com/watch?v=_Yhyp-_hX2s" },
    { titulo: "Happy", artista: "Pharrell Williams", descripcion: "El alegre hit de Pharrell Williams.", duracion: "4:00", url: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
    { titulo: "Stayin' Alive", artista: "Bee Gees", descripcion: "Un himno de la era disco.", duracion: "4:10", url: "https://www.youtube.com/watch?v=fNFzfwLM72c" },
    { titulo: "I Want to Break Free", artista: "Queen", descripcion: "Uno de los éxitos más populares de Queen.", duracion: "4:31", url: "https://www.youtube.com/watch?v=f4Mc-NYPHaQ" },
    { titulo: "We Will Rock You", artista: "Queen", descripcion: "Un himno del rock que nunca pasa de moda.", duracion: "2:02", url: "https://www.youtube.com/watch?v=-tJYN-eG1zk" },
    { titulo: "We Are the Champions", artista: "Queen", descripcion: "Otra de las grandes canciones de Queen.", duracion: "3:11", url: "https://www.youtube.com/watch?v=04854XqcfCY" },
    { titulo: "Let It Go", artista: "Idina Menzel (Frozen)", descripcion: "La famosa canción de la película Frozen.", duracion: "3:44", url: "https://www.youtube.com/watch?v=L0MK7qz13bU" },
    { titulo: "Skyfall", artista: "Adele", descripcion: "La canción principal de la película de James Bond.", duracion: "4:46", url: "https://www.youtube.com/watch?v=DeumyOzKqgI" },
    { titulo: "Gangnam Style", artista: "PSY", descripcion: "El fenómeno viral del K-pop.", duracion: "4:13", url: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
    { titulo: "Poker Face", artista: "Lady Gaga", descripcion: "Uno de los mayores éxitos de Lady Gaga.", duracion: "3:37", url: "https://www.youtube.com/watch?v=bESGLojNYSo" },
    { titulo: "In the End", artista: "Linkin Park", descripcion: "Uno de los éxitos más conocidos de Linkin Park.", duracion: "3:36", url: "https://www.youtube.com/watch?v=eVTXPUF4Oz4" },
    { titulo: "Time", artista: "Pink Floyd", descripcion: "Una canción que habla sobre el paso del tiempo.", duracion: "6:53", url: "https://www.youtube.com/watch?v=JwYX52BP2Sk" },
    { titulo: "Sultans of Swing", artista: "Dire Straits", descripcion: "Uno de los mejores solos de guitarra del rock.", duracion: "5:49", url: "https://www.youtube.com/watch?v=8Pa9x9fZBtY" },
    { titulo: "Yellow", artista: "Coldplay", descripcion: "Una de las canciones más emotivas de Coldplay.", duracion: "4:32", url: "https://www.youtube.com/watch?v=yKNxeF4KMsY" },
    { titulo: "Clocks", artista: "Coldplay", descripcion: "Uno de los mayores éxitos de Coldplay.", duracion: "4:16", url: "https://www.youtube.com/watch?v=d020hcWA_Wg" },
    { titulo: "Fix You", artista: "Coldplay", descripcion: "Una balada poderosa de la banda británica.", duracion: "4:56", url: "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
    { titulo: "With or Without You", artista: "U2", descripcion: "Un clásico de U2.", duracion: "4:56", url: "https://www.youtube.com/watch?v=XmSdTa9kaiQ" },
    { titulo: "I Still Haven't Found What I'm Looking For", artista: "U2", descripcion: "Otro éxito icónico de U2.", duracion: "4:37", url: "https://www.youtube.com/watch?v=e3-5YC_oHjE" },
    { titulo: "Where the Streets Have No Name", artista: "U2", descripcion: "Una de las canciones más épicas de U2.", duracion: "5:37", url: "https://www.youtube.com/watch?v=GzZWSrr5wFI" },
    { titulo: "Enter Sandman", artista: "Metallica", descripcion: "El himno del heavy metal de Metallica.", duracion: "5:32", url: "https://www.youtube.com/watch?v=CD-E-LDc384" },
    { titulo: "Nothing Else Matters", artista: "Metallica", descripcion: "Una balada del heavy metal.", duracion: "6:24", url: "https://www.youtube.com/watch?v=tAGnKpE4NCI" },
    { titulo: "Back in Black", artista: "AC/DC", descripcion: "Uno de los mayores éxitos del rock.", duracion: "4:15", url: "https://www.youtube.com/watch?v=pAgnJDJN4VA" },
    { titulo: "Thunderstruck", artista: "AC/DC", descripcion: "Una de las canciones más energéticas de AC/DC.", duracion: "4:53", url: "https://www.youtube.com/watch?v=v2AC41dglnM" },
    { titulo: "Paint It Black", artista: "The Rolling Stones", descripcion: "Un clásico de los Rolling Stones.", duracion: "3:47", url: "https://www.youtube.com/watch?v=O4irXQhgMqg" },
    { titulo: "Sympathy for the Devil", artista: "The Rolling Stones", descripcion: "Una de las canciones más controvertidas de la banda.", duracion: "6:24", url: "https://www.youtube.com/watch?v=GgnClrx8N2k" },
    { titulo: "Start Me Up", artista: "The Rolling Stones", descripcion: "Uno de los mayores éxitos de los Stones.", duracion: "3:33", url: "https://www.youtube.com/watch?v=SGyOaCXr8Lw" },
    { titulo: "I Can't Get No Satisfaction", artista: "The Rolling Stones", descripcion: "El icónico himno del rock de los 60.", duracion: "3:47", url: "https://www.youtube.com/watch?v=nrIPxlFzDi0" },
    { titulo: "Like a Rolling Stone", artista: "Bob Dylan", descripcion: "Una de las canciones más influyentes de Bob Dylan.", duracion: "6:13", url: "https://www.youtube.com/watch?v=IwOfCgkyEj0" },
    { titulo: "Knockin' on Heaven's Door", artista: "Bob Dylan", descripcion: "Otro clásico de Bob Dylan.", duracion: "2:32", url: "https://www.youtube.com/watch?v=rsQtlAUs1dA" },
    { titulo: "The Times They Are a-Changin'", artista: "Bob Dylan", descripcion: "Una canción de cambio social.", duracion: "3:13", url: "https://www.youtube.com/watch?v=e7qQ6_RV4VQ" },
    { titulo: "Jailhouse Rock", artista: "Elvis Presley", descripcion: "El icónico rock de Elvis Presley.", duracion: "2:37", url: "https://www.youtube.com/watch?v=gj0Rz-uP4Mk" },
    { titulo: "Can't Help Falling in Love", artista: "Elvis Presley", descripcion: "Una de las baladas más románticas de Elvis.", duracion: "3:01", url: "https://www.youtube.com/watch?v=vGJTaP6anOU" },
    { titulo: "Suspicious Minds", artista: "Elvis Presley", descripcion: "Un éxito de los 60 de Elvis Presley.", duracion: "4:23", url: "https://www.youtube.com/watch?v=SBmAPYkPeYU" },
    { titulo: "Hound Dog", artista: "Elvis Presley", descripcion: "Un clásico de los primeros días del rock and roll.", duracion: "2:16", url: "https://www.youtube.com/watch?v=lzQ8GDBA8Is" },
    { titulo: "Heartbreak Hotel", artista: "Elvis Presley", descripcion: "Uno de los primeros éxitos de Elvis.", duracion: "2:17", url: "https://www.youtube.com/watch?v=e9BLw4W5KU8" },
    { titulo: "Riders on the Storm", artista: "The Doors", descripcion: "Un éxito psicodélico de The Doors.", duracion: "7:09", url: "https://www.youtube.com/watch?v=lS-af9Q-zvQ" },
    { titulo: "Light My Fire", artista: "The Doors", descripcion: "Otro de los éxitos de The Doors.", duracion: "7:07", url: "https://www.youtube.com/watch?v=deB_u-to-IE" },
    { titulo: "Break on Through", artista: "The Doors", descripcion: "Un himno del rock psicodélico.", duracion: "2:29", url: "https://www.youtube.com/watch?v=-r679Hhs9Zs" },
    { titulo: "Come As You Are", artista: "Nirvana", descripcion: "Uno de los mayores éxitos de Nirvana.", duracion: "3:39", url: "https://www.youtube.com/watch?v=vabnZ9-ex7o" },
    { titulo: "Lithium", artista: "Nirvana", descripcion: "Una de las canciones más famosas del grunge.", duracion: "4:17", url: "https://www.youtube.com/watch?v=pkcJEvMcnEg" },
    { titulo: "Heart-Shaped Box", artista: "Nirvana", descripcion: "Uno de los últimos éxitos de la banda.", duracion: "4:41", url: "https://www.youtube.com/watch?v=n6P0SitRwy8" },
    { titulo: "Born to Run", artista: "Bruce Springsteen", descripcion: "Uno de los himnos del rock estadounidense.", duracion: "4:31", url: "https://www.youtube.com/watch?v=IxuThNgl3YA" },
    { titulo: "Dancing in the Dark", artista: "Bruce Springsteen", descripcion: "Uno de los éxitos más populares de Springsteen.", duracion: "3:59", url: "https://www.youtube.com/watch?v=129kuDCQtHs" },
    { titulo: "Born in the USA", artista: "Bruce Springsteen", descripcion: "El icónico himno patriótico de Bruce Springsteen.", duracion: "4:39", url: "https://www.youtube.com/watch?v=lZD4ezDbbu4" },
    { titulo: "The River", artista: "Bruce Springsteen", descripcion: "Una de las baladas más emotivas de Springsteen.", duracion: "5:01", url: "https://www.youtube.com/watch?v=nAB4vOkL6cE" },
    { titulo: "American Pie", artista: "Don McLean", descripcion: "Una de las canciones más épicas de la música popular.", duracion: "8:33", url: "https://www.youtube.com/watch?v=iX_TFkut1PM" },
    { titulo: "Vincent", artista: "Don McLean", descripcion: "Una balada inspirada en Vincent van Gogh.", duracion: "3:58", url: "https://www.youtube.com/watch?v=dipFMJckZOM" },
    { titulo: "Hallelujah", artista: "Jeff Buckley", descripcion: "Una versión icónica del clásico de Leonard Cohen.", duracion: "6:34", url: "https://www.youtube.com/watch?v=y8AWFf7EAc4" },
    { titulo: "Free Fallin'", artista: "Tom Petty", descripcion: "Uno de los mayores éxitos de Tom Petty.", duracion: "4:16", url: "https://www.youtube.com/watch?v=1lWJXDG2i0A" },
    { titulo: "Learning to Fly", artista: "Tom Petty", descripcion: "Un clásico del rock de Tom Petty.", duracion: "4:02", url: "https://www.youtube.com/watch?v=s5BJXwNeKsQ" },
    { titulo: "I Won't Back Down", artista: "Tom Petty", descripcion: "Un himno de resiliencia de Tom Petty.", duracion: "2:58", url: "https://www.youtube.com/watch?v=nvlTJrNJ5lA" }
];

*/
/*
const videoData = [
    {
        titulo: 'Bad Guy',
        artista: 'Billie Eilish',
        descripcion: 'Video musical de la canción "Bad Guy" de Billie Eilish.',
        duracion: '3:26',
        url: 'https://www.youtube.com/watch?v=DyDfgMOUjCI',
        img: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da840d24cffd620c5ca5bed05af5'
    },
    {
        titulo: 'Gangnam Style',
        artista: 'PSY',
        descripcion: 'Video musical de la canción "Gangnam Style" de PSY.',
        duracion: '4:13',
        url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
        img: 'https://i.scdn.co/image/ab67616d0000b2736cfc57e5358c5e39e79bccbd'
    },
    {
        titulo: 'Shape of You',
        artista: 'Ed Sheeran',
        descripcion: 'Video musical de la canción "Shape of You" de Ed Sheeran.',
        duracion: '4:24',
        url: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
        img: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png'
    },
    {
        titulo: 'Lean On',
        artista: 'Major Lazer & DJ Snake (feat. MØ)',
        descripcion: 'Video musical de la cancion "Lean On" de Major Lazer & DJ Snake con MØ.',
        duracion: '2:59',
        url: 'https://www.youtube.com/watch?v=YqeW9_5kURI',
        img: 'https://i.scdn.co/image/ab67616d0000b273ee9a0c218034140fec55362ag'
    },
    {
        titulo: 'Hello',
        artista: 'Adele',
        descripcion: 'Video musical de la canción "Hello" de Adele.',
        duracion: '6:07',
        url: 'https://www.youtube.com/watch?v=YQHsXMglC9A',
        img: 'https://i.scdn.co/image/ab67616d0000b27323d302c1290685258a400ad0'
    },
    {
        titulo: 'Bohemian Rhapsody',
        artista: 'Queen',
        descripcion: 'Video musical de la canción "Bohemian Rhapsody" de Queen.',
        duracion: '6:00',
        url: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
        img: 'https://i.scdn.co/image/ab67616d0000b27328581cfe196c266c132a9d62'
    },
    {
        titulo: 'Uptown Funk',
        artista: 'Mark Ronson ft. Bruno Mars',
        descripcion: 'Video musical de la canción "Uptown Funk" de Mark Ronson y Bruno Mars.',
        duracion: '4:31',
        url: 'https://www.youtube.com/watch?v=OPf0YbXqDm0',
        img: 'https://i.scdn.co/image/ab67616d0000b273146f0228683dc97769498290'
    },
    {
        titulo: 'Despacito',
        artista: 'Luis Fonsi ft. Daddy Yankee',
        descripcion: 'Video musical de la canción "Despacito" de Luis Fonsi y Daddy Yankee.',
        duracion: '4:42',
        url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
        img: 'https://i.scdn.co/image/ab67616d0000b273a5971936e3b8d91f8b616b17'
    },
    {
        titulo: 'See You Again',
        artista: 'Wiz Khalifa ft. Charlie Puth',
        descripcion: 'Video musical de la canción "See You Again" de Wiz Khalifa y Charlie Puth.',
        duracion: '3:58',
        url: 'https://www.youtube.com/watch?v=RgKAFK5djSk',
        img: 'https://i.scdn.co/image/ab67616d0000b27375c9daf36578bdf30645492f'
    },
    {
        titulo: 'Roar',
        artista: 'Katy Perry',
        descripcion: 'Video musical de la canción "Roar" de Katy Perry.',
        duracion: '4:30',
        url: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
        img: 'https://i.scdn.co/image/ab67616d0000b27371c06d9d1bb7309f4128a7bf'
    },
    {
        titulo: 'Bailando',
        artista: 'Enrique Iglesias ft. Gente de Zona y Descemer Bueno',
        descripcion: 'Video musical de la canción "Bailando" de Enrique Iglesias con Gente de Zona y Descemer Bueno.',
        duracion: '4:47',
        url: 'https://www.youtube.com/watch?v=NUsoVlDFqZg',
        img: 'https://i.scdn.co/image/ab67616d00001e020acb58771a9c899437cd20b8'
    },
    {
        titulo: 'Sugar',
        artista: 'Maroon 5',
        descripcion: 'Video musical de la canción "Sugar" de Maroon 5.',
        duracion: '5:02',
        url: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
        img: 'https://i.scdn.co/image/ab67616d0000b2735430b6be862e01be82a50bc8'
    },
    {
        titulo: 'Waka Waka (This Time for Africa)',
        artista: 'Shakira',
        descripcion: 'Video musical de la canción "Waka Waka (This Time for Africa)" de Shakira.',
        duracion: '3:31',
        url: 'https://www.youtube.com/watch?v=pRpeEdMmmQ0',
        img: 'https://i.scdn.co/image/ab67616d00001e0209dddea4db9de5964c668c96'
    }
];
*/
/*
const videosModel=require('./models/videos-model.js');

async function insertarCanciones(){
    try{
        await videosModel.insertMany(videoData);
    }catch(e){
        console.log(e);
    }
    console.log("insertados con exito");
}

insertarCanciones();
*/