var PictureIconFactor = 0.15;

function PunctuationReplace()
	{
		$("p, li, span, .dropnotetable td").each
			(
			 	function ()
					{
						// Replace "--" with "&ndash"
						$( this ).html( $( this ).html().replace( /\-\-/g, "&ndash;" ) );
						// Obfuscate HTML attributes that must have non-embellished quotes
						// (e.g., temporarily change 'class="ThisClass"' to 'class=%ThisClass%').
						$( this ).html( $( this ).html().replace( /="(.*?)"/g, "=%$1%" ) );
						// Change double quotes at the left side of a word to &ldquo;.
						$( this ).html( $( this ).html().replace( /"\b/g, "&ldquo;" ) );
						// Change double quotes at the right side of a word to &rdquo;.
						$( this ).html( $( this ).html().replace( /\b"/g, "&rdquo;" ) );
						// Change double quotes following a punctuation mark to &rdquo;.
						$( this ).html( $( this ).html().replace( /([\.,\?!;:'’\(\)])"/g, "$1&rdquo;" ) );
						// Unobfuscate the HTML attributes.
						$( this ).html( $( this ).html().replace( /="?%(.*?)%"?/g, "=\"$1\"" ) );
						// Change all single quotes to &lsquo;
						$( this ).html( $( this ).html().replace( /'/g, "&lsquo;" ) );
						// Change single quotes at the right side of a word to &lsquo;.
						$( this ).html( $( this ).html().replace( /‘\b/g, "&rsquo;" ) );
					}
			);
		$("span.forceLSQUO").html( "&lsquo;" );
		$("span.forceRSQUO").html( "&rsquo;" );
		$("span.forceLDQUO").html( "&ldquo;" );
		$("span.forceRDQUO").html( "&rdquo;" );
	}

function LangBoxJ(LanguageJ, TextJ, CleanText, SaveOutput )
	{
		SelectedLangauge = LanguageJ.toUpperCase();
		switch (SelectedLangauge)
			{
				case "AR":
					TitleJ = "Arabic"
					if ( CleanText == true )
						{
							TextJ = RemoveArabicVowels ( TextJ );
						}
					break;
				case "ARC":
					TitleJ = "Aramaic"
					if ( CleanText == true )
						{
							TextJ = RemoveHebrewPoints ( TextJ );
						}
					break;
				case "COP":
					TitleJ = "Coptic"
					break;
				case "EL":
					TitleJ = "Greek"
					break;
				case "EN":
					TitleJ = "English"
					break;
				case "GEZ":
					TitleJ = "Ge'ez"
					break;
				case "HE":
					TitleJ = "Hebrew"
					if ( CleanText == true )
						{
							TextJ = RemoveHebrewPoints ( TextJ );
						}
					break;
				case "HY":
					TitleJ = "Armenian"
					break;
				case "IPA":
					TitleJ = "International Phonetic Alphabet"
					break;
				case "LA":
					TitleJ = "Latin"
					if ( CleanText == true )
						{
							TextJ = TextJ.replace( /u/g, "v" );
							TextJ = TextJ.replace( /U/g, "V" );
							TextJ = TextJ.replace( /j/g, "i" );
							TextJ = TextJ.replace( /J/g, "I" );
							TextJ = TextJ.replace( /ae/g, "æ" );
							TextJ = TextJ.replace( /A[Ee]/g, "Æ" );
							TextJ = TextJ.replace( /oe/g, "œ" );
							TextJ = TextJ.replace( /O[Ee]/g, "Œ" );
							TextJ = TextJ.replace( /(&[lr]aq)vo;/g, "$1uo;" );
						}
					break;
				case "SYC":
					TitleJ = "Syriac"
					break;
				case "TR":
					TitleJ = "Turkish"
					break;
				case "YI":
					TitleJ = "Yiddish"
					if ( CleanText == true )
						{
							TextJ = RemoveHebrewPoints ( TextJ );
						}
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
		if (SaveOutput == true)
			{
				return ResultJ;
			}
		else
			{
				document.write(ResultJ);
			}
	}

function LangBoxSeriesJ( LanguageArray, SaveOutput )
	{
		LangBoxDisplay = "";
		var i;
		for ( i = 0; i < LanguageArray.length; i++ )
			{
				LangBoxDisplay = LangBoxDisplay + LangBoxJ( LanguageArray[i][0], LanguageArray[i][1], LanguageArray[i][2], true );
			}
		if (SaveOutput == true)
			{
				return LangBoxDisplay;
			}
		else
			{
				document.write(LangBoxDisplay);
			}
	}

function LangBoxReplace ( HolderJ, LanguageArray )
	{
		LangBoxOutput = LangBoxSeriesJ( LanguageArray, true );
		$("p, li, span, .dropnotetable td").each
			(
			 	function ()
					{
						$( this ).html( $( this ).html().replace( HolderJ, LangBoxOutput ) );
					}
			);

	}

function LangBoxSimpleSeriesJ( LanguageArray, SaveOutput )
	{
		LangBoxDisplay = "";
		var i;
		for ( i = 0; i < LanguageArray.length; i++ )
			{
				LangText = LanguageArray[i][1];
				if ( LanguageArray[i][2] == true )
					{
						if ( LanguageArray[i][0] == "HE" )
							{
								LangText = RemoveHebrewPoints ( LangText );
							}
						if ( LanguageArray[i][0] == "AR" )
							{
								LangText = RemoveArabicVowels ( LangText );
							}
					}
				LangBoxDisplay = LangBoxDisplay + "[" + LanguageArray[i][0] + "](" + LangText + ")";
			}
		if (SaveOutput == true)
			{
				return LangBoxDisplay;
			}
		else
			{
				document.write(LangBoxDisplay);
			}
	}

function MeasurementBoxJ(AbbreviationJ, TextJ, FirstJ, SaveOutput)
	{
		SchemaJ = (FirstJ == true) ? "MeasurementText1" : "MeasurementText2";
		SelectedUnit = AbbreviationJ.toUpperCase();
		switch (SelectedUnit)
			{
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
				case "OS":
					TitleJ = "Old Style (Julian Calendar)"
					break;
				case "AM":
					TitleJ = "Anno Mundi (Hebrew Calendar)"
					break;
				case "AH":
					TitleJ = "Anno Hejirae (Islamic Calendar)"
					break;
				
				// currencies
				case "USD":
					TitleJ = "US Dollar"
					break;
				case "NIS":
					TitleJ = "Israeli New Shekels"
					break;
				
				// geographic coordinates
				case "WGS84":
					TitleJ = "World Geodetic System"
					break;
				case "UTM":
					TitleJ = "Universal Transverse Mercator"
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

		if (SaveOutput == true)
			{
				return ResultJ;
			}
		else
			{
				document.write(ResultJ);
			}
	}

function MeasurementBoxSeriesJ( MeasurementArray, SaveOutput )
	{
		MeasurementBoxDisplay = "";
		var i;
		for ( i = 0; i < MeasurementArray.length; i++ )
			{
				FirstJ = ( i == 0 ) ? true : false;
				MeasurementBoxDisplay = MeasurementBoxDisplay + MeasurementBoxJ( MeasurementArray[i][0], MeasurementArray[i][1], FirstJ, true );
			}
		if (SaveOutput == true)
			{
				return MeasurementBoxDisplay;
			}
		else
			{
				document.write(MeasurementBoxDisplay);
			}
	}

function MeasurementBoxReplace ( HolderJ, MeasurementArray )
	{
		MeasurementBoxOutput = MeasurementBoxSeriesJ( MeasurementArray, true );
		$("p, li, span, .dropnotetable td").each
			(
			 	function ()
					{
						$( this ).html( $( this ).html().replace( HolderJ, MeasurementBoxOutput ) );
					}
			);

	}

function RemoveHebrewPoints ( HebrewText )
	{
		HebrewText = HebrewText.replace ( /(5[6-9]|6[0-57-9]|7[134]);/g, "" );
		HebrewText = HebrewText.replace ( /[ְֱֲֳִֵֶַָֹֻּֽֿׁׂ]/g, "" );
		return ( HebrewText );
	}

function RemoveArabicVowels ( ArabicText )
	{
		ArabicText = ArabicText.replace ( /¡[1-8];/g, "" );
		ArabicText = ArabicText.replace ( /[ًٌٍَُِّْ]/g, "" );
		return ( ArabicText );
	}

function WritePageHead (DayJ)
	{
		DayName = [ "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" ];
		
		ShowCalendarJulian = false;
		ShowCalendarCoptic = false;
		ShowCalendarEthiopian = false;
		ShowCalendarBahai = false;
		switch ( DayJ )
			{
				case 2:
					ShowCalendarJulian = true;
					ShowCalendarCoptic = true;
					ShowCalendarEthiopian = true;
					break;
				case 4:
					ShowCalendarJulian = true;
					break;
				case 5:
					ShowCalendarJulian = true;
					break;
				case 6:
					ShowCalendarJulian = true;
					break;
				case 9:
					ShowCalendarJulian = true;
					ShowCalendarBahai = true;
					break;
			}
		
		PageHeadText = "";
		PageHeadText = PageHeadText + "<table class='HeaderBlocks PageHeader' width='100%'>";
		PageHeadText = PageHeadText + "	<tr>";
		PageHeadText = PageHeadText + "		<td class='BlackFrameBoxLeft'><img src='images/block-80.png' /><br /><img src='images/block-80.png' /><br /><img src='images/white.png' width='80' height='10' /></td>";
		PageHeadText = PageHeadText + "		<td width='5%'>";
		PageHeadText = PageHeadText + "";
		PageHeadText = PageHeadText + "			<table class='Calendar'>";
		PageHeadText = PageHeadText + "				<tr>";
		PageHeadText = PageHeadText + "					<td>";
		PageHeadText = PageHeadText + "						<table class='CalendarHeader'>";
		PageHeadText = PageHeadText + "							<tr>";
		PageHeadText = PageHeadText + "								<td>Day<br />  " + DayName[DayJ] + "</td>";
		PageHeadText = PageHeadText + "							</tr>";
		PageHeadText = PageHeadText + "						</table>";
		PageHeadText = PageHeadText + "					</td>";
		PageHeadText = PageHeadText + "					<td>";
		PageHeadText = PageHeadText + "						";
		PageHeadText = PageHeadText + "						<table class='HeaderBlocks'>";
		PageHeadText = PageHeadText + "							<tr>";
		PageHeadText = PageHeadText + "								<td class='MeasurementTableLeft MeasurementDesignator' title='New Style (Gregorian)'>NS<br />      </td>";
		PageHeadText = PageHeadText + "								<td class='CalendarBlock'>";
		PageHeadText = PageHeadText + "									<table class='CalendarGregorian'>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th colspan='7'>October 2010</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th>S</th>";
		PageHeadText = PageHeadText + "											<th>M</th>";
		PageHeadText = PageHeadText + "											<th>T</th>";
		PageHeadText = PageHeadText + "											<th>W</th>";
		PageHeadText = PageHeadText + "											<th>T</th>";
		PageHeadText = PageHeadText + "											<th>F</th>";
		PageHeadText = PageHeadText + "											<th>S</th>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td>1</td>";
		PageHeadText = PageHeadText + "											<td>2</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>3</td>";
		PageHeadText = PageHeadText + "											<td>4</td>";
		PageHeadText = PageHeadText + "											<td class='Day1'>5</td>";
		PageHeadText = PageHeadText + "											<td class='Day2'>6</td>";
		PageHeadText = PageHeadText + "											<td class='Day3'>7</td>";
		PageHeadText = PageHeadText + "											<td class='Day4'>8</td>";
		PageHeadText = PageHeadText + "											<td class='Day5'>9</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td class='Day6'>10</td>";
		PageHeadText = PageHeadText + "											<td class='Day7'>11</td>";
		PageHeadText = PageHeadText + "											<td class='Day8'>12</td>";
		PageHeadText = PageHeadText + "											<td class='Day9'>13</td>";
		PageHeadText = PageHeadText + "											<td class='Day10'>14</td>";
		PageHeadText = PageHeadText + "											<td>15</td>";
		PageHeadText = PageHeadText + "											<td>16</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>17</td>";
		PageHeadText = PageHeadText + "											<td>18</td>";
		PageHeadText = PageHeadText + "											<td>19</td>";
		PageHeadText = PageHeadText + "											<td>20</td>";
		PageHeadText = PageHeadText + "											<td>21</td>";
		PageHeadText = PageHeadText + "											<td>22</td>";
		PageHeadText = PageHeadText + "											<td>23</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>24</td>";
		PageHeadText = PageHeadText + "											<td>25</td>";
		PageHeadText = PageHeadText + "											<td>26</td>";
		PageHeadText = PageHeadText + "											<td>27</td>";
		PageHeadText = PageHeadText + "											<td>28</td>";
		PageHeadText = PageHeadText + "											<td>29</td>";
		PageHeadText = PageHeadText + "											<td>30</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>31</td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "									</table>";
		PageHeadText = PageHeadText + "								</td>";
		PageHeadText = PageHeadText + "								<td></td>";
		PageHeadText = PageHeadText + "								<td class='CalendarBlock'>";
		PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarHebrew Day1 Day2 Day3 Day4'>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th colspan='7'>תשרי ה׳ תשע״א</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th>ו</th>";
		PageHeadText = PageHeadText + "											<th>ה</th>";
		PageHeadText = PageHeadText + "											<th>ד</th>";
		PageHeadText = PageHeadText + "											<th>ג</th>";
		PageHeadText = PageHeadText + "											<th>ב</th>";
		PageHeadText = PageHeadText + "											<th>א</th>";
		PageHeadText = PageHeadText + "											<th>ש</th>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>ב</td>";
		PageHeadText = PageHeadText + "											<td>א</td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>ט</td>";
		PageHeadText = PageHeadText + "											<td>ח</td>";
		PageHeadText = PageHeadText + "											<td>ז</td>";
		PageHeadText = PageHeadText + "											<td>ו</td>";
		PageHeadText = PageHeadText + "											<td>ה</td>";
		PageHeadText = PageHeadText + "											<td>ד</td>";
		PageHeadText = PageHeadText + "											<td>ג</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>טז</td>";
		PageHeadText = PageHeadText + "											<td>טו</td>";
		PageHeadText = PageHeadText + "											<td>יד</td>";
		PageHeadText = PageHeadText + "											<td>יג</td>";
		PageHeadText = PageHeadText + "											<td>יב</td>";
		PageHeadText = PageHeadText + "											<td>יא</td>";
		PageHeadText = PageHeadText + "											<td>י</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>כג</td>";
		PageHeadText = PageHeadText + "											<td>כב</td>";
		PageHeadText = PageHeadText + "											<td>כא</td>";
		PageHeadText = PageHeadText + "											<td>ך</td>";
		PageHeadText = PageHeadText + "											<td>יט</td>";
		PageHeadText = PageHeadText + "											<td>יח</td>";
		PageHeadText = PageHeadText + "											<td>יז</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td class='Day4'>ל</td>";
		PageHeadText = PageHeadText + "											<td class='Day3'>כט</td>";
		PageHeadText = PageHeadText + "											<td class='Day2'>כח</td>";
		PageHeadText = PageHeadText + "											<td class='Day1'>כז</td>";
		PageHeadText = PageHeadText + "											<td>כו</td>";
		PageHeadText = PageHeadText + "											<td>כה</td>";
		PageHeadText = PageHeadText + "											<td>כד</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "									</table>";
		PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarHebrew Day5 Day6 Day7 Day8 Day9 Day10'>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th colspan='7'>חשוך ה׳ תשע״א</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th>ו</th>";
		PageHeadText = PageHeadText + "											<th>ה</th>";
		PageHeadText = PageHeadText + "											<th>ד</th>";
		PageHeadText = PageHeadText + "											<th>ג</th>";
		PageHeadText = PageHeadText + "											<th>ב</th>";
		PageHeadText = PageHeadText + "											<th>א</th>";
		PageHeadText = PageHeadText + "											<th>ש</th>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>ז</td>";
		PageHeadText = PageHeadText + "											<td class='Day10'>ו</td>";
		PageHeadText = PageHeadText + "											<td class='Day9'>ה</td>";
		PageHeadText = PageHeadText + "											<td class='Day8'>ד</td>";
		PageHeadText = PageHeadText + "											<td class='Day7'>ג</td>";
		PageHeadText = PageHeadText + "											<td class='Day6'>ב</td>";
		PageHeadText = PageHeadText + "											<td class='Day5'>א</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>יד</td>";
		PageHeadText = PageHeadText + "											<td>יג</td>";
		PageHeadText = PageHeadText + "											<td>יב</td>";
		PageHeadText = PageHeadText + "											<td>יא</td>";
		PageHeadText = PageHeadText + "											<td>י</td>";
		PageHeadText = PageHeadText + "											<td>ט</td>";
		PageHeadText = PageHeadText + "											<td>ח</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>כא</td>";
		PageHeadText = PageHeadText + "											<td>ך</td>";
		PageHeadText = PageHeadText + "											<td>יט</td>";
		PageHeadText = PageHeadText + "											<td>יח</td>";
		PageHeadText = PageHeadText + "											<td>יז</td>";
		PageHeadText = PageHeadText + "											<td>טז</td>";
		PageHeadText = PageHeadText + "											<td>טו</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>כח</td>";
		PageHeadText = PageHeadText + "											<td>כז</td>";
		PageHeadText = PageHeadText + "											<td>כו</td>";
		PageHeadText = PageHeadText + "											<td>כה</td>";
		PageHeadText = PageHeadText + "											<td>כד</td>";
		PageHeadText = PageHeadText + "											<td>כג</td>";
		PageHeadText = PageHeadText + "											<td>כב</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td>ל</td>";
		PageHeadText = PageHeadText + "											<td>כט</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "									</table>";
		PageHeadText = PageHeadText + "								</td>";
		PageHeadText = PageHeadText + "								<td class='MeasurementTableRight MeasurementDesignator' title='Anno Mundi (Hebrew)'>AM<br />      </td>";
		PageHeadText = PageHeadText + "								<td></td>";
		if ( ShowCalendarCoptic == true )
			{
				PageHeadText = PageHeadText + "								<td class='MeasurementTableLeft MeasurementDesignator' title='Coptic'>C<br />      </td>";
				PageHeadText = PageHeadText + "								<td class='CalendarBlock'>";
				PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarCoptic Day1 Day2 Day3 Day4 Day5 Day6'>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th colspan='7'>Ⲑⲱⲟⲩⲧ ͵ⲁⲯⲕⲋ</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th>Ⲕ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲁ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲃ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲅ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲇ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲉ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲋ</th>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td>ⲁ</td>";	//	1
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>ⲃ</td>";	//	2
				PageHeadText = PageHeadText + "											<td>ⲅ</td>";	//	3
				PageHeadText = PageHeadText + "											<td>ⲇ</td>";	//	4
				PageHeadText = PageHeadText + "											<td>ⲉ</td>";	//	5
				PageHeadText = PageHeadText + "											<td>ⲋ</td>";	//	6
				PageHeadText = PageHeadText + "											<td>ⲍ</td>";	//	7
				PageHeadText = PageHeadText + "											<td>ⲏ</td>";	//	8
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>ⲑ</td>";	//	9
				PageHeadText = PageHeadText + "											<td>ⲓ</td>";	//	10
				PageHeadText = PageHeadText + "											<td>ⲓⲁ</td>";	//	11
				PageHeadText = PageHeadText + "											<td>ⲓⲃ</td>";	//	12
				PageHeadText = PageHeadText + "											<td>ⲓⲅ</td>";	//	13
				PageHeadText = PageHeadText + "											<td>ⲓⲇ</td>";	//	14
				PageHeadText = PageHeadText + "											<td>ⲓⲉ</td>";	//	15
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>ⲓⲋ</td>";	//	16
				PageHeadText = PageHeadText + "											<td>ⲓⲍ</td>";	//	17
				PageHeadText = PageHeadText + "											<td>ⲓⲏ</td>";	//	18
				PageHeadText = PageHeadText + "											<td>ⲓⲑ</td>";	//	19
				PageHeadText = PageHeadText + "											<td>ⲕ</td>";	//	20
				PageHeadText = PageHeadText + "											<td>ⲕⲁ</td>";	//	21
				PageHeadText = PageHeadText + "											<td>ⲕⲃ</td>";	//	22
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>ⲕⲅ</td>";	//	23
				PageHeadText = PageHeadText + "											<td>ⲕⲇ</td>";	//	24
				PageHeadText = PageHeadText + "											<td class='Day1'>ⲕⲉ</td>";	//	25
				PageHeadText = PageHeadText + "											<td class='Day2'>ⲕⲋ</td>";	//	26
				PageHeadText = PageHeadText + "											<td class='Day3'>ⲕⲍ</td>";	//	27
				PageHeadText = PageHeadText + "											<td class='Day4'>ⲕⲏ</td>";	//	28
				PageHeadText = PageHeadText + "											<td class='Day5'>ⲕⲑ</td>";	//	29
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td class='Day6'>ⲗ</td>";	//	30
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "									</table>";
				PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarCoptic Day7 Day8 Day9 Day10'>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th colspan='7'>Ⲡⲁⲱⲡⲉ ͵ⲁⲯⲕⲋ</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th>Ⲕ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲁ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲃ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲅ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲇ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲉ</th>";
				PageHeadText = PageHeadText + "											<th>Ⲋ</th>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td class='Day7'>ⲁ</td>";	//	1
				PageHeadText = PageHeadText + "											<td class='Day8'>ⲃ</td>";	//	2
				PageHeadText = PageHeadText + "											<td class='Day9'>ⲅ</td>";	//	3
				PageHeadText = PageHeadText + "											<td class='Day10'>ⲇ</td>";	//	4
				PageHeadText = PageHeadText + "											<td>ⲉ</td>";	//	5
				PageHeadText = PageHeadText + "											<td>ⲋ</td>";	//	6
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>ⲍ</td>";	//	7
				PageHeadText = PageHeadText + "											<td>ⲏ</td>";	//	8
				PageHeadText = PageHeadText + "											<td>ⲑ</td>";	//	9
				PageHeadText = PageHeadText + "											<td>ⲓ</td>";	//	10
				PageHeadText = PageHeadText + "											<td>ⲓⲁ</td>";	//	11
				PageHeadText = PageHeadText + "											<td>ⲓⲃ</td>";	//	12
				PageHeadText = PageHeadText + "											<td>ⲓⲅ</td>";	//	13
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>ⲓⲇ</td>";	//	14
				PageHeadText = PageHeadText + "											<td>ⲓⲉ</td>";	//	15
				PageHeadText = PageHeadText + "											<td>ⲓⲋ</td>";	//	16
				PageHeadText = PageHeadText + "											<td>ⲓⲍ</td>";	//	17
				PageHeadText = PageHeadText + "											<td>ⲓⲏ</td>";	//	18
				PageHeadText = PageHeadText + "											<td>ⲓⲑ</td>";	//	19
				PageHeadText = PageHeadText + "											<td>ⲕ</td>";	//	20
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>ⲕⲁ</td>";	//	21
				PageHeadText = PageHeadText + "											<td>ⲕⲃ</td>";	//	22
				PageHeadText = PageHeadText + "											<td>ⲕⲅ</td>";	//	23
				PageHeadText = PageHeadText + "											<td>ⲕⲇ</td>";	//	24
				PageHeadText = PageHeadText + "											<td>ⲕⲉ</td>";	//	25
				PageHeadText = PageHeadText + "											<td>ⲕⲋ</td>";	//	26
				PageHeadText = PageHeadText + "											<td>ⲕⲍ</td>";	//	27
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>ⲕⲏ</td>";	//	28
				PageHeadText = PageHeadText + "											<td>ⲕⲑ</td>";	//	29
				PageHeadText = PageHeadText + "											<td>ⲗ</td>";	//	30
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "									</table>";
				PageHeadText = PageHeadText + "								</td>";
			}
		else
			{
				PageHeadText = PageHeadText + "								<td></td>";
				PageHeadText = PageHeadText + "								<td></td>";
			}
		PageHeadText = PageHeadText + "							</tr>";
		PageHeadText = PageHeadText + "							<tr>";
		PageHeadText = PageHeadText + "								<td></td>";
		PageHeadText = PageHeadText + "								<td></td>";
		PageHeadText = PageHeadText + "								<td><img src='images/invisible.gif' width='25' height='25' /></td>";
		PageHeadText = PageHeadText + "								<td></td>";
		PageHeadText = PageHeadText + "								<td></td>";
		PageHeadText = PageHeadText + "								<td><img src='images/invisible.gif' width='25' height='25' /></td>";
		PageHeadText = PageHeadText + "								<td></td>";
		PageHeadText = PageHeadText + "								<td></td>";
		PageHeadText = PageHeadText + "							</tr>";
		PageHeadText = PageHeadText + "							<tr>";
		if ( ShowCalendarJulian == true )
			{
				PageHeadText = PageHeadText + "								<td class='MeasurementTableLeft MeasurementDesignator' title='Old Style (Julian)'>OS<br />      </td>";
				PageHeadText = PageHeadText + "								<td class='CalendarBlock'>";
				PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarJulian Day1 Day2 Day3 Day4 Day5 Day6 Day7 Day8 Day9'>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th colspan='7'>Σεπτέμβριος 2010</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th>Κ</th>";
				PageHeadText = PageHeadText + "											<th>Δ</th>";
				PageHeadText = PageHeadText + "											<th>Τ</th>";
				PageHeadText = PageHeadText + "											<th>Τ</th>";
				PageHeadText = PageHeadText + "											<th>Π</th>";
				PageHeadText = PageHeadText + "											<th>Π</th>";
				PageHeadText = PageHeadText + "											<th>Σ</th>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td>1</td>";
				PageHeadText = PageHeadText + "											<td>2</td>";
				PageHeadText = PageHeadText + "											<td>3</td>";
				PageHeadText = PageHeadText + "											<td>4</td>";
				PageHeadText = PageHeadText + "											<td>5</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>6</td>";
				PageHeadText = PageHeadText + "											<td>7</td>";
				PageHeadText = PageHeadText + "											<td>8</td>";
				PageHeadText = PageHeadText + "											<td>9</td>";
				PageHeadText = PageHeadText + "											<td>10</td>";
				PageHeadText = PageHeadText + "											<td>11</td>";
				PageHeadText = PageHeadText + "											<td>12</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>13</td>";
				PageHeadText = PageHeadText + "											<td>14</td>";
				PageHeadText = PageHeadText + "											<td>15</td>";
				PageHeadText = PageHeadText + "											<td>16</td>";
				PageHeadText = PageHeadText + "											<td>17</td>";
				PageHeadText = PageHeadText + "											<td>18</td>";
				PageHeadText = PageHeadText + "											<td>19</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>20</td>";
				PageHeadText = PageHeadText + "											<td>21</td>";
				PageHeadText = PageHeadText + "											<td class='Day1'>22</td>";
				PageHeadText = PageHeadText + "											<td class='Day2'>23</td>";
				PageHeadText = PageHeadText + "											<td class='Day3'>24</td>";
				PageHeadText = PageHeadText + "											<td class='Day4'>25</td>";
				PageHeadText = PageHeadText + "											<td class='Day5'>26</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td class='Day6'>27</td>";
				PageHeadText = PageHeadText + "											<td class='Day7'>28</td>";
				PageHeadText = PageHeadText + "											<td class='Day8'>29</td>";
				PageHeadText = PageHeadText + "											<td class='Day9'>30</td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "									</table>";
				PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarJulian Day10'>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th colspan='7'>Οκτώβριος 2010</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th>Κ</th>";
				PageHeadText = PageHeadText + "											<th>Δ</th>";
				PageHeadText = PageHeadText + "											<th>Τ</th>";
				PageHeadText = PageHeadText + "											<th>Τ</th>";
				PageHeadText = PageHeadText + "											<th>Π</th>";
				PageHeadText = PageHeadText + "											<th>Π</th>";
				PageHeadText = PageHeadText + "											<th>Σ</th>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td class='Day10'>1</td>";
				PageHeadText = PageHeadText + "											<td>2</td>";
				PageHeadText = PageHeadText + "											<td>3</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>4</td>";
				PageHeadText = PageHeadText + "											<td>5</td>";
				PageHeadText = PageHeadText + "											<td>6</td>";
				PageHeadText = PageHeadText + "											<td>7</td>";
				PageHeadText = PageHeadText + "											<td>8</td>";
				PageHeadText = PageHeadText + "											<td>9</td>";
				PageHeadText = PageHeadText + "											<td>10</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>11</td>";
				PageHeadText = PageHeadText + "											<td>12</td>";
				PageHeadText = PageHeadText + "											<td>13</td>";
				PageHeadText = PageHeadText + "											<td>14</td>";
				PageHeadText = PageHeadText + "											<td>15</td>";
				PageHeadText = PageHeadText + "											<td>16</td>";
				PageHeadText = PageHeadText + "											<td>17</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>18</td>";
				PageHeadText = PageHeadText + "											<td>19</td>";
				PageHeadText = PageHeadText + "											<td>20</td>";
				PageHeadText = PageHeadText + "											<td>21</td>";
				PageHeadText = PageHeadText + "											<td>22</td>";
				PageHeadText = PageHeadText + "											<td>23</td>";
				PageHeadText = PageHeadText + "											<td>24</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>25</td>";
				PageHeadText = PageHeadText + "											<td>26</td>";
				PageHeadText = PageHeadText + "											<td>27</td>";
				PageHeadText = PageHeadText + "											<td>28</td>";
				PageHeadText = PageHeadText + "											<td>29</td>";
				PageHeadText = PageHeadText + "											<td>30</td>";
				PageHeadText = PageHeadText + "											<td>31</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "									</table>";
				PageHeadText = PageHeadText + "								</td>";
			}
		else
			{
				PageHeadText = PageHeadText + "								<td></td>";
				PageHeadText = PageHeadText + "								<td></td>";
			}
		PageHeadText = PageHeadText + "								<td></td>";
		PageHeadText = PageHeadText + "								<td class='CalendarBlock'>";
		PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarIslamic Day1 Day2 Day3 Day4'>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th colspan='7'>شوال ١٤٣١</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th>ج</th>";
		PageHeadText = PageHeadText + "											<th>خ</th>";
		PageHeadText = PageHeadText + "											<th>ا</th>";
		PageHeadText = PageHeadText + "											<th>ث</th>";
		PageHeadText = PageHeadText + "											<th>ا</th>";
		PageHeadText = PageHeadText + "											<th>ا</th>";
		PageHeadText = PageHeadText + "											<th>س</th>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>١</td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>٨</td>";
		PageHeadText = PageHeadText + "											<td>٧</td>";
		PageHeadText = PageHeadText + "											<td>٦</td>";
		PageHeadText = PageHeadText + "											<td>٥</td>";
		PageHeadText = PageHeadText + "											<td>٤</td>";
		PageHeadText = PageHeadText + "											<td>٣</td>";
		PageHeadText = PageHeadText + "											<td>٢</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>١٥</td>";
		PageHeadText = PageHeadText + "											<td>١٤</td>";
		PageHeadText = PageHeadText + "											<td>١٣</td>";
		PageHeadText = PageHeadText + "											<td>١٢</td>";
		PageHeadText = PageHeadText + "											<td>١١</td>";
		PageHeadText = PageHeadText + "											<td>١٠</td>";
		PageHeadText = PageHeadText + "											<td>٩</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>٢٢</td>";
		PageHeadText = PageHeadText + "											<td>٢١</td>";
		PageHeadText = PageHeadText + "											<td>٢٠</td>";
		PageHeadText = PageHeadText + "											<td>١٩</td>";
		PageHeadText = PageHeadText + "											<td>١٨</td>";
		PageHeadText = PageHeadText + "											<td>١٧</td>";
		PageHeadText = PageHeadText + "											<td>١٦</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td class='Day4'>٢٩</td>";
		PageHeadText = PageHeadText + "											<td class='Day3'>٢٨</td>";
		PageHeadText = PageHeadText + "											<td class='Day2'>٢٧</td>";
		PageHeadText = PageHeadText + "											<td class='Day1'>٢٦</td>";
		PageHeadText = PageHeadText + "											<td>٢٥</td>";
		PageHeadText = PageHeadText + "											<td>٢٤</td>";
		PageHeadText = PageHeadText + "											<td>٢٣</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "									</table>";
		PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarIslamic Day5 Day6 Day7 Day8 Day9 Day10'>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th colspan='7'>ذو القعدة ١٤٣١</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<th>ج</th>";
		PageHeadText = PageHeadText + "											<th>خ</th>";
		PageHeadText = PageHeadText + "											<th>ا</th>";
		PageHeadText = PageHeadText + "											<th>ث</th>";
		PageHeadText = PageHeadText + "											<th>ا</th>";
		PageHeadText = PageHeadText + "											<th>ا</th>";
		PageHeadText = PageHeadText + "											<th>س</th>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>٧</td>";
		PageHeadText = PageHeadText + "											<td class='Day10'>٦</td>";
		PageHeadText = PageHeadText + "											<td class='Day9'>٥</td>";
		PageHeadText = PageHeadText + "											<td class='Day8'>٤</td>";
		PageHeadText = PageHeadText + "											<td class='Day7'>٣</td>";
		PageHeadText = PageHeadText + "											<td class='Day6'>٢</td>";
		PageHeadText = PageHeadText + "											<td class='Day5'>١</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>١٤</td>";
		PageHeadText = PageHeadText + "											<td>١٣</td>";
		PageHeadText = PageHeadText + "											<td>١٢</td>";
		PageHeadText = PageHeadText + "											<td>١١</td>";
		PageHeadText = PageHeadText + "											<td>١٠</td>";
		PageHeadText = PageHeadText + "											<td>٩</td>";
		PageHeadText = PageHeadText + "											<td>٨</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>٢١</td>";
		PageHeadText = PageHeadText + "											<td>٢٠</td>";
		PageHeadText = PageHeadText + "											<td>١٩</td>";
		PageHeadText = PageHeadText + "											<td>١٨</td>";
		PageHeadText = PageHeadText + "											<td>١٧</td>";
		PageHeadText = PageHeadText + "											<td>١٦</td>";
		PageHeadText = PageHeadText + "											<td>١٥</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td>٢٨</td>";
		PageHeadText = PageHeadText + "											<td>٢٧</td>";
		PageHeadText = PageHeadText + "											<td>٢٦</td>";
		PageHeadText = PageHeadText + "											<td>٢٥</td>";
		PageHeadText = PageHeadText + "											<td>٢٤</td>";
		PageHeadText = PageHeadText + "											<td>٢٣</td>";
		PageHeadText = PageHeadText + "											<td>٢٢</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "										<tr>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td></td>";
		PageHeadText = PageHeadText + "											<td>٣٠</td>";
		PageHeadText = PageHeadText + "											<td>٢٩</td>";
		PageHeadText = PageHeadText + "										</tr>";
		PageHeadText = PageHeadText + "									</table>";
		PageHeadText = PageHeadText + "								</td>";
		PageHeadText = PageHeadText + "								<td class='MeasurementTableRight MeasurementDesignator' title='Anno Hejirae (Islamic)'>AH<br />      </td>";
		PageHeadText = PageHeadText + "								<td></td>";
		if ( ShowCalendarEthiopian == true )
			{
				PageHeadText = PageHeadText + "								<td class='MeasurementTableLeft MeasurementDesignator' title='Ethiopian'>E<br />      </td>";
				PageHeadText = PageHeadText + "								<td class='CalendarBlock'>";
				PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarEthiopian Day1 Day2 Day3 Day4 Day5 Day6'>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th colspan='7'>መስከረም ፳፻፫</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th>አ</th>";
				PageHeadText = PageHeadText + "											<th>ለ</th>";
				PageHeadText = PageHeadText + "											<th>ማ</th>";
				PageHeadText = PageHeadText + "											<th>ረ</th>";
				PageHeadText = PageHeadText + "											<th>ሐ</th>";
				PageHeadText = PageHeadText + "											<th>ዓ</th>";
				PageHeadText = PageHeadText + "											<th>ቅ</th>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td>፩</td>";	//	1
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>፪</td>";	//	2
				PageHeadText = PageHeadText + "											<td>፫</td>";	//	3
				PageHeadText = PageHeadText + "											<td>፬</td>";	//	4
				PageHeadText = PageHeadText + "											<td>፭</td>";	//	5
				PageHeadText = PageHeadText + "											<td>፮</td>";	//	6
				PageHeadText = PageHeadText + "											<td>፯</td>";	//	7
				PageHeadText = PageHeadText + "											<td>፰</td>";	//	8
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>፱</td>";	//	9
				PageHeadText = PageHeadText + "											<td>፲</td>";	//	10
				PageHeadText = PageHeadText + "											<td>፲፩</td>";	//	11
				PageHeadText = PageHeadText + "											<td>፲፪</td>";	//	12
				PageHeadText = PageHeadText + "											<td>፲፫</td>";	//	13
				PageHeadText = PageHeadText + "											<td>፲፬</td>";	//	14
				PageHeadText = PageHeadText + "											<td>፲፭</td>";	//	15
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>፲፮</td>";	//	16
				PageHeadText = PageHeadText + "											<td>፲፯</td>";	//	17
				PageHeadText = PageHeadText + "											<td>፲፰</td>";	//	18
				PageHeadText = PageHeadText + "											<td>፲፱</td>";	//	19
				PageHeadText = PageHeadText + "											<td>፳</td>";	//	20
				PageHeadText = PageHeadText + "											<td>፳፩</td>";	//	21
				PageHeadText = PageHeadText + "											<td>፳፪</td>";	//	22
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>፳፫</td>";	//	23
				PageHeadText = PageHeadText + "											<td>፳፬</td>";	//	24
				PageHeadText = PageHeadText + "											<td class='Day1'>፳፭</td>";	//	25
				PageHeadText = PageHeadText + "											<td class='Day2'>፳፮</td>";	//	26
				PageHeadText = PageHeadText + "											<td class='Day3'>፳፯</td>";	//	27
				PageHeadText = PageHeadText + "											<td class='Day4'>፳፰</td>";	//	28
				PageHeadText = PageHeadText + "											<td class='Day5'>፳፱</td>";	//	29
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td class='Day6'>፴</td>";	//	30
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "									</table>";
				PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarEthiopian Day7 Day8 Day9 Day10'>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th colspan='7'>ጥቅምት ፳፻፫</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th>አ</th>";
				PageHeadText = PageHeadText + "											<th>ለ</th>";
				PageHeadText = PageHeadText + "											<th>ማ</th>";
				PageHeadText = PageHeadText + "											<th>ረ</th>";
				PageHeadText = PageHeadText + "											<th>ሐ</th>";
				PageHeadText = PageHeadText + "											<th>ዓ</th>";
				PageHeadText = PageHeadText + "											<th>ቅ</th>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td class='Day7'>፩</td>";	//	1
				PageHeadText = PageHeadText + "											<td class='Day8'>፪</td>";	//	2
				PageHeadText = PageHeadText + "											<td class='Day9'>፫</td>";	//	3
				PageHeadText = PageHeadText + "											<td class='Day10'>፬</td>";	//	4
				PageHeadText = PageHeadText + "											<td>፭</td>";	//	5
				PageHeadText = PageHeadText + "											<td>፮</td>";	//	6
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>፯</td>";	//	7
				PageHeadText = PageHeadText + "											<td>፰</td>";	//	8
				PageHeadText = PageHeadText + "											<td>፱</td>";	//	9
				PageHeadText = PageHeadText + "											<td>፲</td>";	//	10
				PageHeadText = PageHeadText + "											<td>፲፩</td>";	//	11
				PageHeadText = PageHeadText + "											<td>፲፪</td>";	//	12
				PageHeadText = PageHeadText + "											<td>፲፫</td>";	//	13
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>፲፬</td>";	//	14
				PageHeadText = PageHeadText + "											<td>፲፭</td>";	//	15
				PageHeadText = PageHeadText + "											<td>፲፮</td>";	//	16
				PageHeadText = PageHeadText + "											<td>፲፯</td>";	//	17
				PageHeadText = PageHeadText + "											<td>፲፰</td>";	//	18
				PageHeadText = PageHeadText + "											<td>፲፱</td>";	//	19
				PageHeadText = PageHeadText + "											<td>፳</td>";	//	20
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>፳፩</td>";	//	21
				PageHeadText = PageHeadText + "											<td>፳፪</td>";	//	22
				PageHeadText = PageHeadText + "											<td>፳፫</td>";	//	23
				PageHeadText = PageHeadText + "											<td>፳፬</td>";	//	24
				PageHeadText = PageHeadText + "											<td>፳፭</td>";	//	25
				PageHeadText = PageHeadText + "											<td>፳፮</td>";	//	26
				PageHeadText = PageHeadText + "											<td>፳፯</td>";	//	27
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>፳፰</td>";	//	28
				PageHeadText = PageHeadText + "											<td>፳፱</td>";	//	29
				PageHeadText = PageHeadText + "											<td>፴</td>";	//	30
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "									</table>";
				PageHeadText = PageHeadText + "								</td>";
			}
		else
			{
				PageHeadText = PageHeadText + "								<td></td>";
				PageHeadText = PageHeadText + "								<td></td>";
			}
		if ( ShowCalendarBahai == true )
			{
				PageHeadText = PageHeadText + "								<td class='CalendarBlock'>";
				PageHeadText = PageHeadText + "									<table class='CalendarHide CalendarBahai Day1 Day2 Day3 Day4 Day5 Day6 Day7 Day8 Day9 Day10'>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th colspan='7'>مشية ١٦٧</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<th>ا</th>";
				PageHeadText = PageHeadText + "											<th>ا</th>";
				PageHeadText = PageHeadText + "											<th>ع</th>";
				PageHeadText = PageHeadText + "											<th>ف</th>";
				PageHeadText = PageHeadText + "											<th>ك</th>";
				PageHeadText = PageHeadText + "											<th>ج</th>";
				PageHeadText = PageHeadText + "											<th>ج</th>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>٥</td>";
				PageHeadText = PageHeadText + "											<td>٤</td>";
				PageHeadText = PageHeadText + "											<td>٣</td>";
				PageHeadText = PageHeadText + "											<td>٢</td>";
				PageHeadText = PageHeadText + "											<td>١</td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "											<td></td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td class='Day4'>١٢</td>";
				PageHeadText = PageHeadText + "											<td class='Day3'>١١</td>";
				PageHeadText = PageHeadText + "											<td class='Day2'>١٠</td>";
				PageHeadText = PageHeadText + "											<td class='Day1'>٩</td>";
				PageHeadText = PageHeadText + "											<td>٨</td>";
				PageHeadText = PageHeadText + "											<td>٧</td>";
				PageHeadText = PageHeadText + "											<td>٦</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "										<tr>";
				PageHeadText = PageHeadText + "											<td>١٩</td>";
				PageHeadText = PageHeadText + "											<td class='Day10'>١٨</td>";
				PageHeadText = PageHeadText + "											<td class='Day9'>١٧</td>";
				PageHeadText = PageHeadText + "											<td class='Day8'>١٦</td>";
				PageHeadText = PageHeadText + "											<td class='Day7'>١٥</td>";
				PageHeadText = PageHeadText + "											<td class='Day6'>١٤</td>";
				PageHeadText = PageHeadText + "											<td class='Day5'>١٣</td>";
				PageHeadText = PageHeadText + "										</tr>";
				PageHeadText = PageHeadText + "									</table>";
				PageHeadText = PageHeadText + "								</td>";
				PageHeadText = PageHeadText + "								<td id='BahaiDesignator' class='MeasurementTableRight MeasurementDesignator' title='Bahai Era'>BE<br />      </td>";
			}
		else
			{
				PageHeadText = PageHeadText + "								<td></td>";
				PageHeadText = PageHeadText + "								<td></td>";
			}
		PageHeadText = PageHeadText + "							</tr>";
		PageHeadText = PageHeadText + "						</table>";
		PageHeadText = PageHeadText + "";
		PageHeadText = PageHeadText + "					</td>";
		PageHeadText = PageHeadText + "				</tr>";
		PageHeadText = PageHeadText + "			</table>";
		PageHeadText = PageHeadText + "";
		PageHeadText = PageHeadText + "		</td>";
		PageHeadText = PageHeadText + "		<td></td>";
		PageHeadText = PageHeadText + "		<td class='FrameBoxRight VAlignBottom'><img src='images/white.png' width='80' height='10' /></td>";
		PageHeadText = PageHeadText + "		<td></td>";
		PageHeadText = PageHeadText + "		<td>";
		PageHeadText = PageHeadText + "			<table id='TOC'>";
		PageHeadText = PageHeadText + "			</table>";
		PageHeadText = PageHeadText + "		</td>";
		PageHeadText = PageHeadText + "	</tr>";
		PageHeadText = PageHeadText + "	<tr>";
		PageHeadText = PageHeadText + "		<td class='FrameBoxCorner BlackFrameBoxBottomLeft'></td>";
		PageHeadText = PageHeadText + "		<td class='BlackFrameBoxBottom'></td>";
		PageHeadText = PageHeadText + "		<td width='10'><img src='images/white.png' width='10' height='80' /></td>";
		PageHeadText = PageHeadText + "		<td width='80'><img src='images/block-80.png' /></td>";
		PageHeadText = PageHeadText + "		<td width='10'><img src='images/white.png' width='10' height='80' /></td>";
		PageHeadText = PageHeadText + "		<td class='BlackFrameBoxBottom' align='right'><img src='images/white.png' width='10' height='80' /><img src='images/block-80.png' /><img src='images/white.png' width='10' height='80' /><img src='images/invisible.gif' width='120' height='80' /></td>";
		PageHeadText = PageHeadText + "	</tr>";
		PageHeadText = PageHeadText + "	</table>";
		
		document.write(PageHeadText);
		$( "#BahaiDesignator" ).attr( "title", "Baha'i Era" );		// To get in the apostrophe, which couldn't be escaped above.
		$( "table.Day" + DayJ ).removeClass( "CalendarHide" );
		$( "td.Day" + DayJ ).addClass( "CalendarToday" );
		$( "td.CalendarBlockOptional").hide();
	}

function WriteHeader ( EnglishText, HebrewText, ArabicText, ReligionIcon, RemoveVowels, SaveOutput )
	{

		if ( RemoveVowels == true )
			{
				HebrewText = RemoveHebrewPoints ( HebrewText );
				ArabicText = RemoveArabicVowels ( ArabicText );
			}
		
		EnglishTextID = EnglishText.replace ( /\s/g, "" );
		EnglishHeader = EnglishText.replace ( /([A-Z0-9])/g, "<span class='HeaderBlockEnglishCapital'>$1</span>" );
		
		HeaderText = "";
		HeaderText = HeaderText + "<table class='HeaderBlocks HeaderSection' width='100%'>";
		HeaderText = HeaderText + "	<tr>";
		HeaderText = HeaderText + "		<td width='330'>";
		HeaderText = HeaderText + "		<a name='{{AnchorName}}'></a>";
		HeaderText = HeaderText + "			<table class='HeaderBlocks'>";
		HeaderText = HeaderText + "				<tr>";
		HeaderText = HeaderText + "					<td class='Square'></td>";
		HeaderText = HeaderText + "					<td class='Square'></td>";
		HeaderText = HeaderText + "					<td class='Square'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'>{{ReligionIcon}}</td>";
		HeaderText = HeaderText + "				</tr>";
		HeaderText = HeaderText + "			</table>";
		HeaderText = HeaderText + "		</td>";
		HeaderText = HeaderText + "		<td class='BlackFrameBoxTop'></td>";
		HeaderText = HeaderText + "	</tr>";
		HeaderText = HeaderText + "</table>";
		HeaderText = HeaderText + "<table class='HeaderBlocks' width='100%'>";
		HeaderText = HeaderText + "	<tr>";
		HeaderText = HeaderText + "		<td width='400'>";
		HeaderText = HeaderText + "			<table class='HeaderBlocks'>";
		HeaderText = HeaderText + "				<tr>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "					<td class='Square'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "				</tr>";
		HeaderText = HeaderText + "			</table>";
		HeaderText = HeaderText + "		</td>";
		HeaderText = HeaderText + "		<td class='HeaderBlockHebrew'>{{HebrewText}}</td>";
		HeaderText = HeaderText + "		<td width='240'>";
		HeaderText = HeaderText + "			<table class='HeaderBlocks'>";
		HeaderText = HeaderText + "				<tr>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "					<td class='Square'></td>";
		HeaderText = HeaderText + "				</tr>";
		HeaderText = HeaderText + "			</table>";
		HeaderText = HeaderText + "		</td>";
		HeaderText = HeaderText + "	</tr>";
		HeaderText = HeaderText + "</table>";
		HeaderText = HeaderText + "<table class='HeaderBlocks' width='100%'>";
		HeaderText = HeaderText + "	<tr>";
		HeaderText = HeaderText + "		<td width='240'>";
		HeaderText = HeaderText + "			<table class='HeaderBlocks'>";
		HeaderText = HeaderText + "				<tr>";
		HeaderText = HeaderText + "					<td class='Square'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "				</tr>";
		HeaderText = HeaderText + "			</table>";
		HeaderText = HeaderText + "		</td>";
		HeaderText = HeaderText + "		<td class='HeaderBlockArabic'>{{ArabicText}}</td>";
		HeaderText = HeaderText + "		<td width='160'>";
		HeaderText = HeaderText + "			<table class='HeaderBlocks'>";
		HeaderText = HeaderText + "				<tr>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "				</tr>";
		HeaderText = HeaderText + "			</table>";
		HeaderText = HeaderText + "		</td>";
		HeaderText = HeaderText + "	</tr>";
		HeaderText = HeaderText + "</table>";
		HeaderText = HeaderText + "<table class='HeaderBlocks' width='100%'>";
		HeaderText = HeaderText + "	<tr>";
		HeaderText = HeaderText + "		<td width='160'>";
		HeaderText = HeaderText + "			<table class='HeaderBlocks'>";
		HeaderText = HeaderText + "				<tr>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "				</tr>";
		HeaderText = HeaderText + "			</table>";
		HeaderText = HeaderText + "		</td>";
		HeaderText = HeaderText + "		<td rowspan='2' class='HeaderBlockEnglish'><span class='HeaderBlockEnglishText'>{{EnglishHeader}}</span></td>";
		HeaderText = HeaderText + "	</tr>";
		HeaderText = HeaderText + "	<tr>";
		HeaderText = HeaderText + "		<td width='160'>";
		HeaderText = HeaderText + "			<table class='HeaderBlocks'>";
		HeaderText = HeaderText + "				<tr>";
		HeaderText = HeaderText + "					<td class='Square'></td>";
		HeaderText = HeaderText + "					<td class='Square Block'></td>";
		HeaderText = HeaderText + "				</tr>";
		HeaderText = HeaderText + "			</table>";
		HeaderText = HeaderText + "		</td>";
		HeaderText = HeaderText + "	</tr>";
		HeaderText = HeaderText + "</table>";

		TOCText = "";
		TOCText = TOCText + "<tr>";
		TOCText = TOCText + "	<th align='right'><a href='#{{AnchorName}}'>{{EnglishText}}</a></th>";
		TOCText = TOCText + "	<td align='center'>{{TOCReligionIconImg}}</td>";
		TOCText = TOCText + "</tr>";

		switch ( ReligionIcon )
			{
				case "B":
					ReligionIconImg = "<img src='images/ReligionBahai.jpg' />"
					TOCReligionIconImg = "<img src='images/ReligionBahai.jpg' width='25' height='25' />"
					break;
				case "C":
					ReligionIconImg = "<img src='images/ReligionChristianity.jpg' />"
					TOCReligionIconImg = "<img src='images/ReligionChristianity.jpg' width='19' height='25' />"
					break;
				case "D":
					ReligionIconImg = "<img src='images/ReligionDruze.jpg' />"
					TOCReligionIconImg = "<img src='images/ReligionDruze.jpg' width='25' height='24' />"
					break;
				case "I":
					ReligionIconImg = "<img src='images/ReligionIslam.jpg' />"
					TOCReligionIconImg = "<img src='images/ReligionIslam.jpg' width='24' height='25' />"
					break;
				case "J":
					ReligionIconImg = "<img src='images/ReligionJudaism.jpg' />"
					TOCReligionIconImg = "<img src='images/ReligionJudaism.jpg' width='23' height='25' />"
					break;
				default:
					ReligionIconImg = ""
					TOCReligionIconImg = ""
					break;
			}
		
		HeaderText = HeaderText.replace ( /{{ReligionIcon}}/, ReligionIconImg );
		HeaderText = HeaderText.replace ( /{{HebrewText}}/, HebrewText );
		HeaderText = HeaderText.replace ( /{{ArabicText}}/, ArabicText );
		HeaderText = HeaderText.replace ( /{{EnglishHeader}}/, EnglishHeader );
		HeaderText = HeaderText.replace ( /{{AnchorName}}/, EnglishTextID );
		
		TOCText = TOCText.replace ( /{{AnchorName}}/, EnglishTextID )
		TOCText = TOCText.replace ( /{{EnglishText}}/, EnglishText )
		TOCText = TOCText.replace ( /{{TOCReligionIconImg}}/, TOCReligionIconImg )
		
		if (SaveOutput == true)
			{
				return HeaderText;
			}
		else
			{
				document.write(HeaderText);
				$("#TOC").append ( TOCText );
			}
			
	}

function WritePictureFrame ( ContentID, SaveOutput, PortionOnly )
	{
		PictureFrameTextTop = "";
		PictureFrameTextBottom = "";
		PictureFrameTextTop = PictureFrameTextTop + "<table class='HeaderBlocks' width='100%'>";
		PictureFrameTextTop = PictureFrameTextTop + "	<tr>";
		PictureFrameTextTop = PictureFrameTextTop + "		<td class='FrameBoxCorner FrameBoxTopLeft'></td>";
		PictureFrameTextTop = PictureFrameTextTop + "		<td class='FrameBoxTop' align='right'><img src='images/white.png' width='10' height='80' /><img src='images/block-80.png' /></td>";
		PictureFrameTextTop = PictureFrameTextTop + "		<td class='FrameBoxCorner FrameBoxTopRight'><img src='images/block-80.png' /></td>";
		PictureFrameTextTop = PictureFrameTextTop + "	</tr>";
		PictureFrameTextTop = PictureFrameTextTop + "	<tr>";
		PictureFrameTextTop = PictureFrameTextTop + "		<td class='FrameBoxLeft VAlignMiddle'><img src='images/white.png' width='80' height='10' /><br /><img src='images/block-80.png' /><br /><img src='images/white.png' width='80' height='10' /></td>";
		PictureFrameTextTop = PictureFrameTextTop + "		<td class='ContentArea' id='{{ContentID}}' >";
		PictureFrameTextBottom = PictureFrameTextBottom + "		</td>";
		PictureFrameTextBottom = PictureFrameTextBottom + "		<td class='FrameBoxRight'><img src='images/block-80.png' /><br /><img src='images/white.png' width='80' height='10' /></td>";
		PictureFrameTextBottom = PictureFrameTextBottom + "	</tr>";
		PictureFrameTextBottom = PictureFrameTextBottom + "	<tr>";
		PictureFrameTextBottom = PictureFrameTextBottom + "		<td class='FrameBoxCorner FrameBoxBottomLeft'><img src='images/block-80.png' /></td>";
		PictureFrameTextBottom = PictureFrameTextBottom + "		<td class='FrameBoxBottom'>";
		PictureFrameTextBottom = PictureFrameTextBottom + "			<table class='HeaderBlocks' width='100%'>";
		PictureFrameTextBottom = PictureFrameTextBottom + "				<tr>";
		PictureFrameTextBottom = PictureFrameTextBottom + "					<td><img src='images/block-80.png' /><img src='images/white.png' width='10' height='80' /></td>";
		PictureFrameTextBottom = PictureFrameTextBottom + "					<td align='right'><img src='images/white.png' width='10' height='80' /><img src='images/block-80.png' /><img src='images/white.png' width='10' height='80' /><img src='images/invisible.gif' width='90' height='80' /></td>";
		PictureFrameTextBottom = PictureFrameTextBottom + "				</tr>";
		PictureFrameTextBottom = PictureFrameTextBottom + "			</table>";
		PictureFrameTextBottom = PictureFrameTextBottom + "		</td>";
		PictureFrameTextBottom = PictureFrameTextBottom + "		<td class='FrameBoxCorner FrameBoxBottomRight'></td>";
		PictureFrameTextBottom = PictureFrameTextBottom + "	</tr>";
		PictureFrameTextBottom = PictureFrameTextBottom + "</table>";
		
		if ( PortionOnly == "Top" )
			{
				PictureFrameText = PictureFrameTextTop;
			}
		else if ( PortionOnly == "Bottom" )
			{
				PictureFrameText = PictureFrameTextBottom;
			}
		else
			{
				PictureFrameText = PictureFrameTextTop + PictureFrameTextBottom;
			}
		
		PictureFrameText = PictureFrameText.replace( /{{ContentID}}/, ContentID );
		
		if (SaveOutput == true)
			{
				return PictureFrameText;
			}
		else
			{
				document.write(PictureFrameText);
			}
			
	}

function WritePictureGroup ( IDJ, TitleJ, DefaultFolderJ, PictureList, SaveOutput )
	{
		/*
		HERE'S AN ILLUSTRATION OF THE STRUCTURE OF THE PictureList OBJECT:
			PictureList =
				[
					{
						image: "Most Basic Picture.JPG",
						caption: "Picture Caption"
					},
					{
						image: "Elaborate Picture.JPG",
						caption: "Picture Caption with {{L1}} included||This part after the two pipe symbols will appear as a {{L2}}",
						folder: "AlternateFolder",
						L1: [ [ "EN", "linguistic translation" ], [ "ES", "traducción de la lengua" ] ],
						L2: [ [ "EN", "caption addendum" ], [ "ES", "parte extra del subtítulo" ] ]
					},
					{
						image: "Vertical Picture.JPG",
						orientation: "V"
					},
					{
						image: "Ticket Scan (or other odd size).JPG",
						orientation: "O",
						width: 200,
						height: 250
					},
					{
						end: true,
						explanation: "This item exists so I don't have to remember to remove the comma after the last item in the list"
					}
				];

		*/
		GroupTop = "";
		GroupMiddle = "";
		GroupCaption = "";
		GroupBottom = "";
		
		var i;
		for ( i = 0; i < PictureList.length; i++ )
			{
				if ( PictureList[i].image != null )
					{
						if ( PictureList[i].folder != null )
							{
								ThisFolder = PictureList[i].folder;
							}
						else
							{
								ThisFolder = DefaultFolderJ;
							}
						if ( PictureList[i].orientation == "V" )
							{
								ThisWidth = 450;
								ThisHeight = 600;
							}
						else if  ( PictureList[i].orientation == "O" )
							{
								ThisWidth = PictureList[i].width;
								ThisHeight = PictureList[i].height;
							}
						else
							{
								ThisWidth = 600;
								ThisHeight = 450;
							}
						ThisCaption = PictureList[i].caption;
						ThisSimpleCaption = ThisCaption;
						ThisCaption = ThisCaption.replace( /\|\|(.*)$/, "<br /><span class='CaptionAddendum'>$1</span>" );
						ThisSimpleCaption = ThisSimpleCaption.replace( /\|\|(.*)$/, "" );
						LangCount = 1;
						while ( PictureList[i]["L" + LangCount] != null )
							{
								ThisReplaceLocation = new RegExp( "{{L" + LangCount + "}}" );
								
								ThisLangItem = LangBoxSeriesJ( PictureList[i]["L" + LangCount], true );
								ThisCaption = ThisCaption.replace( ThisReplaceLocation, ThisLangItem );
								
								ThisSimpleLangItem = LangBoxSimpleSeriesJ( PictureList[i]["L" + LangCount], true );
								ThisSimpleCaption = ThisSimpleCaption.replace( ThisReplaceLocation, ThisSimpleLangItem );
								
								LangCount++;
							}
						GroupTop = GroupTop + "<img id=\"" + IDJ + "_Top_" + i + "\" src=\"" + ThisFolder + "/" + PictureList[i].image + "\" width=\"" + parseInt( ThisWidth * PictureIconFactor ) + "\" height=\"" + parseInt( ThisHeight * PictureIconFactor ) + "\" title=\"" + ThisSimpleCaption + "\" onclick=\"ShowIndex( '" + IDJ + "', " + i + " )\" />";
						GroupMiddle = GroupMiddle + "<img id=\"" + IDJ + "_Middle_" + i + "\" src=\"" + ThisFolder + "/" + PictureList[i].image + "\" width=\"" + ThisWidth + "\" height=\"" + ThisHeight + "\" onclick=\"ShowIndex( '" + IDJ + "', " + (i + 1) + " )\" />";
						GroupCaption = GroupCaption + "<p id=\"" + IDJ + "_Caption_" + i + "\">" + ThisCaption + "</p>";
						GroupBottom = GroupBottom + "<img id=\"" + IDJ + "_Bottom_" + i + "\" src=\"" + ThisFolder + "/" + PictureList[i].image + "\" width=\"" + parseInt( ThisWidth * PictureIconFactor ) + "\" height=\"" + parseInt( ThisHeight * PictureIconFactor ) + "\" title=\"" + ThisSimpleCaption + "\" onclick=\"ShowIndex( '" + IDJ + "', " + i + " )\" />";
					}
			}
		
		PictureGroupText = "";
		if ( TitleJ != "" )
			{
				PictureGroupText = PictureGroupText + "<p class='PictureGroupTitle'>" + TitleJ + "</p>";
			}
		PictureGroupText = PictureGroupText + "<a name='" + IDJ + "Anchor' />";
		PictureGroupText = PictureGroupText + "<table class='PictureGroup' id='" + IDJ + "' >";
		PictureGroupText = PictureGroupText + "	<tr class='PictureGroupTop'>";
		PictureGroupText = PictureGroupText + "		<td>";
		PictureGroupText = PictureGroupText + GroupTop;
		PictureGroupText = PictureGroupText + "		</td>";
		PictureGroupText = PictureGroupText + "	</tr>";
		PictureGroupText = PictureGroupText + "	<tr class='PictureGroupMiddle'>";
		PictureGroupText = PictureGroupText + "		<td>";
		PictureGroupText = PictureGroupText + GroupMiddle;
		PictureGroupText = PictureGroupText + "		</td>";
		PictureGroupText = PictureGroupText + "	</tr>";
		PictureGroupText = PictureGroupText + "	<tr class='PictureGroupCaption'>";
		PictureGroupText = PictureGroupText + "		<td>";
		PictureGroupText = PictureGroupText + GroupCaption;
		PictureGroupText = PictureGroupText + "		</td>";
		PictureGroupText = PictureGroupText + "	</tr>";
		PictureGroupText = PictureGroupText + "	<tr class='PictureGroupBottom'>";
		PictureGroupText = PictureGroupText + "		<td>";
		PictureGroupText = PictureGroupText + GroupBottom;
		PictureGroupText = PictureGroupText + "		</td>";
		PictureGroupText = PictureGroupText + "	</tr>";
		PictureGroupText = PictureGroupText + "</table>";
		
		if (SaveOutput == true)
			{
				return PictureGroupText;
			}
		else
			{
				document.write(PictureGroupText);
			}
			
	}

function WritePictureFrameAndGroup ( IDJ, TitleJ, DefaultFolderJ, PictureList, SaveOutput )
	{
		WritePictureFrame ( IDJ + "Frame", false );
		PictureGroupText = WritePictureGroup ( IDJ + "Group", TitleJ, DefaultFolderJ, PictureList, true );
		$( "#" + IDJ + "Frame" ).html( PictureGroupText );
		$( "#" + IDJ + "Group .PictureGroupMiddle img" ).hide();
		$( "#" + IDJ + "Group .PictureGroupMiddle img:eq(0)" ).show();
		$( "#" + IDJ + "Group .PictureGroupCaption p" ).hide();
		$( "#" + IDJ + "Group .PictureGroupCaption p:eq(0)" ).show();
		$( "#" + IDJ + "Group .PictureGroupTop img" ).hide();
		$( "#" + IDJ + "Group .PictureGroupTop img:lt(0)" ).show();
		$( "#" + IDJ + "Group .PictureGroupBottom img" ).hide();
		$( "#" + IDJ + "Group .PictureGroupBottom img:gt(0)" ).show();
		
//		PictureGroupShrinkJ();
	}

function PictureGroupShrinkJ()
	{
		$(".ToShrink").each
			(
			 	function ()
					{
						NewWidthJ = this.width * 0.15;
						NewHeightJ = this.height * 0.15;
						$("#" + this.id).attr("width", NewWidthJ);
						$("#" + this.id).attr("height", NewHeightJ);
						$("#" + this.id).removeClass("ToShrink");
					}
			);
	}

function ShowIndex( PictureGroupJ, IndexJ )
	{
		MaxVal = $("#" + PictureGroupJ + " tr.PictureGroupTop td img").length - 1;
		if ( IndexJ <= MaxVal )
			{
				$("#" + PictureGroupJ + " .PictureGroupMiddle img").hide();
				$("#" + PictureGroupJ + " .PictureGroupMiddle img:eq(" + IndexJ + ")").show();
				$("#" + PictureGroupJ + " .PictureGroupCaption p").hide();
				$("#" + PictureGroupJ + " .PictureGroupCaption p:eq(" + IndexJ + ")").show();
				$("#" + PictureGroupJ + " .PictureGroupTop img").hide();
				$("#" + PictureGroupJ + " .PictureGroupTop img:lt(" + IndexJ + ")").show();
				$("#" + PictureGroupJ + " .PictureGroupBottom img").hide();
				$("#" + PictureGroupJ + " .PictureGroupBottom img:gt(" + IndexJ + ")").show();
				window.location.hash = PictureGroupJ + "Anchor";
			}
	}

function PictureListJ()
	{
		PictureList = "<div style='display:none'>\nIMAGES USED ON THIS PAGE:\n";
		$(".PictureGroupTop img").each
			(
			 	function ()
					{
						PictureList = PictureList + "\n" + $("#" + this.id).attr("src");
					}
			);
		PictureList = PictureList + "\n</div>";
		$("body").append( PictureList );
	}

function OnRequestEnd()
	{
		$(".dropnotetable td").each
			(
			 	function ()
					{
						ContentJ = $( this ).html();
						ContentJ = ContentJ.replace( /<i>/ig, "<span class='RomanText'>" );
						ContentJ = ContentJ.replace( /<\/i>/ig, "</span>" );
						$( this ).html( ContentJ );
					}
			);
	}

