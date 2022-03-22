
function StudentID(ID) {
	return studentRecords.find(function check(std_id){
		return(std_id.id==ID);
	});
	
}
function sortname(name1,name2){
	if (name1.name > name2.name)
	 return 1;
	else if (name1.name < name2.name) 
	return -1;
	else return 0;
};
function printRecord(info){
	console.log(info.name);
	console.log(info.id);
	if(info.paid)
	console.log("Paid");
	else
	console.log("Not Paid");
}
function printRecords(data) {
	var records = data.map(StudentID);
	records.sort(sortname);
	records.forEach(printRecord);
}


function search(info){
    return (info.paid && !currentEnrollment.includes(info.id));
}
function StudentID1(info){
	return info.id;
}
function paidStudentsToEnroll() {
	var pay=studentRecords.filter(search);
	var paidd = pay.map(StudentID1);

	return [ ...currentEnrollment, ...paidd ];
}
function Nopaid(studentId){
	return !StudentID(studentId).paid;
}
function remindUnpaid(recordIds) {
	var unpaidd = recordIds.filter(Nopaid);
	printRecords(unpaidd);
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
