export function orderByProps(obj, order) {
    const result = [];

// Добавляем свойства в порядке, указанном в order 
    for (const key of order) {
        if (key in obj) {
            result.push({ key: key, value: obj[key] });
        }
    }

// Получаем оставшиеся свойства, которые не в order
    const remainingKeys = Object.keys(obj).filter(key => !order.includes(key));

// Сортируем оставшиеся свойства по алфавиту
    remainingKeys.sort();

// Добавляем оставшиеся свойства в result
    for (const key of remainingKeys) {
        result.push({ key: key, value: obj[key] });
    }

    return result;
}