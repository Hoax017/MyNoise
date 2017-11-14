var list = document.querySelectorAll('.ps-container');
for (var i = 0; i < list.length; i++) {
	new PerfectScrollbar(list[i]);
}

angular.module("app", [])
	.controller("AppController", AppController)
	.controller("ExternalPlayerControlsController", ExternalPlayerControlsController)
	.controller("PlaylistModifyController", PlaylistModifyController)
	.controller("TopAlbumsController", TopAlbumsController)
	.controller("ContextMenuController", ContextMenuController);

function AppController($scope) {
	function getSetting(index) {
		return vars.settings[index];
	}

	$scope.utils = {
		getSetting: getSetting
	};

};

function ExternalPlayerControlsController($scope) {
};

function PlaylistModifyController($scope) {
};

function ContextMenuController($scope) {
};

function TopAlbumsController($scope) {
	$scope.topAlbums = [
    {
        "id": 442922,
        "name": "÷ (Deluxe)",
        "release_date": "2017-03-03",
        "image": "https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f",
        "artist_id": 1869,
        "spotify_popularity": 100,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 1869,
            "name": "Ed Sheeran",
            "spotify_followers": 12956992,
            "spotify_popularity": 99,
            "image_small": "https://i.scdn.co/image/f39b705ba6b1070c77bce4e9c21dff5bac96f21c",
            "image_large": "https://i.scdn.co/image/f0370da3f52161b07a461b4be9a64d0adbfb498d",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 06:09:20",
            "bio": "{\"bio\":\"Edward Christopher \\\"Ed\\\" Sheeran (born 17 February 1991) is an English singer-songwriter, musician, and occasional actor. He was born in Hebden Bridge in Yorkshire and raised in Framlingham, Suffolk. He dropped out of school at 16, and moved to London the following year, in 2008, to pursue a career in music. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project, which caught the attention of Elton John and Jamie Foxx. After signing with Asylum Records, his debut album, + (read as \\\"plus\\\"), was released on 9 September 2011 and has since been certified six-times platinum in the UK. The album contains the single \\\"The A Team\\\", which earned him the Ivor Novello Award for Best Song Musically and Lyrically. In 2012, Sheeran won the Brit Awards for Best British Male Solo Artist and British Breakthrough Act.\\nSheeran's popularity abroad began in 2012. In the US, he made a guest appearance on Taylor Swift's fourth studio album, Red. \\\"The A Team\\\" was nominated for Song of the Year at the 2013 Grammy Awards, where he performed the song with Elton John. He spent much of 2013 opening for Swift's The Red Tour in North America dates. In late 2013, he performed three sold-out shows at New York's Madison Square Garden as a headline act.\\nHis second studio album, x (read as \\\"multiply\\\"), was released on 23 June 2014. It peaked at number one in the UK and the US. In 2015, x won the Brit Award for Album of the Year, and he received the Ivor Novello Award for Songwriter of the Year. His single from x, \\\"Thinking Out Loud\\\", earned him two Grammy Awards at the 2016 ceremony: Song of the Year and Best Pop Solo Performance. As part of his world tour, Sheeran played three sold-out concerts at London's Wembley Stadium in July 2015, his biggest solo shows to date.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/f\\/f8\\/12_-_Ed_Sheeran.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/5\\/55\\/Ed_Sheeran_2013.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/5\\/5a\\/Ed_Sheeran_at_2012_Frequency_Festival_in_Austria_%287852625324%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/1\\/16\\/Ed_Sheeran_at_Academy_1.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2250395,
                "name": "Eraser",
                "album_name": "÷ (Deluxe)",
                "number": 1,
                "duration": 227426,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250396,
                "name": "Castle on the Hill",
                "album_name": "÷ (Deluxe)",
                "number": 2,
                "duration": 261153,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 442922,
                "temp_id": "ZTelZsvl",
                "url": null
            },
            {
                "id": 2250397,
                "name": "Dive",
                "album_name": "÷ (Deluxe)",
                "number": 3,
                "duration": 238440,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 442922,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2250398,
                "name": "Shape of You",
                "album_name": "÷ (Deluxe)",
                "number": 4,
                "duration": 233712,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 94,
                "album_id": 442922,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2250399,
                "name": "Perfect",
                "album_name": "÷ (Deluxe)",
                "number": 5,
                "duration": 263400,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 97,
                "album_id": 442922,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2250400,
                "name": "Galway Girl",
                "album_name": "÷ (Deluxe)",
                "number": 6,
                "duration": 170826,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 442922,
                "temp_id": "WN6vDIM9",
                "url": null
            },
            {
                "id": 2250401,
                "name": "Happier",
                "album_name": "÷ (Deluxe)",
                "number": 7,
                "duration": 207520,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 86,
                "album_id": 442922,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2250402,
                "name": "New Man",
                "album_name": "÷ (Deluxe)",
                "number": 8,
                "duration": 189280,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250403,
                "name": "Hearts Don't Break Around Here",
                "album_name": "÷ (Deluxe)",
                "number": 9,
                "duration": 248413,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250404,
                "name": "What Do I Know?",
                "album_name": "÷ (Deluxe)",
                "number": 10,
                "duration": 237333,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250405,
                "name": "How Would You Feel (Paean)",
                "album_name": "÷ (Deluxe)",
                "number": 11,
                "duration": 280533,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250406,
                "name": "Supermarket Flowers",
                "album_name": "÷ (Deluxe)",
                "number": 12,
                "duration": 221106,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250407,
                "name": "Barcelona",
                "album_name": "÷ (Deluxe)",
                "number": 13,
                "duration": 191146,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250408,
                "name": "Bibia Be Ye Ye",
                "album_name": "÷ (Deluxe)",
                "number": 14,
                "duration": 176746,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250409,
                "name": "Nancy Mulligan",
                "album_name": "÷ (Deluxe)",
                "number": 15,
                "duration": 179786,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2250410,
                "name": "Save Myself",
                "album_name": "÷ (Deluxe)",
                "number": 16,
                "duration": 247106,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 442922,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 320213,
        "name": "The Very Best Of Kiss",
        "release_date": "2002-01-01",
        "image": "https://i.scdn.co/image/caaaac55e6dba7eb5b26f215fd0ae309e157d53e",
        "artist_id": 1251,
        "spotify_popularity": 98,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 1251,
            "name": "KISS",
            "spotify_followers": 1397786,
            "spotify_popularity": 74,
            "image_small": "https://i.scdn.co/image/8d46c45d14d88f6f73aae1bb0b000f50503b43ac",
            "image_large": "https://i.scdn.co/image/775adbe27db874134b8d2cac20fb0f641732499b",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 12:21:17",
            "bio": "{\"bio\":\"Kiss (often stylized as KISS) is an American hard rock group formed in New York City in January 1973 by Paul Stanley, Gene Simmons, Peter Criss, and Ace Frehley. Well known for its members' face paint and stage outfits, the group rose to prominence in the mid-to-late 1970s with their elaborate live performances, which featured fire breathing, blood-spitting, smoking guitars, shooting rockets, levitating drum kits, and pyrotechnics. The band has gone through several lineup changes, with Stanley and Simmons the only remaining original members. The original and best-known lineup consisted of Stanley (vocals and rhythm guitar), Simmons (vocals and bass guitar), Frehley (lead guitar and vocals), and Criss (drums and vocals).\\nWith their make-up and costumes, they took on the personae of comic book-style characters: The Starchild (Stanley), The Demon (Simmons), The Spaceman or Space Ace (Frehley), and The Catman (Criss). Due to creative differences, both Criss and Frehley had departed the group by 1982.\\nIn 1983, Kiss began performing without makeup and costumes, thinking that it was time to leave the makeup behind. The band accordingly experienced a minor commercial resurgence, and their music videos received regular airplay on MTV. Drummer Eric Carr, who had replaced Criss in 1980, died in 1991 of a rare type of heart cancer and was replaced by Eric Singer. In response to a wave of Kiss nostalgia in the mid-1990s, the band announced a reunion of the original lineup in 1996, which also saw the return of their makeup and stage costumes. The resulting Alive\\/Worldwide Tour was commercially successful. Criss and Frehley have both since left the band again and have been replaced by Singer and Tommy Thayer, respectively.\\nKiss has sold more than 100 million records worldwide, including 25 million RIAA-certified albums. On April 10, 2014, Kiss was inducted into the Rock and Roll Hall of Fame.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/c4\\/KISS_~_MN_State_Fair.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/e\\/ec\\/Kiss_-_Ace_Frehley_%281977%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/5\\/58\\/Kiss_-_Paul_Stanley_-_Destroyer_Tour.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/0\\/0b\\/Kiss_-_Peter_Criss_%281977%29.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 1654616,
                "name": "Strutter",
                "album_name": "The Very Best Of Kiss",
                "number": 1,
                "duration": 190453,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 16,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654617,
                "name": "Deuce",
                "album_name": "The Very Best Of Kiss",
                "number": 2,
                "duration": 184093,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 13,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654618,
                "name": "Got To Choose",
                "album_name": "The Very Best Of Kiss",
                "number": 3,
                "duration": 233786,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 11,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654619,
                "name": "Hotter Than Hell",
                "album_name": "The Very Best Of Kiss",
                "number": 4,
                "duration": 209200,
                "artists": [
                    "KISS"
                ],
                "youtube_id": "wQvzScawmog",
                "spotify_popularity": 17,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654620,
                "name": "C'mon And Love Me",
                "album_name": "The Very Best Of Kiss",
                "number": 5,
                "duration": 176626,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 11,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654621,
                "name": "Rock And Roll All Nite - Live",
                "album_name": "The Very Best Of Kiss",
                "number": 6,
                "duration": 241666,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 14,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654622,
                "name": "Detroit Rock City - Edit",
                "album_name": "The Very Best Of Kiss",
                "number": 7,
                "duration": 216493,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 18,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654623,
                "name": "Shout It Out Loud",
                "album_name": "The Very Best Of Kiss",
                "number": 8,
                "duration": 168120,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 19,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654624,
                "name": "Beth",
                "album_name": "The Very Best Of Kiss",
                "number": 9,
                "duration": 165573,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 14,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654625,
                "name": "I Want You",
                "album_name": "The Very Best Of Kiss",
                "number": 10,
                "duration": 183986,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 11,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654626,
                "name": "Calling Dr. Love",
                "album_name": "The Very Best Of Kiss",
                "number": 11,
                "duration": 223453,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 14,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654627,
                "name": "Hard Luck Woman",
                "album_name": "The Very Best Of Kiss",
                "number": 12,
                "duration": 211506,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 15,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654628,
                "name": "I Stole Your Love",
                "album_name": "The Very Best Of Kiss",
                "number": 13,
                "duration": 183186,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 12,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654629,
                "name": "Christine Sixteen",
                "album_name": "The Very Best Of Kiss",
                "number": 14,
                "duration": 191640,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 11,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654630,
                "name": "Love Gun",
                "album_name": "The Very Best Of Kiss",
                "number": 15,
                "duration": 195720,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 15,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654631,
                "name": "New York Groove",
                "album_name": "The Very Best Of Kiss",
                "number": 16,
                "duration": 180986,
                "artists": [
                    "Ace Frehley"
                ],
                "youtube_id": null,
                "spotify_popularity": 27,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654632,
                "name": "I Was Made For Lovin' You",
                "album_name": "The Very Best Of Kiss",
                "number": 17,
                "duration": 268613,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 15,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654633,
                "name": "I Love It Loud",
                "album_name": "The Very Best Of Kiss",
                "number": 18,
                "duration": 254786,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 14,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654634,
                "name": "Lick It Up",
                "album_name": "The Very Best Of Kiss",
                "number": 19,
                "duration": 236000,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 13,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654635,
                "name": "Forever - Single Version",
                "album_name": "The Very Best Of Kiss",
                "number": 20,
                "duration": 229573,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 13,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1654636,
                "name": "God Gave Rock 'N' Roll To You II",
                "album_name": "The Very Best Of Kiss",
                "number": 21,
                "duration": 319626,
                "artists": [
                    "KISS"
                ],
                "youtube_id": null,
                "spotify_popularity": 13,
                "album_id": 320213,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 3920,
        "name": "Spellbound: The Collection",
        "release_date": "2015-01-12",
        "image": "https://i.scdn.co/image/0132b8faed1ad52c3e771d9392583c9f4e04ab7c",
        "artist_id": 6429,
        "spotify_popularity": 98,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 6429,
            "name": "Siouxsie and the Banshees",
            "spotify_followers": 174599,
            "spotify_popularity": 59,
            "image_small": "https://i.scdn.co/image/6565aa6133896a4c77f1b2b9bc9ef7caf55558c0",
            "image_large": "https://i.scdn.co/image/baf868deb6e3944db2717194bbdd9016e48f3de2",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 20:32:54",
            "bio": "{\"bio\":\"Siouxsie and the Banshees were an English rock band formed in London in 1976 by vocalist Siouxsie Sioux and bass guitarist Steven Severin. Initially associated with the English punk rock scene, the band rapidly evolved to create \\\"a form of post-punk discord full of daring rhythmic and sonic experimentation\\\". The Times cited Siouxsie and the Banshees as \\\"one of the most audacious and uncompromising musical adventurers of the post-punk era\\\".\\nWith the release of Juju in 1981, the group also became an important influence on the emerging gothic rock scene. They disbanded in 1996, with Siouxsie and drummer Budgie continuing to record music as the Creatures, a second band they had formed in the early 1980s. In 2004, Siouxsie began a solo career.\\nSiouxsie and the Banshees' work places highly in both musicians' polls and music papers' lists. In 2006, Mojo rated guitarist John McGeoch in their list of \\\"100 Greatest Guitarists of All Time\\\" for his work on \\\"Spellbound\\\".\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/en\\/1\\/1f\\/Siouxsie_and_the_banshees_1981%27s_line-up_with_John_McGeoch.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/en\\/6\\/6f\\/Siouxsie_and_the_banshees_79.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 35457,
                "name": "Hong Kong Garden - Strings Intro",
                "album_name": "Spellbound: The Collection",
                "number": 1,
                "duration": 193040,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 15,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35458,
                "name": "Mirage",
                "album_name": "Spellbound: The Collection",
                "number": 2,
                "duration": 169933,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 12,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35459,
                "name": "Placebo Effect",
                "album_name": "Spellbound: The Collection",
                "number": 3,
                "duration": 277240,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 11,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35460,
                "name": "Happy House",
                "album_name": "Spellbound: The Collection",
                "number": 4,
                "duration": 232946,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 17,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35461,
                "name": "Desert Kisses",
                "album_name": "Spellbound: The Collection",
                "number": 5,
                "duration": 256413,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 10,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35462,
                "name": "Spellbound",
                "album_name": "Spellbound: The Collection",
                "number": 6,
                "duration": 197106,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 15,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35463,
                "name": "Into The Light",
                "album_name": "Spellbound: The Collection",
                "number": 7,
                "duration": 255613,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 11,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35464,
                "name": "Cascade",
                "album_name": "Spellbound: The Collection",
                "number": 8,
                "duration": 265186,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 10,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35465,
                "name": "Tattoo",
                "album_name": "Spellbound: The Collection",
                "number": 9,
                "duration": 209693,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 9,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35466,
                "name": "We Hunger",
                "album_name": "Spellbound: The Collection",
                "number": 10,
                "duration": 211613,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 8,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35467,
                "name": "Cities In Dust - Single Version",
                "album_name": "Spellbound: The Collection",
                "number": 11,
                "duration": 248160,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 13,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35468,
                "name": "Lands End",
                "album_name": "Spellbound: The Collection",
                "number": 12,
                "duration": 373026,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 8,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35469,
                "name": "Shooting Sun",
                "album_name": "Spellbound: The Collection",
                "number": 13,
                "duration": 284786,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 8,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35470,
                "name": "Peek-A-Boo",
                "album_name": "Spellbound: The Collection",
                "number": 14,
                "duration": 192360,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 12,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35471,
                "name": "Turn To Stone",
                "album_name": "Spellbound: The Collection",
                "number": 15,
                "duration": 247093,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 8,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35472,
                "name": "Kiss Them For Me",
                "album_name": "Spellbound: The Collection",
                "number": 16,
                "duration": 277000,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 9,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35473,
                "name": "Drifter",
                "album_name": "Spellbound: The Collection",
                "number": 17,
                "duration": 285760,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 7,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            },
            {
                "id": 35474,
                "name": "Not Forgotten",
                "album_name": "Spellbound: The Collection",
                "number": 18,
                "duration": 283400,
                "artists": [
                    "Siouxsie and the Banshees"
                ],
                "youtube_id": null,
                "spotify_popularity": 7,
                "album_id": 3920,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 569497,
        "name": "17",
        "release_date": "2017-08-25",
        "image": "https://i.scdn.co/image/46bc351f18dbb3dddcf451fa962737c3a2aff0ff",
        "artist_id": 113719,
        "spotify_popularity": 97,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 113719,
            "name": "XXXTENTACION",
            "spotify_followers": 1353363,
            "spotify_popularity": 95,
            "image_small": "https://i.scdn.co/image/160e57020e57b4c29c26306e1d1452b4c82e0c03",
            "image_large": "https://i.scdn.co/image/5832277c0f2f78db0024dfdc871b6aa4c72f80ba",
            "fully_scraped": 0,
            "updated_at": "2017-10-22 14:12:20",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2907681,
                "name": "The Explanation",
                "album_name": "17",
                "number": 1,
                "duration": 50747,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2907939,
                "name": "Jocelyn Flores",
                "album_name": "17",
                "number": 2,
                "duration": 119133,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 96,
                "album_id": 569497,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2907941,
                "name": "Depression & Obsession",
                "album_name": "17",
                "number": 3,
                "duration": 144733,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2907940,
                "name": "Everybody Dies In Their Nightmares",
                "album_name": "17",
                "number": 4,
                "duration": 95466,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2907943,
                "name": "Revenge",
                "album_name": "17",
                "number": 5,
                "duration": 120026,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2907944,
                "name": "Save Me",
                "album_name": "17",
                "number": 6,
                "duration": 163201,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2907945,
                "name": "Dead Inside (Interlude)",
                "album_name": "17",
                "number": 7,
                "duration": 86826,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2905604,
                "name": "Fuck Love (feat. Trippie Redd)",
                "album_name": "17",
                "number": 8,
                "duration": 146520,
                "artists": [
                    "XXXTENTACION",
                    "Trippie Redd"
                ],
                "youtube_id": null,
                "spotify_popularity": 90,
                "album_id": 569497,
                "temp_id": "J4ou4YS1",
                "url": null
            },
            {
                "id": 2907942,
                "name": "Carry On",
                "album_name": "17",
                "number": 9,
                "duration": 129720,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2907946,
                "name": "Orlando",
                "album_name": "17",
                "number": 10,
                "duration": 163840,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2907947,
                "name": "Ayala (Outro)",
                "album_name": "17",
                "number": 11,
                "duration": 99706,
                "artists": [
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 569497,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 443277,
        "name": "American Teen",
        "release_date": "2017-04-27",
        "image": "https://i.scdn.co/image/3f2cc8df9f891830695c00446ce86bd892e60886",
        "artist_id": 62671,
        "spotify_popularity": 97,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 62671,
            "name": "Khalid",
            "spotify_followers": 935199,
            "spotify_popularity": 99,
            "image_small": "https://i.scdn.co/image/7cfdef227dc3e938154c367a279ef995be2b5344",
            "image_large": "https://i.scdn.co/image/7752ce73f4d0720acc6a4c46cb2d2f40f344f834",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 11:47:32",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2252454,
                "name": "American Teen",
                "album_name": "American Teen",
                "number": 1,
                "duration": 250746,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267577,
                "name": "Young Dumb & Broke",
                "album_name": "American Teen",
                "number": 2,
                "duration": 202546,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 96,
                "album_id": 443277,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2267578,
                "name": "Location",
                "album_name": "American Teen",
                "number": 3,
                "duration": 219080,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 90,
                "album_id": 443277,
                "temp_id": "KcJTfNPk",
                "url": null
            },
            {
                "id": 2266128,
                "name": "Another Sad Love Song",
                "album_name": "American Teen",
                "number": 4,
                "duration": 244746,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267579,
                "name": "Saved",
                "album_name": "American Teen",
                "number": 5,
                "duration": 206533,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267580,
                "name": "Coaster",
                "album_name": "American Teen",
                "number": 6,
                "duration": 199120,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267581,
                "name": "8TEEN",
                "album_name": "American Teen",
                "number": 7,
                "duration": 228600,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267582,
                "name": "Let's Go",
                "album_name": "American Teen",
                "number": 8,
                "duration": 204546,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267583,
                "name": "Hopeless",
                "album_name": "American Teen",
                "number": 9,
                "duration": 167640,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267584,
                "name": "Cold Blooded",
                "album_name": "American Teen",
                "number": 10,
                "duration": 207960,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2258166,
                "name": "Winter",
                "album_name": "American Teen",
                "number": 11,
                "duration": 241866,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267585,
                "name": "Therapy",
                "album_name": "American Teen",
                "number": 12,
                "duration": 257959,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267586,
                "name": "Keep Me",
                "album_name": "American Teen",
                "number": 13,
                "duration": 276226,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267587,
                "name": "Shot Down",
                "album_name": "American Teen",
                "number": 14,
                "duration": 207106,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2267588,
                "name": "Angels",
                "album_name": "American Teen",
                "number": 15,
                "duration": 170680,
                "artists": [
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 443277,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 569379,
        "name": "Luv Is Rage 2",
        "release_date": "2017-08-25",
        "image": "https://i.scdn.co/image/ead73f726959b82d78c41d28ca41edfef92b1c87",
        "artist_id": 7355,
        "spotify_popularity": 96,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 7355,
            "name": "Lil Uzi Vert",
            "spotify_followers": 2155682,
            "spotify_popularity": 96,
            "image_small": "https://i.scdn.co/image/622c13394c3cf2ed8197edb6f0121b7f3ce8912f",
            "image_large": "https://i.scdn.co/image/17f68c8464b468546a6b0a717708842a3cc4b79d",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:12:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2921403,
                "name": "Two®",
                "album_name": "Luv Is Rage 2",
                "number": 1,
                "duration": 185276,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2917158,
                "name": "444+222",
                "album_name": "Luv Is Rage 2",
                "number": 2,
                "duration": 247347,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2915288,
                "name": "Sauce It Up",
                "album_name": "Luv Is Rage 2",
                "number": 3,
                "duration": 207038,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 86,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2918856,
                "name": "No Sleep Leak",
                "album_name": "Luv Is Rage 2",
                "number": 4,
                "duration": 189229,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910505,
                "name": "The Way Life Goes",
                "album_name": "Luv Is Rage 2",
                "number": 5,
                "duration": 221746,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 92,
                "album_id": 569379,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2921404,
                "name": "For Real",
                "album_name": "Luv Is Rage 2",
                "number": 6,
                "duration": 177048,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2921405,
                "name": "Feelings Mutual",
                "album_name": "Luv Is Rage 2",
                "number": 7,
                "duration": 233645,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2921406,
                "name": "Neon Guts (feat. Pharrell Williams)",
                "album_name": "Luv Is Rage 2",
                "number": 8,
                "duration": 258789,
                "artists": [
                    "Lil Uzi Vert",
                    "Pharrell Williams"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2915227,
                "name": "Early 20 Rager",
                "album_name": "Luv Is Rage 2",
                "number": 9,
                "duration": 274880,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2921407,
                "name": "UnFazed (feat. The Weeknd)",
                "album_name": "Luv Is Rage 2",
                "number": 10,
                "duration": 190355,
                "artists": [
                    "Lil Uzi Vert",
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2921408,
                "name": "Pretty Mami",
                "album_name": "Luv Is Rage 2",
                "number": 11,
                "duration": 264124,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910127,
                "name": "How To Talk",
                "album_name": "Luv Is Rage 2",
                "number": 12,
                "duration": 201544,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2921409,
                "name": "X",
                "album_name": "Luv Is Rage 2",
                "number": 13,
                "duration": 173797,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2921410,
                "name": "Malfunction",
                "album_name": "Luv Is Rage 2",
                "number": 14,
                "duration": 199211,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2905390,
                "name": "Dark Queen",
                "album_name": "Luv Is Rage 2",
                "number": 15,
                "duration": 173419,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 569379,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912061,
                "name": "XO TOUR Llif3",
                "album_name": "Luv Is Rage 2",
                "number": 16,
                "duration": 182706,
                "artists": [
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 90,
                "album_id": 569379,
                "temp_id": "ofR2IdGL",
                "url": null
            }
        ]
    },
    {
        "id": 165887,
        "name": "The Ultimate Collection (2009 Remaster)",
        "release_date": "2016-10-28",
        "image": "https://i.scdn.co/image/f9134431f606b08f095fab962133b8feeaf2bcf0",
        "artist_id": 1252,
        "spotify_popularity": 95,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 1252,
            "name": "Black Sabbath",
            "spotify_followers": 1676766,
            "spotify_popularity": 77,
            "image_small": "https://i.scdn.co/image/6f37a1025ba3f8e2dbb3b15cf30016ff728ba51d",
            "image_large": "https://i.scdn.co/image/5931700f9515dd6587230130beb615e0549e47dc",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 03:36:21",
            "bio": "{\"bio\":\"Black Sabbath are an English rock band, formed in Birmingham in 1968, by guitarist and main songwriter Tony Iommi, bassist and main lyricist Geezer Butler, singer Ozzy Osbourne, and drummer Bill Ward. The band have since experienced multiple line-up changes, with guitarist Iommi being the only constant presence in the band through the years. Originally formed as a blues rock band, the group soon adopted the Black Sabbath moniker and began incorporating occult themes with horror-inspired lyrics and tuned-down guitars. Despite an association with these two themes, Black Sabbath also composed songs dealing with social instability, political corruption, the dangers of drug abuse and apocalyptic prophecies of the horrors of war.\\nOsbourne's regular abuse of alcohol and other drugs led to his dismissal from the band in 1979. He was replaced by former Rainbow vocalist Ronnie James Dio. Following two albums with Dio, Black Sabbath endured countless personnel changes in the 1980s and 1990s that included vocalists Ian Gillan, Glenn Hughes, Ray Gillen and Tony Martin, as well as several drummers and bassists. In 1992, Iommi and Butler rejoined Dio and drummer Vinny Appice to record Dehumanizer. The original line-up reunited with Osbourne in 1997 and released a live album Reunion. Black Sabbath's 19th studio album, 13, which features all of the original members but Ward, was released in June 2013.\\nBlack Sabbath are often cited as pioneers of heavy metal music. The band helped define the genre with releases such as Black Sabbath (1970), Paranoid (1970) and Master of Reality (1971). They were ranked by MTV as the \\\"Greatest Metal Band\\\" of all time, and placed second in VH1's \\\"100 Greatest Artists of Hard Rock\\\" list. Rolling Stone magazine ranked them number 85 in their \\\"100 Greatest Artists of All Time\\\". They have sold over 70 million records worldwide. Black Sabbath were inducted into the UK Music Hall of Fame in 2005 and the Rock and Roll Hall of Fame in 2006. They have also won two Grammy Awards for Best Metal Performance.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/1\\/1f\\/BlackSabbath19720012200.sized.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/0\\/04\\/Black_Sabbath_1999-12-16_Stuttgart.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/c3\\/Black_Sabbath_Barclays_Center_March_2014.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/4\\/4e\\/Black_Sabbath_Cardiff_1981.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 902295,
                "name": "Paranoid - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 1,
                "duration": 166693,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "hkXHsK4AQPs",
                "spotify_popularity": 1,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902296,
                "name": "Never Say Die - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 2,
                "duration": 230053,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 1,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902297,
                "name": "Iron Man - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 3,
                "duration": 353613,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 1,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902298,
                "name": "Black Sabbath - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 4,
                "duration": 377280,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "0lVdMbUx1_k",
                "spotify_popularity": 1,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902299,
                "name": "Children of the Grave - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 5,
                "duration": 314720,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 1,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902300,
                "name": "Jack the Stripper/Fairies Wear Boots - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 6,
                "duration": 374320,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902301,
                "name": "Changes - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 7,
                "duration": 282493,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902302,
                "name": "Rat Salad - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 8,
                "duration": 148626,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "B27rl5pPkhg",
                "spotify_popularity": 20,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902303,
                "name": "Sweet Leaf - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 9,
                "duration": 303253,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "au5tcEDZOaY",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902304,
                "name": "War Pigs/Luke's Wall - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 10,
                "duration": 473786,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902305,
                "name": "Sabbath Bloody Sabbath - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 11,
                "duration": 347626,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902306,
                "name": "Hole in the Sky - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 12,
                "duration": 240226,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "Q-PJDim8CsY",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902307,
                "name": "Symptom of the Universe - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 13,
                "duration": 388400,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "GhZ4t7pRyjE",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902308,
                "name": "Spiral Architect - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 14,
                "duration": 329306,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "lkx7SQ4Wuh0",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902309,
                "name": "Rock 'n' Roll Doctor - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 15,
                "duration": 206893,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902310,
                "name": "Dirty Women - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 16,
                "duration": 428520,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "6EBk3czZXlQ",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902311,
                "name": "Evil Woman (Don't Play Your Games With Me) - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 17,
                "duration": 202013,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902312,
                "name": "A Hard Road - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 18,
                "duration": 364586,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902313,
                "name": "Lord of This World - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 19,
                "duration": 322906,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902314,
                "name": "Into the Void - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 20,
                "duration": 372600,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "Hkrt-4doeq4",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902315,
                "name": "Behind the Wall of Sleep - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 21,
                "duration": 218400,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "SrAfrV-sCvM",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902316,
                "name": "Snowblind - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 22,
                "duration": 326333,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902317,
                "name": "Tomorrow's Dream - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 23,
                "duration": 188773,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902318,
                "name": "The Wizard - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 24,
                "duration": 260640,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "_skzFSKE2Oc",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902319,
                "name": "N.I.B. - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 25,
                "duration": 364493,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "MiY2JsGXrtM",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902320,
                "name": "Electric Funeral - 2009 Remastered",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 26,
                "duration": 288600,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "VTnf_KYyrBQ",
                "spotify_popularity": 16,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902321,
                "name": "Embryo - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 27,
                "duration": 27266,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "VowNxKK8LmM",
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902322,
                "name": "Killing Yourself to Live - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 28,
                "duration": 342440,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902323,
                "name": "Am I Going Insane? (Radio) - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 29,
                "duration": 256213,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902324,
                "name": "Wicked World - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 30,
                "duration": 283146,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            },
            {
                "id": 902325,
                "name": "It's Alright - 2009 Remastered Version",
                "album_name": "The Ultimate Collection (2009 Remaster)",
                "number": 31,
                "duration": 239293,
                "artists": [
                    "Black Sabbath"
                ],
                "youtube_id": "Pk66CpMZti8",
                "spotify_popularity": 14,
                "album_id": 165887,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 580808,
        "name": "GEMINI",
        "release_date": "2017-09-22",
        "image": "https://i.scdn.co/image/a86102b9d497c93537c718a4a532dad346a6ff98",
        "artist_id": 56973,
        "spotify_popularity": 93,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 56973,
            "name": "Macklemore",
            "spotify_followers": 651251,
            "spotify_popularity": 90,
            "image_small": "https://i.scdn.co/image/04cbb38931436ebef28c5be46007d8c7a37b799c",
            "image_large": "https://i.scdn.co/image/548c808ed49b59bf73155e0e4de76f74406a778e",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 19:27:25",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2963194,
                "name": "Ain't Gonna Die Tonight (feat. Eric Nally)",
                "album_name": "GEMINI",
                "number": 1,
                "duration": 214720,
                "artists": [
                    "Macklemore",
                    "Eric Nally"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963195,
                "name": "Glorious (feat. Skylar Grey)",
                "album_name": "GEMINI",
                "number": 2,
                "duration": 220454,
                "artists": [
                    "Macklemore",
                    "Skylar Grey"
                ],
                "youtube_id": null,
                "spotify_popularity": 94,
                "album_id": 580808,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2963196,
                "name": "Marmalade (feat. Lil Yachty)",
                "album_name": "GEMINI",
                "number": 3,
                "duration": 261614,
                "artists": [
                    "Macklemore",
                    "Lil Yachty"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963197,
                "name": "Willy Wonka (feat. Offset)",
                "album_name": "GEMINI",
                "number": 4,
                "duration": 222773,
                "artists": [
                    "Macklemore",
                    "Offset"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963198,
                "name": "Intentions (feat. Dan Caplen)",
                "album_name": "GEMINI",
                "number": 5,
                "duration": 230506,
                "artists": [
                    "Macklemore",
                    "Dan Caplen"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963199,
                "name": "Good Old Days (feat. Kesha)",
                "album_name": "GEMINI",
                "number": 6,
                "duration": 240506,
                "artists": [
                    "Macklemore",
                    "Kesha"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963200,
                "name": "Levitate (feat. Otieno Terry)",
                "album_name": "GEMINI",
                "number": 7,
                "duration": 212773,
                "artists": [
                    "Macklemore",
                    "Otieno Terry"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963201,
                "name": "Firebreather (feat. Reignwolf)",
                "album_name": "GEMINI",
                "number": 8,
                "duration": 205533,
                "artists": [
                    "Macklemore",
                    "Reignwolf"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963202,
                "name": "How to Play the Flute (feat. King Draino)",
                "album_name": "GEMINI",
                "number": 9,
                "duration": 208720,
                "artists": [
                    "Macklemore",
                    "King Draino"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963203,
                "name": "Ten Million",
                "album_name": "GEMINI",
                "number": 10,
                "duration": 179506,
                "artists": [
                    "Macklemore"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963204,
                "name": "Over It (feat. Donna Missal)",
                "album_name": "GEMINI",
                "number": 11,
                "duration": 218560,
                "artists": [
                    "Macklemore",
                    "Donna Missal"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963205,
                "name": "Zara (feat. Abir)",
                "album_name": "GEMINI",
                "number": 12,
                "duration": 217280,
                "artists": [
                    "Macklemore",
                    "Abir"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963206,
                "name": "Corner Store (feat. Dave B & Travis Thompson)",
                "album_name": "GEMINI",
                "number": 13,
                "duration": 273520,
                "artists": [
                    "Macklemore",
                    "Dave B.",
                    "Travis Thompson"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963207,
                "name": "Miracle (feat. Dan Caplen)",
                "album_name": "GEMINI",
                "number": 14,
                "duration": 224640,
                "artists": [
                    "Macklemore",
                    "Dan Caplen"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963208,
                "name": "Church (feat. Xperience)",
                "album_name": "GEMINI",
                "number": 15,
                "duration": 250466,
                "artists": [
                    "Macklemore",
                    "Xperience"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2963209,
                "name": "Excavate (feat. Saint Claire)",
                "album_name": "GEMINI",
                "number": 16,
                "duration": 236440,
                "artists": [
                    "Macklemore",
                    "Saint Claire"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 580808,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 522990,
        "name": "Dua Lipa (Deluxe)",
        "release_date": "2017-06-02",
        "image": "https://i.scdn.co/image/c636ec3570b43a2814717b59347324025b141552",
        "artist_id": 2635,
        "spotify_popularity": 93,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 2635,
            "name": "Dua Lipa",
            "spotify_followers": 947445,
            "spotify_popularity": 93,
            "image_small": "https://i.scdn.co/image/3907521c45284094a91f2c04857e17cd33782c62",
            "image_large": "https://i.scdn.co/image/4cc3cbee9326ea1658968960e257c63e496c2bb6",
            "fully_scraped": 1,
            "updated_at": "2017-10-26 17:07:27",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2638286,
                "name": "Genesis",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 1,
                "duration": 205720,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644729,
                "name": "Lost In Your Light (feat. Miguel)",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 2,
                "duration": 203769,
                "artists": [
                    "Dua Lipa",
                    "Miguel"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644730,
                "name": "Hotter Than Hell",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 3,
                "duration": 187957,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644731,
                "name": "Be The One",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 4,
                "duration": 202914,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644732,
                "name": "IDGAF",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 5,
                "duration": 218173,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644733,
                "name": "Blow Your Mind (Mwah)",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 6,
                "duration": 178583,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644734,
                "name": "Garden",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 7,
                "duration": 227946,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644735,
                "name": "No Goodbyes",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 8,
                "duration": 216080,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644736,
                "name": "Thinking 'Bout You",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 9,
                "duration": 171946,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644737,
                "name": "New Rules",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 10,
                "duration": 209333,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 98,
                "album_id": 522990,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2644738,
                "name": "Begging",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 11,
                "duration": 194106,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644739,
                "name": "Homesick",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 12,
                "duration": 230480,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644740,
                "name": "Dreams",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 13,
                "duration": 220240,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644741,
                "name": "Room For 2",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 14,
                "duration": 208689,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644742,
                "name": "New Love",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 15,
                "duration": 271934,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644743,
                "name": "Bad Together",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 16,
                "duration": 238826,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2644744,
                "name": "Last Dance",
                "album_name": "Dua Lipa (Deluxe)",
                "number": 17,
                "duration": 228976,
                "artists": [
                    "Dua Lipa"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 522990,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 488308,
        "name": "DAMN.",
        "release_date": "2017-04-14",
        "image": "https://i.scdn.co/image/70429aaeceb7f8f6c087133382728223e0004b29",
        "artist_id": 4781,
        "spotify_popularity": 93,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 4781,
            "name": "Kendrick Lamar",
            "spotify_followers": 5987170,
            "spotify_popularity": 96,
            "image_small": "https://i.scdn.co/image/df44832488c25cc6a387272cf881fd9b98122795",
            "image_large": "https://i.scdn.co/image/106c76de27f7e556ebb43947aadd1228862d6cd7",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 19:57:58",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2482182,
                "name": "BLOOD.",
                "album_name": "DAMN.",
                "number": 1,
                "duration": 118066,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 488308,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2482183,
                "name": "DNA.",
                "album_name": "DAMN.",
                "number": 2,
                "duration": 185946,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 86,
                "album_id": 488308,
                "temp_id": "WN6vDIM9",
                "url": null
            },
            {
                "id": 2482184,
                "name": "YAH.",
                "album_name": "DAMN.",
                "number": 3,
                "duration": 160293,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 488308,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2482185,
                "name": "ELEMENT.",
                "album_name": "DAMN.",
                "number": 4,
                "duration": 208733,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 488308,
                "temp_id": "ZTelZsvl",
                "url": null
            },
            {
                "id": 2482186,
                "name": "FEEL.",
                "album_name": "DAMN.",
                "number": 5,
                "duration": 214826,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 488308,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2482189,
                "name": "LOYALTY. FEAT. RIHANNA.",
                "album_name": "DAMN.",
                "number": 6,
                "duration": 227360,
                "artists": [
                    "Kendrick Lamar",
                    "Rihanna"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 488308,
                "temp_id": "ZTelZsvl",
                "url": null
            },
            {
                "id": 2482187,
                "name": "PRIDE.",
                "album_name": "DAMN.",
                "number": 7,
                "duration": 275253,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 488308,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2482188,
                "name": "HUMBLE.",
                "album_name": "DAMN.",
                "number": 8,
                "duration": 177000,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 90,
                "album_id": 488308,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2482190,
                "name": "LUST.",
                "album_name": "DAMN.",
                "number": 9,
                "duration": 307880,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 488308,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2482191,
                "name": "LOVE. FEAT. ZACARI.",
                "album_name": "DAMN.",
                "number": 10,
                "duration": 213400,
                "artists": [
                    "Kendrick Lamar",
                    "Zacari"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 488308,
                "temp_id": "ZTelZsvl",
                "url": null
            },
            {
                "id": 2482192,
                "name": "XXX. FEAT. U2.",
                "album_name": "DAMN.",
                "number": 11,
                "duration": 254200,
                "artists": [
                    "Kendrick Lamar",
                    "U2"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 488308,
                "temp_id": "HWgOYEet",
                "url": null
            },
            {
                "id": 2482193,
                "name": "FEAR.",
                "album_name": "DAMN.",
                "number": 12,
                "duration": 460573,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 488308,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2482194,
                "name": "GOD.",
                "album_name": "DAMN.",
                "number": 13,
                "duration": 248826,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 488308,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2482195,
                "name": "DUCKWORTH.",
                "album_name": "DAMN.",
                "number": 14,
                "duration": 248613,
                "artists": [
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 488308,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 546842,
        "name": "Jungle Rules",
        "release_date": "2017-07-14",
        "image": "https://i.scdn.co/image/c1c6a9a2ac434944f64adf3c7f197460791c872a",
        "artist_id": 1277,
        "spotify_popularity": 92,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 1277,
            "name": "French Montana",
            "spotify_followers": 1035027,
            "spotify_popularity": 91,
            "image_small": "https://i.scdn.co/image/4cd7a907e1f8f923760556247664b41fc508a1e6",
            "image_large": "https://i.scdn.co/image/29fa1dc766fba1ea3058eb6cebc25bf1d31b7161",
            "fully_scraped": 0,
            "updated_at": "2017-10-23 06:24:08",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2784437,
                "name": "Whiskey Eyes",
                "album_name": "Jungle Rules",
                "number": 1,
                "duration": 284303,
                "artists": [
                    "French Montana",
                    "Chinx"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785835,
                "name": "Unforgettable",
                "album_name": "Jungle Rules",
                "number": 2,
                "duration": 233901,
                "artists": [
                    "French Montana",
                    "Swae Lee"
                ],
                "youtube_id": null,
                "spotify_popularity": 97,
                "album_id": 546842,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2785836,
                "name": "Trippin",
                "album_name": "Jungle Rules",
                "number": 3,
                "duration": 176098,
                "artists": [
                    "French Montana"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785837,
                "name": "A Lie",
                "album_name": "Jungle Rules",
                "number": 4,
                "duration": 226790,
                "artists": [
                    "French Montana",
                    "The Weeknd",
                    "Max B"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785838,
                "name": "Jump",
                "album_name": "Jungle Rules",
                "number": 5,
                "duration": 221837,
                "artists": [
                    "French Montana",
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2784553,
                "name": "Hotel Bathroom",
                "album_name": "Jungle Rules",
                "number": 6,
                "duration": 231773,
                "artists": [
                    "French Montana"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2784093,
                "name": "Bring Dem Things",
                "album_name": "Jungle Rules",
                "number": 7,
                "duration": 196117,
                "artists": [
                    "French Montana",
                    "Pharrell Williams"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785839,
                "name": "Bag",
                "album_name": "Jungle Rules",
                "number": 8,
                "duration": 217051,
                "artists": [
                    "French Montana",
                    "Ziico Niico"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785840,
                "name": "Migo Montana",
                "album_name": "Jungle Rules",
                "number": 9,
                "duration": 218612,
                "artists": [
                    "French Montana",
                    "Quavo"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785841,
                "name": "No Pressure",
                "album_name": "Jungle Rules",
                "number": 10,
                "duration": 207267,
                "artists": [
                    "French Montana",
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785842,
                "name": "Push Up",
                "album_name": "Jungle Rules",
                "number": 11,
                "duration": 182612,
                "artists": [
                    "French Montana"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785843,
                "name": "Stop It",
                "album_name": "Jungle Rules",
                "number": 12,
                "duration": 185678,
                "artists": [
                    "French Montana",
                    "T.I."
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785844,
                "name": "Black Out",
                "album_name": "Jungle Rules",
                "number": 13,
                "duration": 218743,
                "artists": [
                    "French Montana",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785845,
                "name": "She Workin",
                "album_name": "Jungle Rules",
                "number": 14,
                "duration": 187665,
                "artists": [
                    "French Montana",
                    "Marc E. Bassy"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785846,
                "name": "Formula",
                "album_name": "Jungle Rules",
                "number": 15,
                "duration": 234274,
                "artists": [
                    "French Montana",
                    "Alkaline"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785847,
                "name": "Famous",
                "album_name": "Jungle Rules",
                "number": 16,
                "duration": 244974,
                "artists": [
                    "French Montana"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785848,
                "name": "Too Much",
                "album_name": "Jungle Rules",
                "number": 17,
                "duration": 176284,
                "artists": [
                    "French Montana"
                ],
                "youtube_id": null,
                "spotify_popularity": 52,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2785849,
                "name": "White Dress",
                "album_name": "Jungle Rules",
                "number": 18,
                "duration": 223286,
                "artists": [
                    "French Montana"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 546842,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 532288,
        "name": "Evolve",
        "release_date": "2017-06-23",
        "image": "https://i.scdn.co/image/37ffb5905818e873b3b7905274669b8a5d277810",
        "artist_id": 1850,
        "spotify_popularity": 92,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 1850,
            "name": "Imagine Dragons",
            "spotify_followers": 5861017,
            "spotify_popularity": 95,
            "image_small": "https://i.scdn.co/image/0242e9f3cdaeb9abd0c9724248213c8e364fc921",
            "image_large": "https://i.scdn.co/image/de3c2c4f4e822edab6fd8c2103102413502635ea",
            "fully_scraped": 1,
            "updated_at": "2017-10-26 19:27:25",
            "bio": "{\"bio\":\"Imagine Dragons is an American rock band from Las Vegas, Nevada currently consisting of lead vocalist Dan Reynolds, lead guitarist Wayne Sermon, bassist Ben McKee, and drummer Daniel Platzman. The band gained exposure with the release of their debut studio album Night Visions (2012), and the album's first single \\\"It's Time\\\". Billboard placed Imagine Dragons at the top of their \\\"Year In Rock\\\" rankings for 2013 and named them their \\\"Breakthrough Band of 2013\\\". Rolling Stone named their single \\\"Radioactive\\\" from Night Visions \\\"the biggest rock hit of the year\\\". MTV called them \\\"the year's biggest breakout band\\\". Night Visions peaked at number two on the weekly Billboard 200 and UK Albums Chart. The band's second studio album Smoke + Mirrors reached number one on the Billboard 200, Canadian Albums Chart, and UK Albums Chart.\\nImagine Dragons won two American Music Awards for Favorite Alternative Artist, a Grammy Award for Best Rock Performance, five Billboard Music Awards, and a World Music Award. In May 2014, the band was nominated for a total of fourteen different Billboard Music Awards, including Top Artist of the Year and a Milestone Award, recognizing innovation and creativity of different artists across different genres.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/1\\/11\\/Imagine_Dragons_2013.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/a\\/a1\\/Night_Visions_logo.png\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2686179,
                "name": "I Don’t Know Why",
                "album_name": "Evolve",
                "number": 1,
                "duration": 190120,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2686180,
                "name": "Whatever It Takes",
                "album_name": "Evolve",
                "number": 2,
                "duration": 201240,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2686181,
                "name": "Believer",
                "album_name": "Evolve",
                "number": 3,
                "duration": 204346,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 88,
                "album_id": 532288,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2686182,
                "name": "Walking The Wire",
                "album_name": "Evolve",
                "number": 4,
                "duration": 232906,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2686183,
                "name": "Rise Up",
                "album_name": "Evolve",
                "number": 5,
                "duration": 231720,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2686184,
                "name": "I’ll Make It Up To You",
                "album_name": "Evolve",
                "number": 6,
                "duration": 262600,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2686185,
                "name": "Yesterday",
                "album_name": "Evolve",
                "number": 7,
                "duration": 205113,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2686186,
                "name": "Mouth Of The River",
                "album_name": "Evolve",
                "number": 8,
                "duration": 221560,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2686187,
                "name": "Thunder",
                "album_name": "Evolve",
                "number": 9,
                "duration": 187146,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 93,
                "album_id": 532288,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2686188,
                "name": "Start Over",
                "album_name": "Evolve",
                "number": 10,
                "duration": 186080,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2686189,
                "name": "Dancing In The Dark",
                "album_name": "Evolve",
                "number": 11,
                "duration": 233933,
                "artists": [
                    "Imagine Dragons"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 532288,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 569461,
        "name": "Odisea",
        "release_date": "2017-08-25",
        "image": "https://i.scdn.co/image/1f5a91a2b0f61bd75e9246f7c407873568ed06a2",
        "artist_id": 8747,
        "spotify_popularity": 91,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 8747,
            "name": "Ozuna",
            "spotify_followers": 2038709,
            "spotify_popularity": 98,
            "image_small": "https://i.scdn.co/image/0c2eabdf8326d228ac3329d32ecfe68702841d7a",
            "image_large": "https://i.scdn.co/image/a6fa7035da84a4d370930e6da5774c8a365ab503",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 18:46:29",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2912566,
                "name": "Odisea",
                "album_name": "Odisea",
                "number": 1,
                "duration": 189773,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912567,
                "name": "Tú Foto",
                "album_name": "Odisea",
                "number": 2,
                "duration": 193226,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912568,
                "name": "Se Preparó",
                "album_name": "Odisea",
                "number": 3,
                "duration": 188080,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 90,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912569,
                "name": "Cumpleaños",
                "album_name": "Odisea",
                "number": 4,
                "duration": 219000,
                "artists": [
                    "Ozuna",
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912570,
                "name": "Dile Que Tu Me Quieres",
                "album_name": "Odisea",
                "number": 5,
                "duration": 226520,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912571,
                "name": "Egoísta",
                "album_name": "Odisea",
                "number": 6,
                "duration": 247973,
                "artists": [
                    "Ozuna",
                    "Zion & Lennox"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912572,
                "name": "Una Flor",
                "album_name": "Odisea",
                "number": 7,
                "duration": 206480,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912573,
                "name": "Quiero Repetir",
                "album_name": "Odisea",
                "number": 8,
                "duration": 200986,
                "artists": [
                    "Ozuna",
                    "J Balvin"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912574,
                "name": "Noches de Aventura",
                "album_name": "Odisea",
                "number": 9,
                "duration": 236706,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912575,
                "name": "Pide Lo Que Tú Quieras",
                "album_name": "Odisea",
                "number": 10,
                "duration": 236973,
                "artists": [
                    "Ozuna",
                    "De La Ghetto"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912023,
                "name": "Síguelo Bailando",
                "album_name": "Odisea",
                "number": 11,
                "duration": 226800,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912576,
                "name": "Bebé",
                "album_name": "Odisea",
                "number": 12,
                "duration": 230320,
                "artists": [
                    "Ozuna",
                    "Anuel Aa"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912577,
                "name": "El Farsante",
                "album_name": "Odisea",
                "number": 13,
                "duration": 233826,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912578,
                "name": "No Quiere Enamorarse",
                "album_name": "Odisea",
                "number": 14,
                "duration": 213160,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2905710,
                "name": "Carita de Angel",
                "album_name": "Odisea",
                "number": 15,
                "duration": 201546,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2912579,
                "name": "Si No Te Quiere",
                "album_name": "Odisea",
                "number": 16,
                "duration": 226106,
                "artists": [
                    "Ozuna"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 569461,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 542739,
        "name": "Issa Album",
        "release_date": "2017-09-23",
        "image": "https://i.scdn.co/image/e0c1774d0cea9d3f5761877e54b6156d48a8e398",
        "artist_id": 1047,
        "spotify_popularity": 91,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 1047,
            "name": "21 Savage",
            "spotify_followers": 1880709,
            "spotify_popularity": 97,
            "image_small": "https://i.scdn.co/image/d664edbc9c83c443a56a5d97a44a105e27c20d20",
            "image_large": "https://i.scdn.co/image/b0d670ac865dbfaf520997e7a8fadae15c7729bb",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 18:05:15",
            "bio": "{\"bio\":\"Shayaa Bin Abraham-Joseph (born October 22, 1992), better known by his stage name 21 Savage, is an American rapper from Atlanta, Georgia. He was best known for his mixtapes, The Slaughter Tape and Slaughter King and his extended plays Free Guwop and Savage Mode with Metro Boomin before the release of his debut album, ISSA and its lead single, \\\"Bank Account\\\".\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/0\\/03\\/Rapper_21_Savage.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2762812,
                "name": "Bank Account",
                "album_name": "Issa Album",
                "number": 1,
                "duration": 220306,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 93,
                "album_id": 542739,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2762819,
                "name": "Numb",
                "album_name": "Issa Album",
                "number": 2,
                "duration": 271306,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762817,
                "name": "FaceTime",
                "album_name": "Issa Album",
                "number": 3,
                "duration": 239160,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762814,
                "name": "Bad Business",
                "album_name": "Issa Album",
                "number": 4,
                "duration": 162253,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762823,
                "name": "Whole Lot",
                "album_name": "Issa Album",
                "number": 5,
                "duration": 313986,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762813,
                "name": "Close My Eyes",
                "album_name": "Issa Album",
                "number": 6,
                "duration": 292266,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762822,
                "name": "Special",
                "album_name": "Issa Album",
                "number": 7,
                "duration": 217866,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762815,
                "name": "Baby Girl",
                "album_name": "Issa Album",
                "number": 8,
                "duration": 169093,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762816,
                "name": "Thug Life",
                "album_name": "Issa Album",
                "number": 9,
                "duration": 263426,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762811,
                "name": "Famous",
                "album_name": "Issa Album",
                "number": 10,
                "duration": 234280,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762820,
                "name": "Dead People",
                "album_name": "Issa Album",
                "number": 11,
                "duration": 147426,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2757318,
                "name": "7 Min Freestyle",
                "album_name": "Issa Album",
                "number": 12,
                "duration": 431586,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762821,
                "name": "Money Convo",
                "album_name": "Issa Album",
                "number": 13,
                "duration": 213426,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762818,
                "name": "Nothin New",
                "album_name": "Issa Album",
                "number": 14,
                "duration": 219360,
                "artists": [
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 542739,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 529509,
        "name": "Ctrl",
        "release_date": "2017-06-09",
        "image": "https://i.scdn.co/image/858107cdf591e0257617a751f331f7bc1debcfca",
        "artist_id": 58852,
        "spotify_popularity": 91,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 58852,
            "name": "SZA",
            "spotify_followers": 599627,
            "spotify_popularity": 93,
            "image_small": "https://i.scdn.co/image/5e23d0ad32a6f75db6b3666082d0a8e60132ddd9",
            "image_large": "https://i.scdn.co/image/e1e46c441024525643a19402b3a12188de219420",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 11:47:32",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2834359,
                "name": "Supermodel",
                "album_name": "Ctrl",
                "number": 1,
                "duration": 181120,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2837663,
                "name": "Love Galore",
                "album_name": "Ctrl",
                "number": 2,
                "duration": 275080,
                "artists": [
                    "SZA",
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2675245,
                "name": "Doves In The Wind",
                "album_name": "Ctrl",
                "number": 3,
                "duration": 266080,
                "artists": [
                    "SZA",
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2685958,
                "name": "Drew Barrymore",
                "album_name": "Ctrl",
                "number": 4,
                "duration": 231400,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2972064,
                "name": "Prom",
                "album_name": "Ctrl",
                "number": 5,
                "duration": 196133,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2830542,
                "name": "The Weekend",
                "album_name": "Ctrl",
                "number": 6,
                "duration": 272186,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2886016,
                "name": "Go Gina",
                "album_name": "Ctrl",
                "number": 7,
                "duration": 161613,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2678002,
                "name": "Garden (Say It Like Dat)",
                "album_name": "Ctrl",
                "number": 8,
                "duration": 208400,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2691669,
                "name": "Broken Clocks",
                "album_name": "Ctrl",
                "number": 9,
                "duration": 231253,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2972067,
                "name": "Anything",
                "album_name": "Ctrl",
                "number": 10,
                "duration": 149320,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2685041,
                "name": "Wavy (Interlude)",
                "album_name": "Ctrl",
                "number": 11,
                "duration": 75800,
                "artists": [
                    "SZA",
                    "James Fauntleroy"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2828052,
                "name": "Normal Girl",
                "album_name": "Ctrl",
                "number": 12,
                "duration": 253586,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670948,
                "name": "Pretty Little Birds",
                "album_name": "Ctrl",
                "number": 13,
                "duration": 245946,
                "artists": [
                    "SZA",
                    "Isaiah Rashad"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2972068,
                "name": "20 Something",
                "album_name": "Ctrl",
                "number": 14,
                "duration": 198160,
                "artists": [
                    "SZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 529509,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 406411,
        "name": "Culture",
        "release_date": "2017-01-27",
        "image": "https://i.scdn.co/image/4047ff295bb33fc7b24cac467764e014b4803e11",
        "artist_id": 21660,
        "spotify_popularity": 91,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 21660,
            "name": "Migos",
            "spotify_followers": 2259620,
            "spotify_popularity": 93,
            "image_small": "https://i.scdn.co/image/b4324d7b26fa40bffda59843c301353246bf1f40",
            "image_large": "https://i.scdn.co/image/6f77fdcfcb5e42002d3ebd7711681bf0ccc3057e",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 18:05:15",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2097876,
                "name": "Culture (feat. DJ Khaled)",
                "album_name": "Culture",
                "number": 1,
                "duration": 153557,
                "artists": [
                    "Migos",
                    "DJ Khaled"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2076864,
                "name": "T-Shirt",
                "album_name": "Culture",
                "number": 2,
                "duration": 242407,
                "artists": [
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 406411,
                "temp_id": "xBOK6rar",
                "url": null
            },
            {
                "id": 2076865,
                "name": "Call Casting",
                "album_name": "Culture",
                "number": 3,
                "duration": 232705,
                "artists": [
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2097877,
                "name": "Bad and Boujee (feat. Lil Uzi Vert)",
                "album_name": "Culture",
                "number": 4,
                "duration": 343150,
                "artists": [
                    "Migos",
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 406411,
                "temp_id": "LykOSqhh",
                "url": null
            },
            {
                "id": 2076866,
                "name": "Get Right Witcha",
                "album_name": "Culture",
                "number": 5,
                "duration": 257545,
                "artists": [
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2069144,
                "name": "Slippery (feat. Gucci Mane)",
                "album_name": "Culture",
                "number": 6,
                "duration": 304041,
                "artists": [
                    "Migos",
                    "Gucci Mane"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2076867,
                "name": "Big On Big",
                "album_name": "Culture",
                "number": 7,
                "duration": 290793,
                "artists": [
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2076868,
                "name": "What The Price",
                "album_name": "Culture",
                "number": 8,
                "duration": 248506,
                "artists": [
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2076869,
                "name": "Brown Paper Bag",
                "album_name": "Culture",
                "number": 9,
                "duration": 211244,
                "artists": [
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2095870,
                "name": "Deadz (feat. 2 Chainz)",
                "album_name": "Culture",
                "number": 10,
                "duration": 274096,
                "artists": [
                    "Migos",
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2076870,
                "name": "All Ass",
                "album_name": "Culture",
                "number": 11,
                "duration": 294658,
                "artists": [
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2096015,
                "name": "Kelly Price (feat. Travis Scott)",
                "album_name": "Culture",
                "number": 12,
                "duration": 363934,
                "artists": [
                    "Migos",
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2097878,
                "name": "Out Yo Way",
                "album_name": "Culture",
                "number": 13,
                "duration": 288387,
                "artists": [
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 406411,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 327073,
        "name": "Stoney",
        "release_date": "2016-12-09",
        "image": "https://i.scdn.co/image/8d6afec409ba1efeeb2e468bfecf05898d2ef67b",
        "artist_id": 5238,
        "spotify_popularity": 91,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 5238,
            "name": "Post Malone",
            "spotify_followers": 1689762,
            "spotify_popularity": 99,
            "image_small": "https://i.scdn.co/image/a05f7de9418d3a996ea5352a3bed312582b8268a",
            "image_large": "https://i.scdn.co/image/3fc1d32020788a97662a9d089ce82df4e622f219",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:12:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 1685745,
                "name": "Broken Whiskey Glass",
                "album_name": "Stoney",
                "number": 1,
                "duration": 233813,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685746,
                "name": "Big Lie",
                "album_name": "Stoney",
                "number": 2,
                "duration": 207680,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685747,
                "name": "Deja Vu",
                "album_name": "Stoney",
                "number": 3,
                "duration": 234213,
                "artists": [
                    "Post Malone",
                    "Justin Bieber"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685748,
                "name": "No Option",
                "album_name": "Stoney",
                "number": 4,
                "duration": 179826,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685749,
                "name": "Cold",
                "album_name": "Stoney",
                "number": 5,
                "duration": 268933,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685750,
                "name": "White Iverson",
                "album_name": "Stoney",
                "number": 6,
                "duration": 256533,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685751,
                "name": "I Fall Apart",
                "album_name": "Stoney",
                "number": 7,
                "duration": 223346,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 87,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685752,
                "name": "Patient",
                "album_name": "Stoney",
                "number": 8,
                "duration": 194333,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685753,
                "name": "Go Flex",
                "album_name": "Stoney",
                "number": 9,
                "duration": 179613,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685754,
                "name": "Feel",
                "album_name": "Stoney",
                "number": 10,
                "duration": 197120,
                "artists": [
                    "Post Malone",
                    "Kehlani"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685755,
                "name": "Too Young",
                "album_name": "Stoney",
                "number": 11,
                "duration": 237146,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685756,
                "name": "Congratulations",
                "album_name": "Stoney",
                "number": 12,
                "duration": 220293,
                "artists": [
                    "Post Malone",
                    "Quavo"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685757,
                "name": "Up There",
                "album_name": "Stoney",
                "number": 13,
                "duration": 194826,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1685758,
                "name": "Yours Truly, Austin Post",
                "album_name": "Stoney",
                "number": 14,
                "duration": 219160,
                "artists": [
                    "Post Malone"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 327073,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 3304,
        "name": "Birds In The Trap Sing McKnight",
        "release_date": "2016-09-16",
        "image": "https://i.scdn.co/image/ea447323073c2208e8cf64b0fc3250cc37c71c6c",
        "artist_id": 5855,
        "spotify_popularity": 91,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 5855,
            "name": "Travis Scott",
            "spotify_followers": 1733498,
            "spotify_popularity": 95,
            "image_small": "https://i.scdn.co/image/78b7b6b6b69baa0fe4352e2edd349895cf737141",
            "image_large": "https://i.scdn.co/image/bbab705fecb1133cf5d3580f7cdb32966797b7e4",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:12:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 172616,
                "name": "the ends",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 1,
                "duration": 201263,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185047,
                "name": "way back",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 2,
                "duration": 272500,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185050,
                "name": "coordinate",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 3,
                "duration": 226397,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185046,
                "name": "through the late night",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 4,
                "duration": 286235,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 143943,
                "name": "beibs in the trap",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 5,
                "duration": 213863,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185056,
                "name": "sdp interlude",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 6,
                "duration": 191622,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185055,
                "name": "sweet sweet",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 7,
                "duration": 222317,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185052,
                "name": "outside",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 8,
                "duration": 176488,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185045,
                "name": "goosebumps",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 9,
                "duration": 243836,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 90,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 120857,
                "name": "first take",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 10,
                "duration": 313909,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 143942,
                "name": "pick up the phone",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 11,
                "duration": 252256,
                "artists": [
                    "Young Thug",
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185054,
                "name": "lose",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 12,
                "duration": 200452,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185057,
                "name": "guidance",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 13,
                "duration": 207107,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            },
            {
                "id": 185051,
                "name": "wonderful",
                "album_name": "Birds In The Trap Sing McKnight",
                "number": 14,
                "duration": 216945,
                "artists": [
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 3304,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 565065,
        "name": "Project Baby 2",
        "release_date": "2017-08-18",
        "image": "https://i.scdn.co/image/3d461dd2722e109db7e55b69ab8cd6fbfd6041b0",
        "artist_id": 607,
        "spotify_popularity": 90,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 607,
            "name": "Kodak Black",
            "spotify_followers": 1622566,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/ef90a19321978c4431246870132c3a6540412806",
            "image_large": "https://i.scdn.co/image/7e3b329829c210144d51035a91b92ce3f55d79fb",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 12:01:20",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2957122,
                "name": "Versatile",
                "album_name": "Project Baby 2",
                "number": 1,
                "duration": 418627,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2881575,
                "name": "Change My Ways",
                "album_name": "Project Baby 2",
                "number": 2,
                "duration": 239298,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2893073,
                "name": "Roll In Peace (feat. XXXTENTACION)",
                "album_name": "Project Baby 2",
                "number": 3,
                "duration": 213132,
                "artists": [
                    "Kodak Black",
                    "XXXTENTACION"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2909452,
                "name": "6th Sense",
                "album_name": "Project Baby 2",
                "number": 4,
                "duration": 194297,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957121,
                "name": "Don't Wanna Breathe",
                "album_name": "Project Baby 2",
                "number": 5,
                "duration": 196672,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957125,
                "name": "Need A Break",
                "album_name": "Project Baby 2",
                "number": 6,
                "duration": 243652,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2952303,
                "name": "First Love",
                "album_name": "Project Baby 2",
                "number": 7,
                "duration": 188689,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957123,
                "name": "Unexplainable",
                "album_name": "Project Baby 2",
                "number": 8,
                "duration": 150979,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2881146,
                "name": "My Klik (feat. John Wicks & JackBoy)",
                "album_name": "Project Baby 2",
                "number": 9,
                "duration": 205711,
                "artists": [
                    "Kodak Black",
                    "John Wicks",
                    "JackBoy"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2883415,
                "name": "Transportin'",
                "album_name": "Project Baby 2",
                "number": 10,
                "duration": 169344,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 87,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957124,
                "name": "You Do That Shit",
                "album_name": "Project Baby 2",
                "number": 11,
                "duration": 141724,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2881578,
                "name": "Built My Legacy (feat. Offset)",
                "album_name": "Project Baby 2",
                "number": 12,
                "duration": 184270,
                "artists": [
                    "Kodak Black",
                    "Offset"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2881577,
                "name": "Misunderstood",
                "album_name": "Project Baby 2",
                "number": 13,
                "duration": 189843,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957127,
                "name": "Pride",
                "album_name": "Project Baby 2",
                "number": 14,
                "duration": 171978,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2980512,
                "name": "Up Late",
                "album_name": "Project Baby 2",
                "number": 15,
                "duration": 209411,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957126,
                "name": "No CoDefendant",
                "album_name": "Project Baby 2",
                "number": 16,
                "duration": 211553,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2907704,
                "name": "The Recipe",
                "album_name": "Project Baby 2",
                "number": 17,
                "duration": 199329,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2904445,
                "name": "Still In The Streets",
                "album_name": "Project Baby 2",
                "number": 18,
                "duration": 199990,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2881576,
                "name": "Me For Me",
                "album_name": "Project Baby 2",
                "number": 19,
                "duration": 232651,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 565065,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 536698,
        "name": "Funk Wav Bounces Vol.1",
        "release_date": "2017-06-30",
        "image": "https://i.scdn.co/image/c3bca5f6e386f6c524800eb269c8483ce69909bd",
        "artist_id": 188,
        "spotify_popularity": 90,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 188,
            "name": "Calvin Harris",
            "spotify_followers": 8050261,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/e8c34cfc48d9eafa5e1a89ddd52e0c54335c0f8c",
            "image_large": "https://i.scdn.co/image/c4d1926567c8c5bf7319024b3d4cf67e4024d848",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 16:44:10",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2711396,
                "name": "Slide",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 1,
                "duration": 230813,
                "artists": [
                    "Calvin Harris",
                    "Frank Ocean",
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 536698,
                "temp_id": "KcJTfNPk",
                "url": null
            },
            {
                "id": 2711399,
                "name": "Cash Out",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 2,
                "duration": 235973,
                "artists": [
                    "Calvin Harris",
                    "ScHoolboy Q",
                    "PARTYNEXTDOOR",
                    "DRAM"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 536698,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711401,
                "name": "Heatstroke",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 3,
                "duration": 229160,
                "artists": [
                    "Calvin Harris",
                    "Young Thug",
                    "Pharrell Williams",
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 536698,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711393,
                "name": "Rollin",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 4,
                "duration": 272653,
                "artists": [
                    "Calvin Harris",
                    "Future",
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 536698,
                "temp_id": "WN6vDIM9",
                "url": null
            },
            {
                "id": 2711397,
                "name": "Prayers Up",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 5,
                "duration": 204280,
                "artists": [
                    "Calvin Harris",
                    "Travis Scott",
                    "A-Trak"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 536698,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711400,
                "name": "Holiday",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 6,
                "duration": 169693,
                "artists": [
                    "Calvin Harris",
                    "Snoop Dogg",
                    "John Legend",
                    "Takeoff"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 536698,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711398,
                "name": "Skrt On Me",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 7,
                "duration": 228266,
                "artists": [
                    "Calvin Harris",
                    "Nicki Minaj"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 536698,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711402,
                "name": "Feels",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 8,
                "duration": 223413,
                "artists": [
                    "Calvin Harris",
                    "Pharrell Williams",
                    "Katy Perry",
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 93,
                "album_id": 536698,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2711394,
                "name": "Faking It",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 9,
                "duration": 240093,
                "artists": [
                    "Calvin Harris",
                    "Kehlani",
                    "Lil Yachty"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 536698,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711395,
                "name": "Hard to Love",
                "album_name": "Funk Wav Bounces Vol.1",
                "number": 10,
                "duration": 230586,
                "artists": [
                    "Calvin Harris",
                    "Jessie Reyez"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 536698,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 486848,
        "name": "Everybody",
        "release_date": "2017-05-05",
        "image": "https://i.scdn.co/image/25040c5c7dbebaf6300ddcd1a52f635f3e373d6c",
        "artist_id": 7688,
        "spotify_popularity": 90,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 7688,
            "name": "Logic",
            "spotify_followers": 1676375,
            "spotify_popularity": 93,
            "image_small": "https://i.scdn.co/image/6477b1188b0a70dbd1ffa34aa0407261fa168723",
            "image_large": "https://i.scdn.co/image/9aab47129b8405aa80afc5590ed295b7899154f1",
            "fully_scraped": 0,
            "updated_at": "2017-10-23 14:24:16",
            "bio": "{\"bio\":\"Sir Robert Bryson Hall II (born January 22, 1990), known by his stage name Logic, is an American rapper, singer, songwriter and record producer. Raised in Gaithersburg, Maryland, Logic expressed an interest in music as a teenager, and ventured into a musical career in early 2009, releasing a mixtape titled Young, Broke & Infamous in 2010. He would then sign with Visionary Music Group, before releasing two more mixtapes over two years, which amassed Logic nationwide attention by 2012.\\nLogic went on to release his fourth mixtape Young Sinatra: Welcome to Forever in 2013 to critical acclaim. Following the mixtape, Logic secured a recording contract with Def Jam Recordings and released his debut studio album Under Pressure in October 2014 to critical success and he eventually went on to go gold with Under Pressure. The single \\\"Under Pressure\\\" preceded the album, and the album debuted at number four on the U.S. Billboard 200 chart. It was later confirmed by the Recording Industry Association of America (RIAA) to have sold more than 171,000 copies.\\nLogic's second studio album The Incredible True Story was released in November 2015 to critical and commercial success, with critics praising Logic's involvement in the production of the album, his introspective lyricism, and flexibility as a hip hop artist, calling it Logic's best album to date. It was later confirmed to have sold over 185,000 copies in the United States. Logic soon released Bobby Tarantino in 2016. It is his fifth mixtape and the first since Young Sinatra: Welcome to Forever.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/7\\/78\\/Logic_backstage_in_Orlando_on_April_8_2014.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/a\\/ae\\/Aristotle_Altemps_Inv8575.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/ca\\/Johannesmagistris-square.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/cf\\/Philbar_3.png\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2586319,
                "name": "Hallelujah",
                "album_name": "Everybody",
                "number": 1,
                "duration": 448733,
                "artists": [
                    "Logic"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 84865,
                "name": "Everybody",
                "album_name": "Everybody",
                "number": 2,
                "duration": 162346,
                "artists": [
                    "Logic"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2569050,
                "name": "Confess",
                "album_name": "Everybody",
                "number": 3,
                "duration": 343026,
                "artists": [
                    "Logic",
                    "Killer Mike"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2577088,
                "name": "Killing Spree",
                "album_name": "Everybody",
                "number": 4,
                "duration": 206613,
                "artists": [
                    "Logic",
                    "Ansel Elgort"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2580331,
                "name": "Take It Back",
                "album_name": "Everybody",
                "number": 5,
                "duration": 400013,
                "artists": [
                    "Logic"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2574755,
                "name": "America",
                "album_name": "Everybody",
                "number": 6,
                "duration": 331346,
                "artists": [
                    "Logic",
                    "Black Thought",
                    "Chuck D",
                    "Big Lenbo",
                    "No I.D"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2586321,
                "name": "Ink Blot",
                "album_name": "Everybody",
                "number": 7,
                "duration": 156293,
                "artists": [
                    "Logic",
                    "Juicy J"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2565568,
                "name": "Mos Definitely",
                "album_name": "Everybody",
                "number": 8,
                "duration": 206293,
                "artists": [
                    "Logic"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2586320,
                "name": "Waiting Room",
                "album_name": "Everybody",
                "number": 9,
                "duration": 283266,
                "artists": [
                    "Logic"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2570556,
                "name": "1-800-273-8255",
                "album_name": "Everybody",
                "number": 10,
                "duration": 250173,
                "artists": [
                    "Logic",
                    "Alessia Cara",
                    "Khalid"
                ],
                "youtube_id": null,
                "spotify_popularity": 93,
                "album_id": 486848,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2570588,
                "name": "Anziety",
                "album_name": "Everybody",
                "number": 11,
                "duration": 412560,
                "artists": [
                    "Logic",
                    "Lucy Rose"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2570511,
                "name": "Black SpiderMan",
                "album_name": "Everybody",
                "number": 12,
                "duration": 331266,
                "artists": [
                    "Logic",
                    "Damian Lemar Hudson"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2586322,
                "name": "AfricAryaN",
                "album_name": "Everybody",
                "number": 13,
                "duration": 728413,
                "artists": [
                    "Logic",
                    "Neil deGrasse Tyson"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 486848,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 458742,
        "name": "More Life",
        "release_date": "2017-03-18",
        "image": "https://i.scdn.co/image/3acc34a1f6b494f2a00ff916c54d6bc63fb7b0dc",
        "artist_id": 184,
        "spotify_popularity": 90,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 184,
            "name": "Drake",
            "spotify_followers": 13298296,
            "spotify_popularity": 100,
            "image_small": "https://i.scdn.co/image/6bd672a0f33705eda4b543c304c21a152f393291",
            "image_large": "https://i.scdn.co/image/cb080366dc8af1fe4dc90c4b9959794794884c66",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 19:57:58",
            "bio": "{\"bio\":\"Aubrey Drake Graham (born October 24, 1986), known simply as Drake, is a Canadian rapper, singer, songwriter, record producer, and actor. Drake initially gained recognition as an actor on the teen drama television series Degrassi: The Next Generation in the early 2000s. Intent on pursuing a career as a rapper, he departed the series in 2007 following the release of his debut mixtape, Room for Improvement. He released two further independent projects, Comeback Season and So Far Gone, before signing to Lil Wayne's Young Money Entertainment in June 2009.\\nDrake released his debut studio album Thank Me Later in 2010, which debuted at number one on the U.S. Billboard 200 and was soon certified platinum by the Recording Industry Association of America (RIAA). His next two releases were 2011's Take Care and 2013's Nothing Was the Same, with certifications of quadruple and triple platinum respectively in the U.S., with the former also earning him his first Grammy Award for Best Rap Album. They were followed by two mixtapes, with the trap-influenced If You're Reading This It's Too Late, and a collaboration with Future for What a Time to Be Alive, in 2015. The former was certified double platinum in the U.S.. Drake released his fourth album, Views, in 2016, breaking several chart records in the process. Views sat atop the Billboard 200 for ten nonconsecutive weeks, becoming the first album by a solo male to do so in over 10 years. It also saw Drake leading the Billboard Hot 100 and the Billboard 200 simultaneously for eight weeks, breaking the previous record of seven held by both Michael Jackson and Whitney Houston. It achieved triple platinum status in the U.S., and earned over 1 million album-equivalent units in the first week of its release.\\nAlongside his Grammy Award win, Drake has won three Juno Awards and six BET Awards. He has the most number one singles on the Hot Rap Songs, Hot R&B\\/Hip-Hop Airplay and Rhythmic Charts.\\nDrake has developed other ventures, including his OVO Sound record label with longtime collaborator Noah \\\"40\\\" Shebib. Drake acts as a producer, producing under the pseudonym of Champagne Papi. Using the \\\"OVO\\\" moniker, Drake has his own clothing line and his own channel on Beats 1. He is also currently acting as the global ambassador for NBA franchise, the Toronto Raptors.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/a\\/a9\\/Drake_Bluesfest.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/c4\\/Drake_and_Future_2016_Summer_Sixteen_Tour.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/3\\/34\\/Drake_at_Bun-B_Concert_2011-_The_Come_Up_Show.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/9\\/9a\\/Drake_fox_theatre.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2328751,
                "name": "Free Smoke",
                "album_name": "More Life",
                "number": 1,
                "duration": 218673,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 458742,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2328752,
                "name": "No Long Talk",
                "album_name": "More Life",
                "number": 2,
                "duration": 149568,
                "artists": [
                    "Drake",
                    "Giggs"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 458742,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2331124,
                "name": "Passionfruit",
                "album_name": "More Life",
                "number": 3,
                "duration": 298940,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 458742,
                "temp_id": "WN6vDIM9",
                "url": null
            },
            {
                "id": 2328753,
                "name": "Jorja Interlude",
                "album_name": "More Life",
                "number": 4,
                "duration": 107673,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2328754,
                "name": "Get It Together",
                "album_name": "More Life",
                "number": 5,
                "duration": 250337,
                "artists": [
                    "Drake",
                    "Black Coffee",
                    "Jorja Smith"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 458742,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2331126,
                "name": "Madiba Riddim",
                "album_name": "More Life",
                "number": 6,
                "duration": 205162,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 458742,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2331127,
                "name": "Blem",
                "album_name": "More Life",
                "number": 7,
                "duration": 216557,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 458742,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2331128,
                "name": "4422",
                "album_name": "More Life",
                "number": 8,
                "duration": 186293,
                "artists": [
                    "Drake",
                    "Sampha"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2331129,
                "name": "Gyalchester",
                "album_name": "More Life",
                "number": 9,
                "duration": 189229,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 458742,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2328755,
                "name": "Skepta Interlude",
                "album_name": "More Life",
                "number": 10,
                "duration": 143213,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2331130,
                "name": "Portland",
                "album_name": "More Life",
                "number": 11,
                "duration": 236614,
                "artists": [
                    "Drake",
                    "Quavo",
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 458742,
                "temp_id": "ZTelZsvl",
                "url": null
            },
            {
                "id": 2331131,
                "name": "Sacrifices",
                "album_name": "More Life",
                "number": 12,
                "duration": 307593,
                "artists": [
                    "Drake",
                    "2 Chainz",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2331132,
                "name": "Nothings Into Somethings",
                "album_name": "More Life",
                "number": 13,
                "duration": 153724,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2331133,
                "name": "Teenage Fever",
                "album_name": "More Life",
                "number": 14,
                "duration": 219692,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 458742,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2331134,
                "name": "KMT",
                "album_name": "More Life",
                "number": 15,
                "duration": 162637,
                "artists": [
                    "Drake",
                    "Giggs"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2331135,
                "name": "Lose You",
                "album_name": "More Life",
                "number": 16,
                "duration": 305373,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2329081,
                "name": "Can't Have Everything",
                "album_name": "More Life",
                "number": 17,
                "duration": 228437,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2330570,
                "name": "Glow",
                "album_name": "More Life",
                "number": 18,
                "duration": 206119,
                "artists": [
                    "Drake",
                    "Kanye West"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2331136,
                "name": "Since Way Back",
                "album_name": "More Life",
                "number": 19,
                "duration": 368035,
                "artists": [
                    "Drake",
                    "PARTYNEXTDOOR"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2331137,
                "name": "Fake Love",
                "album_name": "More Life",
                "number": 20,
                "duration": 210937,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 458742,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 2331138,
                "name": "Ice Melts",
                "album_name": "More Life",
                "number": 21,
                "duration": 250770,
                "artists": [
                    "Drake",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2329260,
                "name": "Do Not Disturb",
                "album_name": "More Life",
                "number": 22,
                "duration": 283550,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 458742,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 12942,
        "name": "x (Deluxe Edition)",
        "release_date": "2014-06-21",
        "image": "https://i.scdn.co/image/1f927459730fe3c72a2e9263975581a7e652e12f",
        "artist_id": 1869,
        "spotify_popularity": 90,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 1869,
            "name": "Ed Sheeran",
            "spotify_followers": 12956992,
            "spotify_popularity": 99,
            "image_small": "https://i.scdn.co/image/f39b705ba6b1070c77bce4e9c21dff5bac96f21c",
            "image_large": "https://i.scdn.co/image/f0370da3f52161b07a461b4be9a64d0adbfb498d",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 06:09:20",
            "bio": "{\"bio\":\"Edward Christopher \\\"Ed\\\" Sheeran (born 17 February 1991) is an English singer-songwriter, musician, and occasional actor. He was born in Hebden Bridge in Yorkshire and raised in Framlingham, Suffolk. He dropped out of school at 16, and moved to London the following year, in 2008, to pursue a career in music. In early 2011, Sheeran independently released the extended play, No. 5 Collaborations Project, which caught the attention of Elton John and Jamie Foxx. After signing with Asylum Records, his debut album, + (read as \\\"plus\\\"), was released on 9 September 2011 and has since been certified six-times platinum in the UK. The album contains the single \\\"The A Team\\\", which earned him the Ivor Novello Award for Best Song Musically and Lyrically. In 2012, Sheeran won the Brit Awards for Best British Male Solo Artist and British Breakthrough Act.\\nSheeran's popularity abroad began in 2012. In the US, he made a guest appearance on Taylor Swift's fourth studio album, Red. \\\"The A Team\\\" was nominated for Song of the Year at the 2013 Grammy Awards, where he performed the song with Elton John. He spent much of 2013 opening for Swift's The Red Tour in North America dates. In late 2013, he performed three sold-out shows at New York's Madison Square Garden as a headline act.\\nHis second studio album, x (read as \\\"multiply\\\"), was released on 23 June 2014. It peaked at number one in the UK and the US. In 2015, x won the Brit Award for Album of the Year, and he received the Ivor Novello Award for Songwriter of the Year. His single from x, \\\"Thinking Out Loud\\\", earned him two Grammy Awards at the 2016 ceremony: Song of the Year and Best Pop Solo Performance. As part of his world tour, Sheeran played three sold-out concerts at London's Wembley Stadium in July 2015, his biggest solo shows to date.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/f\\/f8\\/12_-_Ed_Sheeran.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/5\\/55\\/Ed_Sheeran_2013.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/5\\/5a\\/Ed_Sheeran_at_2012_Frequency_Festival_in_Austria_%287852625324%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/1\\/16\\/Ed_Sheeran_at_Academy_1.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 115517,
                "name": "One",
                "album_name": "x (Deluxe Edition)",
                "number": 1,
                "duration": 252760,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115518,
                "name": "I'm A Mess",
                "album_name": "x (Deluxe Edition)",
                "number": 2,
                "duration": 244573,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115519,
                "name": "Sing",
                "album_name": "x (Deluxe Edition)",
                "number": 3,
                "duration": 235382,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115520,
                "name": "Don't",
                "album_name": "x (Deluxe Edition)",
                "number": 4,
                "duration": 219840,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115521,
                "name": "Nina",
                "album_name": "x (Deluxe Edition)",
                "number": 5,
                "duration": 225533,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115522,
                "name": "Photograph",
                "album_name": "x (Deluxe Edition)",
                "number": 6,
                "duration": 258986,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 87,
                "album_id": 12942,
                "temp_id": "Ueb9Qj3G",
                "url": null
            },
            {
                "id": 115523,
                "name": "Bloodstream",
                "album_name": "x (Deluxe Edition)",
                "number": 7,
                "duration": 300253,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115524,
                "name": "Tenerife Sea",
                "album_name": "x (Deluxe Edition)",
                "number": 8,
                "duration": 241346,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115525,
                "name": "Runaway",
                "album_name": "x (Deluxe Edition)",
                "number": 9,
                "duration": 205133,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115526,
                "name": "The Man",
                "album_name": "x (Deluxe Edition)",
                "number": 10,
                "duration": 250426,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115527,
                "name": "Thinking Out Loud",
                "album_name": "x (Deluxe Edition)",
                "number": 11,
                "duration": 281560,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 87,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115528,
                "name": "Afire Love",
                "album_name": "x (Deluxe Edition)",
                "number": 12,
                "duration": 314280,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115529,
                "name": "Take It Back",
                "album_name": "x (Deluxe Edition)",
                "number": 13,
                "duration": 208400,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115530,
                "name": "Shirtsleeves",
                "album_name": "x (Deluxe Edition)",
                "number": 14,
                "duration": 190226,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115531,
                "name": "Even My Dad Does Sometimes",
                "album_name": "x (Deluxe Edition)",
                "number": 15,
                "duration": 228533,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            },
            {
                "id": 115532,
                "name": "I See Fire",
                "album_name": "x (Deluxe Edition)",
                "number": 16,
                "duration": 299146,
                "artists": [
                    "Ed Sheeran"
                ],
                "youtube_id": null,
                "spotify_popularity": 34,
                "album_id": 12942,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 520702,
        "name": "El Dorado",
        "release_date": "2017-05-26",
        "image": "https://i.scdn.co/image/4ade479eb789eb56ef299fa23ee0e09c57b0e57c",
        "artist_id": 4397,
        "spotify_popularity": 89,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 4397,
            "name": "Shakira",
            "spotify_followers": 5570763,
            "spotify_popularity": 90,
            "image_small": "https://i.scdn.co/image/78e87fcc881b4572913167d8488f975c104451b7",
            "image_large": "https://i.scdn.co/image/9f65f9f5ba10e0243da093306d213f88ccb85da6",
            "fully_scraped": 0,
            "updated_at": "2017-10-19 15:19:00",
            "bio": "{\"bio\":\"Shakira Isabel Mebarak Ripoll (pronounced: [\\u0283a\\u02c8ki\\u027ea isa\\u02c8\\u03b2el me\\u03b2a\\u02c8\\u027eak ri\\u02c8pol]; English \\/\\u0283\\u0259\\u02c8k\\u026a\\u0259r\\u0259\\/; born February 2, 1977) is a Colombian singer, songwriter, dancer, and record producer. Born and raised in Barranquilla, she began performing in school, demonstrating Latin American, Arabic, and rock and roll influences and belly dancing abilities. Shakira released her first studio albums, Magia and Peligro, in the early 1990s, failing to attain commercial success; however, she rose to prominence in Latin America with her major-label debut, Pies Descalzos (1996), and her fourth album, D\\u00f3nde Est\\u00e1n los Ladrones? (1998).\\nShakira entered the English-language market with her fifth album, Laundry Service. Its lead single, \\\"Whenever, Wherever\\\", became the best-selling single of 2002. Her success was solidified with her sixth and seventh albums Fijaci\\u00f3n Oral, Vol. 1 and Oral Fixation, Vol. 2 (2005), the latter of which spawned one of the best-selling songs of the 21st century, \\\"Hips Don't Lie\\\". Shakira's eighth and ninth albums, She Wolf (2009) and Sale el Sol (2010), received critical praise. Her official song for the 2010 FIFA World Cup, \\\"Waka Waka (This Time for Africa)\\\", became the biggest-selling World Cup song of all time. With over a billion views, it is one of the most-watched music videos on YouTube. Since 2013, Shakira has served as a coach on the American version of The Voice, having appeared in two of its seven seasons\\u2014fourth and sixth. Her tenth album, Shakira (2014), is preceded by its lead single, \\\"Can't Remember to Forget You\\\".\\nShakira has won many awards, including five MTV Video Music Awards, two Grammy Awards, eight Latin Grammy Awards, seven Billboard Music Awards, 28 Billboard Latin Music Awards and has been Golden Globe-nominated. She has a star on the Hollywood Walk of Fame, and has sold between 70 and 125 million records worldwide (depending on the source), making her one of the best selling Latin artists of all time. She carries out well-known philanthropic activities through charity work most notably through her Pies Descalzos Foundation. In 2014, she was listed as the 58th most powerful woman in the world by Forbes.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/5\\/5d\\/Dilma_e_Shakira.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/8\\/8e\\/EsculturaShakira.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/b\\/ba\\/S_by_Shakira_Commons_version.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/4\\/41\\/Shakira_-_Live_Paris_-_2010_%2812%29.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2626964,
                "name": "Me Enamoré",
                "album_name": "El Dorado",
                "number": 1,
                "duration": 226893,
                "artists": [
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 86,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626965,
                "name": "Nada",
                "album_name": "El Dorado",
                "number": 2,
                "duration": 189573,
                "artists": [
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626966,
                "name": "Chantaje",
                "album_name": "El Dorado",
                "number": 3,
                "duration": 195840,
                "artists": [
                    "Shakira",
                    "Maluma"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626967,
                "name": "When a Woman",
                "album_name": "El Dorado",
                "number": 4,
                "duration": 198106,
                "artists": [
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626968,
                "name": "Amarillo",
                "album_name": "El Dorado",
                "number": 5,
                "duration": 219640,
                "artists": [
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626969,
                "name": "Perro Fiel",
                "album_name": "El Dorado",
                "number": 6,
                "duration": 195213,
                "artists": [
                    "Shakira",
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 88,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626970,
                "name": "Trap",
                "album_name": "El Dorado",
                "number": 7,
                "duration": 199813,
                "artists": [
                    "Shakira",
                    "Maluma"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626971,
                "name": "Comme moi",
                "album_name": "El Dorado",
                "number": 8,
                "duration": 188453,
                "artists": [
                    "Black M",
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626972,
                "name": "Coconut Tree",
                "album_name": "El Dorado",
                "number": 9,
                "duration": 230173,
                "artists": [
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626973,
                "name": "La Bicicleta",
                "album_name": "El Dorado",
                "number": 10,
                "duration": 227706,
                "artists": [
                    "Carlos Vives",
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626974,
                "name": "Deja vu",
                "album_name": "El Dorado",
                "number": 11,
                "duration": 196466,
                "artists": [
                    "Prince Royce",
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626975,
                "name": "What We Said - Comme moi English Version",
                "album_name": "El Dorado",
                "number": 12,
                "duration": 179480,
                "artists": [
                    "Shakira",
                    "MAGIC!"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626976,
                "name": "Toneladas",
                "album_name": "El Dorado",
                "number": 13,
                "duration": 191586,
                "artists": [
                    "Shakira"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 520702,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 477995,
        "name": "Memories...Do Not Open",
        "release_date": "2017-04-07",
        "image": "https://i.scdn.co/image/ec1d389f4b448463b81513c0c5d5e1f6c34faa63",
        "artist_id": 8,
        "spotify_popularity": 89,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 8,
            "name": "The Chainsmokers",
            "spotify_followers": 4131353,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/098f5d6b1560d8c4d6f7a00ff7029ed3ea33ab64",
            "image_large": "https://i.scdn.co/image/6735a98c7cf7c5b9622e10a1ea9390dd67cbd509",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 06:34:29",
            "bio": "{\"bio\":\"The Chainsmokers is an American DJ duo consisting of Andrew Taggart and Alex Pall. The duo had a top twenty hit in several countries with their 2014 single \\\"#Selfie\\\" reaching number sixteen on the Billboard Hot 100, number three in Australia, and number eleven in the United Kingdom.\\nSeveral of the duo's singles such as \\\"Roses\\\" and \\\"Don't Let Me Down\\\" have become top-ten singles worldwide. They released their debut EP, Bouquet, in October 2015, while \\\"Closer\\\", featuring vocals from Halsey, became their first number-one single on both the Billboard Hot 100 and in the United Kingdom, having stayed in the top place for six weeks as of September 27, 2016.\\n\\n\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/e\\/ea\\/The_Chainsmokers_VELD_2016.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/en\\/c\\/c3\\/The_Chainsmokers_logo.png\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2418686,
                "name": "The One",
                "album_name": "Memories...Do Not Open",
                "number": 1,
                "duration": 177573,
                "artists": [
                    "The Chainsmokers"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 477995,
                "temp_id": "ZTelZsvl",
                "url": null
            },
            {
                "id": 2418687,
                "name": "Break Up Every Night",
                "album_name": "Memories...Do Not Open",
                "number": 2,
                "duration": 207520,
                "artists": [
                    "The Chainsmokers"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2418688,
                "name": "Bloodstream",
                "album_name": "Memories...Do Not Open",
                "number": 3,
                "duration": 224280,
                "artists": [
                    "The Chainsmokers"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2418689,
                "name": "Don't Say",
                "album_name": "Memories...Do Not Open",
                "number": 4,
                "duration": 228480,
                "artists": [
                    "The Chainsmokers",
                    "Emily Warren"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2418690,
                "name": "Something Just Like This",
                "album_name": "Memories...Do Not Open",
                "number": 5,
                "duration": 247160,
                "artists": [
                    "The Chainsmokers",
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 477995,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2418691,
                "name": "My Type",
                "album_name": "Memories...Do Not Open",
                "number": 6,
                "duration": 217413,
                "artists": [
                    "The Chainsmokers",
                    "Emily Warren"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2418692,
                "name": "It Won't Kill Ya",
                "album_name": "Memories...Do Not Open",
                "number": 7,
                "duration": 217613,
                "artists": [
                    "The Chainsmokers",
                    "Louane"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2418693,
                "name": "Paris",
                "album_name": "Memories...Do Not Open",
                "number": 8,
                "duration": 221506,
                "artists": [
                    "The Chainsmokers"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 477995,
                "temp_id": "bSmAdbqN",
                "url": null
            },
            {
                "id": 2418694,
                "name": "Honest",
                "album_name": "Memories...Do Not Open",
                "number": 9,
                "duration": 208000,
                "artists": [
                    "The Chainsmokers"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2418695,
                "name": "Wake Up Alone",
                "album_name": "Memories...Do Not Open",
                "number": 10,
                "duration": 215720,
                "artists": [
                    "The Chainsmokers",
                    "Jhene Aiko"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2418696,
                "name": "Young",
                "album_name": "Memories...Do Not Open",
                "number": 11,
                "duration": 224773,
                "artists": [
                    "The Chainsmokers"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2418697,
                "name": "Last Day Alive",
                "album_name": "Memories...Do Not Open",
                "number": 12,
                "duration": 214306,
                "artists": [
                    "The Chainsmokers",
                    "Florida Georgia Line"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 477995,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 396432,
        "name": "Fénix",
        "release_date": "2017-01-20",
        "image": "https://i.scdn.co/image/0096fe61a05cace9281261c5d8b0d37caf4801cf",
        "artist_id": 8749,
        "spotify_popularity": 89,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 8749,
            "name": "Nicky Jam",
            "spotify_followers": 2642492,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/7ee0967b969634b7cef1f4b2b23efa960e55f0b9",
            "image_large": "https://i.scdn.co/image/ccf7c1af6ac4a0aa33306f0617eccceaa8d105ba",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 14:28:38",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2024677,
                "name": "El Ganador",
                "album_name": "Fénix",
                "number": 1,
                "duration": 199893,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024678,
                "name": "Estrella",
                "album_name": "Fénix",
                "number": 2,
                "duration": 219466,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024679,
                "name": "Por el Momento",
                "album_name": "Fénix",
                "number": 3,
                "duration": 218306,
                "artists": [
                    "Nicky Jam",
                    "Plan B"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024680,
                "name": "Amor Prohibido",
                "album_name": "Fénix",
                "number": 4,
                "duration": 260053,
                "artists": [
                    "Nicky Jam",
                    "Sean Paul",
                    "Konshens"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024681,
                "name": "El Amante",
                "album_name": "Fénix",
                "number": 5,
                "duration": 219506,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 86,
                "album_id": 396432,
                "temp_id": "bSmAdbqN",
                "url": null
            },
            {
                "id": 2024682,
                "name": "Superhéroe",
                "album_name": "Fénix",
                "number": 6,
                "duration": 206053,
                "artists": [
                    "Nicky Jam",
                    "J Balvin"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024683,
                "name": "Si Tú La Ves",
                "album_name": "Fénix",
                "number": 7,
                "duration": 221026,
                "artists": [
                    "Nicky Jam",
                    "Wisin"
                ],
                "youtube_id": null,
                "spotify_popularity": 86,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024684,
                "name": "No Te Puedo Olvidar",
                "album_name": "Fénix",
                "number": 8,
                "duration": 200506,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024685,
                "name": "Nadie Como Tú",
                "album_name": "Fénix",
                "number": 9,
                "duration": 199693,
                "artists": [
                    "Nicky Jam",
                    "El Alfa"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024686,
                "name": "No Te Vayas",
                "album_name": "Fénix",
                "number": 10,
                "duration": 239186,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024687,
                "name": "Mi Maldición",
                "album_name": "Fénix",
                "number": 11,
                "duration": 216973,
                "artists": [
                    "Nicky Jam",
                    "Cosculluela"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024688,
                "name": "Tu Hombre",
                "album_name": "Fénix",
                "number": 12,
                "duration": 204720,
                "artists": [
                    "Nicky Jam",
                    "Daddy Yankee"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024689,
                "name": "Mi Fantasía",
                "album_name": "Fénix",
                "number": 13,
                "duration": 220306,
                "artists": [
                    "Nicky Jam",
                    "Messiah"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024690,
                "name": "Tu Cuerpo Me Ama",
                "album_name": "Fénix",
                "number": 14,
                "duration": 200226,
                "artists": [
                    "Nicky Jam",
                    "MineK"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024691,
                "name": "Mil Lágrimas",
                "album_name": "Fénix",
                "number": 15,
                "duration": 208346,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024692,
                "name": "Despacio",
                "album_name": "Fénix",
                "number": 16,
                "duration": 179546,
                "artists": [
                    "Nicky Jam",
                    "Arcangel"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024693,
                "name": "Cuando Quieras",
                "album_name": "Fénix",
                "number": 17,
                "duration": 227986,
                "artists": [
                    "Nicky Jam",
                    "Valentino"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024694,
                "name": "Me Enamoras",
                "album_name": "Fénix",
                "number": 18,
                "duration": 169026,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024695,
                "name": "I Can't Forget You",
                "album_name": "Fénix",
                "number": 19,
                "duration": 200280,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 52,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024696,
                "name": "Without You",
                "album_name": "Fénix",
                "number": 20,
                "duration": 233760,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024697,
                "name": "El Perdón",
                "album_name": "Fénix",
                "number": 21,
                "duration": 205906,
                "artists": [
                    "Nicky Jam",
                    "Enrique Iglesias"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024698,
                "name": "Hasta el Amanecer",
                "album_name": "Fénix",
                "number": 22,
                "duration": 198706,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024699,
                "name": "Hasta el Amanecer - The Remix",
                "album_name": "Fénix",
                "number": 23,
                "duration": 188466,
                "artists": [
                    "Nicky Jam",
                    "Daddy Yankee"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2030185,
                "name": "Hasta el Amanecer - Remix",
                "album_name": "Fenix",
                "number": 23,
                "duration": 188466,
                "artists": [
                    "Nicky Jam",
                    "Daddy Yankee"
                ],
                "youtube_id": null,
                "spotify_popularity": 38,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024700,
                "name": "With You Tonight (Hasta El Amanecer)",
                "album_name": "Fénix",
                "number": 24,
                "duration": 208973,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2030186,
                "name": "With You Tonight",
                "album_name": "Fenix",
                "number": 24,
                "duration": 208973,
                "artists": [
                    "Nicky Jam"
                ],
                "youtube_id": null,
                "spotify_popularity": 26,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024701,
                "name": "El Perdón - Forgiveness",
                "album_name": "Fénix",
                "number": 25,
                "duration": 206666,
                "artists": [
                    "Nicky Jam",
                    "Enrique Iglesias"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2030187,
                "name": "Forgiveness",
                "album_name": "Fenix",
                "number": 25,
                "duration": 205973,
                "artists": [
                    "Nicky Jam",
                    "Enrique Iglesias"
                ],
                "youtube_id": null,
                "spotify_popularity": 29,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2024702,
                "name": "With You Tonight (Hasta El Amanecer) - Remix",
                "album_name": "Fénix",
                "number": 26,
                "duration": 195893,
                "artists": [
                    "Nicky Jam",
                    "Kid Ink"
                ],
                "youtube_id": null,
                "spotify_popularity": 52,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2030188,
                "name": "With You Tonight - Remix",
                "album_name": "Fenix",
                "number": 26,
                "duration": 195893,
                "artists": [
                    "Nicky Jam",
                    "Kid Inc"
                ],
                "youtube_id": null,
                "spotify_popularity": 26,
                "album_id": 396432,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 5122,
        "name": "Hamilton (Original Broadway Cast Recording)",
        "release_date": "2015-09-25",
        "image": "https://i.scdn.co/image/cab99e12568f975eacaf11dac9493d7c07e51e4e",
        "artist_id": 8778,
        "spotify_popularity": 89,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 8778,
            "name": "Leslie Odom Jr.",
            "spotify_followers": 38167,
            "spotify_popularity": 79,
            "image_small": "https://i.scdn.co/image/d245f5a19c2345d713ab610facd03c4d34fa6b92",
            "image_large": "https://i.scdn.co/image/090f128cbb77a4b8ed53c753390a737e28cf1de9",
            "fully_scraped": 0,
            "updated_at": "2017-10-03 13:43:23",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 209201,
                "name": "What'd I Miss",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 1,
                "duration": 236701,
                "artists": [
                    "Daveed Diggs",
                    "Leslie Odom Jr.",
                    "Okieriete Onaodowan",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 176629,
                "name": "Cabinet Battle #1",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 2,
                "duration": 215226,
                "artists": [
                    "Christopher Jackson",
                    "Daveed Diggs",
                    "Lin-Manuel Miranda",
                    "Okieriete Onaodowan"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209200,
                "name": "The Room Where It Happens",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 5,
                "duration": 318214,
                "artists": [
                    "Leslie Odom Jr.",
                    "Lin-Manuel Miranda",
                    "Daveed Diggs",
                    "Okieriete Onaodowan",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209197,
                "name": "Farmer Refuted",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 6,
                "duration": 112742,
                "artists": [
                    "Thayne Jasperson",
                    "Lin-Manuel Miranda",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209211,
                "name": "Schuyler Defeated",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 6,
                "duration": 63558,
                "artists": [
                    "Anthony Ramos",
                    "Phillipa Soo",
                    "Lin-Manuel Miranda",
                    "Leslie Odom Jr."
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209212,
                "name": "Cabinet Battle #2",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 7,
                "duration": 142639,
                "artists": [
                    "Christopher Jackson",
                    "Daveed Diggs",
                    "Lin-Manuel Miranda",
                    "Okieriete Onaodowan"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209213,
                "name": "Washington On Your Side",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 8,
                "duration": 181477,
                "artists": [
                    "Leslie Odom Jr.",
                    "Daveed Diggs",
                    "Okieriete Onaodowan",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209198,
                "name": "A Winter's Ball",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 9,
                "duration": 69900,
                "artists": [
                    "Leslie Odom Jr.",
                    "Lin-Manuel Miranda",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 37603,
                "name": "I Know Him",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 10,
                "duration": 97979,
                "artists": [
                    "Jonathan Groff"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209215,
                "name": "The Adams Administration",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 11,
                "duration": 54840,
                "artists": [
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209205,
                "name": "The Story of Tonight - Reprise",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 12,
                "duration": 115879,
                "artists": [
                    "Anthony Ramos",
                    "Okieriete Onaodowan",
                    "Daveed Diggs",
                    "Lin-Manuel Miranda",
                    "Leslie Odom Jr."
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209216,
                "name": "We Know",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 12,
                "duration": 142044,
                "artists": [
                    "Lin-Manuel Miranda",
                    "Daveed Diggs",
                    "Leslie Odom Jr.",
                    "Okieriete Onaodowan"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 154751,
                "name": "Stay Alive",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 14,
                "duration": 159102,
                "artists": [
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209218,
                "name": "The Reynolds Pamphlet",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 14,
                "duration": 128470,
                "artists": [
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209219,
                "name": "Burn",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 15,
                "duration": 225240,
                "artists": [
                    "Phillipa Soo"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209206,
                "name": "Meet Me Inside",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 16,
                "duration": 83632,
                "artists": [
                    "Lin-Manuel Miranda",
                    "Leslie Odom Jr.",
                    "Anthony Ramos",
                    "Christopher Jackson",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209220,
                "name": "Blow Us All Away",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 16,
                "duration": 173594,
                "artists": [
                    "Anthony Ramos",
                    "Ariana DeBose",
                    "Sasha Hutchings",
                    "Ephraim Sykes",
                    "Lin-Manuel Miranda",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 154754,
                "name": "Stay Alive - Reprise",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 17,
                "duration": 111553,
                "artists": [
                    "Lin-Manuel Miranda",
                    "Anthony Ramos",
                    "Phillipa Soo",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209207,
                "name": "That Would Be Enough",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 17,
                "duration": 178445,
                "artists": [
                    "Phillipa Soo",
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209221,
                "name": "It's Quiet Uptown",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 18,
                "duration": 270171,
                "artists": [
                    "Renée Elise Goldsberry",
                    "Lin-Manuel Miranda",
                    "Phillipa Soo",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209199,
                "name": "History Has Its Eyes On You",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 19,
                "duration": 97050,
                "artists": [
                    "Christopher Jackson",
                    "Lin-Manuel Miranda",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209222,
                "name": "The Election of 1800",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 19,
                "duration": 237982,
                "artists": [
                    "Daveed Diggs",
                    "Okieriete Onaodowan",
                    "Leslie Odom Jr.",
                    "Lin-Manuel Miranda",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209223,
                "name": "Your Obedient Servant",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 20,
                "duration": 150063,
                "artists": [
                    "Leslie Odom Jr.",
                    "Lin-Manuel Miranda",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209208,
                "name": "What Comes Next?",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 21,
                "duration": 99343,
                "artists": [
                    "Jonathan Groff"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209224,
                "name": "Best of Wives and Best of Women",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 21,
                "duration": 47943,
                "artists": [
                    "Phillipa Soo",
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209209,
                "name": "Dear Theodosia",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 22,
                "duration": 184004,
                "artists": [
                    "Leslie Odom Jr.",
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209225,
                "name": "The World Was Wide Enough",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 22,
                "duration": 302191,
                "artists": [
                    "Leslie Odom Jr.",
                    "Lin-Manuel Miranda",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209226,
                "name": "Who Lives, Who Dies, Who Tells Your Story",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 23,
                "duration": 217229,
                "artists": [
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 5122,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 3745,
        "name": "Hamilton (Original Broadway Cast Recording)",
        "release_date": "2015-09-25",
        "image": "https://i.scdn.co/image/cab99e12568f975eacaf11dac9493d7c07e51e4e",
        "artist_id": 627,
        "spotify_popularity": 88,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 627,
            "name": "Various Artists",
            "spotify_followers": null,
            "spotify_popularity": null,
            "image_small": null,
            "image_large": null,
            "fully_scraped": 0,
            "updated_at": "2017-10-20 16:53:00",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 46749,
                "name": "Alexander Hamilton",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 1,
                "duration": 236737,
                "artists": [
                    "Leslie Odom Jr.",
                    "Anthony Ramos",
                    "Daveed Diggs",
                    "Okieriete Onaodowan",
                    "Lin-Manuel Miranda",
                    "Phillipa Soo",
                    "Christopher Jackson",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 153415,
                "name": "My Shot",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 3,
                "duration": 333154,
                "artists": [
                    "Lin-Manuel Miranda",
                    "Anthony Ramos",
                    "Daveed Diggs",
                    "Okieriete Onaodowan",
                    "Leslie Odom Jr.",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209210,
                "name": "Take A Break",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 3,
                "duration": 286485,
                "artists": [
                    "Phillipa Soo",
                    "Anthony Ramos",
                    "Lin-Manuel Miranda",
                    "Renée Elise Goldsberry"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209196,
                "name": "The Story Of Tonight",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 4,
                "duration": 91980,
                "artists": [
                    "Lin-Manuel Miranda",
                    "Anthony Ramos",
                    "Okieriete Onaodowan",
                    "Daveed Diggs",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209191,
                "name": "You'll Be Back",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 7,
                "duration": 208321,
                "artists": [
                    "Jonathan Groff",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209195,
                "name": "Right Hand Man",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 8,
                "duration": 321696,
                "artists": [
                    "Christopher Jackson",
                    "Lin-Manuel Miranda",
                    "Leslie Odom Jr.",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209192,
                "name": "Helpless",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 10,
                "duration": 249770,
                "artists": [
                    "Phillipa Soo",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209190,
                "name": "Wait For It",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 13,
                "duration": 193749,
                "artists": [
                    "Leslie Odom Jr.",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 73640,
                "name": "Guns and Ships",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 18,
                "duration": 127578,
                "artists": [
                    "Leslie Odom Jr.",
                    "Daveed Diggs",
                    "Christopher Jackson",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209193,
                "name": "Yorktown (The World Turned Upside Down)",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 20,
                "duration": 242587,
                "artists": [
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209194,
                "name": "Non-Stop",
                "album_name": "Hamilton (Original Broadway Cast Recording)",
                "number": 23,
                "duration": 385438,
                "artists": [
                    "Leslie Odom Jr.",
                    "Lin-Manuel Miranda",
                    "Renée Elise Goldsberry",
                    "Phillipa Soo",
                    "Christopher Jackson",
                    "Original Broadway Cast of Hamilton"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 3745,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 3478,
        "name": "Coloring Book",
        "release_date": "2016-05-27",
        "image": "https://i.scdn.co/image/4df3b334d17428ba101ac867e6f97a0196af1635",
        "artist_id": 6173,
        "spotify_popularity": 88,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 6173,
            "name": "Chance The Rapper",
            "spotify_followers": 2031109,
            "spotify_popularity": 89,
            "image_small": "https://i.scdn.co/image/ff31d16413f7b9d6385947f81532f54c83128592",
            "image_large": "https://i.scdn.co/image/f5aceffb43876273fa72b7c3c002d7e3218075fd",
            "fully_scraped": 0,
            "updated_at": "2017-10-24 10:17:50",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 143324,
                "name": "All We Got (feat. Kanye West & Chicago Children's Choir)",
                "album_name": "Coloring Book",
                "number": 1,
                "duration": 203794,
                "artists": [
                    "Chance The Rapper",
                    "Kanye West",
                    "Chicago Children's Choir"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 31805,
                "name": "No Problem (feat. Lil Wayne & 2 Chainz)",
                "album_name": "Coloring Book",
                "number": 2,
                "duration": 304606,
                "artists": [
                    "Chance The Rapper",
                    "Lil Wayne",
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 107374,
                "name": "Summer Friends (feat. Jeremih & Francis & The Lights)",
                "album_name": "Coloring Book",
                "number": 3,
                "duration": 290316,
                "artists": [
                    "Chance The Rapper",
                    "Jeremih",
                    "Francis and the Lights"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 171079,
                "name": "D.R.A.M. Sings Special",
                "album_name": "Coloring Book",
                "number": 4,
                "duration": 101590,
                "artists": [
                    "Chance The Rapper"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 158340,
                "name": "Same Drugs",
                "album_name": "Coloring Book",
                "number": 6,
                "duration": 257775,
                "artists": [
                    "Chance The Rapper"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 153557,
                "name": "Mixtape (feat. Young Thug & Lil Yachty)",
                "album_name": "Coloring Book",
                "number": 7,
                "duration": 292910,
                "artists": [
                    "Chance The Rapper",
                    "Young Thug",
                    "Lil Yachty"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 150243,
                "name": "Angels (feat. Saba)",
                "album_name": "Coloring Book",
                "number": 8,
                "duration": 206240,
                "artists": [
                    "Chance The Rapper",
                    "Saba"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 158338,
                "name": "Juke Jam (feat. Justin Bieber & Towkio)",
                "album_name": "Coloring Book",
                "number": 9,
                "duration": 219683,
                "artists": [
                    "Chance The Rapper",
                    "Justin Bieber",
                    "Towkio"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 63851,
                "name": "All Night (feat. Knox Fortune)",
                "album_name": "Coloring Book",
                "number": 10,
                "duration": 141542,
                "artists": [
                    "Chance The Rapper",
                    "Knox Fortune"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 171080,
                "name": "How Great (feat. Jay Electronica & My cousin Nicole)",
                "album_name": "Coloring Book",
                "number": 11,
                "duration": 337423,
                "artists": [
                    "Chance The Rapper",
                    "Jay Electronica",
                    "My cousin Nicole"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 158339,
                "name": "Smoke Break (feat. Future)",
                "album_name": "Coloring Book",
                "number": 12,
                "duration": 226494,
                "artists": [
                    "Chance The Rapper",
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 171081,
                "name": "Finish Line / Drown (feat. T-Pain, Kirk Franklin, Eryn Allen Kane & Noname)",
                "album_name": "Coloring Book",
                "number": 13,
                "duration": 406983,
                "artists": [
                    "Chance The Rapper",
                    "T-Pain",
                    "Kirk Franklin",
                    "Eryn Allen Kane",
                    "Noname"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            },
            {
                "id": 158341,
                "name": "Blessings",
                "album_name": "Coloring Book",
                "number": 14,
                "duration": 230016,
                "artists": [
                    "Chance The Rapper",
                    "Ty Dolla $ign",
                    "Anderson .Paak",
                    "BJ The Chicago Kid",
                    "Raury"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 3478,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 132,
        "name": "Blurryface",
        "release_date": "2015-05-15",
        "image": "https://i.scdn.co/image/cd5eb6933cca9421578e3badfed816f046f3a86e",
        "artist_id": 183,
        "spotify_popularity": 88,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 183,
            "name": "Twenty One Pilots",
            "spotify_followers": 5187325,
            "spotify_popularity": 88,
            "image_small": "https://i.scdn.co/image/57d72c0c06f5d93fbba622a0f47c9ed6ce5a61d9",
            "image_large": "https://i.scdn.co/image/b396c3f5ddf29a8f49337ae7f8a2acdbc3561cc7",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 19:27:25",
            "bio": "{\"bio\":\"Twenty One Pilots (stylized as TWENTY \\u00d8NE PIL\\u00d8TS) is an American musical duo originating from Columbus, Ohio. The band was formed in 2009 by Tyler Joseph along with former members Nick Thomas and Chris Salih, who eventually left in 2011, and currently consists of lead vocalist and keyboardist Tyler Joseph and drummer Josh Dun. The duo rose to fame in the mid\\u20132010s, after several years of touring and independent releases.\\nThey put out two self-released albums, Twenty One Pilots in 2009 and Regional at Best in 2011, before being signed by Fueled by Ramen in 2012. Their label debut, Vessel, was released in 2013. The duo achieved breakthrough success with their fourth album, Blurryface (2015), which produced the singles \\\"Stressed Out\\\" and \\\"Ride\\\". In addition, the single \\\"Heathens\\\", recorded for the soundtrack of the film Suicide Squad, also met chart success. It made the group the first alternative artist to have two concurrent top ten singles in the U.S.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/2\\/25\\/20140212-DSC_0278_800.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/9\\/9e\\/CktTbHdXAAQ5zeo.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/9\\/90\\/Tumblr_inline_nvexudBYsz1so5lab_400.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/1\\/12\\/Twenty_One_Pilots_Live_au_LC_-_Columbus%2C_OH.png\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 10350,
                "name": "Heavydirtysoul",
                "album_name": "Blurryface",
                "number": 1,
                "duration": 234813,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 145,
                "name": "Stressed Out",
                "album_name": "Blurryface",
                "number": 2,
                "duration": 202333,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 132,
                "temp_id": "CyhPoA2l",
                "url": null
            },
            {
                "id": 120,
                "name": "Ride",
                "album_name": "Blurryface",
                "number": 3,
                "duration": 214506,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 132,
                "temp_id": "Gszd5OIJ",
                "url": null
            },
            {
                "id": 10351,
                "name": "Fairly Local",
                "album_name": "Blurryface",
                "number": 4,
                "duration": 207160,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10352,
                "name": "Tear In My Heart",
                "album_name": "Blurryface",
                "number": 5,
                "duration": 188493,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10353,
                "name": "Lane Boy",
                "album_name": "Blurryface",
                "number": 6,
                "duration": 253093,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10354,
                "name": "The Judge",
                "album_name": "Blurryface",
                "number": 7,
                "duration": 297760,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10355,
                "name": "Doubt",
                "album_name": "Blurryface",
                "number": 8,
                "duration": 191493,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10356,
                "name": "Polarize",
                "album_name": "Blurryface",
                "number": 9,
                "duration": 226786,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10357,
                "name": "We Don't Believe What's On TV",
                "album_name": "Blurryface",
                "number": 10,
                "duration": 177200,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10358,
                "name": "Message Man",
                "album_name": "Blurryface",
                "number": 11,
                "duration": 240080,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10359,
                "name": "Hometown",
                "album_name": "Blurryface",
                "number": 12,
                "duration": 234946,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10360,
                "name": "Not Today",
                "album_name": "Blurryface",
                "number": 13,
                "duration": 238040,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 132,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10361,
                "name": "Goner",
                "album_name": "Blurryface",
                "number": 14,
                "duration": 236733,
                "artists": [
                    "Twenty One Pilots"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 132,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 1,
        "name": "Starboy",
        "release_date": "2016-11-25",
        "image": "https://i.scdn.co/image/f7419156fa0fdd8cd11ef96d19375ccfcdadb65a",
        "artist_id": 1,
        "spotify_popularity": 88,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 1,
            "name": "The Weeknd",
            "spotify_followers": 7886710,
            "spotify_popularity": 95,
            "image_small": "https://i.scdn.co/image/22e74f760f42dc5a8f91b8dbbbd38a0c6eaacbf4",
            "image_large": "https://i.scdn.co/image/a1bbafd8c21c14fd685a3d8efb0906db7c059a97",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 19:57:58",
            "bio": "{\"bio\":\"Ab\\u00e9l Makkonen Tesfaye (born 16 February 1990), known professionally as The Weeknd (pronounced \\\"the weekend\\\"), is a Canadian singer, songwriter, and record producer. In late 2010, Tesfaye anonymously uploaded several songs to YouTube under the name \\\"The Weeknd\\\". He released three nine-track mixtapes throughout 2011: House of Balloons, Thursday, and Echoes of Silence, which were critically acclaimed. The following year, he released a compilation album Trilogy, thirty tracks consisting of remastered versions of the mixtape material and three additional songs. It was released under Republic Records and his own label XO.\\nIn 2013, he released his debut studio album Kiss Land, which was supported by the singles \\\"Kiss Land\\\" and \\\"Live For\\\". His second album, Beauty Behind the Madness, which became his first number one album on the Billboard 200, included the top-five single \\\"Earned It\\\" and produced the number-one singles \\\"The Hills\\\" and \\\"Can't Feel My Face\\\". The songs have simultaneously held the top three spots on the Billboard Hot R&B Songs chart, making him the first artist in history to achieve this. The Weeknd has won two Grammy Awards and has been nominated for an Academy Award. In September 2016, the release of the third album, Starboy was announced, along with the release of the tracks \\\"Starboy\\\" and \\\"False Alarm\\\".\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/4\\/46\\/The_Weeknd_2015.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/2\\/2b\\/The_Weeknd_at_Bumbershoot_2015_%2821367628469%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/0\\/08\\/The_Weeknd_at_Massey_Hall_October_17%2C_2013_amber_lighting.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/4\\/4b\\/The_Weeknd_by_David_Hwang.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 104,
                "name": "Starboy",
                "album_name": "Starboy",
                "number": 1,
                "duration": 230453,
                "artists": [
                    "The Weeknd",
                    "Daft Punk"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 1,
                "temp_id": "472Hpqw6",
                "url": null
            },
            {
                "id": 1531783,
                "name": "Party Monster",
                "album_name": "Starboy",
                "number": 2,
                "duration": 249213,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 1,
                "temp_id": "Gszd5OIJ",
                "url": null
            },
            {
                "id": 1531784,
                "name": "False Alarm",
                "album_name": "Starboy",
                "number": 3,
                "duration": 220306,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1,
                "temp_id": "CYexEQOf",
                "url": null
            },
            {
                "id": 1531785,
                "name": "Reminder",
                "album_name": "Starboy",
                "number": 4,
                "duration": 218880,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 1,
                "temp_id": "qf83qYZG",
                "url": null
            },
            {
                "id": 1531786,
                "name": "Rockin’",
                "album_name": "Starboy",
                "number": 5,
                "duration": 232880,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 1,
                "temp_id": "qf83qYZG",
                "url": null
            },
            {
                "id": 1531787,
                "name": "Secrets",
                "album_name": "Starboy",
                "number": 6,
                "duration": 265600,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 1,
                "temp_id": "qf83qYZG",
                "url": null
            },
            {
                "id": 1531788,
                "name": "True Colors",
                "album_name": "Starboy",
                "number": 7,
                "duration": 206013,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 1,
                "temp_id": "CYexEQOf",
                "url": null
            },
            {
                "id": 1531789,
                "name": "Stargirl Interlude",
                "album_name": "Starboy",
                "number": 8,
                "duration": 111640,
                "artists": [
                    "The Weeknd",
                    "Lana Del Rey"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 1,
                "temp_id": "dHg68b4w",
                "url": null
            },
            {
                "id": 1531790,
                "name": "Sidewalks",
                "album_name": "Starboy",
                "number": 9,
                "duration": 231360,
                "artists": [
                    "The Weeknd",
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 1,
                "temp_id": "qf83qYZG",
                "url": null
            },
            {
                "id": 1531791,
                "name": "Six Feet Under",
                "album_name": "Starboy",
                "number": 10,
                "duration": 237573,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 1,
                "temp_id": "qf83qYZG",
                "url": null
            },
            {
                "id": 1531792,
                "name": "Love To Lay",
                "album_name": "Starboy",
                "number": 11,
                "duration": 223293,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 1,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1531793,
                "name": "A Lonely Night",
                "album_name": "Starboy",
                "number": 12,
                "duration": 220173,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 1,
                "temp_id": "CYexEQOf",
                "url": null
            },
            {
                "id": 1531794,
                "name": "Attention",
                "album_name": "Starboy",
                "number": 13,
                "duration": 197653,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 1,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1531795,
                "name": "Ordinary Life",
                "album_name": "Starboy",
                "number": 14,
                "duration": 221920,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1531796,
                "name": "Nothing Without You",
                "album_name": "Starboy",
                "number": 15,
                "duration": 198653,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 1,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1531797,
                "name": "All I Know",
                "album_name": "Starboy",
                "number": 16,
                "duration": 321026,
                "artists": [
                    "The Weeknd",
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1,
                "temp_id": "CYexEQOf",
                "url": null
            },
            {
                "id": 1531798,
                "name": "Die For You",
                "album_name": "Starboy",
                "number": 17,
                "duration": 260253,
                "artists": [
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 1,
                "temp_id": "CYexEQOf",
                "url": null
            },
            {
                "id": 1531799,
                "name": "I Feel It Coming",
                "album_name": "Starboy",
                "number": 18,
                "duration": 269186,
                "artists": [
                    "The Weeknd",
                    "Daft Punk"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 1,
                "temp_id": "ZTelZsvl",
                "url": null
            }
        ]
    },
    {
        "id": 592896,
        "name": "Mr. Davis",
        "release_date": null,
        "image": "https://i.scdn.co/image/55823eb40a5a6293320d1a9411306254c5e1c90e",
        "artist_id": 7,
        "spotify_popularity": 87,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 7,
            "name": "Gucci Mane",
            "spotify_followers": 1151324,
            "spotify_popularity": 95,
            "image_small": "https://i.scdn.co/image/dd076a73a8ae0a8c525ac71ae1d2a17a56f2f189",
            "image_large": "https://i.scdn.co/image/e8eeadc5509005396978782adedc3cb3e924bc4d",
            "fully_scraped": 0,
            "updated_at": "2017-09-27 17:36:57",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 3023702,
                "name": "Work In Progress (Intro)",
                "album_name": "Mr. Davis",
                "number": 1,
                "duration": 144346,
                "artists": [
                    "Gucci Mane"
                ],
                "youtube_id": null,
                "spotify_popularity": 41,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3033139,
                "name": "Back On",
                "album_name": "Mr. Davis",
                "number": 2,
                "duration": 181533,
                "artists": [
                    "Gucci Mane"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3037960,
                "name": "I Get The Bag (feat. Migos)",
                "album_name": "Mr. Davis",
                "number": 3,
                "duration": 229866,
                "artists": [
                    "Gucci Mane",
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 40,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3024741,
                "name": "Stunting Ain't Nuthin (feat. Slim Jxmmi & Young Dolph)",
                "album_name": "Mr. Davis",
                "number": 4,
                "duration": 316053,
                "artists": [
                    "Gucci Mane",
                    "Slim Jxmmi",
                    "Young Dolph"
                ],
                "youtube_id": null,
                "spotify_popularity": 41,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3038951,
                "name": "Curve (feat. The Weeknd)",
                "album_name": "Mr. Davis",
                "number": 5,
                "duration": 161989,
                "artists": [
                    "Gucci Mane",
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3028717,
                "name": "Enormous (feat. Ty Dolla $ign)",
                "album_name": "Mr. Davis",
                "number": 6,
                "duration": 244453,
                "artists": [
                    "Gucci Mane",
                    "Ty Dolla $ign"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3024643,
                "name": "Money Make Ya Handsome",
                "album_name": "Mr. Davis",
                "number": 8,
                "duration": 205026,
                "artists": [
                    "Gucci Mane"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3040611,
                "name": "Changed (feat. Big Sean)",
                "album_name": "Mr. Davis",
                "number": 9,
                "duration": 232186,
                "artists": [
                    "Gucci Mane",
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3037746,
                "name": "We Ride (feat. Monica)",
                "album_name": "Mr. Davis",
                "number": 10,
                "duration": 224914,
                "artists": [
                    "Gucci Mane",
                    "Monica"
                ],
                "youtube_id": null,
                "spotify_popularity": 36,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3033364,
                "name": "Lil Story (feat. ScHoolboy Q)",
                "album_name": "Mr. Davis",
                "number": 11,
                "duration": 170733,
                "artists": [
                    "Gucci Mane",
                    "ScHoolboy Q"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3028724,
                "name": "Tone it Down (feat. Chris Brown)",
                "album_name": "Mr. Davis",
                "number": 12,
                "duration": 218840,
                "artists": [
                    "Gucci Mane",
                    "Chris Brown"
                ],
                "youtube_id": null,
                "spotify_popularity": 36,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3022360,
                "name": "Make Love",
                "album_name": "Mr. Davis",
                "number": 13,
                "duration": 300160,
                "artists": [
                    "Gucci Mane",
                    "Nicki Minaj"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3024209,
                "name": "Money Piling",
                "album_name": "Mr. Davis",
                "number": 14,
                "duration": 176240,
                "artists": [
                    "Gucci Mane"
                ],
                "youtube_id": null,
                "spotify_popularity": 35,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3023549,
                "name": "Jumped Out The Whip (feat. A$AP Rocky)",
                "album_name": "Mr. Davis",
                "number": 15,
                "duration": 216373,
                "artists": [
                    "Gucci Mane",
                    "A$AP Rocky"
                ],
                "youtube_id": null,
                "spotify_popularity": 46,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3030805,
                "name": "Miss My Woe (feat. Rico Love)",
                "album_name": "Mr. Davis",
                "number": 16,
                "duration": 258480,
                "artists": [
                    "Gucci Mane",
                    "Rico Love"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3024644,
                "name": "Made It (Outro)",
                "album_name": "Mr. Davis",
                "number": 17,
                "duration": 193053,
                "artists": [
                    "Gucci Mane"
                ],
                "youtube_id": null,
                "spotify_popularity": 24,
                "album_id": 592896,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 587310,
        "name": "Beautiful Trauma",
        "release_date": "2017-10-13",
        "image": "https://i.scdn.co/image/9cd024bf875a35a46650ff33cc225e4fa14234f9",
        "artist_id": 1267,
        "spotify_popularity": 87,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 1267,
            "name": "P!nk",
            "spotify_followers": 2980254,
            "spotify_popularity": 91,
            "image_small": "https://i.scdn.co/image/55019ce117b4ddb39caf51e589df6675905fd1b5",
            "image_large": "https://i.scdn.co/image/afc2d276d9c1b398d4f1048c20584f926296b9c0",
            "fully_scraped": 0,
            "updated_at": "2017-10-24 13:59:09",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2994894,
                "name": "Beautiful Trauma",
                "album_name": "Beautiful Trauma",
                "number": 1,
                "duration": 250053,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031297,
                "name": "Revenge",
                "album_name": "Beautiful Trauma",
                "number": 2,
                "duration": 226160,
                "artists": [
                    "P!nk",
                    "Eminem"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031298,
                "name": "Whatever You Want",
                "album_name": "Beautiful Trauma",
                "number": 3,
                "duration": 242813,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031299,
                "name": "What About Us",
                "album_name": "Beautiful Trauma",
                "number": 4,
                "duration": 269600,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031300,
                "name": "But We Lost It",
                "album_name": "Beautiful Trauma",
                "number": 5,
                "duration": 207480,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031301,
                "name": "Barbies",
                "album_name": "Beautiful Trauma",
                "number": 6,
                "duration": 223840,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031302,
                "name": "Where We Go",
                "album_name": "Beautiful Trauma",
                "number": 7,
                "duration": 267493,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031303,
                "name": "For Now",
                "album_name": "Beautiful Trauma",
                "number": 8,
                "duration": 216253,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031304,
                "name": "Secrets",
                "album_name": "Beautiful Trauma",
                "number": 9,
                "duration": 210093,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031305,
                "name": "Better Life",
                "album_name": "Beautiful Trauma",
                "number": 10,
                "duration": 200386,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031306,
                "name": "I Am Here",
                "album_name": "Beautiful Trauma",
                "number": 11,
                "duration": 246066,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031307,
                "name": "Wild Hearts Can't Be Broken",
                "album_name": "Beautiful Trauma",
                "number": 12,
                "duration": 201053,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3031308,
                "name": "You Get My Love",
                "album_name": "Beautiful Trauma",
                "number": 13,
                "duration": 311160,
                "artists": [
                    "P!nk"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 587310,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 522906,
        "name": "hopeless fountain kingdom (Deluxe)",
        "release_date": "2017-06-02",
        "image": "https://i.scdn.co/image/6da7f494239ce239265554f6d8165ddcb09d8564",
        "artist_id": 1852,
        "spotify_popularity": 87,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 1852,
            "name": "Halsey",
            "spotify_followers": 2134058,
            "spotify_popularity": 90,
            "image_small": "https://i.scdn.co/image/40eaaa946262f0e825c361ee2a5b9cd047eebc0b",
            "image_large": "https://i.scdn.co/image/cdc0a00dd1e252ca0d9d9121bd9b02e5edefc8b1",
            "fully_scraped": 0,
            "updated_at": "2017-10-23 19:48:08",
            "bio": "{\"bio\":\"Ashley Nicolette Frangipane (born September 29, 1994), known professionally as Halsey (\\/\\u02c8h\\u0254\\u02d0l.zi\\/), is an American singer and songwriter. In 2014, she signed her first recording contract with Astralwerks and released her debut EP, titled Room 93. Her debut studio album, Badlands, was released in 2015. Her professional name, Halsey, is a reference to the Halsey Street station of the New York City Subway in Brooklyn as well as an anagram of her first name, Ashley.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/c4\\/Halsey_LA_%282%29.PNG\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2650744,
                "name": "The Prologue",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 1,
                "duration": 107684,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650745,
                "name": "100 Letters",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 2,
                "duration": 209980,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650746,
                "name": "Eyes Closed",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 3,
                "duration": 202438,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2640845,
                "name": "Heaven In Hiding",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 4,
                "duration": 207173,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650747,
                "name": "Alone",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 5,
                "duration": 205660,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650748,
                "name": "Now Or Never",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 6,
                "duration": 214801,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 522906,
                "temp_id": "WN6vDIM9",
                "url": null
            },
            {
                "id": 2650749,
                "name": "Sorry",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 7,
                "duration": 220540,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650750,
                "name": "Good Mourning",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 8,
                "duration": 67579,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650751,
                "name": "Lie",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 9,
                "duration": 149106,
                "artists": [
                    "Halsey",
                    "Quavo"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650752,
                "name": "Walls Could Talk",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 10,
                "duration": 101789,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650753,
                "name": "Bad At Love",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 11,
                "duration": 181279,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 86,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650754,
                "name": "Don’t Play",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 12,
                "duration": 210761,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2638165,
                "name": "Strangers",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 13,
                "duration": 221205,
                "artists": [
                    "Halsey",
                    "Lauren Jauregui"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650755,
                "name": "Angel On Fire",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 14,
                "duration": 194904,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2648130,
                "name": "Devil In Me",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 15,
                "duration": 249239,
                "artists": [
                    "Halsey"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2650756,
                "name": "Hopeless",
                "album_name": "hopeless fountain kingdom (Deluxe)",
                "number": 16,
                "duration": 187241,
                "artists": [
                    "Halsey",
                    "Cashmere Cat"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 522906,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 511310,
        "name": "Harry Styles",
        "release_date": "2017-05-12",
        "image": "https://i.scdn.co/image/2faf14c121b01bde63b55fdc9fbb3ddeec2ad48d",
        "artist_id": 377072,
        "spotify_popularity": 87,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 377072,
            "name": "Harry Styles",
            "spotify_followers": 1269829,
            "spotify_popularity": 84,
            "image_small": "https://i.scdn.co/image/44b81e6293ffec634395dc0c03aaa4099d0395ab",
            "image_large": "https://i.scdn.co/image/0d5beba53acf92820f5b7dfb59ce615c99800a13",
            "fully_scraped": 0,
            "updated_at": "2017-10-18 14:33:36",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2584709,
                "name": "Meet Me in the Hallway",
                "album_name": "Harry Styles",
                "number": 1,
                "duration": 227200,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2584710,
                "name": "Sign of the Times",
                "album_name": "Harry Styles",
                "number": 2,
                "duration": 340706,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 511310,
                "temp_id": "7ZxBZnIU",
                "url": null
            },
            {
                "id": 2584711,
                "name": "Carolina",
                "album_name": "Harry Styles",
                "number": 3,
                "duration": 189613,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2584712,
                "name": "Two Ghosts",
                "album_name": "Harry Styles",
                "number": 4,
                "duration": 229813,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2584713,
                "name": "Sweet Creature",
                "album_name": "Harry Styles",
                "number": 5,
                "duration": 224866,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2584714,
                "name": "Only Angel",
                "album_name": "Harry Styles",
                "number": 6,
                "duration": 291080,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2584715,
                "name": "Kiwi",
                "album_name": "Harry Styles",
                "number": 7,
                "duration": 176386,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2584716,
                "name": "Ever Since New York",
                "album_name": "Harry Styles",
                "number": 8,
                "duration": 253386,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2584717,
                "name": "Woman",
                "album_name": "Harry Styles",
                "number": 9,
                "duration": 278800,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2584718,
                "name": "From the Dining Table",
                "album_name": "Harry Styles",
                "number": 10,
                "duration": 211960,
                "artists": [
                    "Harry Styles"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 511310,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 508908,
        "name": "There's Really A Wolf",
        "release_date": "2017-05-05",
        "image": "https://i.scdn.co/image/7f5511ed5fd0c3d02ae19655a26a9b3ee6937f5b",
        "artist_id": 12800,
        "spotify_popularity": 87,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 12800,
            "name": "Russ",
            "spotify_followers": 839995,
            "spotify_popularity": 88,
            "image_small": "https://i.scdn.co/image/ac63800fb19cbe7bc279046b9efe0dd46364b013",
            "image_large": "https://i.scdn.co/image/2ebe30fc7fd5684743d4ab03b8e6e18af8dc3e81",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:12:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2581426,
                "name": "I'm Here",
                "album_name": "There's Really A Wolf",
                "number": 1,
                "duration": 239466,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762151,
                "name": "The Stakeout",
                "album_name": "There's Really A Wolf",
                "number": 2,
                "duration": 171013,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2594945,
                "name": "Act Now",
                "album_name": "There's Really A Wolf",
                "number": 3,
                "duration": 189426,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2576459,
                "name": "Cherry Hill",
                "album_name": "There's Really A Wolf",
                "number": 4,
                "duration": 222453,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2577367,
                "name": "Me You",
                "album_name": "There's Really A Wolf",
                "number": 5,
                "duration": 164200,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2577368,
                "name": "Ride Slow",
                "album_name": "There's Really A Wolf",
                "number": 6,
                "duration": 185400,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762152,
                "name": "Don't Lie",
                "album_name": "There's Really A Wolf",
                "number": 7,
                "duration": 188000,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2609717,
                "name": "Do It Myself",
                "album_name": "There's Really A Wolf",
                "number": 8,
                "duration": 167333,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626560,
                "name": "I Wanna Go Down With You",
                "album_name": "There's Really A Wolf",
                "number": 9,
                "duration": 183413,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2684900,
                "name": "Family & Friends",
                "album_name": "There's Really A Wolf",
                "number": 10,
                "duration": 175106,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2603345,
                "name": "What They Want",
                "album_name": "There's Really A Wolf",
                "number": 11,
                "duration": 165853,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762153,
                "name": "Got This",
                "album_name": "There's Really A Wolf",
                "number": 12,
                "duration": 172773,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2641294,
                "name": "No Turning Back",
                "album_name": "There's Really A Wolf",
                "number": 13,
                "duration": 154826,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2657178,
                "name": "Losin Control",
                "album_name": "There's Really A Wolf",
                "number": 14,
                "duration": 237506,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762154,
                "name": "Scared",
                "album_name": "There's Really A Wolf",
                "number": 15,
                "duration": 179066,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762155,
                "name": "Back To You",
                "album_name": "There's Really A Wolf",
                "number": 16,
                "duration": 207546,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2609713,
                "name": "One More Shot",
                "album_name": "There's Really A Wolf",
                "number": 17,
                "duration": 191973,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2623508,
                "name": "Emergency",
                "album_name": "There's Really A Wolf",
                "number": 18,
                "duration": 230173,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2582493,
                "name": "Pull The Trigger",
                "album_name": "There's Really A Wolf",
                "number": 19,
                "duration": 156560,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2762156,
                "name": "MVP",
                "album_name": "There's Really A Wolf",
                "number": 20,
                "duration": 256253,
                "artists": [
                    "Russ"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 508908,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 93373,
        "name": "FUTURE",
        "release_date": "2017-02-17",
        "image": "https://i.scdn.co/image/6b311ec6e3d6999a14e7d1ea8841d00226c292c6",
        "artist_id": 6184,
        "spotify_popularity": 87,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 6184,
            "name": "Future",
            "spotify_followers": 4423618,
            "spotify_popularity": 96,
            "image_small": "https://i.scdn.co/image/7f71d18bf087f8b3ee0dfb1c75af20d510d1e2be",
            "image_large": "https://i.scdn.co/image/5edf0373e8df999d93a2d6bf198c6b7ba85c3f67",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 18:05:15",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 525932,
                "name": "Chosen One",
                "album_name": "Future",
                "number": 1,
                "duration": 192299,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 36,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881444,
                "name": "Take You Home",
                "album_name": "Future",
                "number": 1,
                "duration": 146099,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 35,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2193999,
                "name": "Rent Money",
                "album_name": "FUTURE",
                "number": 1,
                "duration": 265366,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 525933,
                "name": "Karate Chop 2013",
                "album_name": "Future",
                "number": 2,
                "duration": 234879,
                "artists": [
                    "Future",
                    "Rick Ross",
                    "French Montana",
                    "The Birdman"
                ],
                "youtube_id": null,
                "spotify_popularity": 21,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881445,
                "name": "My Lamborghini",
                "album_name": "Future",
                "number": 2,
                "duration": 223701,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 39,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205375,
                "name": "Good Dope",
                "album_name": "FUTURE",
                "number": 2,
                "duration": 172225,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 525934,
                "name": "Bugatti 2013",
                "album_name": "Future",
                "number": 3,
                "duration": 325271,
                "artists": [
                    "Future",
                    "T.I.",
                    "The Birdman",
                    "Wiz Khalifa",
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 24,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881446,
                "name": "Smoke and Mirrors",
                "album_name": "Future",
                "number": 3,
                "duration": 168042,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 35,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205376,
                "name": "Zoom",
                "album_name": "FUTURE",
                "number": 3,
                "duration": 278429,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 525935,
                "name": "Fell In Luv",
                "album_name": "Future",
                "number": 4,
                "duration": 179586,
                "artists": [
                    "Future",
                    "Doe Boy",
                    "Mexico Rann"
                ],
                "youtube_id": null,
                "spotify_popularity": 15,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205377,
                "name": "Draco",
                "album_name": "FUTURE",
                "number": 4,
                "duration": 225134,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 525936,
                "name": "What You Mean",
                "album_name": "Future",
                "number": 5,
                "duration": 287769,
                "artists": [
                    "Future",
                    "Soulja Boy"
                ],
                "youtube_id": null,
                "spotify_popularity": 16,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881448,
                "name": "Brick",
                "album_name": "Future",
                "number": 5,
                "duration": 123205,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2190978,
                "name": "Super Trapper",
                "album_name": "FUTURE",
                "number": 5,
                "duration": 230129,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 525937,
                "name": "Long Time",
                "album_name": "Future",
                "number": 6,
                "duration": 245077,
                "artists": [
                    "Future",
                    "Fat Joe"
                ],
                "youtube_id": null,
                "spotify_popularity": 15,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881449,
                "name": "Fast Lane",
                "album_name": "Future",
                "number": 6,
                "duration": 180697,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 33,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205378,
                "name": "POA",
                "album_name": "FUTURE",
                "number": 6,
                "duration": 248747,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 525938,
                "name": "Way I'm Ballin",
                "album_name": "Future",
                "number": 7,
                "duration": 229926,
                "artists": [
                    "Future",
                    "Lil Wayne",
                    "The Birdman",
                    "Mack Maine"
                ],
                "youtube_id": null,
                "spotify_popularity": 17,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881450,
                "name": "What It Do",
                "album_name": "Future",
                "number": 7,
                "duration": 170875,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205379,
                "name": "Mask Off",
                "album_name": "FUTURE",
                "number": 7,
                "duration": 204600,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 90,
                "album_id": 93373,
                "temp_id": "KcJTfNPk",
                "url": null
            },
            {
                "id": 525939,
                "name": "These Eyes",
                "album_name": "Future",
                "number": 8,
                "duration": 171508,
                "artists": [
                    "Future",
                    "Bin Bank Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 11,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881451,
                "name": "Power",
                "album_name": "Future",
                "number": 8,
                "duration": 163189,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2203398,
                "name": "High Demand",
                "album_name": "FUTURE",
                "number": 8,
                "duration": 211691,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 525940,
                "name": "Twilight Zone",
                "album_name": "Future",
                "number": 9,
                "duration": 252624,
                "artists": [
                    "Future",
                    "Trey Songz",
                    "Sean Garrett"
                ],
                "youtube_id": null,
                "spotify_popularity": 13,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881452,
                "name": "Running 100 Miles",
                "album_name": "Future",
                "number": 9,
                "duration": 163189,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205380,
                "name": "Outta Time",
                "album_name": "FUTURE",
                "number": 9,
                "duration": 168607,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 525941,
                "name": "Get That Money",
                "album_name": "Future",
                "number": 10,
                "duration": 273229,
                "artists": [
                    "Future",
                    "Drumma Boy",
                    "Young Dolph"
                ],
                "youtube_id": null,
                "spotify_popularity": 13,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881453,
                "name": "Broken Heart",
                "album_name": "Future",
                "number": 10,
                "duration": 175635,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 33,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205381,
                "name": "Scrape",
                "album_name": "FUTURE",
                "number": 10,
                "duration": 217173,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881454,
                "name": "Hey Lady",
                "album_name": "Future",
                "number": 11,
                "duration": 220194,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 31,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2199451,
                "name": "I'm so Groovy",
                "album_name": "FUTURE",
                "number": 11,
                "duration": 261751,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881455,
                "name": "No Love For You",
                "album_name": "Future",
                "number": 12,
                "duration": 240187,
                "artists": [
                    "Future",
                    "Young Scooter"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205382,
                "name": "Might as Well",
                "album_name": "FUTURE",
                "number": 12,
                "duration": 207753,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881456,
                "name": "No Matter What",
                "album_name": "Future",
                "number": 13,
                "duration": 225256,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 39,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205383,
                "name": "Poppin' Tags",
                "album_name": "FUTURE",
                "number": 13,
                "duration": 218521,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881457,
                "name": "You Eva Seen",
                "album_name": "Future",
                "number": 14,
                "duration": 225976,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2198911,
                "name": "Massage In My Room",
                "album_name": "FUTURE",
                "number": 14,
                "duration": 155455,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881458,
                "name": "Greatest Show On Earth",
                "album_name": "Future",
                "number": 15,
                "duration": 224653,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205384,
                "name": "Flip",
                "album_name": "FUTURE",
                "number": 15,
                "duration": 254186,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881459,
                "name": "Love Long Time",
                "album_name": "Future",
                "number": 16,
                "duration": 229575,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2198387,
                "name": "When I Was Broke",
                "album_name": "FUTURE",
                "number": 16,
                "duration": 185131,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881460,
                "name": "Just Last Week",
                "album_name": "Future",
                "number": 17,
                "duration": 221402,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2205385,
                "name": "Feds Did a Sweep",
                "album_name": "FUTURE",
                "number": 17,
                "duration": 270465,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881461,
                "name": "I Will Crush Him",
                "album_name": "Future",
                "number": 18,
                "duration": 190519,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711167,
                "name": "Used to This",
                "album_name": "FUTURE",
                "number": 18,
                "duration": 180520,
                "artists": [
                    "Future",
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1881462,
                "name": "Hold Me Back",
                "album_name": "Future",
                "number": 19,
                "duration": 250078,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711168,
                "name": "Mask Off - Remix",
                "album_name": "FUTURE",
                "number": 19,
                "duration": 258426,
                "artists": [
                    "Future",
                    "Kendrick Lamar"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711169,
                "name": "Extra Luv",
                "album_name": "FUTURE",
                "number": 20,
                "duration": 246173,
                "artists": [
                    "Future",
                    "YG"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 93373,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 5668,
        "name": "2014 Forest Hills Drive",
        "release_date": "2014-12-09",
        "image": "https://i.scdn.co/image/176606ea8b00ee668e47de155c95a6fc1418bad6",
        "artist_id": 2078,
        "spotify_popularity": 87,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 2078,
            "name": "J. Cole",
            "spotify_followers": 3601433,
            "spotify_popularity": 89,
            "image_small": "https://i.scdn.co/image/c16b1dea590b94729285b948c5d7fd7c2540eb83",
            "image_large": "https://i.scdn.co/image/58f2a5fad6993299dc8bb93d10f8f15a2a85eb82",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 19:57:58",
            "bio": "{\"bio\":\"Jermaine Lamarr Cole (born January 28, 1985), better known by his stage name J. Cole, is an American recording artist and record producer. Raised in Fayetteville, North Carolina, Cole initially gained recognition as a rapper following the release of his debut mixtape, The Come Up, in early 2007. Intent on further pursuing a solo career as a rapper, he would go on to release two additional mixtapes after signing to Jay Z's Roc Nation imprint in 2009.\\nCole released his debut studio album, Cole World: The Sideline Story, in 2011. It debuted at number one on the U.S. Billboard 200, and was soon certified platinum by the Recording Industry Association of America (RIAA). His next two releases, 2013's Born Sinner and 2014's 2014 Forest Hills Drive, received mostly positive reviews from critics, while being both certified platinum in the US. The latter earned him his first Grammy Award nomination for Best Rap Album. 2014 Forest Hills Drive was also the first rap album in over 25 years to gain platinum certification without any guest appearances or features.\\nSelf-taught on piano, Cole also acts as a producer alongside his hip hop career, producing singles for artists such as Kendrick Lamar and Janet Jackson, as well as handling the majority of the production in his own projects. He has also developed other ventures, including Dreamville Records, as well as non-profit organization, the Dreamville Foundation. The Dreamville Foundation isn't the only non-profit gesture Cole has put forth. In January 2015, Cole decided to house single mothers rent free in his childhood home, 2014 Forest Hills Drive, Fayetteville, North Carolina.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/c2\\/Cole_Born_Sinner.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/ca\\/Dreamville-Records.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/c6\\/J.ColeLondon2011.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/a\\/ad\\/J._Cole_2010.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 252091,
                "name": "Intro",
                "album_name": "2014 Forest Hills Drive",
                "number": 1,
                "duration": 129266,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252092,
                "name": "January 28th",
                "album_name": "2014 Forest Hills Drive",
                "number": 2,
                "duration": 242813,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 49964,
                "name": "Wet Dreamz",
                "album_name": "2014 Forest Hills Drive",
                "number": 3,
                "duration": 239320,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252093,
                "name": "03' Adolescence",
                "album_name": "2014 Forest Hills Drive",
                "number": 4,
                "duration": 264213,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252094,
                "name": "A Tale of 2 Citiez",
                "album_name": "2014 Forest Hills Drive",
                "number": 5,
                "duration": 269786,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252095,
                "name": "Fire Squad",
                "album_name": "2014 Forest Hills Drive",
                "number": 6,
                "duration": 288200,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252096,
                "name": "St. Tropez",
                "album_name": "2014 Forest Hills Drive",
                "number": 7,
                "duration": 257920,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252076,
                "name": "G.O.M.D.",
                "album_name": "2014 Forest Hills Drive",
                "number": 8,
                "duration": 301133,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 113866,
                "name": "No Role Modelz",
                "album_name": "2014 Forest Hills Drive",
                "number": 9,
                "duration": 292986,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252097,
                "name": "Hello",
                "album_name": "2014 Forest Hills Drive",
                "number": 10,
                "duration": 219173,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252098,
                "name": "Apparently",
                "album_name": "2014 Forest Hills Drive",
                "number": 11,
                "duration": 293040,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 251336,
                "name": "Love Yourz",
                "album_name": "2014 Forest Hills Drive",
                "number": 12,
                "duration": 211680,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            },
            {
                "id": 252099,
                "name": "Note to Self",
                "album_name": "2014 Forest Hills Drive",
                "number": 13,
                "duration": 875306,
                "artists": [
                    "J. Cole"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 5668,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 584979,
        "name": "The Bigger Artist",
        "release_date": "2017-09-29",
        "image": "https://i.scdn.co/image/8f38421a8468c17f5fccb0373ab9a3c71e35ef4a",
        "artist_id": 27935,
        "spotify_popularity": 86,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 27935,
            "name": "A Boogie Wit da Hoodie",
            "spotify_followers": 727914,
            "spotify_popularity": 89,
            "image_small": "https://i.scdn.co/image/f836f406ae45e22bcb603d4acd02fa2516f1f39d",
            "image_large": "https://i.scdn.co/image/daa38635eafb3878d6795f5fb5a21b7a4d21182b",
            "fully_scraped": 0,
            "updated_at": "2017-10-21 20:01:00",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2983444,
                "name": "No Promises",
                "album_name": "The Bigger Artist",
                "number": 1,
                "duration": 197666,
                "artists": [
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983445,
                "name": "Undefeated (feat. 21 Savage)",
                "album_name": "The Bigger Artist",
                "number": 2,
                "duration": 174012,
                "artists": [
                    "A Boogie Wit da Hoodie",
                    "21 Savage"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983446,
                "name": "Drowning (feat. Kodak Black)",
                "album_name": "The Bigger Artist",
                "number": 3,
                "duration": 209269,
                "artists": [
                    "A Boogie Wit da Hoodie",
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983447,
                "name": "Say A'",
                "album_name": "The Bigger Artist",
                "number": 4,
                "duration": 214853,
                "artists": [
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983448,
                "name": "No Comparison",
                "album_name": "The Bigger Artist",
                "number": 5,
                "duration": 244209,
                "artists": [
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983449,
                "name": "Unhappy",
                "album_name": "The Bigger Artist",
                "number": 6,
                "duration": 179166,
                "artists": [
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983450,
                "name": "Let's Start Over",
                "album_name": "The Bigger Artist",
                "number": 7,
                "duration": 217689,
                "artists": [
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983451,
                "name": "Get To You",
                "album_name": "The Bigger Artist",
                "number": 8,
                "duration": 206711,
                "artists": [
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983452,
                "name": "Somebody (feat. Don Q)",
                "album_name": "The Bigger Artist",
                "number": 9,
                "duration": 179847,
                "artists": [
                    "A Boogie Wit da Hoodie",
                    "Don Q"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983453,
                "name": "Money Sprung (feat. Don Q)",
                "album_name": "The Bigger Artist",
                "number": 10,
                "duration": 196791,
                "artists": [
                    "A Boogie Wit da Hoodie",
                    "Don Q"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983454,
                "name": "If I Gotta Go",
                "album_name": "The Bigger Artist",
                "number": 11,
                "duration": 203775,
                "artists": [
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983455,
                "name": "Fucking & Kissing (feat. Chris Brown)",
                "album_name": "The Bigger Artist",
                "number": 12,
                "duration": 172088,
                "artists": [
                    "A Boogie Wit da Hoodie",
                    "Chris Brown"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983363,
                "name": "Bad Girl (feat. Trey Songz & Robin Thicke)",
                "album_name": "The Bigger Artist",
                "number": 13,
                "duration": 230187,
                "artists": [
                    "A Boogie Wit da Hoodie",
                    "Trey Songz",
                    "Robin Thicke"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983456,
                "name": "Stalking You",
                "album_name": "The Bigger Artist",
                "number": 14,
                "duration": 221076,
                "artists": [
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983457,
                "name": "Beast Mode (feat. PnB Rock & YoungBoy Never Broke Again)",
                "album_name": "The Bigger Artist",
                "number": 15,
                "duration": 258158,
                "artists": [
                    "A Boogie Wit da Hoodie",
                    "PnB Rock",
                    "YoungBoy Never Broke Again"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 584979,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 582765,
        "name": "Comme prévu",
        "release_date": "2017-09-08",
        "image": "https://i.scdn.co/image/6ac86be1f3a2a465ef4f8c54ff705e5fef4305a4",
        "artist_id": 116137,
        "spotify_popularity": 86,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 116137,
            "name": "Ninho",
            "spotify_followers": 250872,
            "spotify_popularity": 82,
            "image_small": "https://i.scdn.co/image/6ac86be1f3a2a465ef4f8c54ff705e5fef4305a4",
            "image_large": "https://i.scdn.co/image/62393b6358e1fe1b1659bd583edb0a16d7c10732",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 08:31:00",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2973100,
                "name": "Comme prévu",
                "album_name": "Comme prévu",
                "number": 1,
                "duration": 145186,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973101,
                "name": "Chino",
                "album_name": "Comme prévu",
                "number": 2,
                "duration": 206146,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973102,
                "name": "Mamacita",
                "album_name": "Comme prévu",
                "number": 3,
                "duration": 187026,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973103,
                "name": "Caramelo",
                "album_name": "Comme prévu",
                "number": 4,
                "duration": 226533,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973104,
                "name": "Laisse pas traîner ton fils (feat. Sofiane)",
                "album_name": "Comme prévu",
                "number": 5,
                "duration": 211000,
                "artists": [
                    "Ninho",
                    "Sofiane"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973105,
                "name": "Roro",
                "album_name": "Comme prévu",
                "number": 6,
                "duration": 184354,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973106,
                "name": "HLM ou Palace",
                "album_name": "Comme prévu",
                "number": 7,
                "duration": 193853,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973107,
                "name": "Rose",
                "album_name": "Comme prévu",
                "number": 8,
                "duration": 200346,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973108,
                "name": "De l'autre côté (feat. Nekfeu)",
                "album_name": "Comme prévu",
                "number": 9,
                "duration": 229466,
                "artists": [
                    "Ninho",
                    "Nekfeu"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973109,
                "name": "Elle m'a eu",
                "album_name": "Comme prévu",
                "number": 10,
                "duration": 177106,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973110,
                "name": "Ce soir (feat. Alonzo)",
                "album_name": "Comme prévu",
                "number": 11,
                "duration": 187066,
                "artists": [
                    "Ninho",
                    "Alonzo"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973111,
                "name": "Dita (feat. Hös)",
                "album_name": "Comme prévu",
                "number": 12,
                "duration": 216000,
                "artists": [
                    "Ninho",
                    "Hös"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973112,
                "name": "Pourquoi",
                "album_name": "Comme prévu",
                "number": 13,
                "duration": 206520,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973113,
                "name": "Lové (feat. Gradur)",
                "album_name": "Comme prévu",
                "number": 14,
                "duration": 195000,
                "artists": [
                    "Ninho",
                    "Gradur"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2973114,
                "name": "Carbozo",
                "album_name": "Comme prévu",
                "number": 15,
                "duration": 155640,
                "artists": [
                    "Ninho"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 582765,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 569466,
        "name": "Fifth Harmony",
        "release_date": "2017-08-25",
        "image": "https://i.scdn.co/image/792eeffb0d9fc3a22b778e99c3024b70073f7810",
        "artist_id": 209,
        "spotify_popularity": 86,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 209,
            "name": "Fifth Harmony",
            "spotify_followers": 3420085,
            "spotify_popularity": 87,
            "image_small": "https://i.scdn.co/image/41935c973086a4e4ad47dfda8914eb4a4aca1423",
            "image_large": "https://i.scdn.co/image/c5e2e813755c107d8f4b068ec1001ea0f91409f1",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 18:27:10",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2910639,
                "name": "Down",
                "album_name": "Fifth Harmony",
                "number": 1,
                "duration": 165200,
                "artists": [
                    "Fifth Harmony",
                    "Gucci Mane"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910640,
                "name": "He Like That",
                "album_name": "Fifth Harmony",
                "number": 2,
                "duration": 217106,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910641,
                "name": "Sauced Up",
                "album_name": "Fifth Harmony",
                "number": 3,
                "duration": 197786,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910642,
                "name": "Make You Mad",
                "album_name": "Fifth Harmony",
                "number": 4,
                "duration": 174506,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910643,
                "name": "Deliver",
                "album_name": "Fifth Harmony",
                "number": 5,
                "duration": 206520,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910644,
                "name": "Lonely Night",
                "album_name": "Fifth Harmony",
                "number": 6,
                "duration": 205306,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2909849,
                "name": "Don't Say You Love Me",
                "album_name": "Fifth Harmony",
                "number": 7,
                "duration": 193066,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2905711,
                "name": "Angel",
                "album_name": "Fifth Harmony",
                "number": 8,
                "duration": 189440,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910645,
                "name": "Messy",
                "album_name": "Fifth Harmony",
                "number": 9,
                "duration": 194226,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2910646,
                "name": "Bridges",
                "album_name": "Fifth Harmony",
                "number": 10,
                "duration": 243266,
                "artists": [
                    "Fifth Harmony"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 569466,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 569011,
        "name": "Still Striving",
        "release_date": null,
        "image": "https://i.scdn.co/image/338e8f6a727ac686e3eb3de21a54c5ef6e10c68a",
        "artist_id": 20290,
        "spotify_popularity": 86,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 20290,
            "name": "A$AP Ferg",
            "spotify_followers": 740780,
            "spotify_popularity": 86,
            "image_small": "https://i.scdn.co/image/556d7ca3fd7add2d8c2c2d95231e4e96726f76af",
            "image_large": "https://i.scdn.co/image/ea08ae0c9e60a0a416f18b02b35bb6591f62d171",
            "fully_scraped": 0,
            "updated_at": "2017-10-24 10:17:50",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2956530,
                "name": "Trap And A Dream",
                "album_name": "Still Striving",
                "number": 1,
                "duration": 189666,
                "artists": [
                    "A$AP Ferg",
                    "Meek Mill"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2956531,
                "name": "Rubber Band Man",
                "album_name": "Still Striving",
                "number": 2,
                "duration": 205746,
                "artists": [
                    "A$AP Ferg",
                    "Cam'Ron"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2920645,
                "name": "Olympian",
                "album_name": "Still Striving",
                "number": 3,
                "duration": 211280,
                "artists": [
                    "A$AP Ferg",
                    "Dave East"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2956532,
                "name": "Aww Yeah",
                "album_name": "Still Striving",
                "number": 4,
                "duration": 194573,
                "artists": [
                    "A$AP Ferg",
                    "Lil Yachty"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2956529,
                "name": "What Do You Do",
                "album_name": "Still Striving",
                "number": 5,
                "duration": 176866,
                "artists": [
                    "A$AP Ferg",
                    "NAV"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2956533,
                "name": "Mad Man",
                "album_name": "Still Striving",
                "number": 7,
                "duration": 159026,
                "artists": [
                    "A$AP Ferg",
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2919110,
                "name": "Plain Jane",
                "album_name": "Still Striving",
                "number": 8,
                "duration": 173600,
                "artists": [
                    "A$AP Ferg"
                ],
                "youtube_id": null,
                "spotify_popularity": 88,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2919199,
                "name": "Nasty (Who Dat)",
                "album_name": "Still Striving",
                "number": 9,
                "duration": 209813,
                "artists": [
                    "A$AP Ferg",
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2904518,
                "name": "East Coast REMIX",
                "album_name": "Still Striving",
                "number": 12,
                "duration": 335573,
                "artists": [
                    "A$AP Ferg",
                    "Busta Rhymes",
                    "A$AP Rocky",
                    "Dave East",
                    "French Montana",
                    "Rick Ross",
                    "Snoop Dogg"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2921308,
                "name": "Nandos",
                "album_name": "Still Striving",
                "number": 13,
                "duration": 175200,
                "artists": [
                    "A$AP Ferg"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3056882,
                "name": "Tango",
                "album_name": "Still Striving",
                "number": 14,
                "duration": 272760,
                "artists": [
                    "A$AP Ferg"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 569011,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 551519,
        "name": "Flower Boy",
        "release_date": "2017-07-21",
        "image": "https://i.scdn.co/image/8978ca55e89fc664cbf672804a90ac7afb142fd0",
        "artist_id": 6235,
        "spotify_popularity": 86,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 6235,
            "name": "Tyler, The Creator",
            "spotify_followers": 1362923,
            "spotify_popularity": 85,
            "image_small": "https://i.scdn.co/image/d60f1bf1aa60de174843646c1346a42ae8e51a63",
            "image_large": "https://i.scdn.co/image/26e10f3fd0573e87a83e6611428b01420865d1f9",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 19:57:58",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2819872,
                "name": "Foreword",
                "album_name": "Flower Boy",
                "number": 1,
                "duration": 194080,
                "artists": [
                    "Tyler, The Creator",
                    "Rex Orange County"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819867,
                "name": "Where This Flower Blooms",
                "album_name": "Flower Boy",
                "number": 2,
                "duration": 194933,
                "artists": [
                    "Tyler, The Creator",
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819877,
                "name": "Sometimes...",
                "album_name": "Flower Boy",
                "number": 3,
                "duration": 36160,
                "artists": [
                    "Tyler, The Creator"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819868,
                "name": "See You Again",
                "album_name": "Flower Boy",
                "number": 4,
                "duration": 180386,
                "artists": [
                    "Tyler, The Creator",
                    "Kali Uchis"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819871,
                "name": "Who Dat Boy",
                "album_name": "Flower Boy",
                "number": 5,
                "duration": 205093,
                "artists": [
                    "Tyler, The Creator",
                    "A$AP Rocky"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819874,
                "name": "Pothole",
                "album_name": "Flower Boy",
                "number": 6,
                "duration": 237000,
                "artists": [
                    "Tyler, The Creator",
                    "Jaden Smith"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819875,
                "name": "Garden Shed",
                "album_name": "Flower Boy",
                "number": 7,
                "duration": 223946,
                "artists": [
                    "Tyler, The Creator",
                    "Estelle"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819876,
                "name": "Boredom",
                "album_name": "Flower Boy",
                "number": 8,
                "duration": 320720,
                "artists": [
                    "Tyler, The Creator",
                    "Rex Orange County",
                    "Anna Of The North"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819873,
                "name": "I Ain't Got Time!",
                "album_name": "Flower Boy",
                "number": 9,
                "duration": 206266,
                "artists": [
                    "Tyler, The Creator"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819879,
                "name": "911 / Mr. Lonely",
                "album_name": "Flower Boy",
                "number": 10,
                "duration": 255653,
                "artists": [
                    "Tyler, The Creator",
                    "Frank Ocean",
                    "Steve Lacy"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819878,
                "name": "Droppin' Seeds",
                "album_name": "Flower Boy",
                "number": 11,
                "duration": 60000,
                "artists": [
                    "Tyler, The Creator",
                    "Lil Wayne"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819880,
                "name": "November",
                "album_name": "Flower Boy",
                "number": 12,
                "duration": 225346,
                "artists": [
                    "Tyler, The Creator"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2819881,
                "name": "Glitter",
                "album_name": "Flower Boy",
                "number": 13,
                "duration": 224893,
                "artists": [
                    "Tyler, The Creator"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2836912,
                "name": "Enjoy Right Now, Today",
                "album_name": "Flower Boy",
                "number": 14,
                "duration": 235400,
                "artists": [
                    "Tyler, The Creator"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 551519,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 497047,
        "name": "Playboi Carti",
        "release_date": "2017-04-14",
        "image": "https://i.scdn.co/image/65020e48b12fbe3b20fe2f2ef7014f3e8ce54e1e",
        "artist_id": 54295,
        "spotify_popularity": 86,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 54295,
            "name": "Playboi Carti",
            "spotify_followers": 576083,
            "spotify_popularity": 87,
            "image_small": "https://i.scdn.co/image/7875b0c8179eec6ddbbc7990d03fdae3ba063caa",
            "image_large": "https://i.scdn.co/image/d3c4c2a06332c88e967387b38177d17d20e2331b",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:12:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2859458,
                "name": "Location",
                "album_name": "Playboi Carti",
                "number": 1,
                "duration": 168783,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2522034,
                "name": "Magnolia",
                "album_name": "Playboi Carti",
                "number": 2,
                "duration": 181812,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 86,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2859459,
                "name": "Lookin",
                "album_name": "Playboi Carti",
                "number": 3,
                "duration": 183552,
                "artists": [
                    "Playboi Carti",
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2522033,
                "name": "wokeuplikethis*",
                "album_name": "Playboi Carti",
                "number": 4,
                "duration": 235535,
                "artists": [
                    "Playboi Carti",
                    "Lil Uzi Vert"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608906,
                "name": "Let It Go",
                "album_name": "Playboi Carti",
                "number": 5,
                "duration": 150409,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2859460,
                "name": "Half & Half",
                "album_name": "Playboi Carti",
                "number": 6,
                "duration": 227044,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2569842,
                "name": "New Choppa",
                "album_name": "Playboi Carti",
                "number": 7,
                "duration": 126043,
                "artists": [
                    "Playboi Carti",
                    "A$AP Rocky"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2602956,
                "name": "Other Shit",
                "album_name": "Playboi Carti",
                "number": 8,
                "duration": 168713,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2611754,
                "name": "NO. 9",
                "album_name": "Playboi Carti",
                "number": 9,
                "duration": 199190,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2800495,
                "name": "dothatshit!",
                "album_name": "Playboi Carti",
                "number": 10,
                "duration": 184964,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2859461,
                "name": "Lame Niggaz",
                "album_name": "Playboi Carti",
                "number": 11,
                "duration": 173683,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2859462,
                "name": "Yah Mean",
                "album_name": "Playboi Carti",
                "number": 12,
                "duration": 165642,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2532033,
                "name": "Flex",
                "album_name": "Playboi Carti",
                "number": 13,
                "duration": 240459,
                "artists": [
                    "Playboi Carti",
                    "Leven Kali"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2653141,
                "name": "Kelly K",
                "album_name": "Playboi Carti",
                "number": 14,
                "duration": 271154,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2616082,
                "name": "Had 2",
                "album_name": "Playboi Carti",
                "number": 15,
                "duration": 139278,
                "artists": [
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 497047,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 409247,
        "name": "So Good",
        "release_date": "2017-03-17",
        "image": "https://i.scdn.co/image/1820ea91e0723b1ce8820bb2cedae9f1be9d1de9",
        "artist_id": 198,
        "spotify_popularity": 86,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 198,
            "name": "Zara Larsson",
            "spotify_followers": 1409609,
            "spotify_popularity": 87,
            "image_small": "https://i.scdn.co/image/41ff5aff39977e0bfb5ab442e4522b93e1e7dd1f",
            "image_large": "https://i.scdn.co/image/3961cce791cb4581985543841952fb9e2242b81b",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:07:27",
            "bio": "{\"bio\":\"Zara Maria Larsson (pronounced [\\u00b2s\\u0251\\u02d0ra ma\\u00b2ri\\u02d0.a \\u02c8l\\u0251\\u02d0\\u0282\\u0254n]; born 16 December 1997) is a Swedish singer and songwriter. She first gained national fame for winning the 2008 season of the talent show Talang, the Swedish version of Got Talent, at the age of 10. Larsson signed with the record label TEN Music Group in 2012 and released her debut EP album, Introducing, in January 2013. The single \\\"Uncover\\\" topped the charts in Sweden, Denmark, and Norway. By February 2013, \\\"Uncover\\\" was certified platinum by Universal Music Sweden. In July 2013, Introducing was certified triple platinum in the country. Larsson also signed a three-year contract with Epic Records in the United States in April 2013. She performed at the opening and closing ceremonies in France for UEFA Euro 2016.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/b\\/b2\\/Zara_Larsson_2013.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/5\\/5b\\/Zara_Larsson_By_Daniel_%C3%85hs.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/2\\/26\\/Zara_Larsson_Stavernfestivalen_%28203836%29.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2366559,
                "name": "What They Say",
                "album_name": "So Good",
                "number": 1,
                "duration": 218946,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366560,
                "name": "Lush Life",
                "album_name": "So Good",
                "number": 2,
                "duration": 201122,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366561,
                "name": "I Would Like",
                "album_name": "So Good",
                "number": 3,
                "duration": 226720,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 624862,
                "name": "So Good",
                "album_name": "So Good",
                "number": 4,
                "duration": 166706,
                "artists": [
                    "Zara Larsson",
                    "Ty Dolla $ign"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366562,
                "name": "TG4M",
                "album_name": "So Good",
                "number": 5,
                "duration": 172893,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366563,
                "name": "Only You",
                "album_name": "So Good",
                "number": 6,
                "duration": 222373,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2357763,
                "name": "Never Forget You",
                "album_name": "So Good",
                "number": 7,
                "duration": 213427,
                "artists": [
                    "Zara Larsson",
                    "MNEK"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2361283,
                "name": "Sundown",
                "album_name": "So Good",
                "number": 8,
                "duration": 205773,
                "artists": [
                    "Zara Larsson",
                    "WizKid"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366564,
                "name": "Don't Let Me Be Yours",
                "album_name": "So Good",
                "number": 9,
                "duration": 199053,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366565,
                "name": "Make That Money Girl",
                "album_name": "So Good",
                "number": 10,
                "duration": 198880,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2349612,
                "name": "Ain't My Fault",
                "album_name": "So Good",
                "number": 11,
                "duration": 224030,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2338079,
                "name": "One Mississippi",
                "album_name": "So Good",
                "number": 12,
                "duration": 187906,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366566,
                "name": "Funeral",
                "album_name": "So Good",
                "number": 13,
                "duration": 215706,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366567,
                "name": "I Can't Fall in Love Without You",
                "album_name": "So Good",
                "number": 14,
                "duration": 180640,
                "artists": [
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2366568,
                "name": "Symphony",
                "album_name": "So Good",
                "number": 15,
                "duration": 214866,
                "artists": [
                    "Clean Bandit",
                    "Zara Larsson"
                ],
                "youtube_id": null,
                "spotify_popularity": 34,
                "album_id": 409247,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 163321,
        "name": "Back from the Edge",
        "release_date": "2016-10-28",
        "image": "https://i.scdn.co/image/c8637be962e25fe28fc53d9f6d6896b60589aeff",
        "artist_id": 20287,
        "spotify_popularity": 86,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 20287,
            "name": "James Arthur",
            "spotify_followers": 1116173,
            "spotify_popularity": 86,
            "image_small": "https://i.scdn.co/image/d4ceba565d393f01b5aa2974ecdb0a3143713574",
            "image_large": "https://i.scdn.co/image/c068c0106219344f2e2c189e5a15233e0a291496",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 06:09:21",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 880547,
                "name": "Back from the Edge",
                "album_name": "Back from the Edge",
                "number": 1,
                "duration": 234146,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880548,
                "name": "Say You Won't Let Go",
                "album_name": "Back from the Edge",
                "number": 2,
                "duration": 211466,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 87,
                "album_id": 163321,
                "temp_id": "ZTelZsvl",
                "url": null
            },
            {
                "id": 880549,
                "name": "Prisoner",
                "album_name": "Back from the Edge",
                "number": 3,
                "duration": 238160,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880550,
                "name": "Can I Be Him",
                "album_name": "Back from the Edge",
                "number": 4,
                "duration": 246880,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880551,
                "name": "I Am",
                "album_name": "Back from the Edge",
                "number": 5,
                "duration": 191080,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880552,
                "name": "Train Wreck",
                "album_name": "Back from the Edge",
                "number": 6,
                "duration": 208826,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880553,
                "name": "Safe Inside",
                "album_name": "Back from the Edge",
                "number": 7,
                "duration": 222173,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880554,
                "name": "Sober",
                "album_name": "Back from the Edge",
                "number": 8,
                "duration": 186000,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880555,
                "name": "Phoenix",
                "album_name": "Back from the Edge",
                "number": 9,
                "duration": 249120,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880556,
                "name": "Let Me Love the Lonely",
                "album_name": "Back from the Edge",
                "number": 10,
                "duration": 172386,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880557,
                "name": "Sermon",
                "album_name": "Back from the Edge",
                "number": 11,
                "duration": 272573,
                "artists": [
                    "James Arthur",
                    "SHOTTY HORROH"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880558,
                "name": "Remember Who I Was",
                "album_name": "Back from the Edge",
                "number": 12,
                "duration": 177933,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880559,
                "name": "Finally",
                "album_name": "Back from the Edge",
                "number": 13,
                "duration": 261386,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880560,
                "name": "The Truth",
                "album_name": "Back from the Edge",
                "number": 14,
                "duration": 260013,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880561,
                "name": "Skeletons",
                "album_name": "Back from the Edge",
                "number": 15,
                "duration": 237680,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880562,
                "name": "If Only",
                "album_name": "Back from the Edge",
                "number": 16,
                "duration": 243960,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            },
            {
                "id": 880563,
                "name": "Coming Home for Summer",
                "album_name": "Back from the Edge",
                "number": 17,
                "duration": 229026,
                "artists": [
                    "James Arthur"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 163321,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 598302,
        "name": "SUPER SLIMEY",
        "release_date": "2017-10-20",
        "image": "https://i.scdn.co/image/f022f964ada6c9956208fa4855fad2cd4f7150d1",
        "artist_id": 7157,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 7157,
            "name": "Young Thug",
            "spotify_followers": 1785701,
            "spotify_popularity": 95,
            "image_small": "https://i.scdn.co/image/64713d8ad9d6f05dc5f55268f8fd1e7e2e89888f",
            "image_large": "https://i.scdn.co/image/1eb847e76b0c8391cd9ec6dff07e93b86ec33d77",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:12:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 3064268,
                "name": "Three",
                "album_name": "SUPER SLIMEY",
                "number": 2,
                "duration": 159400,
                "artists": [
                    "Future",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3064269,
                "name": "All da Smoke",
                "album_name": "SUPER SLIMEY",
                "number": 3,
                "duration": 204960,
                "artists": [
                    "Future",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3054292,
                "name": "200",
                "album_name": "SUPER SLIMEY",
                "number": 4,
                "duration": 146986,
                "artists": [
                    "Future",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3064270,
                "name": "Cruise Ship",
                "album_name": "SUPER SLIMEY",
                "number": 5,
                "duration": 166466,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3064271,
                "name": "Drip on Me",
                "album_name": "SUPER SLIMEY",
                "number": 8,
                "duration": 199840,
                "artists": [
                    "Future",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3060578,
                "name": "Real Love",
                "album_name": "SUPER SLIMEY",
                "number": 9,
                "duration": 242346,
                "artists": [
                    "Future",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3064272,
                "name": "4 da Gang",
                "album_name": "SUPER SLIMEY",
                "number": 10,
                "duration": 187748,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3056832,
                "name": "Killed Before",
                "album_name": "SUPER SLIMEY",
                "number": 11,
                "duration": 220706,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3048706,
                "name": "Mink Flow",
                "album_name": "SUPER SLIMEY",
                "number": 12,
                "duration": 178786,
                "artists": [
                    "Future",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3064273,
                "name": "Group Home",
                "album_name": "SUPER SLIMEY",
                "number": 13,
                "duration": 242053,
                "artists": [
                    "Future",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 598302,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 583838,
        "name": "Tell Me You Love Me (Deluxe)",
        "release_date": "2017-09-29",
        "image": "https://i.scdn.co/image/956c651238259ff5b480d30908fc778f4c5ed859",
        "artist_id": 4646,
        "spotify_popularity": 85,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 4646,
            "name": "Demi Lovato",
            "spotify_followers": 4887086,
            "spotify_popularity": 93,
            "image_small": "https://i.scdn.co/image/0fd4ad1d2869ef698a359027ad6c70741845e8a9",
            "image_large": "https://i.scdn.co/image/2aa6c96a7d255e76fe654160272a1d2bb3e2054d",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:07:27",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2978920,
                "name": "Sorry Not Sorry",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 1,
                "duration": 203760,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 89,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978921,
                "name": "Tell Me You Love Me",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 2,
                "duration": 236986,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978922,
                "name": "Sexy Dirty Love",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 3,
                "duration": 213173,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978923,
                "name": "You Don't Do It For Me Anymore",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 4,
                "duration": 197720,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978924,
                "name": "Daddy Issues",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 5,
                "duration": 189933,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978925,
                "name": "Ruin The Friendship",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 6,
                "duration": 233893,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978926,
                "name": "Only Forever",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 7,
                "duration": 197480,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978927,
                "name": "Lonely",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 8,
                "duration": 281880,
                "artists": [
                    "Demi Lovato",
                    "Lil Wayne"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978928,
                "name": "Cry Baby",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 9,
                "duration": 222746,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978929,
                "name": "Games",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 10,
                "duration": 188413,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978930,
                "name": "Concentrate",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 11,
                "duration": 197600,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978931,
                "name": "Hitchhiker",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 12,
                "duration": 223493,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978932,
                "name": "Instruction",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 13,
                "duration": 166426,
                "artists": [
                    "Jax Jones",
                    "Demi Lovato",
                    "Stefflon Don"
                ],
                "youtube_id": null,
                "spotify_popularity": 10,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978933,
                "name": "Sorry Not Sorry - Acoustic",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 14,
                "duration": 205546,
                "artists": [
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2978934,
                "name": "No Promises - Acoustic",
                "album_name": "Tell Me You Love Me (Deluxe)",
                "number": 15,
                "duration": 232066,
                "artists": [
                    "Cheat Codes",
                    "Demi Lovato"
                ],
                "youtube_id": null,
                "spotify_popularity": 1,
                "album_id": 583838,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 575753,
        "name": "Life Changes",
        "release_date": "2017-09-08",
        "image": "https://i.scdn.co/image/91302a72b1f5e845c4ad878cbbc0a22062d72441",
        "artist_id": 7512,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 7512,
            "name": "Thomas Rhett",
            "spotify_followers": 865757,
            "spotify_popularity": 85,
            "image_small": "https://i.scdn.co/image/e36feb919242453d6e178d26ba15938031bc0572",
            "image_large": "https://i.scdn.co/image/13b9671e7a7f063f13f8a02e9042be1eb8e4c4a0",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 14:51:03",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2946954,
                "name": "Craving You",
                "album_name": "Life Changes",
                "number": 1,
                "duration": 223626,
                "artists": [
                    "Thomas Rhett",
                    "Maren Morris"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2946953,
                "name": "Unforgettable",
                "album_name": "Life Changes",
                "number": 2,
                "duration": 157080,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983810,
                "name": "Sixteen",
                "album_name": "Life Changes",
                "number": 3,
                "duration": 178333,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2948880,
                "name": "Drink A Little Beer",
                "album_name": "Life Changes",
                "number": 4,
                "duration": 214680,
                "artists": [
                    "Thomas Rhett",
                    "Rhett Akins"
                ],
                "youtube_id": null,
                "spotify_popularity": 46,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2945133,
                "name": "Marry Me",
                "album_name": "Life Changes",
                "number": 5,
                "duration": 205453,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983811,
                "name": "Leave Right Now",
                "album_name": "Life Changes",
                "number": 6,
                "duration": 195666,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2949648,
                "name": "Smooth Like The Summer",
                "album_name": "Life Changes",
                "number": 7,
                "duration": 167813,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 44,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 313770,
                "name": "Life Changes",
                "album_name": "Life Changes",
                "number": 8,
                "duration": 190226,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2972154,
                "name": "When You Look Like That",
                "album_name": "Life Changes",
                "number": 9,
                "duration": 202906,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 45,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983812,
                "name": "Sweetheart",
                "album_name": "Life Changes",
                "number": 10,
                "duration": 205266,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 46,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2945327,
                "name": "Kiss Me Like A Stranger",
                "album_name": "Life Changes",
                "number": 11,
                "duration": 226626,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2935945,
                "name": "Renegades",
                "album_name": "Life Changes",
                "number": 12,
                "duration": 222640,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 43,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983813,
                "name": "Gateway Love",
                "album_name": "Life Changes",
                "number": 13,
                "duration": 206506,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 43,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2983814,
                "name": "Grave",
                "album_name": "Life Changes",
                "number": 14,
                "duration": 193680,
                "artists": [
                    "Thomas Rhett"
                ],
                "youtube_id": null,
                "spotify_popularity": 50,
                "album_id": 575753,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 575422,
        "name": "O Céu Explica Tudo (Ao Vivo)",
        "release_date": "2017-07-07",
        "image": "https://i.scdn.co/image/7a65c51ce79a8e2a5cc0fd997ed36623a311ef30",
        "artist_id": 11640,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 11640,
            "name": "Henrique & Juliano",
            "spotify_followers": 2591176,
            "spotify_popularity": 84,
            "image_small": "https://i.scdn.co/image/406aec2fb89e9f0e0cd36fe4e53f3b271aa6234b",
            "image_large": "https://i.scdn.co/image/7a53e2793f9e3c14545d3a1475883fd20c4b6713",
            "fully_scraped": 0,
            "updated_at": "2017-10-21 02:19:59",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 3004909,
                "name": "Não Passa Vontade - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 1,
                "duration": 155893,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004910,
                "name": "Meu Amor - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 2,
                "duration": 171306,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2934685,
                "name": "De Trás Pra Frente - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 3,
                "duration": 157600,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004911,
                "name": "Vidinha de Balada - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 4,
                "duration": 186980,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004912,
                "name": "O Céu Explica Tudo - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 5,
                "duration": 144493,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004913,
                "name": "Aquela Pessoa - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 6,
                "duration": 163120,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004914,
                "name": "Modo Sofrimento - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 7,
                "duration": 160600,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004915,
                "name": "Bebida Com Saudade - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 8,
                "duration": 168133,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004916,
                "name": "Maquiagem Não Disfarça - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 9,
                "duration": 166080,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004917,
                "name": "Tinta de Amor - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 10,
                "duration": 184626,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004918,
                "name": "Faz do Seu Jeito - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 11,
                "duration": 152640,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004919,
                "name": "Na Boa - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 12,
                "duration": 162480,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004920,
                "name": "Zé Ruela - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 13,
                "duration": 161866,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004921,
                "name": "Vem Pra Minha Vida - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 14,
                "duration": 191533,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004922,
                "name": "5 Km - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 15,
                "duration": 170360,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004923,
                "name": "Mais Amor e Menos Drama - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 16,
                "duration": 168200,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004924,
                "name": "Amor Não É Só Love - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 17,
                "duration": 179026,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            },
            {
                "id": 3004925,
                "name": "3 Horas de Motel - Ao Vivo",
                "album_name": "O Céu Explica Tudo (Ao Vivo)",
                "number": 18,
                "duration": 154666,
                "artists": [
                    "Henrique & Juliano"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 575422,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 532585,
        "name": "Grateful",
        "release_date": "2017-06-22",
        "image": "https://i.scdn.co/image/f26e40fe6fd640f3106487566233e0f364b9dcb7",
        "artist_id": 4780,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 4780,
            "name": "DJ Khaled",
            "spotify_followers": 1487961,
            "spotify_popularity": 90,
            "image_small": "https://i.scdn.co/image/0a57e05f4311c234755fecfec98a0e062a8d8548",
            "image_large": "https://i.scdn.co/image/0530124871056c2458c1ad9f86510b9f7f7aa26f",
            "fully_scraped": 0,
            "updated_at": "2017-10-22 12:49:20",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2686716,
                "name": "(Intro) I'm so Grateful",
                "album_name": "Grateful",
                "number": 1,
                "duration": 298653,
                "artists": [
                    "DJ Khaled",
                    "Sizzla"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2713370,
                "name": "Shining",
                "album_name": "Grateful",
                "number": 2,
                "duration": 284000,
                "artists": [
                    "DJ Khaled",
                    "Beyoncé",
                    "JAY Z"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2700259,
                "name": "To the Max",
                "album_name": "Grateful",
                "number": 3,
                "duration": 193901,
                "artists": [
                    "DJ Khaled",
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2701948,
                "name": "Wild Thoughts",
                "album_name": "Grateful",
                "number": 4,
                "duration": 204664,
                "artists": [
                    "DJ Khaled",
                    "Rihanna",
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 532585,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2704323,
                "name": "I'm the One",
                "album_name": "Grateful",
                "number": 5,
                "duration": 288876,
                "artists": [
                    "DJ Khaled",
                    "Justin Bieber",
                    "Quavo",
                    "Chance The Rapper",
                    "Lil Wayne"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 532585,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2701949,
                "name": "On Everything",
                "album_name": "Grateful",
                "number": 6,
                "duration": 233293,
                "artists": [
                    "DJ Khaled",
                    "Travis Scott",
                    "Rick Ross",
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715987,
                "name": "It's Secured",
                "album_name": "Grateful",
                "number": 7,
                "duration": 219093,
                "artists": [
                    "DJ Khaled",
                    "Nas",
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715988,
                "name": "Interlude (Hallelujah)",
                "album_name": "Grateful",
                "number": 8,
                "duration": 52000,
                "artists": [
                    "Betty Wright"
                ],
                "youtube_id": null,
                "spotify_popularity": 45,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2701087,
                "name": "Nobody",
                "album_name": "Grateful",
                "number": 9,
                "duration": 271226,
                "artists": [
                    "DJ Khaled",
                    "Alicia Keys",
                    "Nicki Minaj"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2704253,
                "name": "I Love You so Much",
                "album_name": "Grateful",
                "number": 10,
                "duration": 290413,
                "artists": [
                    "DJ Khaled",
                    "Chance The Rapper"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2692036,
                "name": "Don't Quit",
                "album_name": "Grateful",
                "number": 11,
                "duration": 229146,
                "artists": [
                    "DJ Khaled",
                    "Calvin Harris",
                    "Travis Scott",
                    "Jeremih"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2701086,
                "name": "I Can't Even Lie",
                "album_name": "Grateful",
                "number": 12,
                "duration": 241613,
                "artists": [
                    "DJ Khaled",
                    "Future",
                    "Nicki Minaj"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715989,
                "name": "Down for Life",
                "album_name": "Grateful",
                "number": 13,
                "duration": 300280,
                "artists": [
                    "DJ Khaled",
                    "PARTYNEXTDOOR",
                    "Future",
                    "Travis Scott",
                    "Rick Ross",
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2695891,
                "name": "Major Bag Alert",
                "album_name": "Grateful",
                "number": 14,
                "duration": 297466,
                "artists": [
                    "DJ Khaled",
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715990,
                "name": "Good Man",
                "album_name": "Grateful",
                "number": 15,
                "duration": 218720,
                "artists": [
                    "DJ Khaled",
                    "Pusha T",
                    "Jadakiss"
                ],
                "youtube_id": null,
                "spotify_popularity": 53,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2689210,
                "name": "Billy Ocean",
                "album_name": "Grateful",
                "number": 16,
                "duration": 191373,
                "artists": [
                    "DJ Khaled",
                    "Fat Joe",
                    "Raekwon"
                ],
                "youtube_id": null,
                "spotify_popularity": 47,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2711389,
                "name": "Pull a Caper",
                "album_name": "Grateful",
                "number": 17,
                "duration": 246520,
                "artists": [
                    "DJ Khaled",
                    "Kodak Black",
                    "Gucci Mane",
                    "Rick Ross"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2699764,
                "name": "That Range Rover Came With Steps",
                "album_name": "Grateful",
                "number": 18,
                "duration": 256519,
                "artists": [
                    "DJ Khaled",
                    "Future",
                    "Yo Gotti"
                ],
                "youtube_id": null,
                "spotify_popularity": 53,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715991,
                "name": "Iced Out My Arms",
                "album_name": "Grateful",
                "number": 19,
                "duration": 275533,
                "artists": [
                    "DJ Khaled",
                    "Future",
                    "Migos",
                    "21 Savage",
                    "T.I."
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715992,
                "name": "Whatever",
                "album_name": "Grateful",
                "number": 20,
                "duration": 299613,
                "artists": [
                    "DJ Khaled",
                    "Future",
                    "Young Thug",
                    "Rick Ross",
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 53,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715993,
                "name": "Interlude",
                "album_name": "Grateful",
                "number": 21,
                "duration": 138453,
                "artists": [
                    "Belly"
                ],
                "youtube_id": null,
                "spotify_popularity": 47,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715994,
                "name": "Unchanging Love",
                "album_name": "Grateful",
                "number": 22,
                "duration": 207146,
                "artists": [
                    "Mavado"
                ],
                "youtube_id": null,
                "spotify_popularity": 46,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2715995,
                "name": "Asahd Talk (Thank You Asahd)",
                "album_name": "Grateful",
                "number": 23,
                "duration": 16013,
                "artists": [
                    "Asahd Khaled"
                ],
                "youtube_id": null,
                "spotify_popularity": 0,
                "album_id": 532585,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 529601,
        "name": "Woodstock",
        "release_date": "2017-06-16",
        "image": "https://i.scdn.co/image/5c9f8f14babcfc3f831fa9fe2f8cda424a61f45a",
        "artist_id": 11874,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 11874,
            "name": "Portugal. The Man",
            "spotify_followers": 476367,
            "spotify_popularity": 86,
            "image_small": "https://i.scdn.co/image/aafcc4b7f32d1bea28960093dc36ee48a9c5b4aa",
            "image_large": "https://i.scdn.co/image/14986410cac8475f5036cfba5d2eec56a1399c0d",
            "fully_scraped": 0,
            "updated_at": "2017-10-23 09:10:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2671258,
                "name": "Number One (feat. Richie Havens & Son Little)",
                "album_name": "Woodstock",
                "number": 1,
                "duration": 321946,
                "artists": [
                    "Portugal. The Man",
                    "Richie Havens",
                    "Son Little"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2671259,
                "name": "Easy Tiger",
                "album_name": "Woodstock",
                "number": 2,
                "duration": 217466,
                "artists": [
                    "Portugal. The Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2671260,
                "name": "Live In The Moment",
                "album_name": "Woodstock",
                "number": 3,
                "duration": 246786,
                "artists": [
                    "Portugal. The Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2671261,
                "name": "Feel It Still",
                "album_name": "Woodstock",
                "number": 4,
                "duration": 163253,
                "artists": [
                    "Portugal. The Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 90,
                "album_id": 529601,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 2671262,
                "name": "Rich Friends",
                "album_name": "Woodstock",
                "number": 5,
                "duration": 221626,
                "artists": [
                    "Portugal. The Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2671263,
                "name": "Keep On",
                "album_name": "Woodstock",
                "number": 6,
                "duration": 203146,
                "artists": [
                    "Portugal. The Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2671264,
                "name": "So Young",
                "album_name": "Woodstock",
                "number": 7,
                "duration": 246480,
                "artists": [
                    "Portugal. The Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2671265,
                "name": "Mr Lonely (feat. Fat Lip)",
                "album_name": "Woodstock",
                "number": 8,
                "duration": 262733,
                "artists": [
                    "Portugal. The Man",
                    "Fatlip"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2671266,
                "name": "Tidal Wave",
                "album_name": "Woodstock",
                "number": 9,
                "duration": 211720,
                "artists": [
                    "Portugal. The Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2671267,
                "name": "Noise Pollution (feat. Mary Elizabeth Winstead & Zoe Manville) - Version A, Vocal Up Mix 1.3",
                "album_name": "Woodstock",
                "number": 10,
                "duration": 225186,
                "artists": [
                    "Portugal. The Man",
                    "Mary Elizabeth Winstead",
                    "Zoe Manville"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 529601,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 528674,
        "name": "Pretty Girls Like Trap Music",
        "release_date": "2017-06-16",
        "image": "https://i.scdn.co/image/81c0d86e892301896f11e0706895df35b76fdb88",
        "artist_id": 9120,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 9120,
            "name": "2 Chainz",
            "spotify_followers": 1809961,
            "spotify_popularity": 91,
            "image_small": "https://i.scdn.co/image/6d96184a942c83524860133a8d87d35a324c7364",
            "image_large": "https://i.scdn.co/image/8a0f9090548262a85cceef38650642d3037fd1e0",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 12:01:20",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2674415,
                "name": "Saturday Night",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 1,
                "duration": 271186,
                "artists": [
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674756,
                "name": "Riverdale Rd",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 2,
                "duration": 204093,
                "artists": [
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674758,
                "name": "Good Drank",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 3,
                "duration": 222706,
                "artists": [
                    "2 Chainz",
                    "Gucci Mane",
                    "Quavo"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674757,
                "name": "4 AM",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 4,
                "duration": 255560,
                "artists": [
                    "2 Chainz",
                    "Travis Scott"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674761,
                "name": "Door Swangin",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 5,
                "duration": 188413,
                "artists": [
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670229,
                "name": "Realize",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 6,
                "duration": 231986,
                "artists": [
                    "2 Chainz",
                    "Nicki Minaj"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674738,
                "name": "Poor Fool",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 7,
                "duration": 221533,
                "artists": [
                    "2 Chainz",
                    "Swae Lee"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674760,
                "name": "Big Amount",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 8,
                "duration": 188069,
                "artists": [
                    "2 Chainz",
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2667463,
                "name": "It's A Vibe",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 9,
                "duration": 210200,
                "artists": [
                    "2 Chainz",
                    "Ty Dolla $ign",
                    "Trey Songz",
                    "Jhene Aiko"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674762,
                "name": "Rolls Royce Bitch",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 10,
                "duration": 239160,
                "artists": [
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674763,
                "name": "Sleep When U Die",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 11,
                "duration": 194826,
                "artists": [
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674755,
                "name": "Trap Check",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 12,
                "duration": 186253,
                "artists": [
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674759,
                "name": "Blue Cheese",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 13,
                "duration": 308733,
                "artists": [
                    "2 Chainz",
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674345,
                "name": "OG Kush Diet",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 14,
                "duration": 250946,
                "artists": [
                    "2 Chainz"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674737,
                "name": "Bailan",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 15,
                "duration": 230989,
                "artists": [
                    "2 Chainz",
                    "Pharrell Williams"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2674764,
                "name": "Burglar Bars",
                "album_name": "Pretty Girls Like Trap Music",
                "number": 16,
                "duration": 307973,
                "artists": [
                    "2 Chainz",
                    "Monica"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 528674,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 515481,
        "name": "One More Light",
        "release_date": "2017-05-19",
        "image": "https://i.scdn.co/image/4a5a7737db8a500dd89ff8dd5bb9d993f481c97b",
        "artist_id": 594,
        "spotify_popularity": 85,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 594,
            "name": "Linkin Park",
            "spotify_followers": 5811446,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/f759994946aa42851e5293083f472c96c1753105",
            "image_large": "https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814",
            "fully_scraped": 1,
            "updated_at": "2017-10-26 16:48:11",
            "bio": "{\"bio\":\"Linkin Park is an American rock band from Agoura Hills, California. Formed in 1996, the band rose to international fame with their debut album Hybrid Theory (2000), which was certified diamond by the RIAA in 2005 and multi-platinum in several other countries. Their following studio album Meteora continued the band's success, topping the Billboard 200 album chart in 2003, and was followed by extensive touring and charity work around the world. In 2003, MTV2 named Linkin Park the sixth-greatest band of the music video era and the third-best of the new millennium. Billboard ranked Linkin Park No. 19 on the Best Artists of the Decade chart. In 2012, the band was voted as the greatest artist of the 2000s in a Bracket Madness poll on VH1. In 2014, the band was declared as the Biggest Rock Band in the World Right Now by Kerrang!.\\nHaving adapted nu metal and rap metal to a radio-friendly yet densely layered style in Hybrid Theory and Meteora, the band explored other genres in their next studio album, Minutes to Midnight (2007). The album topped the Billboard charts and had the third-best debut week of any album that year. The band continued to explore a wider variation of musical types in their fourth album, A Thousand Suns (2010), layering their music with more electronic sounds and beats. Their fifth album, Living Things (2012), combines musical elements from all of their previous records. Their sixth and most recent album, The Hunting Party (2014), returned to a heavier rock sound. The band has collaborated with several other artists, most notably with rapper Jay Z in their mashup EP Collision Course, and many others on the remix albums Reanimation and Recharged. Linkin Park has sold over 68 million albums worldwide and has won two Grammy Awards.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/2\\/23\\/Chester-shinosa-montreal-2014.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/4\\/42\\/LinkinParkBerlin2010.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/2\\/2d\\/Linkin_Park_at_the_Novarock_Festival.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/b\\/b6\\/Linkin_Park_logo_2007.png\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2608217,
                "name": "Nobody Can Save Me",
                "album_name": "One More Light",
                "number": 1,
                "duration": 225546,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608218,
                "name": "Good Goodbye (feat. Pusha T and Stormzy)",
                "album_name": "One More Light",
                "number": 2,
                "duration": 211413,
                "artists": [
                    "Linkin Park",
                    "Pusha T",
                    "Stormzy"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608219,
                "name": "Talking to Myself",
                "album_name": "One More Light",
                "number": 3,
                "duration": 231306,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608220,
                "name": "Battle Symphony",
                "album_name": "One More Light",
                "number": 4,
                "duration": 216281,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608221,
                "name": "Invisible",
                "album_name": "One More Light",
                "number": 5,
                "duration": 214346,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608222,
                "name": "Heavy (feat. Kiiara)",
                "album_name": "One More Light",
                "number": 6,
                "duration": 169800,
                "artists": [
                    "Linkin Park",
                    "Kiiara"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608223,
                "name": "Sorry for Now",
                "album_name": "One More Light",
                "number": 7,
                "duration": 203653,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608224,
                "name": "Halfway Right",
                "album_name": "One More Light",
                "number": 8,
                "duration": 217066,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608225,
                "name": "One More Light",
                "album_name": "One More Light",
                "number": 9,
                "duration": 255066,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2608226,
                "name": "Sharp Edges",
                "album_name": "One More Light",
                "number": 10,
                "duration": 178200,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 515481,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 67815,
        "name": "I Decided.",
        "release_date": "2017-02-03",
        "image": "https://i.scdn.co/image/d2fdf6b4ea3ea023509ec858ceafdbbf20c67611",
        "artist_id": 7508,
        "spotify_popularity": 85,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 7508,
            "name": "Big & Rich",
            "spotify_followers": 250053,
            "spotify_popularity": 67,
            "image_small": "https://i.scdn.co/image/3d5727a5afab50535c2c1b6805c7a1aee9493958",
            "image_large": "https://i.scdn.co/image/9262e44f60c7095fad0971bb46aa8653fad296ed",
            "fully_scraped": 0,
            "updated_at": "2017-10-19 11:42:08",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 593418,
                "name": "Look at You",
                "album_name": "Gravity",
                "number": 1,
                "duration": 222706,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2116708,
                "name": "Intro",
                "album_name": "I Decided.",
                "number": 1,
                "duration": 64093,
                "artists": [
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 393169,
                "name": "Lovin' Lately",
                "album_name": "Gravity",
                "number": 2,
                "duration": 218600,
                "artists": [
                    "Big & Rich",
                    "Tim McGraw"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2116709,
                "name": "Light",
                "album_name": "I Decided.",
                "number": 2,
                "duration": 210506,
                "artists": [
                    "Big Sean",
                    "Jeremih"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1729960,
                "name": "Brand New Buzz",
                "album_name": "Gravity",
                "number": 4,
                "duration": 202760,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 34,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1729961,
                "name": "Rollin' Along",
                "album_name": "Gravity",
                "number": 5,
                "duration": 186440,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 28,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 581783,
                "name": "Run Away With You",
                "album_name": "Gravity",
                "number": 6,
                "duration": 224960,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1729962,
                "name": "Lose a Little Sleep",
                "album_name": "Gravity",
                "number": 7,
                "duration": 229026,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 28,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2116714,
                "name": "Same Time Pt. 1",
                "album_name": "I Decided.",
                "number": 7,
                "duration": 89866,
                "artists": [
                    "Big Sean",
                    "TWENTY88"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1729963,
                "name": "Don't Wake Me Up",
                "album_name": "Gravity",
                "number": 8,
                "duration": 202466,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 31,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2116715,
                "name": "Owe Me",
                "album_name": "I Decided.",
                "number": 8,
                "duration": 271693,
                "artists": [
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1729964,
                "name": "That Kind Of Town",
                "album_name": "Gravity",
                "number": 9,
                "duration": 225520,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 32,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2116716,
                "name": "Halfway Off The Balcony",
                "album_name": "I Decided.",
                "number": 9,
                "duration": 230960,
                "artists": [
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1729965,
                "name": "Thank God for Pain",
                "album_name": "Gravity",
                "number": 10,
                "duration": 215680,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 27,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2116717,
                "name": "Voices In My Head/Stick To The Plan",
                "album_name": "I Decided.",
                "number": 10,
                "duration": 242306,
                "artists": [
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1649711,
                "name": "I Came To Git Down",
                "album_name": "Gravity",
                "number": 11,
                "duration": 234733,
                "artists": [
                    "Big & Rich"
                ],
                "youtube_id": null,
                "spotify_popularity": 30,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2116719,
                "name": "Inspire Me",
                "album_name": "I Decided.",
                "number": 12,
                "duration": 208306,
                "artists": [
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2116720,
                "name": "Sacrifices",
                "album_name": "I Decided.",
                "number": 13,
                "duration": 287320,
                "artists": [
                    "Big Sean",
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 67815,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 20467,
        "name": "Unorthodox Jukebox",
        "release_date": "2012-12-07",
        "image": "https://i.scdn.co/image/e404a30a9e9a449e1f30156940fb0af63e45a42e",
        "artist_id": 2649,
        "spotify_popularity": 85,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 2649,
            "name": "Bruno Mars",
            "spotify_followers": 8294847,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/63cad86cb183568085a4e5f0be86aa187cc511e4",
            "image_large": "https://i.scdn.co/image/aa32d6d4ca2467974403518dd3ebfe8831c5ced1",
            "fully_scraped": 0,
            "updated_at": "2017-10-24 21:04:09",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 166029,
                "name": "Young Girls",
                "album_name": "Unorthodox Jukebox",
                "number": 1,
                "duration": 228720,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166030,
                "name": "Locked Out Of Heaven",
                "album_name": "Unorthodox Jukebox",
                "number": 2,
                "duration": 233478,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166031,
                "name": "Gorilla",
                "album_name": "Unorthodox Jukebox",
                "number": 3,
                "duration": 244493,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166032,
                "name": "Treasure",
                "album_name": "Unorthodox Jukebox",
                "number": 4,
                "duration": 178560,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166033,
                "name": "Moonshine",
                "album_name": "Unorthodox Jukebox",
                "number": 5,
                "duration": 228573,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166034,
                "name": "When I Was Your Man",
                "album_name": "Unorthodox Jukebox",
                "number": 6,
                "duration": 213826,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166035,
                "name": "Natalie",
                "album_name": "Unorthodox Jukebox",
                "number": 7,
                "duration": 225026,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166036,
                "name": "Show Me",
                "album_name": "Unorthodox Jukebox",
                "number": 8,
                "duration": 207560,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166037,
                "name": "Money Make Her Smile",
                "album_name": "Unorthodox Jukebox",
                "number": 9,
                "duration": 203973,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166038,
                "name": "If I Knew",
                "album_name": "Unorthodox Jukebox",
                "number": 10,
                "duration": 132640,
                "artists": [
                    "Bruno Mars"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 20467,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 11932,
        "name": "Blonde",
        "release_date": "2016-08-20",
        "image": "https://i.scdn.co/image/14e795dfa0e03a59caa2411595175f09caaf19b8",
        "artist_id": 6185,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 6185,
            "name": "Frank Ocean",
            "spotify_followers": 2495296,
            "spotify_popularity": 89,
            "image_small": "https://i.scdn.co/image/0cc22250c0b18183e5c62f240a5756ec5226dee1",
            "image_large": "https://i.scdn.co/image/7db34c8aace6feb91f38601bb75e6b3301b4657a",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 19:57:58",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 107373,
                "name": "Nikes",
                "album_name": "Blonde",
                "number": 1,
                "duration": 314075,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228096,
                "name": "Ivy",
                "album_name": "Blonde",
                "number": 2,
                "duration": 249191,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 166843,
                "name": "Pink + White",
                "album_name": "Blonde",
                "number": 3,
                "duration": 184516,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228098,
                "name": "Be Yourself",
                "album_name": "Blonde",
                "number": 4,
                "duration": 86943,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228099,
                "name": "Solo",
                "album_name": "Blonde",
                "number": 5,
                "duration": 257380,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228100,
                "name": "Skyline To",
                "album_name": "Blonde",
                "number": 6,
                "duration": 184600,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228101,
                "name": "Self Control",
                "album_name": "Blonde",
                "number": 7,
                "duration": 249667,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228102,
                "name": "Good Guy",
                "album_name": "Blonde",
                "number": 8,
                "duration": 66786,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228103,
                "name": "Nights",
                "album_name": "Blonde",
                "number": 9,
                "duration": 307151,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228104,
                "name": "Solo (Reprise)",
                "album_name": "Blonde",
                "number": 10,
                "duration": 78742,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 214650,
                "name": "Pretty Sweet",
                "album_name": "Blonde",
                "number": 11,
                "duration": 158478,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228105,
                "name": "Facebook Story",
                "album_name": "Blonde",
                "number": 12,
                "duration": 68588,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228106,
                "name": "Close To You",
                "album_name": "Blonde",
                "number": 13,
                "duration": 85754,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228107,
                "name": "White Ferrari",
                "album_name": "Blonde",
                "number": 14,
                "duration": 248807,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228108,
                "name": "Seigfried",
                "album_name": "Blonde",
                "number": 15,
                "duration": 334570,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 193038,
                "name": "Godspeed",
                "album_name": "Blonde",
                "number": 16,
                "duration": 177922,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228109,
                "name": "Futura Free",
                "album_name": "Blonde",
                "number": 17,
                "duration": 564165,
                "artists": [
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 11932,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 8158,
        "name": "T R A P S O U L",
        "release_date": "2015-10-02",
        "image": "https://i.scdn.co/image/1cf60549eeb679705e13c528cfde5e8f6925ec8e",
        "artist_id": 12522,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 12522,
            "name": "Bryson Tiller",
            "spotify_followers": 1639572,
            "spotify_popularity": 90,
            "image_small": "https://i.scdn.co/image/9f619af6fe6af9e3a180ebbca75a468afac8d442",
            "image_large": "https://i.scdn.co/image/17cb13828da84ff2e33f86b6984dab07b7ae66b6",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 11:47:32",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 351786,
                "name": "Intro (Difference)",
                "album_name": "T R A P S O U L",
                "number": 1,
                "duration": 91920,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 351787,
                "name": "Let Em' Know",
                "album_name": "T R A P S O U L",
                "number": 2,
                "duration": 261880,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228110,
                "name": "Exchange",
                "album_name": "T R A P S O U L",
                "number": 3,
                "duration": 194613,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 178661,
                "name": "For However Long",
                "album_name": "T R A P S O U L",
                "number": 4,
                "duration": 124853,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 228111,
                "name": "Don't",
                "album_name": "T R A P S O U L",
                "number": 5,
                "duration": 198293,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 351788,
                "name": "Open Interlude",
                "album_name": "T R A P S O U L",
                "number": 6,
                "duration": 161946,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 351789,
                "name": "Ten Nine Fourteen",
                "album_name": "T R A P S O U L",
                "number": 7,
                "duration": 190173,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 351790,
                "name": "The Sequence",
                "album_name": "T R A P S O U L",
                "number": 8,
                "duration": 194013,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 209934,
                "name": "Rambo",
                "album_name": "T R A P S O U L",
                "number": 9,
                "duration": 223480,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 226702,
                "name": "502 Come Up",
                "album_name": "T R A P S O U L",
                "number": 10,
                "duration": 196106,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 193149,
                "name": "Sorry Not Sorry",
                "album_name": "T R A P S O U L",
                "number": 11,
                "duration": 200760,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 263159,
                "name": "Been That Way",
                "album_name": "T R A P S O U L",
                "number": 12,
                "duration": 199320,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 351791,
                "name": "Overtime",
                "album_name": "T R A P S O U L",
                "number": 13,
                "duration": 218253,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            },
            {
                "id": 351792,
                "name": "Right My Wrongs",
                "album_name": "T R A P S O U L",
                "number": 14,
                "duration": 249320,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 8158,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 6457,
        "name": "Hybrid Theory (Bonus Track Version)",
        "release_date": "2000-10-24",
        "image": "https://i.scdn.co/image/bec4a40aa4ac10b3e5518cf1dcbca33d1e5121ec",
        "artist_id": 594,
        "spotify_popularity": 85,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 594,
            "name": "Linkin Park",
            "spotify_followers": 5811446,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/f759994946aa42851e5293083f472c96c1753105",
            "image_large": "https://i.scdn.co/image/1685533969d5b68cbc630f991e873bd6467f1814",
            "fully_scraped": 1,
            "updated_at": "2017-10-26 16:48:11",
            "bio": "{\"bio\":\"Linkin Park is an American rock band from Agoura Hills, California. Formed in 1996, the band rose to international fame with their debut album Hybrid Theory (2000), which was certified diamond by the RIAA in 2005 and multi-platinum in several other countries. Their following studio album Meteora continued the band's success, topping the Billboard 200 album chart in 2003, and was followed by extensive touring and charity work around the world. In 2003, MTV2 named Linkin Park the sixth-greatest band of the music video era and the third-best of the new millennium. Billboard ranked Linkin Park No. 19 on the Best Artists of the Decade chart. In 2012, the band was voted as the greatest artist of the 2000s in a Bracket Madness poll on VH1. In 2014, the band was declared as the Biggest Rock Band in the World Right Now by Kerrang!.\\nHaving adapted nu metal and rap metal to a radio-friendly yet densely layered style in Hybrid Theory and Meteora, the band explored other genres in their next studio album, Minutes to Midnight (2007). The album topped the Billboard charts and had the third-best debut week of any album that year. The band continued to explore a wider variation of musical types in their fourth album, A Thousand Suns (2010), layering their music with more electronic sounds and beats. Their fifth album, Living Things (2012), combines musical elements from all of their previous records. Their sixth and most recent album, The Hunting Party (2014), returned to a heavier rock sound. The band has collaborated with several other artists, most notably with rapper Jay Z in their mashup EP Collision Course, and many others on the remix albums Reanimation and Recharged. Linkin Park has sold over 68 million albums worldwide and has won two Grammy Awards.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/2\\/23\\/Chester-shinosa-montreal-2014.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/4\\/42\\/LinkinParkBerlin2010.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/2\\/2d\\/Linkin_Park_at_the_Novarock_Festival.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/b\\/b6\\/Linkin_Park_logo_2007.png\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 57523,
                "name": "Papercut",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 1,
                "duration": 184866,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57524,
                "name": "One Step Closer",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 2,
                "duration": 157333,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57525,
                "name": "With You",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 3,
                "duration": 203266,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57526,
                "name": "Points Of Authority",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 4,
                "duration": 201546,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57527,
                "name": "Crawling",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 5,
                "duration": 210773,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57528,
                "name": "Runaway",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 6,
                "duration": 183973,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57529,
                "name": "By Myself",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 7,
                "duration": 189800,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57530,
                "name": "In The End",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 8,
                "duration": 219000,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57531,
                "name": "A Place For My Head",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 9,
                "duration": 184640,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57532,
                "name": "Forgotten",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 10,
                "duration": 194466,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57533,
                "name": "Cure For The Itch",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 11,
                "duration": 157200,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57534,
                "name": "Pushing Me Away",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 12,
                "duration": 190306,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57535,
                "name": "My December",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 13,
                "duration": 259866,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57536,
                "name": "High Voltage",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 14,
                "duration": 225026,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            },
            {
                "id": 57537,
                "name": "Papercut - Recorded Live At BBC1",
                "album_name": "Hybrid Theory (Bonus Track Version)",
                "number": 15,
                "duration": 189973,
                "artists": [
                    "Linkin Park"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 6457,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 1523,
        "name": "Cry Baby (Deluxe)",
        "release_date": "2015-08-14",
        "image": "https://i.scdn.co/image/e4cf0994fa4502926ec16282c653f7278e67c206",
        "artist_id": 1854,
        "spotify_popularity": 85,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 1854,
            "name": "Melanie Martinez",
            "spotify_followers": 2314400,
            "spotify_popularity": 81,
            "image_small": "https://i.scdn.co/image/656ed95c2f57f52425671aaff3e25605b570371c",
            "image_large": "https://i.scdn.co/image/9f123a88e7447c1e40aaab54cfa73df07adbad23",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 09:56:22",
            "bio": "{\"bio\":\"Melanie Adele Martinez (born April 28, 1995) is an American singer, songwriter, music video director, and photographer. Born in Astoria, Queens and raised in Baldwin, New York on Long Island, she first participated in the MSG Varsity Talent Show during her junior year of high school, and subsequently rose to prominence in 2012 after appearing on the American television vocal talent show The Voice. She auditioned singing Britney Spears's \\\"Toxic\\\", and made it to the Top 6 before being eliminated in the fifth week of live shows. Immediately following her departure from the show, she begin independent work on original material. Having been a fan favorite, she was heavily supported by fans, and produced her first music video for her single, \\\"Dollhouse\\\", her most successful single to date, having been certified platinum by the Recording Industry Association of America (RIAA). Signing to Atlantic Records soon after, she released her debut EP, Dollhouse (2014).\\nMartinez later released her debut studio album Cry Baby (2015), which debuted at number 6 on the Billboard 200 and was certified gold by the RIAA. The three singles from the album had been released in the months leading up to the release of the album. Her second studio album is currently in the works and is expected to be released in autumn of 2017.\\nMartinez is often cited as one of the only major successes of The Voice. Her music mostly revolves around the protagonist of her concept album, Cry Baby, and discusses themes of family disputes, body image, romance, and coming-of-age. She is known for her two-toned hair.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/4\\/40\\/Melanie_Martinez_-_Carioca_Club_2015_%285%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/cd\\/Melanie_Martinez_-_House_of_Blues_%28April_4%2C_2016%29_%282%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/1\\/14\\/Melanie_Martinez_Signature.png\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/8\\/8d\\/Melanie_martinez_%28cropped%29.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 114009,
                "name": "Cry Baby",
                "album_name": "Cry Baby (Deluxe)",
                "number": 1,
                "duration": 239080,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 120641,
                "name": "Dollhouse",
                "album_name": "Cry Baby (Deluxe)",
                "number": 2,
                "duration": 231853,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202782,
                "name": "Sippy Cup",
                "album_name": "Cry Baby (Deluxe)",
                "number": 3,
                "duration": 195066,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202783,
                "name": "Carousel",
                "album_name": "Cry Baby (Deluxe)",
                "number": 4,
                "duration": 230160,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202784,
                "name": "Alphabet Boy",
                "album_name": "Cry Baby (Deluxe)",
                "number": 5,
                "duration": 253066,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202766,
                "name": "Soap",
                "album_name": "Cry Baby (Deluxe)",
                "number": 6,
                "duration": 209426,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202785,
                "name": "Training Wheels",
                "album_name": "Cry Baby (Deluxe)",
                "number": 7,
                "duration": 205680,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 114008,
                "name": "Pity Party",
                "album_name": "Cry Baby (Deluxe)",
                "number": 8,
                "duration": 204085,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202786,
                "name": "Tag, you're it",
                "album_name": "Cry Baby (Deluxe)",
                "number": 9,
                "duration": 189026,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202787,
                "name": "Milk and Cookies",
                "album_name": "Cry Baby (Deluxe)",
                "number": 10,
                "duration": 206280,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202788,
                "name": "Pacify Her",
                "album_name": "Cry Baby (Deluxe)",
                "number": 11,
                "duration": 220013,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202789,
                "name": "Mrs. Potato Head",
                "album_name": "Cry Baby (Deluxe)",
                "number": 12,
                "duration": 217506,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202790,
                "name": "Mad Hatter",
                "album_name": "Cry Baby (Deluxe)",
                "number": 13,
                "duration": 201520,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202791,
                "name": "Play Date",
                "album_name": "Cry Baby (Deluxe)",
                "number": 14,
                "duration": 179867,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202792,
                "name": "Teddy Bear",
                "album_name": "Cry Baby (Deluxe)",
                "number": 15,
                "duration": 245728,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            },
            {
                "id": 202793,
                "name": "Cake",
                "album_name": "Cry Baby (Deluxe)",
                "number": 16,
                "duration": 199681,
                "artists": [
                    "Melanie Martinez"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1523,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 121,
        "name": "Dangerous Woman",
        "release_date": "2016-05-20",
        "image": "https://i.scdn.co/image/e1446c8c042e41cb12215d7746294b974133a001",
        "artist_id": 186,
        "spotify_popularity": 85,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 186,
            "name": "Ariana Grande",
            "spotify_followers": 8726492,
            "spotify_popularity": 91,
            "image_small": "https://i.scdn.co/image/9ebcff1926ceca5c06e065824b25d4a5989a5a5b",
            "image_large": "https://i.scdn.co/image/ab8479e6dbae578bf4856dfbcf4fab77e52a32b3",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 18:27:10",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 48383,
                "name": "Moonlight",
                "album_name": "Dangerous Woman",
                "number": 1,
                "duration": 202360,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 9489,
                "name": "Dangerous Woman",
                "album_name": "Dangerous Woman",
                "number": 2,
                "duration": 235946,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48384,
                "name": "Be Alright",
                "album_name": "Dangerous Woman",
                "number": 3,
                "duration": 179293,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 126,
                "name": "Into You",
                "album_name": "Dangerous Woman",
                "number": 4,
                "duration": 244453,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 121,
                "temp_id": "nijOyzcp",
                "url": null
            },
            {
                "id": 108,
                "name": "Side To Side",
                "album_name": "Dangerous Woman",
                "number": 5,
                "duration": 226160,
                "artists": [
                    "Ariana Grande",
                    "Nicki Minaj"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 121,
                "temp_id": "xumYt6kq",
                "url": null
            },
            {
                "id": 48385,
                "name": "Let Me Love You",
                "album_name": "Dangerous Woman",
                "number": 6,
                "duration": 223853,
                "artists": [
                    "Ariana Grande",
                    "Lil Wayne"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48386,
                "name": "Greedy",
                "album_name": "Dangerous Woman",
                "number": 7,
                "duration": 214906,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48387,
                "name": "Leave Me Lonely",
                "album_name": "Dangerous Woman",
                "number": 8,
                "duration": 229680,
                "artists": [
                    "Ariana Grande",
                    "Macy Gray"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48388,
                "name": "Everyday",
                "album_name": "Dangerous Woman",
                "number": 9,
                "duration": 194840,
                "artists": [
                    "Ariana Grande",
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48389,
                "name": "Sometimes",
                "album_name": "Dangerous Woman",
                "number": 10,
                "duration": 226666,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48390,
                "name": "I Don't Care",
                "album_name": "Dangerous Woman",
                "number": 11,
                "duration": 178026,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48391,
                "name": "Bad Decisions",
                "album_name": "Dangerous Woman",
                "number": 12,
                "duration": 226426,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48392,
                "name": "Touch It",
                "album_name": "Dangerous Woman",
                "number": 13,
                "duration": 260000,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48393,
                "name": "Knew Better / Forever Boy",
                "album_name": "Dangerous Woman",
                "number": 14,
                "duration": 299213,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 121,
                "temp_id": null,
                "url": null
            },
            {
                "id": 48394,
                "name": "Thinking Bout You",
                "album_name": "Dangerous Woman",
                "number": 15,
                "duration": 200400,
                "artists": [
                    "Ariana Grande"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 121,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 528771,
        "name": "Beautiful Thugger Girls",
        "release_date": "2017-06-16",
        "image": "https://i.scdn.co/image/3d680debfbef703f9c16d30ab6d22c235eb74fa6",
        "artist_id": 7157,
        "spotify_popularity": 84,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 7157,
            "name": "Young Thug",
            "spotify_followers": 1785701,
            "spotify_popularity": 95,
            "image_small": "https://i.scdn.co/image/64713d8ad9d6f05dc5f55268f8fd1e7e2e89888f",
            "image_large": "https://i.scdn.co/image/1eb847e76b0c8391cd9ec6dff07e93b86ec33d77",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:12:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2668966,
                "name": "Family Don't Matter (feat. Millie Go Lightly)",
                "album_name": "Beautiful Thugger Girls",
                "number": 1,
                "duration": 295266,
                "artists": [
                    "Young Thug",
                    "Millie Go Lightly"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2684948,
                "name": "Tomorrow Til Infinity (feat. Gunna)",
                "album_name": "Beautiful Thugger Girls",
                "number": 2,
                "duration": 228306,
                "artists": [
                    "Young Thug",
                    "Gunna"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676472,
                "name": "Tomorrow Til Infinity",
                "album_name": "Beautiful Thugger Girls",
                "number": 2,
                "duration": 228306,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676473,
                "name": "She Wanna Party (feat. Millie Go Lightly)",
                "album_name": "Beautiful Thugger Girls",
                "number": 3,
                "duration": 250586,
                "artists": [
                    "Young Thug",
                    "Millie Go Lightly"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676474,
                "name": "Daddy's Birthday",
                "album_name": "Beautiful Thugger Girls",
                "number": 4,
                "duration": 208920,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676475,
                "name": "Do U Love Me",
                "album_name": "Beautiful Thugger Girls",
                "number": 5,
                "duration": 209573,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2675001,
                "name": "Relationship (feat. Future)",
                "album_name": "Beautiful Thugger Girls",
                "number": 6,
                "duration": 215306,
                "artists": [
                    "Young Thug",
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 87,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676476,
                "name": "You Said",
                "album_name": "Beautiful Thugger Girls",
                "number": 7,
                "duration": 402066,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2788425,
                "name": "You Said (feat. Quavo)",
                "album_name": "Beautiful Thugger Girls",
                "number": 7,
                "duration": 402066,
                "artists": [
                    "Young Thug",
                    "Quavo"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676477,
                "name": "On Fire",
                "album_name": "Beautiful Thugger Girls",
                "number": 8,
                "duration": 239800,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676471,
                "name": "Get High (feat. Snoop Dogg & Lil Durk)",
                "album_name": "Beautiful Thugger Girls",
                "number": 9,
                "duration": 293933,
                "artists": [
                    "Young Thug",
                    "Snoop Dogg",
                    "Lil Durk"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676478,
                "name": "Feel It",
                "album_name": "Beautiful Thugger Girls",
                "number": 10,
                "duration": 236586,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676479,
                "name": "Me Or Us",
                "album_name": "Beautiful Thugger Girls",
                "number": 11,
                "duration": 157880,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676480,
                "name": "Oh Yeah",
                "album_name": "Beautiful Thugger Girls",
                "number": 12,
                "duration": 229386,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2667785,
                "name": "For Y'all (feat. Jacquees)",
                "album_name": "Beautiful Thugger Girls",
                "number": 13,
                "duration": 219706,
                "artists": [
                    "Young Thug",
                    "Jacquees"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2676481,
                "name": "Take Care",
                "album_name": "Beautiful Thugger Girls",
                "number": 14,
                "duration": 217373,
                "artists": [
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 528771,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 526725,
        "name": "Witness",
        "release_date": "2017-06-09",
        "image": "https://i.scdn.co/image/34579dcaeff1bde471dc12657d257fe783d77db7",
        "artist_id": 7356,
        "spotify_popularity": 84,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 7356,
            "name": "Katy Perry",
            "spotify_followers": 7248412,
            "spotify_popularity": 91,
            "image_small": "https://i.scdn.co/image/9a2d7b0ce015dea90decae0141b219afe004af25",
            "image_large": "https://i.scdn.co/image/fcdc433e8ccf8d46d58ac70db322feb9b3328731",
            "fully_scraped": 1,
            "updated_at": "2017-10-26 16:54:31",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 545953,
                "name": "Witness",
                "album_name": "Witness",
                "number": 1,
                "duration": 250511,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660517,
                "name": "Hey Hey Hey",
                "album_name": "Witness",
                "number": 2,
                "duration": 214955,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660518,
                "name": "Roulette",
                "album_name": "Witness",
                "number": 3,
                "duration": 198689,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660519,
                "name": "Swish Swish",
                "album_name": "Witness",
                "number": 4,
                "duration": 242510,
                "artists": [
                    "Katy Perry",
                    "Nicki Minaj"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660520,
                "name": "Déjà Vu",
                "album_name": "Witness",
                "number": 5,
                "duration": 197848,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660521,
                "name": "Power",
                "album_name": "Witness",
                "number": 6,
                "duration": 226470,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660522,
                "name": "Mind Maze",
                "album_name": "Witness",
                "number": 7,
                "duration": 248166,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660523,
                "name": "Miss You More",
                "album_name": "Witness",
                "number": 8,
                "duration": 234277,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660524,
                "name": "Chained To The Rhythm",
                "album_name": "Witness",
                "number": 9,
                "duration": 237734,
                "artists": [
                    "Katy Perry",
                    "Skip Marley"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660525,
                "name": "Tsunami",
                "album_name": "Witness",
                "number": 10,
                "duration": 203129,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660526,
                "name": "Bon appétit",
                "album_name": "Witness",
                "number": 11,
                "duration": 227821,
                "artists": [
                    "Katy Perry",
                    "Migos"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660527,
                "name": "Bigger Than Me",
                "album_name": "Witness",
                "number": 12,
                "duration": 240757,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660528,
                "name": "Save As Draft",
                "album_name": "Witness",
                "number": 13,
                "duration": 228648,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660529,
                "name": "Pendulum",
                "album_name": "Witness",
                "number": 14,
                "duration": 240125,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2660530,
                "name": "Into Me You See",
                "album_name": "Witness",
                "number": 15,
                "duration": 264396,
                "artists": [
                    "Katy Perry"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 526725,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 520683,
        "name": "True to Self",
        "release_date": "2017-05-26",
        "image": "https://i.scdn.co/image/1d977863162a3308adebf437d8d72d267327e19c",
        "artist_id": 12522,
        "spotify_popularity": 84,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 12522,
            "name": "Bryson Tiller",
            "spotify_followers": 1639572,
            "spotify_popularity": 90,
            "image_small": "https://i.scdn.co/image/9f619af6fe6af9e3a180ebbca75a468afac8d442",
            "image_large": "https://i.scdn.co/image/17cb13828da84ff2e33f86b6984dab07b7ae66b6",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 11:47:32",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2626924,
                "name": "Rain On Me (Intro)",
                "album_name": "True to Self",
                "number": 1,
                "duration": 145120,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626925,
                "name": "No Longer Friends",
                "album_name": "True to Self",
                "number": 2,
                "duration": 134746,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626926,
                "name": "Don't Get Too High",
                "album_name": "True to Self",
                "number": 3,
                "duration": 209040,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626927,
                "name": "Blowing Smoke",
                "album_name": "True to Self",
                "number": 4,
                "duration": 180013,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626928,
                "name": "We Both Know",
                "album_name": "True to Self",
                "number": 5,
                "duration": 160906,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626929,
                "name": "You Got It",
                "album_name": "True to Self",
                "number": 6,
                "duration": 176653,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626930,
                "name": "In Check",
                "album_name": "True to Self",
                "number": 7,
                "duration": 198146,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626931,
                "name": "Self-Made",
                "album_name": "True to Self",
                "number": 8,
                "duration": 167853,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626932,
                "name": "Run Me Dry",
                "album_name": "True to Self",
                "number": 9,
                "duration": 169266,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626933,
                "name": "High Stakes",
                "album_name": "True to Self",
                "number": 10,
                "duration": 182560,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626934,
                "name": "Rain Interlude",
                "album_name": "True to Self",
                "number": 11,
                "duration": 46960,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626935,
                "name": "Teach Me a Lesson",
                "album_name": "True to Self",
                "number": 12,
                "duration": 207520,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626936,
                "name": "Stay Blessed",
                "album_name": "True to Self",
                "number": 13,
                "duration": 246040,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626937,
                "name": "Money Problems / Benz Truck",
                "album_name": "True to Self",
                "number": 14,
                "duration": 299813,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626938,
                "name": "Set It Off",
                "album_name": "True to Self",
                "number": 15,
                "duration": 217200,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626939,
                "name": "Nevermind This Interlude",
                "album_name": "True to Self",
                "number": 16,
                "duration": 134760,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626940,
                "name": "Before You Judge",
                "album_name": "True to Self",
                "number": 17,
                "duration": 286573,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626941,
                "name": "Somethin Tells Me",
                "album_name": "True to Self",
                "number": 18,
                "duration": 194266,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2626942,
                "name": "Always (Outro)",
                "album_name": "True to Self",
                "number": 19,
                "duration": 150053,
                "artists": [
                    "Bryson Tiller"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 520683,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 471377,
        "name": "Painting Pictures",
        "release_date": "2017-03-31",
        "image": "https://i.scdn.co/image/482b2cb28d0f20ad28357429045a5ff5bb6ed42c",
        "artist_id": 607,
        "spotify_popularity": 84,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 607,
            "name": "Kodak Black",
            "spotify_followers": 1622566,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/ef90a19321978c4431246870132c3a6540412806",
            "image_large": "https://i.scdn.co/image/7e3b329829c210144d51035a91b92ce3f55d79fb",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 12:01:20",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2394305,
                "name": "Day For Day",
                "album_name": "Painting Pictures",
                "number": 1,
                "duration": 168312,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394306,
                "name": "Coolin and Booted",
                "album_name": "Painting Pictures",
                "number": 2,
                "duration": 214781,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394307,
                "name": "Candy Paint (feat. Bun B)",
                "album_name": "Painting Pictures",
                "number": 3,
                "duration": 218990,
                "artists": [
                    "Kodak Black",
                    "Bun B"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394308,
                "name": "Up In Here",
                "album_name": "Painting Pictures",
                "number": 4,
                "duration": 175681,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394309,
                "name": "U Aint Never",
                "album_name": "Painting Pictures",
                "number": 5,
                "duration": 209707,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2385479,
                "name": "Twenty 8",
                "album_name": "Painting Pictures",
                "number": 6,
                "duration": 179591,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394310,
                "name": "Patty Cake",
                "album_name": "Painting Pictures",
                "number": 7,
                "duration": 198109,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394311,
                "name": "Save You",
                "album_name": "Painting Pictures",
                "number": 8,
                "duration": 238687,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394312,
                "name": "Conscience (feat. Future)",
                "album_name": "Painting Pictures",
                "number": 9,
                "duration": 219753,
                "artists": [
                    "Kodak Black",
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2393984,
                "name": "Tunnel Vision",
                "album_name": "Painting Pictures",
                "number": 10,
                "duration": 268186,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 84,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394313,
                "name": "Corrlinks and JPay",
                "album_name": "Painting Pictures",
                "number": 11,
                "duration": 182833,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394314,
                "name": "Reminiscing (feat. A Boogie Wit Da Hoodie)",
                "album_name": "Painting Pictures",
                "number": 12,
                "duration": 225132,
                "artists": [
                    "Kodak Black",
                    "A Boogie Wit da Hoodie"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394315,
                "name": "Side Nigga",
                "album_name": "Painting Pictures",
                "number": 13,
                "duration": 209807,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2430524,
                "name": "Side N****",
                "album_name": "Painting Pictures",
                "number": 13,
                "duration": 209807,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394316,
                "name": "Off The Land",
                "album_name": "Painting Pictures",
                "number": 14,
                "duration": 225725,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394317,
                "name": "Top Off Benz (feat. Young Thug)",
                "album_name": "Painting Pictures",
                "number": 15,
                "duration": 242503,
                "artists": [
                    "Kodak Black",
                    "Young Thug"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394318,
                "name": "Feeling Like (feat. Jeezy)",
                "album_name": "Painting Pictures",
                "number": 16,
                "duration": 228259,
                "artists": [
                    "Kodak Black",
                    "Jeezy"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394319,
                "name": "Why They Call You Kodak",
                "album_name": "Painting Pictures",
                "number": 17,
                "duration": 213655,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2394320,
                "name": "There He Go",
                "album_name": "Painting Pictures",
                "number": 18,
                "duration": 196113,
                "artists": [
                    "Kodak Black"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 471377,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 315167,
        "name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
        "release_date": "2016-11-18",
        "image": "https://i.scdn.co/image/96c8cc7d336d7c874c492797c9fec9b9f67ab2e4",
        "artist_id": 258852,
        "spotify_popularity": 84,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 258852,
            "name": "Dwayne Johnson",
            "spotify_followers": 3843,
            "spotify_popularity": 68,
            "image_small": null,
            "image_large": null,
            "fully_scraped": 0,
            "updated_at": "2017-10-01 01:14:54",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 1677092,
                "name": "Tulou Tagaloa",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 1,
                "duration": 51933,
                "artists": [
                    "Olivia Foa'i"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677121,
                "name": "Unstoppable - Outtake",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 1,
                "duration": 239426,
                "artists": [
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677093,
                "name": "An Innocent Warrior",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 2,
                "duration": 97413,
                "artists": [
                    "Vai Mahina",
                    "Sulata Foai-Amiatu",
                    "Matthew Ineleo"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677122,
                "name": "More - Outtake",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 2,
                "duration": 196480,
                "artists": [
                    "Marcy Harriell"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677123,
                "name": "More - Reprise - Outtake",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 3,
                "duration": 158800,
                "artists": [
                    "Marcy Harriell"
                ],
                "youtube_id": null,
                "spotify_popularity": 50,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677124,
                "name": "Warrior Face - Outtake",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 4,
                "duration": 136680,
                "artists": [
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1548166,
                "name": "We Know The Way",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 5,
                "duration": 141413,
                "artists": [
                    "Opetaia Foa'i",
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677125,
                "name": "Where You Are - Demo",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 5,
                "duration": 181826,
                "artists": [
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677094,
                "name": "How Far I'll Go - Reprise",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 6,
                "duration": 87346,
                "artists": [
                    "Auli'i Cravalho"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677126,
                "name": "You're Welcome - Demo",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 6,
                "duration": 157360,
                "artists": [
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1634144,
                "name": "You're Welcome",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 7,
                "duration": 163893,
                "artists": [
                    "Dwayne Johnson"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677127,
                "name": "Shiny - Demo",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 7,
                "duration": 184266,
                "artists": [
                    "Lin-Manuel Miranda"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1613248,
                "name": "Shiny",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 8,
                "duration": 185466,
                "artists": [
                    "Jemaine Clement"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677128,
                "name": "Prologue - Score Demo",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 8,
                "duration": 146106,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 46,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677095,
                "name": "Logo Te Pate",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 9,
                "duration": 130173,
                "artists": [
                    "Olivia Foa'i",
                    "Opetaia Foa'i",
                    "Talaga Steve Sale"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677129,
                "name": "Village Crazy Lady - Score Demo",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 9,
                "duration": 44986,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 46,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1636868,
                "name": "I Am Moana (Song of the Ancestors)",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 10,
                "duration": 162826,
                "artists": [
                    "Rachel House",
                    "Auli'i Cravalho"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677130,
                "name": "Cavern - Score Demo",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 10,
                "duration": 125413,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 46,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1548167,
                "name": "Know Who You Are",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 11,
                "duration": 72626,
                "artists": [
                    "Auli'i Cravalho",
                    "Vai Mahina",
                    "Olivia Foa'i",
                    "Opetaia Foa'i",
                    "Matthew Ineleo"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1548168,
                "name": "We Know The Way - Finale",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 12,
                "duration": 69120,
                "artists": [
                    "Lin-Manuel Miranda",
                    "Opetaia Foa'i"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1643485,
                "name": "How Far I'll Go - Alessia Cara Version",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 13,
                "duration": 175506,
                "artists": [
                    "Alessia Cara"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1644497,
                "name": "Prologue",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 15,
                "duration": 145440,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677097,
                "name": "He Was You",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 16,
                "duration": 50573,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677098,
                "name": "Village Crazy Lady",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 17,
                "duration": 45706,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677099,
                "name": "Cavern",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 18,
                "duration": 125293,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677100,
                "name": "The Ocean Chose You",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 19,
                "duration": 77960,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1756906,
                "name": "You're Welcome - Instrumental",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 19,
                "duration": 163920,
                "artists": [
                    "Moana Karaoke"
                ],
                "youtube_id": null,
                "spotify_popularity": 45,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677101,
                "name": "The Hook",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 20,
                "duration": 69960,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 53,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677102,
                "name": "Tala's Deathbed",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 21,
                "duration": 120880,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 53,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677103,
                "name": "Battle of Wills",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 22,
                "duration": 190893,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 52,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677104,
                "name": "Kakamora",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 23,
                "duration": 273266,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 52,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677105,
                "name": "Wayfinding",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 24,
                "duration": 112373,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677106,
                "name": "Climbing",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 25,
                "duration": 54573,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 50,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677107,
                "name": "Tamatoa's Lair",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 26,
                "duration": 165946,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 50,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677108,
                "name": "Great Escape",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 27,
                "duration": 59706,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677109,
                "name": "If I Were the Ocean",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 28,
                "duration": 181613,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 50,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677110,
                "name": "Te Ka Attacks",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 29,
                "duration": 101080,
                "artists": [
                    "Mark Mancina",
                    "Opetaia Foa'i"
                ],
                "youtube_id": null,
                "spotify_popularity": 50,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677111,
                "name": "Maui Leaves",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 30,
                "duration": 125333,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677112,
                "name": "Heartache",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 31,
                "duration": 39253,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677113,
                "name": "Tala Returns",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 32,
                "duration": 61986,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1589614,
                "name": "Sails to Te Fiti",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 33,
                "duration": 346306,
                "artists": [
                    "Mark Mancina",
                    "Opetaia Foa'i"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677114,
                "name": "Shiny Heart",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 34,
                "duration": 36693,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677115,
                "name": "Te Fiti Restored",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 35,
                "duration": 63346,
                "artists": [
                    "Mark Mancina",
                    "Opetaia Foa'i"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677116,
                "name": "Hand of a God",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 36,
                "duration": 30093,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677117,
                "name": "Voyager Tagaloa",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 37,
                "duration": 57266,
                "artists": [
                    "Mark Mancina",
                    "Opetaia Foa'i"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677118,
                "name": "Toe Feiloa'i",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 38,
                "duration": 85333,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677119,
                "name": "Navigating Home",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 39,
                "duration": 47986,
                "artists": [
                    "Mark Mancina"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1677120,
                "name": "The Return to Voyaging",
                "album_name": "Moana (Original Motion Picture Soundtrack/Deluxe Edition)",
                "number": 40,
                "duration": 61986,
                "artists": [
                    "Mark Mancina",
                    "Opetaia Foa'i"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 315167,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 5667,
        "name": "A Head Full Of Dreams",
        "release_date": "2015-12-04",
        "image": "https://i.scdn.co/image/2f66abbf986dcc2fb1dca9bceb892123d5d10c3a",
        "artist_id": 196,
        "spotify_popularity": 84,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 196,
            "name": "Coldplay",
            "spotify_followers": 8686479,
            "spotify_popularity": 93,
            "image_small": "https://i.scdn.co/image/02c781539fca2176059bdeafd9fa903db5b9a4d0",
            "image_large": "https://i.scdn.co/image/143b0f286f76ece3a711f673d9ba00b8f499b2c0",
            "fully_scraped": 1,
            "updated_at": "2017-10-26 16:11:48",
            "bio": "{\"bio\":\"Coldplay are a British rock band formed in 1996 by lead vocalist and pianist Chris Martin and lead guitarist Jonny Buckland at University College London (UCL). After they formed under the name Pectoralz, Guy Berryman joined the group as a bassist and they changed their name to Starfish. Will Champion joined as a drummer and backing vocalist, completing the performing line-up. Creative Director Phil Harvey is often referred to as the official fifth member by the band. The band renamed themselves \\\"Coldplay\\\" in 1998, before recording and releasing three EPs: Safety in 1998, Brothers & Sisters as a single in 1999, and The Blue Room in the same year. The Blue Room was their first release on a major label, after signing to Parlophone.\\nThey achieved worldwide fame with the release of the single \\\"Yellow\\\" in 2000. This was followed by their debut album Parachutes released the same year, which was nominated for the Mercury Prize. The band's second album, A Rush of Blood to the Head (2002), was released to critical acclaim and won multiple awards, including NME's Album of the Year. Their next release, X&Y, the best-selling album worldwide in 2005, was met with mostly positive reviews upon its release, though some critics felt that it was inferior to its predecessor. The band's fourth studio album, Viva la Vida or Death and All His Friends (2008), was produced by Brian Eno and released again to largely positive reviews, earning several Grammy Award nominations and wins at the 51st Grammy Awards. On 24 October 2011, they released their fifth studio album, Mylo Xyloto, which received mixed to positive reviews, topped the charts in over 34 countries, and was the UK's best-selling rock album of 2011. On 16 May 2014, they released their sixth album, titled Ghost Stories, which also received mixed to positive reviews and topped the iTunes Store albums charts in over 100 countries. On 4 December 2015, the band released their seventh album, A Head Full of Dreams, which reached the top two in most major markets, but received generally mixed reviews.\\nThe band has won 62 awards from 209 nominations throughout their career, including nine Brit Awards\\u2014winning Best British Group four times\\u2014five MTV Video Music Awards and seven Grammy Awards from 31 nominations. Coldplay have sold more than 80 million records worldwide, making them one of the world's best-selling music artists. In December 2009, Rolling Stone readers voted the group the fourth-best artist of the 2000s. Coldplay have been an active supporter of various social and political causes, such as Oxfam's Make Trade Fair campaign and Amnesty International. The group have also performed at various charity projects such as Band Aid 20, Live 8, Sound Relief, Hope for Haiti Now: A Global Benefit for Earthquake Relief, The Secret Policeman's Ball, Sport Relief and the UK's Teenage Cancer Trust.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/3\\/32\\/Coldplay-3.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/e\\/e2\\/Coldplay_MX_logo_black.png\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/7\\/7c\\/Coldplay_Music_Midtown.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/0\\/0a\\/Coldplay_Mylo_Xyloto_Tour_%40_Wells_Fargo_Center.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 49973,
                "name": "A Head Full Of Dreams",
                "album_name": "A Head Full Of Dreams",
                "number": 1,
                "duration": 223773,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 130072,
                "name": "Birds",
                "album_name": "A Head Full Of Dreams",
                "number": 2,
                "duration": 229093,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 49965,
                "name": "Hymn For The Weekend",
                "album_name": "A Head Full Of Dreams",
                "number": 3,
                "duration": 258826,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 49972,
                "name": "Everglow",
                "album_name": "A Head Full Of Dreams",
                "number": 4,
                "duration": 282693,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 49966,
                "name": "Adventure Of A Lifetime",
                "album_name": "A Head Full Of Dreams",
                "number": 5,
                "duration": 263786,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 130073,
                "name": "Fun (feat. Tove Lo)",
                "album_name": "A Head Full Of Dreams",
                "number": 6,
                "duration": 267533,
                "artists": [
                    "Coldplay",
                    "Tove Lo"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 130074,
                "name": "Kaleidoscope",
                "album_name": "A Head Full Of Dreams",
                "number": 7,
                "duration": 111853,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 130075,
                "name": "Army Of One",
                "album_name": "A Head Full Of Dreams",
                "number": 8,
                "duration": 376826,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 130076,
                "name": "Amazing Day",
                "album_name": "A Head Full Of Dreams",
                "number": 9,
                "duration": 271106,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 130077,
                "name": "Colour Spectrum",
                "album_name": "A Head Full Of Dreams",
                "number": 10,
                "duration": 60106,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            },
            {
                "id": 49968,
                "name": "Up&Up",
                "album_name": "A Head Full Of Dreams",
                "number": 11,
                "duration": 405320,
                "artists": [
                    "Coldplay"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 5667,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 1357,
        "name": "Death Of A Bachelor",
        "release_date": "2016-01-15",
        "image": "https://i.scdn.co/image/2071aea7efa2dfcd43268212cc5b001cb1c3858e",
        "artist_id": 615,
        "spotify_popularity": 84,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 615,
            "name": "Panic! At The Disco",
            "spotify_followers": 2967040,
            "spotify_popularity": 86,
            "image_small": "https://i.scdn.co/image/0f23a5fdfd9126f38540d6a07a60db445399baa6",
            "image_large": "https://i.scdn.co/image/13d0de938cc4d4d890ace6c3f3955803e9dd8ccd",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 09:56:22",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 10543,
                "name": "Victorious",
                "album_name": "Death Of A Bachelor",
                "number": 1,
                "duration": 178600,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10544,
                "name": "Don't Threaten Me With A Good Time",
                "album_name": "Death Of A Bachelor",
                "number": 2,
                "duration": 213093,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10545,
                "name": "Hallelujah",
                "album_name": "Death Of A Bachelor",
                "number": 3,
                "duration": 180626,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10546,
                "name": "Emperor's New Clothes",
                "album_name": "Death Of A Bachelor",
                "number": 4,
                "duration": 158666,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10547,
                "name": "Death Of A Bachelor",
                "album_name": "Death Of A Bachelor",
                "number": 5,
                "duration": 203506,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10548,
                "name": "Crazy=Genius",
                "album_name": "Death Of A Bachelor",
                "number": 6,
                "duration": 198040,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10549,
                "name": "LA Devotee",
                "album_name": "Death Of A Bachelor",
                "number": 7,
                "duration": 196520,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10550,
                "name": "Golden Days",
                "album_name": "Death Of A Bachelor",
                "number": 8,
                "duration": 254320,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10551,
                "name": "The Good, The Bad And The Dirty",
                "album_name": "Death Of A Bachelor",
                "number": 9,
                "duration": 171520,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10552,
                "name": "House Of Memories",
                "album_name": "Death Of A Bachelor",
                "number": 10,
                "duration": 208706,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            },
            {
                "id": 10553,
                "name": "Impossible Year",
                "album_name": "Death Of A Bachelor",
                "number": 11,
                "duration": 202546,
                "artists": [
                    "Panic! At The Disco"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 1357,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 119,
        "name": "Views",
        "release_date": "2016-05-06",
        "image": "https://i.scdn.co/image/90f080afbec29a0c58509875a6dd59b3c380e353",
        "artist_id": 184,
        "spotify_popularity": 84,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 184,
            "name": "Drake",
            "spotify_followers": 13298296,
            "spotify_popularity": 100,
            "image_small": "https://i.scdn.co/image/6bd672a0f33705eda4b543c304c21a152f393291",
            "image_large": "https://i.scdn.co/image/cb080366dc8af1fe4dc90c4b9959794794884c66",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 19:57:58",
            "bio": "{\"bio\":\"Aubrey Drake Graham (born October 24, 1986), known simply as Drake, is a Canadian rapper, singer, songwriter, record producer, and actor. Drake initially gained recognition as an actor on the teen drama television series Degrassi: The Next Generation in the early 2000s. Intent on pursuing a career as a rapper, he departed the series in 2007 following the release of his debut mixtape, Room for Improvement. He released two further independent projects, Comeback Season and So Far Gone, before signing to Lil Wayne's Young Money Entertainment in June 2009.\\nDrake released his debut studio album Thank Me Later in 2010, which debuted at number one on the U.S. Billboard 200 and was soon certified platinum by the Recording Industry Association of America (RIAA). His next two releases were 2011's Take Care and 2013's Nothing Was the Same, with certifications of quadruple and triple platinum respectively in the U.S., with the former also earning him his first Grammy Award for Best Rap Album. They were followed by two mixtapes, with the trap-influenced If You're Reading This It's Too Late, and a collaboration with Future for What a Time to Be Alive, in 2015. The former was certified double platinum in the U.S.. Drake released his fourth album, Views, in 2016, breaking several chart records in the process. Views sat atop the Billboard 200 for ten nonconsecutive weeks, becoming the first album by a solo male to do so in over 10 years. It also saw Drake leading the Billboard Hot 100 and the Billboard 200 simultaneously for eight weeks, breaking the previous record of seven held by both Michael Jackson and Whitney Houston. It achieved triple platinum status in the U.S., and earned over 1 million album-equivalent units in the first week of its release.\\nAlongside his Grammy Award win, Drake has won three Juno Awards and six BET Awards. He has the most number one singles on the Hot Rap Songs, Hot R&B\\/Hip-Hop Airplay and Rhythmic Charts.\\nDrake has developed other ventures, including his OVO Sound record label with longtime collaborator Noah \\\"40\\\" Shebib. Drake acts as a producer, producing under the pseudonym of Champagne Papi. Using the \\\"OVO\\\" moniker, Drake has his own clothing line and his own channel on Beats 1. He is also currently acting as the global ambassador for NBA franchise, the Toronto Raptors.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/a\\/a9\\/Drake_Bluesfest.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/c\\/c4\\/Drake_and_Future_2016_Summer_Sixteen_Tour.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/3\\/34\\/Drake_at_Bun-B_Concert_2011-_The_Come_Up_Show.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/9\\/9a\\/Drake_fox_theatre.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 32224,
                "name": "Keep The Family Close",
                "album_name": "Views",
                "number": 1,
                "duration": 328906,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 14506,
                "name": "9",
                "album_name": "Views",
                "number": 2,
                "duration": 255786,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32225,
                "name": "U With Me?",
                "album_name": "Views",
                "number": 3,
                "duration": 297373,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32226,
                "name": "Feel No Ways",
                "album_name": "Views",
                "number": 4,
                "duration": 240653,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32227,
                "name": "Hype",
                "album_name": "Views",
                "number": 5,
                "duration": 209413,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32228,
                "name": "Weston Road Flows",
                "album_name": "Views",
                "number": 6,
                "duration": 253533,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32229,
                "name": "Redemption",
                "album_name": "Views",
                "number": 7,
                "duration": 333946,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32230,
                "name": "With You",
                "album_name": "Views",
                "number": 8,
                "duration": 195053,
                "artists": [
                    "Drake",
                    "PARTYNEXTDOOR"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32231,
                "name": "Faithful",
                "album_name": "Views",
                "number": 9,
                "duration": 290133,
                "artists": [
                    "Drake",
                    "Pimp C",
                    "dvsn"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 14239,
                "name": "Still Here",
                "album_name": "Views",
                "number": 10,
                "duration": 189853,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 139,
                "name": "Controlla",
                "album_name": "Views",
                "number": 11,
                "duration": 245226,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 119,
                "temp_id": "Ywx6fr0K",
                "url": null
            },
            {
                "id": 106,
                "name": "One Dance",
                "album_name": "Views",
                "number": 12,
                "duration": 173986,
                "artists": [
                    "Drake",
                    "WizKid",
                    "Kyla"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 119,
                "temp_id": "xumYt6kq",
                "url": null
            },
            {
                "id": 32232,
                "name": "Grammys",
                "album_name": "Views",
                "number": 13,
                "duration": 220426,
                "artists": [
                    "Drake",
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32233,
                "name": "Childs Play",
                "album_name": "Views",
                "number": 14,
                "duration": 241400,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 22655,
                "name": "Pop Style",
                "album_name": "Views",
                "number": 15,
                "duration": 212946,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 113,
                "name": "Too Good",
                "album_name": "Views",
                "number": 16,
                "duration": 263373,
                "artists": [
                    "Drake",
                    "Rihanna"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 119,
                "temp_id": "WFWY2Mhb",
                "url": null
            },
            {
                "id": 32234,
                "name": "Summers Over Interlude",
                "album_name": "Views",
                "number": 17,
                "duration": 106333,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32235,
                "name": "Fire & Desire",
                "album_name": "Views",
                "number": 18,
                "duration": 238120,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32236,
                "name": "Views",
                "album_name": "Views",
                "number": 19,
                "duration": 311960,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 119,
                "temp_id": null,
                "url": null
            },
            {
                "id": 32237,
                "name": "Hotline Bling",
                "album_name": "Views",
                "number": 20,
                "duration": 267066,
                "artists": [
                    "Drake"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 119,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 2,
        "name": "Illuminate (Deluxe)",
        "release_date": "2017-04-20",
        "image": "https://i.scdn.co/image/8d4845f9e802d35c6229e268360af91286ad384c",
        "artist_id": 2,
        "spotify_popularity": 84,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 2,
            "name": "Shawn Mendes",
            "spotify_followers": 4910063,
            "spotify_popularity": 92,
            "image_small": "https://i.scdn.co/image/9a3488787c85c2b250b41f9cc11bd680e1bc10ff",
            "image_large": "https://i.scdn.co/image/889d1206458b26f94aab88e23257706847b41091",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 06:09:21",
            "bio": "{\"bio\":\"Shawn Peter Raul Mendes (\\/\\u02c8m\\u025bnd\\u025bz\\/, European Portuguese: [\\u02c8m\\u1ebdd\\u0268\\u0283]; born August 8, 1998) is a Canadian singer and songwriter. He attracted a following in 2013, when he began posting song covers on the video sharing application Vine. The following year, he caught the attention of artist managers Andrew Gertler and Island Records A&R Ziggy Chareton, which led to him signing a deal with the record label. Mendes went on to release an EP and his debut studio album Handwritten, whose single \\\"Stitches\\\" reached the top 10 in the US and Canada, and number one in the UK. His sophomore album, Illuminate (2016), was preceded by the single \\\"Treat You Better\\\". Both albums debuted atop the US Billboard 200.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/8\\/83\\/Shawn_Mendes_02_%2817686893403%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/7\\/7d\\/UWOshawn_mendes_crop_%28cropped%29.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2534573,
                "name": "There's Nothing Holdin' Me Back",
                "album_name": "Illuminate (Deluxe)",
                "number": 1,
                "duration": 199440,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 85,
                "album_id": 2,
                "temp_id": "ofR2IdGL",
                "url": null
            },
            {
                "id": 33139,
                "name": "Ruin",
                "album_name": "Illuminate (Deluxe)",
                "number": 2,
                "duration": 241893,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33134,
                "name": "Mercy",
                "album_name": "Illuminate (Deluxe)",
                "number": 3,
                "duration": 208733,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 2,
                "temp_id": "4VPcKbq9",
                "url": null
            },
            {
                "id": 33140,
                "name": "Treat You Better",
                "album_name": "Illuminate (Deluxe)",
                "number": 4,
                "duration": 187973,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 2,
                "temp_id": "4VPcKbq9",
                "url": null
            },
            {
                "id": 160768,
                "name": "Three Empty Words",
                "album_name": "Illuminate (Deluxe)",
                "number": 5,
                "duration": 199013,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33145,
                "name": "Don't Be A Fool",
                "album_name": "Illuminate (Deluxe)",
                "number": 6,
                "duration": 215773,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33142,
                "name": "Like This",
                "album_name": "Illuminate (Deluxe)",
                "number": 7,
                "duration": 186946,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33133,
                "name": "No Promises",
                "album_name": "Illuminate (Deluxe)",
                "number": 8,
                "duration": 166053,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33146,
                "name": "Lights On",
                "album_name": "Illuminate (Deluxe)",
                "number": 9,
                "duration": 201440,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33141,
                "name": "Honest",
                "album_name": "Illuminate (Deluxe)",
                "number": 10,
                "duration": 199186,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33132,
                "name": "Patience",
                "album_name": "Illuminate (Deluxe)",
                "number": 11,
                "duration": 175253,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33135,
                "name": "Bad Reputation",
                "album_name": "Illuminate (Deluxe)",
                "number": 12,
                "duration": 198226,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 160769,
                "name": "Understand",
                "album_name": "Illuminate (Deluxe)",
                "number": 13,
                "duration": 300973,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33147,
                "name": "Hold On",
                "album_name": "Illuminate (Deluxe)",
                "number": 14,
                "duration": 199546,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33143,
                "name": "Roses",
                "album_name": "Illuminate (Deluxe)",
                "number": 15,
                "duration": 232200,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 2,
                "temp_id": null,
                "url": null
            },
            {
                "id": 33148,
                "name": "Mercy - Acoustic",
                "album_name": "Illuminate (Deluxe)",
                "number": 16,
                "duration": 219160,
                "artists": [
                    "Shawn Mendes"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 2,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 577347,
        "name": "Concrete and Gold",
        "release_date": "2017-09-15",
        "image": "https://i.scdn.co/image/466a21e8c6f72e540392ae76a94e01c876a8f193",
        "artist_id": 907,
        "spotify_popularity": 83,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 907,
            "name": "Foo Fighters",
            "spotify_followers": 3179501,
            "spotify_popularity": 86,
            "image_small": "https://i.scdn.co/image/bc43602fa69d0b7ad5a86c621d5f5c63ba327747",
            "image_large": "https://i.scdn.co/image/c1a1b1ba6e7f40a1ac584481bdd6b3c2f305a35c",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 15:55:17",
            "bio": "{\"bio\":\"Foo Fighters is an American rock band, formed in Seattle, Washington in 1994. It was founded by Nirvana drummer Dave Grohl as a one-man project following the death of Kurt Cobain and the resulting dissolution of his previous band. The group got its name from the UFOs and various aerial phenomena that were reported by Allied aircraft pilots in World War II, which were known collectively as foo fighters.\\nPrior to the release of Foo Fighters' 1995 debut album Foo Fighters, which featured Grohl as the only official member, Grohl recruited bassist Nate Mendel and drummer William Goldsmith, both formerly of Sunny Day Real Estate, as well as Nirvana touring guitarist Pat Smear to complete the lineup. The band began with performances in Portland, Oregon. Goldsmith quit during the recording of the group's second album, The Colour and the Shape (1997), when most of the drum parts were re-recorded by Grohl himself. Smear's departure followed soon afterward, though he would rejoin them in 2005.\\nThey were replaced by Taylor Hawkins and Franz Stahl, respectively, although Stahl was fired before the recording of the group's third album, There Is Nothing Left to Lose (1999). The band briefly continued as a trio until Chris Shiflett joined as the band's lead guitarist after the completion of There Is Nothing Left to Lose. The band released its fourth album, One by One, in 2002. The group followed that release with the two-disc In Your Honor (2005), which was split between acoustic songs and heavier material. Foo Fighters released its sixth album, Echoes, Silence, Patience & Grace, in 2007. The band's seventh studio album, Wasting Light, produced by Butch Vig was released in 2011, in which Smear returned as a full member. In November 2014, the band's eighth studio album, Sonic Highways, was released as an accompanying soundtrack to the Grohl-directed 2014 miniseries of the same name.\\nOver the course of the band's career, four of its albums have won Grammy Awards for Best Rock Album. As of 2015, the band's eight albums have sold 12 million copies in the U.S., and 30 million worldwide.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/e\\/e5\\/Dave_Grohl_in_London.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/e\\/e8\\/Foo_Fighters_2007.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/5\\/5e\\/Foo_Fighters_2009.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/9\\/9f\\/Foo_Fighters_Live_21.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2944437,
                "name": "T-Shirt",
                "album_name": "Concrete and Gold",
                "number": 1,
                "duration": 82613,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944435,
                "name": "Run",
                "album_name": "Concrete and Gold",
                "number": 2,
                "duration": 323373,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944440,
                "name": "Make It Right",
                "album_name": "Concrete and Gold",
                "number": 3,
                "duration": 279253,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944434,
                "name": "The Sky Is A Neighborhood",
                "album_name": "Concrete and Gold",
                "number": 4,
                "duration": 244573,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944442,
                "name": "La Dee Da",
                "album_name": "Concrete and Gold",
                "number": 5,
                "duration": 242760,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944436,
                "name": "Dirty Water",
                "album_name": "Concrete and Gold",
                "number": 6,
                "duration": 320880,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944438,
                "name": "Arrows",
                "album_name": "Concrete and Gold",
                "number": 7,
                "duration": 266186,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944439,
                "name": "Happy Ever After (Zero Hour)",
                "album_name": "Concrete and Gold",
                "number": 8,
                "duration": 220973,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944441,
                "name": "Sunday Rain",
                "album_name": "Concrete and Gold",
                "number": 9,
                "duration": 371453,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944443,
                "name": "The Line",
                "album_name": "Concrete and Gold",
                "number": 10,
                "duration": 218240,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2944444,
                "name": "Concrete and Gold",
                "album_name": "Concrete and Gold",
                "number": 11,
                "duration": 331626,
                "artists": [
                    "Foo Fighters"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 577347,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 569467,
        "name": "Cozy Tapes Vol. 2: Too Cozy",
        "release_date": "2017-08-25",
        "image": "https://i.scdn.co/image/6ad5943073618efe2ebf54a69056ceb893639b1a",
        "artist_id": 19412,
        "spotify_popularity": 83,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 19412,
            "name": "A$AP Mob",
            "spotify_followers": 346071,
            "spotify_popularity": 83,
            "image_small": "https://i.scdn.co/image/6dc965defbd39e555030f5d57eca9fd921a7a89a",
            "image_large": "https://i.scdn.co/image/fa30308f04ed43a632e19c24b7ac0b6162ce4cde",
            "fully_scraped": 0,
            "updated_at": "2017-10-23 23:13:12",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2947637,
                "name": "Skool Bus (Skit)",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 1,
                "duration": 135413,
                "artists": [
                    "A$AP Mob"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2919196,
                "name": "Perry Aye",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 2,
                "duration": 146426,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "A$AP Nast",
                    "Playboi Carti",
                    "Jaden Smith"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2927784,
                "name": "Please Shut Up",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 3,
                "duration": 210333,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "KEY",
                    "Gucci Mane"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2915250,
                "name": "Blowin' Minds (Skateboard)",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 4,
                "duration": 207560,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "A$AP Nast",
                    "A$Ap Ant",
                    "Chief Keef",
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947638,
                "name": "Black Card",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 5,
                "duration": 119146,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "Smooky MarGielaa"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2915249,
                "name": "Walk On Water",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 6,
                "duration": 236226,
                "artists": [
                    "A$AP Mob",
                    "A$AP Twelvyy",
                    "A$Ap Ant",
                    "A$AP Nast",
                    "A$AP Ferg",
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947639,
                "name": "BYF",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 7,
                "duration": 174626,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "A$Ap Ant",
                    "Smooky MarGielaa"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2919197,
                "name": "Get The Bag",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 8,
                "duration": 256560,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "A$AP Ferg",
                    "A$Ap Ant",
                    "A$AP Nast",
                    "A$AP TyY",
                    "Playboi Carti",
                    "Smooky MarGielaa"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947640,
                "name": "Bahamas",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 9,
                "duration": 195666,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "A$AP Ferg",
                    "A$AP Twelvyy",
                    "Lil Yachty",
                    "KEY",
                    "ScHoolboy Q",
                    "Smooky MarGielaa"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947641,
                "name": "Principal Daryl Choad (Skit)",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 10,
                "duration": 55506,
                "artists": [
                    "A$AP Mob"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947642,
                "name": "Frat Rules",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 11,
                "duration": 218946,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "Playboi Carti",
                    "Big Sean"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947643,
                "name": "FYBR (First Year Being Rich)",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 12,
                "duration": 211840,
                "artists": [
                    "A$AP Mob",
                    "A$AP Twelvyy",
                    "A$AP Rocky",
                    "A$Ap Ant",
                    "A$AP Ferg",
                    "KEY",
                    "Playboi Carti"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2919198,
                "name": "Feels So Good",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 13,
                "duration": 205266,
                "artists": [
                    "A$AP Mob",
                    "A$AP Ferg",
                    "A$AP Nast",
                    "A$AP Rocky",
                    "A$AP Twelvyy"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947644,
                "name": "Coziest",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 14,
                "duration": 166440,
                "artists": [
                    "A$AP Mob",
                    "A$AP Twelvyy",
                    "Zack"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2915114,
                "name": "What Happens",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 15,
                "duration": 219333,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "A$AP Ferg",
                    "Joey Bada$$",
                    "Kirk Knight",
                    "Nyck Caution",
                    "Meechy Darko",
                    "Zombie Juice"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947645,
                "name": "RAF",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 16,
                "duration": 255413,
                "artists": [
                    "A$AP Mob",
                    "A$AP Rocky",
                    "Playboi Carti",
                    "Quavo",
                    "Lil Uzi Vert",
                    "Frank Ocean"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2947646,
                "name": "Last Day Of Skool (Skit)",
                "album_name": "Cozy Tapes Vol. 2: Too Cozy",
                "number": 17,
                "duration": 91400,
                "artists": [
                    "A$AP Mob"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 569467,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 575487,
        "name": "A Moment Apart",
        "release_date": "2017-09-08",
        "image": "https://i.scdn.co/image/105d000df44f1a129ef078fee2434b75b928bc3f",
        "artist_id": 6410,
        "spotify_popularity": 83,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 6410,
            "name": "ODESZA",
            "spotify_followers": 573342,
            "spotify_popularity": 82,
            "image_small": "https://i.scdn.co/image/f929b767371f05208b331298e3d61dc2edb57d01",
            "image_large": "https://i.scdn.co/image/74a2eb1ad773180e5fa2a6b17154fe054631a73f",
            "fully_scraped": 0,
            "updated_at": "2017-09-20 16:59:51",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2957308,
                "name": "Intro",
                "album_name": "A Moment Apart",
                "number": 1,
                "duration": 63972,
                "artists": [
                    "ODESZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957309,
                "name": "A Moment Apart",
                "album_name": "A Moment Apart",
                "number": 2,
                "duration": 234244,
                "artists": [
                    "ODESZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957310,
                "name": "Higher Ground (feat. Naomi Wild)",
                "album_name": "A Moment Apart",
                "number": 3,
                "duration": 215130,
                "artists": [
                    "ODESZA",
                    "Naomi Wild"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957311,
                "name": "Boy",
                "album_name": "A Moment Apart",
                "number": 4,
                "duration": 183680,
                "artists": [
                    "ODESZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957312,
                "name": "Line Of Sight (feat. WYNNE & Mansionair)",
                "album_name": "A Moment Apart",
                "number": 5,
                "duration": 237140,
                "artists": [
                    "ODESZA",
                    "WYNNE",
                    "Mansionair"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957313,
                "name": "Late Night",
                "album_name": "A Moment Apart",
                "number": 6,
                "duration": 228154,
                "artists": [
                    "ODESZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2935885,
                "name": "Across The Room (feat. Leon Bridges)",
                "album_name": "A Moment Apart",
                "number": 7,
                "duration": 283537,
                "artists": [
                    "ODESZA",
                    "Leon Bridges"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957314,
                "name": "Meridian",
                "album_name": "A Moment Apart",
                "number": 8,
                "duration": 235860,
                "artists": [
                    "ODESZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2934821,
                "name": "Everything At Your Feet (feat. The Chamanas)",
                "album_name": "A Moment Apart",
                "number": 9,
                "duration": 208017,
                "artists": [
                    "ODESZA",
                    "The Chamanas"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957315,
                "name": "Just A Memory (feat. Regina Spektor)",
                "album_name": "A Moment Apart",
                "number": 10,
                "duration": 236794,
                "artists": [
                    "ODESZA",
                    "Regina Spektor"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957316,
                "name": "Divide (feat. Kelsey Bulkin)",
                "album_name": "A Moment Apart",
                "number": 11,
                "duration": 241849,
                "artists": [
                    "ODESZA",
                    "Kelsey Bulkin"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957317,
                "name": "Thin Floors And Tall Ceilings",
                "album_name": "A Moment Apart",
                "number": 12,
                "duration": 178307,
                "artists": [
                    "ODESZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957318,
                "name": "La Ciudad",
                "album_name": "A Moment Apart",
                "number": 13,
                "duration": 271136,
                "artists": [
                    "ODESZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2935997,
                "name": "Falls (feat. Sasha Sloan)",
                "album_name": "A Moment Apart",
                "number": 14,
                "duration": 232936,
                "artists": [
                    "ODESZA",
                    "Sasha Sloan"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957319,
                "name": "Show Me",
                "album_name": "A Moment Apart",
                "number": 15,
                "duration": 218548,
                "artists": [
                    "ODESZA"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2957320,
                "name": "Corners Of The Earth (feat. RY X)",
                "album_name": "A Moment Apart",
                "number": 16,
                "duration": 305348,
                "artists": [
                    "ODESZA",
                    "RY X"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 575487,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 529513,
        "name": "Melodrama",
        "release_date": "2017-06-16",
        "image": "https://i.scdn.co/image/52525e115dab1d038df73060311e462f74574f66",
        "artist_id": 3015,
        "spotify_popularity": 83,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 3015,
            "name": "Lorde",
            "spotify_followers": 2582688,
            "spotify_popularity": 88,
            "image_small": "https://i.scdn.co/image/ca2e7772dcdfd03401cdd0c66aeee1bea8ea3904",
            "image_large": "https://i.scdn.co/image/d25fc756cd04c8b3ea196b7c07c6d057685cc405",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 14:50:00",
            "bio": "{\"bio\":\"Ella Marija Lani Yelich-O'Connor (born 7 November 1996), better known by her stage name Lorde (pronounced \\\"lord\\\"), is a New Zealand singer-songwriter. Born in Takapuna and raised in Devonport, Auckland, she became interested in performing as a child. In her early teens, she signed with Universal Music Group and was later paired with the songwriter and record producer Joel Little, who has co-written and produced most of Lorde's works. Her first major release, The Love Club EP, was commercially released in March 2013. The EP reached number two on the national record charts of New Zealand and Australia.\\nIn mid-2013, Lorde released her debut single \\\"Royals\\\". It became an international crossover hit and made Lorde the youngest solo artist (and the only New Zealander) to achieve a US number-one single on the Billboard Hot 100 since 1987. In late 2013, she released her debut studio album, Pure Heroine. The record topped the charts of New Zealand and Australia and reached number three on the US Billboard 200. Its following singles include \\\"Tennis Court\\\", \\\"Team\\\", \\\"No Better\\\" and \\\"Glory and Gore\\\". In 2014, Lorde released \\\"Yellow Flicker Beat\\\" as a single from the soundtrack for The Hunger Games: Mockingjay \\u2013 Part 1.\\nLorde's music consists of subgenres such as dream pop and indietronica. She has earned two Grammy Awards, a Brit Award and ten New Zealand Music Awards. In 2013, she was named among Time's most influential teenagers in the world, and in the following year, she was in Forbes's \\\"30 Under 30\\\" list.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/6\\/6c\\/Lorde_%28Austin%2C_Texas%2C_2014-10-12%29_%2814919531183%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/2\\/2d\\/Lorde_Constanza_15_%28cropped%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/4\\/4b\\/Lorde_Lollapalooza_2014_%282%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/f\\/f6\\/Lorde_in_Seattle_2013_-_2.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2670952,
                "name": "Green Light",
                "album_name": "Melodrama",
                "number": 1,
                "duration": 234652,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670953,
                "name": "Sober",
                "album_name": "Melodrama",
                "number": 2,
                "duration": 197235,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670954,
                "name": "Homemade Dynamite",
                "album_name": "Melodrama",
                "number": 3,
                "duration": 189796,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670955,
                "name": "The Louvre",
                "album_name": "Melodrama",
                "number": 4,
                "duration": 271088,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670956,
                "name": "Liability",
                "album_name": "Melodrama",
                "number": 5,
                "duration": 171727,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670957,
                "name": "Hard Feelings/Loveless",
                "album_name": "Melodrama",
                "number": 6,
                "duration": 367391,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670951,
                "name": "Sober II (Melodrama)",
                "album_name": "Melodrama",
                "number": 7,
                "duration": 178639,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 67,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670958,
                "name": "Writer In The Dark",
                "album_name": "Melodrama",
                "number": 8,
                "duration": 216610,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670959,
                "name": "Supercut",
                "album_name": "Melodrama",
                "number": 9,
                "duration": 277506,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670960,
                "name": "Liability (Reprise)",
                "album_name": "Melodrama",
                "number": 10,
                "duration": 136019,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2670961,
                "name": "Perfect Places",
                "album_name": "Melodrama",
                "number": 11,
                "duration": 221874,
                "artists": [
                    "Lorde"
                ],
                "youtube_id": null,
                "spotify_popularity": 75,
                "album_id": 529513,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 438207,
        "name": "HNDRXX",
        "release_date": "2017-07-27",
        "image": "https://i.scdn.co/image/fa286e53b15b2bf3f0ef5268bce90d7a44590f08",
        "artist_id": 6184,
        "spotify_popularity": 83,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 6184,
            "name": "Future",
            "spotify_followers": 4423618,
            "spotify_popularity": 96,
            "image_small": "https://i.scdn.co/image/7f71d18bf087f8b3ee0dfb1c75af20d510d1e2be",
            "image_large": "https://i.scdn.co/image/5edf0373e8df999d93a2d6bf198c6b7ba85c3f67",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 18:05:15",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2227880,
                "name": "My Collection",
                "album_name": "HNDRXX",
                "number": 1,
                "duration": 255556,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227881,
                "name": "Comin Out Strong",
                "album_name": "HNDRXX",
                "number": 2,
                "duration": 254369,
                "artists": [
                    "Future",
                    "The Weeknd"
                ],
                "youtube_id": null,
                "spotify_popularity": 78,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227882,
                "name": "Lookin Exotic",
                "album_name": "HNDRXX",
                "number": 3,
                "duration": 226862,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 53,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227883,
                "name": "Damage",
                "album_name": "HNDRXX",
                "number": 4,
                "duration": 237382,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227884,
                "name": "Use Me",
                "album_name": "HNDRXX",
                "number": 5,
                "duration": 256342,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 52,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227885,
                "name": "Incredible",
                "album_name": "HNDRXX",
                "number": 6,
                "duration": 248049,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227886,
                "name": "Testify",
                "album_name": "HNDRXX",
                "number": 7,
                "duration": 178142,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2226229,
                "name": "Fresh Air",
                "album_name": "HNDRXX",
                "number": 8,
                "duration": 270822,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227887,
                "name": "Neva Missa Lost",
                "album_name": "HNDRXX",
                "number": 9,
                "duration": 238009,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227888,
                "name": "Keep Quiet",
                "album_name": "HNDRXX",
                "number": 10,
                "duration": 202289,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 50,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227889,
                "name": "Hallucinating",
                "album_name": "HNDRXX",
                "number": 11,
                "duration": 221609,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227890,
                "name": "I Thank U",
                "album_name": "HNDRXX",
                "number": 12,
                "duration": 141342,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 49,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227891,
                "name": "New Illuminati",
                "album_name": "HNDRXX",
                "number": 13,
                "duration": 181742,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 48,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227892,
                "name": "Turn On Me",
                "album_name": "HNDRXX",
                "number": 14,
                "duration": 264836,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 50,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227893,
                "name": "Selfish",
                "album_name": "HNDRXX",
                "number": 15,
                "duration": 251422,
                "artists": [
                    "Future",
                    "Rihanna"
                ],
                "youtube_id": null,
                "spotify_popularity": 80,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227894,
                "name": "Solo",
                "album_name": "HNDRXX",
                "number": 16,
                "duration": 265996,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2227895,
                "name": "Sorry",
                "album_name": "HNDRXX",
                "number": 17,
                "duration": 451529,
                "artists": [
                    "Future"
                ],
                "youtube_id": null,
                "spotify_popularity": 51,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2701084,
                "name": "PIE",
                "album_name": "HNDRXX",
                "number": 18,
                "duration": 211240,
                "artists": [
                    "Future",
                    "Chris Brown"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 438207,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 424209,
        "name": "Human (Deluxe)",
        "release_date": "2017-02-10",
        "image": "https://i.scdn.co/image/99dd636982fcd2adfb956969d11264dca94139f1",
        "artist_id": 82479,
        "spotify_popularity": 83,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 82479,
            "name": "Rag'n'Bone Man",
            "spotify_followers": 439072,
            "spotify_popularity": 79,
            "image_small": "https://i.scdn.co/image/a10fa412ee0acfdec135c16c76ed6c2c789cdbce",
            "image_large": "https://i.scdn.co/image/aa0f526c0d9b86361af0a3328910413c357a1b5d",
            "fully_scraped": 1,
            "updated_at": "2017-10-26 16:33:28",
            "bio": "{\"bio\":\"\",\"images\":[]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 2153876,
                "name": "Human",
                "album_name": "Human (Deluxe)",
                "number": 1,
                "duration": 200186,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 83,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153877,
                "name": "Innocent Man",
                "album_name": "Human (Deluxe)",
                "number": 2,
                "duration": 186653,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153878,
                "name": "Skin",
                "album_name": "Human (Deluxe)",
                "number": 3,
                "duration": 239626,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 79,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153879,
                "name": "Bitter End",
                "album_name": "Human (Deluxe)",
                "number": 4,
                "duration": 219520,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153880,
                "name": "Be the Man",
                "album_name": "Human (Deluxe)",
                "number": 5,
                "duration": 194546,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153881,
                "name": "Love You Any Less",
                "album_name": "Human (Deluxe)",
                "number": 6,
                "duration": 261146,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153882,
                "name": "Odetta",
                "album_name": "Human (Deluxe)",
                "number": 7,
                "duration": 216706,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153883,
                "name": "Grace",
                "album_name": "Human (Deluxe)",
                "number": 8,
                "duration": 211066,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153884,
                "name": "Ego",
                "album_name": "Human (Deluxe)",
                "number": 9,
                "duration": 197906,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153885,
                "name": "Arrow",
                "album_name": "Human (Deluxe)",
                "number": 10,
                "duration": 201333,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153886,
                "name": "As You Are",
                "album_name": "Human (Deluxe)",
                "number": 11,
                "duration": 228520,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153887,
                "name": "Die Easy",
                "album_name": "Human (Deluxe)",
                "number": 12,
                "duration": 152346,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153888,
                "name": "The Fire",
                "album_name": "Human (Deluxe)",
                "number": 13,
                "duration": 222000,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153889,
                "name": "Fade to Nothing",
                "album_name": "Human (Deluxe)",
                "number": 14,
                "duration": 222946,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153890,
                "name": "Life In Her Yet",
                "album_name": "Human (Deluxe)",
                "number": 15,
                "duration": 173320,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153891,
                "name": "Your Way or the Rope",
                "album_name": "Human (Deluxe)",
                "number": 16,
                "duration": 204706,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153892,
                "name": "Lay My Body Down",
                "album_name": "Human (Deluxe)",
                "number": 17,
                "duration": 216813,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153893,
                "name": "Wolves",
                "album_name": "Human (Deluxe)",
                "number": 18,
                "duration": 175653,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            },
            {
                "id": 2153894,
                "name": "Healed",
                "album_name": "Human (Deluxe)",
                "number": 19,
                "duration": 176200,
                "artists": [
                    "Rag'n'Bone Man"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 424209,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 300752,
        "name": "FREE 6LACK",
        "release_date": "2016-11-18",
        "image": "https://i.scdn.co/image/db4841b9961a0aaa5df39d1373e14ebb926a5983",
        "artist_id": 41804,
        "spotify_popularity": 83,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 41804,
            "name": "6LACK",
            "spotify_followers": 448671,
            "spotify_popularity": 82,
            "image_small": "https://i.scdn.co/image/f40309de8f7240030ff114811569c9fb0bc61aac",
            "image_large": "https://i.scdn.co/image/65eafe1cf3728bfc0b2bafc6caab215fdaf1ef9e",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 17:12:52",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 1627631,
                "name": "Never Know",
                "album_name": "FREE 6LACK",
                "number": 1,
                "duration": 249680,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1627632,
                "name": "Rules",
                "album_name": "FREE 6LACK",
                "number": 2,
                "duration": 211866,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1602909,
                "name": "PRBLMS",
                "album_name": "FREE 6LACK",
                "number": 3,
                "duration": 246773,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1627633,
                "name": "Free",
                "album_name": "FREE 6LACK",
                "number": 4,
                "duration": 263013,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1627634,
                "name": "Learn Ya",
                "album_name": "FREE 6LACK",
                "number": 5,
                "duration": 215680,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1627635,
                "name": "MTFU",
                "album_name": "FREE 6LACK",
                "number": 6,
                "duration": 208320,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1627636,
                "name": "Luving U",
                "album_name": "FREE 6LACK",
                "number": 7,
                "duration": 252893,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1627637,
                "name": "Gettin' Old",
                "album_name": "FREE 6LACK",
                "number": 8,
                "duration": 215000,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 69,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1559852,
                "name": "Worst Luck",
                "album_name": "FREE 6LACK",
                "number": 9,
                "duration": 206133,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1627630,
                "name": "Ex Calling",
                "album_name": "FREE 6LACK",
                "number": 10,
                "duration": 211960,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1627638,
                "name": "Alone / EA6",
                "album_name": "FREE 6LACK",
                "number": 11,
                "duration": 553853,
                "artists": [
                    "6LACK"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 300752,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 269396,
        "name": "DNCE",
        "release_date": "2016-11-18",
        "image": "https://i.scdn.co/image/5aa8966fc523a6c663c11e12379f85154e197569",
        "artist_id": 1829,
        "spotify_popularity": 83,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 1829,
            "name": "DNCE",
            "spotify_followers": 922169,
            "spotify_popularity": 83,
            "image_small": "https://i.scdn.co/image/47b756c59a69a11e1f387a27355761832ea17e25",
            "image_large": "https://i.scdn.co/image/f9587d5529e31f7fb0b8ea590e0600f9dfb54423",
            "fully_scraped": 0,
            "updated_at": "2017-10-25 20:16:17",
            "bio": "{\"bio\":\"\",\"images\":[]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 598728,
                "name": "DNCE",
                "album_name": "DNCE",
                "number": 1,
                "duration": 230680,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399052,
                "name": "Body Moves",
                "album_name": "DNCE",
                "number": 2,
                "duration": 236453,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399053,
                "name": "Cake By The Ocean",
                "album_name": "DNCE",
                "number": 3,
                "duration": 219146,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 76,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399054,
                "name": "Doctor You",
                "album_name": "DNCE",
                "number": 4,
                "duration": 192013,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399055,
                "name": "Toothbrush",
                "album_name": "DNCE",
                "number": 5,
                "duration": 231813,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 72,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399056,
                "name": "Blown",
                "album_name": "DNCE",
                "number": 6,
                "duration": 197453,
                "artists": [
                    "DNCE",
                    "Kent Jones"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399057,
                "name": "Good Day",
                "album_name": "DNCE",
                "number": 7,
                "duration": 218973,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 70,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399058,
                "name": "Almost",
                "album_name": "DNCE",
                "number": 8,
                "duration": 175853,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 52,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399059,
                "name": "Naked",
                "album_name": "DNCE",
                "number": 9,
                "duration": 236173,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399060,
                "name": "Truthfully",
                "album_name": "DNCE",
                "number": 10,
                "duration": 182653,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 77,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399061,
                "name": "Be Mean",
                "album_name": "DNCE",
                "number": 11,
                "duration": 211240,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399062,
                "name": "Zoom",
                "album_name": "DNCE",
                "number": 12,
                "duration": 221853,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399063,
                "name": "Pay My Rent",
                "album_name": "DNCE",
                "number": 13,
                "duration": 193400,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 62,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1399064,
                "name": "Unsweet",
                "album_name": "DNCE",
                "number": 14,
                "duration": 200746,
                "artists": [
                    "DNCE"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 269396,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 267330,
        "name": "Glory Days (Deluxe)",
        "release_date": "2016-11-18",
        "image": "https://i.scdn.co/image/becbe3bc62dafa4ab9edd7ef313f6ab3fe38b5b6",
        "artist_id": 8934,
        "spotify_popularity": 83,
        "fully_scraped": 0,
        "temp_id": null,
        "artist": {
            "id": 8934,
            "name": "Little Mix",
            "spotify_followers": 2767467,
            "spotify_popularity": 88,
            "image_small": "https://i.scdn.co/image/749fe8c23a8521ac6c95dc8ec30a4ab1f118fc4f",
            "image_large": "https://i.scdn.co/image/aa8c3147f94ac7f7b49a91137b98bdace7064c52",
            "fully_scraped": 0,
            "updated_at": "2017-10-26 06:09:21",
            "bio": null,
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 1388927,
                "name": "Shout Out to My Ex",
                "album_name": "Glory Days (Deluxe)",
                "number": 1,
                "duration": 246240,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 81,
                "album_id": 267330,
                "temp_id": "qf83qYZG",
                "url": null
            },
            {
                "id": 1388928,
                "name": "Touch",
                "album_name": "Glory Days (Deluxe)",
                "number": 2,
                "duration": 213306,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 82,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388929,
                "name": "F.U.",
                "album_name": "Glory Days (Deluxe)",
                "number": 3,
                "duration": 238720,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388930,
                "name": "Oops",
                "album_name": "Glory Days (Deluxe)",
                "number": 4,
                "duration": 204760,
                "artists": [
                    "Little Mix",
                    "Charlie Puth"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388931,
                "name": "You Gotta Not",
                "album_name": "Glory Days (Deluxe)",
                "number": 5,
                "duration": 191026,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 65,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388932,
                "name": "Down & Dirty",
                "album_name": "Glory Days (Deluxe)",
                "number": 6,
                "duration": 175053,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388933,
                "name": "Power",
                "album_name": "Glory Days (Deluxe)",
                "number": 7,
                "duration": 247840,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 71,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388934,
                "name": "Your Love",
                "album_name": "Glory Days (Deluxe)",
                "number": 8,
                "duration": 207746,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388935,
                "name": "Nobody Like You",
                "album_name": "Glory Days (Deluxe)",
                "number": 9,
                "duration": 248720,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388936,
                "name": "No More Sad Songs",
                "album_name": "Glory Days (Deluxe)",
                "number": 10,
                "duration": 206373,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388937,
                "name": "Private Show",
                "album_name": "Glory Days (Deluxe)",
                "number": 11,
                "duration": 161773,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388938,
                "name": "Nothing Else Matters",
                "album_name": "Glory Days (Deluxe)",
                "number": 12,
                "duration": 235520,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388939,
                "name": "Beep Beep",
                "album_name": "Glory Days (Deluxe)",
                "number": 13,
                "duration": 232293,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388940,
                "name": "Freak",
                "album_name": "Glory Days (Deluxe)",
                "number": 14,
                "duration": 216946,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            },
            {
                "id": 1388941,
                "name": "Touch - Acoustic",
                "album_name": "Glory Days (Deluxe)",
                "number": 15,
                "duration": 223693,
                "artists": [
                    "Little Mix"
                ],
                "youtube_id": null,
                "spotify_popularity": 63,
                "album_id": 267330,
                "temp_id": null,
                "url": null
            }
        ]
    },
    {
        "id": 140456,
        "name": "This Is Acting (Deluxe Version)",
        "release_date": "2016-10-21",
        "image": "https://i.scdn.co/image/93ad7f491db7df0cb517308e7bb847da41647618",
        "artist_id": 187,
        "spotify_popularity": 83,
        "fully_scraped": 1,
        "temp_id": null,
        "artist": {
            "id": 187,
            "name": "Sia",
            "spotify_followers": 4741379,
            "spotify_popularity": 93,
            "image_small": "https://i.scdn.co/image/e69e2c19834b560261092ae6cae67f2b86bb6e17",
            "image_large": "https://i.scdn.co/image/0520ee75579d30a6019f6eb7f486cec78115999b",
            "fully_scraped": 0,
            "updated_at": "2017-10-24 23:36:27",
            "bio": "{\"bio\":\"Sia Kate Isobelle Furler (born 18 December 1975), referred to mononymously as Sia (\\/\\u02c8si\\u02d0\\u0259\\/), is an Australian singer, songwriter, record producer and video music director. She started her career as a singer in the local Adelaide acid jazz band Crisp in the mid-1990s. In 1997, when Crisp disbanded, she released her debut studio album titled OnlySee in Australia. She then moved to London, England, and provided lead vocals for the British duo Zero 7.\\nIn 2000, Sia signed to Sony Music's sub-label Dance Pool and released her second studio album, Healing Is Difficult, the following year. Displeased with the promotion of the record, she signed to Go! Beat and released her third studio album, Colour the Small One, in 2004. The project struggled to connect with a mainstream audience, and so Sia relocated to New York City in 2005 and began touring across the United States. She released her fourth and fifth studio releases, Some People Have Real Problems and We Are Born, in 2008 and 2010, respectively. She then took a hiatus from performing, during which she focused on songwriting for other artists. Her catalogue includes the successful collaborations \\\"Titanium\\\" (with David Guetta), \\\"Diamonds\\\" (with Rihanna) and \\\"Wild Ones\\\" (with Flo Rida).\\nIn 2014, Sia released her sixth studio album 1000 Forms of Fear, which debuted at No 1 in the U.S. Billboard 200 and generated the top-ten breakthrough single \\\"Chandelier\\\" and a trilogy of music videos starring child dancer Maddie Ziegler. In 2016, she released her seventh studio album This Is Acting, which spawned her first Hot 100 number one single, \\\"Cheap Thrills\\\". The same year, Sia gave her Nostalgic for the Present Tour, which incorporated performance art elements. Sia has received an array of accolades, including ARIA Awards and an MTV Video Music Award.\",\"images\":[{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/9\\/96\\/Sia_Furler_in_concert.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/6\\/6e\\/Sia_Seattle_%28cropped%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/1\\/11\\/Sia_We_Are_Born_Tour_%28cropped%29.jpg\"},{\"url\":\"https:\\/\\/upload.wikimedia.org\\/wikipedia\\/commons\\/d\\/d0\\/Sia_performing_photograph_by_Kris_Krug.jpg\"}]}",
            "wiki_image_large": null,
            "wiki_image_small": null
        },
        "tracks": [
            {
                "id": 758346,
                "name": "Bird Set Free",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 1,
                "duration": 252440,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758347,
                "name": "Alive",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 2,
                "duration": 263520,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 68,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758348,
                "name": "One Million Bullets",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 3,
                "duration": 252066,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 59,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758349,
                "name": "Move Your Body",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 4,
                "duration": 247213,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758350,
                "name": "Unstoppable",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 5,
                "duration": 217746,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 66,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758352,
                "name": "Reaper",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 7,
                "duration": 219773,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758353,
                "name": "House On Fire",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 8,
                "duration": 241120,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 61,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758354,
                "name": "Footprints",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 9,
                "duration": 193133,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 58,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758355,
                "name": "Sweet Design",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 10,
                "duration": 145600,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 54,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758356,
                "name": "Broken Glass",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 11,
                "duration": 264986,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 57,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758357,
                "name": "Space Between",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 12,
                "duration": 287773,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 55,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758351,
                "name": "Cheap Thrills",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 13,
                "duration": 224493,
                "artists": [
                    "Sia",
                    "Sean Paul"
                ],
                "youtube_id": null,
                "spotify_popularity": 64,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758359,
                "name": "Confetti",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 15,
                "duration": 246173,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 60,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758360,
                "name": "Move Your Body - Alan Walker Remix",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 16,
                "duration": 217906,
                "artists": [
                    "Sia",
                    "Alan Walker"
                ],
                "youtube_id": null,
                "spotify_popularity": 74,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758361,
                "name": "Midnight Decisions",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 17,
                "duration": 222973,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 56,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758362,
                "name": "Jesus Wept",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 18,
                "duration": 329373,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 53,
                "album_id": 140456,
                "temp_id": null,
                "url": null
            },
            {
                "id": 758358,
                "name": "The Greatest",
                "album_name": "This Is Acting (Deluxe Version)",
                "number": 19,
                "duration": 210920,
                "artists": [
                    "Sia"
                ],
                "youtube_id": null,
                "spotify_popularity": 73,
                "album_id": 140456,
                "temp_id": "4VPcKbq9",
                "url": null
            }
        ]
    }
]
};