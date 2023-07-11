import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additions params', () => {
    const classes = 'class1 class2 class3';
    expect(classNames('class1', {}, ['class2', 'class3'])).toBe(classes);
  });

  test('with additions & mods', () => {
    const classes = 'class1 class2 class3 hovered';
    expect(classNames('class1', { hovered: true }, ['class2', 'class3'])).toBe(
      classes,
    );
  });

  test('with additions & mods (2 false mode)', () => {
    const classes = 'class1 class2 class3 hovered';
    expect(
      classNames('class1', { hovered: true, scroll: false }, [
        'class2',
        'class3',
      ]),
    ).toBe(classes);
  });

  test('with additions & mods (mode = undefined)', () => {
    const classes = 'class1 class2 class3 active';
    expect(
      classNames('class1', { hovered: undefined, active: true }, [
        'class2',
        'class3',
      ]),
    ).toBe(classes);
  });
});
