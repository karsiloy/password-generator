let generate = document.querySelector(".generate");
let clear = document.querySelector(".clear");
let copy = document.querySelector(".copy");
let length = document.querySelector(".length");
let value = length.options[length.selectedIndex].value;
let symbols = document.querySelector(".symbols");
let numbers = document.querySelector(".numbers");
let lower = document.querySelector(".lower");
let upper = document.querySelector(".upper");
let password = document.querySelector(".password");

symb = [
	'@', '#', '$', '%'
];

nums = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 0
];

low = [
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

up = [
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const options = [];

for(var i = 0; i < symb.length; i++)
{
	options.push(symb[i]);
}

for(var i = 0; i < nums.length; i++)
{
	options.push(nums[i]);
}

for(var i = 0; i < low.length; i++)
{
	options.push(low[i]);
}

for(var i = 0; i < up.length; i++)
{
	options.push(up[i]);
}


symbols.addEventListener("change", function() {
	if(symbols.checked)
	{
		for(var i = 0; i < symb.length; i++)
		{
			options.push(symb[i]);
		}
			}
	else
	{
		for(var i = 0; i < symb.length; i++)
		{
			let index = options.indexOf(symb[i]);
			options.splice(index, 1);
		}
	}
});

numbers.addEventListener("change", function() {
	if(numbers.checked)
	{
		for(var i = 0; i < nums.length; i++)
		{
			options.push(nums[i]);
		}
	}
	else
	{
		for(var i = 0; i < nums.length; i++)
		{
			let index = options.indexOf(nums[i]);
			options.splice(index, 1);
		}
	}
});

lower.addEventListener("change", function() {
	if(lower.checked)
	{
		for(var i = 0; i < low.length; i++)
		{
			options.push(low[i]);
		}
			}
			else
			{
				for(var i = 0; i < low.length; i++)
				{
					let index = options.indexOf(low[i]);
					options.splice(index, 1);
				}
			}
});

upper.addEventListener("change", function() {
	if(upper.checked)
	{
		for(var i = 0; i < up.length; i++)
		{
			options.push(up[i]);
		}
	}
	else
	{
		for(var i = 0; i < up.length; i++)
		{
			let index = options.indexOf(up[i]);
			options.splice(index, 1);
		}
	}
});

clear.addEventListener("click", function() {
	password.setAttribute("value", "");
});

copy.addEventListener("click", function() {
	password.select();
	password.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(password.value);
});

length.addEventListener("change", function() {
	value = length.options[length.selectedIndex].value;
});

generate.addEventListener("click", function() {
	if(options.length == 0)
	{
		password.setAttribute("value", "You must select at least one character set!");
	}

	else
	{
		pass = "";
		for(let i = 0; i < value; i++)
		{
			let index = Math.floor((Math.random() * options.length-1) + 1);
			pass += options[index];
		}
		password.setAttribute("value", pass)
	}
});