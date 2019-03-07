import { IClassName, IDefaultObject, IMixedObject} from './homework.interfaces';
import * as Utils from './utils';

const getPropsSum: (inputObject: IDefaultObject) => number =
    (inputObject: IDefaultObject): number => {
        const keys: string[] = Object.keys(inputObject);
        let result: number = 0;

        keys.forEach((key: string) => {
            if (Object.prototype.hasOwnProperty.call(inputObject, key)) {
                result += inputObject[key];
            }
        });

        return result;
    };

const getPropWithHighestValue: (inputObject: IDefaultObject) => string =
    (inputObject: IDefaultObject): string => {
        const keys: string[] = Object.keys(inputObject);
        const valuesCollection: number[] = keys.map((key: string) => {
            if (Object.prototype.hasOwnProperty.call(inputObject, key)) {
                return inputObject[key];
            }

            return 0;
        });

        const indexOfHighestValue: number = valuesCollection.indexOf(Math.max(...valuesCollection));

        return indexOfHighestValue > -1 ? keys[indexOfHighestValue] : 'no employees';
    };

const multipleNumeric: (inputObject: IMixedObject) => IMixedObject =
    (inputObject: IMixedObject): IMixedObject => {
        const keys: string[] = Object.keys(inputObject);

        keys.forEach((key: string) => {
            if (Object.prototype.hasOwnProperty.call(inputObject, key)) {
                const value: number | string = inputObject[key];
                inputObject[key] = Utils.isNumeric(value) ? 2 * +value : value;
            }
        });

        return inputObject;
    };

const countBy: (value: number, length:number) => number[] =
    (value: number, length:number): number[] => {
        const result: number[] = [];
        let initialValue: number = value;

        for (let i: number = 0; i < length; i++) {
            result.push(initialValue);
            initialValue += value;
        }

        return result;
    };

const addClass: (inputObject: IClassName, cls: string) => object =
    (inputObject: IClassName, cls: string): object => {
        const classNames: string[] = inputObject.className.split(' ');

        if (classNames.indexOf(cls) === -1) {
            classNames.push(cls);
            inputObject.className = classNames.join(' ');
        }

        return inputObject;
    };

export {
    getPropsSum,
    getPropWithHighestValue,
    multipleNumeric,
    countBy,
    addClass
};