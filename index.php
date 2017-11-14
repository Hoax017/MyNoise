<!DOCTYPE html>
<html>
<head>
	<meta property="og:image" content="img/MyNoise.jpg" />
	<meta name="keywords" content="Music, Playlist, Artist, Albums, Similar artists, tracks, Video, Videoclips, Lyrics, Stream, Free music, Free stream video, Music videos free," />
	<base href="/">
	<title>MyNoise</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta name="fragment" content="!">
	<meta name="google" content="notranslate">
	<meta name="title" content="MyNoise - Free music, videoclips and lyrics without waits or ads!!" />
	<meta name="description" content="MyNoise provides music, videoclips and lyrics for free! Albums, artists, lyrics, playlists, youtube video. Share your playlists with your friends. Information about artists and related artists all in one place absolutely free without waits." />
	<style>
	#splash,[ng-cloak]{display:none}#splash,.inner{position:absolute}[ng-cloak]#splash{display:flex!important}#splash{top:0;left:0;width:100%;height:100%;z-index:9999;justify-content:center;align-items:center}#splash-spinner{display:block!important;width:120px;height:120px;border-radius:50%;perspective:800px}.inner{box-sizing:border-box;width:100%;height:100%;border-radius:50%}.inner.one{left:0;top:0;animation:rotate-one 1s linear infinite;border-bottom:3px solid #84BD00}.inner.two{right:0;top:0;animation:rotate-two 1s linear infinite;border-right:3px solid #84BD00}.inner.three{right:0;bottom:0;animation:rotate-three 1s linear infinite;border-top:3px solid #84BD00}@keyframes  rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes  rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes  rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}
</style>
<link rel="stylesheet" id="main-stylesheet" href="css/styles.css">
<link rel="stylesheet" id="main-stylesheet" href="asset/css/perfect-scrollbar.css">
<link href='https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,600,700' rel='stylesheet' type='text/css'>
<link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="favicons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
<link rel="manifest" href="favicons/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="favicons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
</head>
<body ng-app="app" global-dropdown-close ng-controller="AppController">
	<div id="splash" ng-cloak>
		<div id="splash-spinner">
			<div class="inner one"></div>
			<div class="inner two"></div>
			<div class="inner three"></div>
		</div>
	</div>
	<div ui-view="full" id="full-page-view"></div>
	<div class="app-container" ng-class="{ visible: !shouldPlayerControlsBeHidden() }">
		<section class="page-container" ng-cloak>
			<section id="left-panel" class="togglable-sidebar" ng-class="{ closed: isPhone }">
				<div ng-controller="PlaylistModifyController" class="left-panel-inner">
					<div class="content ps-container" >
						<a ui-sref="home" class="logo hidden-phone" href="/"><img ng-src="http://localhost/img/custom_logo_light.png" alt="logo" src="http://localhost/img/custom_logo_light.png"></a>
						<div class="search-bar" abineguid="53E250B905134F77AD648C32B627A0B6">
							<input placeholder="Search..." ng-model="search.query" ng-model-options="{ debounce: 400 }" ng-change="search.getResults(search.query)" on-enter="search.viewAllResults()" class="ng-pristine ng-untouched ng-valid" type="text">
							<!-- ngIf: search.ajaxInProgress -->
							<!-- ngIf: !search.ajaxInProgress && search.query.length -->
						</div>
						<div class="main-menu">
							<!-- ngIf: isPhone -->
							<div class="menu-item active" ui-sref="top-albums" ui-sref-active="active" href="/top-albums"><i class="icon icon-thumbs-up"></i> Popular Albums</div>
							<div class="menu-item" ui-sref="popular-genres" ui-sref-active="active" href="/popular-genres"><i class="icon icon-tags"></i> Popular Genres</div>
							<div class="menu-item" ui-sref="top-songs" ui-sref-active="active" href="/top-songs"><i class="icon icon-fire"></i> Top 50</div>
							<div class="menu-item" ui-sref="new-releases" ui-sref-active="active" href="/new-releases"><i class="icon icon-cd"></i> New Releases</div>
						</div>
						<div class="divider"></div>
						<!-- ngIf: users.current -->
						<!-- ngIf: !users.current -->
						<div class="login-btns" ng-if="!users.current">
							<button class="primary login-btn" ui-sref="login" href="/login">Login</button>
							<!-- ngIf: utils.getSetting('enableRegistration') -->
							<button class="cancel register-btn" ui-sref="register" ng-if="utils.getSetting('enableRegistration')" href="/register">Register</button>
							<!-- end ngIf: utils.getSetting('enableRegistration') -->
						</div>
						<!-- end ngIf: !users.current -->
						<div class="your-music">
							<h2>Your Music</h2>
							<div class="menu-item" ui-sref="songs" ui-sref-active="active" href="/songs"><i class="icon icon-note"></i> Songs</div>
							<div class="menu-item" ui-sref="albums" ui-sref-active="active" href="/albums"><i class="icon icon-cd"></i> Albums</div>
							<div class="menu-item" ui-sref="artists" ui-sref-active="active" href="/artists"><i class="icon icon-mic"></i> Artists</div>
						</div>
						<div class="divider"></div>
						<div class="playlists-container">
							<div class="playlists">
								<h2>Playlists <i class="icon icon-plus" tooltips="" tooltip-title="New Playlist" ng-click="openNewPlaylistModal()"></i></h2>
								<div class="playlists-list">
									<!-- ngRepeat: playlist in playlists.all -->
								</div>
							</div>
						</div>
					</div>
					<div class="current-track ng-hide" ng-show="player.currentTrack" ng-controller="ExternalPlayerControlsController"><img ng-src="http://localhost/assets/images/album-no-image.png" src="http://localhost/assets/images/album-no-image.png">
						<div class="info">
							<div class="track-name" title=""></div>
							<div class="artist-name">
								<div class="artists" artists="player.currentTrack.artists">
									<!-- ngRepeat: name in artists -->
								</div>
							</div>
						</div>
						<div class="add-remove" ng-class="{ saved: trackSaved(player.currentTrack) }"><i class="icon icon-plus add-track" ng-click="addTrack(player.currentTrack)"></i> <i class="icon icon-cancel-1 remove-track" ng-click="removeTrack(player.currentTrack)"></i> <i class="icon icon-ok track-added" ng-click="removeTrack(player.currentTrack)"></i></div>
					</div>
				</div>
			</section>
			<div class="search-panel-backdrop hidden" ng-if="searchPanelNeeded">
				<div class="search-panel ps-container" >
					<div class="view-all" ng-click="search.viewAllResults()">View All Results... <i class="icon icon-right-open"></i></div>
					<!-- ngIf: search.results.artists.length -->
					<!-- ngIf: search.results.tracks.length -->
					<!-- ngIf: search.results.albums.length -->
					<!-- ngIf: search.results.playlists.length -->
					<!-- ngIf: search.results.users.length -->
				</div>
			</div>
			<div class="middle-view">
				<nav class="mobile-nav" ng-class="{ show: isPhone }">
					<div class="toggle-icon" sidebar-toggler><i class="icon icon-menu"></i></div>
					<div class="state-name">{{ getCurrentStateName() }}</div>
					<div class="mobile-search-bar">
						<i class="icon icon-search"></i>
						<input type="text" class="mobile-search-bar" ng-model="search.query" ng-model-options="{ debounce: 400 }" ng-change="search.getResults(search.query)">
						<i class="icon icon-spin6 spin search-bar-spinner" ng-if="search.ajaxInProgress"></i>
					</div>
				</nav>
				<div ui-view="" id="main-view">
					<div class="scroll-container ps-container" lazy-img-container="">
						<div class="page-shadow albums-page home-page" ng-controller="TopAlbumsController">
							<!-- ngIf: ad1 -->
							<div class="filter-bar">
								<div class="dropdown-container sort">Popular Albums</div>
								<div class="filter hidden-phone" abineguid="FAC4DC86F86D4F9683CD25FCAEAE5453">
									<input ng-model="params.query" placeholder="Filter..." class="ng-pristine ng-untouched ng-valid" type="text">
									<i class="icon icon-search"></i>
								</div>
							</div>
							<section class="albums hover-overlay">
								<!-- ngRepeat: album in topAlbums | filter:{name:params.query} as sortedAlbums -->
								<figure class="album"  context-menu-item="album" ng-repeat="album in topAlbums | filter:{name:params.query} as sortedAlbums">
									<div class="image">
										<img lazy-img="https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f" ng-src="{{ album.image }}" alt="{{ album.name }}" src="https://i.scdn.co/image/487bf17160e944c29ea63192a2655c0b808aee8f">
										<div class="overlay">
											<i class="icon icon-play play" ng-click="playAlbum(album)"></i>
										</div>
									</div>
									<figcaption>
										<a class="album-name" ng-href="album({artistName:utils.encodeUrlParam(album.artist.name), name:utils.encodeUrlParam(album.name), id:album.id})">{{ album.name }}</a>
										<!-- ngIf: album.artist --><a class="artist-name" ng-if="album.artist" ng-href="artist({ name: utils.encodeUrlParam(album.artist.name), id:album.artist.id })">{{ album.artist.name }}</a>
										<!-- end ngIf: album.artist -->
									</figcaption>
								</figure>
								<!-- end ngRepeat: album in topAlbums | filter:{name:params.query} as sortedAlbums -->
							</section>
							<!-- ngIf: sortedAlbums && ! sortedAlbums.length -->
							<!-- ngIf: ad2 -->
						</div>
					</div>
				</div>
			</div>
			<div id="right-panel" ng-class="{ closed: !queuePanelStatus.open, 'player-visible': utils.getSetting('show_youtube_player') }" class="closed player-visible">
				<section class="queue ps-container" lazy-img-container="">
					<!-- ngRepeat: track in player.queue track by track.identifier -->

				</section>
			</div>
			<div class="lyrics-container hidden" lyrics-container>
				<div class="backdrop"></div>
				<div class="modal-inner-container">
					<div id="lyrics-panel" class="scroll-container" pretty-scrollbar></div>
					<div class="close-lyrics-icon"><i class="icon icon-cancel"></i></div>
				</div>
			</div>
			<div class="player-container hidden" video-container ng-class="{ show: utils.getSetting('show_youtube_player') && ! isPhone }">
				<div class="modal-inner-container video-inner-container">
					<div id="player"></div>
					<div class="yt-overlay" ng-if="utils.getSetting('block_youtube_embed_clicks')"></div>
					<div class="close-lyrics-icon"><i class="icon icon-cancel"></i></div>
					<div class="toggle-fullscreen" ng-if="utils.getSetting('show_fullscreen_button')"><i class="icon icon-resize-full"></i></div>
				</div>
				<div class="backdrop"></div>
			</div>
			<div id="context-menu" class="hidden" context-menu ng-controller="ContextMenuController">
				<div class="header">
					<div class="image"></div>
					<div class="info">
						<div class="name"></div>
						<div class="sub-name"></div>
					</div>
				</div>
				<div class="body">
					<add-to-playlist class="slide-out"></add-to-playlist>
				</div>
			</div>
		</section>
		<section id="player-controls" style="touch-action: pan-y; -moz-user-select: none;">
			<div class="buttons"><i class="icon icon-to-start prev"></i>
				<!-- ngIf: !player.loadingTrack && !player.isPlaying --><i class="icon icon-play toggle-play" ng-if="!player.loadingTrack &amp;&amp; !player.isPlaying"></i>
				<!-- end ngIf: !player.loadingTrack && !player.isPlaying -->
				<!-- ngIf: !player.loadingTrack && player.isPlaying -->
				<!-- ngIf: player.loadingTrack --><i class="icon icon-to-end next"></i></div>
				<!-- ngIf: isPhone -->
				<div class="controls-toggler"><i class="icon icon-dot-3" sidebar-toggler=".buttons.right"></i></div>
				<div class="progress-container">
					<div class="elapsed-time hidden-phone">0:00</div>
					<div class="progress-bar" style="touch-action: pan-y; -moz-user-select: none;">
						<div class="elapsed"></div>
						<div class="progress"></div>
						<div class="handle"></div>
					</div>
					<div class="track-length hidden-phone">0:00</div>
				</div>
				<!-- ngIf: !utils.getSetting('hide_lyrics_button') -->
				<div class="lyrics hidden-phone disabled" ng-class="{ 'showing-lyrics': player.isShowingLyrics, disabled: !player.currentTrack }" ng-if="!utils.getSetting('hide_lyrics_button')">Lyrics</div>
				<!-- end ngIf: !utils.getSetting('hide_lyrics_button') -->
				<div class="buttons right" ng-class="{ closed: isPhone }">
					<!-- ngIf: !utils.getSetting('hide_video_button') --><i class="icon icon-video toggle-video disabled" ng-class="{ disabled: !player.currentTrack }" ng-if="!utils.getSetting('hide_video_button')"></i>
					<!-- end ngIf: !utils.getSetting('hide_video_button') --><i class="icon icon-menu toggle-queue"></i> <i class="icon icon-shuffle-1 shuffle" ng-class="{ shuffling: player.isShuffling }"></i>
					<div class="repeat" ng-class="{ 'repeating-one': player.isRepeatingOne, repeating: player.isRepeating}"><i class="icon icon-loop"></i></div>
					<div class="volume-container" volume-controls=""><i class="icon icon-volume-up-1 volume" style="touch-action: pan-y; -moz-user-select: none;"></i>
						<div class="volume-bar" style="touch-action: pan-y; -moz-user-select: none;">
							<div class="volume-level" style="width: 30%;"></div>
							<div class="volume-handle" style="left: 23.8611%;"></div>
						</div>
					</div>
				</div>
			</section>
		</div>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular.js"></script>
		<script id="vars">
			var vars = {
				user: '',
				baseUrl: 'http://localhost',
				selectedLocale: 'en',
				trans: {"404NotFound":"404 Not Found.","noResultsFoundFor":"No results found for","noResultsExpl":"Please make sure you have correctly spelled your words or try to use different or less keywords.","search":"Search","viewAllResults":"View All Results...","register":"Register","login":"Login","email":"Email","password":"Password","forgot":"Forgot?","rememberMe":"Remember me","noAccount":"Don't have an account?","registerHere":"Register here.","orLoginWith":"Or login with:","wrongCredentials":"Wrong email address or password","alreadyHaveAccount":"Already have an account?","repeatPassword":"Repeat Password","logInHere":"Log in here.","passwordRecovery":"Password Recovery","passResetExpl":"Please enter the email address associated with your account.","sendEmail":"Send Email","cancel":"Cancel","enterYourTwitterEmail":"Enter your email on twitter","requestPassword":"An account with this email address already exists, if you want to connect the two accounts please enter existing accounts password in the field below.","enterYourPassword":"Enter your password","connect":"Connect","userWithEmailExists":"User with this email already exists","wrongPassword":"Password seems to be incorrect, please try again.","confirmEmailMessage":"Registration successful! Please confirm your email address by clicking a link in a message from us.","emailConfirmSuccess":"Your email has been confirmed successfully!","emailConfirmed":"Emailed Confirmed","yourMusic":"Your Music","songs":"Songs","albums":"Albums","artists":"Artists","song":"Song","album":"Album","artist":"Artist","newPlaylist":"New Playlist","enterPlaylistsName":"Enter name of the playlist","create":"Create","playlistNameExists":"You have already created a playlist with that name.","playlists":"Playlists","newReleases":"New Releases","noResults":"No Results","popularGenres":"Popular Genres","top50":"Top 50","popularAlbums":"Popular Albums","top-songs":"Top","new-releases":"New","top-albums":"Top","popular-genres":"Genres","play":"Play","pause":"Pause","save":"Save","lyrics":"Lyrics","couldntFindTrack":"Sorry, this song is not available for streaming.","couldntDownloadTrack":"Sorry, this song is not available for downloading.","noLyricsFound":"Could not find lyrics for this song.","radioNoMoreTracks":"There are no more suggestions for this artist.","resetPasswordTitle":"Reset Password","resetPassword":"Reset Password","resetErrors":"There were some problems with your input.","emailAddress":"E-Mail Address","confirmPassword":"Confirm Password","newPassword":"New Password","releaseDate":"Release Date","runningLength":"Running Length","runningTime":"Running Time","latestAlbumsFirst":"Latest Albums First","mostPopAlbumsFirst":"Most Popular Albums First","oldestAlbumsFirst":"Oldest Albums First","variousArtists":"Various Artists","noAlbumsInLibrary":"You have not added any albums to your music library yet.","noAlbumsExpl":"Albums will appear here once you add some songs or albums via 'Add to your music' option from anywhere on the site.","songsInYourLib":"Songs in your library","popularity":"Popularity","name":"Name","numberOfTracks":"Number of songs in your library","sortedBy":"Sorted By","filter":"Filter...","popularSongs":"Popular Songs","similarArtists":"Similar Artists","playAll":"Play All","noArtistsInLibrary":"You have not added any artists to your music library yet.","noArtistsExpl":"Artists will appear here once you add some songs or albums via 'Add to your music' option from anywhere on the site.","startArtistRadio":"Start Artist Radio","artistRadio":"Artist Radio","more":"More","about":"About","showMore":"Show More","showLess":"Show Less","noBioFound":"Couldn't find biography or images for this artist.","biography":"Biography","images":"Images","length":"Length","dateAdded":"Date Added","duration":"Duration","albumName":"Album Name","artistName":"Artist Name","noSongsInLibrary":"You have not added any songs to your music library yet.","noSongsExpl":"Songs will appear here once you add some via 'Add to your music' option from anywhere on the site.","noSongsMatchCriteria":"No songs have matched your search criteria.","improvedStation":"Improved station!","addToQueue":"Add to Queue","removeFromQueue":"Remove from Queue","addToPlaylist":"Add to Playlist","removeFromPlaylist":"Remove from this playlist","back":"Back","addToYourMusic":"Add to Your Music","copySongLink":"Copy Song Link","linkCopySuccess":"Copied Link to Clipboard","linkCopyFail":"Failed to Copy Link to Clipboard","options":"Options","copyAlbumLink":"Copy Album Link","copyArtistLink":"Copy Artist Link","addedTracksToLibrary":"Added songs to your library","createdBy":"Created By","tracks":"Tracks","playlistEmpty":"This playlist is currently empty","deleteForever":"Delete Forever","delete":"Delete","confirmPlaylistDelete":"Are you sure you want to permanently delete this playlist?","confirmPlaylistDelete2":"Warning: You can't undo this action.","rename":"Rename","description":"Description","updatePlaylist":"Update Playlist","addedToPlaylist":"Added Track to Playlist","playlistToPrivate":"Made playlist private.","playlistToPublic":"Made playlist public.","follow":"Follow","unfollow":"Unfollow","sharePlaylist":"Share Playlist","renamePlaylist":"Rename Playlist","deletePlaylist":"Delete Playlist","copyPlaylistLink":"Copy Playlist Link to Clipboard","makePlaylistPublic":"Make Playlist Public","makePlaylistPrivate":"Make Playlist Private","share":"Share","sendLinkViaEmail":"Send this link via email","messageOptional":"Message (optional)","copyLink":"Copy Link","genericError":"Something went wrong, please try again later.","linkShareSubject":":email shared ':name' with you.","sentEmailsSuccess":"Sent emails successfully","listenTo":"Listen to","on":"on","searchResultsFor":"Search results for","all":"All","seeAll":"See All","viewMore":"View More","analytics":"Analytics","users":"Users","settings":"Settings","ads":"Ads","translations":"Translations","appearance":"Appearance","selectLocale":"Select a Locale","createLocale":"Create a New Locale","createdNewLocale":"Created a new locale.","updatedTranslations":"Translations have been updated.","logOut":"Log Out","logOutSuccess":"You have been logged out.","translationsReset":"Translations for active locale have been reset.","confirmLangReset":"Are you sure you want to reset language lines for selected locale?","resetTranslations":"Reset Translations","reset":"Reset","cantDeleteEn":"You can't delete original 'en' locale.","searchForLangLine":"Search for language line","noPermissions":"You don't have required permissions to do that.","noDemoPermissions":"Sorry, you can't do that on demo site.","enterStylesheetName":"Enter New Stylesheets Name","availableStylesheets":"Available Stylesheets","createNew":"Create New","stylesheetExists":"Stylesheet with that name already exists.","original":"Original","customCss":"Custom CSS","errorInCustomCss":"You have an error in your custom css: ","gotIt":"Got It","yes":"Yes","no":"No","deleteStylesheet":"Delete Selected Stylesheet","confirmStylesheetDelete":"Are you sure you want to delete this stylesheet?","stylesheetDeleteSuccess":"Stylesheet has been deleted.","stylesheetResetSuccess":"Stylesheet has been reset.","stylesheetRenameSuccess":"Stylesheet has been renamed.","cantDeleteOriginalSheet":"You can't delete original stylesheet.","cantRenameOriginalSheet":"You can't rename original stylesheet.","resetStylesheetVars":"Reset Stylesheet","confirmStylesheetVarsReset":"Are you sure you want to reset this stylesheets styles to original values?","homepage":"Homepage","homepageExpl":"Which page do you want to display as your homepage.","siteName":"Site Name","metaDescription":"Meta Description","metaTitle":"Meta Title","dateLocale":"Date Locale","dateLocaleExpl":"Locale you want dates formatted in. ISO 639-1 code","enablePushState":"Enable HTML5 PushState mode","pushStateExpl":"This will remove # from your site urls.","enableRegistration":"Enable Registration","enableRegistrationExpl":"If this is set to 'No', registration page and all links\/references will be disabled and users will not be able to register on their own.","3rdPartyServiceKeys":"Third Party Service Keys","showKeys":"Show Keys","socialLoginKeysExpl":"Enter your credentials for social login services and providers that you are using below. You can find information on how to get them in the documentation.","providersExpl":"Here you can set from where various music data will be fetched. If set to 'Local', only your manually created data will be used and BeMusic will not try to fetch information from any 3rd party sites.","googleAnalyticsCode":"Google analytics tracking code","googleAnalyticsCodeExpl":"Looks like this: UA-******-2 (numbers instead of stars)","id":"ID","secret":"Secret","artistImagesProvider":"Artist Images Provider","albumImagesProvider":"Album Images Provider","generalSettings":"General Settings","default":"Default","loginPage":"Login Page","customPage":"Custom Page","customHomepagePath":"Custom Homepage Path","customHomepagePathExpl":"Path to your custom homepage file. Relative to root folder or url on internet.","transLocale":"Translations Locale","siteLogo":"Site Logo","transLocaleExpl":"Currently active translations locale on the site.","localization":"Localization","manage":"Manage","homepageGenres":"Homepage Genres","homepageGenresExpl":"Genres to display on homepage. Separate with a comma. If left empty, most popular genres will be used.","settingsUpdated":"Settings have been updated.","primaryHomeSection":"Primary Home Section","requireConfirmation":"Require Email Confirmation","emailConfirmExpl":"Will users need to confirm their email address before being able to use their account after registration.","primaryHomeSectionExpl":"Which section should be the default one if user have not selected one.","cache":"Cache","cacheDriver":"Cache Driver","saveBioToDB":"Save artist Biography to local database","artistBioProvider":"Artist Biography (About Tab) Provider","setPlaylistsToPublic":"Set user playlists to public by default","cacheDriverExpl":"Important! If you don't know what these options mean, leave it set to 'file'","table":"Table","connection":"Connection","day":"Day","days":"Days","weeks":"Weeks","week":"Week","month":"Month","never":"Never","every":"Every","artistUpdateInterval":"Artist Update Interval","artistUpdateIntervalExpl":"How often artists (and their albums and songs) should be updated from external sites.","homepageUpdateInterval":"Homepage Update Interval","homepageUpdateIntervalExpl":"How often homepages (latest albums, top50, popular albums etc) should be updated.","forceLogin":"Force Login","forceLoginExpl":"When this option is set to 'Yes', users will need to login before being able to access the site.","searchProvider":"Search Provider","dataProvider":"Data Provider","dataProviderExpl":"Set to local database if you don't want to fetch anything automatically and instead want to create and upload artists, albums, songs etc manually.","searchProviderExpl":"When not set to 'local', external sites will be used to perform search, meaning users will be able to find pretty much any artist, album or song.","youtubeApiExpl":"Required. Needed in order to fetch youtube song id.","providers":"Providers","genresProvider":"Genres Provider","enableHttps":"Enable HTTPS","newReleasesProvider":"New Releases Provider","topSongsProvider":"Top 50 Songs Provider","local":"Local","localDatabase":"Local Database","youtubeRegionCode":"Youtube Region Code","youtubeRegionCodeExpl":"For what country should youtube results be returned. US recommended. ISO 3166-1 alpha-2 Code.","player":"Player","showPlayer":"Show Small Player","showPlayerExpl":"Should small player be shown in the bottom right corner by default.","showDownloadButton":"Show Download Button","hideLyricsButton":"Hide Lyrics Button","hideVideoButton":"Hide Video Button","hideQueueByDefault":"Hide Player Queue by Default","blockedArtists":"Blocked Artists","blockedArtistsExpl":"Artists that should be blocked on the site (they will not be searchable, indexable, or appear on the site in any other way. Separate each one with newline (enter), * can be used as a wildcard.","playerProvider":"Player Provider","playerProviderExpl":"What service should be used to stream music on the site. Note that if you have added url to a song manually from admin area player will stream from that url automatically, otherwise provider set here will be used.","showFullscreenButton":"Enable\/Disable full screen toggle button on video modal.","defaultPlayerVolume":"Default player volume (1 to 100)","wikipediaLang":"Wikipedia Language Code","clearedCache":"Site cache has been cleared","clearCache":"Clear Cache","generateSitemap":"Generate Sitemap","sitemapGenerated":"Sitemap has been generated","version":"Version","rowsPerPage":"Rows per page","avatar":"Avatar","firstName":"First Name","oldPassword":"Old Password","passwordChangeSuccess":"Your password has been changed.","avatarAcceptedFormats":"Accepted formats: png, jpeg.","avatarResizeExpl":"Your avatar will be resized to 200x200 (px) if it's bigger then that.","remove":"Remove","avatarRemoveSuccess":"Your avatar has been removed.","changePassword":"Change Password","lastName":"Last Name","username":"Username","gender":"Gender","notSaying":"Not Saying","add":"Add","cantDeleteAdmin":"Admin accounts can't be deleted","male":"Male","female":"Female","createdNewUser":"New user has been created.","createNewUser":"Create a New User","updatedUser":"User has been updated.","updateUser":"Update User","usersSelected":"Users Selected","emailNotConfirmed":"Email address for this user is not yet confirmed.","songsSelected":"Songs Selected","deleted":":number items have been deleted.","youtubeId":"Youtube ID","updateTrack":"Update Track","updatedTrack":"Track has been updated.","showingSongs":"Showing songs","showingUsers":"Showing users","of":"of","to":"to","trackUrlExpl":"Direct url to song file on your server or internet","url":"Url","number":"Number","newTrack":"New Track","createTrack":"Create a New Song","createdTrack":"New song has been created","numOfAlbums":"Number of Albums","numOfTracks":"Number of Tracks","updateArtist":"Update Artist","updatedArtist":"Artist has been updated","createdArtist":"Artist has been created","imageSmall":"Small Image","imageLarge":"Large Image","artistsSelected":"Artists Selected","showingArtists":"Showing artists","newArtist":"New Artist","updateAlbum":"Update Album","updatedAlbum":"Album has been updated","createdAlbum":"Album has been created","albumsSelected":"Albums Selected","showingAlbums":"Showing albums","image":"Image","editAlbum":"Edit Album","deleteAlbum":"Delete Album","newAlbum":"New Album","genres":"Genres","uploadImage":"Upload Image","uploadFile":"Upload File","confirmAlbumDelete":"Are you sure you want to delete this album?","newAlbumNoArtist":"Can't find artist with that name. Please create it first.","newAlbumNameExists":"This artist already has an album with that name.","deleteTracks":"Delete Tracks","totalUsers":"Total Users","totalArtists":"Total Artists","totalTracks":"Total Tracks","totalAlbums":"Total Albums","mailTemplateSaved":"Template has been saved.","mailTemplates":"Mail Templates","linkTemplate":"Share email template","confirmationTemplate":"Email confirmation template","verifyEmailSubject":"Verify your email address at","passwordTemplate":"Password reminder template","mail":"Mail","mailDriver":"Mail Driver","mailDriverExpl":"What should be used to send emails?","host":"host","port":"port","mailUsername":"Username","mailPassword":"Password","fromAddress":"Global from address","fromName":"Global from name","manageTemplates":"Manage Templates","overview":"Overview","publicPlaylists":"Public Playlists","following":"Following","followers":"Followers","noPublicPlaylists":"Seems like this user does not have any public playlists yet.","editUsername":"Edit Username","changeAvatar":"Change Avatar","accountSettings":"Account Settings","adminArea":"Admin Area","profileUpdateSuccess":"You profile has been updated."},
				settings: {"homepage":"default","enableRegistration":"1","siteName":"MyNoise","enablePushState":"1","dateLocale":"en","pushStateRootUrl":"\/","primaryHomeSection":"top-albums","artist_update_interval":"7","latest_albums_update_interval":"3","homepage_update_interval":"30","force_login":"0","enable_https":"0","latest_albums_strict":"1","youtube_region_code":"US","show_youtube_player":"1","hide_lyrics_button":"0","hide_video_button":"0","hide_queue":"0","youtube_api_key":"AIzaSyB9pD8M_ejk9dJQHUqrZEAn9xonb0If1ks","default_player_volume":"30","show_fullscreen_button":"1","require_email_confirmation":"0","save_artist_bio":"1","playlists_public_by_default":"0","wikipedia_language":"en","homepageGenres":"rock, grunge, pop, nu metal, dance rock, aggrotech, dubstep, country, trance,fado, metal, soundtrack, classic rock, death metal,dance, psychedelic trance,edm, opera,alternative, hard rock, punk rock,female-vocalists,post-rock,electronica,power metal, celtic,  rap,hardcore,house,funk,jazz,reggae,focus,experimental,british,party,folk,indie,Progressive metal,industrial metal,\n            Classical,acoustic,new wave,Hip-Hop,alternative rock,world music,Progressive rock,electronic,soul,\n            ambient,latino,chillout,heavy metal,instrumental,metalcore,blues,black metal, piano, 90s, sleep, japanese, comedy, indie rock , seen live, , more","artist_provider":"Spotify","album_provider":"Spotify","radio_provider":"Spotify","genres_provider":"Lastfm","album_images_provider":"real","artist_images_provider":"real","new_releases_provider":"Spotify","top_tracks_provider":"Spotify","top_albums_provider":"Local","search_provider":"Spotify","audio_search_provider":"Youtube","artist_bio_provider":"wikipedia","logo_url":"custom_logo_light.png","metaTitle":"MyNoise - Free music, videoclips and lyrics without waits or ads!!","metaDescription":"MyNoise provides music, videoclips and lyrics for free! Albums, artists, lyrics, playlists, youtube video. Share your playlists with your friends. Information about artists and related artists all in one place absolutely free without waits.","new_releases_meta_desc":"Keep yourself updated of the new album releases every week and stream them without delays or publicity. Follow your favorite artists. Add them to your playlist and share it with your friends for free.","popular_albums_meta_desc":"See what albums are being listen more times over the week week and stream them without delays or publicity. Follow your favorite artists. Add them to your playlist and share it with your friends for free.","top50_meta_desc":"Top50 music! Need to say more? Spotify top 50 chart updated weekly for free without ads or waiting's. Keep yourself updated of Top 50 songs releases every week and stream them without delays or publicity. Follow your favorite artists. Add them to your playlist and share it with your friends for free.","popular_genres_meta_desc":"Need to find something new? want to discover a new world? Start by choosing a genre a keep on discovering new music and stream them without delays or publicity. Follow your favorite artists. Add them to your playlist and share it with your friends for free.","images_provider":"real","analytics":"UA-83984886-1","blockedArtists":"Kanye West\nKevin Gates"},
				isDemo: '0',
				message: "",
				version: "2.0.4",
			}
		</script>
		<script src="asset/perfect-scrollbar-1.2.0/dist/perfect-scrollbar.js"></script>
		<script src="js/core.js"></script>
	</body>
	</html>
