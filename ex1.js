var StudentID = ID => studentRecords.find(std_id => std_id.id == ID);
var sortname=(name1,name2)=>name1.name>name2.name ? 1:name1.name<name2.name ? -1 : 0;
var printRecord=info=>console.log(`${info.name} (${info.id}): ${info.paid ? "Paid" : "Not Paid"}`)
var printRecords = data =>
	data.map(StudentID)
		.sort(sortname)
		.forEach(printRecord);

var paidStudentsToEnroll = () =>
	[ ...currentEnrollment,
		...(
			studentRecords.filter(info => (info.paid && !currentEnrollment.includes(info.id)))
			.map(info => info.id))
	];

function remindUnpaid(data) {
	return printRecords(
		data.filter(ID => !StudentID(ID).paid)
	);
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);