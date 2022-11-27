function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem141(){
	var inputData = [{
		'distance': 10,
		'time': 60,
		},
		{
		'distance': 10,
		'time': 90,
		},
		{
		'distance': 10,
		'time': 60,
		},
		{
		'distance': 10,
		'time': 60,
		},
		{
		'distance': 10,
		'time': 60,
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {},

	    distance=parseInt(distance),
	    time=parseInt(time*60),
	    speed=((distance/time)*(18/5)),

	    question = {
		'type': 'single',
		'id': '041',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34',
		}
	
	return question;
	
}



function problem142(){
	var inputData = [{
		'distance': 60,
		'speed': 10
		},
		{
		'distance': 70,
		'speed': 20
		},
		{
		'distance': 30,
		'speed': 20
		},
		{
		'distance': 80,
		'speed': 40
		},
		{
		'distance': 10,
		'speed': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		speed = inputData[randomIndex]['speed'],
		time,
		question = {},

	distance=parseInt(distance),
	speed=parseInt(speed),
	time=distance/speed,

	question = {
		'type': 'single',
		'id': '014',
		'question': 'A train is coming in ' + speed + 'km/hr from north direction at ' + time + 'hr Calculate the time of the train.',
		'options': {
			'A': time,
			'B': Math.abs(time - parseInt(Math.random()*10)),
			'C': Math.abs(time + parseInt(Math.random()*10)),
			'D': Math.abs(time - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '34',
	}
	
	return question;
	
}

function problem143(){
	var inputData = [{
		'time': 60,
		'speed': 10
		},
		{
		'time': 20,
		'speed': 20
		},
		{
		'time': 30,
		'speed': 20
		},
		{
		'time': 40,
		'speed': 40
		},
		{
		'time': 20,
		'speed': 10
		}],
		
		randomIndex = getRandomNumber(inputData.length),
		time= inputData[randomIndex]['time'],
		speed = inputData[randomIndex]['speed'],
		distance,
		question = {},
		time=parseInt(time),
	speed=parseInt(speed),
	distance=speed*time,
	
	question = {
		'type': 'single',
		'id': '041',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time  +'sec. Calculate the distance of the train.',
		'options': {
			'A': distance,
			'B': distance - parseInt(Math.random()*10),
			'C': distance + parseInt(Math.random()*10),
			'D': distance - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
	}
	
	return question;
}


function problem144(){
	var inputData = [{
		'correctinput': 60,
		'wronginput': 10
		},
		{
		'correctinput': 20,
		'wronginput': 20
		},
		{
		'correctinput': 30,
		'wronginput': 20
		},
		{
		'correctinput': 40,
		'wronginput': 40
		},
		{
		'correctinput': 20,
		'wronginput': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		correctinput=inputData[randomIndex]['correctinput'],
		wronginput=inputData[randomIndex]['wronginput'],
	    errorpercentage,
		correctinput=parseInt(correctinput),
		wronginput=parseInt(wronginput),
		errorpercentage=(correctinput - wronginput)/correctinput,
		errorpercentage=errorpercentage*100,
		
		question = {
		'type': 'single',
		'id': '041',
		'question': 'A student multiplied a number by ' + wronginput + 'instead of '+correctinput+  'what is the percentage error in the calculation?',
		'options': {
			'A': errorpercentage,
			'B': errorpercentage - parseInt(Math.random()*10),
			'C': errorpercentage + parseInt(Math.random()*10),
			'D': errorpercentage - parseInt(Math.random()*10),
		},
		'answer': 'A',
		'author-id': '34',
	}
	
	return question;
}



function problem145(){
	var inputData = [{
		'costprice': 2000,
		'loss': 10
		},
		{
		'costprice': 5000,
		'loss': 10
		},
		{
		'costprice': 4000,
		'loss': 10
		},
		{
		'costprice': 8000,
		'loss': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		loss = inputData[randomIndex]['loss'],
		p,
		sellingprice,
		question = {};
		
	    p=(100-loss)/100;
		sellingprice=p*costprice;

	question = {
		'type': 'single',
		'id': '035',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice - parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice
		},
		'answer': 'D',
		'author-id': '34'
	}
	
	return question;
	
}


function problem146(){
	var inputData = [{
		'costprice': 1540,
		'profit': 25
		},
		{
		'costprice': 1740,
		'profit': 25
		},
		{
		'costprice': 1620,
		'profit': 25
		},
		{
		'costprice': 1840,
		'profit': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		profit = inputData[randomIndex]['profit'],
		p,
		sellingprice,
		question = {};
		
	    p=(100+profit)/100;
		sellingprice=p*costprice;

	question = {
		'type': 'single',
		'id': '346',
		'question': 'Ramesh bought a chai for RS ' + costprice + ' and sold it suressh ,if ramesh earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '35'
	}
	
	return question;
	
}

function problem147(){
	var inputData = [{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1660
		},
		{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1760
		},
		{
	    'A': 3,
		'B': 2,
		'C': 5,
		'total':1960
		},
		{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1560
		},
		{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1260
		}],
		randomIndex = getRandomNumber(inputData.length),
		A= inputData[randomIndex]['A'],
		B= inputData[randomIndex]['B'],
		C = inputData[randomIndex]['C'],
		total = inputData[randomIndex]['total'],
		add,
		cshare,
		question = {};
		
	    add=C/(A+B+C),
        cshare=add*total,
	question = {
		'type': 'single',
		'id': '347',
		'question': 'A:B:C is in ratio of ' + A + ':' + B + ':' + C + ' ,how much money will c get out of ' + total + '.',
		'options': {
			'A': cshare + parseInt(Math.random()*10),
			'B': cshare- parseInt(Math.random()*10),
			'C': cshare - parseInt(Math.random()*10),
			'D': cshare 
		},
		'answer': 'D',
		'author-id': '34'
	}
	
	return question;
	
}


function problem148(){
	var inputData = [{
		'costprice': 1540,
		'profit': 25
		},
		{
		'costprice': 1740,
		'profit': 25
		},
		{
		'costprice': 1620,
		'profit': 25
		},
		{
		'costprice': 1840,
		'profit': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		profit = inputData[randomIndex]['profit'],
		p,
		sellingprice,
		question = {};
		
	    p=(100+profit)/100;
		sellingprice=p*costprice;

	question = {
		'type': 'single',
		'id': '348',
		'question': 'Ramesh bought a chai for RS ' + costprice + ' and sold it suressh ,if ramesh earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
	}
	
	return question;
	
}

function problem149(){
	var inputData = [{
		'principle': 35000,
		'interest': 9,
		'years': 5
		},
		{
	    'principle': 35000,
		'interest': 6,
		'years': 5
		},
		{
	    'principle': 35000,
		'interest': 6,
		'years': 6
		},
		{
		'principle': 35000,
		'interest': 5,
		'years': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		principle= inputData[randomIndex]['principle'],
		interest= inputData[randomIndex]['interest'],
		years= inputData[randomIndex]['years'],
		x,
		S,
		question = {};
		
	    x=principle*interest*years;
		S=x/100;

	question = {
		'type': 'single',
		'id': '349',
		'question': 'If Suresh borrows Rs. ' + principle + ' from Mahesh at rate of interest ' + interest + ' S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': S + parseInt(Math.random()*10),
			'B': S - parseInt(Math.random()*10),
			'C': S,
			'D': S - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '34'
	}
	
	return question;
	
}

function problem1410(){
	var inputData = [{
		'costprice': 2000,
		'loss': 10
		},
		{
		'costprice': 5000,
		'loss': 10
		},
		{
		'costprice': 4000,
		'loss': 10
		},
		{
		'costprice': 8000,
		'loss': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		loss = inputData[randomIndex]['loss'],
		p,
		sellingprice,
		question = {};
		
	    p=(100-loss)/100;
		sellingprice=p*costprice;

	question = {
		'type': 'single',
		'id': '350',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice - parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice
		},
		'answer': 'D',
		'author-id': '34'
	}
	
	return question;
	
}


function problem1411(){
		var inputData = [{
		'manspeed': 15,
		'currentspeed': 1.5
		},
		{
		'manspeed': 15,
		'currentspeed': 4.5
		},
		{
		'manspeed': 15,
		'currentspeed': 3.5
		},
		{
		'manspeed': 15,
		'currentspeed': 2.5
		}],
		randomIndex = getRandomNumber(inputData.length),
		manspeed= inputData[randomIndex]['manspeed'],
		currentspeed= inputData[randomIndex]['currentspeed'],
		a,
		b,
		question = {};
		
		a=manspeed-currentspeed;
		b=a-currentspeed;

	question = {
		'type': 'single',
		'id': '351',
		'question': 'A man speed with the current is ' + manspeed + ' km/hr and the speed of the current is ' + currentspeed + ' km/hr. The mans speed against the current is',
		'options': {
			'A': b - parseInt(Math.random()*10),
			'B': b - parseInt(Math.random()*10),
			'C': b + parseInt(Math.random()*10),
			'D': b
		},
		'answer': 'D',
		'author-id': '34'
	}
	
	return question;
	
}


function problem1412(){
	var inputData = [{
		's1': 815,
		's2': 854,
		'y1': 3,
		'y2': 4
		},
		{
		's1': 815,
		's2': 854,
		'y1': 8,
		'y2': 5
		},
		{
		's1': 815,
		's2': 859,
		'y1': 5,
		'y2': 9
		},
		{
		's1': 815,
		's2': 853,
		'y1': 8,
		'y2': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		s1= inputData[randomIndex]['s1'],
		s2= inputData[randomIndex]['s2'],
		y1= inputData[randomIndex]['y1'],
		y2= inputData[randomIndex]['y2'],
		a,
		b,
		principal,
		question = {};
		
		a=s2-s1;
		b=a*y1;
		principal=s1-b;

	question = {
		'type': 'single',
		'id': '352',
		'question': 'A sum of money at simple interest amounts to Rs. ' + s1 + ' in ' + y1 + '  years and to Rs.' + s2 + ' in ' + y2 + ' years. The sum is:',
		'options': {
			'A': principal, 
			'B': principal - parseInt(Math.random()*10),
			'C': principal + parseInt(Math.random()*10),
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
	}
	
	return question;
	
}



function problem1413(){
		var inputData = [{
		's1': 15,
		's2': 4,
		'd': 35,
		},
		{
		's1': 85,
		's2': 4,
		'd': 3,
		},
		{
		's1': 15,
		's2': 8,
		'd': 3,
		},
		{
		's1': 13,
		's2': 4,
		'd': 68,
		}],
		randomIndex = getRandomNumber(inputData.length),
		s1= inputData[randomIndex]['s1'],
		s2= inputData[randomIndex]['s2'],
		d= inputData[randomIndex]['d'],
		speed,
		time,
		question = {};
		
		speed=s1+s2;
		time=d/speed;

	question = {
		'type': 'single',
		'id': '353',
		'question': 'A boat can travel with a speed of ' + s1 + ' km/hr in still water. If the speed of the stream is ' + s2 + 'km/hr, find the time taken by the boat to go ' + d + ' km downstream.',
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time - parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time
		},
		'answer': 'D',
		'author-id': '34'
	}
	
	return question;
	
}




function problem1414(){
	var inputData = [{
		'price1': 500,
		'price2': 15,
		's': 3
		},
		{
		'price1': 556,
		'price2': 54,
		's': 3.7
		},
		{
		'price1': 815,
		'price2': 54,
		's': 3.6
		},
		{
		'price1': 450,
		'price2': 81,
		's': 4.5
		}],
		randomIndex = getRandomNumber(inputData.length),
		price1= inputData[randomIndex]['price1'],
		price2= inputData[randomIndex]['price2'],
		s= inputData[randomIndex]['s'],
	    t,
		question = {};
		
		t=(100*price2)/(price1*s);

	question = {
		'type': 'single',
		'id': '354',
		'question': 'How much time will it take for an amount of Rs. ' + price1 + ' to yield Rs. ' + price2 + ' as interest at ' + s + '% per annum of simple interest?',
		'options': {
			'A': t- parseInt(Math.random()*10), 
			'B': t - parseInt(Math.random()*10),
			'C': t + parseInt(Math.random()*10),
			'D': t ,
		},
		'answer': 'D',
		'author-id': '34'
	}
	
	return question;
	
}


function problem1415(){
	var inputData = [{
		's1': 815,
		's2': 854,
		'y1': 3,
		'y2': 4
		},
		{
		's1': 815,
		's2': 854,
		'y1': 8,
		'y2': 5
		},
		{
		's1': 815,
		's2': 859,
		'y1': 5,
		'y2': 9
		},
		{
		's1': 815,
		's2': 853,
		'y1': 8,
		'y2': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		s1= inputData[randomIndex]['s1'],
		s2= inputData[randomIndex]['s2'],
		y1= inputData[randomIndex]['y1'],
		y2= inputData[randomIndex]['y2'],
		a,
		b,
		principal,
		question = {};
		
		a=s2-s1;
		b=a*y1;
		principal=s1-b;

	question = {
		'type': 'single',
		'id': '355',
		'question': 'A sum of money at simple interest amounts to Rs. ' + s1 + ' in ' + y1 + '  years and to Rs.' + s2 + ' in ' + y2 + ' years. The sum is:',
		'options': {
			'A': principal, 
			'B': principal - parseInt(Math.random()*10),
			'C': principal + parseInt(Math.random()*10),
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
	}
	
	return question;
	
}



function problem1416(){
	var inputData = [{
		'costprice': 1400,
		'loss': 85
		},
		{
		'costprice': 1740,
		'loss': 25
		},
		{
		'costprice': 1620,
		'loss': 25
		},
		{
		'costprice': 1840,
		'loss': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		loss = inputData[randomIndex]['loss'],
		sellingprice,
		question = {};
		
		sellingprice=(loss/100)*costprice;

	question = {
		'type': 'single',
		'id': '356',
		'question': 'A man buys a cycle for Rs' + costprice + ' and sells it at a loss of ' + loss + '%. What is the selling price of the cycle?',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
	}
	
	return question;
	
}


function problem1417(){
	var inputData = [{
		'costprice': 1400,
		'sellingprice': 1800
		},
		{
		'costprice': 1740,
		'sellingprice': 1900
		},
		{
		'costprice': 1620,
		'sellingprice': 2000
		},
		{
		'costprice': 1840,
		'sellingprice': 2100
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice=inputData[randomIndex]['costprice'],
		sellingprice=inputData[randomIndex]['sellingprice'],
		
	    profitpercentage,
		question = {},
		profit=(sellingprice-costprice)/costprice,
		profitpercentage=profit*100,
		
		question = {
		'type': 'single',
		'id': '357',
		'question': 'if man selling price is ' + sellingprice + ' and costprice '  + '%. What is the profitpercentage price of the cycle?',
		'options': {
			'A': profitpercentage, 
			'B': profitpercentage - parseInt(Math.random()*10),
			'C': profitpercentage + parseInt(Math.random()*10),
			'D': profitpercentage - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
		}
	
	return question;
	
}


function problem1418(){
	var inputData = [{
		'boatspeed': 14,
		'streamspeed': 12
		},
		{
		'boatspeed': 15,
		'streamspeed': 11
		},
		{
		'boatspeed': 13,
		'streamspeed': 10
		},
		{
		'boatspeed': 17,
		'streamspeed': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
		boatspeed=inputData[randomIndex]['boatspeed'],
		streamspeed=inputData[randomIndex]['streamspeed'],
		downstream,
		question={},
		downstream=boatspeed+streamspeed,
		
		question = {
		'type': 'single',
		'id': '358',
		'question': 'if the boat speed is ' + boatspeed + ' and stream speed  is'  + streamspeed+' what is downstream speed?',
		'options': {
			'A': downstream, 
			'B': downstream - parseInt(Math.random()*10),
			'C': downstream + parseInt(Math.random()*10),
			'D': downstream - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
		}
	
	return question;
}
	




function problem1419(){
	var inputData = [{
		'upstreamspeed': 14,
		'downstreamspeed': 12
		},
		{
		'upstreamspeed': 15,
		'downstreamspeed': 11
		},
		{
		'upstreamspeed': 9,
		'downstreamspeed': 10
		},
		{
		'upstreamspeed': 17,
		'downstreamspeed': 11
		}],
		randomIndex = getRandomNumber(inputData.length),
		upstreamspeed=inputData[randomIndex]['upstreamspeed'],
		downstreamspeed=inputData[randomIndex]['downstreamspeed'],
		streamspeed,
		question={},
		streamspeed=1/2*(downstreamspeed-upstreamspeed),
		
		question = {
		  'type': 'single',
		  'id': '359',
		  'question': 'if the upstreamspeed  is ' + upstreamspeed + ' and downstreamspeed  is'  + downstreamspeed+' what is boat speed?',
		  'options': {
			'A': streamspeed, 
			'B': streamspeed - parseInt(Math.random()*10),
			'C': streamspeed + parseInt(Math.random()*10),
			'D': streamspeed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
		}
	
	return question;
}





function problem1420(){
	var inputData = [{
		'upstreamspeed': 14,
		'downstreamspeed': 12
		},
		{
		'upstreamspeed': 15,
		'downstreamspeed': 11
		},
		{
		'upstreamspeed': 13,
		'downstreamspeed': 10
		},
		{
		'upstreamspeed': 17,
		'downstreamspeed': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
		upstreamspeed=inputData[randomIndex]['upstreamspeed'],
		downstreamspeed=inputData[randomIndex]['downstreamspeed'],
		boatspeed,
		question={},
		boatspeed=1/2*(upstreamspeed+downstreamspeed),
		
		question = {
		  'type': 'single',
		  'id': '360',
		  'question': 'if the upstreamspeed  is ' + upstreamspeed + ' and downstreamspeed  is'  + downstreamspeed+' what is boat speed?',
		  'options': {
			'A': boatspeed, 
			'B': boatspeed - parseInt(Math.random()*10),
			'C': boatspeed + parseInt(Math.random()*10),
			'D': boatspeed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '34'
		}
	
	return question;
}