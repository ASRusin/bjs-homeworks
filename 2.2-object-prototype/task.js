function isPalindrome (){    
    let textInverted = "";
    const text = this.split(' ').join('');
    for (let i = text.length - 1; i >= 0; i--){
        textInverted += text[i];
    };                                    
    return textInverted.toLocaleUpperCase() === text.toLocaleUpperCase();
        
};

String.prototype.isPalindrome = isPalindrome;


function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0;
    };
    let average = 0;
    for (let mark of marks){
        average += mark;
    };
    average = average / marks.length;
    const averageMark = Math.round(average);
    // код для задачи №2 писать здесь
    return averageMark
}

function checkBirthday(birthday) {
    const now = + new Date();
    const parsedBirthday = Date.parse(birthday);
    const diff = now - parsedBirthday;
    const year = 1000 * 60 * 60 * 24 * 365;
    const day = 1000 * 60 * 60 * 24;
    const age = (diff + 4 * day) / year;

    // код для задачи №3 писать здесь
    return age > 18;
    
}
