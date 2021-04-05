import {BubbleSortStrategy} from '../sorting/BubbleSortStrategy'
import {InsertionSortStrategy} from '../sorting/InsertionSortStrategy'
import {NativeSortStrategy} from '../sorting/NativeSortStrategy'
import {QuickSortStrategy} from '../sorting/QuickSortStrategy'

const sortable: number[] = [2, 3, 5, 8, 1, 4, 10, 9, 6, 7]
const sortedRight: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('sort', () => {
    it('bubble-sort', async () => {
        const bubble = new BubbleSortStrategy()
        expect(await bubble.sort(sortable)).toStrictEqual(sortedRight)
    })

    it('insertion-sort', async () => {
        const insertion = new InsertionSortStrategy()
        expect(await insertion.sort(sortable)).toStrictEqual(sortedRight)
    })

    it('native-sort', async () => {
        const native = new NativeSortStrategy()
        expect(await native.sort(sortable)).toStrictEqual(sortedRight)
    })

    it('quick-sort', async () => {
        const quick = new QuickSortStrategy()
        expect(await quick.sort(sortable)).toStrictEqual(sortedRight)
    })
});