import { sum , salariesSum , EmployeeSalaryType, maxPaidEmployee, MenuType, multiplyIfnumber, countBy, ClassNameType, addClass} from './homework';

describe('should return sum of numbers', () => {
  test('basic', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('should return sum of object properties', () => {
  test('should return 3000', () => {
    const salaries: EmployeeSalaryType = {
      'Вася Сидоров': 1000,
      'Петр Иванов': 500,
      'Денис Олегович Воронцов': 2500
    };
    expect(salariesSum(salaries)).toBe(650);
  });

    test('should return -170', () => {
    const salaries: EmployeeSalaryType = {
     'Вася Сидоров': 0,
     'Петя Кислов': -200,
      Даша: 30
    };
    expect(salariesSum(salaries)).toBe(-170);
  });

  test('should return 0', () => {
    const salaries: EmployeeSalaryType = {
    };
    expect(salariesSum(salaries)).toBe(0);
  });
});

describe('must return the name of the employee with the highest salary', () => {
  test('should return Денис Олег ович Воронцов', () => {
    const salaries: EmployeeSalaryType = {
      'Вася Сидоров': 1000,
      'Петр Иванов': 500,
      'Денис Олегович Воронцов': 2500
    };
    expect(maxPaidEmployee(salaries)).toBe('Денис Олегович Воронцов');
  });

    test('should return Даша', () => {
    const salaries: EmployeeSalaryType = {
      Даша: 2000,
     'Петя Кислов': 200,
     'Денис Олегович': 30
    };
    expect(maxPaidEmployee(salaries)).toBe('Даша');
  });

  test('should return нет сотрудников', () => {
    const salaries:EmployeeSalaryType = {
    };
    expect(maxPaidEmployee(salaries)).toBe('нет сотрудников');
  });
});

describe('must return the multiplied by 2 property if it is number', () => {
  test('multiplyIfnumber, example 1', () => {
    const menu: MenuType = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    expect(multiplyIfnumber(menu)).toEqual({
      width: 400,
      height: 600,
      title: 'My menu'
    });  

    test('multiplyIfnumber, example 2', () => {
    const menu: MenuType = {
      w: 200,
      description: 'standart window'
    };
    expect(multiplyIfnumber(menu)).toEqual({
      w: 400,
      description: 'standart window'
    });

    test('multiplyIfnumber, example 3', () => {
      const menu: MenuType = {
        w: 200.35,
        description: 'standart window',
        h: 230.5
      };  
      expect(multiplyIfnumber(menu)).toEqual({
        w: 400.7,
        description: 'standart window',
        h: 461
      });
    });

  describe('must return a list of length (n) with multiples of (x)', () => {
    test('countBy, example 1 ', () => {
      expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('countBy, example 2', () => {
      expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('must return class with a new string if it is not a duplicate string', () => {
    test('addClass, example 1', () => {
      const obj: ClassNameType = {
        className: 'open menu'
      };
      expect(addClass(obj, 'new')).toBe('open menu new');
    });

    test('addClass, example 2', () => {
      const obj: ClassNameType = {
        className: 'open menu'
      };
      expect(addClass(obj, 'open')).toBe('open menu');
    });

    test('addClass, example 3', () => {
      const obj: ClassNameType = {
        className: 'open menu'
      };
      expect(addClass(obj, 'ME')).toBe('open menu ME');
    });
  });