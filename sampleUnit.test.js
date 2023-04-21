const returnMax = require('./sampleUnit');

test('in dummy data, returns speaker(id = 4) as max', () => {
	sampleData = [
		{
			"id": "0",
			"name": "Mikasa VW200",
			"value": "73.43"
		},
		{
			"id": "1",
			"name": "Harry Potter and the Sorcerer's Stone",
			"value": "20.42"
		},
		{
			"id": "2",
			"name": "BIQ Pen 2-Pack",
			"value": "7.45"
		},
		{
			"id": "3",
			"name": "New Super Mario Bros Movie Ticket",
			"value": "9.78"
		},
		{
			"id": "4",
			"name": "Home Theater Speaker",
			"value": "456.21"
		},
		{
			"id": "5",
			"name": "Razer Mouse",
			"value": "85.90"
		},
	]
	expect(returnMax(sampleData)).toBe("4")
})

