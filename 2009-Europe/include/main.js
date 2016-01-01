var ImageShortThumbJ = 90;
var ImageLongThumbJ = 120;
var ImageShortFullJ = 450;
var ImageLongFullJ = 600;
var ImageLoadDelay = 100;
var ImageLoadDelayInterval = 100;

function PronounceIrishJ(TextJ)
	{
		document.getElementById("GaelicJ").value = TextJ;
		ConvertGaelicJ();
		window.location.hash = "Pronounce";
		$("#ReturnToTextButton").show();
	}

function PronounceReturnToTextJ()
	{
		AnchorTextJ = document.getElementById("GaelicJ").value;
		AnchorTextJ = AnchorTextJ.replace(/^\s+|\s+$/g, "");
		AnchorTextJ = AnchorTextJ.replace(/[Á]/g, "A");
		AnchorTextJ = AnchorTextJ.replace(/[á]/g, "a");
		AnchorTextJ = AnchorTextJ.replace(/[Ó]/g, "O");
		AnchorTextJ = AnchorTextJ.replace(/[ó]/g, "o");
		AnchorTextJ = AnchorTextJ.replace(/[Ú]/g, "U");
		AnchorTextJ = AnchorTextJ.replace(/[ú]/g, "u");
		AnchorTextJ = AnchorTextJ.replace(/[É]/g, "E");
		AnchorTextJ = AnchorTextJ.replace(/[é]/g, "e");
		AnchorTextJ = AnchorTextJ.replace(/[Í]/g, "I");
		AnchorTextJ = AnchorTextJ.replace(/[í]/g, "i");
		AnchorTextJ = AnchorTextJ.replace(/[^A-Za-z]/g, "");
		$("#ReturnToTextButton").hide();
		window.location.hash = AnchorTextJ;
	}

function LangBoxJ(LanguageJ, TextJ)
	{
		SelectedLangauge = LanguageJ.toUpperCase();
		switch (SelectedLangauge)
			{
				case "CS":
					TitleJ = "Czech"
					break;
				case "DE":
					TitleJ = "German"
					break;
				case "EL":
					TitleJ = "Greek"
					break;
				case "EN":
					TitleJ = "English"
					break;
				case "EO":
					TitleJ = "Esperanto"
					break;
				case "IT":
					TitleJ = "Italian"
					break;
				case "IPA":
					TitleJ = "International Phonetic Alphabet"
					break;
				case "FR":
					TitleJ = "French"
					break;
				case "FRK":
					TitleJ = "Frankish"
					break;
				case "GA":
					TitleJ = "Irish"
					break;
				case "GD":
					TitleJ = "Scottish Gaelic"
					break;
				case "LA":
					TitleJ = "Latin"
					break;
				case "NL":
					TitleJ = "Dutch"
					break;
				case "NON":
					TitleJ = "Old Norse"
					break;
				case "YOL":
					TitleJ = "Yola"
					break;
				default:
					TitleJ = ""
					break;
			}
		if (TitleJ != "")
			{
				TitleJ = " title=\"" + TitleJ + "\"";
			}
		ResultJ = "";
		if (TextJ.length <= 50)
			{
				ResultJ = ResultJ + "<nobr>";
			}
		if (LanguageJ.toUpperCase() == "GA")
			{
				AnchorTextJ = TextJ;
				AnchorTextJ = AnchorTextJ.replace(/^\s+|\s+$/g, "");
				AnchorTextJ = AnchorTextJ.replace(/[Á]/g, "A");
				AnchorTextJ = AnchorTextJ.replace(/[á]/g, "a");
				AnchorTextJ = AnchorTextJ.replace(/[Ó]/g, "O");
				AnchorTextJ = AnchorTextJ.replace(/[ó]/g, "o");
				AnchorTextJ = AnchorTextJ.replace(/[Ú]/g, "U");
				AnchorTextJ = AnchorTextJ.replace(/[ú]/g, "u");
				AnchorTextJ = AnchorTextJ.replace(/[É]/g, "E");
				AnchorTextJ = AnchorTextJ.replace(/[é]/g, "e");
				AnchorTextJ = AnchorTextJ.replace(/[Í]/g, "I");
				AnchorTextJ = AnchorTextJ.replace(/[í]/g, "i");
				AnchorTextJ = AnchorTextJ.replace(/[^A-Za-z]/g, "");
				ResultJ = ResultJ + "<a name=\"" + AnchorTextJ + "\" id=\"" + AnchorTextJ + "\" />";
			}
		ResultJ = ResultJ + "<span class=\"Lang" + SelectedLangauge + "\""+ TitleJ + "><span class=\"LangDesignator\">" + SelectedLangauge + "</span></span><span class=\"LangText" + SelectedLangauge + "\">";
		if (LanguageJ.toUpperCase() == "GA")
				{
					ResultJ = ResultJ + "<span style=\"cursor:pointer; white-space:nowrap\" onClick=\"PronounceIrishJ('" + TextJ + "')\">" + TextJ + "</span>";
				}
			else
				{
					ResultJ = ResultJ + TextJ;
				}
		ResultJ = ResultJ + "</span>";
		if (TextJ.length <= 75)
			{
				ResultJ = ResultJ + "</nobr>";
			}
		ResultJ = ResultJ + "​";
		document.write(ResultJ);
	}

function MeasurementBoxJ(AbbreviationJ, TextJ, FirstJ)
	{
		SchemaJ = (FirstJ == true) ? "MeasurementText1" : "MeasurementText2";
		SelectedUnit = AbbreviationJ.toUpperCase();
		switch (SelectedUnit)
			{
				// styles of measurement
				case "BR/EU":
					TitleJ = "British/European Scheme"
					break;
				case "US/NA":
					TitleJ = "United States/North American Scheme"
					break;
				
				// systems of measurement
				case "SI":
					TitleJ = "Metric System"
					break;
				case "US":
					TitleJ = "United States Customary Units"
					break;
				
				// timekeeping
				case "NS":
					TitleJ = "New Style (Gregorian Calendar)"
					break;
				case "RE":
					TitleJ = "Republican Era (Republican Calendar)"
					break;
				
				// currencies
				case "USD":
					TitleJ = "US Dollar"
					break;
				case "EUR":
					TitleJ = "Euro"
					break;
				case "CZK":
					TitleJ = "Czech Republic Koruny"
					break;
				
				// default
				default:
					TitleJ = ""
					break;
			}
		if (TitleJ != "")
			{
				TitleJ = " title=\"" + TitleJ + "\"";
			}
		ResultJ = "<nobr><span class=\"MeasurementAbbr\" " + TitleJ + "><span class=\"MeasurementDesignator\">" + SelectedUnit + "</span></span><span class=\"" + SchemaJ + "\">" + TextJ + "</span></nobr>";
		document.write(ResultJ);
	}

function ConvertGaelicJ()
	{
		function ReplaceAndCleanJ(PatternJ, IPAJ)
			{
				if (IPATextJ.search(RegExp(PatternJ, "g")) != -1)
					{
						if(IPAJ.slice(0,1) == "u")
								{
									SpecialCaseJ = "(X1)";
								}
							else
								{
									SpecialCaseJ = ""
								}
						IPACountJ++;
						IPATextJ = IPATextJ.replace(RegExp(PatternJ, "g"), "[$&]" + SpecialCaseJ + "{" + IPACountJ + "}[$&]");
						IPAArrayJ[IPACountJ] = IPAJ;
						
						IPATextJ = IPATextJ.replace(/\[[aáoóuú]/g, "(B)$&");
						IPATextJ = IPATextJ.replace(/\[[eéií]/g, "(S)$&");
						IPATextJ = IPATextJ.replace(/[aáoóuú]\]/g, "$&(B)");
						IPATextJ = IPATextJ.replace(/[eéií]\]/g, "$&(S)");
						IPATextJ = IPATextJ.replace(/\[[^aáeéiíoóuú]/g, "(C)$&");
						IPATextJ = IPATextJ.replace(/[^aáeéiíoóuú]\]/g, "$&(C)");
						IPATextJ = IPATextJ.replace(/\[.*?\]/g, "");
						IPATextJ = IPATextJ.replace(/\)\([BSC]\){/g, "){");
						IPATextJ = IPATextJ.replace(/}\([BSC]\)\(/g, "}(");
						IPATextJ = IPATextJ.replace(/\)\([BSC]\)\(X/g, ")(X");
						
						EnglishApproxArrayJ[IPACountJ] = IPAJ;
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/aː/g, "aa");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/eː/g, "ey");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/əi/g, "uhy");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/əu/g, "uhw");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/iː/g, "ee");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/iə/g, "eeyah");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/oː/g, "ohw");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/uː/g, "uw");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/uə/g, "uwah");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/a/g, "a");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/b/g, "b");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/c/g, "<i>hhy</i>");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ç/g, "<i>hy</i>");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ɔ/g, "aw");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/d/g, "d");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ɛ/g, "eh");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ʃ/g, "sh");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ə/g, "u");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/f/g, "f");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ɣ/g, "<i>gh</i>");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ɡ/g, "g");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/h/g, "h");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ɪ/g, "i");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/j/g, "y");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ɟ/g, "<i>khy</i>");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/k/g, "k");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/l/g, "l");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/m/g, "m");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/n/g, "n");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ɲ/g, "ny");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ŋ/g, "ng");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/p/g, "p");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ɾ/g, "r");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/s/g, "s");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/t/g, "t");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/ʊ/g, "oo");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/v/g, "v");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/w/g, "w");
						EnglishApproxArrayJ[IPACountJ] = EnglishApproxArrayJ[IPACountJ].replace(/x/g, "<i>kh</i>");
					}
				
				while (GaelicTextJ.search(RegExp(PatternJ, "i")) != -1)
					{
						GaelicCountJ++;
						PositionJ = GaelicTextJ.match(RegExp(PatternJ, "i"));
						GaelicTextJ = GaelicTextJ.replace(RegExp(PatternJ, "i"), "{" + GaelicCountJ + "}");
						GaelicArrayJ[GaelicCountJ] = PositionJ[0];
					}
			}
		
		GaelicTextJ = " " + document.RegExpForm.GaelicJ.value + " ";
		IPATextJ = " " + document.RegExpForm.GaelicJ.value.toLowerCase() + " ";
		OghamTextJ = GaelicTextJ.toLowerCase();
		ISLTextJ = GaelicTextJ.toUpperCase();
		GaelicCountJ = -1;
		IPACountJ = -1;
		GaelicArrayJ = new Array();
		IPAArrayJ = new Array();
		EnglishApproxArrayJ = new Array();

		// Here, any backslashes need to be doubled (e.g., "\\s" for a white space), because the parameter is being passed as a variable.
		ReplaceAndCleanJ("e?adh(ai?)?|ai[dg]h|[eo]i[dg]h(i|ea)?", "əi");							// adh(a(i)), eadh(a(i)), aidh, aigh, eidh(i/ea), eigh(i/ea), oidh(i/ea), oigh(i/ea)
		ReplaceAndCleanJ("e?a[bm]h(ai?)?|o[bdg]h(ai?)?", "əu");										// abh(a(i)), amh(a(i)), eabh(a(i)), eamh(a(i)), obh(a(i)), odh(a(i)), ogh(a(i))
		ReplaceAndCleanJ("eoi?|ói?|omh(ai?)?", "oː");												// eo, eoi, ó, ói, omh(a(i))
		ReplaceAndCleanJ("aío?|aoi?|o?ío?|uío?|i[dg]h", "iː");										// aí, aío, ao, aoi, idh, igh, í, ío, oí, oío, uí, uío
		ReplaceAndCleanJ("a(?=(r[dln]|[lnr]{2}(\\(C\\)|[b-df-hj-np-tv-z]|\\s)|m\\s))", "aː");		// a before rl, rn, rd; syllable-final ll, nn, rr; word-final m
		ReplaceAndCleanJ("(ai|ea)(?=(r[dln]|[lnr]{2}(\\(C\\)|[b-df-hj-np-tv-z]|\\s)))", "aː");		// ai, ea before rl, rn, rd; syllable-final ll, nn, rr
		ReplaceAndCleanJ("aei?|é[ai]?", "eː");														// ae(i), é, éa, éi
		ReplaceAndCleanJ("iai?", "iə");																// ia, iai
		ReplaceAndCleanJ("uai?", "uə");																// ua, uai
		ReplaceAndCleanJ("e?ai?", "a");																// a, ai, ea, eai
		ReplaceAndCleanJ("e?ái?", "aː");															// á, ái, eá, eái
		ReplaceAndCleanJ("ei(?=(nn(\\(C\\)|[b-df-hj-np-tv-z]|\\s)|m\\s))", "iː");					// ei before nn, word-final m
		ReplaceAndCleanJ("ei(?=(mh?|n))", "ɪ");														// ei before m, mh, n
		ReplaceAndCleanJ("ei(?=r[dln])", "eː");														// ei before rl, rn, rd
		ReplaceAndCleanJ("ei(?=ll(\\(C\\)|[b-df-hj-np-tv-z]|\\s))", "əi");							// ei before syllable-final ll
		ReplaceAndCleanJ("ei?", "ɛ");																// e, ei
		ReplaceAndCleanJ("iu", "ʊ");																// iu
		ReplaceAndCleanJ("i?úi?", "uː");															// iú, iúi, ú, úi
		ReplaceAndCleanJ("io(?=[dlnrst])", "ɪ");													// io before d, l, n, r, s, t
		ReplaceAndCleanJ("oi(?=(s|cht|r[st]))", "ɔ");												// oi before s, cht, rs, rt
		ReplaceAndCleanJ("oi(?=(nn(\\(C\\)|[b-df-hj-np-tv-z]|\\s)|m\\s))", "iː");					// oi before syllable-final nn, word-final m
		ReplaceAndCleanJ("oi(?=[nm])", "ɪ");														// oi before n, m
		ReplaceAndCleanJ("noi", "nˠɪ");																// oi after n
		ReplaceAndCleanJ("moi", "mˠɪ");																// oi after m
		ReplaceAndCleanJ("mhoi", "wɪ");																// oi after mh
		ReplaceAndCleanJ("oi(?=ll(\\(C\\)|[b-df-hj-np-tv-z]|\\s))", "əi");							// oi before syllable-final ll
		ReplaceAndCleanJ("oi(?=r[dln])", "oː");														// oi before rd, rl, rn
		ReplaceAndCleanJ("oi", "ɛ");																// oi
		ReplaceAndCleanJ("o(?=(nn(\\(C\\)|[b-df-hj-np-tv-z]|\\s)|m\\s|ng\\s))", "uː");				// o before syllable-final nn; word-final m, ng
		ReplaceAndCleanJ("o(?=[nm])", "ʊ");															// o before m, n
		ReplaceAndCleanJ("o(?=(r[dln]|(ll|rr)(\\(C\\)|[b-df-hj-np-tv-z]|\\s)))", "oː");				// o before rd, rl, rn; syllable-final ll, rr
		ReplaceAndCleanJ("o", "ɔ");																	// o
		ReplaceAndCleanJ("ui(?=(cht|r[st]))", "ʊ");													// ui before cht, rs, rt
		ReplaceAndCleanJ("ui(?=((ll|nn)(\\(C\\)|[b-df-hj-np-tv-z]|\\s)|m\\s))", "iː");				// ui before syllable-final ll, nn; word-final m
		ReplaceAndCleanJ("ui(?=r[dln])", "uː");														// ui before rd, rl, rn
		ReplaceAndCleanJ("ui", "ɪ");																// ui
		ReplaceAndCleanJ("u(?=r[dln])", "uː");														// u before rd, rl, rn
		ReplaceAndCleanJ("u", "ʊ");																	// u
		ReplaceAndCleanJ("i(?=((ll|nn)(\\(C\\)|[b-df-hj-np-tv-z]|\\s)|m\\s))", "iː");				// i before syllable-final ll, nn; word-final m
		ReplaceAndCleanJ("i", "ɪ");																	// i
		ReplaceAndCleanJ("(\\(S\\)(bhf?|mh|v))|((bhf?|mh|v)\\(S\\))", "vʲ");						// bh, bhf, mh, v -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)(bhf?|mh|v))|((bhf?|mh|v)\\(B\\))", "vˠ");						// bh, bhf, mh, v -- adjacent to broad vowel
		ReplaceAndCleanJ("bhf?|mh|v", "w");															// bh, bhf, mh, v -- otherwise
		ReplaceAndCleanJ("sh(?=\\(S\\){\\d+?}(\\(S\\))?(\\(B\\))?\\(X1\\))", "ç");					// sh, followed by e or i, followed by special marking (X1)
		ReplaceAndCleanJ("th(?!\\([BS]\\))", "");													// th at end of syllable
		ReplaceAndCleanJ("ch(?=t)", "x");															// ch -- before t
		ReplaceAndCleanJ("\\(S\\)ch\\(S\\)", "h");													// ch -- between slender vowels
		ReplaceAndCleanJ("(\\(S\\)ch)|(ch\\(S\\))", "ç");											// ch -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)ch)|(ch\\(B\\))", "ç");											// ch -- adjacent to broad vowel
		ReplaceAndCleanJ("ch", "x");																// ch -- otherwise
		ReplaceAndCleanJ("\\sng", "ɲ");																// initial ng
		ReplaceAndCleanJ("ng", "ɲɟ");																// medial, final ng
		ReplaceAndCleanJ("\\s[dg]h", "ɣ");															// initial dh, gh
		ReplaceAndCleanJ("(\\(S\\)[dg]h)|([dg]h\\(S\\))", "j");										// dh, gh -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)[dg]h)|([dg]h\\(B\\))", "j");										// dh, gh -- adjacent to broad vowel
		ReplaceAndCleanJ("[dg]h", "");																// dh, gh -- otherwise
		ReplaceAndCleanJ("fh", "");																	// h, sh, th
		ReplaceAndCleanJ("(\\(S\\)(f|ph))|((f|ph)\\(S\\))", "fʲ");									// f, ph -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)(f|ph))|((f|ph)\\(B\\))", "fˠ");									// f, ph -- adjacent to broad vowel
		ReplaceAndCleanJ("(f|ph)", "f");															// f, ph -- otherwise
		ReplaceAndCleanJ("([st])?h", "h");															// h, sh, th
		ReplaceAndCleanJ("(\\(S\\)ts)|(ts\\(S\\))", "tʲ");											// ts -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)ts)|(ts\\(B\\))", "tˠ");											// ts -- adjacent to broad vowel
		ReplaceAndCleanJ("ts", "");																	// ts -- otherwise
		ReplaceAndCleanJ("(\\(S\\)nc)|(nc\\(S\\))", "ɲc");											// nc -- adjacent to slender vowel
		ReplaceAndCleanJ("nc", "ŋk");																// nc -- otherwise
		ReplaceAndCleanJ("(\\(S\\)n([nd])?)|(n([nd])?\\(S\\))", "nʲ");								// n, nd, nn -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)n([nd])?)|(n([nd])?\\(B\\))", "nˠ");								// n, nd, nn -- adjacent to broad vowel
		ReplaceAndCleanJ("n([nd])?", "n");															// n, nd, nn -- otherwise
		ReplaceAndCleanJ("(\\(S\\)mb?)|(mb?\\(S\\))", "mʲ");										// m, mb -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)mb?)|(mb?\\(B\\))", "mˠ");										// m, mb -- adjacent to broad vowel
		ReplaceAndCleanJ("mb?", "m");																// m, mb -- otherwise
		ReplaceAndCleanJ("(\\(S\\)bp?)|(bp?\\(S\\))", "bʲ");										// b, bp -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)bp?)|(bp?\\(B\\))", "bˠ");										// b, bp -- adjacent to broad vowel
		ReplaceAndCleanJ("bp?", "b");																// b, bp -- otherwise
		ReplaceAndCleanJ("(\\(S\\)dt?)|(dt?\\(S\\))", "dʲ");										// d, dt -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)dt?)|(dt?\\(B\\))", "dˠ");										// d, dt -- adjacent to broad vowel
		ReplaceAndCleanJ("dt?", "d");																// d, dt -- otherwise
		ReplaceAndCleanJ("(\\(S\\)gc?)|(gc?\\(S\\))", "ɟ");											// g, gc -- adjacent to slender vowel
		ReplaceAndCleanJ("gc?", "ɡ");																// g, gc -- otherwise
		ReplaceAndCleanJ("(\\(S\\)ll?)|(ll?\\(S\\))", "lʲ");										// l, ll -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)ll?)|(ll?\\(B\\))", "lˠ");										// l, ll -- adjacent to broad vowel
		ReplaceAndCleanJ("ll?", "l");																// l, ll -- otherwise
		ReplaceAndCleanJ("rr", "ɾˠ");																// rr
		ReplaceAndCleanJ("(\\(S\\)r)|(r\\(S\\))", "ɾʲ");											// r -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)r)|(r\\(B\\))", "ɾˠ");											// r -- adjacent to broad vowel
		ReplaceAndCleanJ("r", "ɾ");																	// r -- otherwise
		ReplaceAndCleanJ("(\\(S\\)c)|(c\\(S\\))", "c");												// c -- adjacent to slender vowel
		ReplaceAndCleanJ("c", "k");																	// c -- otherwise
		ReplaceAndCleanJ("(\\(S\\)p)|(p\\(S\\))", "pʲ");											// p -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)p)|(p\\(B\\))", "pˠ");											// p -- adjacent to broad vowel
		ReplaceAndCleanJ("p", "p");																	// p -- otherwise
		ReplaceAndCleanJ("(\\(S\\)s)|(s\\(S\\))", "ʃ");												// s -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)s)|(s\\(B\\))", "ʃ");												// s -- adjacent to broad vowel
		ReplaceAndCleanJ("s", "s");																	// s -- otherwise
		ReplaceAndCleanJ("(\\(S\\)t)|(t\\(S\\))", "tʲ");											// t -- adjacent to slender vowel
		ReplaceAndCleanJ("(\\(B\\)t)|(t\\(B\\))", "tˠ");											// t -- adjacent to broad vowel
		ReplaceAndCleanJ("t", "t");																	// t -- otherwise

		EnglishApproxTextJ = IPATextJ;
		
		IPATextCleanJ = IPATextJ
		EnglishApproxTextCleanJ = EnglishApproxTextJ;
		GaelicTextCleanJ = GaelicTextJ

		for(i=0; i<=IPACountJ; i++)
			{
				ReplaceStringJ = "\\{" + i + "\\}";
				IPATextJ = IPATextJ.replace(RegExp(ReplaceStringJ,"g"), "<span class='[[REPLACE]]'>" + IPAArrayJ[i] + "</span>");
				EnglishApproxTextJ = EnglishApproxTextJ.replace(RegExp(ReplaceStringJ,"g"), "<span class='[[REPLACE]]'>" + EnglishApproxArrayJ[i] + "</span>");
				IPATextCleanJ = IPATextCleanJ.replace(RegExp(ReplaceStringJ,"g"), IPAArrayJ[i]);
				EnglishApproxTextCleanJ = EnglishApproxTextCleanJ.replace(RegExp(ReplaceStringJ,"g"), EnglishApproxArrayJ[i]);
			}
		IPATextJ = IPATextJ.replace(/^\s+|\((([BCS]|X\d+))\)|\s+$/g, "");
		EnglishApproxTextJ = EnglishApproxTextJ.replace(/^\s+|[ˠʲ]|\(([BCS]|X\d+)\)|\s+$/g, "");
		IPATextCleanJ = IPATextCleanJ.replace(/^\s+|\((([BCS]|X\d+))\)|\s+$/g, "");
		EnglishApproxTextCleanJ = EnglishApproxTextCleanJ.replace(/^\s+|[ˠʲ]|\(([BCS]|X\d+)\)|\s+$/g, "");
		
		for(i=0; i<=GaelicCountJ; i++)
			{
				ReplaceStringJ = "\\{" + i + "\\}";
				GaelicTextJ = GaelicTextJ.replace(RegExp(ReplaceStringJ,"g"), "<span class='[[REPLACE]]'>" + GaelicArrayJ[i] + "</span>");
				GaelicTextCleanJ = GaelicTextCleanJ.replace(RegExp(ReplaceStringJ,"g"), GaelicArrayJ[i]);
			}
		GaelicTextJ = GaelicTextJ.replace(/^\s|\s$/, "");
		GaelicTextCleanJ = GaelicTextCleanJ.replace(/^\s|\s$/, "");
		
		TraditionalGaelicTextJ = GaelicTextJ;
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextJ;
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/bh/g, "ḃ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/ch/g, "ċ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/dh/g, "ḋ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/fh/g, "ḟ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/gh/g, "ġ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/mh/g, "ṁ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/ph/g, "ṗ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/sh/g, "ṡ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/th/g, "ṫ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Bh/g, "Ḃ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Ch/g, "Ċ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Dh/g, "Ḋ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Fh/g, "Ḟ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Gh/g, "Ġ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Mh/g, "Ṁ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Ph/g, "Ṗ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Sh/g, "Ṡ");
		TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/Th/g, "Ṫ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/bh/g, "ḃ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/ch/g, "ċ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/dh/g, "ḋ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/fh/g, "ḟ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/gh/g, "ġ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/mh/g, "ṁ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/ph/g, "ṗ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/sh/g, "ṡ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/th/g, "ṫ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Bh/g, "Ḃ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Ch/g, "Ċ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Dh/g, "Ḋ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Fh/g, "Ḟ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Gh/g, "Ġ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Mh/g, "Ṁ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Ph/g, "Ṗ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Sh/g, "Ṡ");
		TraditionalGaelicTextCleanJ = TraditionalGaelicTextCleanJ.replace(/Th/g, "Ṫ");

		
		OghamTextJ = OghamTextJ.replace(/\s+/g, " ");
		OghamTextJ = OghamTextJ.replace(/^\s+|\s+$/g, "");
		OghamTextJ = OghamTextJ.replace(/[á]/g, "a");
		OghamTextJ = OghamTextJ.replace(/[ó]/g, "o");
		OghamTextJ = OghamTextJ.replace(/[ú]/g, "u");
		OghamTextJ = OghamTextJ.replace(/[é]/g, "e");
		OghamTextJ = OghamTextJ.replace(/[í]/g, "i");
		OghamTextJ = OghamTextJ.replace(/[^blfsnhdtcqmgzraoueip\s]/g, "");
		OghamTextJ = OghamTextJ.replace(/\s/g, "<IMG SRC='IRISH/OGHAM_SPACE.PNG' /></NOBR>​<NOBR>");
		OghamTextJ = OghamTextJ.replace(/ng/g, "<IMG SRC='IRISH/OGHAM_NG.PNG' TITLE='NG' />");
		OghamTextJ = OghamTextJ.replace(/ea/g, "<IMG SRC='IRISH/OGHAM_EA.PNG' TITLE='EA' />");
		OghamTextJ = OghamTextJ.replace(/oi/g, "<IMG SRC='IRISH/OGHAM_OI.PNG' TITLE='OI' />");
		OghamTextJ = OghamTextJ.replace(/ui/g, "<IMG SRC='IRISH/OGHAM_UI.PNG' TITLE='UI' />");
		OghamTextJ = OghamTextJ.replace(/ia/g, "<IMG SRC='IRISH/OGHAM_IA.PNG' TITLE='IA' />");
		OghamTextJ = OghamTextJ.replace(/ae/g, "<IMG SRC='IRISH/OGHAM_AE.PNG' TITLE='AE' />");
		OghamTextJ = OghamTextJ.replace(/b/g, "<IMG SRC='IRISH/OGHAM_B.PNG' TITLE='B' />");
		OghamTextJ = OghamTextJ.replace(/l/g, "<IMG SRC='IRISH/OGHAM_L.PNG' TITLE='L' />");
		OghamTextJ = OghamTextJ.replace(/f/g, "<IMG SRC='IRISH/OGHAM_F.PNG' TITLE='F' />");
		OghamTextJ = OghamTextJ.replace(/s/g, "<IMG SRC='IRISH/OGHAM_S.PNG' TITLE='S' />");
		OghamTextJ = OghamTextJ.replace(/n/g, "<IMG SRC='IRISH/OGHAM_N.PNG' TITLE='N' />");
		OghamTextJ = OghamTextJ.replace(/h/g, "<IMG SRC='IRISH/OGHAM_H.PNG' TITLE='H' />");
		OghamTextJ = OghamTextJ.replace(/d/g, "<IMG SRC='IRISH/OGHAM_D.PNG' TITLE='D' />");
		OghamTextJ = OghamTextJ.replace(/t/g, "<IMG SRC='IRISH/OGHAM_T.PNG' TITLE='T' />");
		OghamTextJ = OghamTextJ.replace(/c/g, "<IMG SRC='IRISH/OGHAM_C.PNG' TITLE='C' />");
		OghamTextJ = OghamTextJ.replace(/q/g, "<IMG SRC='IRISH/OGHAM_Q.PNG' TITLE='Q' />");
		OghamTextJ = OghamTextJ.replace(/m/g, "<IMG SRC='IRISH/OGHAM_M.PNG' TITLE='M' />");
		OghamTextJ = OghamTextJ.replace(/g/g, "<IMG SRC='IRISH/OGHAM_G.PNG' TITLE='G' />");
		OghamTextJ = OghamTextJ.replace(/z/g, "<IMG SRC='IRISH/OGHAM_Z.PNG' TITLE='Z' />");
		OghamTextJ = OghamTextJ.replace(/r/g, "<IMG SRC='IRISH/OGHAM_R.PNG' TITLE='R' />");
		OghamTextJ = OghamTextJ.replace(/a/g, "<IMG SRC='IRISH/OGHAM_A.PNG' TITLE='A' />");
		OghamTextJ = OghamTextJ.replace(/o/g, "<IMG SRC='IRISH/OGHAM_O.PNG' TITLE='O' />");
		OghamTextJ = OghamTextJ.replace(/u/g, "<IMG SRC='IRISH/OGHAM_U.PNG' TITLE='U' />");
		OghamTextJ = OghamTextJ.replace(/e/g, "<IMG SRC='IRISH/OGHAM_E.PNG' TITLE='E' />");
		OghamTextJ = OghamTextJ.replace(/i/g, "<IMG SRC='IRISH/OGHAM_I.PNG' TITLE='I' />");
		OghamTextJ = OghamTextJ.replace(/p/g, "<IMG SRC='IRISH/OGHAM_P.PNG' TITLE='P' />");
		OghamTextJ = "<IMG SRC='IRISH/OGHAM_FEATHER1.PNG' />" + OghamTextJ + "<IMG SRC='IRISH/OGHAM_FEATHER2.PNG' />"
		OghamTextJ = "<NOBR>" + OghamTextJ + "</NOBR>"
		
		ISLTextJ = ISLTextJ.replace(/\s+/g, " ");
		ISLTextJ = ISLTextJ.replace(/^\s+|\s+$/g, "");
		ISLTextJ = ISLTextJ.replace(/[Á]/g, "A");
		ISLTextJ = ISLTextJ.replace(/[Ó]/g, "O");
		ISLTextJ = ISLTextJ.replace(/[Ú]/g, "U");
		ISLTextJ = ISLTextJ.replace(/[É]/g, "E");
		ISLTextJ = ISLTextJ.replace(/[Í]/g, "I");
		ISLTextJ = ISLTextJ.replace(/[^A-Z\s]/g, "");
		ISLTextJ = ISLTextJ.replace(/\s/g, "      </nobr> <nobr>");
		ISLTextJ = ISLTextJ.replace(/[A-Z]/g, "<IMG SRC='IRISH/ISL_$&.PNG' TITLE='$&' /> ");
		ISLTextJ = "<nobr>" + ISLTextJ + "</nobr>"
				
		ClassCountJ = -1;
		while (GaelicTextJ.search(RegExp("\[\[REPLACE\]\]", "")) != -1)
			{
				ClassCountJ++;
				GaelicTextJ = GaelicTextJ.replace(/\[\[REPLACE\]\]/, "color" + (ClassCountJ % 7));
				IPATextJ = IPATextJ.replace(/\[\[REPLACE\]\]/, "color" + (ClassCountJ % 7));
				EnglishApproxTextJ = EnglishApproxTextJ.replace(/\[\[REPLACE\]\]/, "color" + (ClassCountJ % 7));
				TraditionalGaelicTextJ = TraditionalGaelicTextJ.replace(/\[\[REPLACE\]\]/, "color" + (ClassCountJ % 7));
			}
		IPATextJ = "/" + IPATextJ + "/";
		IPATextCleanJ = "/" + IPATextCleanJ + "/";

		document.getElementById('GaelicResult').innerHTML = GaelicTextJ;
		document.getElementById('TraditionalGaelicResult').innerHTML = TraditionalGaelicTextJ;
		document.getElementById('IPAResult').innerHTML = IPATextJ;
		document.getElementById('EnglishApproxResult').innerHTML = EnglishApproxTextJ;
		document.getElementById('GaelicCleanResult').innerHTML = GaelicTextCleanJ;
		document.getElementById('TraditionalGaelicCleanResult').innerHTML = TraditionalGaelicTextCleanJ;
		document.getElementById('IPACleanResult').innerHTML = IPATextCleanJ;
		document.getElementById('EnglishApproxCleanResult').innerHTML = EnglishApproxTextCleanJ;
		document.getElementById('OghamResult').innerHTML = OghamTextJ;
		document.getElementById('ISLResult').innerHTML = ISLTextJ;
		
		document.getElementById("GaelicJ").focus();
		document.getElementById("GaelicRow").style.display = "";
		if (GaelicTextJ == TraditionalGaelicTextJ)
				{
					document.getElementById("TraditionalGaelicRow").style.display = "none";
				}
			else
				{
					document.getElementById("TraditionalGaelicRow").style.display = "";
				}
		document.getElementById("IPARow").style.display = "";
		document.getElementById("EnglishApproximateRow").style.display = "";
		document.getElementById("OghamRow").style.display = "";
		document.getElementById("ISLRow").style.display = "";
		document.getElementById("buttons").style.display = "";
		if (EnglishApproxTextCleanJ.search(/<i>/) == -1)
				{
					document.getElementById("ItalicsInEnglishApproximate").style.display = "none";
				}
			else
				{
					document.getElementById("ItalicsInEnglishApproximate").style.display = "";
				}
	}

function ColorsJ(ShowHideJ)
	{
		if (ShowHideJ == "show")
				{
					document.getElementById("GaelicColor").style.display = "";
					document.getElementById("TraditionalGaelicColor").style.display = "";
					document.getElementById("IPAColor").style.display = "";
					document.getElementById("EnglishApproximateColor").style.display = "";
					document.getElementById("HideColorButton").style.display = "";
					document.getElementById("GaelicClean").style.display = "none";
					document.getElementById("TraditionalGaelicClean").style.display = "none";
					document.getElementById("IPAClean").style.display = "none";
					document.getElementById("EnglishApproximateClean").style.display = "none";
					document.getElementById("ShowColorButton").style.display = "none";
				}
			else
				{
					document.getElementById("GaelicColor").style.display = "none";
					document.getElementById("TraditionalGaelicColor").style.display = "none";
					document.getElementById("IPAColor").style.display = "none";
					document.getElementById("EnglishApproximateColor").style.display = "none";
					document.getElementById("HideColorButton").style.display = "none";
					document.getElementById("GaelicClean").style.display = "";
					document.getElementById("TraditionalGaelicClean").style.display = "";
					document.getElementById("IPAClean").style.display = "";
					document.getElementById("EnglishApproximateClean").style.display = "";
					document.getElementById("ShowColorButton").style.display = "";
				}
	}

function PhotoSizeToggleJ(GroupJ, ImageJ)
	{
		$("." + GroupJ).each(function () {
				ThisIDJ = "#" + this.id;
				resize = false;
				if (this.id == ImageJ)
						{
							if ($(ThisIDJ).hasClass("ImgLarge") == true)
									{
										NewWidthJ = this.width * 0.15;
										NewHeightJ = this.height * 0.15;
										$(ThisIDJ).removeClass("ImgLarge");
										$(ThisIDJ).addClass("ImgSmall");
									}
								else
									{
										NewWidthJ = this.width / 0.15;
										NewHeightJ = this.height / 0.15;
										$(ThisIDJ).removeClass("ImgSmall");
										$(ThisIDJ).addClass("ImgLarge");
									}
							if (NewWidthJ < 600)
									{
										NewBorderJ = "1px";
									}
								else
									{
										NewBorderJ = "0px";
									}
							resize = true;
						}
					else if ($(ThisIDJ).hasClass("ImgLarge") == true)
						{
							NewWidthJ = this.width * 0.15;
							NewHeightJ = this.height * 0.15;
							$(ThisIDJ).removeClass("ImgLarge");
							$(ThisIDJ).addClass("ImgSmall");
							NewBorderJ = "1px";
							resize = true;
						}
				if (resize == true)
					{
						$("#" + this.id).animate({
								width: NewWidthJ,
								height: NewHeightJ,
								borderLeftWidth: NewBorderJ,
								borderRightWidth: NewBorderJ
							}, 250);
					}
			});
		setTimeout("window.location.hash = 'End" + ImageJ + "'", 300)
		setTimeout("window.location.hash = 'Begin" + ImageJ + "'", 310)
	}

function PhotoGroupEnlargeJ(GroupJ)
	{
		$("." + GroupJ).each(function () {
				ThisIDJ = "#" + this.id;
				resize = false;
				if ($(ThisIDJ).hasClass("ImgSmall") == true)
					{
						NewWidthJ = this.width / 0.15;
						NewHeightJ = this.height / 0.15;
						$(ThisIDJ).removeClass("ImgSmall");
						$(ThisIDJ).addClass("ImgLarge");
							if (NewWidthJ < 600)
									{
										NewBorderJ = "1px";
									}
								else
									{
										NewBorderJ = "0px";
									}
						resize = true;
					}
				if (resize == true)
					{
						$(ThisIDJ).animate({
								width: NewWidthJ,
								height: NewHeightJ,
								borderLeftWidth: NewBorderJ,
								borderRightWidth: NewBorderJ
							}, 250);
					}
			});
	}

function PhotoGroupsShrinkJ()
	{
		$(".PhotoGroup").each(function () {
				ThisIDJ = "#" + this.id;
				NewWidthJ = this.width * 0.15;
				NewHeightJ = this.height * 0.15;
				$(ThisIDJ).removeClass("ImgLarge");
				$(ThisIDJ).addClass("ImgSmall");
				NewBorderJ = "1px";
				$("#" + this.id).attr("width", NewWidthJ);
				$("#" + this.id).attr("height", NewHeightJ);
				$("#" + this.id).attr("borderLeftWidth", "1px");
				$("#" + this.id).attr("borderRightWidth", "1px");
			});
	}

function WriteH1HeaderJ(TextJ, Subhead)
	{
		AnchorTextJ = TextJ;
		AnchorTextJ = AnchorTextJ.replace(/[Á]/g, "A");
		AnchorTextJ = AnchorTextJ.replace(/[á]/g, "a");
		AnchorTextJ = AnchorTextJ.replace(/[Ó]/g, "O");
		AnchorTextJ = AnchorTextJ.replace(/[ó]/g, "o");
		AnchorTextJ = AnchorTextJ.replace(/[Ú]/g, "U");
		AnchorTextJ = AnchorTextJ.replace(/[ú]/g, "u");
		AnchorTextJ = AnchorTextJ.replace(/[É]/g, "E");
		AnchorTextJ = AnchorTextJ.replace(/[é]/g, "e");
		AnchorTextJ = AnchorTextJ.replace(/[Í]/g, "I");
		AnchorTextJ = AnchorTextJ.replace(/[í]/g, "i");
		AnchorTextJ = AnchorTextJ.replace(/[^A-Za-z]/g, "");
		AnchorTextJ = "Title" + AnchorTextJ;
		ResultJ = "<h1><a name='" + AnchorTextJ + "' id='" + AnchorTextJ + "' />" + TextJ;
		if (Subhead != undefined)
			{
				ResultJ = ResultJ + "<span style='font-size:0.5em'><br />" + Subhead + "</span>";
			}
		ResultJ = ResultJ + "</h1><table class='MainContent' border='0'><tr><th class='MainContentHead'></th><td class='MainContentBody'>"
		document.write(ResultJ);
		
		ToCRef = "<tr><td nowrap='nowrap'><a href='#" + AnchorTextJ + "'>" + TextJ + "</a></td></tr>"
		$("#ToC").append(ToCRef);
	}

function OghamJ(LatinJ)
	{
		LatinJ = LatinJ.toLowerCase();
		LengthJ = LatinJ.length;
		LastCharJ = LatinJ.slice(LengthJ-1, LengthJ);
		OghamTextJ = "";
		for (i = LengthJ-1; i >= 0; i--)
			{
				OghamTextJ = OghamTextJ + LatinJ.slice(i, i+1);
			}
		
		OghamTextJ = OghamTextJ.replace(/\s+/g, " ");
		OghamTextJ = OghamTextJ.replace(/^\s+|\s+$/g, "");
		OghamTextJ = OghamTextJ.replace(/[á]/g, "a");
		OghamTextJ = OghamTextJ.replace(/[ó]/g, "o");
		OghamTextJ = OghamTextJ.replace(/[ú]/g, "u");
		OghamTextJ = OghamTextJ.replace(/[é]/g, "e");
		OghamTextJ = OghamTextJ.replace(/[í]/g, "i");
		OghamTextJ = OghamTextJ.replace(/[^blfsnhdtcqmgzraoueip\s]/g, "");
		OghamTextJ = OghamTextJ.replace(/\s/g, "<IMG SRC='IRISH/V_OGHAM_SPACE.PNG' /><BR />");
		OghamTextJ = OghamTextJ.replace(/gn/g, "<IMG SRC='IRISH/V_OGHAM_NG.PNG' TITLE='NG' /><BR />");
		OghamTextJ = OghamTextJ.replace(/ae/g, "<IMG SRC='IRISH/V_OGHAM_EA.PNG' TITLE='EA' /><BR />");
		OghamTextJ = OghamTextJ.replace(/io/g, "<IMG SRC='IRISH/V_OGHAM_OI.PNG' TITLE='OI' /><BR />");
		OghamTextJ = OghamTextJ.replace(/iu/g, "<IMG SRC='IRISH/V_OGHAM_UI.PNG' TITLE='UI' /><BR />");
		OghamTextJ = OghamTextJ.replace(/ai/g, "<IMG SRC='IRISH/V_OGHAM_IA.PNG' TITLE='IA' /><BR />");
		OghamTextJ = OghamTextJ.replace(/ea/g, "<IMG SRC='IRISH/V_OGHAM_AE.PNG' TITLE='AE' /><BR />");
		OghamTextJ = OghamTextJ.replace(/b/g, "<IMG SRC='IRISH/V_OGHAM_B.PNG' TITLE='B' /><BR />");
		OghamTextJ = OghamTextJ.replace(/l/g, "<IMG SRC='IRISH/V_OGHAM_L.PNG' TITLE='L' /><BR />");
		OghamTextJ = OghamTextJ.replace(/f/g, "<IMG SRC='IRISH/V_OGHAM_F.PNG' TITLE='F' /><BR />");
		OghamTextJ = OghamTextJ.replace(/s/g, "<IMG SRC='IRISH/V_OGHAM_S.PNG' TITLE='S' /><BR />");
		OghamTextJ = OghamTextJ.replace(/n/g, "<IMG SRC='IRISH/V_OGHAM_N.PNG' TITLE='N' /><BR />");
		OghamTextJ = OghamTextJ.replace(/h/g, "<IMG SRC='IRISH/V_OGHAM_H.PNG' TITLE='H' /><BR />");
		OghamTextJ = OghamTextJ.replace(/d/g, "<IMG SRC='IRISH/V_OGHAM_D.PNG' TITLE='D' /><BR />");
		OghamTextJ = OghamTextJ.replace(/t/g, "<IMG SRC='IRISH/V_OGHAM_T.PNG' TITLE='T' /><BR />");
		OghamTextJ = OghamTextJ.replace(/c/g, "<IMG SRC='IRISH/V_OGHAM_C.PNG' TITLE='C' /><BR />");
		OghamTextJ = OghamTextJ.replace(/q/g, "<IMG SRC='IRISH/V_OGHAM_Q.PNG' TITLE='Q' /><BR />");
		OghamTextJ = OghamTextJ.replace(/m/g, "<IMG SRC='IRISH/V_OGHAM_M.PNG' TITLE='M' /><BR />");
		OghamTextJ = OghamTextJ.replace(/g/g, "<IMG SRC='IRISH/V_OGHAM_G.PNG' TITLE='G' /><BR />");
		OghamTextJ = OghamTextJ.replace(/z/g, "<IMG SRC='IRISH/V_OGHAM_Z.PNG' TITLE='Z' /><BR />");
		OghamTextJ = OghamTextJ.replace(/r/g, "<IMG SRC='IRISH/V_OGHAM_R.PNG' TITLE='R' /><BR />");
		OghamTextJ = OghamTextJ.replace(/a/g, "<IMG SRC='IRISH/V_OGHAM_A.PNG' TITLE='A' /><BR />");
		OghamTextJ = OghamTextJ.replace(/o/g, "<IMG SRC='IRISH/V_OGHAM_O.PNG' TITLE='O' /><BR />");
		OghamTextJ = OghamTextJ.replace(/u/g, "<IMG SRC='IRISH/V_OGHAM_U.PNG' TITLE='U' /><BR />");
		OghamTextJ = OghamTextJ.replace(/e/g, "<IMG SRC='IRISH/V_OGHAM_E.PNG' TITLE='E' /><BR />");
		OghamTextJ = OghamTextJ.replace(/i/g, "<IMG SRC='IRISH/V_OGHAM_I.PNG' TITLE='I' /><BR />");
		OghamTextJ = OghamTextJ.replace(/p/g, "<IMG SRC='IRISH/V_OGHAM_P.PNG' TITLE='P' /><BR />");
		OghamTextJ = "<IMG SRC='IRISH/V_OGHAM_FEATHER2.PNG' /><BR />" + OghamTextJ + "<IMG SRC='IRISH/V_OGHAM_FEATHER1.PNG' />";
		
		return(OghamTextJ);
	}

function WriteOghamJ(OghamTextJ, SaveOutput)
	{
		OghamTextJ = "<table class='hOghamBox'><tr><td>" + OghamJ(OghamTextJ) + "</td></tr></table>";
		if (SaveOutput == true)
			{
				return OghamTextJ;
			}
		else
			{
				document.write(OghamTextJ);
			}
	}

function WriteParisSignJ(ArrondissementJ, TextJ, SaveOutput)
	{
		ParisSignTextJ = "<table class='hParisSignBox'><tr><td><table border='0' cellspacing='0' cellpadding='0' class='ParisSignn'><tr><td colspan='5'><table class='ParisSignT'><tr><td class='ParisSignTW'>"
		
		if (ArrondissementJ == 1)
				{
					OrdinalJ = "er";
				}
			else
				{
					OrdinalJ = "e";
				}
		ParisSignTextJ = ParisSignTextJ + ArrondissementJ + "<sup class='ParisSignSmallText'>" + OrdinalJ + "</sup> Arr<sup class='ParisSignSmallText'><u>t</u></sup></td></tr></table></td></tr><tr><td class='ParisSignTL' colspan='2' rowspan='2'><img src='images/Paris_enseigne_tl.gif' width='27' height='27' class='ParisSignTLImg' /></td><td class='ParisSignT1'><img src='images/invisible.gif' /></td><td class='ParisSignTR' colspan='2' rowspan='2'><img src='images/Paris_enseigne_tr.gif' width='27' height='27' /></td></tr><tr><td class='ParisSignT2'><img src='images/invisible.gif' /></td><tr><td class='ParisSignL1'><img src='images/invisible.gif' /></td><td class='ParisSignL2'><img src='images/invisible.gif' /></td><td class='ParisSignM'>"
		
		LocationTextJ = TextJ.toUpperCase();
		LocationTextJ = LocationTextJ.replace(/\/{2,}/g, "//");
		LocationTextJ = LocationTextJ.replace(/\({2,}/g, "((");
		LocationTextJ = LocationTextJ.replace(/\){2,}/g, "))");
		LocationTextJ = LocationTextJ.replace(/\/\/\(\(/g, "((");
		LocationTextJ = LocationTextJ.replace(/\/\/\)\)/g, "))");
		LocationTextJ = LocationTextJ.replace(/\/\//g, "<br />");
		LocationTextJ = LocationTextJ.replace(/\(\(/g, "<br /><span class='ParisSignSmallText'>");
		LocationTextJ = LocationTextJ.replace(/\)\)/g, "<br /></span>");
		ParisSignTextJ = ParisSignTextJ + LocationTextJ
		
		ParisSignTextJ = ParisSignTextJ + "</td><td class='ParisSignR1'><img src='images/invisible.gif' /></td><td class='ParisSignR2'><img src='images/invisible.gif' /></td></tr><tr><td class='ParisSignBL' colspan='2' rowspan='2'><img src='images/Paris_enseigne_bl.gif' width='27' height='27' /></td><td class='ParisSignB1'><img src='images/invisible.gif' /></td><td class='ParisSignBR' colspan='2' rowspan='2'><img src='images/Paris_enseigne_br.gif' width='27' height='27' /></td></tr><tr><td class='ParisSignB2'><img src='images/invisible.gif' /></td><tr></table></td></tr></table>"
		
		if (SaveOutput == true)
			{
				return ParisSignTextJ;
			}
		else
			{
				document.write(ParisSignTextJ);
			}
	}

function WriteNetherlandsSign(TypeJ, City1, km1, City2, km2, SaveOutput)
	{
		NetherlandsSignText = "<table class=\"Netherlands" + TypeJ + "Sign\">";
			if (City2 != undefined && City2 != "")
				{
					NetherlandsSignText = NetherlandsSignText + "<tr><td class=\"Netherlands" + TypeJ + "SignCity1\">" + City1 + "</td><td class=\"Netherlands" + TypeJ + "Signkm1\">" + km1 + "</td></tr>"
					NetherlandsSignText = NetherlandsSignText + "<tr><td class=\"Netherlands" + TypeJ + "SignCity2\">" + City2 + "</td><td class=\"Netherlands" + TypeJ + "Signkm2\">" + km2 + "</td></tr>"
				}
			else
				{
					NetherlandsSignText = NetherlandsSignText + "<tr><td class=\"Netherlands" + TypeJ + "SignCity\">" + City1 + "</td><td class=\"Netherlands" + TypeJ + "Signkm\">" + km1 + "</td></tr>"
				}
		NetherlandsSignText = NetherlandsSignText + "</table>"

		if (SaveOutput == true)
			{
				return NetherlandsSignText;
			}
		else
			{
				document.write(NetherlandsSignText);
			}
	}

function WriteBraille(BrailleObject)
	{
		ResultJ = "<table border='0' cellpadding='0' cellspacing='0' class='nobordertable nopaddingtable'><tr><td nowrap='nowrap'>";
		for (i=0; i<BrailleObject.length; i++)
			{
				// BrailleObject[i].dots (string) is the dots that composed the braille letter.
				// BrailleObject[i].bgcolor (string) is the background color.
				// BrailleObject[i].letter (string) is the hover text.
				if (BrailleObject[i].letter == null)
						{
							TitleJ = "";
						}
					else
						{
							TitleJ = BrailleObject[i].letter;
						}
				if (BrailleObject[i].bgcolor == null)
						{
							BGColorJ = "";
						}
					else
						{
							BGColorJ = " class='BrailleHighlight" + BrailleObject[i].bgcolor + "'";
						}
				ResultJ = ResultJ + "<table border='0' cellpadding='0' cellspacing='0' class='BrailleCell' style='cursor:help; float:left' title='" + TitleJ + "'><tr><td colspan='3' class='BrailleCellNoHover'><img src='images/BrailleVerticalGap.png' /></td></tr><tr>";
				if (BrailleObject[i].dots.indexOf("1") >= 0)
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleDot.png' /></td>"
						}
					else
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleBlank.png' /></td>"
						}
				if (BrailleObject[i].dots.indexOf("4") >= 0)
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleDot.png' /></td>"
						}
					else
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleBlank.png' /></td>"
						}
				ResultJ = ResultJ + "<td rowspan='3' class='BrailleCellNoHover'><img src='images/BrailleHorizontalGap.png' /></td></tr><tr>";
				if (BrailleObject[i].dots.indexOf("2") >= 0)
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleDot.png' /></td>"
						}
					else
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleBlank.png' /></td>"
						}
				if (BrailleObject[i].dots.indexOf("5") >= 0)
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleDot.png' /></td>"
						}
					else
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleBlank.png' /></td>"
						}
				ResultJ = ResultJ + "</tr><tr>";
				if (BrailleObject[i].dots.indexOf("3") >= 0)
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleDot.png' /></td>"
						}
					else
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleBlank.png' /></td>"
						}
				if (BrailleObject[i].dots.indexOf("6") >= 0)
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleDot.png' /></td>"
						}
					else
						{
							ResultJ = ResultJ + "<td" + BGColorJ + "><img src='images/BrailleBlank.png' /></td>"
						}
				ResultJ = ResultJ + "</tr></table>"
			}
		ResultJ = ResultJ + "</td></tr></table>";
		
		document.write(ResultJ);
	}

function WriteH1FooterJ()
	{
		ResultJ = "<p style='clear:both'>&nbsp;</p><table class='MainContentBottom'><tr><td>&nbsp;</td></tr></table></td></tr></table>"
		document.write(ResultJ);
	}

function WritePhotoGroupHeaderJ(GroupJ, TitleJ, FollowJ)
	{
		ResultJ = "<table class='PictureOuterFrame'><tr><td><table class='PictureFrame' border='0' cellspacing='0' cellpadding='0'><tr><td class='PictureTitle'>" + TitleJ + "</td></tr><tr><td class='PictureImage'><p><table class='PictureInstructions' onclick='PhotoGroupEnlargeJ(\"" + GroupJ + "\")'><tr><td>Click on a picture to enlarge it.<br />Click here to enlarge all in this group.</td></tr></table></p>";
		if (FollowJ == true)
			{
				// If this is now the first photo group under a heading, this will make the text associated with the group appear beside it,
				// leaving blank space as necessary after the previous photo group's text if necessary.
				ResultJ = "<p class='PictureClear'>&nbsp;</p>" + ResultJ;
			}
		document.write(ResultJ);
	}

function WritePhotoMiddleHeaderJ(GroupJ, TitleJ)
	{
		ResultJ = "</td></tr><tr><td class='PictureMiddleTitle'>" + TitleJ + "</td></tr><tr><td class='PictureImage'><p><table class='PictureInstructions' onclick='PhotoGroupEnlargeJ(\"" + GroupJ + "\")'><tr><td>Click on a picture to enlarge it.<br />Click here to enlarge all in this group.</td></tr></table></p>"
		document.write(ResultJ);
	}

function WritePhotoGroupFooterJ()
	{
		ResultJ = "</td></tr></table></td></tr></table>";
		document.write(ResultJ);
	}

function WritePhotoJ(GroupJ, FolderJ, ImageJ, CaptionJ, WidthJ, HeightJ)
	{
		if ( typeof WidthJ == 'undefined' || typeof HeightJ == 'undefined' ) {
			WidthJ = 600;
			HeightJ = 450;
		}

		AnchorNameJ = ImageJ.replace(/[^A-Za-z0-9]/g, "");
		ResultJ = "<p><a name=\"Begin" + AnchorNameJ + "\" id=\"Begin" + AnchorNameJ + "\" /><img class=\"PhotoGroup ImgLarge " + GroupJ + "\" id=\"" + AnchorNameJ + "\" src=\"" + FolderJ + "/" + ImageJ + "\" onclick=\"PhotoSizeToggleJ('" + GroupJ + "', '" + AnchorNameJ + "')\" width=\"" + WidthJ + "\" height=\"" + HeightJ + "\" /><a name=\"End" + AnchorNameJ + "\" id=\"End" + AnchorNameJ + "\" />";
		if (CaptionJ != undefined)
			{
				CaptionJ = CaptionJ.replace(/<i>/g, "<span class='PictureCaptionRoman'>");
				CaptionJ = CaptionJ.replace(/<\/i>/g, "</span>");
				ResultJ = ResultJ + "<br /><span class=\"PictureNote\">" + CaptionJ + "</span>";
			}
		ResultJ = ResultJ + "</p>";
		document.write(ResultJ);
	}

function YolaHighlightJ(SentenceJ, WordJ)
	{
		$(".Sentence" + SentenceJ).addClass("lightyellow");
		$(".Word" + WordJ).addClass("lightgreen");
	}

function YolaUnhighlightJ(SentenceJ, WordJ)
	{
		$(".Sentence" + SentenceJ).removeClass("lightyellow");
		$(".Word" + WordJ).removeClass("lightgreen");
	}

function PageNavigation(DateJ)
	{
		switch ( DateJ )
			{
				case 0:
					$("#PageNavigationSubHeads").html(" ");
					break;
				case 29:
					$("#PageNavigationSubHeads").html("   What I Left Behind       KL 622       Netherlands       Amsterdam       Bicycles       Spreekt u Engels?       Vita Nova       Rĳsttafel       <font color='#ff3300'>I am</font>sterdam       Red Light District       Pass the Dutchie?   ");
					break;
				case 30:
					$("#PageNavigationSubHeads").html("   Anne Frank House       Homomonument       Auschwitz Memorial       Dinner in Leidseplein   ");
					break;
				case 31:
					$("#PageNavigationSubHeads").html("   Missed Opportunity       Scooters       Muiderslot and Muiden       Naarden       Back to A’dam   ");
					break;
				case 1:
					$("#PageNavigationSubHeads").html("   Thalys       Belgium       France       Paris – Gare du nord       To Mom’s Apartment       RER and CDG       Dinner and a Show   ");
					break;
				case 2:
					$("#PageNavigationSubHeads").html("   Le Petit Déjeuner       Driving Ginger       Louvre       The Tower <i>au jour d’hui</i>   ");
					break;
				case 3:
					$("#PageNavigationSubHeads").html("   Eiffel Tower       Arc de triomphe       Champs-Élysées       Les Invalides       Food   ");
					break;
				case 4:
					$("#PageNavigationSubHeads").html("   Musée d’Orsay       Île de la Cité       Île des Cygnes       Pompidou Centre and Stravinsky Fountain       The Tower <i>au jour d’hui</i>   ");
					break;
				case 5:
					$("#PageNavigationSubHeads").html("   Père Lachaise       Sacré-Cœur       Mémorial de la Déportation       Berthillon   ");
					break;
				case 6:
					$("#PageNavigationSubHeads").html("   Panthéon       Catacombes       l’Escargot Montorgueil       The Tower <i>au jour d’hui</i>   ");
					break;
				case 7:
					$("#PageNavigationSubHeads").html("   CDG Terminal 1       Shamrock 521       Ireland       Irish and Yola       Irish Eolotthowghrhoighuay    <nobr>   <img src='IRISH/OGHAM_FEATHER1_TITLE.PNG' style='border: 0pt none;'><img src='IRISH/OGHAM_O_TITLE.PNG' title='O' style='border: 0pt none;'><img src='IRISH/OGHAM_G_TITLE.PNG' title='G' style='border: 0pt none;'><img src='IRISH/OGHAM_H_TITLE.PNG' title='H' style='border: 0pt none;'><img src='IRISH/OGHAM_A_TITLE.PNG' title='A' style='border: 0pt none;'><img src='IRISH/OGHAM_M_TITLE.PNG' title='M' style='border: 0pt none;'><img src='IRISH/OGHAM_FEATHER2_TITLE.PNG' style='border: 0pt none;'>   </nobr> <nobr>   <img src='IRISH/ISL_I_TITLE.PNG' title='I' style='border: 0pt none;'> <img src='IRISH/ISL_S_TITLE.PNG' title='S' style='border: 0pt none;'> <img src='IRISH/ISL_L_TITLE.PNG' title='L' style='border: 0pt none;'>   </nobr>    Driving in Ireland       Rock of Cashel       Blarney Castle       Ogham Stone       O’Shea’s B&B   ");
					break;
				case 8:
					$("#PageNavigationSubHeads").html("   Plan B       Limerick       Cliffs of Moher       Will New7Wonders Never Cease?       Driving Back   ");
					break;
				case 9:
					$("#PageNavigationSubHeads").html("   The Skelligs       Ogham Stone       Beara Peninsula       Kilkenny   ");
					break;
				case 10:
					$("#PageNavigationSubHeads").html("   DL 177       A <u>GOOD</u> <u>DOG</u>       The MLK Tree   ");
					break;
			}
	}

function PageNavigationClick(DateJ)
	{
		switch ( DateJ )
			{
				case 0:
					window.location.href="index.htm";
					break;
				case 29:
					window.location.href="20090829.htm";
					break;
				case 30:
					window.location.href="20090830.htm";
					break;
				case 31:
					window.location.href="20090831.htm";
					break;
				case 1:
					window.location.href="20090901.htm";
					break;
				case 2:
					window.location.href="20090902.htm";
					break;
				case 3:
					window.location.href="20090903.htm";
					break;
				case 4:
					window.location.href="20090904.htm";
					break;
				case 5:
					window.location.href="20090905.htm";
					break;
				case 6:
					window.location.href="20090906.htm";
					break;
				case 7:
					window.location.href="20090907.htm";
					break;
				case 8:
					window.location.href="20090908.htm";
					break;
				case 9:
					window.location.href="20090909.htm";
					break;
				case 10:
					window.location.href="20090910.htm";
					break;
			}
	}