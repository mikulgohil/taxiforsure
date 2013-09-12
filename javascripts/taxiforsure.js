
window.taxiforsure = {

	authenticated: false,
	debug: false,
	indexing : 1,
	
	

	Settings: {},


	Init: function (settings) {
	
		
		for (setting in settings) {
			taxiforsure.Set(setting, settings[setting]);
		}

		//taxiforsure.form();
		taxiforsure.CitySection();
		
		taxiforsure.TeamPage();
		taxiforsure.DateTime();
		taxiforsure.Gallery();
		taxiforsure.tabClick();
		taxiforsure.SubmitEnable();
		taxiforsure.CarSection();
		taxiforsure.Step3();
		taxiforsure.PickupSection();
		taxiforsure.Modify();

		taxiforsure.airportTransfer();
		taxiforsure.popup();
		taxiforsure.SaveAddress();

		taxiforsure.currentBooking();
		taxiforsure.ourStory();
		taxiforsure.dropDown();

		taxiforsure.Loading();
		//taxiforsure.dataSubmit();
		
		

	},

	LoadModules: function () {
		var modules = [
			'Local',
			
		];

		for (moduleName in modules) {
			var module = eval('taxiforsure.' + modules[moduleName]);
			if (typeof module == 'object') {
				if (typeof module.Init == 'function') {
					module.Init();
				}
			} else {
				
			}
		}
	},

	

	


	// 	 $('section').on('removeClass',function (e) {
	//     console.log("hello");
	//     e.preventDefault();
	// });
	
	airportTransfer:function(){
		var airport = ["International Airport","Domestic airport"];
		$('.airportGoing').autocomplete({
		        //select : showRoute,
		        source: airport,
		        minLength: 0
		        }).focus(function(){            
		                $(this).autocomplete("search");
		        });

		 $('.airportComing').autocomplete({
		        //select : showRoute,
		        source: airport,
		        minLength: 0
		        }).focus(function(){            
		                $(this).autocomplete("search");
		        });


		var EnableTab = $('[data-target]');

			EnableTab.click(function(event) {
				var getClass = $(this).attr('data-target');
				PickDropAirportInput(getClass);
				$('.airWap').hide();
				$('.'+getClass).show();
				$('.toggleAirPort a').removeClass('active');
				$(this).addClass('active');
			 	event.preventDefault();
			});

			function PickDropAirportInput(data){
				if(data == "goingAirSelect"){
					$('.airportPick').show();
					$('.airportDrop').hide();
					$('.airportGoing').attr('data-validate','step1');
					$('.airportComing').attr('data-validate','');
					$('.airportPick').find('input').attr('data-validate','step1');
					$('.airportDrop').find('input').attr('data-validate','');
				}else{
					$('.airportPick').hide();
					$('.airportDrop').show();
					$('.airportGoing').attr('data-validate','');
					$('.airportComing').attr('data-validate','step1');
					$('.airportDrop').find('input').attr('data-validate','step1');
					$('.airportPick').find('input').attr('data-validate','');
				}

			}



		EnableTab.each(function(index) {
			var gt = $(this).attr('data-target');
		});        


	},
	CitySection: function () {
		var city = ["Bangalore","New Delhi"];
		$('#location').autocomplete({
		        //select : showRoute,
		        source: city,
		        minLength: 0
		        }).focus(function(){            
		        		$(this).val("");
		                $(this).autocomplete("search");
		        });

		
		$('#city').change(function (e) {
		    e.preventDefault();
		});

		    var bangalore = [
		      "A Narayanapura",
		"B Narayanapura",
		"Rajankunte","32nd Milestone","36 Guj Colony","Aali","Abbayappa Garden","Abbigere","Abhyapur","Adarsh Nagar","Adarsh Palm Retreat","Adugodi","AECS Layout","Agara","Agb Layout","AGS Layout","Ajit Nagar","Ajmeri Gate","Akkipete","Akshayanagar","Ali Asker Road","Ambedkar Nagar","Ambedkar Nagar","Ambedkar Nagar (Lutheran Church)","Ambedkarnagar Near Ramakrishnapuram","Amrutahalli","Anagalapura","Ananadapuram","Anand  Nagar","Anand Vihar","Anandarao Circle","Anantapura","Anantnagar","Andheria More","Andrahalli ","Anil Kumble Circle","Anjana Nagar","Anjanappa Garden","Anjanappa Garden Layout","Anjanapura","Annapurneshwari Nagar","Anubhav Nagar,Vijaynagar","Arawali Retreat","Arekere layout","Arkavathy Layout","Arkavathy Layout 1st Block","Arkavathy Layout 2nd Block","Arkavathy Layout 3rd Block","Arkavathy Layout 7th Block","Armane Nagar","Art of Living ashram, AOL","Ashok Nagar","Ashok Vihar","Ashoka Pillar, Jayanagar","Ashwath Nagar","Aspen Greens","Attiguppe","Austin Town","Austin Town BDA Layout","Avalahalli","Avenue Road","Aya Nagar","Azad Colony","Azad Nagar","B Channasandra","Baba Kharak Singh Marg","Babusapalya","Badarpur","Badrappa Layout","Badshahpur","Bagalakunte","Bagmane Tech Park","Bagmane Tech Park, C V Raman Nagar","Bahadurgarh","Bahubali Nagar","Baiyappanahalli Railway Station","Baiyyappanahalli","Bajhera","Balaji Nagar","Balepet","Baligeri","Ballabgarh","Bamnnoli","Banasawadi Railway Station","Banashankari","Banashankari 1St Stage","Banashankari 2nd Stage","Banashankari 3rd Stage","Banaswadi","Bandhwadi","Bangalore East Railway Station","Bangalore University Campus","Bangarappanagar","Bani Dham","Bank Avenue Colony","Bank Colony","Bannerghatta Road","Bannerghatta Road, IIMB","Bannerghatta Road, Meenakshi Mall","Bannerghatta Road, Shoppers Stop","Bapuji Nagar","Basavanagar","Basavanagudi","Basaveshwaranagar","Basaveswara Nagar","Battarahalli","Begur","Behrampur","BEL Colony","Bellandur","BEML Layout","BEML Layout, RR Nagar","Bendre Nagar","Bennigana Halli","Benson Town","Ber Sarai","Betadasana Pura","Bethel Ag Church, Hebbal","Bhagirathi Place","Bhajanpura","Bharat Nagar,Magadi Road","Bharathi Nagar","Bhel Layout","Bhikam Colony","Bhimsen Colony","Bhogal","Bhondsi","Bhoopasandra","Bhudutt Colony","Bhuvaneshwari Nagar","Bidadi, Mysore Road","Bidharahalli","Bijwasan","Bikaji Kama Place","Bilekahalli","Bileshivale","Birch Court","Bismillah Nagar","Bommanahalli","Bommasandra","Bommasandra Industrial Area","Brigade Road","Brookefield","Brunton Road","Btm 1St Stage","BTM 2nd Stage","Btm 4Th Stage","BTM Layout","Btm Water Tank","Bull Temple Road","Bungi Colony","Bungi Colony Old Airport","Byappanahalli","Byataranyapura","Byrathi","Cambridge Layout","Cambridge Road","Canara Bank Colony","Cantonment","Cantonment Railway Station","Cedar Crest","Chagalatti","Chagaletty","Chakarpur","Challaghatta","Chamarajpet","Chanakyapuri","Chandapura","Chander Nagar","Chandini Chowk","Chandra Layout","Chandu","Channasandra","Channasandra,Uttarahalli","Chansandra,Whitefield","Chattarpur","Chattarpur Farms","Cheemasandra","Chelekere","Chhalera","Chickpet","Chikka Bommasandra","Chikka Gubbi","Chikka Tirupati","Chikkabidarakallu","Chikkabyrathi","Chikkajala","Chikkalasandra","Chinnapanahalli","Chinnaswamy Stadium","Chirag Delhi","Chokkanahalli","Cholanayakanahalli","Chord Road","Chowdeswari Layout, Banasawadi","Christ College","Church Street","City Market","City Railway Station","Civil Lines","CKB Layout","Classic Paradise Layout ,Begur Road","CMH Road","Coffee Board Layout","Colony Hazrat Khwaja","Commercial Street","Connaught Place","Cooke Town","Corporation Circle","Cosmos Mall,Whitefield","Cottonpete","Cox Town","Cubbon Park","Cubbonpet","Cunningham road","CV Raman Nagar","Dabua Colony","Dairy Circle","Damdama","Daryaganj","Daryaganj Gate","Dasarahalli","Dasarahalli, near Hebbal","Dattatreya Nagar","Deepanjali Nagar","Deerwood Chase","Defence Colony","Defence Colony","Defence Colony, Hesaraghatta Road","Delhi (Anywhere)","Delhi Airport Terminal 1D","Delhi Airport Terminal 3","Delhi Cantt","Delhi Gate","Delhi Public School,Dommasandra","Delhi Public School,Konanakunte","Delmia Circle, JP Nagar","Dera","Devanahalli","Devarabeesanahalli","Devarachikkana Halli","Devasandra, Kr Puram","Devradju Adur","Dhulkot","Diamond District","Dickenson Road","DLF Ph. I","DLF Ph. II","DLF Ph. III","DLF Ph. IV","DLF Ph. V","Dodda Banaswadi","Dodda Bidarkallu","Dodda Bomasandra Vidyaranyapura Main Road","Dodda Gubbi","Doddabomasandra","Doddakallasandra","Doddakannelli","Doddanekundi","Doddathoguru","Dollar Colony","Dollar Colony-New Bel Road","Dollars Colony, Jp Nagar","Domlur","Domlur 1st Stage","Domlur 2nd Stage","Domlur Layout","Dommasandra","Dooravaninagar","Double Road","Dr Rajkumar Road","Dupanahalli, Indira Nagar","Dvg Road","East End Jayanagar","East of Kailash","East Point College Of Engineering","Easwara Layout","Egipura","Ejipura","Electronic City Phase II","Electronics City","Embassy Golf Links, Domlur","Embassy Golf Links, EGL","Espace","Esteem Mall, Hebbal","Fadilpur","Faridabad (Anywhere)","Feroz Gandhi Colony","Flower Garden","Forum Mall, Koramangala","Forum Value Mall, Whitefield","Frazer Town","Friends Colony","Frontier Colony","Ganapthy Nagar","Gandhi Bazaar Circle","Gandhi Bazaar, Basavanagudi","Gandhi Nagar","Gandhinagar","Ganga Nagar","Ganganahalli","Garuda Mall, Residency Road","Garudachar Palya","Garvebhavi Palya","Gautampuri","Gavipuram","Gayathrinagar","Gayathrinagar-Malleshwaram Road","Gayatrinagar","Geddalahalli","Geeta Colony","Geleyara Balaga Layout","Ghamroj","Gharwali Colony","Ghatta","Ghaziabad (Anywhere)","Ghitorni","Ghouse Garden","Gidada Konnenahalli","Giri Puram","Girinagar","Gkvk University","Global Village","Global Village Ground","GM Palya","GNR Gardens","Gokula","Golden Palm Resort,Tumkur Road","Golf Links","Gollahalli","Gollarhatti,Magadi Road","Goragunta Palya","Gottigere","Govindapura,Nagawara","Govindpuri","Gowripalaya","Gowriswamy Nagar","Gowtham Nagar","Greater Kailash I","Greater Noida (Anywhere) ","Green Park","Gubbalala","Gunjur","Gurgaon","Gurgaon (Anywhere)","Guttahalli","Hal","HAL 2nd Stage","Hal 3Rd Stage","Hal Airport","Hampi Nagar","Hanumantha Nagar","Hanumanthanagar","Hanumanthappa Colony","Haralur Road","Hard Rock Cafe","Hard Rock Cafe-Mg Road","Hari Nagar","Harlur","Hauz Khas","Hauzkhas Enclave","Hbr Layout","Hebbagodi","Hebbal","Hedge Nagar","Hedge Nagar-Rt Nagar","Heelalige","Hegde Nagar","Hegganahalli","Hemanth Nagar","Hennur","Hennur Cross","Hennur Gardens","Hennur Main Road","Hesaraghatta","High Grounds","Himalaya Talkies","Himalaya Talkies-Loop Road","Hirandahalli","HMT Colony","HMT Layout","HMT Watch Factory Colony","Hombegowda Nagar","Hongasandra","Honnenahalli","Hoodi Circle","Horamavu","Hosa Road","Hosahalli","Hosakerehalli","Hosur Road","Hotel Fortune","Hotel Lalit Ashok","Hotel Leela Palace","Hotel Royal Orchid, Domlur","HRBR Layout","HSEB Colony","HSR Layout","Hudi Circle","Hudson Circle","Hulimavu","Huskur","IAS Officers Colony","Iblur","Immadahalli","Inderpuri","Indian Express","Indian Express Circle","Indira Nagar","Indira Nagar 1st Stage","Indira Nagar 2nd Stage","Indra Nagar","Infantry Road","Innovative Film City","ISKCON Temple","Islampur","ISRO Layout","Itc Factory","ITC Galleria Hotel","Itc Gardenia","ITI Colony","Itmadu","ITPL","Ittamadu","Jagadish Nagar","Jagdish Colony","Jai Bharat Nagar","Jai Bheem Nagar","Jaibheem Nagar Near Sambagi Theater","Jain Colony","Jakkasandra","Jakkur","Jakrayana Kare","Jal Vayu Vihar","Jalahalli","Jalahalli Cross","Jalahalli East","Jalahalli West","Janakpuri","Jasola","Jaunpur","Jawahar Colony","Jayadeva Flyover Stop","Jayamahal Extension","Jayanagar","Jayanagar 1St Block","Jayanagar 1St East Block","Jayanagar 2Nd Block","Jayanagar 3Rd Block","Jayanagar 4T Block","Jayanagar 4th Block","Jayanagar 5th Block","Jayanagar 6Th Block","Jayanagar 7th Block","Jayanagar 8th Block","Jayanagar 9th Block","Jayanthinagar","Jc Nagar","Jc Nagar, Jayamahal","Jc Road","Jeevanbhima Nagar","Jharsa","Jigani","Jiwan Colony","Jnana Bharathi","Jnana Bharati","Jnana Ganga Nagar","Jogupalya","Jor Bagh","JP Nagar","JP Nagar 1st Phase","JP Nagar 2nd Phase","JP Nagar 3rd Phase","Jp Nagar 4Th Phase","Jp Nagar 5Th Phase","JP Nagar 6th Phase","Jp Nagar 7Th Phase","Jp Nagar 8Th Phase","Jp Nagar 9Th Phase","Judicial Layout","Jungpura","K R Market","Kachamaranahalli","Kadaghara","Kadirenahalli","Kadubeesanahalli ","Kadugodi","Kaggadasapura","Kahaksona","Kaikondrahalli ,Sarjapur Road","Kailash Colony","Kalasaipalayam","Kalena Agrahara","Kalkaji","Kalkere","Kalyan Nagar","Kamakshipalya","Kamakya","Kamakya,Banashankari","Kamala Nagar","Kammagondanahalli","Kammanahalli","Kammasandra","Kanaka Nagar","Kanakapura Road","Kanakpura road, Sarakki Signal","Kannur","Kanteerava Indoor Stadium, Nagarathpet","Kapra Colony","Karawal Nagar","Karmelaram Railway Station","Karol Bagh","Kartik Nagar","Kasavanahalli","Kashmiri Gate","Kasturba Road","Kasturi Nagar","Kasturibai Nagar","Kathriguppe","Kattigenahalli","Katwaria Sarai","Kaushambi","Kaval Byrasandra","Kempapura Hebbal","Kempegouda Bus Stand","Kempegowda Bus Stand, Majestic","Kengeri","Kengeri Railway Station","Kg Road","Khanpur","KHB Colony","Khidki","Khilloo Saini Colony","KHR Colony","Kidwai Nagar East","Kidwai Nagar West","Kirti nagar","Kishangarh","Kodagihalli","Kodathi","Kodichikkanahalli","Kodigehalli, Devinagar","Kodihalli","Konankunte Cross","Konappana Agrahara","Konena Agrahara","Koramangala","Koramangala 1St Block","Koramangala 2nd Block","Koramangala 3Rd Block","Koramangala 4Th Block","Koramangala 5Th Block","Koramangala 6Th Block","Koramangala 7Th Block","Koramangala 8Th Block","Kothanur","Kothnur Dinne","Kotla Mubarak","Kr Market","Kr Puram","KR Puram Railway Station","Kr Road","Krishna Nagar","Krishnarajapuram, KR Puram","Kudlu","Kudlu Gate","Kumara Park East","Kumara Park West","Kumaraswamy Layout","Kumbal Godu, Kengeri","Kundan Colony","Kundanahalli","Kundanahalli gate","Kundli","Kurubrahalli","Kyalasanahalli","Lado Sarai","Lahori Gate","Lajpat Nagar","Lajpat Rai Market","Lakkasandra","Lakshmanpuri","Lalbagh Botanical Garden","Lalbagh Road","Lalbagh West Gate","Langford Road","Lavelle Road","Laxmibhai Nagar","LB Shastry Nagar","LBS Nagar","Le Meridian Hotel","Leprocy Colony","LIC Colony","Lido Mall,Old Madras Road","Lingarajapuram","Lodhi Colony","Loni","Lottegollahalli","Lower Palace Orchard","M S Ramaiah Hospital","Madanayakahalli","Madhava Nagar  ","Madivala","Magadi Road","Magrath Road","Mahadevapura","Mahalakshmi Layout","Mahalakshmipuram","Mahipalpur","Mailasandra","Majestic","Majestic Bus Stand","Majestic Railway Station","Majnu Ka Tila (Tibetan colony)","Malappa Layout","Malathahalli","Malibu Town","Mallasandra","Malleshpalya","Malleshwaram","Malleshwaram Railway Station","Mallya Road","Malviya Nagar","Mamura","Mandi","Manesar","Mangamanpalya, Muneshwara Nagar","Mangar","Manglapuri","Manipal Hospital, Old Airport Road","Manjunatha Nagar","Mantri Mall, Malleshwaram","Manyata Tech Park","Marasandura","Marathahalli","Marenahalli","Marenahalli, Jp Nagar","Marenahalli-Yelahanka","Maruthi Nagar","Maruthi Seva Nagar","Maruti Kunj","Masjid Area","Mathikere","Mavalli","Mayapuri","Mayo Hall, Mg Road","Mayur Vihar I","Mayur Vihar II","MCEHS Layout","Medahalli, Krishnarajapura","Mehrauli","Mekhri Circle","MG Road","MICO Layout","Mico Layout-Begur Road","Minarva Circle","Mission Road","Mohan Garden","Mohan Kumar Nagar","Mohatabad","Mori Gate","Moti Bagh","Motinagar","Mottappanapalaya","MS Palaya","Ms Palaya- Vidyaranyapura","Ms Palya, Vidyaranyapura","MSR Nagar","Mudalapalya, Vijaynagar","Mullur","Munekollal","Munirka","Muradnagar","Murugeshpalya","Museum Road","Muthyalamma Nagar","Muthyalamma Nagar-Langford Road","Muthyalamma Nagar-Mathikere","MVN - Pali Crusher Zone Road","Mysore Road","Mysore Road , Kengeri","Naganathapura","Nagarathpet","Nagarbhavi","Nagasandra,Tumkur Road","Nagashettyhalli","Nagawara","Nahar Singh Colony","Najafgarh","NAL Layout","Nandi Hill","Nandidurga Road","Nandini Layout","Nanja Reddy Colony","Nanjappa Garden","Nanjunda Reddy Layout","Naraina Vihar","Narayana Hrudayalaya","Narayana Swamy Garden","National Capital Territory of Delhi","National Games Village, NGV","National Games Village, Ngv-Ejpura","Natthu Colony","Nau Sena Bagh","Navarang","Naya Bazaar","Naya Gaon","Nayandahalli","Nayandahalli Railway Station","Nayandhahalli","Neelasandra","Nehru Colony","Nehru Nagar","Nehru Nagar,Yelahanka","Nettakallappa Circle","New BEL Road","New Friends Colony","New Industrial Township 2","New Janta colony","New Thippasandra","NGEF Layout","Niligirpapanna Nagar","NIMHANS ","Nirvana","Nithari","Nizamuddin","Nizamuddin Colony East","Nizamuddin Colony West","Noida","Noida (Anywhere)","Noida Special Economic Zone","NR Colony","Okalipura","Okhla","Okhla Phase I","Okhla Phase II","Old Airport Road","Old Delhi","Old DLF","Old Madras Road","Old Tharagupet","Ombr Layout, Banasawadi","Orion Mall,Subramanyanagar","Padmanabha Nagar","Paharganj","Pai Layout","Palace Grounds","Palace Road","Palam","Palam Vihar","Pali","Pali Crusher Zone Crossing","Panatur","Panchsheel Park","Pandav Nagar","Panduranga Nagar","Parappana Agrahara","Parvatiya Colony","Paschim Vihar","Patel Nagar","Patparganj","Peenya 1St Stage","Peenya 2nd Stage","Peenya Industrial Area","Periyar Nagar","Pillagana Halli,Bannerghatta Road","Pitampura","Platinum City, Hmt","Pochanpur","Poojappa Layout","Post &amp; Telegraph Layout","Powergrid Residency","Prakruthi Township","Prashanth nagar","Preet Vihar","Prem Nagar","Presidential Estate","Press Colony","Press Enclave","Punjabi Bagh","Pusa","Pushp Vihar","Pushpanjali","Puttenahalli","Queens Road","Qutab Institutional Area","Rabindra Nagar","Race course road","Raghubir Nagar","Raghuvanahalli,Kanakapura Road","Ragi Gudda","Rainbow Residency Layout","Raj Bhavan Road","Rajaji Nagar","Rajajinagar 1St Block","Rajajinagar 2nd Block","Rajajinagar 3Rd Block","Rajajinagar 4Th Block","Rajajinagar 5th Block","Rajajinagar 6Th Block","Rajanna Layout","Rajanukunte","Rajarajeshwari Nagar","Rajendranagar","Rajiv Colony","Rajiv Nagar","Ramachandra Pura","Ramagondanahalli","Ramaiah College","Ramamurthy Nagar","Ramanashree California Resort, Yelahanka","Ramesh Nagar","Rameshwar Park","Ramkrishna Puram","Rampura","Ranasingpet","Rangpuri","Ranjeet nagar","RBI Colony","Rbi Layout","Residency Road","Residential Area","Rest House Road","Richards Town","Richmond Circle","Richmond Road","Richmond Town","Risaldarstreet","RMV","RMV 2nd Stage","Rohini","Roopena Agrahara","Rs Palya","RT Nagar","Sadahalli","Sadanandanagar","Sadar bazar","Sadarpur","Sadhashivnagar","Safdarjung","Safdurjung Enclave","Sahakaranagara","Saidulajab","Sainik Farm","Sajjan Rao Circle","Saket","Salarpuria Gr Tech Park, Whitefield","Sampangi Rama Nagar","Sampige Road","Sanjay Colony","Sanjay Gandhi Memorial Nagar","Sanjay Gandhi Nagara","Sanjay Nagar","Sankey Road","Saraswathipuram","Sarita Vihar","Sarjapur Road","Sarojini Nagar","Sarup Nagar","Sarvagna Nagar","Satellite Bus Stand, Mysore road","Satyam","SBM Colony","Sec 30","Sector 10","Sector 11","Sector 11C","Sector 12","Sector 13","Sector 14","Sector 15","Sector 15A","Sector 16","Sector 16A","Sector 17","Sector 18","Sector 18A","Sector 19","Sector 21a","Sector 21B","Sector 21C Part III","Sector 21D","Sector 22","Sector 23","Sector 24","Sector 25","Sector 27/A","Sector 28","Sector 29","Sector 3","Sector 31","Sector 4","Sector 45","Sector 46","Sector 49","Sector 5","Sector 55","Sector 56","Sector 56A","Sector 6","Sector 60","Sector 7","Sector 78","Sector 8","Sector 80","Sector 9","Sector A","Sector A, Hsr Layout","Sector B","Sector B, Hsr Layout","Sector21C","Seegehalli","Seelampur","Seshadripuram","Sg Palya","Shabari Nagar","Shadipur","Shahbad","Shahdara","Shantala Nagar","Shanti Nagar","Shastri Nagar","Sheikh Sarai","Shiv Colony","Shivajinagar","Shivananda Circle","Shree Vinayaka Layout","Shree Vinayaka Layout, Hebbal","Shyam Colony","Siddapura","Siddartha Nagar","Silk Board","Sindhi Colony","Singanayakanahalli","Singanayakanahalli, Doddaballapur Road","Singasandra","Sirhaul","Siri","Somasundrapalya","Someshwaranagar","Sonia Vihar","Sony World jn, Koramangala","South City","South City II","South End","South End Circle","South Ext","South Moti Bagh","Sowrashtrapet","Sp Road","SR Nagar","Sri Krishna Nagar","Sri Ramapura Village","Srinagar","Srinivas nagar","Srinivaspura,Banashankari","Sriramapura","Srivaspuri","St Bed","St Marks Road","St Thomastown","St. Marks Road","St. Thomas Town","Subramanya Nagar","Subramanyapura","Suddaguntapalya","Suddaguntapalya, C V Raman Nagar","Sudhama Nagar","Sulakunte","Sultanpalya","Sultanpet","Sultanpur","Sundar Nagar","Sunder Nagar","Sunkadakatte","Sunkadakatte, Magadi Road","Sushant Lok","Swatantra Nagar","Sweepers Colony","T Dasarahalli","T Dasarahalli, near Peenya","Tagore Garden","Taj Vivanta, MG Road","Taj Vivanta, Whitefield","Taj Vivanta, Yeshwantpur","Talaghattapura","Tata Institute or IISc","Tavarkere","Tc Palya","Tedki","Telecom Layout","Thanisandra","The Park Hotel Mg Road","Thubrarahalli","Thyagaraja Nagar","Tikri","Tilak Nagar","Tilak Nagar","Timber Market","Tin Factory","Tippu Nagar","Tirka Colony","Todapur","Town Hall Circle","Trinity Circle","Tronica City","Tughlakabad","Tuglakabad","Tunganagara,Magadi Road","Turkman Gate","Tyagaraja nagar","UB City","Udyog Vihar","Udyog Vihar Phase IV","Udyog Vihar Phase V","Ullal ","Ulsoor","Ulsoor Road","Upparpete","Urvashi Theatre, Lalbagh Road","Uttam Nagar","Uttarahalli","V.M Bunde","Vaddrapalya","Vaishali","Vakil Marina Layout","Vakil Satellite Township","Vannarpet","Varthur","Vasant Kunj","Vasant Vihar","Vasanthpura","Vasantnagar","Vasundhara","Venkatpura","Vibhutipura ","Victoria Layout","Victoria Road","Vidhana Soudha","Vidya Nagar, Peenya Industrial Area","Vidyapeeta Circle","Vidyaranyapura","Vignana nagar","Vijaya Bank Layout","Vijaya Nagar","Vijayanagar, Magadi Road","Vikas Nagar","Vikaspuri","Vimanapura","Vinayaka Layout,Tumkur Road","Vinayaka Layout,Whitefield","Vinayaka Nagar","Vinobha Nagar","Virannanapalya,Hebbal","Vishwapriya Nagar","Vishwas Nagar","Vittal Mallya Road","Vivek Nagar","Vivekananda Colony","Vrindavan Tech Village","VST Colony","VV Giri Colony","VV Nagar","VV Puram","Vyalikaval","Vydehi Hospital, Whitefield","Wazirabad","West Of Chord Road","Whitefield","Whitefield Railway Station","Wilson Garden","Wind Tunnel Road","Windsor Manor","Yamalur","Yamuna Vihar","Yarappanahalli","Yediyur","Yediyur Lake","Yelachenahalli","Yelahanka","Yelahanka New Town","Yelahanka Railway Station","Yelenahalli","Yemalur","Yeshwantpur","Yeshwantpur Railway Station","Yeswanthpur Railway Station",
		    ];

		     $( "#pickArea,#outstationFrom" ).autocomplete({
		       // select : showRoute,
		        source: bangalore,
		        minLength: 0
		        }).focus(function(){            
		                $(this).autocomplete("search");
		        });
		    $('#pickArea,#dropArea,#location').next('.icon').click(function() {
			    $(this).prev('input').trigger("focus");
			});
		    $( "#dropArea" ).autocomplete({
		        select : showRoute,
		        source: bangalore,
		        minLength: 0
		        }).focus(function(){            
		                $(this).autocomplete("search");
		        });


		        $( ".outstationInput" ).autocomplete({
		        select : addMinus,
		        source: bangalore,
		        minLength: 0
		        }).focus(function(){            
		                $(this).autocomplete("search");
		        });







		        function showRoute(){}

		        function addMinus(){
						$(this).parents('.controls').find('.inputAdd').addClass('show');	
				    }
	},
	

	DateTime:function(){
		var timeGet = $( '#timepicker' ).length;
		var dateGet = $( '#datepicker' ).length;
		if(timeGet){
			$( '#timepicker' ).pickatime({
			    interval: 15,
			    clear: 'Cancel'
			});	
		}
		
		if(dateGet){
			$( '#datepicker,#datepicker2' ).pickadate({
				format:'dd mmm',
				today: false,
			    min: true,
	    		max: +7,
			    clear: 'Cancel'
			});	
		}
		
	},

	CarSection: function(){


	 radioCheck = false;


			$('.carList tbody tr').click(function(e) {
		radioCheck = true;
    		$(this).find('input:radio').prop('checked', true);

			$('.carList tbody tr').each(function(event) {
				$('.carList tbody tr').removeClass('active');
			});
				$(this).addClass('active');
				console.log($(this).find('input'));
			     e.preventDefault();
			 });

	},

	

	Gallery: function(){
			 if($("#gallery").length){


			// Variables aren't use properly due to Webkit
			var totalImages = $("#gallery > li").length, 
			    imageWidth = $("#gallery > li:first").outerWidth(true),
			    totalWidth = imageWidth * totalImages,
			    visibleImages = Math.round($("#gallery-wrap").width() / imageWidth),
			    visibleWidth = visibleImages * imageWidth,
			    stopPosition = (visibleWidth - totalWidth);
			    
			$("#gallery").width(totalWidth);

			$("#gallery-prev").click(function(){
			    if($("#gallery").position().left < 0 && !$("#gallery").is(":animated")){
			        $("#gallery").animate({left : "+=" + imageWidth + "px"});
			        console.log("hello");
			    }
			    return false;
			});

			$("#gallery-next").click(function(){
			    if($("#gallery").position().left > stopPosition && !$("#gallery").is(":animated")){
			        $("#gallery").animate({left : "-=" + imageWidth + "px"});
			        console.log("olleh");
			    }
			    return false;
			});
			}
	},

	sideBar:function(){

			// var $sidebar   = $(".mapHome"), 
		 //    $window    = $(window),
		 //    offset     = $sidebar.offset(),
		 //    topPadding = 0;


		// 		 $sidebar.animate({
		//              marginTop: '300px'
		//      });



		// $window.scroll(function() {

		//     if ($window.scrollTop() > offset.top) {

		//     	$sidebar.addClass('fixed');
		//         $sidebar.stop().animate({
		//             marginTop: $window.scrollTop() - offset.top + topPadding
		//         });
		//     } else {
		//     	$sidebar.removeClass('fixed');
		//         $sidebar.stop().animate({
		//             marginTop: 0
		//         });
		//     }
		//  });
	},

	PickupSection:function(){
		$('#address').change(function (e) {
		    $('.emptyAddress').toggle();
		    $('.fillAddress').toggle();
		    e.preventDefault();
		});

		$('.showMap').click(function(event) {
		    $('.googleMap').toggleClass('active');
		    //calcRoute("jayanagar, bangalore","jp nagar, bangalore");
		    $('.showMap').toggleClass('active');
		            //calcRoute();
		      //      return false;
		    event.preventDefault();
		});

	},

	BookElse:function(){
		$('.beWapper .small-ss').on('click', function () {
			$('.bbCheck').click();	
		});


		$('.bbCheck').change(function (e) {
				$('.beContain').toggle();
			e.preventDefault();
		});				
	},

	popup:function(){
		$('.openPopup').bind('click', function(event) {
			var getPopup = $(this).attr('data-popup');
			$('.popupWapper').attr('class','popupWapper');
			$('.popupWapper').addClass(getPopup+'Active');
			console.log($('.'+getPopup).width());
			event.preventDefault();
			 

			$.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
  }

  //$('.'+getPopup).center();
		});

		$('.overClose,.popupWapper').bind('click', function(event) {
			$('.popupWapper').attr('class','popupWapper');
			event.preventDefault();
		});


		$('.popup').click(function(e) {
		    e.stopPropagation();
		});

		
	},


	validateForm:function(data){
		
		if(data == "step1" || data == "step3"){
			var pickArea = $('*[data-validate="'+data+'"]');
			var errors = 0;
			pickArea.each(function(index) {
				if($(this).val() == ""){
					$(this).addClass('error');
					errors++;
				}else{
					$(this).removeClass('error');
				}

				$(this).bind('blur change focus',function(event) {
					if($(this).val()){
						$(this).removeClass('error');
					}
				});
				


			});

			if(errors > 0){
     		   
        		return false;
    		}else{
    			return true;
    		}
		}

		if(data == "step2"){
			
			if(!radioCheck){
				return false;
			}else{
				return true;
			}
		}
	},

	Modify:function(){
		$('.dbdetailModify span').bind('click', function(event) {
			showStep = $(this).attr('data-step');
			$('.stepContentWap').hide();
			console.log(showStep);

			if(showStep == 'step1'){
				$('.FirstStepContain').show();
				$('.stepFirst').attr('class','stepFirst active');
				$('.stepSecond').attr('class','stepSecond');
				$('.stepThird').attr('class','stepThird');
				$('.dIntro').show();
			}else{

				$('.SecondStepContain').show();
				$('.dIntro').hide();

				//$('.stepFirst').attr('class','done');
				$('.stepSecond').attr('class','stepSecond active');
				$('.stepThird').attr('class','stepThird');
			}
			//$("."+showStep).show();	

		});
	},
	UpdateView:function(ele,section){
		if(section == "ptp"){
			
			if(ele == "step1"){
				$('.dIntro').hide()
				$('.rightSlider').addClass('active');
				$('.rightSlider').addClass('Ar');
				$('.stepSecond').addClass('active');
				$('.stepFirst').addClass('done');
			}
			if(ele == "step2"){
				$('.stepFirst,.stepSecond').addClass('done');
				$('.rightSlider').addClass('Cr');
				$('.stepThird').addClass('active');
			}
			if(ele == "step3"){

			}
		}else if(section == "at"){
			
			if(ele == "step1"){
				$('.dIntro').hide()
				$('.rightSlider').addClass('active');
				$('.rightSlider').addClass('Ar');
				$('.stepSecond').addClass('active');
				$('.stepFirst').addClass('done');
			}
			if(ele == "step2"){
				$('.stepFirst,.stepSecond').addClass('done');
				$('.rightSlider').addClass('Cr');
				$('.stepThird').addClass('active');
			}
			if(ele == "step3"){

			}

		}else if(section == "hfd"){
			
			if(ele == "step1"){
				$('.dIntro').hide()
				$('.rightSlider').addClass('active');
				$('.rightSlider').addClass('Ar');
				$('.stepSecond').addClass('active');
				$('.stepFirst').addClass('done');
			}
			if(ele == "step2"){
				$('.stepFirst,.stepSecond').addClass('done');
				$('.rightSlider').addClass('Cr');
				$('.stepThird').addClass('active');
			}
			if(ele == "step3"){

			}

		}else{

		}
		
	},	
	SubmitEnable:function(){

		$('.stepNextButton button,.stepNextButton a').bind('click', function(event) {
			var getFormValidation = $(this).attr('data-form');
			var getSection = $(this).attr('data-section');
			if(taxiforsure.validateForm(getFormValidation)){
				var showStep = $(this).attr('data-step');
				$(this).parents('.stepContentWap').hide();
				$("."+showStep).show();	

				taxiforsure.UpdateView(getFormValidation,getSection);

				
			};


		event.preventDefault();
		});
	},

	Step3:function(){

		$('.saveCheck').bind('click',function(event) {
			$('.saveAddressBox').toggle();
			
			
			
		});

		function step3Validation(ele){

			if(ele == true){
				$('.areaAddress').attr('data-validate',"step3");
				$('.textAreaAddress').attr('data-validate',"step3");
				//$('.landMark').attr('data-validate',"step3");
				$('.homeOffice').attr('data-validate',"step3");
			}else{
				$('.areaAddress').attr('data-validate',"");
				$('.textAreaAddress').attr('data-validate',"");
				//$('.landMark').attr('data-validate',"step3");
				$('.homeOffice').attr('data-validate',"");
			}
		}

		$('.bbCheck').bind('click',function(event) {
			$('.bookElse').toggle();
			
		});

		var SavedAdd = ["Home","Office"];

		$('#savedAdd').autocomplete({
		        select : showAdd,
		        source: SavedAdd,
		        minLength: 0
		        }).focus(function(){            
		                $(this).autocomplete("search");
		        });

		        function showAdd(){
		        	$('.emptyAddress').hide();
		        	$('.fillAddress').show();
		        };
		
	},

	tabClick:function(){

		var nowOrLater = $('.toggleLater li');
		nowOrLater.click(function(event) {
			if($(this).attr('data-modal') == 'later'){
				$('.immediateBox').hide();
				$('.laterBox').show();
				nowOrLater.removeClass('active');
				$(this).addClass('active');
				$('#datepicker').attr('data-validate',"step1");
				$('#timepicker').attr('data-validate',"step1");
				$('.bdetailWap').addClass('Ti');

			}else{
				$('.immediateBox').show();
				nowOrLater.removeClass('active');
				$(this).addClass('active');
				$('.laterBox').hide();
				$('#datepicker').attr('data-validate',"");
				$('#timepicker').attr('data-validate',"");
				$('.bdetailWap').removeClass('Ti');
			}
		});
	},



	SaveAddress:function(){
		$('.aRBox:even').addClass('aRBoxEven');

		var inp = $('.aRBox').find('input');
		inp.bind('change', function(event) {
			$('.aRBox').removeClass('active');
			$(this).parents('.aRBox').addClass('active');
		});
	},

	currentBooking:function(){
		
		$('.booking-tab li').click(function(event) {
			$('.booking-tab li').removeClass('active');
			$(this).addClass('active');
			var gt = $(this).attr('data-box');
			$('.currPastBooking').hide();
			$('.'+gt+'Tab').show();
			 event.preventDefault();
		});


	},

	TeamPage:function(){
		
		$('.teamContain:first-child').addClass('active').addClass('current');
		
		$('.teamHeader li').on('click', function () {
			var cl = $(this).attr('data-click');

			$('.teamHeader li').removeClass('active');
			$(this).addClass('active');

			$('.teamContain').removeClass('active');
			$('.'+cl).addClass('active');
			//$(this).prev().siblings().addClass('prev');
			console.log($('.current').index());
			moveCar(cl);
			$('.teamHeader li').removeClass('current');
		});

		function moveCar(cl){
			
			$('.teamHeader')
			.animate({
				    'background-position-x': "-=50",
				  }, 1000, 'linear');


			if(cl == "f2"){
				$('.carWap').animate({
				    left: "200",
				  }, 1000);
			}

			if(cl == "f1"){
				$('.carWap').animate({
				    left: "0",
				  }, 1000);
			}

			if(cl == "f3"){
				$('.carWap').animate({
				    left: "390",
				  }, 1000);
			}

			if(cl == "f4"){
				$('.carWap').animate({
				    left: "580",
				  }, 1000);
			}
		}
	},

	ourStory:function(){
			//$('div.section').first();

			$('.scrollIt').on('click', function(e) {
			    e.preventDefault();

			      var t = $(this).text(),
			      that = $(this);


			    if (t === 'next' && $('.current').next('li').length > 0) {
			        var $next = $('.current').next('li');
			        var top = $next.offset().top  - 120;
			      

			        $('.current').removeClass('current');
			      
			        $('.our-story ul').animate({
			          scrollTop: top     
			        }, function () {
			               $next.addClass('current');
			        });
			  } else if (t === 'prev' && $('.current').prev('li').length > 0) {
			        var $prev = $('.current').prev('li');
			        var top = $prev.offset().top - 120;
			        
			        $('.current').removeClass('current');
			      
			        $('.our-story ul').animate({
			          scrollTop: top     
			        }, function () {
			               $prev.addClass('current');
			        });
			  } 
			});



	},

	dropDown:function(){

var doClick = function() {
    'use strict';
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    return event;
}



    


		$('.dropDown').each(function(index) {
			var i = $(this).find('i');
			var select = $(this).find('select');
			i.click(function(event) {
				console.log("activting");
				select.focus().get(0).dispatchEvent(doClick());
			});

			
		});
	},

	Loading:function(){
		$('body').append('<div class="loadingWap"><span></span></div>');
			$('.loading').bind('click', function(event) {
			//	$('.loadingWap').show();
			});	
	}

}
