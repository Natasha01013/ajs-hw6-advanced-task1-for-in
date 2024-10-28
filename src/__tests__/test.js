import {orderByProps} from "../sort";

test('check the sorting of the object obj', () => {
    const obj = {
        name: 'мечник', 
        health: 10, 
        level: 2, 
        attack: 80, 
        defence: 40
    }
    const order = ["name", "level"];
    let f = orderByProps(obj, order);

    let result = [
        {key: "name", value: "мечник"}, 
        {key: "level", value: 2}, 
        {key: "attack", value: 80}, 
        {key: "defence", value: 40}, 
        {key: "health", value: 10} 
      ];

    expect(f).toEqual(result);
});

test('orderByProps handles order with non-existing keys', () => {
    const obj = {
        name: 'мечник', 
        health: 10
    };
    const order = ["name", "level", "attack"];
    let f = orderByProps(obj, order);
    
    let result = [
        { key: "name", value: "мечник" },
        { key: "health", value: 10 }
    ];

    expect(f).toEqual(result);
});