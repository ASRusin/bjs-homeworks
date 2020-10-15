function isPalindrome (text){
    text = this;
    let textInverted = "";
    text = text.split(' ').join('');
    for (let i = text.length - 1; i >= 0; i--){
        textInverted += text[i];
    };                                    
    if (textInverted.toLocaleUpperCase() === text.toLocaleUpperCase()){
        return true;
    } else {
        return false;
    };
};

String.prototype.isPalindrome = isPalindrome;


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
