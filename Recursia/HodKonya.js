console.log("Хай");

const doska = [
    11, 12, 13, 14, 15, 16,
    21, 22, 23, 24, 25, 26,
    31, 32, 33, 34, 35, 36,
    41, 42, 43, 44, 45, 46,
    51, 52, 53, 54, 55, 56,
    61, 62, 63, 64, 65, 66,
];

let GO = [];
const Masshod = [12, -8, 19, 21, -12, 8, -19, -21];

function KON(a) {
    if (doska.includes(a)) {
        GO.push(a);
        Restart(a);
    } else {
        console.log("Херню пишешь");
    }
}

function Restart(a) {
      
        let FirstVar = [];
        Masshod.forEach((k) => {
            if (
                doska.includes(a + k) &&
                !GO.includes(a + k) 
            ) {
                let d = a + k;
                FirstVar.push(d);
            }
        });
        console.log("first", FirstVar);

        let SecondVar = [];
        for (let i = 0; i < FirstVar.length; i++) {
            SecondVar[i] = [];
            for (let j = 0; j < Masshod.length; j++) {
                Masshod.forEach((k) => {
                    if (
                        doska.includes(FirstVar[i] + k) &&
                        !GO.includes(FirstVar[i] + k) &&
                        !SecondVar[i].includes(FirstVar[i] + k)
                    ) {
                        let g = FirstVar[i] + k;
                        SecondVar[i].push(g);
                    }
                });
            }
        }
        console.log("second", SecondVar);
        
        let minElement = Infinity;  // чтобы начальное значение было больше любого возможного числа элементов в массиве (мне надо это объяснить, я не до конца разабралась)
        let minIndex;             
        
        for (let i = 0; i < SecondVar.length; i++) {
            let currentLength;
        
            // Проверка, является ли массив пустым
            if (SecondVar[i].length === 0) {
                currentLength = Infinity;
            } else {
                currentLength = SecondVar[i].length;
            }
        
            if (currentLength < minElement) {
                minElement = currentLength;
                minIndex = i;
            }
        }

        if (minIndex !== undefined) {
            a = FirstVar[minIndex];
            GO.push(a);
            console.log("Следующий ход", a);
            console.log("Массив ответа:", GO);
            Restart(a);

        } else {
            // Фиксируем последний ход перед завершением
            GO.push(doska.find(item => !GO.includes(item)));
            console.log("УРА! ФИНИШ:", GO);
        }
    
}

KON(44);