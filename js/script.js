
//to get the number of contact information according to index.html list
 let contactList = Array.from( document.querySelectorAll(`li`));
 contactList.map(contactList => console.log(contactList));


 //getting the number of pages according to the contact list
 let numPages = Math.ceil(contactList.length/10);
 console.log(numPages);


 pages = document.querySelector('.pagination');
 // getting buttons at the end of index page
 let i;
 for(i=1; i<=numPages; i++){
    pages.innerHTML += '<button type="submit" name="button">' + i + '</button>';
 }

//only 10 contacts from contact list to be displayed
//contactList = Array.from( document.querySelectorAll(`li`));
document.querySelectorAll('li').innerHTML= "";  

currentPageno=1;
for(i=1; i<=10; i++){
    var item = (currentPageno -1)*10 + 1;
    document.querySelectorAll('li').innerHTML += '<div>' + contactList[item] + '</div>'; 
}

let buttons = Array.from(document.querySelectorAll('button'));
buttons.map(buttons => buttons.addEventListener('click', () => {
    currentPageno = this.innerHTML;
    for(i=1; i<10; i++){
        var item = (currentPageno -1)*10 + 1;
        document.querySelectorAll('li').innerHTML += contactList[item];
    }
}));



