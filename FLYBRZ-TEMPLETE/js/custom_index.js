$(document).ready(){function(){
	$("#fancybox").click(function() {
		$.fancybox.open([ {
			href : '../img/calendario_2015/01_2015.jpg',
			title : 'Janeiro'
		}, {
			href : '../img/calendario_2015/02_2015.jpg',
			title : 'Fevereiro'
		}, {
			href : '3_b.jpg'
		}
		],
		{
			helpers : {
				thumbs : {
					width: 75,
					height: 50
				}
			}
		});
	});
}};