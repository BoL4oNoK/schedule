export const selectColor = (type) => {
  let color;
  const complexTaskName = type.toString().split(' ');
  if (complexTaskName[complexTaskName.length - 1] === 'task') {
    color = 'green';
  } else {
    switch(complexTaskName[0]) {
      case 'deadline':
        color = 'volcano';
        break;
      case 'codewars':
        color = 'blue';
        break;
      case 'test':
      case 'interview':
        color = 'darkgreen';
        break;
      default:
        color = 'lightgray';
        break;
    }
  }
  return color;
}