import {SortStrategy} from "./sorting/SortStrategy";
import {BubbleSortStrategy} from "./sorting/BubbleSortStrategy";

declare let sortStrategy: SortStrategy

sortStrategy = new BubbleSortStrategy()
sortStrategy.sort()