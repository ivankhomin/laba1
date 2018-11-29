  var name = "Іван";
  alert (name);
  var a = 21;
  var b = 4;
  var c = a - b;
  var d = 7;
  var variant_ = a;
  var result = c + d;
  alert	(result);
  var variant = prompt("Введіть свій варіант", 1);
  if (variant >= 7) {
  	alert ("Вірно");
  }
  else{
  	alert ("Не вірно");
  };
  if (a % 2 == 0) {
  	a = a + 7;
  }
  else{
  	a = a - 3;
  };
alert (a);

document.write('Квадрати чисел від 1 до ' + (variant_ + 10) + '<br>');


for (var i = 1; i <= variant_ + 10; i++) {
	document.write(i + ' = ' + i*i + '<br>');
}

document.write('Прості числа від 2 до ' + (variant_ + 10) + '<br>');

var count = 0;

for (var i = 2; i <= variant_ + 10; i++) {
	for (var p = 1; p <= variant_ + 10; p++) {
		if (i % p == 0) {
			count++
		}
	}
	if (count == 2) {
		count = 0;
		document.write(i + '<br>');
	}
	else{
		count = 0;
	}
}
