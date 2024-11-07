import { useState } from "react";
import { Dish } from "../types/Dish";

export function useLifegame(
    initialState: Dish,
    historyLength: number = 0
) {
    const [dish, setDish] = useState(initialState);
    const [history, setHistroy] = useState<ReadonlyArray<Dish>>([]);

    const next = () => {
        setDish(calculateNextDish(dish));
        setHistroy(history.concat(dish).slice(-historyLength));
    };

    return {
        dish: dish,
        next: undefined,
        history: history
    };
}

export function calculateNextDish(dish: Dish): Dish {
    const nextDish = dish.map((row, y, dish) => dish.map((cell, x) => {
            const livingCellsNumber = getNeighbors(dish, x, y).flat().filter(c => c).length - (cell ? 1 : 0);

            if(livingCellsNumber === 3) {
                // 誕生
                return true;
            }

            if(cell && (livingCellsNumber === 2 || livingCellsNumber === 3)) {
                // 生存
                return true;
            }

            // 過密 or 過疎
            return false;
        }));

    return nextDish;
}

export function getNeighbors(dish: Dish, x: number, y: number): Dish {
    const fineX = x - 1 < 0 ? 1 : x;
    const fineY = y - 1 < 0 ? 1 : y;

    return dish.slice(fineY - 1, y + 2).map(row => row.slice(fineX - 1, x + 2));
}
