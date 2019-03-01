interface IclassName {
    className: string;
}

var obj: IclassName = {
    className: 'open menu hello'
}

function addClass(obj, cls: string) {
    var classArr: string[] = obj.className.split(" ");
    var newClass: string;

    classArr.forEach(function(item: string){
        if(item == cls) {
            newClass = '';
        } else {
            newClass = cls;
        }
    });

    if(newClass) {
        classArr.push(newClass);
    }

    return obj.className = classArr.join(' ');
}

addClass(obj, 'new');

console.log(obj);
