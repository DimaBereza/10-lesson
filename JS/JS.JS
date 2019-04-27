var data = {
	defaultLanguage: 'en',
	dictionary:{
		en:{
			name: "Your name",
			namePlaceholder: "Input your name",
			gender: "Choose your gender",
			genderMale: "Male",
			genderFemale: "Female",
			countryWrapper: "Choose country where you live",
			countries:{
				en: "Englash",
				ua: "Ukraine",
				ru: "Rasha",
				us: "USA"
			},
			isShowBornContry: "Country of residence and country where you were born equal?",
			bornCountryWrapper: "Choose country where you born",
			email: "Your email",
			emailPlaceholder: "Input your email",
			buttonTExt: "Send"

		},
		ua:{
			name: "Ваше имя:",
			namePlaceholder: "Введите ваше имя",
			gender: "Ваш пол",
			genderMale: "М",
			genderFemale: "Ж",
			countryWrapper: "Выберите страну прожывания:",
			countries:{
				en: "Англия",
				ua: "Украина",
				ru: "Россия",
				us: "CША"
			},
			isShowBornContry: "Cтрану прожывания и страна где вы радились равны?",
			bornCountryWrapper: "Выберите страну где вы радились:",
			email: "Ваш email:",
			emailPlaceholder: "Введите email",
			buttonTExt: "Отправеть"


		}
	}
}
$(".lenguage-image").click(function(event) {
	var carrentLanguage = $(this).attr('data-lang')
	$(".lenguage-image").removeClass('active')
	$(this).addClass('active');
	console.log(carrentLanguage)
});
function setFormValue(){
	var dict = data.dictionary[currentLenguage]
	$("#name .description").text(dict.name)
	$("#name input").attr('placeholder',dict.namePlaceholder)
}
var  currentLenguage = data.defaultLanguage;
setFormValue();