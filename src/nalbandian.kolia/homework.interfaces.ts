interface IDefaultObject {
    [key: string]: number;
}

interface IMixedObject {
    [key: string]: number | string;
}

interface  IClassName {
    className: string;
}

export {
    IDefaultObject,
    IMixedObject,
    IClassName
}