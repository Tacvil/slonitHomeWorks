function sumNumericFields(obj) {
    let sum = 0;
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        sum += obj[key];
      }
    }
    return sum;
  }
  
  function sortedNumericFields(obj) {
    let keys = [];
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        keys.push(key);
      }
    }
    keys.sort((a, b) => obj[b] - obj[a]);  // Сортируем по убыванию значений
    return keys;
  }

  const obj = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };

  console.log(sumNumericFields(obj)); 
  console.log(sortedNumericFields(obj)); 