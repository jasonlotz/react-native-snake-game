import { Coordinate } from "../types/types";

const checkEatsFood = (
  head: Coordinate,
  food: Coordinate,
  area: number
): boolean => {
  const distanceBetweeenFoodAndSnakeX: number = Math.abs(head.x - food.x);
  const distanceBetweeenFoodAndSnakeY: number = Math.abs(head.y - food.y);

  return (
    distanceBetweeenFoodAndSnakeX < area && distanceBetweeenFoodAndSnakeY < area
  );
};

export default checkEatsFood;
